import { IListState } from '@/interfaces/list';
import { IPostData } from '@/interfaces/post';
import { getPostEntries } from '@/assets/js/syncs/post';

type Mutations = {
  setLoadingStatus: (state: IListState, status: boolean) => void,
  setCurrentPage: (state: IListState, page: number) => void,
  successFetchLatestPosts: (state: IListState, data: any) => void,
};

const initialState: IListState = {
  latestPosts: {
    posts: [],
    total: 0,
    limit: 2,
    loading: false
  },
  pagination: {
    current: 1
  }
};

export const state = (): IListState => ({
  ...initialState
});

export const mutations: Mutations = {
  setLoadingStatus (state, status) {
    state.latestPosts.loading = status;
  },
  setCurrentPage (state, page) {
    state.pagination.current = page;
  },
  successFetchLatestPosts (state, data) {
    state.latestPosts = {
      ...state.latestPosts,
      ...data
    };
  }
};

export const actions = {
  fetchLatestPosts ({ commit }, param: { limit?: number, skip?: number }) {
    commit('setLoadingStatus', true);
    const type: string = String(process.env.CTF_BLOG_POST_TYPE_ID);
    return getPostEntries(type, param, (entries) => {
      const formatPosts : IPostData[] = entries.items
        .map((value: { sys: any; fields: any; }) => {
          const { sys, fields } = value;
          return {
            id: sys.id,
            title: fields.title,
            description: fields.description,
            body: fields.body,
            category: fields.categoryName,
            image: fields.thumb.fields.file.url,
            thumb: fields.thumb.fields.file.url,
            date: sys.createdAt
          };
        });
      commit('successFetchLatestPosts', {
        posts: formatPosts,
        loading: false,
        limit: param.limit ? param.limit : 2,
        total: entries.total
      });
    },
    () => {
      commit('setLoadingStatus', false);
      console.error();
    });
  }
};

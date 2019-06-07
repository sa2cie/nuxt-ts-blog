import { IPostState, IPostData } from '@/interfaces/post';
import { getPostEntry } from '@/assets/js/syncs/post';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

type Mutations = {
  setLoadingStatus: (state: IPostState, status: boolean) => void,
  successFetchPost: (state: IPostState, data: any) => void,
};

const initialState: IPostState = {
  data: {
    id: '',
    title: '',
    category: '',
    description: '',
    body: null,
    image: '',
    thumb: '',
    date: ''
  },
  loading: false
};

export const state = (): IPostState => ({
  ...initialState
});

export const mutations: Mutations = {
  setLoadingStatus (state, status) {
    state.loading = status;
  },
  successFetchPost (state, data) {
    state.data = {
      ...state.data,
      ...data
    };
  }
};

export const actions = {
  fetchPost ({ commit }, id) {
    commit('setLoadingStatus', true);
    return getPostEntry(id, (entry) => {
      const formatPost : IPostData = {
        id: entry.sys.id,
        title: entry.fields.title,
        description: entry.fields.description,
        body: documentToHtmlString(entry.fields.body),
        category: entry.fields.categoryName,
        image: entry.fields.thumb.fields.file.url,
        thumb: entry.fields.thumb.fields.file.url,
        date: entry.sys.createdAt
      };
      commit('successFetchPost', formatPost);
      commit('setLoadingStatus', false);
    });
  }
};

import { IGlobalState, IBreadCrumb, IMediaData } from '@/interfaces/global';
import { getPostEntries } from '@/assets/js/syncs/post';

type Mutations = {
  setBreadCrumbs: (state: IGlobalState, data: IBreadCrumb[]) => void,
  setRelatedMediasLoadingStatus: (state: IGlobalState, status: boolean) => void,
  successFetchRelatedMedias: (state: IGlobalState, data: any) => void,
};

const initialState: IGlobalState = {
  global: {
    breadcrumbs: [],
    sidebar: {
      relatedEntries: {
        entries: [],
        limit: 5,
        loading: false
      }
    }
  }
};

export const state = (): IGlobalState => ({
  ...initialState
});

export const mutations: Mutations = {
  setBreadCrumbs (state, data) {
    state.global.breadcrumbs = data;
  },
  setRelatedMediasLoadingStatus (state, status) {
    state.global.sidebar.relatedEntries.loading = status;
  },
  successFetchRelatedMedias (state, data) {
    state.global.sidebar.relatedEntries = {
      ...state.global.sidebar.relatedEntries,
      ...data
    };
  }
};

export const actions = {
  /**
   * fetchRelatedMedia
   * @param {Object} params リクエストパラメータ
   */
  fetchRelatedMedia ({ commit }, params: { limit?: number, skip?: number }) {
    commit('setRelatedMediasLoadingStatus', true);
    const type : string = String(process.env.CTF_BLOG_POST_TYPE_ID);
    return getPostEntries(type, params, (entries) => {
      const formatMedias : IMediaData[] = entries.items
        .map((value: { sys: any; fields: any; }) => {
          const { sys, fields } = value;
          return {
            id: sys.id,
            title: fields.title,
            category: fields.categoryName,
            image: fields.thumb.fields.file.url
          };
        });
      commit('successFetchRelatedMedias', {
        entries: formatMedias
      });
      setTimeout(() => { commit('setRelatedMediasLoadingStatus', false); }, 100);
    });
  }
};

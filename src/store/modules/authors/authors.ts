import { Commit } from 'vuex';
import { fetchAuthors } from '@/utils';
import {
  IData,
  IState,
  ACTIONS,
  GETTERS,
  MUTATIONS,
} from '.';

const module = {
  state: (): IState => ({ data: [], loading: true }),
  mutations: {
    [MUTATIONS.SET_AUTHORS_DATA]: (state: IState, payload: IData[]) => {
      state.loading = false;
      state.data = [...payload];
    },
  },
  getters: {
    [GETTERS.GET_AUTHOR_DATA]: (state: IState) => state.data,
    [GETTERS.GET_LOADING_AUTHORS_DATA]: (state: IState) => state.loading,
    [GETTERS.GET_AUTHORS_NAME]:
      (state: IState) => (idSearch: number) => state.data.filter(({ id }) => id === idSearch)[0].name,
  },
  actions: {
    [ACTIONS.FETCH_AUTHORS]: async ({ commit }: { commit: Commit }) => {
      const data = await fetchAuthors();
      commit(MUTATIONS.SET_AUTHORS_DATA, data);
    },
  },
};

export default module;

import { Commit } from 'vuex';
import { fetchLocation } from '@/utils';
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
    [MUTATIONS.SET_LOCATIONS_DATA]: (state: IState, payload: IData[]) => {
      state.loading = false;
      state.data = [...payload];
    },
  },
  getters: {
    [GETTERS.GET_LOCATIONS_DATA]: (state: IState) => state.data,
    [GETTERS.GET_LOADING_LOCATIONS_DATA]: (state: IState) => state.loading,
    [GETTERS.GET_LOCATION_NAME]:
      (state: IState) => (idSearch: number) => state.data.filter(({ id }) => id === idSearch)[0].location,
  },
  actions: {
    [ACTIONS.FETCH_LOCATIONS]: async ({ commit }: { commit: Commit }) => {
      const data = await fetchLocation();
      commit(MUTATIONS.SET_LOCATIONS_DATA, data);
    },
  },
};

export default module;

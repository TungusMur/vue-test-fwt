import { Commit } from 'vuex';
import { fetchPaintings } from '@/utils';
import {
  IData,
  IState,
  ACTIONS,
  GETTERS,
  MUTATIONS,
} from '.';

const module = {
  state: (): IState => ({ data: [], count: 0, loading: true }),
  mutations: {
    [MUTATIONS.SET_PAINTINGS_DATA]: (state: IState, payload: { data: IData[], count: string }) => {
      state.data = payload.data.map((item) => (
        { ...item, imageUrl: `https://test-front.framework.team${item.imageUrl}` }
      ));
      state.count = +payload.count;
      state.loading = false;
    },
  },
  getters: {
    [GETTERS.GET_PAINTINGS_DATA]: (state: IState) => state.data,
    [GETTERS.GET_LOADING_PAINTINGS_DATA]: (state: IState) => state.loading,
    [GETTERS.GET_COUNT_PAGE]: (state: IState) => Math.ceil(state.count / 12),
  },
  actions: {
    [ACTIONS.FETCH_PAINTINGS]: async (
      { commit }: { commit: Commit },
      data: {
        page: number,
        locationId?: string,
        authorId?: string,
        nameArt?: string,
        fromDate?: string,
        beforeDate?: string,
      },
    ) => {
      const {
        page,
        locationId,
        authorId,
        nameArt,
        fromDate,
        beforeDate,
      } = data;
      const responce = await fetchPaintings(page, locationId, authorId, nameArt, fromDate, beforeDate);
      commit(MUTATIONS.SET_PAINTINGS_DATA, responce);
    },
  },
};

export default module;

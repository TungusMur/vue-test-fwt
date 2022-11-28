/* eslint-disable no-shadow */
type IData = {
  author: string,
  created: string,
  id: number,
  imageUrl: string,
  location: string,
  name: string,
}

type IState = {
  data: IData[], count: number, loading: boolean
};

enum ACTIONS {
  FETCH_PAINTINGS = 'FETCH_PAINTINGS',
}

enum GETTERS {
  GET_PAINTINGS_DATA = 'GET_PAINTINGS_DATA',
  GET_COUNT_PAGE = 'GET_COUNT_PAGE',
  GET_LOADING_PAINTINGS_DATA = 'GET_LOADING_PAINTINGS_DATA'
}

enum MUTATIONS {
  SET_PAINTINGS_DATA = 'SET_PAINTINGS_DATA',
}

export {
  IData,
  IState,
  ACTIONS,
  GETTERS,
  MUTATIONS,
};

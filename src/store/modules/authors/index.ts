/* eslint-disable no-shadow */
type IData = {
  id: number,
  name: string
};

type IState = {
  data: IData[],
  loading: boolean
};

enum ACTIONS {
  FETCH_AUTHORS = 'FETCH_AUTHORS',
}

enum GETTERS {
  GET_AUTHOR_DATA = 'GET_AUTHOR_DATA',
  GET_LOADING_AUTHORS_DATA = 'GET_LOADING_AUTHORS_DATA',
  GET_AUTHORS_NAME = 'GET_AUTHORS_NAME',
}

enum MUTATIONS {
  SET_AUTHORS_DATA = 'SET_AUTHORS_DATA',
}

export {
  IData,
  IState,
  ACTIONS,
  GETTERS,
  MUTATIONS,
};

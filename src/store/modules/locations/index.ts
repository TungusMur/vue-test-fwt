/* eslint-disable no-shadow */
type IData = {
  id: number,
  location: string,
};

type IState = { data: IData[], loading: boolean };

enum ACTIONS {
  FETCH_LOCATIONS = 'FETCH_LOCATIONS',
}

enum GETTERS {
  GET_LOCATIONS_DATA = 'GET_LOCATIONS_DATA',
  GET_LOADING_LOCATIONS_DATA = 'GET_LOADING_LOCATIONS_DATA',
  GET_LOCATION_NAME = 'GET_LOCATION_NAME',
}

enum MUTATIONS {
  SET_LOCATIONS_DATA = 'SET_LOCATIONS_DATA',
}

export {
  IData,
  IState,
  ACTIONS,
  GETTERS,
  MUTATIONS,
};

import { createStore } from 'vuex';
import paintingsModule from './modules/paintings/paintings';
import authorsModule from './modules/authors/authors';
import locationsModule from './modules/locations/locations';

const store = createStore({
  modules: {
    paintingsModule,
    authorsModule,
    locationsModule,
  },
});

export default store;

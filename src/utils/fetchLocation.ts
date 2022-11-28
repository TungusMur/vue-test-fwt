import api from './api';

const fetchLocation = () => api.get('./locations').then((response) => response.data);

export default fetchLocation;

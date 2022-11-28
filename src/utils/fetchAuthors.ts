import api from './api';

const fetchAuthors = () => api.get('/authors').then((response) => response.data);

export default fetchAuthors;

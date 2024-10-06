import axios from 'axios';

const API_READ_ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDllNzFmZWYyNWQ1NWZkNGEyMTQzMzFhMDg3NDIzNyIsIm5iZiI6MTcyODIyNzE4MC44NTcxMjIsInN1YiI6IjY3MDJhNWJkNjdjNmZiMDlmZmY4ODM2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k5HxCvWfWNbW91pB3O_4cwnYNOlR6JD9rvWOPqp70Z8';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers = {
  authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
};

const TmdbAPI = {
  fetchTrendingMovies: async function () {
    return axios.get('/trending/movie/day');
  },
};

export default TmdbAPI;

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
  fetchMoviesByQuery: async function (query) {
    const config = {
      params: {
        query: query,
      },
    };
    return axios.get('/search/movie', config);
  },
  fetchMovieDetails: async function (id) {
    return axios.get(`/movie/${id}`);
  },
  fetchMovieReviews: async function (id) {
    return axios.get(`/movie/${id}/reviews`);
  },
  fetchMovieCredits: async function (id) {
    return axios.get(`/movie/${id}/credits`);
  },
};

export default TmdbAPI;

import css from './HomePage.module.css';

import { useEffect, useState } from 'react';

import toast from 'react-hot-toast';

import TmdbAPI from '../../api/tmdb-api';

import MovieList from '../../components/MovieList/MovieList';

const HomePage = ({ trending }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await TmdbAPI.fetchTrendingMovies();
        setMovies(response.data.results);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchTrending();
  }, []);

  return (
    <div className={css.home}>
      <h2>Trending Today</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;

import css from './MoviesPage.module.css';

import { useId, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { IoIosSearch } from 'react-icons/io';

import TmdbAPI from '../../api/tmdb-api';

import MovieList from '../../components/MovieList/MovieList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const queryValue = params.get('query') ?? '';
    if (!queryValue) {
      return;
    }

    const fetchMovies = async () => {
      try {
        const response = await TmdbAPI.fetchMoviesByQuery(queryValue);
        setMovies(response.data.results);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchMovies();
  }, [params]);

  const handleSearch = event => {
    event.preventDefault();

    const form = event.target;
    const { query } = form.elements;
    const queryValue = query.value;

    setMovies([]);

    if (!queryValue) {
      toast.error('Please enter your search request.');
      params.delete('query');
      setParams(params);
    } else {
      params.set('query', queryValue);
      setParams(params);
    }

    form.reset();
  };

  const searchFieldId = useId();
  return (
    <div className={css['movies-container']}>
      <form className={css.form} onSubmit={handleSearch}>
        <input
          className={css.search}
          id={searchFieldId}
          type="text"
          autoComplete="off"
          name="query"
        />
        <button type="submit" className={css['search-btn']}>
          <IoIosSearch size={22} />
          Search
        </button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;

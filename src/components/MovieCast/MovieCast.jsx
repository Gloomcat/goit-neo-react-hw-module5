import css from './MovieCast.module.css';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import TmdbAPI from '../../api/tmdb-api';

import toast from 'react-hot-toast';

const IMAGE_PREFIX = 'https://image.tmdb.org/t/p/w500';

const MovieCast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const fetchReviews = async () => {
      try {
        const response = await TmdbAPI.fetchMovieCredits(movieId);
        setCast(response.data.cast);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <ul className={css.cast}>
        {cast.map(actor => (
          <li className={css.actor} key={actor.id}>
            <img
              src={`${IMAGE_PREFIX}${actor.profile_path}`}
              alt={`${actor.name} portrait`}
              width={200}
            />
            <p>{actor.name}</p>
            <p>{actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;

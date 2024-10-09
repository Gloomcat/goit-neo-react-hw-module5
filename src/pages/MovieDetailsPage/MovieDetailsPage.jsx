import css from './MovieDetailsPage.module.css';

import { useState, useEffect, useRef, Suspense } from 'react';
import {
  useParams,
  useLocation,
  useNavigate,
  Link,
  Outlet,
} from 'react-router-dom';
import toast from 'react-hot-toast';

import TmdbAPI from '../../api/tmdb-api';

const IMAGE_PREFIX = 'https://image.tmdb.org/t/p/w500';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const location = useLocation();
  const backPath = useRef(location.state ?? '/movies');

  const navigate = useNavigate();

  const [details, setDetails] = useState(() => {
    return {
      poster: '',
      alt: '',
      title: '',
      score: 0,
      overview: '',
      genres: '',
    };
  });

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const fetchMovie = async () => {
      try {
        const response = await TmdbAPI.fetchMovieDetails(movieId);
        setDetails({
          poster: `${IMAGE_PREFIX}${response.data.poster_path}`,
          alt: `${response.data.title} poster`,
          title: `${response.data.title} (${new Date(
            response.data.release_date
          ).getFullYear()})`,
          score: Math.floor(response.data.vote_average * 10),
          overview: response.data.overview,
          genres: response.data.genres
            .map(genre => {
              return genre.name;
            })
            .join('  '),
        });
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchMovie();
  }, [movieId]);

  return (
    <div className={css.details}>
      <button
        className={css.back}
        type="button"
        onClick={() => navigate(backPath.current)}
      >
        Go Back
      </button>
      <div className={css.container}>
        <img
          className={css.poster}
          alt={details.alt}
          src={details.poster}
        ></img>
        <div className={css.values}>
          <h2>{details.title}</h2>
          <p>User Score: {details.score}%</p>
          <h3>Overview</h3>
          <p>{details.overview}</p>
          <h3>Genres</h3>
          <p>{details.genres}</p>
        </div>
      </div>
      <div className={css.additional}>
        <h4>Additional Information</h4>
        <ul className={css.links}>
          <li>
            <Link className={css.link} to={`/movies/${movieId}/cast`}>
              Cast
            </Link>
          </li>
          <li>
            <Link className={css.link} to={`/movies/${movieId}/reviews`}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div className={css.loader}></div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;

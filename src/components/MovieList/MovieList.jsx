import css from './MovieList.module.css';

import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <ul className={css['movie-list']}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={movie.id} className={css['movie-link']}>
            {movie.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

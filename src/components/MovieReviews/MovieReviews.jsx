import css from './MovieReviews.module.css';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import TmdbAPI from '../../api/tmdb-api';

import toast from 'react-hot-toast';

const MovieReviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const fetchReviews = async () => {
      try {
        const response = await TmdbAPI.fetchMovieReviews(movieId);
        setReviews(response.data.results);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <ul className={css.reviews}>
        {reviews.map(review => (
          <li key={review.id}>
            <h4 className={css.author}>Author: {review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;

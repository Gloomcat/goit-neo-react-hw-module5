import css from './App.module.css';

import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';

import TmdbAPI from '../../api/tmdb-api';

import Navigation from '../Navigation/Navigation';

import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

const App = () => {
  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await TmdbAPI.fetchTrendingMovies();
        console.log(response);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchTrending();
  }, []);

  return (
    <div className={css.container}>
      <Toaster position="top-right" />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;

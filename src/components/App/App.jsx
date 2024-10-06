import css from './App.module.css';

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Navigation = lazy(() => import('../../components/Navigation/Navigation'));
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));

const App = () => {
  return (
    <div className={css.container}>
      <Toaster position="top-right" />
      <Navigation />
      <Suspense fallback={<div className={css.loader}></div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          {/* <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
						<Route path='cast' element={<MovieCast />} />
						<Route path='reviews' element={<MovieReviews />} />
					</Route> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

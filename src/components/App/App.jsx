import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

const MovieDetails = lazy(() => import('../MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<AppBar />} />
      </Route>
    </Routes>
  );
};

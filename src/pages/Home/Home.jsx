import { useState, useEffect } from 'react';
import { PulseLoader } from 'react-spinners';

import MovieList from 'components/MovieList';
import { fetchTrendingMovie } from 'services/fetchMovieAPI';
import { STATUS } from 'services/constants';
import { Box } from 'components/Box';

export default function Home() {
  const [movies, setMovies] = useState();
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(STATUS.PENDING);
    fetchTrendingMovie()
      .then(data => {
        setMovies(data);
        setStatus(STATUS.RESOLVED);
      })
      .catch(err => {
        setStatus(STATUS.REJECTED);
        setError(err.message);
      });
  }, []);

  if (status === STATUS.PENDING) {
    return (
      <Box display="flex" pl={4} pt={2}>
        <PulseLoader size={10} color="#E51B36" />
      </Box>
    );
  }

  if (status === STATUS.RESOLVED) {
    return movies.length ? (
      <MovieList movies={movies} />
    ) : (
      <p>There isn't any movie on this page.</p>
    );
  }

  if (status === STATUS.REJECTED) {
    return <p>{error}</p>;
  }
}

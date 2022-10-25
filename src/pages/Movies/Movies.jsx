import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';

import { fetchMovieByKeyword } from 'services/fetchMovieAPI';
import SearchBar from 'components/SearchBar';
import MovieList from 'components/MovieList';
import { STATUS } from 'services/constants';
import { Box } from 'components/Box';

export default function Movies() {
  const [searchParams] = useSearchParams({ query: '' });
  const query = searchParams.get('query');
  const [movies, setMovies] = useState();
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState();

  useEffect(() => {
    if (query) {
      setError(null);
      setStatus(STATUS.PENDING);

      fetchMovieByKeyword(query)
        .then(data => {
          setMovies(data);
          setStatus(STATUS.RESOLVED);
        })
        .catch(err => {
          setStatus(STATUS.REJECTED);
          setError(err.message);
        });
    }
  }, [query]);

  return (
    <>
      <SearchBar />
      {status === STATUS.PENDING && (
        <Box display="flex" pl={5} pt={3}>
          <PulseLoader size={10} color="#E51B36" />
        </Box>
      )}
      <Box mt={3}>
        {status === STATUS.RESOLVED &&
          (movies.length ? (
            <MovieList movies={movies} />
          ) : (
            <p>There isn't any movie on this page.</p>
          ))}
      </Box>
      {status === STATUS.REJECTED && <p>{error}</p>}
    </>
  );
}

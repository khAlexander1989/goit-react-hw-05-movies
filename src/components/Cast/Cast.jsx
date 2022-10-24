import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PulseLoader } from 'react-spinners';

import { fetchMovieDetailsById } from 'services/fetchMovieAPI';
import FilmActorList from 'components/FilmActorList';
import { STATUS } from 'services/constants';
import { Box } from 'components/Box';

export default function Cast() {
  const { movieId } = useParams();
  const [movieCasts, setMovieCasts] = useState();
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    setStatus(STATUS.PENDING);

    fetchMovieDetailsById(movieId, 'credits')
      .then(details => {
        setMovieCasts(details.cast);
        setStatus(STATUS.RESOLVED);
      })
      .catch(err => {
        setStatus(STATUS.REJECTED);
        setError(err.message);
      });
  }, [movieId]);

  if (status === STATUS.PENDING) {
    return (
      <Box display="flex" justifyContent="center" pt={3}>
        <PulseLoader color="#E51B36" />
      </Box>
    );
  }

  if (status === STATUS.RESOLVED) {
    return movieCasts.length ? (
      <Box>
        <FilmActorList actors={movieCasts} />
      </Box>
    ) : (
      <Box pt={3}>We don't have any info about actors for this movie.</Box>
    );
  }

  if (status === STATUS.REJECTED) {
    return <p>{error}</p>;
  }
}

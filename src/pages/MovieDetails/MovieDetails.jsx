import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { PulseLoader } from 'react-spinners';
import { MdArrowBackIosNew } from 'react-icons/md';

import { fetchMovieDetailsById } from 'services/fetchMovieAPI';
import MovieCard from 'components/MovieCard';
import { GoBackBtn, Title, Link, Item } from './MovieDetails.styled';
import { STATUS } from 'services/constants';
import { Box } from 'components/Box';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setError(null);
    setStatus(STATUS.PENDING);

    fetchMovieDetailsById(movieId)
      .then(details => {
        setMovieDetails(details);
        setStatus(STATUS.RESOLVED);
      })
      .catch(err => {
        setStatus(STATUS.REJECTED);
        setError(err.message);
      });
  }, [movieId]);

  const prevPath = location.state?.from ?? '/movies';

  if (status === STATUS.PENDING) {
    return (
      <Box display="flex" justifyContent="center" pt={5}>
        <PulseLoader color="#E51B36" />
      </Box>
    );
  }

  if (status === STATUS.RESOLVED) {
    return (
      <Box as="main">
        <GoBackBtn
          type="button"
          onClick={() => navigate(prevPath)}
          aria-label="Go back button"
        >
          <MdArrowBackIosNew size="30" />
        </GoBackBtn>
        <MovieCard details={movieDetails} />
        <Box borderY="default" borderColor="borderPrimary" py={3}>
          <Title>Additional information</Title>
          <Box as="ul" display="Flex">
            <Item>
              <Link to="cast" state={{ from: prevPath }}>
                Cast
              </Link>
            </Item>
            <Item>
              <Link to="reviews" state={{ from: prevPath }}>
                Reviews
              </Link>
            </Item>
          </Box>
        </Box>
        <Suspense fallback={<p>Loading additionl information...</p>}>
          <Outlet />
        </Suspense>
      </Box>
    );
  }

  if (status === STATUS.REJECTED) {
    return <p>{error}</p>;
  }
}

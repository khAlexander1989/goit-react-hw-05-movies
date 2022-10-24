import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PulseLoader } from 'react-spinners';

import { fetchMovieDetailsById } from 'services/fetchMovieAPI';
import { Box } from 'components/Box';
import { Review, Author, Content } from './Reviews.styled';
import { STATUS } from 'services/constants';

export default function Reviews() {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState();
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState();

  useEffect(() => {
    setError(null);
    setStatus(STATUS.PENDING);

    fetchMovieDetailsById(movieId, 'reviews')
      .then(details => {
        setMovieReviews(details.results);
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
    return (
      <Box as="ul" px={1} py={3}>
        {movieReviews.length ? (
          movieReviews.map(({ id, content, author_details: { name } }) => (
            <Review key={id}>
              <Author>Author: {name}</Author>
              <Content>{content}</Content>
            </Review>
          ))
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </Box>
    );
  }

  if (status === STATUS.REJECTED) {
    return <p>{error}</p>;
  }
}

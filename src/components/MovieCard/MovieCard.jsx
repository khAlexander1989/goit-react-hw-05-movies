import PropTypes from 'prop-types';

import { Box } from 'components/Box';
import { Title, Label, Text, Poster } from './MovieCard.styled';
import noImage from './no-image.jpg';

export default function MovieCard({ details }) {
  const {
    poster_path = '',
    title = '',
    release_date = '',
    vote_average = '',
    overview = '',
    genres = [],
  } = details;

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w200${poster_path}`
    : noImage;
  const userScore = Math.round(vote_average * 10);
  const movieGenres = genres.map(genre => genre.name).join(', ');

  return (
    <Box display="flex" my={3}>
      <Poster src={posterUrl} alt={`${title} poster`} />
      <Box px={3}>
        <Title>
          {title} ({release_date.slice(0, 4)})
        </Title>
        <Text>
          <Label>User Score:</Label> {userScore}%
        </Text>
        <Text>
          <Label>Overview:</Label> {overview}
        </Text>
        <Text>
          <Label>Genres:</Label> {movieGenres}
        </Text>
      </Box>
    </Box>
  );
}

MovieCard.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
};

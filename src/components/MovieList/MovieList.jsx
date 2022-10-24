import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import MovieListItem from 'components/MovieListItem';
import { Item } from './MovieList.styled';

export default function MovieList({ movies }) {
  return (
    <Box as="ul">
      {movies.map(({ id, title }) => (
        <Item key={id}>
          <MovieListItem title={title} id={id} />
        </Item>
      ))}
    </Box>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { Link } from './MovieListItem.styled';

export default function MovieListItem({ id, title }) {
  const location = useLocation();
  const nextPath = location.pathname === '/' ? 'movies/' : '';

  return (
    <Link to={`${nextPath}${id}`} state={{ from: location }}>
      {title}
    </Link>
  );
}

MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

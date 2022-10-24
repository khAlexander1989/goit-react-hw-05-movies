import PropTypes from 'prop-types';
import FilmActorListItem from 'components/FilmActorListItem';
import { Container, Item } from './FilmActorList.styled';

export default function FilmActorList({ actors }) {
  return (
    <Container>
      {actors.map(({ id, name, character, profile_path }) => (
        <Item key={id}>
          <FilmActorListItem
            name={name}
            character={character}
            photo={profile_path ? profile_path : ''}
          />
        </Item>
      ))}
    </Container>
  );
}

FilmActorList.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_pathid: PropTypes.string,
    })
  ),
};

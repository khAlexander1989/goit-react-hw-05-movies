import PropTypes from 'prop-types';
import { Photo, InfoContainer, Text, Label } from './FilmActorListItem.styled';
import noPhoto from './noPhoto.jpg';

export default function FilmActorListItem({ name, character, photo }) {
  const photoUrl = photo ? `https://image.tmdb.org/t/p/w200${photo}` : noPhoto;

  return (
    <>
      <Photo src={photoUrl} alt={`${name}`}></Photo>
      <InfoContainer>
        <Text>{name}</Text>
        <Text>
          <Label>character: </Label> {character}
        </Text>
      </InfoContainer>
    </>
  );
}

FilmActorListItem.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

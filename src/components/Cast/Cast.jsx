import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchDataByID } from 'services/APIservice';
import { List, Item, Image, TextWrapper, Name, Content } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await fetchDataByID(movieId, 'credits');
        setCast(data.cast);
      } catch (error) {
        setError(error);
      }
    }
    getData();
  }, [movieId]);

  if (!cast) {
    return null;
  }

  const imgDefault =
    'https://pixabay.com/get/g8c1138565a78b547fa71678d08f599cbaad4f3a19cb4a9df05343dd74a430e66f1d6e0dcd85e02eaf38e9fe1eea19105cf39824c34461c1b1500882c40d32d2d_1280.jpg';
  return (
    <List key={movieId}>
      {cast.length !== 0 && error && <p>We don't have a cast for this movie</p>}
      {cast.map(({ id, name, character, profile_path }) => (
        <Item key={id}>
          <Image
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : { imgDefault }
            }
            alt={name}
            width="100"
            height="160"
          />
          <TextWrapper>
            <Name>{name}</Name>
            <Content>Character: {character}</Content>
          </TextWrapper>
        </Item>
      ))}
    </List>
  );
};

Cast.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      character: PropTypes.string,
      profile_path: PropTypes.string,
    })
  ),
};

export default Cast;

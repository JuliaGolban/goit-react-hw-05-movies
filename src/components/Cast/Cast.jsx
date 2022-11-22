import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchDataByID } from 'services/APIservice';
import { List, Item, Image, Name, Content } from './Cast.styled';

export const Cast = () => {
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

  return (
    <List key={movieId}>
      {error && <p>We don't have a cast for this movie</p>}
      {cast.map(({ id, name, character, profile_path }) => (
        <Item key={id}>
          <Image
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : 'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj'
            }
            alt={name}
            width="100"
          />
          <Name>{name}</Name>
          <Content>Character: {character}</Content>
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

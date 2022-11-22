import PropTypes from 'prop-types';
import { List, Item, Image, Name, Content } from './Cast.styled';

export const Cast = ({ movie }) => {
  const { profile_path } = movie.cast;
  const avatar = profile_path
    ? `https://image.tmdb.org/t/p/w500${profile_path}`
    : 'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj';
  return (
    <List key={movie.id}>
      {movie.cast.map(({ id, name, character }) => (
        <Item key={id}>
          <Image src={avatar} alt={name} width="100" />
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

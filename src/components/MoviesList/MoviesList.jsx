import { useLocation } from 'react-router-dom';
import { BsFillTrophyFill } from 'react-icons/bs';
import { List, Item, StyledLink } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(movie => (
        <Item key={movie.id}>
          <BsFillTrophyFill size={10} />
          <StyledLink to={`${movie.id}`} state={{ from: location }}>
            {movie.title}
          </StyledLink>
        </Item>
      ))}
    </List>
  );
};

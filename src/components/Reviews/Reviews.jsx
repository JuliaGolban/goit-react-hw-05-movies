import PropTypes from 'prop-types';
import { List, Item, Name, Content } from './Reviews.styled';

export const Reviews = ({ movie }) => {
  return (
    <List key={movie.id}>
      {movie.results.map(({ id, author, content }) => (
        <Item key={id}>
          <Name>{author}</Name>
          <Content>{content}</Content>
        </Item>
      ))}
    </List>
  );
};

Reviews.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};

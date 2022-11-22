import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchDataByID } from 'services/APIservice';
import { List, Item, Name, Content } from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await fetchDataByID(movieId, 'reviews');
        setReviews(data.results);
      } catch (error) {
        setError(error);
      }
    }
    getData();
  }, [movieId]);

  return (
    <List key={movieId}>
      {error && <p>We don't have any reviews for this movie</p>}
      {reviews.map(({ id, author, content }) => (
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

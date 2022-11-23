import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchData } from 'services/APIservice';
import { Container } from 'components/base/Container.styled';
import { Section } from 'components/base/Section.styled';
import { Title } from './Home.styled';

export const Home = () => {
  const [trends, setTrends] = useState([]);
  const [error, setError] = useState(null);
  const pathParams = 'trending/movie/day';

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await fetchData(pathParams);
        setTrends(data.results);
      } catch (error) {
        setError(error);
      }
    }
    getData();
  }, [trends]);

  return (
    <main>
      <Container>
        {!error ? (
          <Section>
            <Title> Trending today</Title>
            <MoviesList movies={trends} />
          </Section>
        ) : (
          <Section>
            <Title> Whoops, something went wrong</Title>
          </Section>
        )}
      </Container>
    </main>
  );
};

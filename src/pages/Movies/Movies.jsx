import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchData } from 'services/APIservice';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { MoviesList } from 'components/MoviesList/MoviesList';
import NotiflixLoading from '../../helpers/Loader/NotiflixLoading';
import NotifyMessages from '../../helpers/Messages/NotifyMessages';
import { Container } from 'components/base/Container.styled';
import { MoviesSection, Title } from './Movies.styled';

const notify = new NotifyMessages();
const loader = new NotiflixLoading();

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const pathParams = `search/movie?query=${searchQuery}`;

  useEffect(() => {
    if (searchQuery === '') return;

    async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(pathParams);

        setMovies(data.results);

        if (data.total_results === 0) {
          return notify.onFetchError();
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [pathParams, searchQuery]);

  const handleFormSubmit = searchQuery => {
    reset();
    setSearchQuery(searchQuery);
    updateQueryString(searchQuery);
  };

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const reset = () => {
    setSearchQuery('');
    setError(null);
    setIsLoading(false);
  };

  return (
    <main>
      <Container>
        <MoviesSection>
          <Searchbar onSubmit={handleFormSubmit} />
          {isLoading ? loader.onLoading() : loader.onLoaded()}
          {movies.length !== 0 && !error && <MoviesList movies={movies} />}
          {error && <Title> Whoops, something went wrong</Title>}
        </MoviesSection>
      </Container>
    </main>
  );
};

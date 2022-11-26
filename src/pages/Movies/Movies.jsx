import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchData } from 'services/APIservice';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { MoviesContainer, MoviesSection, Title } from './Movies.styled';
import ScrollToTop from '../../helpers/Scroll/ScrollToTop';
import NotiflixLoading from '../../helpers/Loader/NotiflixLoading';
import NotifyMessages from '../../helpers/Messages/NotifyMessages';

const notify = new NotifyMessages();
const loader = new NotiflixLoading();

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const pathParams = `search/movie?query=${searchQuery}`;

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showScroll, setShowScroll] = useState(false);

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

        setShowScroll(true);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    const handleScroll = () => {
      document.addEventListener('scroll', () => {
        const GOLDEN_RATIO = 0.5;
        document.documentElement.scrollTop > GOLDEN_RATIO
          ? setShowScroll(true)
          : setShowScroll(false);
      });
    };

    getData();
    handleScroll();
  }, [pathParams, searchQuery]);

  const handleFormSubmit = searchQuery => {
    reset();
    updateQueryString(searchQuery);
  };

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const reset = () => {
    setSearchParams('');
    setError(null);
    setIsLoading(false);
  };

  return (
    <main>
      <MoviesContainer>
        <MoviesSection>
          <Searchbar onSubmit={handleFormSubmit} />

          {isLoading ? loader.onLoading() : loader.onLoaded()}

          {movies.length > 0 && !error && <MoviesList movies={movies} />}

          {showScroll && movies.length > 0 && !isLoading && <ScrollToTop />}

          {error && <Title> Whoops, something went wrong</Title>}
        </MoviesSection>
      </MoviesContainer>
    </main>
  );
};

export default Movies;

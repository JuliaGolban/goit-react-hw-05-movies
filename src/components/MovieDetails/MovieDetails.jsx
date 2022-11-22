import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { fetchDataByID } from 'services/APIservice';
// import { fetchData } from 'services/APIservice';
import {
  Container,
  Box,
  Image,
  InfoWrapper,
  GoBack,
  Title,
  SubTitle,
  Description,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  const pathParams = `movies/${movieId}`;
  // const ID = Number(movieId);
  // const pathParams = `movies/${ID}`;

  useEffect(() => {
    async function getData() {
      try {
        // const { data } = await fetchData(pathParams);
        const { data } = await fetchDataByID(movieId);
        setMovie(data);
      } catch (error) {
        setError(error);
      }
    }
    getData();
  }, [movieId, pathParams]);

  if (!movie) {
    return null;
  }

  const { id, release_date, poster_path, title, popularity, genres, overview } =
    movie;

  let year = release_date.slice(0, 4);
  let path = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj';
  let userScore = popularity * 100;
  let name = [...genres.name].join(', ');
  return (
    !error && (
      <main>
        <Container>
          <GoBack to={backLinkHref} />
          <Box key={id}>
            <Image src={path} alt={title} loading="lazy" />
            <InfoWrapper>
              <Title>
                {title} ({year})
              </Title>
              <Description>User Score: {userScore}%</Description>
              <SubTitle>Overview</SubTitle>
              <Description>{overview}</Description>
              <SubTitle>Genres</SubTitle>
              <Description>{name}</Description>
            </InfoWrapper>
          </Box>
        </Container>
        <Container>
          <Description>Additional information</Description>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </Container>
      </main>
    )
  );
};

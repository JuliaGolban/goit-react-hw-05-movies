import { BackButton } from 'components/BackLink/BackLink';
import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { fetchDataByID } from 'services/APIservice';
import {
  Container,
  Box,
  Image,
  InfoWrapper,
  Title,
  SubTitle,
  Description,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await fetchDataByID(movieId);
        setMovie(data);
      } catch (error) {
        setError(error);
      }
    }
    getData();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const {
    id,
    release_date,
    poster_path,
    title,
    popularity,
    vote_average,
    genres,
    overview,
  } = movie;

  let year = release_date.slice(0, 4);
  let { name } = [genres.name];
  return (
    !error && (
      <main>
        <Container>
          <BackButton children="Go back" />
          <Box key={id}>
            <Image
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : 'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj'
              }
              alt={title}
              width="360"
              loading="lazy"
            />
            <InfoWrapper>
              <Title>
                {title} ({year})
              </Title>
              <Description>Vote average: {vote_average}</Description>
              <Description>Popularity: {Math.floor(popularity)}</Description>
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
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    )
  );
};

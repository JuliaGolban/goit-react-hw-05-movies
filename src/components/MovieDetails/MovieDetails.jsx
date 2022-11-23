import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { fetchDataByID } from 'services/APIservice';
import { BackButton } from 'components/BackLink/BackLink';
import {
  MovieContainer,
  BoxDetails,
  BoxAdditional,
  Image,
  InfoWrapper,
  Title,
  SubTitle,
  Description,
  Count,
  List,
  Item,
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
    vote_count,
    genres,
    overview,
  } = movie;

  let year = release_date.slice(0, 4);
  let { name } = [genres.name];
  return (
    !error && (
      <main>
        <MovieContainer>
          <BackButton children="Go back" />
          <BoxDetails key={id}>
            <Image
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : 'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj'
              }
              alt={title}
              width="240"
              height="360"
              loading="lazy"
            />
            <InfoWrapper>
              <Title>
                {title} ({year})
              </Title>
              <SubTitle>
                Vote / Votes:
                <Count>
                  {vote_average.toFixed(1)} / {vote_count}
                </Count>
              </SubTitle>
              <SubTitle>
                Popularity:
                <Count>{Math.floor(popularity).toLocaleString('ru')}</Count>
              </SubTitle>
              <SubTitle>Overview</SubTitle>
              <Description>{overview}</Description>
              <SubTitle>Genres</SubTitle>
              <Description>{name}</Description>

              <SubTitle>Additional information</SubTitle>
              <List>
                <Item to="cast">Cast</Item>
                <Item to="reviews">Reviews</Item>
              </List>
            </InfoWrapper>
          </BoxDetails>
          <BoxAdditional>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </BoxAdditional>
        </MovieContainer>
      </main>
    )
  );
};

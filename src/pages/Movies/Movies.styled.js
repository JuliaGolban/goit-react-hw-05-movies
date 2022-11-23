import styled from 'styled-components';
import { Section } from 'components/base/Section.styled';
import { Container } from 'components/base/Container.styled';

const MoviesContainer = styled(Container)`
  margin: 0 auto;
`;

const MoviesSection = styled(Section)`
  gap: 30px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 500;
  color: rgb(0, 0, 0);
`;

export { MoviesContainer, MoviesSection, Title };

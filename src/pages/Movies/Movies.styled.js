import styled from 'styled-components';
import { Section } from 'components/base/Section.styled';

const MoviesSection = styled(Section)`
  display: inline-grid;
  gap: 30px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 500;
  color: rgb(0, 0, 0);
`;

export { MoviesSection, Title };

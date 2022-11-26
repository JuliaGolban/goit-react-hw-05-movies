import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GoBack = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;

  font-family: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.33;
  color: #000;
  text-decoration: none;
  text-transform: uppercase;

  background-color: transparent;
  border: none;
  cursor: pointer;

  :hover,
  :focus {
    color: #fff;
  }
`;

export { GoBack };

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
  background-color: transparent;
  border: none;
  cursor: pointer;

  :hover,
  :focus {
    color: #3f93b9;
  }
`;

export { GoBack };

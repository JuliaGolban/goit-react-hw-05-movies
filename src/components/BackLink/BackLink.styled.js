import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GoBack = styled(Link)`
  display: inline-block;
  text-align: center;
  width: 150px;
  margin: 0 auto;
  padding: 5px;

  font-family: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
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

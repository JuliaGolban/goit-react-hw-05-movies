import styled from 'styled-components';
import { Link } from 'react-router-dom';

const List = styled.ul`
  display: inline-grid;
  gap: 10px;
`;
const Item = styled.li`
  display: flex;
  align-items: center;
  align-content: center;
  gap: 5px;
  font-size: 16px;
  font-weight: 500;
  color: rgb(0, 0, 0);

  > svg {
    fill: currentColor;
  }
  :hover > svg,
  :focus > svg {
    fill: #3f93b9;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  :hover,
  :focus {
    color: #3f93b9;
    text-decoration: underline;
  }
`;

export { List, Item, StyledLink };

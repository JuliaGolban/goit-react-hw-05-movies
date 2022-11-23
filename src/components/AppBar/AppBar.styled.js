import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Container } from 'components/base/Container.styled';

const HeaderContainer = styled(Container)`
  margin-left: 10px;

  @media screen and (min-width: 768px) {
    margin-left: 30px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 50px;
  }
`;
const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 30px;
  background-color: #3f93b933;
  border-bottom: 5px;
  box-shadow: 0px 7px 10px -2px rgba(132, 132, 132, 0.5);
`;

const Nav = styled.nav`
  display: flex;
  align-content: center;
  align-items: center;
  gap: 20px;
`;

const Link = styled(NavLink)`
  display: flex;
  align-content: center;
  align-items: center;
  gap: 3px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: rgb(0, 0, 0);
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  &.active {
    color: #3f93b9;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #3f93b9;
  }
`;

export { HeaderContainer, Header, Nav, Link };

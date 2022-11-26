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
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
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

  padding: 8px 10px;

  font-size: 16px;
  font-weight: 500;
  text-decoration: none;

  color: #fff;
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  &.active {
    color: #090979;
    background-color: #fff;
    box-shadow: 0px 7px 10px -2px rgba(132, 132, 132, 0.5) inset;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #090979;
    background-color: #fff;
    box-shadow: 0px 7px 10px -2px rgba(132, 132, 132, 0.5) inset;
  }
`;

export { HeaderContainer, Header, Nav, Link };

import { BsHouseDoorFill, BsFilm } from "react-icons/bs";
import { HeaderContainer, Header, Nav, Link } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <Header id="header">
      <HeaderContainer>
        <Nav>
          <Link to="/">
            <BsHouseDoorFill size="17" />
            Home
          </Link>
          <Link to="movies">
            <BsFilm size="13" />
            Movies
          </Link>
        </Nav>
      </HeaderContainer>
    </Header>
  );
};

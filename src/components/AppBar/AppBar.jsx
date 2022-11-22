import { Suspense } from 'react';
import { BsHouseDoorFill, BsFilm } from 'react-icons/bs';
import { Outlet } from 'react-router-dom';
import { Container, Header, Nav, Link } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <Link to="/">
            <BsHouseDoorFill size="17" />
            Home
          </Link>
          <Link to="/movies">
            <BsFilm size="13" />
            Movies
          </Link>
        </Nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

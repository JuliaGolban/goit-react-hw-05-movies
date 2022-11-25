import styled from 'styled-components';
import { Link } from 'react-router-dom';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  gap: 20px;

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 30px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 32px;
  }
`;

const Item = styled.li`
  padding: 10px;
  width: 100%;
  height: auto;
  background-color: #fff;
  border: 3px solid rgba(132, 132, 132, 0.5);
  border-radius: 4px;
  box-shadow: 0px 7px 10px -2px rgba(132, 132, 132, 0.5);
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  background-color: darkgray;

  @media screen and (min-width: 320px) {
    width: 240px;
  }
  @media screen and (min-width: 768px) {
    width: 170px;
  }
  @media screen and (min-width: 1280px) {
    width: 200px;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;

  :hover,
  :focus {
    color: #3f93b9;
    text-decoration: underline;
  }
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  @media screen and (min-width: 320px) {
    width: 150px;
  }
  @media screen and (min-width: 768px) {
    width: 170px;
  }
  @media screen and (min-width: 1280px) {
    width: 200px;
  }
`;

export { List, Item, Image, StyledLink, Name };

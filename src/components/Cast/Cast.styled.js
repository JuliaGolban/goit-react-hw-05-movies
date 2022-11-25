import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  gap: 15px;

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 20px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 32px 16px;
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  width: 100%;
  height: auto;
  border: 3px solid rgba(132, 132, 132, 0.5);
  border-radius: 4px;
  box-shadow: 0px 7px 10px -2px rgba(132, 132, 132, 0.5);

  @media screen and (min-width: 320px) {
    max-width: 180px;
  }
  @media screen and (min-width: 768px) {
    max-width: 200px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 230px;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;

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

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 100px;

  @media screen and (min-width: 320px) {
    max-width: 150px;
  }
  @media screen and (min-width: 768px) {
    max-width: 170px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 200px;
  }
`;

const Name = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

const Content = styled.p`
  font-size: 12px;
  font-weight: 400;
`;

export { List, Item, Image, TextWrapper, Name, Content };

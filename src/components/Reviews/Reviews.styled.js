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
    grid-auto-rows: 260px;
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 20px;
  }

  @media screen and (min-width: 1280px) {
    grid-gap: 32px 16px;
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  border: 3px solid rgba(132, 132, 132, 0.5);
  border-radius: 4px;
  box-shadow: 0px 7px 10px -2px rgba(132, 132, 132, 0.5);
`;

const Name = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

const Content = styled.p`
  font-size: 12px;
  font-weight: 400;
  font-style: italic;
  width: 240px;
  max-height: 100px;
  overflow-y: scroll;

  @media screen and (min-width: 320px) {
    width: 260px;
    max-height: 120px;
    overflow-y: scroll;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
  }

  @media screen and (min-width: 1280px) {
    width: 360px;
  }
`;

export { List, Item, Name, Content };

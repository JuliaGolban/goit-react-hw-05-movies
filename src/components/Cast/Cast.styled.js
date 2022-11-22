import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const Name = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

const Content = styled.p`
  font-size: 12px;
  font-weight: 400;
`;

export { List, Item, Image, Name, Content };

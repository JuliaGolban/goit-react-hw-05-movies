import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
  width: 100%;
  padding: 40px 12px 40px 12px;
  border-bottom: 2px solid rgba(132, 132, 132, 0.5);
`;

const Box = styled.div`
  display: flex;
  width: 100%;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const InfoWrapper = styled.div`
  max-width: 768px;
  margin-left: 20px;
  color: rgb(0, 0, 0);
`;

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

const Title = styled.h1`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

export {
  Container,
  Box,
  Image,
  InfoWrapper,
  GoBack,
  Title,
  SubTitle,
  Description,
};

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  max-width: 360px;
  height: 100%;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 768px;
  margin-left: 20px;
  color: rgb(0, 0, 0);
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 500;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
`;

const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

export { Container, Box, Image, InfoWrapper, Title, SubTitle, Description };

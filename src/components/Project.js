import React from 'react';
import styled from 'styled-components';

export default ({ title, description, tech, image, website, source }) => (
  <Container>
    <Title>{title}</Title>
  </Container>
);

const Container = styled.div`
  padding: 30px 0;
  flex: 0 0 30%;
  box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  margin-top: 2rem;
  text-align: center;
  min-height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-weight: 400;
`;

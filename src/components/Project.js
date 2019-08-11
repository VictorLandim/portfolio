import React from 'react';
import styled from 'styled-components';
import { TAB_PORT } from '../styles/responsive';

const Container = styled.div`
  box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  margin-top: 5rem;
  position: relative;
  /* background-image: url(${p => p.image}); */
  background-image: url('https://cdn.vox-cdn.com/thumbor/0JoGwYZlVVTVel21UVcXX29O-p0=/0x0:1000x1000/1200x800/filters:focal(420x420:580x580)/cdn.vox-cdn.com/uploads/chorus_image/image/60128889/Hinge_AppScreen1.0.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 28rem;
  overflow: hidden;
  flex: 0 0 48%;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .6);
    transition: .3s all;
  }

  &:hover:before {
    background: none;
  }

  @media ${TAB_PORT} {
    flex: 0 0 100%;

    &:before {
      background: none;
    }
  }
`;

const Title = styled.h2`
  color: ${p => p.theme.white};
  font-weight: 700;
  font-size: 4rem;
  font-family: monospace;
  width: 100%;
  z-index: 999;
  position: absolute;
  top: 2rem;
  left: 2rem;
  transition: 0.3s all;

  ${Container}:hover & {
    color: ${p => p.theme.primary};
    left: calc(20% + 2rem);
  }

  @media ${TAB_PORT} {
    left: calc(20% + 2rem);
    color: ${p => p.theme.primary};
  }
`;

const Info = styled.aside`
  background-color: rgba(255, 255, 255, 0.95);
  width: 80%;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  transform: translateX(100%);
  transition: 0.3s all;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  ${Container}:hover & {
    transform: translateX(0);
  }

  @media ${TAB_PORT} {
    transform: unset;
  }
`;

const Description = styled.p`
  font-size: 1.3rem;
  font-family: lato;
  margin-top: 5.5rem;
`;

const TechContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const Tech = styled.div`
  font-size: 1rem;
  color: ${p => p.theme.white};
  background-color: ${p => p.theme.primary};
  margin: 0.3rem;
  margin-left: 0;
  border: 1px solid ${p => p.theme.white};
  padding: 0.6rem 1rem;
  border-radius: 1.2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProjectButton = styled.a`
  background-color: ${p => {
    // if (p.disabled) return 'lightgray';
    if (p.inverted) return p.theme.white;
    return p.theme.primary;
  }};

  color: ${p => {
    if (p.inverted) return p.theme.primary;
    return p.theme.white;
  }};

  border-radius: 0.8rem;
  border: ${p => p.inverted && `1px solid ${p.theme.black}`};
  flex: 0 0 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
  transition: 0.3s all;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2rem;
  font-family: monospace;
  font-weight: bold;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  &:hover {
    ${p => !p.disabled && 'transform: translateY(-2px);'}
  }
`;

export default ({ title, description, tech = [], image, website, source }) => (
  <Container>
    <Title>{title}</Title>
    <Info>
      <Description>{description}</Description>
      <TechContainer>{tech && tech.map(t => <Tech>{t}</Tech>)}</TechContainer>
      <ButtonContainer>
        <ProjectButton href={source} target="_blank" disabled={Boolean(source)}>
          Source
        </ProjectButton>
        <ProjectButton inverted href={website} disabled={Boolean(website)} target="_blank">
          Live
        </ProjectButton>
      </ButtonContainer>
    </Info>
  </Container>
);

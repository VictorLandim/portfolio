import React from 'react'
import styled from 'styled-components'
import { FaGlobeAmericas, FaGithub } from 'react-icons/fa'

import { TAB_PORT, PHONE } from '../styles/responsive'

import phone from '../images/phone.jpg'

const Container = styled.div`
  box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.3);
  position: relative;
  background: #fff url(${p => p.image || phone});
  background-size: ${p => (p.isApp ? '150%' : 'cover')};
  background-position: ${p => (p.isApp ? 'center 5px' : 'center')};
  background-repeat: no-repeat;
  min-height: 28rem;
  overflow: hidden;
  /* flex: 0 0 50%; */
  flex: 0 0 48%;
  border-radius: 1rem;
  margin-bottom: 4rem;
  transition: 0.3s all;

  @media ${TAB_PORT} {
    flex: 0 0 100%;
  }

  @media ${PHONE} {
    min-height: 32rem;
  }

  &:before {
    content: ${'""'};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    transition: 0.3s all;
  }

  &:hover:before {
    background-color: rgba(0, 0, 0, 0);
  }

  &:hover {
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.4);
  }

  @media ${TAB_PORT} {
    &:before {
      background-color: rgba(0, 0, 0, 0);
    }
  }

  @media ${PHONE} {
    margin-top: 25rem;
    overflow: initial;
    background-image: none;

    &:before {
      top: -24.5rem;
      height: 25rem;
      background: red;
      background: ${p => p.theme.white} url(${p => p.image || phone});
      background-size: ${p => (p.isApp ? '150%' : 'contain')};
      background-position: ${p => (p.isApp ? 'center 5px' : 'center')};
      background-repeat: no-repeat;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.3);
    }

    &:hover {
      box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.3);
    }

    &:hover:before {
      background-color: ${p => p.theme.white};
    }
  }
`

const Title = styled.h2`
  color: ${p => p.theme.white};
  font-weight: 700;
  font-size: 2.8rem;
  font-family: monospace;
  width: 100%;
  z-index: 999;
  position: absolute;
  top: 2rem;
  left: 0;
  padding-left: 2rem;
  padding-bottom: 2rem;
  transition: 0.3s all;
  border-bottom: 2px solid currentColor;
  font-family: 'Roboto Mono', monospace;

  ${Container}:hover & {
    color: ${p => p.theme.primary};
    /* left: calc(20% + 2rem); */
    transform: translateX(20%);
  }

  @media ${TAB_PORT} {
    /* left: calc(20% + 2rem); */
    transform: translateX(20%);
    color: ${p => p.theme.primary};
  }

  @media ${PHONE} {
    transform: translateX(0);

    ${Container}:hover & {
      transform: translateX(0);
    }
  }
`

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
  border-left: 2px solid currentColor;
  /* box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.2); */

  ${Container}:hover & {
    transform: translateX(0);
  }

  @media ${TAB_PORT} {
    transform: unset;
  }

  @media ${PHONE} {
    width: 100%;
    border-left: none;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    background-color: ${p => p.theme.white};
  }
`

const Description = styled.p`
  font-size: 1.3rem;
  font-family: lato;
  margin-top: 7.5rem;
`

const TechContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`

const Tech = styled.div`
  font-size: 1rem;
  color: ${p => p.theme.white};
  background-color: ${p => p.theme.primary};
  margin: 0.3rem;
  margin-left: 0;
  border: 1px solid ${p => p.theme.white};
  padding: 0.6rem 1rem;
  border-radius: 1.2rem;
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ProjectButton = styled.a`
  background-color: ${p => {
    if (p.disabled) return p.theme.gray
    if (p.inverted) return p.theme.white
    return p.theme.primary
  }};

  opacity: ${p => p.disabled && '0.8'};

  cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};


  color: ${p => {
    if (p.inverted) return p.theme.primary
    return p.theme.white
  }};

  border-radius: 0.8rem;
  /* border: ${p => p.inverted && `1px solid ${p.theme.black}`}; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem 0rem;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
  transition: 0.3s all;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  min-width: 9rem;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  &:hover {
    ${p => !p.disabled && 'transform: translateY(-2px);'}
  }
`

export default ({ title, description, tech = [], image, website, source, isApp }) => (
  <Container image={image} isApp={isApp}>
    <Title>{title}</Title>
    <Info>
      <Description>{description}</Description>
      <TechContainer>{tech && tech.map(t => <Tech key={t}>{t}</Tech>)}</TechContainer>
      <ButtonContainer>
        <ProjectButton href={source} target="_blank" disabled={!source}>
          Source <FaGithub size={17} color={'#fff'} />
        </ProjectButton>
        <ProjectButton inverted href={website} disabled={!website} target="_blank">
          Live <FaGlobeAmericas size={17} color={'#202020'} />
        </ProjectButton>
      </ButtonContainer>
    </Info>
  </Container>
)

import styled from 'styled-components';
import { PHONE } from '../styles/responsive';

// import noiseBg from '../images/noise2.png';
import noiseBg from '../images/noise.svg';

export const Hero = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  background-color: white;

  @supports (mix-blend-mode: difference) {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #303030 url(${noiseBg});
      clip-path: polygon(0% 100%, 100% 0%, 100% 100%);
    }
  }

  @supports not (mix-blend-mode: difference) {
    background: linear-gradient(
      to bottom right,
      ${p => p.theme.primary} 0%,
      ${p => p.theme.primary} 50%,
      ${p => p.theme.white} 50%
    );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media ${PHONE} {
    &::before {
      content: none;
    }

    background: linear-gradient(
      to bottom right,
      ${p => p.theme.white} 0%,
      ${p => p.theme.white} 50%,
      ${p => p.theme.primary} 50%
    );
  }
`;

export const HeroText = styled.div`
  @media ${PHONE} {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: linear-gradient(
      to bottom right,
      ${p => p.theme.primary} 0%,
      ${p => p.theme.primary} 50%,
      ${p => p.theme.white} 50%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Title = styled.div`
  display: block;
  font-weight: bold;
  text-align: center;
  font-size: 12rem;

  @supports (mix-blend-mode: difference) {
    color: ${props => props.theme.white};
    mix-blend-mode: difference;
  }

  @media ${PHONE} {
    mix-blend-mode: unset;
    line-height: 0.9;
    margin-bottom: 4rem;
  }
`;

export const Subtitle = styled.div`
  text-align: center;
  font-size: 1.8rem;

  @supports (mix-blend-mode: difference) {
    color: ${props => props.theme.white};
    mix-blend-mode: difference;
  }

  @media ${PHONE} {
    mix-blend-mode: unset;
  }
`;

export const ExternalLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
  /* display: inline-block; */

  @supports (mix-blend-mode: difference) {
    color: ${props => props.theme.white};
    mix-blend-mode: difference;
  }

  @media ${PHONE} {
    mix-blend-mode: unset;
  }
`;

export const Section = styled.section`
  min-height: 100vh;
`;

export const Heading = styled.h2`
  position: relative;
  text-align: center;
  display: inline-block;
  padding-bottom: 0.7rem;
  font-size: 2.5rem;
  font-weight: 700;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 15rem;
    background-color: ${props => props.theme.black};
  }
`;

export const ProjectGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 3rem;
`;

export const InterestContainer = styled.div`
  display: flex;
  margin-top: 3rem;
  flex-wrap: wrap;
  justify-content: center;
`;

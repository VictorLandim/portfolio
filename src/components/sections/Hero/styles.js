import styled from 'styled-components'

import { PHONE } from '../../../styles/responsive'

import noiseBg from '../../../data/images/noise.svg'

export const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  background-color: #f6f6f6;

  @supports (mix-blend-mode: difference) {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #303030 url(${noiseBg});
      /* clip-path: polygon(0% 100%, 100% 0%, 100% 100%); */
      clip-path: polygon(0% 0%, 0% 100%, 100% 0%);
    }
  }

  @supports not (mix-blend-mode: difference) {
    background: linear-gradient(
      to bottom right,
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
      ${p => p.theme.primary} 50%,
      ${p => p.theme.lightGray} 50%
    );
  }
`

export const HeroText = styled.div`
  @media ${PHONE} {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: linear-gradient(
      to bottom right,
      ${p => p.theme.lightGray} 50%,
      ${p => p.theme.primary} 50%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

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
    font-size: 10rem;
  }
`

export const Subtitle = styled.div`
  text-align: center;
  font-size: 1.8rem;
  font-family: 'Roboto Mono', monospace;

  @supports (mix-blend-mode: difference) {
    color: ${props => props.theme.white};
    mix-blend-mode: difference;
  }

  @media ${PHONE} {
    mix-blend-mode: unset;
    padding: 0 5rem;

    & > br {
      display: none;
    }
  }

  a {
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
  }
`

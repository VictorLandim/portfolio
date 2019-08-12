import { createGlobalStyle } from 'styled-components'
import { TAB_LAND, TAB_PORT, LARGE_DESKTOP } from './responsive'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,500,700|Roboto+Mono:400,700|Major+Mono+Display&display=swap');

  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; // 1rem == 10px;
    /* Adjust font size */
    -webkit-text-size-adjust: 100%;
    /* Font varient */
    font-variant-ligatures: none;
    -webkit-font-variant-ligatures: none;
    /* Smoothing */
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;

    @media ${TAB_LAND} {
      /* width < 1200? */
      font-size: 56.25%; //1 rem = 9px, 9/16 = 50%
    }

    @media ${TAB_PORT} {
      /* width < 900? */
      font-size: 52%; //1 rem = 8px, 8/16 = 50%
    }

    @media ${LARGE_DESKTOP} {
      font-size: 75%; //1rem = 12, 12/16
    }
  }


  body {
    background-color: #fff;
    color: ${props => props.theme.primary};
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
  }

  ul {
    list-style-type: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-weight: normal;
  }
  
`

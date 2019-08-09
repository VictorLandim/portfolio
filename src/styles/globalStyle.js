import { createGlobalStyle } from 'styled-components';
import { TAB_LAND, TAB_PORT, LARGE_DESKTOP } from './responsive';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Karla|Lato:400,500,700');
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Libre+Caslon+Text:400,700&display=swap');

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; // 1rem == 10px;

    -webkit-font-smoothing: antialiased;

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
    color: ${props => props.theme.primary};
    font-family: 'Karla', sans-serif;
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

  
`;

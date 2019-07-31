import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Karla|Lato');

  :root {
    --primary-color: rebeccapurple;
    --white: #FFFAFF;
  }
  * {
    box-sizing: border-box;
  }
  html {
    font-family: lato;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    touch-action: manipulation;
  }

  *,*:before ,*:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    color: #303030;;
    font-family: lato;
  }
  img {
    max-width: 100%;
  }
  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }
`;

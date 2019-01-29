import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  * {
    box-sizing: inherit;
  }

  p, li {
    line-height: 1.7;
  }

  p, h1, h2, h3, h4, h5, h6 {
    a {
      color: #be000e;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default GlobalStyle;
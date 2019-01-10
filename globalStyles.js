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

  p a {
    color: #be000e;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default GlobalStyle;
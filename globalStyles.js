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

  p {
    line-height: 1.7;
  }
`;

export default GlobalStyle;
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  * {
    box-sizing: inherit;
  }
`;

export default GlobalStyle;
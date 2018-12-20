import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700');

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;
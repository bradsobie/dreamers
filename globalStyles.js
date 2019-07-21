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

  .prismic-content {
    h6 {
      margin: 0;
      a {
        background-color: #333;
        font-size: 16px;
        color: #fff;
        appearance: none;
        padding: 16px 24px;
        outline: none;
        margin: 0;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 600;
        display: inline-block;
        cursor: pointer;
        font-family: 'Montserrat',sans-serif;
        transition: background-color 0.15s;

        &:hover {
          background-color: #585858;
        }
      }
    }
  
    p, h1, h2, h3, h4, h5 {
      a {
        color: #be000e;
  
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  p, li {
    line-height: 1.7;
  }

  * {
    box-sizing: inherit;
  }
`;

export default GlobalStyle;
import { createGlobalStyle } from 'styled-components';

export const ResetCss = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Lato', sans-serif;
      color: black;
  }
  html, body {
      font-size: 62.5%;
      overflow-x: hidden;
      background-color: white;
  }
  button {
      cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`;

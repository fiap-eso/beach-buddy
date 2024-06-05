import { createGlobalStyle } from 'styled-components';

export const ResetCss = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Lato', sans-serif;
      color: #111;
  }
  html, body {
      font-size: 62.5%;
      overflow-x: hidden;
      background-color: #FBF9FF;
  }
  button {
      cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`;

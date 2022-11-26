import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0.23333333333333328) 35%, rgba(0,212,255,1) 100%);
  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

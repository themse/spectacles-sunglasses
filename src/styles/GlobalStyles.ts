import * as styled from 'styled-components';
import { normalize } from 'polished';

export const GlobalStyle = styled.createGlobalStyle`
  ${normalize()}

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-size: 1rem;
    font-family: 'EB Garamond', sans-serif;
    color: #171717;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

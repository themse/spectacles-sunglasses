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
    font-size: 1rem;
  }
`;

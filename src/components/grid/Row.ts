import styled from 'styled-components';

import { pxToRem } from 'styles/helpers';

export const Row = styled.div`
  margin: 0 -${pxToRem(25)};

  @media screen and (max-width: ${({ theme }): string => theme.screens.xl}) {
    margin: 0 -${pxToRem(15)};
  }

  @media screen and (max-width: ${({ theme }): string => theme.screens.sm}) {
    margin: 0 -${pxToRem(5)};
  }
`;

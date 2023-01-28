import styled from 'styled-components';

import { pxToRem } from 'styles/helpers';
import { marginX } from 'styles/mixins';

export const Row = styled.div`
  margin: 0 -${pxToRem(25)};

  @media screen and (max-width: ${({ theme }): string => theme.screens.xl}) {
    ${marginX(-15)};
  }

  @media screen and (max-width: ${({ theme }): string => theme.screens.sm}) {
    ${marginX(-5)};
  }
`;

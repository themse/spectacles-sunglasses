import styled from 'styled-components';

import { pxToRem } from 'styles/helpers';

export const ContainerFluid = styled.div`
  max-width: ${({ theme }): string => theme.screens.xxl};
  margin: 0 auto;
  padding: 0 ${pxToRem(25)};
  width: 100%;

  @media screen and (max-width: ${({ theme }): string => theme.screens.xl}) {
    padding: 0 ${pxToRem(15)};
  }

  @media screen and (max-width: ${({ theme }): string => theme.screens.sm}) {
    padding: 0 ${pxToRem(5)};
  }
`;

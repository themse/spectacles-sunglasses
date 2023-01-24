import { DefaultTheme } from 'styled-components';

import { pxToRem } from 'styles/helpers';

export const DEFAULT_FONT_SIZE = 16;

export const defaultTheme: DefaultTheme = {
  screens: {
    xxs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1830px',
  },

  colors: {},

  fontSize: {
    sm: pxToRem(12),
    md: pxToRem(14),
    lg: pxToRem(DEFAULT_FONT_SIZE),
    xl: pxToRem(20),
  },

  fontFace: {
    primary: {
      fontFamily: 'EB Garamond',
      fontWeight: 400,
      fontStyle: 'normal',
    },
    heading: {
      fontFamily: 'Libre Caslon Text',
      fontWeight: 700,
      fontStyle: 'normal',
    },
  },
};

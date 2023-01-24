import { DefaultTheme } from 'styled-components';

import { pxToRem } from 'styles/helpers';

export const DEFAULT_FONT_SIZE = 16;

export const defaultTheme: DefaultTheme = {
  screens: {
    mobile: '320px',
    desktop: '1240px',
  },

  colors: {},

  fontSize: {
    sm: '',
    md: '',
    lg: pxToRem(DEFAULT_FONT_SIZE),
    xl: '',
  },
};

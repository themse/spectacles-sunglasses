import { rem } from 'polished';

import { DEFAULT_FONT_SIZE } from 'styles/themes/themes';

export const pxToRem = (value: number): string => {
  return rem(value, DEFAULT_FONT_SIZE);
};

import { DefaultTheme, ThemeProps } from 'styled-components';
import { rem } from 'polished';

import { DEFAULT_FONT_SIZE } from 'styles/themes/themes';

export const pxToRem = (value: number): string => {
  return rem(value, DEFAULT_FONT_SIZE);
};

export const checkThemeColor =
  (props: ThemeProps<DefaultTheme>) =>
  (color: string): string =>
    color in props.theme.colors ? props.theme.colors[color] : color;

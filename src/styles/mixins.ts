import {
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemeProps,
  css,
} from 'styled-components';

import { pxToRem, checkThemeColor } from './helpers';

export const btnAsLink = css`
  border: 0;
  background: none;
  padding: 0;
  cursor: pointer;
`;

export const paddingX = (px: number): FlattenSimpleInterpolation => css`
  padding-left: ${pxToRem(px)};
  padding-right: ${pxToRem(px)};
`;

export const paddingY = (px: number): FlattenSimpleInterpolation => css`
  padding-top: ${pxToRem(px)};
  padding-bottom: ${pxToRem(px)};
`;

export const marginX = (px: number): FlattenSimpleInterpolation => css`
  margin-left: ${pxToRem(px)};
  margin-right: ${pxToRem(px)};
`;

export const marginY = (px: number): FlattenSimpleInterpolation => css`
  margin-top: ${pxToRem(px)};
  margin-bottom: ${pxToRem(px)};
`;

export const bgColor = (
  color: string
): FlattenInterpolation<ThemeProps<DefaultTheme>> => css`
  background-color: ${(props): string => checkThemeColor(props)(color)};
`;

export const borderX = ({
  color,
  style = 'solid',
  width = 1,
}: {
  color: string;
  style?: 'none' | 'solid';
  width?: number;
}): FlattenInterpolation<ThemeProps<DefaultTheme>> => css`
  border-left: ${width}px ${style}
    ${(props): string => checkThemeColor(props)(color)};
  border-right: ${width}px ${style}
    ${(props): string => checkThemeColor(props)(color)};
`;

export const borderY = ({
  color,
  style = 'solid',
  width = 1,
}: {
  color: string;
  style?: 'none' | 'solid';
  width?: number;
}): FlattenInterpolation<ThemeProps<DefaultTheme>> => css`
  border-top: ${width}px ${style}
    ${(props): string => checkThemeColor(props)(color)};
  border-bottom: ${width}px ${style}
    ${(props): string => checkThemeColor(props)(color)};
`;

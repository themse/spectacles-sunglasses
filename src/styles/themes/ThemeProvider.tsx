import { FC, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { defaultTheme } from './themes';

type Props = {
  children: ReactNode;
};

export const ThemeProvider: FC<Props> = ({ children }) => {
  return (
    <StyledThemeProvider theme={defaultTheme}>{children}</StyledThemeProvider>
  );
};

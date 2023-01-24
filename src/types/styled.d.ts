import 'styled-components';

import { FontFace } from 'styles/types';

declare module 'styled-components' {
  export interface DefaultTheme {
    screens: {
      xxs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };

    colors: Record<string, string>;

    fontSize: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    fontFace: {
      primary: FontFace;
      heading: FontFace;
    };
  }
}

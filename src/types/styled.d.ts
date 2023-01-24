import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    screens: {
      mobile: string;
      desktop: string;
    };

    colors: Record<string, string>;

    fontSize: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}

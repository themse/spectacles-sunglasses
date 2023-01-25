import { FC, useEffect } from 'react';
import WebFont from 'webfontloader';

import { GlobalStyle } from 'styles/GlobalStyles';
import { ThemeProvider } from 'styles/themes/ThemeProvider';
import { AppRoutes } from 'AppRoutes';

const App: FC = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Libre Caslon Text:400,700', 'EB Garamond:400'],
      },
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </>
  );
};

export default App;

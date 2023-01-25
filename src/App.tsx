import { FC, useEffect } from 'react';
import WebFont from 'webfontloader';

import { GlobalStyle } from 'styles/GlobalStyles';
import { ThemeProvider } from 'styles/themes/ThemeProvider';
import { AppRoutes } from 'AppRoutes';
import { SalesCollectionProvider } from 'context/sales-collection';

const App: FC = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Libre Caslon Text:400,700', 'EB Garamond:400'],
      },
    });
  }, []);

  return (
    <SalesCollectionProvider>
      <GlobalStyle />
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </SalesCollectionProvider>
  );
};

export default App;

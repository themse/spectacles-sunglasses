import { FC, useEffect } from 'react';
import WebFont from 'webfontloader';

import { GlobalStyle } from 'styles/GlobalStyles';
import { ThemeProvider } from 'styles/themes/ThemeProvider';
import { AppRoutes } from 'AppRoutes';
import { SalesCollectionProvider } from 'context/sales-collection';
import { GlassListProvider } from 'context/glass-list';

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
      <GlassListProvider>
        <GlobalStyle />
        <ThemeProvider>
          <AppRoutes />
        </ThemeProvider>
      </GlassListProvider>
    </SalesCollectionProvider>
  );
};

export default App;

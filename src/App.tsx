import { FC } from 'react';

import { GlobalStyle } from 'styles/GlobalStyles';
import { ThemeProvider } from 'styles/themes/ThemeProvider';
import { Home as HomePage } from 'app/Home';

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>
    </>
  );
};

export default App;

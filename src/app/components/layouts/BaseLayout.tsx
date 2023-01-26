import { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { Header } from './Header';

type Props = {
  children: ReactNode;
};

export const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: ${({ theme }): string => theme.screens.xxs};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Main = styled.main`
  margin-top: 60px;
  flex-grow: 1;
`;

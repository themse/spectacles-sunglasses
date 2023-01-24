import { FC, ReactNode } from 'react';

import { StyledWrapper } from './StyledWrapper';
import { Header } from './Header';
import { StyledMain } from './StyledMain';

type Props = {
  children: ReactNode;
};

export const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <StyledWrapper>
      <Header />
      <StyledMain>{children}</StyledMain>
    </StyledWrapper>
  );
};

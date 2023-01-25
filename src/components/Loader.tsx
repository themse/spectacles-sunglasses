import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

import { Spinner } from './icons/Spinner';

export const Loader: FC = () => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
};

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  color: ${(props): string => props.theme.colors.blue};
  width: 50px;
  height: 50px;
  margin: 0 auto;

  animation: ${rotation} 1s infinite linear;
`;

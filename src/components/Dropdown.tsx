import { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { pxToRem } from 'styles/helpers';
import { bgColor } from 'styles/mixins';

type Props = {
  trigger: ReactNode;
  children: ReactNode;

  isOpen?: boolean;
};

export const Dropdown: FC<Props> = ({ trigger, children, isOpen = false }) => {
  return (
    <Wrapper>
      {trigger}
      {isOpen && <Content>{children}</Content>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: inherit;
`;

const Content = styled.div`
  position: absolute;
  min-width: 120px;
  ${bgColor('white')};
  padding: ${pxToRem(15)};
  z-index: 99;
  border: 1px solid ${(props): string => props.theme.colors.dark};
  border-top: none;
  margin-top: 1px;
`;

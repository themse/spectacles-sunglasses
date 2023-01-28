import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ContainerFluid } from 'components/grid/ContainerFluid';
import { Logo } from '../Logo';
import { SidebarMenu } from '../SidebarMenu';
import { bgColor } from 'styles/mixins';

export const Header: FC = () => {
  return (
    <Wrapper>
      <ContainerFluid>
        <TopHeaderWrapper>
          <SidebarMenu />
          <Brand>
            <Link to="/">
              <Logo src="/logo.jpg" alt="Glasses Store" />
              <HiddenBrandLabel>Glasses Store</HiddenBrandLabel>
            </Link>
          </Brand>
        </TopHeaderWrapper>
      </ContainerFluid>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 99;
  border-bottom: 1px solid ${(props): string => props.theme.colors.dark};
  ${bgColor('white')}
`;

const Brand = styled.h1``;

const HiddenBrandLabel = styled.span`
  display: none;
`;

const TopHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 60px;

  ${Brand} {
    margin: auto;
  }

  button {
    width: 60px;
    transform: translateX(60px);
    margin-left: -60px;
  }
`;

import { FC } from 'react';
import styled from 'styled-components';

import { ContainerFluid } from 'components/grid/ContainerFluid';
import { Logo } from '../Logo';
import { SideMenu } from '../side-menu/SideMenu';
import { NavBar } from '../nav-bar/NavBar';

type Props = {};

export const Header: FC<Props> = ({}) => {
  const category = 'Spectacles women'; // TODO

  return (
    <Wrapper>
      <ContainerFluid>
        <TopHeaderWrapper>
          <SideMenu />
          <Brand>
            <LogoLink href="/">
              <Logo src="/logo.jpg" alt="Spectacles" />
              <HiddenBrandLabel>Spectacles</HiddenBrandLabel>
            </LogoLink>
          </Brand>
        </TopHeaderWrapper>
      </ContainerFluid>

      <NavBar category={category} />
    </Wrapper>
  );
};

const Wrapper = styled.header``;

const Brand = styled.h1``;

const HiddenBrandLabel = styled.span`
  display: none;
`;

const LogoLink = styled.a``;

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

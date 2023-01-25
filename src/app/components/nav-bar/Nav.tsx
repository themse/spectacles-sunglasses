import { FC } from 'react';
import styled from 'styled-components';

import { pxToRem } from 'styles/helpers';

const navigation: { href: string; title: string }[] = [
  {
    href: '#colour',
    title: 'Colour',
  },
  {
    href: '#shape',
    title: 'Shape',
  },
];

export const Nav: FC = () => {
  return (
    <StyledNav>
      <NavList>
        {navigation.map((navItem) => (
          <NavItem key={navItem.href}>
            <NavLink href={navItem.href}>
              <NavLabel>{navItem.title}</NavLabel>
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  height: 100%;
`;

const NavList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  list-style: none;
  padding: 0;
  margin: 0;
  height: inherit;
`;

const NavItem = styled.li`
  border-right: 1px solid ${(props): string => props.theme.colors.dark};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLink = styled.a``;

const NavLabel = styled.span`
  padding: ${pxToRem(15)};
  text-transform: uppercase;
`;

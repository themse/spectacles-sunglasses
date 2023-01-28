import { FC, useState } from 'react';
import styled from 'styled-components';

import { Dropdown } from 'components/Dropdown';
import { pxToRem } from 'styles/helpers';
import { PresentationLink } from 'components/PresentationLink';

const navigation: string[] = ['Colour', 'Shape'];

export const Nav: FC = () => {
  const [selectedNavItem, setSelectedNavItem] = useState<string>();
  const [showDropdown, setShowDropdown] = useState(false);

  const onShowDropdown = (navItem: string): void => {
    if (navItem === selectedNavItem) {
      setShowDropdown((prev) => !prev);
    } else {
      setSelectedNavItem(navItem);
      setShowDropdown(true);
    }
  };

  const hideDropdown = (): void => {
    setShowDropdown(false);
  };

  return (
    <StyledNav>
      <NavList>
        {navigation.map((navItem) => (
          <NavItem key={navItem} onMouseLeave={hideDropdown}>
            <Dropdown
              isOpen={selectedNavItem === navItem && showDropdown}
              trigger={
                <NavLink onClick={(): void => onShowDropdown(navItem)}>
                  <NavLabel>{navItem}</NavLabel>
                </NavLink>
              }
            >
              <p>Hello world</p>
            </Dropdown>
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

  @media screen and (max-width: ${(props): string => props.theme.screens.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  list-style: none;
  padding: 0;
  margin: 0;
  height: inherit;
`;

const NavItem = styled.li`
  border-right: 1px solid ${(props): string => props.theme.colors.dark};

  @media screen and (max-width: ${(props): string => props.theme.screens.lg}) {
    &:nth-child(2n) {
      border-right: none;
    }
  }
`;

const NavLink = styled(PresentationLink)`
  cursor: pointer;

  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;

const NavLabel = styled.span`
  display: block;
  padding: ${pxToRem(24)} ${pxToRem(15)}; // TODO improve spacing
  text-transform: uppercase;
`;

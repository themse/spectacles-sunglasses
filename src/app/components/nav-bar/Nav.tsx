import { FC, useState } from 'react';
import styled from 'styled-components';

import { Dropdown } from 'components/Dropdown';
import { pxToRem } from 'styles/helpers';
import { PresentationLink } from 'components/PresentationLink';
import { InputCheckbox } from 'components/form/InputCheckbox';
import { FilterField, useFilter } from 'app/hooks/useFilter';

const navigation = [
  {
    name: FilterField.COLOUR,
    options: ['black', 'tortoise', 'coloured', 'crystal', 'dark', 'bright'],
  },
  {
    name: FilterField.SHAPE,
    options: ['square', 'rectangle', 'round', 'cat-eye'],
  },
];

export const Nav: FC = () => {
  const [selectedNavItem, setSelectedNavItem] = useState<string>();
  const [showDropdown, setShowDropdown] = useState(false);

  const { selectedColorList, selectedShapeList, onFilterSelect } = useFilter();

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
        {navigation.map(({ name, options }) => (
          <NavItem key={name} onMouseLeave={hideDropdown}>
            <Dropdown
              isOpen={selectedNavItem === name && showDropdown}
              trigger={
                <NavLink onClick={(): void => onShowDropdown(name)}>
                  <NavLabel>{name}</NavLabel>
                </NavLink>
              }
            >
              {options.map((option) => {
                let isChecked = false;

                if (name === FilterField.COLOUR) {
                  isChecked = selectedColorList.has(option);
                } else if (name === FilterField.SHAPE) {
                  isChecked = selectedShapeList.has(option);
                }

                return (
                  <InputCheckbox
                    key={option}
                    name={option}
                    onChange={(): void => onFilterSelect(name, option)}
                    isChecked={isChecked}
                    label={option}
                  />
                );
              })}
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
  padding: ${pxToRem(24)} ${pxToRem(15)}; // TODO improve spacing, bug on tablet
  text-transform: uppercase;
`;

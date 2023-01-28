import { FC, useState } from 'react';
import styled from 'styled-components';

import { bgColor } from 'styles/mixins';
import { MenuItem, MenuItemLabel, StyledArrowRightIcon } from './SidebarMenu';
import { ObjectEntries } from 'types/helpers';
import { SalesCollectionItem } from 'context/sales-collection/types';
import { SubMenuList } from './SubMenuList';
import { useSalesCollection } from 'context/sales-collection';
import { PresentationLink } from 'components/PresentationLink';

type Props = {
  onClick: () => void;
  onMouseLeave: () => void;
};

export const MenuList: FC<Props> = ({ onClick, onMouseLeave }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [showSubMenu, setShowSubMenu] = useState(false);

  const { salesCollection } = useSalesCollection();

  const onShowSubMenu = (category: string): void => {
    if (selectedCategory !== category) {
      setShowSubMenu(true);
    } else {
      setShowSubMenu((prev) => !prev);
    }

    setSelectedCategory(category);
  };

  const hideSubMenu = (): void => {
    setShowSubMenu(false);
  };

  return (
    <StyledMenuList onMouseLeave={onMouseLeave}>
      {(
        Object.entries(salesCollection) as ObjectEntries<{
          [key: string]: SalesCollectionItem[];
        }>
      ).map(([category, collection]) => {
        const isSelected = showSubMenu && selectedCategory === category;

        return (
          <li key={category}>
            <PresentationLink onClick={(): void => onShowSubMenu(category)}>
              <MenuItem>
                <MenuItemLabel>{category}</MenuItemLabel>
                <StyledArrowRightIcon />
              </MenuItem>
            </PresentationLink>
            {collection.length > 0 && isSelected && (
              <SubMenuList
                collection={collection}
                onClick={onClick}
                onMouseLeave={hideSubMenu}
                onGoBack={hideSubMenu}
              />
            )}
          </li>
        );
      })}
      <li>
        <PresentationLink>
          <MenuItem>
            <MenuItemLabel>Home try on</MenuItemLabel>
          </MenuItem>
        </PresentationLink>
      </li>
      <li>
        <PresentationLink>
          <MenuItem>
            <MenuItemLabel>Pair for pair</MenuItemLabel>
          </MenuItem>
        </PresentationLink>
      </li>
    </StyledMenuList>
  );
};

const StyledMenuList = styled.ul`
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  min-width: 300px;
  height: 100%;
  z-index: 99;
  border-top: 1px solid ${(props): string => props.theme.colors.dark};
  border-right: 1px solid ${(props): string => props.theme.colors.dark};
  ${bgColor('white')};
`;

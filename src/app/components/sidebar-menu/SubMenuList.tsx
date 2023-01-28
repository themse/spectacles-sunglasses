import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { MenuItem } from './SidebarMenu';
import { SalesCollectionItem } from 'context/sales-collection/types';

type Props = {
  collection: SalesCollectionItem[];

  onClick: () => void;
  onMouseLeave: () => void;
};

export const SubMenuList: FC<Props> = ({
  collection,
  onClick,
  onMouseLeave,
}) => {
  return (
    <StyledSubMenuList onMouseLeave={onMouseLeave}>
      {collection.map((item) => (
        <li key={item.id}>
          <Link to={`/collections/${item.slug}`} onClick={onClick}>
            <MenuItem>{item.sex}</MenuItem>
          </Link>
        </li>
      ))}
    </StyledSubMenuList>
  );
};

const StyledSubMenuList = styled.ul`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 300px;
  @media screen and (max-width: 620px) {
    left: 0;
  }

  width: 300px;
  border-right: 1px solid ${(props): string => props.theme.colors.dark};
`;

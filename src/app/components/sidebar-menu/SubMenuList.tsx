import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { MenuItem, MenuItemLabel } from './SidebarMenu';
import { SalesCollectionItem } from 'context/sales-collection/types';
import { ArrowRight as ArrowRightIcon } from 'components/icons/ArrowRight';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { PresentationLink } from 'components/PresentationLink';

type Props = {
  collection: SalesCollectionItem[];

  onClick: () => void;
  onMouseLeave: () => void;
  onGoBack: () => void;
};

export const SubMenuList: FC<Props> = ({
  collection,

  onClick,
  onMouseLeave,
  onGoBack,
}) => {
  const showBackLink = useMediaQuery('(max-width: 620px)');

  return (
    <StyledSubMenuList onMouseLeave={onMouseLeave}>
      {showBackLink && (
        <li>
          <BackLink onClick={onGoBack}>
            <MenuItem>
              <StyledArrowLeftIcon />
              <MenuItemLabel>Go back</MenuItemLabel>
            </MenuItem>
          </BackLink>
        </li>
      )}
      {collection.map((item) => (
        <li key={item.id}>
          <Link to={`/collections/${item.slug}`} onClick={onClick}>
            <MenuItem>
              <MenuItemLabel>{item.sex}</MenuItemLabel>
            </MenuItem>
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
  z-index: 100;

  width: 300px;
  border-right: 1px solid ${(props): string => props.theme.colors.dark};
`;

const StyledArrowLeftIcon = styled(ArrowRightIcon)`
  margin-top: -24px;
  transform: translateY(12px) rotate(180deg);
`;

const BackLink = styled(PresentationLink)``;

import { FC, useState } from 'react';
import styled, { FlattenSimpleInterpolation, css } from 'styled-components';

import { pxToRem } from 'styles/helpers';
import { bgColor, btnAsLink } from 'styles/mixins';
import { FontFace } from 'styles/types';
import { MenuList } from './MenuList';
import { ArrowRight as ArrowRightIcon } from 'components/icons/ArrowRight';

export const SidebarMenu: FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const onClick = (): void => {
    setShowMenu((prev) => !prev);
  };

  const onMouseLeave = (): void => {
    setShowMenu(false);
  };

  return (
    <Wrapper>
      <MenuBtn onClick={onClick} isMenuOpen={showMenu}>
        <MenuBtnLabel>Menu</MenuBtnLabel>
      </MenuBtn>
      {showMenu && (
        <SidebarWrapper>
          <MenuList onClick={onClick} onMouseLeave={onMouseLeave} />
        </SidebarWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const MenuBtnLabel = styled.span`
  ${({ theme }): FontFace => theme.fontFace.primary}
  text-transform: uppercase;
`;

const MenuBtn = styled.button.attrs({
  type: 'button',
})<{ isMenuOpen: boolean }>`
  ${btnAsLink}
  padding: ${pxToRem(10)} ${pxToRem(5)};

  ${(props): FlattenSimpleInterpolation =>
    props.isMenuOpen
      ? css`
          ${MenuBtnLabel} {
            border-bottom: 1px solid ${props.theme.colors.dark};
          }
        `
      : css``}
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${(props): string => props.theme.colors.dark};
  padding: ${pxToRem(24)} ${pxToRem(18)};
`;

export const MenuItemLabel = styled.span`
  text-transform: uppercase;
`;

export const StyledArrowRightIcon = styled(ArrowRightIcon)`
  transform: translateY(12px);
  margin-top: -24px;
  color: ${(props): string => props.theme.colors.blue};
`;

const SidebarWrapper = styled.div`
  ul {
    ${bgColor('white')};

    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    cursor: pointer;

    &:hover {
      ${MenuItem} {
        ${bgColor('dark')};
        color: ${(props): string => props.theme.colors.white};

        > ${StyledArrowRightIcon} {
          color: ${(props): string => props.theme.colors.white};
        }
      }
    }
  }
`;

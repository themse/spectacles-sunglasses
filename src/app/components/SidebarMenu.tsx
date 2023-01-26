import { FC, useState } from 'react';

import styled from 'styled-components';
import { pxToRem } from 'styles/helpers';
import { btnAsLink } from 'styles/mixins';
import { FontFace } from 'styles/types';

export const SidebarMenu: FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const onClick = (): void => {
    setShowMenu((prev) => !prev);
  };

  const onMouseOver = (): void => {
    setShowMenu(false);
  };

  return (
    <Wrapper>
      <MenuBtn onClick={onClick}>
        <MenuBtnLabel>Menu</MenuBtnLabel>
      </MenuBtn>
      {showMenu && (
        <SidebarWrapper onMouseLeave={onMouseOver}>
          <ParentList>
            <li>
              <a>
                <MenuItem>Spectacles</MenuItem>
              </a>
              <ul>
                <li>
                  <a>
                    <MenuItem>Women</MenuItem>
                  </a>
                </li>
                <li>
                  <a>
                    <MenuItem>Men</MenuItem>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a>
                <MenuItem>Sunglasses</MenuItem>
              </a>
              <ul>
                <li>
                  <a>
                    <MenuItem>Women2</MenuItem>
                  </a>
                </li>
                <li>
                  <a>
                    <MenuItem>Men2</MenuItem>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a>
                <MenuItem>Home try on</MenuItem>
              </a>
            </li>
            <li>
              <a>
                <MenuItem>Pair for pair</MenuItem>
              </a>
            </li>
          </ParentList>
        </SidebarWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const MenuBtn = styled.button.attrs({
  type: 'button',
})`
  ${btnAsLink}
  padding: ${pxToRem(10)} ${pxToRem(5)};
`;

const MenuBtnLabel = styled.span`
  ${({ theme }): FontFace => theme.fontFace.primary}
  text-transform: uppercase;
`;

const MenuItem = styled.span`
  border-bottom: 1px solid ${(props): string => props.theme.colors.dark};
  display: block;
  padding: ${pxToRem(24)} ${pxToRem(18)};
  text-transform: uppercase;
`;

const SidebarWrapper = styled.div`
  ul {
    background-color: ${(props): string => props.theme.colors.white};

    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    cursor: pointer;

    &:hover {
      ${MenuItem} {
        background-color: ${(props): string => props.theme.colors.dark};
        color: ${(props): string => props.theme.colors.white};
      }
    }
  }
`;

const ParentList = styled.ul`
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  min-width: 300px;
  z-index: 99;
  height: 100%;
  background-color: ${(props): string => props.theme.colors.white};
  border-top: 1px solid ${(props): string => props.theme.colors.dark};
  border-right: 1px solid ${(props): string => props.theme.colors.dark};

  & > li > a {
    transition: all 5s ease-in-out;

    & + ul {
      display: none;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 300px;
      width: 300px;
      border-right: 1px solid ${(props): string => props.theme.colors.dark};

      &:hover {
        display: block;
      }
    }

    &:hover {
      & + ul {
        display: block;
      }
    }
  }
`;

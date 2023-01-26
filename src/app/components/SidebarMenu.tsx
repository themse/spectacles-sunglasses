import { FC, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { pxToRem } from 'styles/helpers';
import { btnAsLink } from 'styles/mixins';
import { FontFace } from 'styles/types';
import { useSalesCollection } from 'context/sales-collection';
import { ObjectEntries } from 'types/helpers';
import { SalesCollectionItem } from 'context/sales-collection/types';

// TODO refactor
export const SidebarMenu: FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const { salesCollection } = useSalesCollection();

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
            {(
              Object.entries(salesCollection) as ObjectEntries<{
                [key: string]: SalesCollectionItem[];
              }>
            ).map(([category, collection]) => (
              <li key={category}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a role="presentation">
                  <MenuItem>{category}</MenuItem>
                </a>
                {collection.length > 0 && (
                  <ul>
                    {collection.map((item) => (
                      <li key={item.id}>
                        <Link
                          to={`/collections/${item.slug}`}
                          onClick={onClick}
                        >
                          <MenuItem>{item.sex}</MenuItem>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#">
                <MenuItem>Home try on</MenuItem>
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#">
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
    & + ul {
      display: none;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 300px;
      @media screen and (max-width: 620px) {
        left: 0;
      }

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

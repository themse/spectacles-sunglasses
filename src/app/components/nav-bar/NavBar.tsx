import { FC } from 'react';
import styled from 'styled-components';

import { ContainerFluid } from 'components/grid/ContainerFluid';
import { Row } from 'components/grid/Row';
import { FontFace } from 'styles/types';
import { pxToRem } from 'styles/helpers';
import { Nav } from './Nav';

type Props = {
  category: string;
  sex: string;
};

export const NavBar: FC<Props> = ({ category, sex }) => {
  const title = [category, sex].filter(Boolean).join(' ');

  return (
    <Wrapper>
      <ContainerFluid>
        <Row>
          <Grid>
            <GridCell>
              <Title>{title}</Title>
            </GridCell>
            <GridCell>
              <Nav />
            </GridCell>
          </Grid>
        </Row>
      </ContainerFluid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-top: 1px solid ${(props): string => props.theme.colors.dark};
  border-bottom: 1px solid ${(props): string => props.theme.colors.dark};
`;

const GridCell = styled.div`
  display: grid;
  align-items: center;
`;

const Grid = styled.div`
  min-height: 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: ${(props): string => props.theme.screens.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }

  ${GridCell} {
    grid-area: 1 / 2 / 2 / 3;

    @media screen and (max-width: ${(props): string =>
        props.theme.screens.sm}) {
      grid-area: auto;
    }

    border-left: 1px solid ${(props): string => props.theme.colors.dark};
    border-right: 1px solid ${(props): string => props.theme.colors.dark};

    @media screen and (max-width: ${(props): string =>
        props.theme.screens.sm}) {
      border-left: none;
    }

    @media screen and (max-width: 500px) {
      border-right: none;

      border-bottom: 1px solid ${(props): string => props.theme.colors.dark};
    }
  }

  ${GridCell} + ${GridCell} {
    grid-area: 1 / 3 / 2 / 4;

    @media screen and (max-width: ${(props): string =>
        props.theme.screens.sm}) {
      grid-area: auto;
    }

    border: none;
  }
`;

const Title = styled.h2`
  ${(props): FontFace => props.theme.fontFace.heading}
  font-size: ${(props): string => props.theme.fontSize.xl};
  text-align: center;
  text-transform: uppercase;
  padding: ${pxToRem(5)};
`;

import { FC } from 'react';
import styled from 'styled-components';

import { ContainerFluid } from 'components/grid/ContainerFluid';
import { FontFace } from 'styles/types';
import { Row } from 'components/grid/Row';

export const Header: FC = () => {
  return (
    <>
      <ContainerFluid>
        <MenuLabel>Menu</MenuLabel>
        <Heading>Spectacles women</Heading>
      </ContainerFluid>
      <ContainerFluid>
        <Row>
          <div style={{ backgroundColor: 'red' }}>
            <p>hello</p>
          </div>
        </Row>
      </ContainerFluid>
    </>
  );
};

const Heading = styled.h1`
  ${({ theme }): FontFace => theme.fontFace.heading}

  text-transform: uppercase;
`;

const MenuLabel = styled.p`
  ${({ theme }): FontFace => theme.fontFace.primary}
  text-transform: uppercase;
`;

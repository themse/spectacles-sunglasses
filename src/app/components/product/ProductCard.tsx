import { FC } from 'react';
import styled from 'styled-components';

import { pxToRem } from 'styles/helpers';

type Props = {
  name: string;
  imgSrc: string;
};

export const ProductCard: FC<Props> = ({ name, imgSrc }) => {
  return (
    <Wrapper>
      <ProductTitle>{name}</ProductTitle>
      <ProductPreview src={imgSrc} alt={name} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 100%;
`;

const ProductTitle = styled.h3`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  text-transform: uppercase;
  margin: ${pxToRem(25)} 0;
  font-size: ${(props): string => props.theme.fontSize.lg};
`;

const ProductPreview = styled.img`
  width: 100%;
  height: inherit;

  object-fit: cover;
  object-position: center;
`;

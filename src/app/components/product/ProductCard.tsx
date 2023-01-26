import { FC } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import { pxToRem } from 'styles/helpers';
import { EmptyPreview } from 'components/EmptyPreview';

type Props = {
  name: string;
  imgSrc: string;
};

export const ProductCard: FC<Props> = ({ name, imgSrc }) => {
  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  return (
    <Wrapper ref={ref}>
      <ProductTitle>{name}</ProductTitle>
      <ThumbnailPreview>
        {inView ? <ProductPreview src={imgSrc} alt={name} /> : <EmptyPreview />}
      </ThumbnailPreview>
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

const ThumbnailPreview = styled.div`
  min-height: 400px;
  height: 100%;
`;

const ProductPreview = styled.img`
  width: 100%;
  height: inherit;

  object-fit: cover;
  object-position: center;
`;

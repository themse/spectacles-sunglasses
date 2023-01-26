import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ProductCard } from './ProductCard';
import { useGlassList } from 'hooks/useGlassList';
import { Loader } from 'components/Loader';

type Props = {
  categorySlug: string;
};

export const ProductList: FC<Props> = ({ categorySlug }) => {
  const { getGlassList, glassList, isLoading } = useGlassList();

  useEffect(() => {
    const controller = new AbortController();

    if (categorySlug) {
      getGlassList(controller, categorySlug);
    }

    return () => {
      controller.abort();
    };
  }, [categorySlug, getGlassList]);

  return (
    <>
      <Grid>
        {glassList?.map((glassItem) => (
          <GridCell key={glassItem.id}>
            <ProductCardLink
              to={`/collections/${categorySlug}/glasses/${glassItem.category}/${glassItem.variant}`}
            >
              <ProductCard name={glassItem.name} imgSrc={glassItem.imgSrc} />
            </ProductCardLink>
          </GridCell>
        ))}
      </Grid>
      {isLoading && <Loader />}
    </>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: ${(props): string => props.theme.screens.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${(props): string => props.theme.screens.sm}) {
    grid-template-columns: 1fr;
  }
`;

const GridCell = styled.div`
  border-bottom: 1px solid ${(props): string => props.theme.colors.dark};
  border-right: 1px solid ${(props): string => props.theme.colors.dark};

  &:nth-child(3n) {
    border-right: none;
  }

  @media screen and (max-width: ${(props): string => props.theme.screens.md}) {
    &:nth-child(3n) {
      border-right: 1px solid ${(props): string => props.theme.colors.dark};
    }

    &:nth-child(2n) {
      border-right: none;
    }
  }

  @media screen and (max-width: ${(props): string => props.theme.screens.sm}) {
    border-right: none;

    &:nth-child(3n) {
      border-right: none;
    }
  }
`;

const ProductCardLink = styled(Link)`
  cursor: pointer;
`;

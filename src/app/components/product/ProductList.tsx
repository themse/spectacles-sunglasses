import { FC, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ProductCard } from './ProductCard';
import { useGlassList } from 'app/hooks/useGlassList';
import { Loader } from 'components/Loader';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';

type Props = {
  categorySlug: string;
};

export const ProductList: FC<Props> = ({ categorySlug }) => {
  const { getGlassList, glassList, totalAmount, chunkLength, isLoading } =
    useGlassList();

  const fetchMore = useCallback(
    async (page: number): Promise<void> => {
      // (page: 1) we fetch in useEffect
      if (page === 1) {
        return;
      }

      if (!categorySlug) {
        return;
      }

      await getGlassList(
        categorySlug,
        {
          'page[number]': page,
        },
        true
      );
    },
    [categorySlug, getGlassList]
  );

  const { lastElementRef, resetStartPage } = useInfiniteScroll(fetchMore, {
    totalAmount,
  });

  useEffect(() => {
    const controller = new AbortController();

    if (categorySlug) {
      getGlassList(categorySlug, {}, false, controller);
    }

    return () => {
      controller.abort();
    };
  }, [categorySlug, getGlassList]);

  useEffect(() => {
    if (categorySlug) {
      resetStartPage();
    }
  }, [categorySlug, resetStartPage]);

  return (
    <>
      <Grid>
        {glassList?.map((glassItem, idx) => {
          const isLastElement = chunkLength === idx + 1;

          return isLastElement && !isLoading ? (
            <GridCell key={glassItem.id} ref={lastElementRef}>
              <ProductCardLink
                to={`/collections/${categorySlug}/glasses/${glassItem.category}/${glassItem.variant}`}
              >
                <ProductCard name={glassItem.name} imgSrc={glassItem.imgSrc} />
              </ProductCardLink>
            </GridCell>
          ) : (
            <GridCell key={glassItem.id}>
              <ProductCardLink
                to={`/collections/${categorySlug}/glasses/${glassItem.category}/${glassItem.variant}`}
              >
                <ProductCard name={glassItem.name} imgSrc={glassItem.imgSrc} />
              </ProductCardLink>
            </GridCell>
          );
        })}
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

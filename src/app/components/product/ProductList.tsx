import { FC } from 'react';
import styled from 'styled-components';

import { ProductCard } from './ProductCard';
import { data } from 'app/mocks/data'; // TODO get from API

const category = 'spectacles-women'; // TODO get from url

export const ProductList: FC = () => {
  return (
    <Grid>
      {data?.glasses.map((glassItem) => (
        <GridCell key={glassItem.id}>
          <ProductCardLink
            href={`/collections/${category}/glasses/${glassItem.configuration_name}/${glassItem.glass_variants[0].frame_variant.configuration_name}`}
          >
            <ProductCard
              name={glassItem.name}
              imgSrc={glassItem.glass_variants[0].media[0].url}
            />
          </ProductCardLink>
        </GridCell>
      ))}
    </Grid>
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

const ProductCardLink = styled.a`
  cursor: pointer;
`;

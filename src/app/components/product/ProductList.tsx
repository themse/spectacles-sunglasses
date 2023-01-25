import { FC } from 'react';
import styled from 'styled-components';

import { ProductItem } from './ProductItem';
import { data } from 'app/mocks/data'; // TODO get from API

const category = 'spectacles-women'; // TODO get from url

export const ProductList: FC = () => {
  return (
    <Grid>
      {data?.glasses.map((glassItem) => (
        <GridCell key={glassItem.id}>
          <ProductItemLink
            href={`/collections/${category}/glasses/${glassItem.configuration_name}/${glassItem.glass_variants[0].frame_variant.configuration_name}`}
          >
            <ProductItem
              name={glassItem.name}
              imgSrc={glassItem.glass_variants[0].media[0].url}
            />
          </ProductItemLink>
        </GridCell>
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const GridCell = styled.div`
  border-bottom: 1px solid ${(props): string => props.theme.colors.dark};
  border-right: 1px solid ${(props): string => props.theme.colors.dark};

  &:nth-child(3n) {
    border-right: none;
  }
`;

const ProductItemLink = styled.a`
  cursor: pointer;
`;

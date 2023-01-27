import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ContainerFluid } from 'components/grid/ContainerFluid';
import { useGlassItem } from 'app/hooks/useGlassItem';
import { Loader } from 'components/Loader';
import { ProductCard } from 'app/components/product/ProductCard';

// TODO just for demo
const ProductViewPage: FC = () => {
  const { categorySlug, glassType, glassOption } = useParams<
    'categorySlug' | 'glassType' | 'glassOption'
  >();

  const { getGlassItem, glassItem, isLoading } = useGlassItem();

  useEffect(() => {
    const controller = new AbortController();

    if (categorySlug && glassType && glassOption) {
      getGlassItem({ salesCategory: categorySlug, glassType, glassOption });
    }

    return () => {
      controller.abort();
    };
  }, [categorySlug, glassType, glassOption, getGlassItem]);

  return (
    <ContainerFluid>
      {isLoading && <Loader />}
      {glassItem && (
        <ProductCard
          name={[glassItem.name, glassItem.variantName].join(' - ')}
          imgSrc={glassItem.imgSrc}
        />
      )}
    </ContainerFluid>
  );
};

export default ProductViewPage;

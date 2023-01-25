import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { ContainerFluid } from 'components/grid/ContainerFluid';

const ProductViewPage: FC = () => {
  const params = useParams<'categorySex' | 'glassType' | 'glassOption'>();

  return (
    <ContainerFluid>
      <h2>ProductView</h2>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </ContainerFluid>
  );
};

export default ProductViewPage;

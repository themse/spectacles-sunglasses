import { FC } from 'react';

import { BaseLayout } from 'app/components/layouts/BaseLayout';
import { ProductList } from 'app/components/product/ProductList';

export const Home: FC = () => {
  return (
    <BaseLayout>
      <ProductList />
    </BaseLayout>
  );
};

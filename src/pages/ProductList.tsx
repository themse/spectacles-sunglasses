import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { NavBar } from 'app/components/nav-bar/NavBar';
import { ProductList } from 'app/components/product/ProductList';
import ErrorPage from './Error';

const ProductListPage: FC = () => {
  const { categorySlug } = useParams<'categorySlug'>();

  if (!categorySlug) {
    return <ErrorPage />;
  }

  //  TODO validate
  const [salesCategory, sex] = categorySlug.split('-');

  return (
    <>
      <NavBar category={salesCategory} sex={sex} />
      <ProductList categorySlug={categorySlug} />
    </>
  );
};

export default ProductListPage;

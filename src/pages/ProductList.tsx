import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { NavBar } from 'app/components/nav-bar/NavBar';
import { ProductList } from 'app/components/product/ProductList';
import ErrorPage from './Error';

const ProductListPage: FC = () => {
  const { categorySex } = useParams<'categorySex'>();

  if (!categorySex) {
    return <ErrorPage />;
  }

  //  TODO validate
  const [category, sex] = categorySex.split('-');

  return (
    <>
      <NavBar category={category} sex={sex} />
      <ProductList />
    </>
  );
};

export default ProductListPage;

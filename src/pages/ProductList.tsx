import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { NavBar } from 'app/components/nav-bar/NavBar';
import { ProductList } from 'app/components/product/ProductList';
import ErrorPage from './Error';
import { useGlassList } from 'hooks/useGlassList';

const ProductListPage: FC = () => {
  const { categorySex } = useParams<'categorySex'>();
  const { getGlassList, glassList } = useGlassList();

  useEffect(() => {
    const controller = new AbortController();

    if (categorySex) {
      getGlassList(controller);
    }

    return () => {
      controller.abort();
    };
  }, [categorySex, getGlassList]);

  if (!categorySex) {
    return <ErrorPage />;
  }

  //  TODO validate
  const [salesCategory, sex] = categorySex.split('-');

  return (
    <>
      <NavBar category={salesCategory} sex={sex} />
      <ProductList salesCategory={salesCategory} glassList={glassList} />
    </>
  );
};

export default ProductListPage;

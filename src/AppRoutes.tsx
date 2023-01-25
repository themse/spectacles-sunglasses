import { FC, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Loader } from 'components/Loader';

const HomePage = lazy(() => import('pages/Home'));
const ProductListPage = lazy(() => import('pages/ProductList'));
const ProductViewPage = lazy(() => import('pages/ProductView'));
const ErrorPage = lazy(() => import('pages/Error'));

export const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <HomePage />
            </Suspense>
          }
        >
          <Route
            index
            element={<Navigate to="collections/spectacles-women" />} // temp solution
          />
          <Route
            path="collections/:categorySex?"
            element={
              <Suspense fallback={<Loader />}>
                <ProductListPage />
              </Suspense>
            }
          />
          <Route
            path="collections/:categorySex/glasses/:glassType/:glassOption"
            element={
              <Suspense fallback={<Loader />}>
                <ProductViewPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<Loader />}>
                <ErrorPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

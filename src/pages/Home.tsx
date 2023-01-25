import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { BaseLayout } from 'app/components/layouts/BaseLayout';

const HomePage: FC = () => {
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  );
};

export default HomePage;

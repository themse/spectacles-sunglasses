import { FC } from 'react';

import { MenuBtn } from './MenuBtn';

export const SideMenu: FC = () => {
  return (
    <>
      <MenuBtn onClick={() => console.log('click!!')} />
    </>
  );
};

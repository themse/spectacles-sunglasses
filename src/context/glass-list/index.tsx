import { FC, ReactNode, createContext, useContext } from 'react';

import {
  initialState as glassListInitialState,
  State as GlassListState,
} from 'app/hooks/useGlassList/state';
import { useGlassList } from 'app/hooks/useGlassList';
import { FilterCriteria } from 'services/api/bloobloom/types';

type State = GlassListState & {
  getGlassList?: (
    categorySlug: string,
    filterCriteria?: FilterCriteria,
    isFetchMore?: boolean,

    controller?: AbortController
  ) => Promise<void | never>;
};

const initialState: State = {
  ...glassListInitialState,
};

const GlassListContext = createContext<State>(initialState);

type Props = {
  children: ReactNode;
};

export const GlassListProvider: FC<Props> = ({ children }) => {
  const value = useGlassList();

  return (
    <GlassListContext.Provider value={value}>
      {children}
    </GlassListContext.Provider>
  );
};

export const useGlassListContext = (): State => useContext(GlassListContext);

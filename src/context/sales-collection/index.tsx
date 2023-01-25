import { FC, ReactNode, createContext, useContext, useEffect } from 'react';

import { SalesCollectionState } from './types';
import { useCollection } from 'hooks/useCollection';

const initialState: SalesCollectionState = {
  salesCollectionList: [],
  isLoading: false,
};

const SalesCollectionContext =
  createContext<SalesCollectionState>(initialState);

type Props = {
  children: ReactNode;
};

export const SalesCollectionProvider: FC<Props> = ({ children }) => {
  const { getCollection, collectionList, isLoading } = useCollection();

  useEffect(() => {
    const controller = new AbortController();
    getCollection(controller);

    return () => {
      controller.abort();
    };
  }, [getCollection]);

  return (
    <SalesCollectionContext.Provider
      value={{
        salesCollectionList: collectionList ?? [],
        isLoading,
      }}
    >
      {children}
    </SalesCollectionContext.Provider>
  );
};

export const useSalesCollection = (): SalesCollectionState =>
  useContext(SalesCollectionContext);

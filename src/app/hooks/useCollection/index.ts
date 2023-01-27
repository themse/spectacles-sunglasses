import { useCallback, useReducer } from 'react';

import { getCollection as getCollectionApi } from 'services/api/bloobloom';
import { CollectionItem as CollectionItemApi } from 'services/api/bloobloom/types';
import { getErrorMessage } from 'services/utils/getErrorMessage';
import {
  reducer as collectionReducer,
  initialState as collectionInitialState,
  ReducerActionKind as CollectionReducerActionKind,
  CollectionItem,
} from './state';

type DataReturn = {
  getCollection: (controller: AbortController) => Promise<void | never>;

  collection?: { [key: string]: CollectionItem[] } | null;
  isLoading: boolean;
  err: string | null;
};

export const useCollection = (): DataReturn => {
  const [{ collection, isLoading, err }, dispatch] = useReducer(
    collectionReducer,
    collectionInitialState
  );

  const _mapRawDataToCollectionList = (
    rawData: CollectionItemApi[]
  ): { [key: string]: CollectionItem[] } => {
    return rawData.reduce((acc, item) => {
      const [salesCategory, sex] = item.configuration_name.split('-');

      const updatedData: CollectionItem = {
        id: item.id,
        name: item.name,
        salesCategory,
        sex,
        slug: item.configuration_name,
      };

      if (salesCategory in acc) {
        acc[salesCategory].push(updatedData);
      } else {
        // eslint-disable-next-line no-param-reassign
        acc[salesCategory] = [updatedData];
      }

      return acc;
    }, {} as { [key: string]: CollectionItem[] });
  };

  const getCollection = useCallback(
    async (controller?: AbortController): Promise<void | never> => {
      try {
        dispatch({ type: CollectionReducerActionKind.FETCH_COLLECTION_LIST });

        const data = await getCollectionApi(controller);
        const mappedCollection = _mapRawDataToCollectionList(data.collections);

        dispatch({
          type: CollectionReducerActionKind.SUCCESS_COLLECTION_LIST,
          payload: mappedCollection,
        });
      } catch (error) {
        const message = getErrorMessage(error);

        dispatch({
          type: CollectionReducerActionKind.FAILED_COLLECTION_LIST,
          err: message,
        });
      }
    },
    []
  );

  return { collection, isLoading, err, getCollection };
};

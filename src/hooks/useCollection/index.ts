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

  collectionList?: CollectionItem[] | null;
  isLoading: boolean;
  err: string | null;
};

export const useCollection = (): DataReturn => {
  const [{ collectionList, isLoading, err }, dispatch] = useReducer(
    collectionReducer,
    collectionInitialState
  );

  const _mapRawDataToCollectionList = (
    rawData: CollectionItemApi[]
  ): CollectionItem[] => {
    return rawData.reduce((acc, item) => {
      const [category, sex] = item.configuration_name.split('-');

      const updatedData: CollectionItem = {
        id: item.id,
        name: item.name,
        category,
        sex,
        slug: item.configuration_name,
      };

      acc.push(updatedData);

      return acc;
    }, [] as CollectionItem[]);
  };

  const getCollection = useCallback(
    async (controller: AbortController): Promise<void | never> => {
      try {
        dispatch({ type: CollectionReducerActionKind.FETCH_COLLECTION_LIST });

        const data = await getCollectionApi(controller);
        const mappedCollectionList = _mapRawDataToCollectionList(
          data.collections
        );

        dispatch({
          type: CollectionReducerActionKind.SUCCESS_COLLECTION_LIST,
          payload: mappedCollectionList,
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

  return { collectionList, isLoading, err, getCollection };
};

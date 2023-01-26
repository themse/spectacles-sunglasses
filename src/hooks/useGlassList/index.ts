import { useCallback, useReducer } from 'react';

import { getGlasses as getGlassListApi } from 'services/api/bloobloom';
import {
  FilterCriteria,
  GlassItem as GlassItemApi,
} from 'services/api/bloobloom/types';
import {
  GlassItem,
  initialState as glassInitialState,
  ReducerActionKind as GlassReducerActionKind,
  reducer as glassReducer,
} from './state';
import { getErrorMessage } from 'services/utils/getErrorMessage';

type DataReturn = {
  getGlassList: (
    controller: AbortController,
    categorySlug: string
  ) => Promise<void | never>;

  glassList?: GlassItem[] | null;
  isLoading: boolean;
  err: string | null;
};

export const useGlassList = (): DataReturn => {
  const [{ glassList, isLoading, err }, dispatch] = useReducer(
    glassReducer,
    glassInitialState
  );

  const _mapRawDataToGlassList = (rawData: GlassItemApi[]): GlassItem[] => {
    return rawData.reduce((acc, item) => {
      const updatedData: GlassItem = {
        id: item.id,
        name: item.name,
        imgSrc: item.glass_variants[0].media[0].url,
        category: item.configuration_name,
        variant: item.glass_variants[0].frame_variant.configuration_name,
      };

      acc.push(updatedData);

      return acc;
    }, [] as GlassItem[]);
  };

  const getGlassList = useCallback(
    async (
      controller: AbortController,
      categorySlug: string
    ): Promise<void | never> => {
      // TODO move infinite scroll into separate file
      const criteria: FilterCriteria = {
        'page[limit]': 12,
        'page[number]': 1,
      };
      try {
        dispatch({ type: GlassReducerActionKind.FETCH_GLASS_LIST });

        const data = await getGlassListApi(controller, categorySlug, criteria);
        const mappedGlassList = _mapRawDataToGlassList(data.glasses);

        dispatch({
          type: GlassReducerActionKind.SUCCESS_GLASS_LIST,
          payload: mappedGlassList,
        });
      } catch (error) {
        const message = getErrorMessage(error);

        dispatch({
          type: GlassReducerActionKind.FAILED_GLASS_LIST,
          err: message,
        });
      }
    },
    []
  );

  return { getGlassList, glassList, isLoading, err };
};

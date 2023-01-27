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
    categorySlug: string,
    filterCriteria?: FilterCriteria,

    controller?: AbortController
  ) => Promise<void | never>;

  isLoading: boolean;
  err: string | null;

  totalAmount: number;
  chunkLength: number;
  glassList?: GlassItem[] | null;
};

export const useGlassList = (): DataReturn => {
  const [{ glassList, totalAmount, chunkLength, isLoading, err }, dispatch] =
    useReducer(glassReducer, glassInitialState);

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
      categorySlug: string,
      filterCriteria?: FilterCriteria,

      controller?: AbortController
    ): Promise<void | never> => {
      const LIMIT = 12;
      const START_PAGE = 1;

      const criteria: FilterCriteria = {
        'page[limit]': LIMIT,
        'page[number]': START_PAGE,

        ...filterCriteria,
      };
      try {
        dispatch({ type: GlassReducerActionKind.FETCH_GLASS_LIST });

        const { glasses, meta } = await getGlassListApi(
          categorySlug,
          criteria,
          controller
        );

        const mappedGlassList = _mapRawDataToGlassList(glasses);
        const totalAmount = meta.total_count;

        dispatch({
          type: GlassReducerActionKind.SUCCESS_GLASS_LIST,
          payload: {
            glassList: mappedGlassList,
            totalAmount,
          },
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

  return { getGlassList, glassList, totalAmount, chunkLength, isLoading, err };
};

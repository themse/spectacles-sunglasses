import { useCallback } from 'react';

import { useQueryParam } from 'hooks/useQueryParam';
import { FilterCriteria } from 'services/api/bloobloom/types';
import { useGlassListContext } from 'context/glass-list';

export enum FilterField {
  COLOUR = 'colour',
  SHAPE = 'shape',
}

const allowedFilterKeySet = new Set(Object.values(FilterField));

type DataReturn = {
  selectedColorSet: Set<string>;
  selectedShapeSet: Set<string>;
  filterParams: Record<string, string[]>;

  onFilterSelect: (name: FilterField, values: string[]) => void;
  onFilterGlassList: (
    categorySlug: string,
    params: Record<string, string[]> | any, // TODO check type for page

    isFetchMore?: boolean,
    controller?: AbortController
  ) => Promise<void>;
};

export const useFilter = (): DataReturn => {
  const { params, setParams } = useQueryParam(allowedFilterKeySet);

  const { getGlassList } = useGlassListContext();

  const selectedColorSet = new Set(params?.[FilterField.COLOUR] ?? []);
  const selectedShapeSet = new Set(params?.[FilterField.SHAPE] ?? []);

  const onFilterSelect = (name: FilterField, values: string[]): void => {
    setParams({ [name]: values });
  };

  const onFilterGlassList = useCallback(
    async (
      categorySlug: string,
      params: Record<string, string[]> & { page?: number },

      isFetchMore?: boolean,
      controller?: AbortController
    ): Promise<void> => {
      const START_PAGE = 1;

      const filterCriteria: FilterCriteria = {
        'page[number]': params.page ?? START_PAGE,

        ...(params[FilterField.COLOUR] && {
          'filters[glass_variant_frame_variant_colour_tag_configuration_names]':
            params[FilterField.COLOUR],
        }),
        ...(params[FilterField.SHAPE] && {
          'filters[glass_variant_frame_variant_frame_tag_configuration_names]':
            params[FilterField.SHAPE],
        }),
      };

      await getGlassList?.(
        categorySlug,
        filterCriteria,
        isFetchMore,
        controller
      );
    },
    [getGlassList]
  );

  return {
    selectedColorSet,
    selectedShapeSet,
    filterParams: params,

    onFilterSelect,
    onFilterGlassList,
  };
};

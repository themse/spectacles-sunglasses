import { useCallback, useState } from 'react';

import { getGlasses as getGlassListApi } from 'services/api/bloobloom';
import {
  FilterCriteria,
  GlassItem as GlassItemApi,
} from 'services/api/bloobloom/types';
import { getErrorMessage } from 'services/utils/getErrorMessage';

// TODO used simplified structure for demo, improve
export type GlassItem = {
  id: number;
  name: string;
  imgSrc: string;
  category: string;
  variant: string;
};

type DataReturn = {
  getGlassList: (controller: AbortController) => Promise<void | never>;

  glassList?: GlassItem[] | null;
};

export const useGlassList = (): DataReturn => {
  const [glassList, setGlassList] = useState<GlassItem[]>();

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
    async (controller: AbortController): Promise<void | never> => {
      const salesCategory = 'spectacles-women'; // TODO
      const criteria: FilterCriteria = {
        'page[limit]': 6,
        'page[number]': 1,
      };
      try {
        const data = await getGlassListApi(controller, salesCategory, criteria);

        const mappedGlassList = _mapRawDataToGlassList(data.glasses);
        setGlassList(mappedGlassList);
      } catch (error) {
        const message = getErrorMessage(error);

        // TODO
        console.log({ error: message });
      }
    },
    []
  );

  return { getGlassList, glassList };
};

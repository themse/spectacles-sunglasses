import { useCallback, useState } from 'react';

import {
  GlassItem as GlassItemApi,
  GlassItemPathObj,
} from 'services/api/bloobloom/types';
import { getGlassItem as getGlassItemApi } from 'services/api/bloobloom';
import { getErrorMessage } from 'services/utils/getErrorMessage';
import { GlassItem } from './useGlassList/state';

type DataReturn = {
  getGlassItem: (
    pathObj: GlassItemPathObj & { glassOption: string },

    controller?: AbortController
  ) => Promise<void>;

  isLoading: boolean;
  err: string | null;

  glassItem?: GlassItem & { variantName: string };
};

export const useGlassItem = (): DataReturn => {
  const [glassItem, setGlassItem] = useState<
    GlassItem & { variantName: string }
  >();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const _mapRawDataToGlassItem = (
    rawData: GlassItemApi,
    glassOption: string
  ): GlassItem & { variantName: string } => {
    const glassVariant = rawData.glass_variants.find(
      (item) => item.frame_variant.configuration_name === glassOption
    );

    // just for demo
    const mappedData: GlassItem & { variantName: string } = {
      id: rawData.id,
      name: rawData.name,
      imgSrc:
        glassVariant?.media[0].url ?? rawData.glass_variants[0].media[0].url,
      category: rawData.configuration_name,
      variant:
        glassVariant?.frame_variant.configuration_name ??
        rawData.glass_variants[0].frame_variant.configuration_name,
      variantName:
        glassVariant?.frame_variant.name ??
        rawData.glass_variants[0].frame_variant.name,
    };

    return mappedData;
  };

  const getGlassItem = useCallback(
    async (
      {
        salesCategory,
        glassType,
        glassOption,
      }: GlassItemPathObj & { glassOption: string },

      controller?: AbortController
    ): Promise<void> => {
      try {
        setIsLoading(true);
        const { glass } = await getGlassItemApi(
          { salesCategory, glassType },
          controller
        );

        const mappedGlassItem = _mapRawDataToGlassItem(glass, glassOption);

        setGlassItem(mappedGlassItem);
      } catch (error) {
        const message = getErrorMessage(error);

        setErr(message);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { glassItem, isLoading, err, getGlassItem };
};

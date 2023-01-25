import axios from 'axios';
import { CollectionResponse, GlassResponse, FilterCriteria } from './types';

const BASE_URL = 'https://staging-api.bloobloom.com'; // TODO get from env
const COLLECTION_PATH = '/user/v1/sales_channels/website/collections';
const FULL_COLLECTION_PATH = `${BASE_URL}${COLLECTION_PATH}`;

export const getCollection = async (
  controller: AbortController
): Promise<CollectionResponse> => {
  const { data } = await axios.get<CollectionResponse>(FULL_COLLECTION_PATH, {
    signal: controller.signal,
  });

  return data;
};

export const getGlasses = async (
  controller: AbortController,
  criteria: FilterCriteria
): Promise<GlassResponse> => {
  const { category, ...restParams } = criteria;
  const url = `${FULL_COLLECTION_PATH}/${category}/glasses`;

  const { data } = await axios.get<GlassResponse>(url, {
    signal: controller.signal,

    params: restParams,
  });

  return data;
};

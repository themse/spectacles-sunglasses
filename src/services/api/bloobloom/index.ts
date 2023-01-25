import axios from 'axios';
import { CollectionResponse, GlassResponse, FilterCriteria } from './types';

const defaultUrl = 'https://staging-api.bloobloom.com';
const BASE_URL = process.env.REACT_APP_API_BLOOBLOOM_URL ?? defaultUrl;

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
  salesCategory: string,
  criteria: FilterCriteria
): Promise<GlassResponse> => {
  const url = `${FULL_COLLECTION_PATH}/${salesCategory}/glasses`;

  const { data } = await axios.get<GlassResponse>(url, {
    signal: controller.signal,

    params: criteria,
  });

  return data;
};

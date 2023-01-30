// got the idea from source: https://github.dev/remix-run/react-router/tree/dev/examples

import { useMemo, useCallback } from 'react';
import type { NavigateOptions } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import queryString from 'query-string';

type DataReturn = {
  params: Record<string, string[]>;
  setParams: (
    newQuery: Record<string, string[]>,
    options?: NavigateOptions
  ) => void;
};

export const useQueryParam = (allowedKeySet: Set<string>): DataReturn => {
  let [searchParams, setSearchParams] = useSearchParams();

  const _mapData = useCallback(
    (
      rawData: queryString.ParsedQuery<string> | Record<string, string[]>
    ): Record<string, string[]> => {
      const mappedDataEntries = Object.entries(rawData)
        .filter(([key, val]) => allowedKeySet.has(key) && val && val.length > 0)
        .map(([key, val]) => (Array.isArray(val) ? [key, val] : [key, [val]]));

      return Object.fromEntries(mappedDataEntries);
    },
    [allowedKeySet]
  );

  const params = useMemo(() => {
    const searchQueryString = queryString.parse(searchParams.toString(), {
      arrayFormat: 'comma',
    });

    return _mapData(searchQueryString);
  }, [_mapData, searchParams]);

  const setParams = useCallback(
    (newData: Record<string, string[]>, options?: NavigateOptions) => {
      // Step 1: rid all intersection keys
      const newDataKeySet = new Set(Object.keys(newData));
      const filteredParamEntries = Object.entries(params).filter(
        ([key]) => !newDataKeySet.has(key)
      );
      const filteredParam = Object.fromEntries(filteredParamEntries);

      //   Step 2: map and filter from unnecessary keys of 'newData'
      const mappedNewParams = _mapData(newData);

      // Step 3: get query string for updating search query
      const updatedParams = queryString.stringify(
        { ...filteredParam, ...mappedNewParams },
        {
          arrayFormat: 'comma',
        }
      );

      // Step 4: update search query
      setSearchParams(updatedParams, options);
    },
    [_mapData, params, setSearchParams]
  );

  return { params, setParams };
};

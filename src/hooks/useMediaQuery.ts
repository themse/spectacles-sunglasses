// resource: https://usehooks-ts.com/react-hook/use-media-query

import { useCallback, useEffect, useState } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const getMatches = (query: string): boolean => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  const onChange = useCallback((): void => {
    setMatches(getMatches(query));
  }, [query]);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    onChange();

    matchMedia.addEventListener('change', onChange);

    return () => {
      matchMedia.removeEventListener('change', onChange);
    };
  }, [query, onChange]);

  return matches;
};

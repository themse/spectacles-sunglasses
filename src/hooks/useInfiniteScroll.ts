import { useState, useRef, useEffect, useCallback } from 'react';

import { usePrevious } from 'hooks/usePrevious';

const START_PAGE = 1;
const OFFSET = 12;

type PaginateConfig = {
  totalAmount: number;
  startPage?: number;
  offset?: number;
};

type DataReturn = {
  hasMore: boolean;
  page: number;

  lastElementRef: (node: Element | null) => void;
  resetStartPage: () => void;
};

export const useInfiniteScroll = (
  fetchMore: (page: number) => Promise<void>,
  { totalAmount, startPage = START_PAGE, offset = OFFSET }: PaginateConfig
): DataReturn => {
  const [page, setPage] = useState(startPage);
  const prevPage = usePrevious(page);

  const [hasMore, setHasMore] = useState(false);

  const observer = useRef<IntersectionObserver>();

  const lastElementRef = useCallback(
    (node: Element | null) => {
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        const [target] = entries;

        if (target.isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [hasMore]
  );

  const resetStartPage = useCallback((): void => {
    setPage(START_PAGE);
    setHasMore(false);
  }, []);

  useEffect(() => {
    if (totalAmount > 0) {
      const totalPagesAmount = Math.ceil(totalAmount / offset);

      setHasMore(page <= totalPagesAmount);
    }
  }, [page, totalAmount, offset]);

  useEffect(() => {
    if (hasMore && prevPage !== page) {
      fetchMore(page);
    }
  }, [fetchMore, hasMore, page, prevPage]);

  return { hasMore, page, lastElementRef, resetStartPage };
};

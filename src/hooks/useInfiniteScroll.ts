import { useState, useRef, useEffect, useCallback } from 'react';

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
};

export const useInfiniteScroll = (
  fetchMore: (page: number) => Promise<void>,
  { totalAmount, startPage = START_PAGE, offset = OFFSET }: PaginateConfig
): DataReturn => {
  const [page, setPage] = useState(startPage);
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

  useEffect(() => {
    if (totalAmount > 0) {
      const totalPagesAmount = Math.ceil(totalAmount / offset);

      setHasMore(page <= totalPagesAmount);
    }
  }, [page, totalAmount, offset]);

  useEffect(() => {
    if (hasMore) {
      fetchMore(page);
    }
  }, [fetchMore, hasMore, page]);

  return { hasMore, page, lastElementRef };
};

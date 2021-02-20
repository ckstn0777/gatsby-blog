import { useState, useCallback } from 'react';

export function usePageHook() {
  const [page, setPage] = useState(1); // 현재 페이지
  const [totalPage, setTotalPage] = useState(1); // 총 페이지

  const onChangePage = useCallback(
    (page: number): void => {
      setPage(page);
    },
    [page]
  );

  const onChangeTotalPage = useCallback(
    (totalPage: number): void => {
      setTotalPage(totalPage);
    },
    [totalPage]
  );

  return [page, onChangePage, totalPage, onChangeTotalPage] as const;
}

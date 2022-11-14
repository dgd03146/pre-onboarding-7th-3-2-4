'use client';

import { accountService } from '../../service/AccountService';
import { queryKeys } from './../../lib/react-query/constants';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

// FIXME: 최대 PAGE 길이 구하는법?
const maxAccountsPage = 10;
const limit = 20;

const fetchAccounts = async (currentPage: number) => {
  const data = await accountService.getAccountList(currentPage, limit);
  console.log(data, 'data');
  return data;
};

export const useAccounts = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const queryClient = useQueryClient();

  useEffect(() => {
    if (currentPage < maxAccountsPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery([queryKeys.accounts, nextPage], () =>
        fetchAccounts(nextPage)
      );
    }
  }, [currentPage]);

  const { data } = useQuery(
    [queryKeys.accounts, currentPage],
    () => fetchAccounts(currentPage),
    {
      staleTime: 2000,
      keepPreviousData: true
    }
  );
  return { data, currentPage, setCurrentPage };
};

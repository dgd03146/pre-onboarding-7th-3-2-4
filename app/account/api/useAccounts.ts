'use client';

import { accountService } from '../../../service/AccountService';
import { queryKeys } from '../../../lib/react-query/constants';
import {
  useQuery,
  useQueryClient,
  UseQueryResult
} from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { AccountType } from '../../../types/type';

const limit = 10;

const fetchAccounts = async (currentPage: number) => {
  // TODO: try catch error처리
  const res: AccountType[] = await accountService.getAccountList(
    currentPage,
    limit
  );

  return res;
};

export const useAccounts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLast, setIsLast] = useState(false);

  const queryClient = useQueryClient();

  const res = useQuery(
    [queryKeys.accounts, currentPage],
    () => fetchAccounts(currentPage),
    {
      staleTime: 2000,
      keepPreviousData: true
    }
  );

  const accounts: AccountType[] = res.data!;

  useEffect(() => {
    if (accounts.length < limit) {
      setIsLast(true);
    } else {
      setIsLast(false);
    }
  }, [accounts.length]);

  useEffect(() => {
    if (accounts.length === limit) {
      console.log('prefetching 중');
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery([queryKeys.accounts, nextPage], () =>
        fetchAccounts(nextPage)
      );
    }
  }, [currentPage]);

  return { accounts, currentPage, setCurrentPage, isLast };
};

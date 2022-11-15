'use client';

import { accountService } from '../../../service/AccountService';
import { queryKeys } from '../../../lib/react-query/constants';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { AccountType } from '../../../types/type';

// FIXME: 최대 PAGE 길이 구하는법?
const maxAccountsPage = 10;
const limit = 10;

const fetchAccounts = async (currentPage: number) => {
  // TODO: try catch error처리
  const res = await accountService.getAccountList(currentPage, limit);

  return res;
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

  const res = useQuery(
    [queryKeys.accounts, currentPage],
    () => fetchAccounts(currentPage),
    {
      staleTime: 2000,
      keepPreviousData: true
    }
  );

  const accounts: AccountType[] = res.data!;

  return { accounts, currentPage, setCurrentPage };
};

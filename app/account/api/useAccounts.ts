'use client';

import { accountService } from '../../../service/AccountService';
import { queryKeys } from '../../../lib/react-query/constants';
import {
  useQuery,
  useQueryClient,
  UseQueryResult
} from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { AccountType } from '../../../lib/types/type';
import { PageAccountsQuery } from '../../../lib/interfaces/querys';

const InitialPage = { _page: 1, _limit: 10 };

const fetchAccounts = async (query: PageAccountsQuery) => {
  const res: AccountType[] = await accountService.getAccountList({
    ...query
  });
  return res;
};

export const useAccounts = () => {
  const { _page, _limit } = InitialPage;
  const [isLast, setIsLast] = useState(false);
  const [query, setQuery] = useState<PageAccountsQuery>({
    _page,
    _limit
  });

  // TODO: 객체

  // const queryClient = useQueryClient();

  const res = useQuery(
    [queryKeys.accounts, query],
    () => fetchAccounts(query),
    {
      staleTime: 2000,
      keepPreviousData: true
    }
  );

  const accounts: AccountType[] = res.data!;

  // FIXME: 로직 수정하기
  useEffect(() => {
    if (accounts.length < _limit) {
      setIsLast(true);
    } else {
      setIsLast(false);
    }
  }, [accounts.length]);

  // FIXME: page만 올라가게?
  // useEffect(() => {
  //   if (accounts.length === _limit) {
  //     setQuery((prev) => {
  //       return { ...prev, _page: prev._page + 1 };
  //     });

  //     queryClient.prefetchQuery([queryKeys.accounts, query], () =>
  //       fetchAccounts(query)
  //     );
  //   }
  // }, [query]);

  return { accounts, query, setQuery, isLast };
};

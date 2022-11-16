import React, { Dispatch, SetStateAction } from 'react';
import { AccountType } from '../../../lib/types/type';
import { useAccounts } from '../api/useAccounts';

import {
  getAccountStatus,
  getMoney,
  getAccountName,
  maskAccountNumber,
  changeToBrokerName,
  getDate
} from '../../../utils';
import { PageAccountsQuery } from '../../../lib/interfaces/querys';

interface IAccount {
  accounts: AccountType[];
  isLast: boolean;
  query: PageAccountsQuery;
  setQuery: Dispatch<SetStateAction<PageAccountsQuery>>;
}

// FIXME: 이 훅에서 굳이 로직을 거칠 필요가?
const useAccountsData = () => {
  const { accounts, isLast, query, setQuery }: IAccount = useAccounts();

  // utils에 함수로 빼서 사용 가능
  const newAccounts = accounts.map(
    ({
      uuid,
      user_id,
      broker_id,
      number,
      name,
      status,
      assets,
      payments,
      is_active,
      created_at
    }) => {
      return {
        uuid,
        user_id: user_id,
        broker_id: changeToBrokerName(broker_id),
        number: maskAccountNumber(number),
        name: getAccountName(name),
        status: getAccountStatus(status),
        assets: getMoney(assets),
        payments: getMoney(payments),
        is_active: is_active === true ? 'O' : 'X',
        created_at: getDate(created_at)
      };
    }
  );

  return { newAccounts, isLast, query, setQuery };
};

export default useAccountsData;

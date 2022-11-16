import React, { Dispatch, SetStateAction } from 'react';
import { AccountType } from '../../../types/type';
import { useAccounts } from '../api/useAccounts';

import {
  getAccountStatus,
  getMoney,
  getAccountName,
  maskAccountNumber,
  changeToBrokerName,
  getDate
} from '../../../utils';

interface IAccount {
  accounts: AccountType[];
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  isLast: boolean;
  setQuery: Dispatch<SetStateAction<string>>;
}

const useAccountsData = () => {
  const { accounts, currentPage, setCurrentPage, isLast, setQuery }: IAccount =
    useAccounts();

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

  return { newAccounts, currentPage, setCurrentPage, isLast, setQuery };
};

export default useAccountsData;

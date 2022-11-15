'use client';

import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useAccounts } from './api/useAccounts';
import { queryKeys } from '../../lib/react-query/constants';
import { accountService } from '../../service/AccountService';

const AccountList = () => {
  const { data: accountList } = useAccounts();
  console.log(accountList, 'data');

  return <div>account</div>;
};

export default AccountList;

import { PageAccountsQuery } from '../lib/interfaces/querys';
import { AccountType } from '../lib/types/type';
import { APIServiceImpl } from './../lib/api/API';

interface AccountService<T> {
  readonly api: APIServiceImpl;

  getAccountList(params: PageAccountsQuery): Promise<AccountType[]>;
}

class AccountServiceImpl<T> implements AccountService<T> {
  api;
  constructor(api: APIServiceImpl) {
    this.api = api;
  }

  async getAccountList(params: PageAccountsQuery) {
    const { data } = await this.api.fetch<AccountType[]>(`/accounts`, params);
    return data;
  }
}

const api = new APIServiceImpl('/api');
export const accountService = new AccountServiceImpl(api);

// http://localhost:4000/accounts?&broker_id=${broker_id}&status={status}&is_active={is_active}&q=&_page={page}&_limit=${limit}

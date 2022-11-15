import { APIServiceImpl } from './../lib/api/API';

interface AccountService<T> {
  readonly api: APIServiceImpl;
  searchAccount(query: string): Promise<T>;
  getAccountList(page: number, limit: number): Promise<T>;
}

class AccountServiceImpl<T> implements AccountService<T> {
  api;
  constructor(api: APIServiceImpl) {
    this.api = api;
  }

  async searchAccount(query: string) {
    const { data } = await this.api.fetch<T>(`/accounts?q=${query}`);
    return data;
  }

  async getAccountList(page: number, limit: number) {
    const { data } = await this.api.fetch<T>(
      `/accounts?_page=${page}&_limit=${limit}`
    );
    return data;
  }

  async getAccountTest() {
    const { data } = await this.api.fetch<T>(`/accounts`);
    return data;
  }
}

const api = new APIServiceImpl('/api');
export const accountService = new AccountServiceImpl(api);

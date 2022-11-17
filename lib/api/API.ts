import { AccountType } from '../../lib/types/type';
import { PageAccountsQuery } from '../interfaces/querys';
import { AxiosResponse } from 'axios';
import { HttpClientImpl } from './HttpClient';

interface APIService {
  fetch: <T>(
    endPoint: string,
    params: PageAccountsQuery
  ) => Promise<AxiosResponse<T, any>>;

  post: <T>(endPoint: string, data: T) => Promise<AxiosResponse<T, any>>;
  put: <T>(endPoint: string, data: T) => Promise<AxiosResponse<T, any>>;
}

export class APIServiceImpl extends HttpClientImpl implements APIService {
  constructor(baseURL: string) {
    super(baseURL);
  }

  fetch = <T>(endPoint: string, params: PageAccountsQuery) => {
    return this.instance.get<T>(endPoint, { params });
  };

  post = <T>(endPoint: string, data: T) => {
    return this.instance.post(endPoint, data);
  };

  put = <T>(endPoint: string, data: T) => {
    return this.instance.put(endPoint, data);
  };
}

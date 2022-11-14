import { AxiosResponse } from 'axios';
import { HttpClientImpl } from './HttpClient';

interface APIService {
  fetch: <T>(endPoint: string) => Promise<AxiosResponse<T, any>>;
}

export class APIServiceImpl extends HttpClientImpl implements APIService {
  constructor(baseURL: string) {
    super(baseURL);
  }

  fetch = <T>(endPoint: string) => {
    return this.instance.get<T>(this.baseURL + endPoint);
  };
}
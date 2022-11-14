import axios, { AxiosInstance } from 'axios';

interface HttpClient {
  readonly instance: AxiosInstance;
  readonly baseURL: string;
}

export abstract class HttpClientImpl implements HttpClient {
  readonly instance: AxiosInstance;
  constructor(readonly baseURL: string) {
    this.instance = axios.create({
      baseURL: this.baseURL
    });
  }
}

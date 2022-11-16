import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

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

    this.initializeResponseInterceptor();
  }

  //TODO: validation으로 status 추가 - 에러처리

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.request.use(
      this.handleRequest,
      this.handleError
    );
    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleError
    );
  };

  private handleRequest = (config: AxiosRequestConfig) => {
    // FIXME: accessToken
    const accessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5ld2ZhY2VAZGNvLmNvbSIsImlhdCI6MTY2ODYwOTE1NCwiZXhwIjoxNjY4NjEyNzU0LCJzdWIiOiIxMDEifQ.JYZCxbUFlR05btBgDAs0eDW7Oaqy63SrVJE2VsX6ah8';

    if (accessToken && config.headers) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  };

  private handleResponse = (response: AxiosResponse) => response;
  protected handleError = (error: any) => Promise.reject(error);
}

// TODO: GET, SET REMOVE 토큰 관리

import axios, {
  AxiosInstance,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";
import { injectable } from "inversify";
import { IHttpClient } from "./i-http-service";

@injectable()
export class AxiosHttpClient implements IHttpClient {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "https://reqres.in",
    });
  }

  async get<T>(url: string): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.get<T>(url);
    return response.data;
  }

  async post<T>(url: string, data: unknown): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.post<T>(
      url,
      data
    );
    return response.data;
  }

  async put<T>(url: string, data: unknown): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.put<T>(
      url,
      data
    );
    return response.data;
  }

  async delete<T>(url: string): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.delete<T>(url);
    return response.data;
  }

  setHeaders(headers: AxiosRequestHeaders): void {
    this.axiosInstance.interceptors.request.use((config) => {
      config.headers = headers;
      return config;
    });
  }
}

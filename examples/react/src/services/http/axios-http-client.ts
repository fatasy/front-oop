import axios, { AxiosInstance, AxiosResponse } from "axios";
import { injectable } from "inversify";
import { IHttpClient } from "./i-http-service";

@injectable()
export class FetchHttpClient implements IHttpClient {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "https://reqres.in",
      timeout: 5000,
      headers: { "Content-Type": "application/json" },
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
}

@injectable()
export class AxiosHttpClient implements IHttpClient {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "https://reqres.in",
      timeout: 5000,
      headers: { "Content-Type": "application/json" },
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
}

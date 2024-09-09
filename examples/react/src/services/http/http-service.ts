import { inject, injectable } from "inversify";
import type { IHttpClient } from "./i-http-service";

export interface IHttpService {
  get<T>(url: string): Promise<T>;
  post<T>(url: string, data: unknown): Promise<T>;
  put<T>(url: string, data: unknown): Promise<T>;
  delete<T>(url: string): Promise<T>;
}

@injectable()
export class HttpService implements IHttpService {
  private httpClient: IHttpClient;

  // O HttpClient será injetado pelo inversify ou outro IoC container
  constructor(@inject("IHttpClient") httpClient: IHttpClient) {
    this.httpClient = httpClient;
  }

  async get<T>(url: string): Promise<T> {
    return this.httpClient.get<T>(url);
  }

  async post<T>(url: string, data: unknown): Promise<T> {
    return this.httpClient.post<T>(url, data);
  }

  async put<T>(url: string, data: unknown): Promise<T> {
    return this.httpClient.put<T>(url, data);
  }

  async delete<T>(url: string): Promise<T> {
    return this.httpClient.delete<T>(url);
  }
}

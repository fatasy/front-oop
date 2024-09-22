import { inject, injectable } from "inversify";
import { WrappedResponse } from "../../entities/wrapped-response";

import { TUsersResponse } from "../../entities/responses/user-response";
import { type IHttpClient } from "./i-http-service";

export interface IUserHttp {
  getUsers(): Promise<WrappedResponse<TUsersResponse>>;
}

@injectable()
export class UserHttp implements IUserHttp {
  private httpClient: IHttpClient;

  constructor(@inject("HttpClient") httpClient: IHttpClient) {
    this.httpClient = httpClient;
  }

  async getUsers() {
    return this.httpClient.get<WrappedResponse<TUsersResponse>>("/api/users");
  }
}

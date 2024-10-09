
import { inject, injectable } from "inversify";
import { TUsersResponse } from "../../../../core/entities/responses/user-response";
import { WrappedResponse } from "../../../../core/entities/wrapped-response";
import * as iHttpService from "../../../../core/services/http/i-http-service";


export interface IUserHttp {
  getUsers(): Promise<WrappedResponse<TUsersResponse>>;
}

@injectable()
export class UserHttp implements IUserHttp {
  private httpClient: iHttpService.IHttpClient;

  constructor(@inject("HttpClient") httpClient: iHttpService.IHttpClient) {
    this.httpClient = httpClient;
  }

  async getUsers() {
    return this.httpClient.get<WrappedResponse<TUsersResponse>>("/api/users");
  }
}

import { inject, injectable } from "inversify";
import { WrappedResponse } from "../../entities/wrapped-response";

import { TApiPaginationResponse } from "../../entities/responses/api-pagination-response";
import { TUserResponse } from "../../entities/responses/user-response";
import type { IHttpService } from "./http-service";

export interface IUserHttp {
  getUsers(): Promise<WrappedResponse<TApiPaginationResponse<TUserResponse>>>;
}

@injectable()
export class UserHttp implements IUserHttp {
  private httpService: IHttpService;

  constructor(@inject("HttpService") httpService: IHttpService) {
    this.httpService = httpService;
  }

  async getUsers() {
    return this.httpService.get<
      WrappedResponse<TApiPaginationResponse<TUserResponse>>
    >("/api/users");
  }
}

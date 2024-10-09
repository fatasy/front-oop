import { inject, injectable } from "inversify";
import { ApiPagination } from "../../../core/entities/api-pagination";
import { UsersResponse } from "../../../core/entities/responses/user-response";
import { User } from "../../../core/entities/user";
import { SafeApiCaller } from "../../../infrastructure/api/safe-api-caller";
import type { IUserHttp } from "../../../core/services/http/user-http";
import { ApiPaginationResponseTransform } from "../../../core/transforms/api-pagination-response-transform";

export interface IUserRepository {
  getUsers(): Promise<ApiPagination<User>>;
}

@injectable()
export class UserRepository implements IUserRepository {
  private userHttp: IUserHttp;
  private safeApiCaller: SafeApiCaller;

  constructor(
    @inject("UserHttp") userHttp: IUserHttp,
    @inject("SafeApiCaller") safeApiCaller: SafeApiCaller
  ) {
    this.userHttp = userHttp;
    this.safeApiCaller = safeApiCaller;
  }

  async getUsers(): Promise<ApiPagination<User>> {
    const response = await this.safeApiCaller.safeApiCall(
      this.userHttp.getUsers(),
      UsersResponse
    );
    // TODO: Add error handling
    return ApiPaginationResponseTransform.transform(response, User);
  }
}

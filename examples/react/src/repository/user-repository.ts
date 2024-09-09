import { inject, injectable } from "inversify";
import { ApiPagination } from "../entities/api-pagination";
import { ApiPaginationResponse } from "../entities/responses/api-pagination-response";
import { UserResponse } from "../entities/responses/user-response";
import { User } from "../entities/user";
import { SafeApiCaller } from "../infrastructure/safe-api-caller";
import type { IUserHttp } from "../services/http/user-http";
import { ApiPaginationResponseTransform } from "../transforms/api-pagination-response-transform";

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
      ApiPaginationResponse(UserResponse)
    );
    // TODO: Add error handling
    return ApiPaginationResponseTransform.transform(response, User);
  }
}

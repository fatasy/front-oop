import { inject, injectable } from "inversify";
import { ApiPagination } from "../entities/api-pagination";
import { ApiPaginationResponse } from "../entities/responses/api-pagination-response";
import { UserResponse } from "../entities/responses/user-response";
import { User } from "../entities/user";
import type { IUserHttp } from "../services/http/user-http";
import { ApiPaginationResponseTransform } from "../transforms/api-pagination-response-transform";
import { safeApiCall } from "../utils/safe-api-call";

export interface IUserRepository {
  getUsers(): Promise<ApiPagination<User>>;
}

@injectable()
export class UserRepository implements IUserRepository {
  private userHttp: IUserHttp;

  constructor(@inject("UserHttp") userHttp: IUserHttp) {
    this.userHttp = userHttp;
  }

  async getUsers(): Promise<ApiPagination<User>> {
    const response = await safeApiCall(
      this.userHttp.getUsers(),
      ApiPaginationResponse(UserResponse)
    );

    return ApiPaginationResponseTransform.transform(response, User);
  }
}

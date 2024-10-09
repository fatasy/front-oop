import { ClassConstructor, plainToInstance } from "class-transformer";
import { ApiPagination } from "../entities/api-pagination";
import { TApiPaginationResponse } from "../entities/responses/api-pagination-response";

export class ApiPaginationResponseTransform {
  static transform<D, R>(
    data: TApiPaginationResponse<D>,
    plain: ClassConstructor<R>
  ) {
    return new ApiPagination(
      plainToInstance(plain, data.data),
      data.per_page,
      data.total,
      data.total_pages,
      data.current_page
    );
  }
}

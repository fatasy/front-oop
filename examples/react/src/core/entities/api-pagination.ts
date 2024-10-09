import { Expose } from "class-transformer";

export class ApiPagination<D = unknown> {
  @Expose({ name: "current_page" })
  currentPage?: number;

  @Expose({ name: "per_page" })
  perPage: number;

  total: number;

  @Expose({ name: "total_pages" })
  totalPages: number;

  data: D[] = [];

  constructor(
    data: D[],
    perPage: number,
    total: number,
    totalPages: number,
    currentPage?: number
  ) {
    this.currentPage = currentPage;
    this.perPage = perPage;
    this.total = total;
    this.totalPages = totalPages;
    this.data = data;
  }
}

import { z } from "zod";
import { ApiPaginationResponse } from "./api-pagination-response";

export const UsersResponse = ApiPaginationResponse(
  z.object({
    id: z.number(),
    email: z.string(),
    first_name: z.string(),
    last_name: z.string(),
  })
);

export type TUsersResponse = z.infer<typeof UsersResponse>;

import { ZodTypeAny, z } from "zod";

const ApiPaginationMetaResponse = z.object({
  current_page: z.number().optional(),
  per_page: z.number(),
  total: z.number(),
  total_pages: z.number(),
});

export const ApiPaginationResponse = <T extends ZodTypeAny>(object: T) => {
  return z
    .object({
      data: z.array(object).default([]),
    })
    .merge(ApiPaginationMetaResponse);
};

export type TApiPaginationResponse<T = unknown> = {
  data: T[];
} & z.infer<typeof ApiPaginationMetaResponse>;

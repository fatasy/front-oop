import { z } from "zod";
import { WrappedResponse } from "../entities/wrapped-response";

export const safeApiCall = async <
  T extends Promise<WrappedResponse<unknown>>,
  R extends z.ZodType
>(
  request: T,
  schema: R
): Promise<R["_output"]> => {
  const response = await request;

  const result = await schema.safeParseAsync(response);
  if (result.success) return result.data as R;
  console.log({ result });

  console.warn(result.error);
  throw result.error;
};

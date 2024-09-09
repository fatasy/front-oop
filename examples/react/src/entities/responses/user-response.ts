import { z } from "zod";

export const UserResponse = z.object({
  id: z.number(),
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
});

export type TUserResponse = z.infer<typeof UserResponse>;

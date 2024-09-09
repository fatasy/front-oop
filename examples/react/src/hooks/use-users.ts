import { useQuery } from "@tanstack/react-query";

import { ApiPagination } from "../entities/api-pagination";
import { User } from "../entities/user";
import { useRepository } from "./use-repository";

export const useUsers = () => {
  const { userRepository } = useRepository();
  return useQuery<ApiPagination<User>>({
    queryKey: ["users"],
    queryFn: () => userRepository.getUsers(),
  });
};

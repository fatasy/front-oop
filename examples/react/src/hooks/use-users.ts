import { useQuery } from "@tanstack/react-query";

import { ApiPagination } from "../entities/api-pagination";
import { User } from "../entities/user";
import { IUserRepository } from "../repository/user-repository";

const USERS_QUERY_KEY = "users";

export const useUsers = (userRepository: IUserRepository) => {
  return useQuery<ApiPagination<User>>({
    queryKey: [USERS_QUERY_KEY],
    queryFn: () => userRepository.getUsers(),
  });
};

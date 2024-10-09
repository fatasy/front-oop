import React, { createContext } from "react";
import { container } from "../../inversify.config";
import { IUserRepository } from "../../features/user/repository/user-repository";

export interface RepositoryContextProps {
  userRepository: IUserRepository;
}

export const RepositoryContext = createContext<
  RepositoryContextProps | undefined
>(undefined);

export const RepositoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const userRepository = container.get<IUserRepository>("UserRepository");

  return (
    <RepositoryContext.Provider value={{ userRepository }}>
      {children}
    </RepositoryContext.Provider>
  );
};

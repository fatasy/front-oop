import React from "react";
import { RepositoryContext } from "../contexts/repository-context";

export const useRepository = () => {
  const context = React.useContext(RepositoryContext);
  if (!context) {
    throw new Error("useRepository must be used within a RepositoryProvider");
  }
  return context;
};

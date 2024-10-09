import React from "react";
import { RepositoryContext } from "../provider/repository-provider";

export const useRepository = () => {
  const context = React.useContext(RepositoryContext);
  if (!context) {
    throw new Error("useRepository must be used within a RepositoryProvider");
  }
  return context;
};

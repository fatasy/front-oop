import React from "react";
import { HttpClientContext } from "../provider/http-client-provider";

export const useHttpClient = () => {
  const context = React.useContext(HttpClientContext);
  if (!context) {
    throw new Error(
      "HttpClientContext must be used within a RepositoryProvider"
    );
  }
  return context;
};

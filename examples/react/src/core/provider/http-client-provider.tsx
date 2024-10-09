import React from "react";
import { container } from "../../inversify.config";
import { IHttpClient } from "../services/http/i-http-service";

export interface HttpClientProviderProps {
  setHeaders: (headers: Record<string, string>) => void;
}

export const HttpClientContext = React.createContext<
  HttpClientProviderProps | undefined
>(undefined);

export const HttpClientProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const httpClient = container.get<IHttpClient>("HttpClient");

  const setHeaders = (headers: Record<string, string>) => {
    httpClient.setHeaders(headers);
  };

  return (
    <HttpClientContext.Provider value={{ setHeaders }}>
      {children}
    </HttpClientContext.Provider>
  );
};

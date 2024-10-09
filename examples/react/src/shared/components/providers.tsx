import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HttpClientProvider } from "../../core/provider/http-client-provider";
import { RepositoryProvider } from "../../core/provider/repository-provider";
import { ComposeProviders, Provider } from "./compose-provider";

const queryClient = new QueryClient();

function createProvider<TProps>(
  Provider: React.ComponentType<React.PropsWithChildren<TProps>>,
  props?: Omit<TProps, "children">
): Provider<TProps> {
  return { Provider, props };
}

export const Providers = ComposeProviders([
  createProvider(QueryClientProvider, { client: queryClient }),
  createProvider(RepositoryProvider),
  createProvider(HttpClientProvider),
]);

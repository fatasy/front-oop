import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RepositoryProvider } from "../contexts/repository-context";
import { ComposeProviders, Provider } from "./ComposeProvider";

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
]);

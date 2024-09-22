/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export type Provider<TProps> = {
  Provider: React.ComponentType<React.PropsWithChildren<TProps>>;
  props?: Omit<TProps, "children">;
};

export const ComposeProviders = <TProviders extends Array<Provider<any>>>(
  providers: TProviders
): React.ComponentType<React.PropsWithChildren> => {
  const ProviderComponent: React.FunctionComponent<React.PropsWithChildren> = ({
    children,
  }) => {
    const initialJSX = <>{children}</>;

    return providers.reduceRight<JSX.Element>(
      (prevJSX, { Provider: CurrentProvider, props = {} }) => {
        return <CurrentProvider {...props}>{prevJSX}</CurrentProvider>;
      },
      initialJSX
    );
  };

  return ProviderComponent;
};

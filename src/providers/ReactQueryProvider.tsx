import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 2000,
    },
    mutations: {
      networkMode: "always",
    },
  },
});

type ReactQueryProviderProps = {
  children: ReactNode;
};

export const ReactQueryProvider: React.FC<ReactQueryProviderProps> = (
  props
) => {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
};

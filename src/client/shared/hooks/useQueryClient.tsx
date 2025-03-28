"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";

export function useQueryClientProvider() {
  const [queryClient] = useState(() => new QueryClient());
  return queryClient;
}

export function QueryProvider({ children }: { children: ReactNode }) {
  const queryClient = useQueryClientProvider();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

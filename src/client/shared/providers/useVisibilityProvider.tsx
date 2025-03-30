"use client";

import { createContext, useContext, useState, ReactNode } from "react";

const VisibilityContext = createContext<{
  isVisible: boolean;
  toggle: () => void;
}>({
  isVisible: false,
  toggle: () => {},
});

export function VisibilityProvider({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => setIsVisible(!isVisible);

  return (
    <VisibilityContext.Provider value={{ isVisible, toggle }}>
      {children}
    </VisibilityContext.Provider>
  );
}

export const useVisibility = () => useContext(VisibilityContext);

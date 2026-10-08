import { createContext } from 'react';

export interface ErrorBoundaryContextValue {
  showBoundary: (error: unknown) => void;
  resetBoundary: () => void;
}

export const ErrorBoundaryContext = createContext<ErrorBoundaryContextValue | null>(null);

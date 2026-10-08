import { useContext, useState, useCallback } from 'react';
import { ErrorBoundaryContext, ErrorBoundaryContextValue } from '../context/ErrorBoundaryContext';

export type UseErrorBoundaryReturn = ErrorBoundaryContextValue;

/**
 * useErrorBoundary - Primitives hook allowing functional components to imperatively
 * throw errors to the nearest ErrorBoundary or reset the boundary.
 */
export function useErrorBoundary(): UseErrorBoundaryReturn {
  const context = useContext(ErrorBoundaryContext);
  const [, setError] = useState<unknown>(null);

  const fallbackShowBoundary = useCallback((err: unknown) => {
    setError(() => {
      throw err instanceof Error ? err : new Error(String(err));
    });
  }, []);

  const fallbackResetBoundary = useCallback(() => {
    setError(null);
  }, []);

  if (context) {
    return context;
  }

  return {
    showBoundary: fallbackShowBoundary,
    resetBoundary: fallbackResetBoundary,
  };
}

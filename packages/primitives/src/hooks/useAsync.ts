import { useState, useCallback, useEffect } from 'react';

export type AsyncStatus = 'idle' | 'pending' | 'success' | 'error';

export interface UseAsyncReturn<T> {
  execute: (...args: any[]) => Promise<T>;
  status: AsyncStatus;
  value: T | null;
  error: Error | null;
  isLoading: boolean;
}

/**
 * useAsync - Manages async operation lifecycle, providing loading flags, data values, and error states.
 */
export function useAsync<T>(
  asyncFunction: (...args: any[]) => Promise<T>,
  immediate: boolean = true
): UseAsyncReturn<T> {
  const [status, setStatus] = useState<AsyncStatus>('idle');
  const [value, setValue] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(
    async (...args: any[]) => {
      setStatus('pending');
      setValue(null);
      setError(null);

      try {
        const response = await asyncFunction(...args);
        setValue(response);
        setStatus('success');
        return response;
      } catch (err) {
        const errorObj = err instanceof Error ? err : new Error('Async error');
        setError(errorObj);
        setStatus('error');
        throw errorObj;
      }
    },
    [asyncFunction]
  );

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return {
    execute,
    status,
    value,
    error,
    isLoading: status === 'pending',
  };
}

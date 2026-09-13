import { useEffect, useRef } from 'react';

/**
 * usePrevious - Returns the value from the previous render cycle.
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

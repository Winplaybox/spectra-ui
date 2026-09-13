import { useState, useEffect } from 'react';

/**
 * useDebounce - Delays updating a value until a specified delay has passed without changes.
 * Ideal for search queries, autosave, and expensive calculations.
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

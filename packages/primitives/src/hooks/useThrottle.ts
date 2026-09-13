import { useState, useEffect, useRef } from 'react';

/**
 * useThrottle - Limits execution frequency of updating a value to at most once per interval.
 * Ideal for high-frequency scroll, resize, or pointer coordinate streams.
 */
export function useThrottle<T>(value: T, interval: number = 300): T {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastExecuted = useRef<number>(Date.now());

  useEffect(() => {
    const elapsed = Date.now() - lastExecuted.current;

    if (elapsed >= interval) {
      lastExecuted.current = Date.now();
      setThrottledValue(value);
    } else {
      const timer = setTimeout(() => {
        lastExecuted.current = Date.now();
        setThrottledValue(value);
      }, interval - elapsed);

      return () => clearTimeout(timer);
    }
  }, [value, interval]);

  return throttledValue;
}

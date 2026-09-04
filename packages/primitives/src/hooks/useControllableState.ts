import { useState, useCallback } from 'react';

export interface UseControllableStateProps<T> {
  value?: T;
  defaultValue?: T | (() => T);
  onChange?: (value: T) => void;
}

export function useControllableState<T>({
  value: valueProp,
  defaultValue,
  onChange,
}: UseControllableStateProps<T>): [T, (next: T | ((prev: T) => T)) => void] {
  const [uncontrolledValue, setUncontrolledValue] = useState<T>(defaultValue as T);
  const isControlled = valueProp !== undefined;
  const value = isControlled ? valueProp : uncontrolledValue;

  const setValue = useCallback(
    (next: T | ((prev: T) => T)) => {
      const nextValue = typeof next === 'function' ? (next as (prev: T) => T)(value) : next;
      if (!isControlled) {
        setUncontrolledValue(nextValue);
      }
      onChange?.(nextValue);
    },
    [isControlled, onChange, value]
  );

  return [value, setValue];
}

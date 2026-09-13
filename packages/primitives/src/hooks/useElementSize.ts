import { useState, useCallback, useRef } from 'react';

export interface ElementSize {
  width: number;
  height: number;
}

/**
 * useElementSize - Measures the real-time rendered width and height of a DOM element using ResizeObserver.
 */
export function useElementSize<T extends HTMLElement = HTMLElement>(): [
  (node: T | null) => void,
  ElementSize
] {
  const [size, setSize] = useState<ElementSize>({ width: 0, height: 0 });
  const observerRef = useRef<ResizeObserver | null>(null);

  const refCallback = useCallback((node: T | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    if (node && typeof ResizeObserver !== 'undefined') {
      observerRef.current = new ResizeObserver((entries) => {
        if (!entries[0]) return;
        const { width, height } = entries[0].contentRect;
        setSize({ width: Math.round(width), height: Math.round(height) });
      });
      observerRef.current.observe(node);
    }
  }, []);

  return [refCallback, size];
}

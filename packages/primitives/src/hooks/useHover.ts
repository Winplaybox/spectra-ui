import { useState, useRef, useCallback } from 'react';

/**
 * useHover - Detects pointer hover state on an attached DOM element.
 * Automatically handles mouseenter and mouseleave events.
 */
export function useHover<T extends HTMLElement = HTMLElement>(): [
  (node: T | null) => void,
  boolean
] {
  const [isHovered, setIsHovered] = useState(false);
  const elementRef = useRef<T | null>(null);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const refCallback = useCallback(
    (node: T | null) => {
      if (elementRef.current) {
        elementRef.current.removeEventListener('mouseenter', handleMouseEnter);
        elementRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }

      elementRef.current = node;

      if (node) {
        node.addEventListener('mouseenter', handleMouseEnter);
        node.addEventListener('mouseleave', handleMouseLeave);
      }
    },
    [handleMouseEnter, handleMouseLeave]
  );

  return [refCallback, isHovered];
}

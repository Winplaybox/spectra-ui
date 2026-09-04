import { useState, useCallback, useEffect, useRef } from 'react';

export interface UseListNavigationOptions {
  itemCount: number;
  orientation?: 'vertical' | 'horizontal';
  loop?: boolean;
  onSelect?: (index: number) => void;
}

export function useListNavigation({
  itemCount,
  orientation = 'vertical',
  loop = true,
  onSelect,
}: UseListNavigationOptions) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const listRef = useRef<HTMLElement | null>(null);

  const moveNext = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev >= itemCount - 1) return loop ? 0 : prev;
      return prev + 1;
    });
  }, [itemCount, loop]);

  const movePrev = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev <= 0) return loop ? itemCount - 1 : 0;
      return prev - 1;
    });
  }, [itemCount, loop]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent | KeyboardEvent) => {
      const isVertical = orientation === 'vertical';
      const nextKey = isVertical ? 'ArrowDown' : 'ArrowRight';
      const prevKey = isVertical ? 'ArrowUp' : 'ArrowLeft';

      if (e.key === nextKey) {
        e.preventDefault();
        moveNext();
      } else if (e.key === prevKey) {
        e.preventDefault();
        movePrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setActiveIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setActiveIndex(itemCount - 1);
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onSelect?.(activeIndex);
      }
    },
    [activeIndex, itemCount, moveNext, movePrev, onSelect, orientation]
  );

  return {
    activeIndex,
    setActiveIndex,
    handleKeyDown,
    listRef,
  };
}

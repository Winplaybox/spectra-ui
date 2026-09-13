import { useEffect } from 'react';

/**
 * useScrollLock - Locks scrolling on the document body when active (e.g. while modal, drawer, or dialog is open).
 * Automatically restores previous body overflow on unmount or deactivation.
 */
export function useScrollLock(locked: boolean = true): void {
  useEffect(() => {
    if (typeof document === 'undefined' || !locked) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Calculate scrollbar width to prevent layout shift
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [locked]);
}

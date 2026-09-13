import { useState, useEffect } from 'react';

export type BreakpointKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface BreakpointState {
  breakpoint: BreakpointKey;
  width: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const BREAKPOINT_QUERIES: Record<BreakpointKey, number> = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

/**
 * useBreakpoint - Provides reactive access to responsive viewport thresholds.
 * Synchronized with the Spectra UI 4px design token grid.
 */
export function useBreakpoint(): BreakpointState {
  const getBreakpoint = (width: number): BreakpointKey => {
    if (width >= BREAKPOINT_QUERIES.xl) return 'xl';
    if (width >= BREAKPOINT_QUERIES.lg) return 'lg';
    if (width >= BREAKPOINT_QUERIES.md) return 'md';
    if (width >= BREAKPOINT_QUERIES.sm) return 'sm';
    return 'xs';
  };

  const [state, setState] = useState<BreakpointState>(() => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const bp = getBreakpoint(width);
    return {
      breakpoint: bp,
      width,
      isMobile: bp === 'xs' || bp === 'sm',
      isTablet: bp === 'md',
      isDesktop: bp === 'lg' || bp === 'xl',
    };
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      const width = window.innerWidth;
      const bp = getBreakpoint(width);
      setState({
        breakpoint: bp,
        width,
        isMobile: bp === 'xs' || bp === 'sm',
        isTablet: bp === 'md',
        isDesktop: bp === 'lg' || bp === 'xl',
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return state;
}

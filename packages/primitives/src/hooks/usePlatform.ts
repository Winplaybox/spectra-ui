import { useMemo } from 'react';

export type PlatformType = 'web' | 'ios' | 'android' | 'macos' | 'windows' | 'linux';

export interface PlatformInfo {
  platform: PlatformType;
  isMobile: boolean;
  isDesktop: boolean;
  isTouch: boolean;
  userAgent: string;
}

/**
 * usePlatform - Identifies current client operating system and runtime environment.
 * Safely handles server-side rendering (SSR) environments.
 */
export function usePlatform(): PlatformInfo {
  return useMemo(() => {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
      return {
        platform: 'web',
        isMobile: false,
        isDesktop: true,
        isTouch: false,
        userAgent: 'SSR',
      };
    }

    const ua = navigator.userAgent;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    let platform: PlatformType = 'web';
    let isMobile = false;

    if (/iPad|iPhone|iPod/.test(ua)) {
      platform = 'ios';
      isMobile = true;
    } else if (/Android/.test(ua)) {
      platform = 'android';
      isMobile = true;
    } else if (/Macintosh|Mac OS X/.test(ua)) {
      platform = 'macos';
    } else if (/Windows NT/.test(ua)) {
      platform = 'windows';
    } else if (/Linux/.test(ua)) {
      platform = 'linux';
    }

    return {
      platform,
      isMobile,
      isDesktop: !isMobile,
      isTouch,
      userAgent: ua,
    };
  }, []);
}

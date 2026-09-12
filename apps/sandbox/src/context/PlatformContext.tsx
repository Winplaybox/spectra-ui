import React, { createContext, useContext, useState, useEffect } from 'react';
import { Platform, PLATFORMS, PlatformMetadata } from '../data/platformData';

export interface PlatformContextType {
  currentPlatform: Platform;
  setPlatform: (platform: Platform) => void;
  metadata: PlatformMetadata;
  allPlatforms: PlatformMetadata[];
}

const STORAGE_KEY = 'spectra-ui-active-platform';

const PlatformContext = createContext<PlatformContextType | undefined>(undefined);

export const PlatformProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPlatform, setCurrentPlatformState] = useState<Platform>(() => {
    try {
      // 1. Check URL query params (?platform=ios)
      const params = new URLSearchParams(window.location.search);
      const qPlatform = params.get('platform') as Platform;
      if (qPlatform && PLATFORMS[qPlatform]) {
        return qPlatform;
      }
      // 2. Check localStorage
      const saved = localStorage.getItem(STORAGE_KEY) as Platform;
      if (saved && PLATFORMS[saved]) {
        return saved;
      }
    } catch {
      // Ignore SSR / security exceptions
    }
    return 'web';
  });

  const setPlatform = (platform: Platform) => {
    if (PLATFORMS[platform]) {
      setCurrentPlatformState(platform);
      try {
        localStorage.setItem(STORAGE_KEY, platform);
        // Sync URL query without reloading
        const url = new URL(window.location.href);
        url.searchParams.set('platform', platform);
        window.history.replaceState({}, '', url.toString());
      } catch {
        // Ignore
      }
    }
  };

  useEffect(() => {
    // Listen for storage events across tabs
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue && PLATFORMS[e.newValue as Platform]) {
        setCurrentPlatformState(e.newValue as Platform);
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <PlatformContext.Provider
      value={{
        currentPlatform,
        setPlatform,
        metadata: PLATFORMS[currentPlatform],
        allPlatforms: Object.values(PLATFORMS),
      }}
    >
      {children}
    </PlatformContext.Provider>
  );
};

export const usePlatform = (): PlatformContextType => {
  const ctx = useContext(PlatformContext);
  if (!ctx) {
    return {
      currentPlatform: 'web',
      setPlatform: () => {},
      metadata: PLATFORMS['web'],
      allPlatforms: Object.values(PLATFORMS),
    };
  }
  return ctx;
};

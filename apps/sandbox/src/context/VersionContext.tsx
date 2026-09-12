import React, { createContext, useContext, useState } from 'react';
import { CURRENT_VERSION, RELEASES_DATA, VersionRelease, getComponentGitHubUrl } from '../data/versionReleaseData';

export interface VersionContextType {
  currentVersion: string;
  setCurrentVersion: (version: string) => void;
  releases: VersionRelease[];
  getGitHubUrl: (componentId: string, platform?: 'web' | 'native' | 'headless') => string;
}

const VersionContext = createContext<VersionContextType | undefined>(undefined);

export const VersionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentVersion, setCurrentVersion] = useState<string>(CURRENT_VERSION);

  const getGitHubUrl = (
    componentId: string,
    platform: 'web' | 'native' | 'headless' = 'web'
  ): string => {
    return getComponentGitHubUrl(componentId, platform, currentVersion);
  };

  return (
    <VersionContext.Provider
      value={{
        currentVersion,
        setCurrentVersion,
        releases: RELEASES_DATA,
        getGitHubUrl,
      }}
    >
      {children}
    </VersionContext.Provider>
  );
};

export const useVersion = (): VersionContextType => {
  const ctx = useContext(VersionContext);
  if (!ctx) {
    return {
      currentVersion: CURRENT_VERSION,
      setCurrentVersion: () => {},
      releases: RELEASES_DATA,
      getGitHubUrl: (componentId: string, platform: 'web' | 'native' | 'headless' = 'web') =>
        getComponentGitHubUrl(componentId, platform, CURRENT_VERSION),
    };
  }
  return ctx;
};

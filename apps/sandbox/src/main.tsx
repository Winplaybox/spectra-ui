import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { SpectraProvider } from '@spectra/react';
import { VersionProvider } from './context/VersionContext';
import { PlatformProvider } from './context/PlatformContext';
import '@spectra/tokens/css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SpectraProvider defaultPack="minimal" defaultColorScheme="light">
      <VersionProvider>
        <PlatformProvider>
          <App />
        </PlatformProvider>
      </VersionProvider>
    </SpectraProvider>
  </React.StrictMode>
);

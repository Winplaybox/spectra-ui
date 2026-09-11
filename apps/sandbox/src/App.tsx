import React, { useState, useEffect } from 'react';
import { useColorScheme } from '@spectra/react';
import { Sidebar } from './components/dashboard/Sidebar';
import { Header } from './components/dashboard/Header';
import { OverviewSection } from './components/dashboard/OverviewSection';
import { InstallationSection } from './components/dashboard/InstallationSection';
import { CrossPlatformSection } from './components/dashboard/CrossPlatformSection';
import { TokensSection } from './components/dashboard/TokensSection';
import { MotionSection } from './components/dashboard/MotionSection';
import { ComponentsSection } from './components/dashboard/ComponentsSection';
import { HooksSection } from './components/dashboard/HooksSection';
import { SearchPalette } from './components/dashboard/SearchPalette';
import { getCurrentRoute, subscribeToRoute, RouteState, navigate } from './utils/router';
import { SpinnerIcon } from '@spectra/icons';
import { BreathingDotsBackground } from './components/dashboard/BreathingDotsBackground';

const IconExplorer = React.lazy(() => import('./components/IconExplorer'));

export const App: React.FC = () => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [ambientIntensity, setAmbientIntensity] = useState<'subtle' | 'balanced' | 'vivid' | 'off'>('balanced');
  const [currentRoute, setCurrentRoute] = useState<RouteState>(getCurrentRoute());
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const cycleAmbientIntensity = () => {
    setAmbientIntensity((prev) => {
      if (prev === 'subtle') return 'balanced';
      if (prev === 'balanced') return 'vivid';
      if (prev === 'vivid') return 'off';
      return 'subtle';
    });
  };

  // Subscribe to URL changes (popstate, pushState, hashchange)
  useEffect(() => {
    const unsubscribe = subscribeToRoute((newRoute) => {
      setCurrentRoute(newRoute);
    });
    return () => unsubscribe();
  }, []);

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
        return;
      }

      // Search: '/' or 'Ctrl+K' / 'Cmd+K'
      if (e.key === '/' || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) {
        e.preventDefault();
        setIsSearchOpen(true);
      }

      // Theme toggle: 'd' or 'D'
      if (e.key.toLowerCase() === 'd') {
        e.preventDefault();
        setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
      }

      // Ambient dots toggle: 'b' or 'B'
      if (e.key.toLowerCase() === 'b') {
        e.preventDefault();
        cycleAmbientIntensity();
      }

      // Quick numbers
      if (e.key === '1') navigate('/overview');
      if (e.key === '2') navigate('/installation');
      if (e.key === '3') navigate('/components/button');
      if (e.key === '4') navigate('/tokens/colors');
      if (e.key === '5') navigate('/icons');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [colorScheme, setColorScheme]);

  return (
    <div
      style={{
        height: '100vh',
        maxHeight: '100vh',
        display: 'flex',
        backgroundColor: colorScheme === 'dark' ? '#090D16' : '#F8FAFC',
        color: 'var(--color-text-primary)',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dynamic Breathing Dots Background (Dave Whyte / Matt Rossman Checkpoint 7 WebGL Engine) */}
      <BreathingDotsBackground
        theme={colorScheme}
        enabled={ambientIntensity !== 'off'}
        intensity={ambientIntensity !== 'off' ? ambientIntensity : 'balanced'}
      />

      {/* Navigation Sidebar */}
      <Sidebar
        currentRoute={currentRoute}
        onOpenSearch={() => setIsSearchOpen(true)}
        isOpenMobile={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
      />

      {/* Main Canvas Area */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          minWidth: 0,
          position: 'relative',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        {/* Header Bar */}
        <Header
          currentRoute={currentRoute}
          onOpenMobileMenu={() => setIsMobileSidebarOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
          ambientIntensity={ambientIntensity}
          onCycleAmbientIntensity={cycleAmbientIntensity}
        />

        {/* Dynamic Route Content - Independent Smooth Scroll */}
        <main
          id="main-scroll-container"
          style={{
            flex: 1,
            minHeight: 0,
            padding: '36px 44px',
            overflowY: 'auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {currentRoute.type === 'overview' && (
            <OverviewSection />
          )}

          {currentRoute.type === 'installation' && (
            <InstallationSection />
          )}

          {currentRoute.type === 'cross-platform' && (
            <CrossPlatformSection />
          )}

          {currentRoute.type === 'tokens' && currentRoute.id === 'motion' && (
            <MotionSection />
          )}

          {currentRoute.type === 'tokens' && currentRoute.id !== 'motion' && (
            <TokensSection tokenId={currentRoute.id || 'colors'} />
          )}

          {currentRoute.type === 'components' && (
            <ComponentsSection componentId={currentRoute.id || 'button'} />
          )}

          {currentRoute.type === 'hooks' && (
            <HooksSection hookId={currentRoute.id} />
          )}

          {currentRoute.type === 'icons' && (
            <React.Suspense
              fallback={
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 12,
                    padding: 80,
                    color: 'var(--color-text-muted)',
                  }}
                >
                  <SpinnerIcon size={24} style={{ animation: 'spin 1s linear infinite' }} />
                  <span>Loading 12,253 Vector Icons...</span>
                </div>
              }
            >
              <IconExplorer />
            </React.Suspense>
          )}
        </main>
      </div>

      {/* Search Modal */}
      <SearchPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
};

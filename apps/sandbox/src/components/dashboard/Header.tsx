import React, { useState } from 'react';
import { useColorScheme } from '@spectra/react';
import {
  SunIcon,
  MoonIcon,
  SearchIcon,
  MenuIcon,
  ChevronRightIcon,
  SettingsIcon,
  GitHubIcon,
} from '@spectra/icons';
import { RouteState, navigate } from '../../utils/router';
import { COMPONENT_CATEGORIES } from './Sidebar';
import { SettingsDrawer } from './SettingsDrawer';

interface HeaderProps {
  currentRoute: RouteState;
  onOpenMobileMenu: () => void;
  onOpenSearch: () => void;
  ambientIntensity?: 'subtle' | 'balanced' | 'vivid' | 'off';
  onSetAmbientIntensity?: (intensity: 'subtle' | 'balanced' | 'vivid' | 'off') => void;
  onCycleAmbientIntensity?: () => void;
  onOpenCookieModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onOpenMobileMenu,
  onOpenSearch,
  ambientIntensity = 'balanced',
  onSetAmbientIntensity,
  onOpenCookieModal,
}) => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const getBreadcrumbs = (): Array<{ label: string; href?: string }> => {
    const items: Array<{ label: string; href?: string }> = [
      { label: 'Spectra UI', href: '/overview' },
    ];

    switch (currentRoute.type) {
      case 'overview':
        items.push({ label: 'Overview' });
        break;
      case 'installation':
        items.push({ label: 'Getting Started', href: '/installation' });
        items.push({ label: 'Installation' });
        break;
      case 'cross-platform':
        items.push({ label: 'Architecture', href: '/cross-platform' });
        items.push({ label: 'Cross-Platform Matrix' });
        break;
      case 'tokens':
        items.push({ label: 'Design Tokens', href: '/tokens/colors' });
        if (currentRoute.id) {
          const tokenName = currentRoute.id.charAt(0).toUpperCase() + currentRoute.id.slice(1);
          items.push({ label: tokenName });
        }
        break;
      case 'components':
        items.push({ label: 'Components', href: '/components' });
        if (currentRoute.id && currentRoute.id !== 'all-components' && currentRoute.id !== 'all') {
          const compCat = COMPONENT_CATEGORIES.find((cat) =>
            cat.components.some((c) => c.id === currentRoute.id)
          );
          if (compCat) {
            items.push({ label: compCat.name, href: `/components#${compCat.id}` });
          }
          const compItem = compCat?.components.find((c) => c.id === currentRoute.id);
          items.push({ label: compItem ? compItem.name : currentRoute.id });
        } else {
          items.push({ label: 'All Components' });
        }
        break;
      case 'hooks':
        items.push({ label: 'Hooks', href: '/hooks/use-disclosure' });
        if (currentRoute.id) {
          items.push({ label: currentRoute.id });
        }
        break;
      case 'icons':
        items.push({ label: 'Icons', href: '/icons' });
        items.push({ label: '12,253 Catalog' });
        break;
      default:
        break;
    }
    return items;
  };

  return (
    <>
      <header
        style={{
          borderBottom: '1px solid var(--color-border-default)',
          backgroundColor: colorScheme === 'dark' ? 'rgba(9, 13, 22, 0.94)' : 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          padding: '12px 28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 30,
          flexShrink: 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Mobile menu trigger */}
          <button
            onClick={onOpenMobileMenu}
            aria-label="Toggle navigation menu"
            style={{
              display: 'none',
              padding: '6px 10px',
              borderRadius: 4,
              border: '1px solid var(--color-border-default)',
              backgroundColor: 'var(--color-surface-raised)',
              color: 'var(--color-text-primary)',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="mobile-menu-btn"
          >
            <MenuIcon size={16} />
          </button>

          {/* Clean Dynamic Interactive Breadcrumbs (Zero Emojis) */}
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}>
            {getBreadcrumbs().map((crumb, idx, arr) => {
              const isLast = idx === arr.length - 1;
              return (
                <React.Fragment key={`${crumb.label}-${idx}`}>
                  {idx > 0 && (
                    <ChevronRightIcon
                      size={11}
                      style={{ color: 'var(--color-text-muted)', opacity: 0.6, flexShrink: 0 }}
                    />
                  )}
                  {isLast || !crumb.href ? (
                    <span
                      style={{
                        fontWeight: 600,
                        color: 'var(--color-text-primary)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {crumb.label}
                    </span>
                  ) : (
                    <a
                      href={crumb.href}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(crumb.href!);
                      }}
                      style={{
                        color: 'var(--color-text-secondary)',
                        textDecoration: 'none',
                        fontWeight: 500,
                        whiteSpace: 'nowrap',
                        transition: 'color 0.12s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-action-primary)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
                    >
                      {crumb.label}
                    </a>
                  )}
                </React.Fragment>
              );
            })}
          </nav>
        </div>

        {/* Global Controls: Focused and Decluttered */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* Search trigger (Ctrl+K) */}
          <button
            onClick={onOpenSearch}
            title="Search documentation (Ctrl+K)"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 12px',
              borderRadius: 6,
              border: '1px solid var(--color-border-default)',
              backgroundColor: 'var(--color-surface-raised)',
              color: 'var(--color-text-muted)',
              cursor: 'pointer',
              fontSize: 12,
              transition: 'all 0.15s ease',
            }}
          >
            <SearchIcon size={14} />
            <span>Search...</span>
            <kbd
              style={{
                fontSize: 10,
                padding: '1px 5px',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 4,
                fontFamily: 'inherit',
              }}
            >
              Ctrl+K
            </kbd>
          </button>

          {/* Color Scheme Switcher (Light / Dark) */}
          <div
            style={{
              display: 'flex',
              backgroundColor: 'var(--color-surface-raised)',
              padding: 3,
              borderRadius: 6,
              border: '1px solid var(--color-border-default)',
            }}
          >
            <button
              onClick={() => setColorScheme('light')}
              title="Switch to Light mode (Press D)"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                padding: '4px 9px',
                borderRadius: 4,
                border: 'none',
                backgroundColor: colorScheme === 'light' ? 'var(--color-surface)' : 'transparent',
                color: colorScheme === 'light' ? 'var(--color-action-primary)' : 'var(--color-text-muted)',
                cursor: 'pointer',
                fontSize: 12,
                fontWeight: 600,
                transition: 'all 0.15s ease',
              }}
            >
              <SunIcon size={13} />
              <span>Light</span>
            </button>
            <button
              onClick={() => setColorScheme('dark')}
              title="Switch to Dark mode (Press D)"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                padding: '4px 9px',
                borderRadius: 4,
                border: 'none',
                backgroundColor: colorScheme === 'dark' ? 'var(--color-surface)' : 'transparent',
                color: colorScheme === 'dark' ? 'var(--color-action-primary)' : 'var(--color-text-muted)',
                cursor: 'pointer',
                fontSize: 12,
                fontWeight: 600,
                transition: 'all 0.15s ease',
              }}
            >
              <MoonIcon size={13} />
              <span>Dark</span>
            </button>
          </div>

          {/* GitHub Repository Link */}
          <a
            href="https://github.com/Winplaybox/spectra-ui"
            target="_blank"
            rel="noreferrer"
            title="GitHub Repository"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 32,
              height: 32,
              borderRadius: 6,
              border: '1px solid var(--color-border-default)',
              backgroundColor: 'var(--color-surface-raised)',
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
              transition: 'all 0.15s ease',
            }}
          >
            <GitHubIcon size={16} />
          </a>

          {/* Settings Drawer Button (Opens secondary preferences) */}
          <button
            onClick={() => setIsSettingsOpen(true)}
            title="Documentation Settings & Preferences"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 32,
              height: 32,
              borderRadius: 6,
              border: '1px solid var(--color-border-default)',
              backgroundColor: isSettingsOpen ? 'var(--color-action-primary)' : 'var(--color-surface-raised)',
              color: isSettingsOpen ? '#FFFFFF' : 'var(--color-text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <SettingsIcon size={15} />
          </button>
        </div>
      </header>

      {/* Settings Drawer Modal/Slide-over */}
      <SettingsDrawer
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        ambientIntensity={ambientIntensity}
        onSetAmbientIntensity={onSetAmbientIntensity}
        onOpenCookieModal={onOpenCookieModal}
      />
    </>
  );
};

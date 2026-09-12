import React, { useState, useRef, useEffect } from 'react';
import { useColorScheme, useRTL } from '@spectra/react';
import { SunIcon, MoonIcon, SearchIcon, ExternalLinkIcon, MenuIcon, ChevronDownIcon, CheckIcon, ChevronRightIcon } from '@spectra/icons';
import { RouteState, navigate } from '../../utils/router';
import { useVersion } from '../../context/VersionContext';
import { COMPONENT_CATEGORIES } from './Sidebar';

interface HeaderProps {
  currentRoute: RouteState;
  onOpenMobileMenu: () => void;
  onOpenSearch: () => void;
  ambientIntensity?: 'subtle' | 'balanced' | 'vivid' | 'off';
  onCycleAmbientIntensity?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onOpenMobileMenu,
  onOpenSearch,
  ambientIntensity = 'balanced',
  onCycleAmbientIntensity,
}) => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const { isRTL, toggleRTL } = useRTL();
  const { currentVersion, setCurrentVersion, releases } = useVersion();

  // Version selector state (MUI-benchmark)
  const [versionOpen, setVersionOpen] = useState(false);
  const versionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (versionRef.current && !versionRef.current.contains(e.target as Node)) {
        setVersionOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
        items.push({ label: 'Cross-Platform (Web & Native)' });
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
    <header
      style={{
        borderBottom: '1px solid var(--color-border-default)',
        backgroundColor: colorScheme === 'dark' ? 'rgba(9, 13, 22, 0.94)' : 'rgba(255, 255, 255, 0.96)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        padding: '12px 32px',
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

        {/* Dynamic Interactive Breadcrumbs (MUI & Fluent 2 benchmark) */}
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

      {/* Global Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {/* MUI-Benchmarked Version Selector Dropdown */}
        <div ref={versionRef} style={{ position: 'relative' }}>
          <button
            onClick={() => setVersionOpen(!versionOpen)}
            title="Switch release documentation version"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '5px 10px',
              borderRadius: 6,
              border: '1px solid var(--color-border-default)',
              backgroundColor: 'var(--color-surface-raised)',
              color: 'var(--color-text-primary)',
              cursor: 'pointer',
              fontSize: 12,
              fontWeight: 600,
              transition: 'all 0.15s ease',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: '#10B981',
                boxShadow: '0 0 8px #10B981',
              }}
            />
            <span>{currentVersion}</span>
            <ChevronDownIcon
              size={12}
              style={{
                transform: versionOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.15s ease',
                opacity: 0.7,
              }}
            />
          </button>

          {/* Version Dropdown Popover Menu */}
          {versionOpen && (
            <div
              style={{
                position: 'absolute',
                top: 'calc(100% + 6px)',
                right: 0,
                width: 280,
                backgroundColor: colorScheme === 'dark' ? '#0F172A' : '#FFFFFF',
                border: '1px solid var(--color-border-default)',
                borderRadius: 8,
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.28)',
                zIndex: 100,
                overflow: 'hidden',
                animation: 'spectra-fade-in 0.15s ease',
              }}
            >
              <div
                style={{
                  padding: '10px 14px 6px 14px',
                  fontSize: 10,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-text-muted)',
                }}
              >
                Release Versions
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', padding: '4px 6px' }}>
                {releases.map((rel) => {
                  const isCurrent = currentVersion === rel.version;
                  return (
                    <button
                      key={rel.version}
                      onClick={() => {
                        setCurrentVersion(rel.version);
                        setVersionOpen(false);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '8px 10px',
                        borderRadius: 6,
                        border: 'none',
                        backgroundColor: isCurrent ? 'var(--color-surface-raised)' : 'transparent',
                        color: 'var(--color-text-primary)',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontSize: 13,
                        transition: 'background-color 0.1s ease',
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <span style={{ fontWeight: isCurrent ? 700 : 500 }}>{rel.version}</span>
                          <span
                            style={{
                              fontSize: 10,
                              fontWeight: 700,
                              padding: '1px 6px',
                              borderRadius: 10,
                              backgroundColor: rel.status === 'latest' ? 'rgba(16, 185, 129, 0.15)' : 'var(--color-surface-raised)',
                              color: rel.status === 'latest' ? '#10B981' : 'var(--color-text-muted)',
                              border: `1px solid ${rel.status === 'latest' ? 'rgba(16, 185, 129, 0.3)' : 'var(--color-border-subtle)'}`,
                            }}
                          >
                            {rel.status.toUpperCase()}
                          </span>
                        </div>
                        <span style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>
                          {rel.releaseDate}
                        </span>
                      </div>

                      {isCurrent && <CheckIcon size={16} style={{ color: 'var(--color-action-primary)' }} />}
                    </button>
                  );
                })}
              </div>

              <div style={{ borderTop: '1px solid var(--color-border-subtle)', padding: '6px 6px' }}>
                <a
                  href="https://github.com/Winplaybox/spectra-ui/blob/main/CHANGELOG.md"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 10px',
                    borderRadius: 6,
                    color: 'var(--color-action-primary)',
                    textDecoration: 'none',
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  <span>View Full Changelog</span>
                  <ExternalLinkIcon size={13} />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Search trigger */}
        <button
          onClick={onOpenSearch}
          title="Search documentation (Ctrl+K)"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '6px 12px',
            borderRadius: 4,
            border: '1px solid var(--color-border-default)',
            backgroundColor: 'var(--color-surface-raised)',
            color: 'var(--color-text-muted)',
            cursor: 'pointer',
            fontSize: 12,
          }}
        >
          <SearchIcon size={14} />
          <span>Search...</span>
          <kbd style={{ fontSize: 10, padding: '1px 4px', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 3 }}>
            Ctrl+K
          </kbd>
        </button>

        {/* Ambient Breathing Dots Toggle */}
        <button
          onClick={onCycleAmbientIntensity}
          title={`Ambient Canvas Effect: ${ambientIntensity.toUpperCase()} (Click to toggle intensity)`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '5px 11px',
            borderRadius: 6,
            border: '1px solid var(--color-border-default)',
            backgroundColor: ambientIntensity !== 'off' ? 'var(--color-surface-raised)' : 'transparent',
            color: ambientIntensity !== 'off' ? 'var(--color-action-primary)' : 'var(--color-text-muted)',
            cursor: 'pointer',
            fontSize: 12,
            fontWeight: 600,
            transition: 'all 0.15s ease',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="4" cy="8" r="1.5" fill={ambientIntensity !== 'off' ? 'currentColor' : 'none'} />
            <circle cx="8" cy="8" r="1.5" fill={ambientIntensity !== 'off' ? 'currentColor' : 'none'} />
            <circle cx="12" cy="8" r="1.5" fill={ambientIntensity !== 'off' ? 'currentColor' : 'none'} />
            <circle cx="8" cy="4" r="1.5" fill={ambientIntensity !== 'off' ? 'currentColor' : 'none'} />
            <circle cx="8" cy="12" r="1.5" fill={ambientIntensity !== 'off' ? 'currentColor' : 'none'} />
          </svg>
          <span style={{ textTransform: 'capitalize' }}>Dots: {ambientIntensity}</span>
        </button>

        {/* Color Scheme Switcher (Strict Light & Dark - No AMOLED) */}
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
              gap: 6,
              padding: '4px 10px',
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
              gap: 6,
              padding: '4px 10px',
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

        {/* LTR / RTL toggle */}
        <button
          onClick={toggleRTL}
          title="Toggle Text Direction"
          style={{
            padding: '5px 10px',
            borderRadius: 4,
            border: '1px solid var(--color-border-default)',
            backgroundColor: isRTL ? 'var(--color-action-primary)' : 'var(--color-surface)',
            color: isRTL ? '#FFFFFF' : 'var(--color-text-primary)',
            cursor: 'pointer',
            fontSize: 11,
            fontWeight: 600,
          }}
        >
          {isRTL ? 'RTL' : 'LTR'}
        </button>
      </div>
    </header>
  );
};

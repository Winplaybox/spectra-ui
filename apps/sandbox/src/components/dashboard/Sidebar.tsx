import React, { useState, useEffect, useRef } from 'react';
import { useColorScheme } from '@winplaybox/react';
import { SearchIcon, ExternalLinkIcon, ChevronDownIcon, ComponentIcon, CheckIcon } from '@winplaybox/icons';
import { navigate, RouteState } from '../../utils/router';
import { useVersion } from '../../context/VersionContext';
import { usePlatform } from '../../context/PlatformContext';
import { PlatformIcon } from './PlatformIcon';
import { V010_NEW_COMPONENTS, V020_NEW_COMPONENTS } from '../../data/versionReleaseData';
import { COMPONENT_VARIANTS_MAP } from './ComponentVariantsShowcase';
import { NativeSponsorAd } from './NativeSponsorAd';
import { CookiePreferencesModal } from './CookiePreferencesModal';

interface SidebarProps {
  currentRoute: RouteState;
  onOpenSearch: () => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

import {
  SIDEBAR_NAVIGATION,
  COMPONENT_CATEGORIES,
  HOOK_CATEGORIES,
  NavSection,
  NavCategoryGroup,
  NavLeafItem,
  ComponentCategory,
  ComponentItem,
  getNavigationForPlatform,
  getComponentCategoriesForPlatform,
  getHookCategoriesForPlatform,
} from '../../data/navigationConfig';

export { COMPONENT_CATEGORIES };
export type { ComponentCategory, ComponentItem };

export const Sidebar: React.FC<SidebarProps> = ({
  currentRoute,
  onOpenSearch,
  isOpenMobile,
  onCloseMobile,
}) => {
  const { colorScheme } = useColorScheme();
  const { currentVersion } = useVersion();
  const { currentPlatform, setPlatform, metadata: platformMeta, allPlatforms } = usePlatform();
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);
  const [platformDropdownOpen, setPlatformDropdownOpen] = useState(false);
  const platformDropdownRef = useRef<HTMLDivElement>(null);

  // Dynamic platform-first navigation tree strictly filtered for active platform
  const platformNavigation = React.useMemo(() => {
    return getNavigationForPlatform(currentPlatform);
  }, [currentPlatform]);


  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (platformDropdownRef.current && !platformDropdownRef.current.contains(e.target as Node)) {
        setPlatformDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Track open/closed state for category folders (all open by default)
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    actions: true,
    form: true,
    layout: true,
    'data-display': true,
    feedback: true,
    navigation: true,
    surfaces: true,
    overlay: true,
  });

  const [currentHash, setCurrentHash] = useState(
    typeof window !== 'undefined' ? window.location.hash.substring(1) : ''
  );
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    components: true,
    'functional-hooks': true,
  });

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: prev[sectionId] !== undefined ? !prev[sectionId] : false,
    }));
  };

  // Auto-expand the active component's or hook's category on navigation
  useEffect(() => {
    if (currentRoute.type === 'components' && currentRoute.id) {
      const activeCat = COMPONENT_CATEGORIES.find((cat) =>
        cat.components.some((c) => c.id === currentRoute.id || c.children?.some((sub) => sub.id === currentRoute.id))
      );
      if (activeCat) {
        setExpandedCategories((prev) => ({ ...prev, [activeCat.id]: true }));
      }
    } else if (currentRoute.type === 'hooks' && currentRoute.id) {
      const activeHookCat = HOOK_CATEGORIES.find((cat) =>
        cat.items.some((item) => item.id === currentRoute.id)
      );
      if (activeHookCat) {
        setExpandedCategories((prev) => ({ ...prev, [activeHookCat.id]: true }));
      }
    } else if (currentRoute.type === 'motion') {
      setExpandedSections((prev) => ({ ...prev, 'motion-section': true }));
    } else if (currentRoute.type === 'utilities') {
      setExpandedSections((prev) => ({ ...prev, 'utilities-section': true }));
    } else if (currentRoute.type === 'guides') {
      setExpandedSections((prev) => ({ ...prev, 'architecture-guides': true }));
    }
  }, [currentRoute]);

  // Keep track of hash changes for in-page sub-tree anchors
  useEffect(() => {
    const handleHash = () => {
      setCurrentHash(window.location.hash.substring(1));
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const toggleCategory = (catId: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }));
  };

  const handleAnchorClick = (e: React.MouseEvent, compId: string, anchorId: string) => {
    e.preventDefault();
    if (compId.startsWith('motion')) {
      navigate(`/motion/${anchorId}`);
    } else if (compId.startsWith('util')) {
      navigate(`/utilities/${anchorId}`);
    } else if (compId.startsWith('guide')) {
      navigate(`/guides/${anchorId}`);
    } else {
      navigate(`/components/${compId}#${anchorId}`);
    }
    onCloseMobile();
  };


  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    navigate(path);
    onCloseMobile();
  };

  const isRouteActive = (path: string) => {
    return currentRoute.path === path;
  };

  const isComponentActive = (id: string) => {
    return currentRoute.type === 'components' && currentRoute.id === id;
  };

  const isAllComponentsActive =
    currentRoute.type === 'components' &&
    (currentRoute.id === 'all-components' || currentRoute.id === 'all' || !currentRoute.id);

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div
          onClick={onCloseMobile}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 40,
            backdropFilter: 'blur(2px)',
          }}
        />
      )}

      <aside
        className={`desktop-sidebar ${isOpenMobile ? 'mobile-open' : ''}`}
        style={{
          width: 260,
          flexShrink: 0,
          borderRight: '1px solid var(--color-border-subtle)',
          backgroundColor: colorScheme === 'dark' ? 'rgba(9, 13, 22, 0.94)' : 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Brand Header: Fluent 2 App Lockup */}
        <div
          style={{
            height: 48,
            minHeight: 48,
            padding: '0 16px',
            borderBottom: '1px solid var(--color-border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
          }}
        >
          <a
            href="/overview"
            onClick={(e) => handleLinkClick(e, '/overview')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 6,
                backgroundColor: 'var(--color-action-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: 14,
                boxShadow: '0 2px 6px rgba(0, 127, 255, 0.25)',
              }}
            >
              S
            </div>
            <div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: '-0.01em',
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.2,
                }}
              >
                Spectra UI
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: 'var(--color-text-muted)',
                  letterSpacing: '0.02em',
                  fontWeight: 500,
                }}
              >
                Fluent 2 Multi-Platform
              </div>
            </div>
          </a>

          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              padding: '1px 6px',
              backgroundColor: 'var(--color-surface-raised)',
              border: '1px solid var(--color-border-subtle)',
              borderRadius: 4,
              color: 'var(--color-text-secondary)',
            }}
          >
            {currentVersion}
          </span>
        </div>

        {/* Platform Selector Dropdown (Image 1 Benchmark) */}
        <div ref={platformDropdownRef} style={{ padding: '12px 16px 4px 16px', position: 'relative', flexShrink: 0 }}>
          <button
            onClick={() => setPlatformDropdownOpen(!platformDropdownOpen)}
            title="Switch documentation target platform"
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 12px',
              borderRadius: 8,
              border: '1px solid var(--color-border-default)',
              backgroundColor: 'var(--color-surface-raised)',
              color: 'var(--color-text-primary)',
              cursor: 'pointer',
              fontSize: 13,
              fontWeight: 600,
              transition: 'all 0.15s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <PlatformIcon platform={currentPlatform} size={16} color="var(--color-action-primary)" />
              <span>{platformMeta.name}</span>
            </div>
            <ChevronDownIcon
              size={13}
              style={{
                transform: platformDropdownOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.15s ease',
                opacity: 0.7,
              }}
            />
          </button>

          {/* Platform Popover Dropdown (Image 1 Benchmark) */}
          {platformDropdownOpen && (
            <div
              style={{
                position: 'absolute',
                top: 'calc(100% + 4px)',
                left: 16,
                right: 16,
                backgroundColor: colorScheme === 'dark' ? '#0F172A' : '#FFFFFF',
                border: '1px solid var(--color-border-default)',
                borderRadius: 8,
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.35)',
                zIndex: 100,
                overflow: 'hidden',
                padding: 4,
                animation: 'spectra-fade-in 0.12s ease',
              }}
            >
              {allPlatforms.map((p) => {
                const isCurrent = currentPlatform === p.id;
                const isComingSoon = p.id === 'windows' || p.id === 'macos';
                return (
                  <button
                    key={p.id}
                    disabled={isComingSoon}
                    onClick={() => {
                      if (isComingSoon) return;
                      setPlatform(p.id);
                      setPlatformDropdownOpen(false);
                    }}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 10px',
                      borderRadius: 6,
                      border: 'none',
                      backgroundColor: isCurrent ? 'rgba(0, 127, 255, 0.1)' : 'transparent',
                      color: isComingSoon
                        ? 'var(--color-text-muted)'
                        : isCurrent
                        ? 'var(--color-action-primary)'
                        : 'var(--color-text-primary)',
                      cursor: isComingSoon ? 'not-allowed' : 'pointer',
                      opacity: isComingSoon ? 0.6 : 1,
                      fontSize: 13,
                      fontWeight: isCurrent ? 700 : 500,
                      textAlign: 'left',
                      transition: 'background-color 0.1s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      {isCurrent ? (
                        <CheckIcon size={14} color="var(--color-action-primary)" />
                      ) : (
                        <span style={{ width: 14 }} />
                      )}
                      <PlatformIcon
                        platform={p.id}
                        size={15}
                        color={
                          isComingSoon
                            ? 'var(--color-text-muted)'
                            : isCurrent
                            ? 'var(--color-action-primary)'
                            : 'var(--color-text-muted)'
                        }
                      />
                      <span>{p.name}</span>
                    </div>

                    {isComingSoon && (
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 600,
                          padding: '2px 6px',
                          borderRadius: 4,
                          backgroundColor:
                            colorScheme === 'dark'
                              ? 'rgba(255, 255, 255, 0.08)'
                              : 'rgba(0, 0, 0, 0.05)',
                          color: 'var(--color-text-muted)',
                          letterSpacing: '0.02em',
                        }}
                      >
                        Coming soon
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Fast Command & Search Bar */}
        <div style={{ padding: '12px 16px', flexShrink: 0 }}>
          <button
            onClick={onOpenSearch}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 12px',
              borderRadius: 'var(--radius-component-md)',
              border: '1px solid var(--color-border-default)',
              backgroundColor: 'var(--color-surface-raised)',
              color: 'var(--color-text-muted)',
              cursor: 'pointer',
              fontSize: 13,
              textAlign: 'left',
              transition: 'border-color 0.15s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <SearchIcon size={14} />
              <span>Search docs...</span>
            </div>
            <kbd
              style={{
                fontSize: 10,
                padding: '2px 6px',
                borderRadius: 4,
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border-subtle)',
                color: 'var(--color-text-secondary)',
                fontWeight: 600,
              }}
            >
              Ctrl+K
            </kbd>
          </button>
        </div>

        {/* Scrollable Navigation Tree (Independent Scroll) */}
        <div
          style={{
            flex: 1,
            minHeight: 0,
            overflowY: 'auto',
            overflowX: 'hidden',
            padding: '8px 12px 24px 12px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            scrollbarWidth: 'thin',
            scrollbarColor: colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.18) transparent' : 'rgba(0, 0, 0, 0.18) transparent',
          }}
        >
          {/* Dynamic Platform-First Navigation Generated from navigationConfig.ts */}
          {platformNavigation.map((section) => {
            const isCollapsible = section.collapsible;
            const isOpen = isCollapsible ? (expandedSections[section.id] ?? section.defaultOpen ?? true) : true;

            const renderLeafItem = (item: NavLeafItem, isCategoryChild = false) => {
              const isComponent = item.path.startsWith('/components/') && item.id !== 'all-components';
              const inPageVariants = isComponent ? COMPONENT_VARIANTS_MAP[item.id] || [] : [];
              const isNew = V020_NEW_COMPONENTS.includes(item.id) || V010_NEW_COMPONENTS.includes(item.id) || item.badge === 'NEW';

              // Determine if any child of this item is active
              const activeChild = item.children?.find((child) => {
                if (child.path.includes('#')) {
                  const [base, anchor] = child.path.split('#');
                  const matchesBase = currentRoute.path === base || (currentRoute.type === 'motion' && base === '/motion') || (currentRoute.type === 'utilities' && base === '/utilities') || (currentRoute.type === 'guides' && base === '/guides');
                  return matchesBase && (currentHash === anchor || currentRoute.anchor === anchor);
                }
                return currentRoute.path === child.path;
              });

              const isItemActive = isComponent
                ? isComponentActive(item.id)
                : item.id === 'all-components'
                ? isAllComponentsActive
                : item.id === 'all-hooks'
                ? currentRoute.type === 'hooks' && (!currentRoute.id || currentRoute.id === 'all-hooks')
                : (item.path.startsWith('/hooks/') && currentRoute.type === 'hooks' && currentRoute.id === item.id)
                ? true
                : (currentRoute.type === 'icons' && (item.path.startsWith('/icons') || item.id.startsWith('icons-')))
                ? true
                : (currentRoute.type === 'tokens' && item.path.startsWith('/tokens/') && currentRoute.id === item.id)
                ? true
                : item.path.includes('#')
                ? (() => {
                    const [itemBase, itemAnchor] = item.path.split('#');
                    const isBaseMatch =
                      currentRoute.path === itemBase ||
                      (currentRoute.type === 'motion' && itemBase === '/motion') ||
                      (currentRoute.type === 'utilities' && itemBase === '/utilities') ||
                      (currentRoute.type === 'guides' && itemBase === '/guides');
                    const activeAnchor = currentRoute.anchor || currentHash;
                    if (!activeAnchor && isBaseMatch) {
                      if (itemBase === '/guides' && itemAnchor === 'responsive-ui') return true;
                      if (itemBase === '/motion' && itemAnchor === 'atoms') return true;
                      if (itemBase === '/utilities' && itemAnchor === 'createCSSRuleFromTheme') return true;
                    }
                    return isBaseMatch && activeAnchor === itemAnchor;
                  })()
                : currentRoute.path === item.path;

              // If a child is active, parent shouldn't steal the active blue background
              const isParentHighlighted = isItemActive && !activeChild;

              return (
                <div key={item.id} style={{ display: 'flex', flexDirection: 'column' }}>
                  <a
                    href={item.path}
                    onClick={(e) => handleLinkClick(e, item.path)}
                    style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      minHeight: 34,
                      padding: '6px 10px 6px 14px',
                      borderRadius: 4,
                      fontSize: item.isMonospace ? 12.5 : 13,
                      fontFamily: item.isMonospace ? 'var(--font-mono, monospace)' : 'inherit',
                      textDecoration: 'none',
                      fontWeight: isParentHighlighted ? 600 : 400,
                      backgroundColor: isParentHighlighted
                        ? colorScheme === 'dark'
                          ? 'rgba(0, 127, 255, 0.16)'
                          : 'rgba(0, 127, 255, 0.08)'
                        : 'transparent',
                      color: isParentHighlighted ? 'var(--color-action-primary)' : 'var(--color-text-primary)',
                      transition: 'background-color 0.12s ease, color 0.12s ease',
                      marginBottom: item.id === 'all-components' ? 4 : 2,
                    }}
                    onMouseEnter={(e) => {
                      if (!isParentHighlighted) e.currentTarget.style.backgroundColor = 'var(--color-surface-raised)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isParentHighlighted) e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    {/* Microsoft Fluent 2 Inset Active Selection Indicator Pill */}
                    {isParentHighlighted && (
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: 6,
                          bottom: 6,
                          width: 3,
                          borderRadius: 2,
                          backgroundColor: 'var(--color-action-primary)',
                        }}
                      />
                    )}
                    <span>{item.name}</span>
                    {isNew ? (
                      <span
                        style={{
                          fontSize: 9,
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                          padding: '1px 5px',
                          borderRadius: 10,
                          backgroundColor: 'rgba(16, 185, 129, 0.15)',
                          color: '#10B981',
                          border: '1px solid rgba(16, 185, 129, 0.3)',
                        }}
                      >
                        NEW
                      </span>
                    ) : item.badge ? (
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 600,
                          padding: item.badgeColor === 'primary' ? '1px 5px' : '0 5px',
                          borderRadius: 10,
                          backgroundColor:
                            item.badgeColor === 'primary'
                              ? 'var(--color-action-primary)'
                              : 'var(--color-surface-raised)',
                          color: item.badgeColor === 'primary' ? '#FFFFFF' : 'var(--color-text-muted)',
                          border:
                            item.badgeColor === 'primary' ? 'none' : '1px solid var(--color-border-subtle)',
                        }}
                      >
                        {item.badge}
                      </span>
                    ) : null}
                  </a>

                  {/* Child Sub-Navigation (for sections like Motion, with clean tree styling) */}
                  {item.children && item.children.length > 0 && isItemActive ? (
                    <div
                      style={{
                        marginLeft: 12,
                        paddingLeft: 8,
                        borderLeft: '1px solid var(--color-border-subtle)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        marginTop: 2,
                        marginBottom: 4,
                      }}
                    >
                      {item.children.map((child) => {
                        let isChildActive = false;
                        if (child.path.includes('#')) {
                          const [base, anchor] = child.path.split('#');
                          const matchesBase = currentRoute.path === base || (currentRoute.type === 'motion' && base === '/motion') || (currentRoute.type === 'utilities' && base === '/utilities') || (currentRoute.type === 'guides' && base === '/guides');
                          isChildActive = matchesBase && (currentHash === anchor || currentRoute.anchor === anchor);
                        } else {
                          isChildActive = currentRoute.path === child.path;
                        }

                        return (
                          <a
                            key={child.id}
                            href={child.path}
                            onClick={(e) => {
                              if (child.path.includes('#')) {
                                const [base, anchor] = child.path.split('#');
                                if (currentRoute.path === base || currentRoute.id === item.id || currentRoute.type === 'motion' || currentRoute.type === 'utilities' || currentRoute.type === 'guides') {
                                  e.preventDefault();
                                  handleAnchorClick(e, item.id, anchor);
                                  return;
                                }
                              }
                              handleLinkClick(e, child.path);
                            }}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 8,
                              padding: '4px 8px',
                              fontSize: 12,
                              borderRadius: 4,
                              textDecoration: 'none',
                              color: isChildActive
                                ? 'var(--color-action-primary)'
                                : 'var(--color-text-secondary)',
                              fontWeight: isChildActive ? 600 : 400,
                              backgroundColor: isChildActive
                                ? colorScheme === 'dark'
                                  ? 'rgba(0, 127, 255, 0.15)'
                                  : 'rgba(0, 127, 255, 0.08)'
                                : 'transparent',
                              transition: 'all 0.1s ease',
                            }}
                            onMouseEnter={(e) => {
                              if (!isChildActive) e.currentTarget.style.color = 'var(--color-action-primary)';
                            }}
                            onMouseLeave={(e) => {
                              if (!isChildActive) e.currentTarget.style.color = 'var(--color-text-secondary)';
                            }}
                          >
                            <span
                              style={{
                                width: 4,
                                height: 4,
                                borderRadius: '50%',
                                backgroundColor: isChildActive ? 'var(--color-action-primary)' : 'var(--color-border-subtle)',
                                flexShrink: 0,
                              }}
                            />
                            <span>{child.name}</span>
                          </a>
                        );
                      })}
                    </div>
                  ) : (
                    /* In-page variant deep links for active component */
                    isParentHighlighted && inPageVariants.length > 0 && (
                      <div
                        style={{
                          marginLeft: 12,
                          paddingLeft: 8,
                          borderLeft: '1px solid var(--color-border-subtle)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 1,
                          marginTop: 2,
                          marginBottom: 4,
                        }}
                      >
                        {inPageVariants.map((v) => {
                          const isAnchorActive = currentHash === v.id || currentRoute.anchor === v.id;
                          return (
                            <a
                              key={v.id}
                              href={`/components/${item.id}#${v.id}`}
                              onClick={(e) => handleAnchorClick(e, item.id, v.id)}
                              style={{
                                display: 'block',
                                padding: '4px 6px',
                                fontSize: 11.5,
                                borderRadius: 4,
                                textDecoration: 'none',
                                color: isAnchorActive
                                  ? 'var(--color-action-primary)'
                                  : 'var(--color-text-secondary)',
                                fontWeight: isAnchorActive ? 600 : 400,
                                backgroundColor: isAnchorActive
                                  ? 'var(--color-surface-raised)'
                                  : 'transparent',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                transition: 'color 0.1s ease',
                              }}
                              title={v.title}
                            >
                              {v.title}
                            </a>
                          );
                        })}
                      </div>
                    )
                  )}
                </div>
              );
            };


            return (
              <div key={section.id}>
                {isCollapsible ? (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '6px 8px',
                      borderRadius: 6,
                      marginBottom: 4,
                      cursor: 'pointer',
                      transition: 'background-color 0.12s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-surface-raised)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <div
                      style={{ display: 'flex', alignItems: 'center', gap: 6, flex: 1 }}
                      onClick={() => toggleSection(section.id)}
                    >
                      <ChevronDownIcon
                        size={13}
                        style={{
                          transform: isOpen ? 'none' : 'rotate(-90deg)',
                          transition: 'transform 0.15s ease',
                          color: 'var(--color-text-muted)',
                        }}
                      />
                      {section.path ? (
                        <a
                          href={section.path}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLinkClick(e, section.path!);
                          }}
                          style={{
                            fontSize: 13,
                            fontWeight: 700,
                            color:
                              (section.id === 'components' && isAllComponentsActive) ||
                              (section.id === 'functional-hooks' &&
                                currentRoute.type === 'hooks' &&
                                (!currentRoute.id || currentRoute.id === 'all-hooks')) ||
                              currentRoute.path === section.path
                                ? 'var(--color-action-primary)'
                                : 'var(--color-text-primary)',
                            textDecoration: 'none',
                            letterSpacing: '0.01em',
                          }}
                        >
                          {section.title}
                        </a>
                      ) : (
                        <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-primary)' }}>
                          {section.title}
                        </span>
                      )}
                    </div>
                    {section.badge && (
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          padding: '1px 6px',
                          borderRadius: 10,
                          backgroundColor: 'var(--color-surface-raised)',
                          color: 'var(--color-text-muted)',
                          border: '1px solid var(--color-border-subtle)',
                        }}
                      >
                        {section.badge}
                      </span>
                    )}
                  </div>
                ) : (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '4px 12px',
                      marginBottom: 4,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: 'var(--color-text-muted)',
                      }}
                    >
                      {section.title}
                    </span>
                    {section.badge && (
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 600,
                          padding: '1px 5px',
                          borderRadius: 10,
                          backgroundColor: 'var(--color-surface-raised)',
                          color: 'var(--color-text-muted)',
                        }}
                      >
                        {section.badge}
                      </span>
                    )}
                  </div>
                )}

                {/* Section Content */}
                {isOpen && (
                  <div
                    style={
                      isCollapsible
                        ? {
                            marginLeft: 11,
                            paddingLeft: 10,
                            borderLeft: '1px solid var(--color-border-subtle)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 3,
                            marginTop: 2,
                          }
                        : {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                          }
                    }
                  >
                    {section.items.map((item) => {
                      if ('isCategoryHeader' in item && item.isCategoryHeader) {
                        const isCatOpen = expandedCategories[item.id] ?? true;
                        return (
                          <div key={item.id} style={{ display: 'flex', flexDirection: 'column' }}>
                            <div
                              onClick={() => toggleCategory(item.id)}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '6px 8px 6px 6px',
                                userSelect: 'none',
                                cursor: 'pointer',
                                borderRadius: 4,
                                transition: 'background-color 0.12s ease',
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-surface-raised)')}
                              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                <ChevronDownIcon
                                  size={11}
                                  style={{
                                    transform: isCatOpen ? 'none' : 'rotate(-90deg)',
                                    transition: 'transform 0.15s ease',
                                    color: 'var(--color-text-muted)',
                                  }}
                                />
                                <span
                                  style={{
                                    fontSize: 11,
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.08em',
                                    color: 'var(--color-text-muted)',
                                  }}
                                >
                                  {item.name}
                                </span>
                              </div>
                              <span
                                style={{
                                  fontSize: 10,
                                  color: 'var(--color-text-muted)',
                                  fontWeight: 500,
                                }}
                              >
                                {item.items.length}
                              </span>
                            </div>
                            {isCatOpen && (
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: 2,
                                  paddingLeft: 10,
                                  borderLeft: '1px solid var(--color-border-subtle)',
                                  marginLeft: 8,
                                  marginTop: 2,
                                  marginBottom: 4,
                                }}
                              >
                                {item.items.map((leaf) => renderLeafItem(leaf, true))}
                              </div>
                            )}
                          </div>
                        );
                      }
                      return renderLeafItem(item as NavLeafItem);
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Developer Native Sponsor Ad Placement (Classic format in sidebar) */}
        <div style={{ padding: '8px 14px', borderTop: '1px solid var(--color-border-subtle)', flexShrink: 0 }}>
          <NativeSponsorAd initialFormat="classic" publisherTheme="devtools" allowFormatSwitch={false} />
        </div>

        {/* Footer info with Cookie Preferences */}
        <div
          style={{
            padding: '10px 16px',
            borderTop: '1px solid var(--color-border-subtle)',
            fontSize: 11.5,
            color: 'var(--color-text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
          }}
        >
          <button
            onClick={() => setIsCookieModalOpen(true)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--color-text-secondary)',
              cursor: 'pointer',
              padding: 0,
              fontSize: 11,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
              transition: 'color 0.12s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-action-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
            title="Manage privacy and cookie settings"
          >
            <span>Cookie Preferences</span>
          </button>

          <span
            style={{
              fontSize: 10.5,
              padding: '2px 6px',
              borderRadius: 4,
              backgroundColor: 'var(--color-surface-raised)',
              border: '1px solid var(--color-border-subtle)',
              color: 'var(--color-text-secondary)',
              fontWeight: 500,
            }}
          >
            {currentVersion}
          </span>
        </div>
      </aside>

      {/* Privacy & Cookie Preferences Modal */}
      <CookiePreferencesModal
        isOpen={isCookieModalOpen}
        onClose={() => setIsCookieModalOpen(false)}
      />
    </>
  );
};

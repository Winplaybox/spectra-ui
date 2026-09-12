import React, { useState, useEffect } from 'react';
import { useColorScheme } from '@spectra/react';
import { SearchIcon, ExternalLinkIcon, ChevronDownIcon, ComponentIcon } from '@spectra/icons';
import { navigate, RouteState } from '../../utils/router';
import { useVersion } from '../../context/VersionContext';
import { V010_NEW_COMPONENTS } from '../../data/versionReleaseData';
import { COMPONENT_VARIANTS_MAP } from './ComponentVariantsShowcase';
import { NativeSponsorAd } from './NativeSponsorAd';
import { CookiePreferencesModal } from './CookiePreferencesModal';

interface SidebarProps {
  currentRoute: RouteState;
  onOpenSearch: () => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

interface ComponentItem {
  id: string;
  name: string;
  category: string;
}

export interface ComponentCategory {
  id: string;
  name: string;
  components: ComponentItem[];
}

export const COMPONENT_CATEGORIES: ComponentCategory[] = [
  {
    id: 'actions',
    name: 'Actions',
    components: [
      { id: 'button', name: 'Button', category: 'Actions' },
    ],
  },
  {
    id: 'form',
    name: 'Form & Inputs',
    components: [
      { id: 'text-input', name: 'TextInput', category: 'Form' },
      { id: 'select', name: 'Select', category: 'Form' },
      { id: 'checkbox', name: 'Checkbox', category: 'Form' },
      { id: 'radio', name: 'Radio', category: 'Form' },
      { id: 'switch', name: 'Switch', category: 'Form' },
    ],
  },
  {
    id: 'layout',
    name: 'Layout',
    components: [
      { id: 'divider', name: 'Divider', category: 'Layout' },
    ],
  },
  {
    id: 'data-display',
    name: 'Data Display',
    components: [
      { id: 'accordion', name: 'Accordion', category: 'Data Display' },
      { id: 'avatar', name: 'Avatar', category: 'Data Display' },
      { id: 'chip', name: 'Chip', category: 'Data Display' },
      { id: 'list', name: 'List', category: 'Data Display' },
    ],
  },
  {
    id: 'feedback',
    name: 'Feedback',
    components: [
      { id: 'alert', name: 'Alert', category: 'Feedback' },
      { id: 'badge', name: 'Badge', category: 'Feedback' },
      { id: 'skeleton', name: 'Skeleton', category: 'Feedback' },
      { id: 'spinner', name: 'Spinner', category: 'Feedback' },
      { id: 'tooltip', name: 'Tooltip', category: 'Feedback' },
    ],
  },
  {
    id: 'navigation',
    name: 'Navigation',
    components: [
      { id: 'breadcrumbs', name: 'Breadcrumbs', category: 'Navigation' },
      { id: 'tabs', name: 'Tabs', category: 'Navigation' },
    ],
  },
  {
    id: 'surfaces',
    name: 'Surfaces',
    components: [
      { id: 'card', name: 'Card', category: 'Surfaces' },
    ],
  },
  {
    id: 'overlay',
    name: 'Overlay',
    components: [
      { id: 'dialog', name: 'Dialog (Modal)', category: 'Overlay' },
    ],
  },
];

export const Sidebar: React.FC<SidebarProps> = ({
  currentRoute,
  onOpenSearch,
  isOpenMobile,
  onCloseMobile,
}) => {
  const { colorScheme } = useColorScheme();
  const { currentVersion } = useVersion();
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);

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

  // Auto-expand the active component's category on navigation
  useEffect(() => {
    if (currentRoute.type === 'components' && currentRoute.id) {
      const activeCat = COMPONENT_CATEGORIES.find((cat) =>
        cat.components.some((c) => c.id === currentRoute.id)
      );
      if (activeCat) {
        setExpandedCategories((prev) => ({ ...prev, [activeCat.id]: true }));
      }
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
    if (currentRoute.type !== 'components' || currentRoute.id !== compId) {
      navigate(`/components/${compId}#${anchorId}`);
    } else {
      window.location.hash = anchorId;
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
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
        style={{
          width: 280,
          flexShrink: 0,
          borderRight: '1px solid var(--color-border-default)',
          backgroundColor: colorScheme === 'dark' ? 'rgba(9, 13, 22, 0.82)' : 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          transform: isOpenMobile ? 'translateX(0)' : undefined,
          transition: 'transform 0.2s ease',
        }}
      >
        {/* Brand Header */}
        <div
          style={{
            padding: '20px 20px 16px 20px',
            borderBottom: '1px solid var(--color-border-default)',
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
              gap: 12,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 4,
                backgroundColor: 'var(--color-action-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: 16,
              }}
            >
              S
            </div>
            <div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 16,
                  letterSpacing: '-0.02em',
                  color: 'var(--color-text-primary)',
                }}
              >
                Spectra UI
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: 'var(--color-text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  fontWeight: 600,
                }}
              >
                Design System
              </div>
            </div>
          </a>

          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              padding: '2px 6px',
              backgroundColor: 'var(--color-surface-raised)',
              border: '1px solid var(--color-border-subtle)',
              borderRadius: 4,
              color: 'var(--color-text-secondary)',
            }}
          >
            {currentVersion}
          </span>
        </div>

        {/* Wikipedia / MUI Style Fast Search Bar */}
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

        {/* Scrollable Navigation Tree (Fluent 2 & MUI Independent Scroll) */}
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
          {/* Section: Getting Started */}
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--color-text-muted)',
                padding: '4px 12px',
                marginBottom: 4,
              }}
            >
              Getting Started
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <a
                href="/overview"
                onClick={(e) => handleLinkClick(e, '/overview')}
                style={{
                  display: 'block',
                  padding: '7px 12px',
                  borderRadius: 4,
                  fontSize: 13,
                  textDecoration: 'none',
                  fontWeight: isRouteActive('/overview') ? 600 : 400,
                  backgroundColor: isRouteActive('/overview') ? 'var(--color-surface-raised)' : 'transparent',
                  color: isRouteActive('/overview') ? 'var(--color-action-primary)' : 'var(--color-text-primary)',
                  borderLeft: isRouteActive('/overview') ? '3px solid var(--color-action-primary)' : '3px solid transparent',
                }}
              >
                Overview & Quickstart
              </a>
              <a
                href="/installation"
                onClick={(e) => handleLinkClick(e, '/installation')}
                style={{
                  display: 'block',
                  padding: '7px 12px',
                  borderRadius: 4,
                  fontSize: 13,
                  textDecoration: 'none',
                  fontWeight: isRouteActive('/installation') ? 600 : 400,
                  backgroundColor: isRouteActive('/installation') ? 'var(--color-surface-raised)' : 'transparent',
                  color: isRouteActive('/installation') ? 'var(--color-action-primary)' : 'var(--color-text-primary)',
                  borderLeft: isRouteActive('/installation') ? '3px solid var(--color-action-primary)' : '3px solid transparent',
                }}
              >
                Installation
              </a>
              <a
                href="/cross-platform"
                onClick={(e) => handleLinkClick(e, '/cross-platform')}
                style={{
                  display: 'block',
                  padding: '7px 12px',
                  borderRadius: 4,
                  fontSize: 13,
                  textDecoration: 'none',
                  fontWeight: isRouteActive('/cross-platform') ? 600 : 400,
                  backgroundColor: isRouteActive('/cross-platform') ? 'var(--color-surface-raised)' : 'transparent',
                  color: isRouteActive('/cross-platform') ? 'var(--color-action-primary)' : 'var(--color-text-primary)',
                  borderLeft: isRouteActive('/cross-platform') ? '3px solid var(--color-action-primary)' : '3px solid transparent',
                }}
              >
                Cross-Platform (Web & Native)
              </a>
            </div>
          </div>

          {/* Section: Design Tokens */}
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--color-text-muted)',
                padding: '4px 12px',
                marginBottom: 4,
              }}
            >
              Design Tokens
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <a
                href="/tokens/colors"
                onClick={(e) => handleLinkClick(e, '/tokens/colors')}
                style={{
                  display: 'block',
                  padding: '7px 12px',
                  borderRadius: 4,
                  fontSize: 13,
                  textDecoration: 'none',
                  fontWeight: currentRoute.path === '/tokens/colors' ? 600 : 400,
                  backgroundColor: currentRoute.path === '/tokens/colors' ? 'var(--color-surface-raised)' : 'transparent',
                  color: currentRoute.path === '/tokens/colors' ? 'var(--color-action-primary)' : 'var(--color-text-primary)',
                  borderLeft: currentRoute.path === '/tokens/colors' ? '3px solid var(--color-action-primary)' : '3px solid transparent',
                }}
              >
                Colors & Swatches
              </a>
              <a
                href="/tokens/typography"
                onClick={(e) => handleLinkClick(e, '/tokens/typography')}
                style={{
                  display: 'block',
                  padding: '7px 12px',
                  borderRadius: 4,
                  fontSize: 13,
                  textDecoration: 'none',
                  fontWeight: currentRoute.path === '/tokens/typography' ? 600 : 400,
                  backgroundColor: currentRoute.path === '/tokens/typography' ? 'var(--color-surface-raised)' : 'transparent',
                  color: currentRoute.path === '/tokens/typography' ? 'var(--color-action-primary)' : 'var(--color-text-primary)',
                  borderLeft: currentRoute.path === '/tokens/typography' ? '3px solid var(--color-action-primary)' : '3px solid transparent',
                }}
              >
                Typography Scale
              </a>
              <a
                href="/tokens/spacing"
                onClick={(e) => handleLinkClick(e, '/tokens/spacing')}
                style={{
                  display: 'block',
                  padding: '7px 12px',
                  borderRadius: 4,
                  fontSize: 13,
                  textDecoration: 'none',
                  fontWeight: currentRoute.path === '/tokens/spacing' ? 600 : 400,
                  backgroundColor: currentRoute.path === '/tokens/spacing' ? 'var(--color-surface-raised)' : 'transparent',
                  color: currentRoute.path === '/tokens/spacing' ? 'var(--color-action-primary)' : 'var(--color-text-primary)',
                  borderLeft: currentRoute.path === '/tokens/spacing' ? '3px solid var(--color-action-primary)' : '3px solid transparent',
                }}
              >
                Spacing & 4px Grid
              </a>
              <a
                href="/tokens/radii"
                onClick={(e) => handleLinkClick(e, '/tokens/radii')}
                style={{
                  display: 'block',
                  padding: '7px 12px',
                  borderRadius: 4,
                  fontSize: 13,
                  textDecoration: 'none',
                  fontWeight: currentRoute.path === '/tokens/radii' ? 600 : 400,
                  backgroundColor: currentRoute.path === '/tokens/radii' ? 'var(--color-surface-raised)' : 'transparent',
                  color: currentRoute.path === '/tokens/radii' ? 'var(--color-action-primary)' : 'var(--color-text-primary)',
                  borderLeft: currentRoute.path === '/tokens/radii' ? '3px solid var(--color-action-primary)' : '3px solid transparent',
                }}
              >
                Corner Radii Scale
              </a>
              <a
                href="/tokens/shadows"
                onClick={(e) => handleLinkClick(e, '/tokens/shadows')}
                style={{
                  display: 'block',
                  padding: '7px 12px',
                  borderRadius: 4,
                  fontSize: 13,
                  textDecoration: 'none',
                  fontWeight: currentRoute.path === '/tokens/shadows' ? 600 : 400,
                  backgroundColor: currentRoute.path === '/tokens/shadows' ? 'var(--color-surface-raised)' : 'transparent',
                  color: currentRoute.path === '/tokens/shadows' ? 'var(--color-action-primary)' : 'var(--color-text-primary)',
                  borderLeft: currentRoute.path === '/tokens/shadows' ? '3px solid var(--color-action-primary)' : '3px solid transparent',
                }}
              >
                Elevation & Shadows
              </a>
              <a
                href="/tokens/motion"
                onClick={(e) => handleLinkClick(e, '/tokens/motion')}
                style={{
                  display: 'block',
                  padding: '7px 12px',
                  borderRadius: 4,
                  fontSize: 13,
                  textDecoration: 'none',
                  fontWeight: currentRoute.path === '/tokens/motion' ? 600 : 400,
                  backgroundColor: currentRoute.path === '/tokens/motion' ? 'var(--color-surface-raised)' : 'transparent',
                  color: currentRoute.path === '/tokens/motion' ? 'var(--color-action-primary)' : 'var(--color-text-primary)',
                  borderLeft: currentRoute.path === '/tokens/motion' ? '3px solid var(--color-action-primary)' : '3px solid transparent',
                }}
              >
                Motion & Transitions
              </a>
            </div>
          </div>

          {/* Section: Components Tree (MUI & Fluent 2 Benchmark) */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '4px 12px',
                marginBottom: 6,
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
                Components
              </span>
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
                20
              </span>
            </div>

            {/* All Components Entry (MUI & Fluent UI benchmark) */}
            <a
              href="/components"
              onClick={(e) => handleLinkClick(e, '/components')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '7px 10px',
                borderRadius: 6,
                fontSize: 13,
                textDecoration: 'none',
                fontWeight: isAllComponentsActive ? 600 : 500,
                backgroundColor: isAllComponentsActive ? 'rgba(0, 127, 255, 0.12)' : 'transparent',
                color: isAllComponentsActive ? 'var(--color-action-primary)' : 'var(--color-text-primary)',
                borderLeft: isAllComponentsActive ? '3px solid var(--color-action-primary)' : '3px solid transparent',
                transition: 'all 0.12s ease',
                marginBottom: 6,
              }}
              onMouseEnter={(e) => {
                if (!isAllComponentsActive) e.currentTarget.style.backgroundColor = 'var(--color-surface-raised)';
              }}
              onMouseLeave={(e) => {
                if (!isAllComponentsActive) e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <ComponentIcon
                  size={14}
                  style={{
                    color: isAllComponentsActive ? 'var(--color-action-primary)' : 'var(--color-text-muted)',
                  }}
                />
                <span>All Components</span>
              </div>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: 'var(--color-text-muted)',
                  backgroundColor: 'var(--color-surface-raised)',
                  padding: '1px 6px',
                  borderRadius: 10,
                  border: '1px solid var(--color-border-subtle)',
                }}
              >
                20
              </span>
            </a>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {COMPONENT_CATEGORIES.map((cat) => {
                const isExpanded = !!expandedCategories[cat.id];
                const hasActiveChild = cat.components.some((c) => isComponentActive(c.id));

                return (
                  <div key={cat.id} style={{ display: 'flex', flexDirection: 'column' }}>
                    {/* Category Tree Header */}
                    <button
                      onClick={() => toggleCategory(cat.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '6px 10px',
                        borderRadius: 6,
                        border: 'none',
                        background: 'transparent',
                        color: hasActiveChild ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                        fontSize: 12,
                        fontWeight: hasActiveChild ? 700 : 600,
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.12s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-surface-raised)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <ChevronDownIcon
                          size={12}
                          style={{
                            transform: isExpanded ? 'none' : 'rotate(-90deg)',
                            transition: 'transform 0.15s ease',
                            color: 'var(--color-text-muted)',
                          }}
                        />
                        <span>{cat.name}</span>
                      </div>
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 600,
                          color: 'var(--color-text-muted)',
                          backgroundColor: 'var(--color-surface-raised)',
                          padding: '0 4px',
                          borderRadius: 4,
                        }}
                      >
                        {cat.components.length}
                      </span>
                    </button>

                    {/* Collapsible Category Branch */}
                    {isExpanded && (
                      <div
                        style={{
                          marginLeft: 14,
                          paddingLeft: 10,
                          borderLeft: '1px solid var(--color-border-subtle)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 2,
                          marginTop: 2,
                          marginBottom: 4,
                        }}
                      >
                        {cat.components.map((c) => {
                          const active = isComponentActive(c.id);
                          const isNew = V010_NEW_COMPONENTS.includes(c.id);
                          const inPageVariants = COMPONENT_VARIANTS_MAP[c.id] || [];

                          return (
                            <div key={c.id} style={{ display: 'flex', flexDirection: 'column' }}>
                              <a
                                href={`/components/${c.id}`}
                                onClick={(e) => handleLinkClick(e, `/components/${c.id}`)}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  padding: '6px 10px',
                                  borderRadius: 6,
                                  fontSize: 13,
                                  textDecoration: 'none',
                                  fontWeight: active ? 600 : 400,
                                  backgroundColor: active ? 'rgba(0, 127, 255, 0.12)' : 'transparent',
                                  color: active ? 'var(--color-action-primary)' : 'var(--color-text-primary)',
                                  borderLeft: active ? '3px solid var(--color-action-primary)' : '3px solid transparent',
                                  transition: 'background-color 0.12s ease',
                                }}
                                onMouseEnter={(e) => {
                                  if (!active) e.currentTarget.style.backgroundColor = 'var(--color-surface-raised)';
                                }}
                                onMouseLeave={(e) => {
                                  if (!active) e.currentTarget.style.backgroundColor = 'transparent';
                                }}
                              >
                                <span>{c.name}</span>
                                {isNew && (
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
                                )}
                              </a>

                              {/* Nested in-page sub-tree deep links for active component */}
                              {active && inPageVariants.length > 0 && (
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
                                    const isAnchorActive = currentHash === v.id;
                                    return (
                                      <a
                                        key={v.id}
                                        href={`/components/${c.id}#${v.id}`}
                                        onClick={(e) => handleAnchorClick(e, c.id, v.id)}
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
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section: Functional Hooks */}
          <div>
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
                Functional Hooks
              </span>
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
                10
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                { id: 'use-disclosure', name: 'useDisclosure' },
                { id: 'use-controllable-state', name: 'useControllableState' },
                { id: 'use-outside-click', name: 'useOutsideClick' },
                { id: 'use-id', name: 'useId' },
                { id: 'use-color-scheme', name: 'useColorScheme' },
                { id: 'use-media-query', name: 'useMediaQuery' },
                { id: 'use-focus-ring', name: 'useFocusRing' },
                { id: 'use-toast', name: 'useToast' },
                { id: 'use-reduced-motion', name: 'useReducedMotion' },
                { id: 'use-rtl', name: 'useRTL' },
              ].map((h) => {
                const active = currentRoute.type === 'hooks' && currentRoute.id === h.id;
                return (
                  <a
                    key={h.id}
                    href={`/hooks/${h.id}`}
                    onClick={(e) => handleLinkClick(e, `/hooks/${h.id}`)}
                    style={{
                      display: 'block',
                      padding: '7px 12px',
                      borderRadius: 4,
                      fontSize: 13,
                      fontFamily: 'monospace',
                      textDecoration: 'none',
                      fontWeight: active ? 600 : 400,
                      backgroundColor: active ? 'var(--color-surface-raised)' : 'transparent',
                      color: active ? 'var(--color-action-primary)' : 'var(--color-text-primary)',
                      borderLeft: active ? '3px solid var(--color-action-primary)' : '3px solid transparent',
                      transition: 'background-color 0.1s ease',
                    }}
                  >
                    {h.name}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Section: Icons */}
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--color-text-muted)',
                padding: '4px 12px',
                marginBottom: 4,
              }}
            >
              Icons
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <a
                href="/icons"
                onClick={(e) => handleLinkClick(e, '/icons')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '7px 12px',
                  borderRadius: 4,
                  fontSize: 13,
                  textDecoration: 'none',
                  fontWeight: currentRoute.type === 'icons' ? 600 : 400,
                  backgroundColor: currentRoute.type === 'icons' ? 'var(--color-surface-raised)' : 'transparent',
                  color: currentRoute.type === 'icons' ? 'var(--color-action-primary)' : 'var(--color-text-primary)',
                  borderLeft: currentRoute.type === 'icons' ? '3px solid var(--color-action-primary)' : '3px solid transparent',
                }}
              >
                <span>12,253 Icons Catalog</span>
                <span
                  style={{
                    fontSize: 10,
                    padding: '1px 5px',
                    backgroundColor: 'var(--color-action-primary)',
                    color: '#FFFFFF',
                    borderRadius: 8,
                    fontWeight: 600,
                  }}
                >
                  Code-Split
                </span>
              </a>
            </div>
          </div>
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
            <span>🍪 Cookie Preferences</span>
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

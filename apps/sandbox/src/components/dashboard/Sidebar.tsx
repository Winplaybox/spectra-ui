import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useColorScheme } from '@winplaybox/react';
import {
  SearchIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  FolderIcon,
  FileTextIcon,
  GlobeIcon,
  CheckIcon,
} from '@winplaybox/icons';
import { navigate, RouteState } from '../../utils/router';
import { useVersion } from '../../context/VersionContext';
import { usePlatform } from '../../context/PlatformContext';
import { PlatformIcon } from './PlatformIcon';
import { V010_NEW_COMPONENTS, V020_NEW_COMPONENTS } from '../../data/versionReleaseData';
import { COMPONENT_VARIANTS_MAP } from './ComponentVariantsShowcase';
import { NativeSponsorAd } from './NativeSponsorAd';
import { CookiePreferencesModal } from './CookiePreferencesModal';
import {
  COMPONENT_CATEGORIES,
  HOOK_CATEGORIES,
  ComponentCategory,
  ComponentItem,
  getComponentCategoriesForPlatform,
  getHookCategoriesForPlatform,
} from '../../data/navigationConfig';
import { isPlatformSupported } from '@winplaybox/platform-capabilities';

export { COMPONENT_CATEGORIES };
export type { ComponentCategory, ComponentItem };

interface SidebarProps {
  currentRoute: RouteState;
  onOpenSearch: () => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export interface FluentComponentNode {
  id: string;
  name: string;
  path: string;
  isFolder?: boolean;
  badge?: string;
  badgeColor?: 'primary' | 'success' | 'warning' | 'neutral';
  children?: FluentComponentNode[];
}

/**
 * Microsoft Fluent 2 Master Components Hierarchy (Sorted Strictly A-Z)
 * Component families with variants/sub-components are organized as folders.
 * Standalone components are leaf items rendered with the document icon.
 */
export const FLUENT_COMPONENTS_TREE: FluentComponentNode[] = [
  { id: 'accordion', name: 'Accordion', path: '/components/accordion' },
  { id: 'alert', name: 'Alert', path: '/components/alert' },
  { id: 'app-bar', name: 'AppBar', path: '/components/app-bar' },
  { id: 'autocomplete', name: 'Autocomplete', path: '/components/autocomplete' },
  {
    id: 'avatar-family',
    name: 'Avatar',
    path: '/components/avatar',
    isFolder: true,
    children: [
      { id: 'avatar', name: 'Avatar', path: '/components/avatar' },
      { id: 'avatar-group', name: 'AvatarGroup', path: '/components/avatar-group' },
    ],
  },
  {
    id: 'badge-family',
    name: 'Badge',
    path: '/components/badge',
    isFolder: true,
    children: [
      { id: 'badge', name: 'Badge', path: '/components/badge' },
      { id: 'counter-badge', name: 'Counter Badge', path: '/components/badge#counter' },
      { id: 'presence-badge', name: 'PresenceBadge', path: '/components/badge#presence' },
    ],
  },
  { id: 'box', name: 'Box', path: '/components/box' },
  {
    id: 'breadcrumb-family',
    name: 'Breadcrumb',
    path: '/components/breadcrumb',
    isFolder: true,
    children: [
      { id: 'breadcrumb', name: 'Breadcrumb', path: '/components/breadcrumb' },
      { id: 'breadcrumbs', name: 'Breadcrumbs', path: '/components/breadcrumbs' },
    ],
  },
  {
    id: 'button-family',
    name: 'Button',
    path: '/components/button',
    isFolder: true,
    children: [
      { id: 'button', name: 'Button', path: '/components/button' },
      { id: 'compound-button', name: 'CompoundButton', path: '/components/compound-button' },
      { id: 'split-button', name: 'SplitButton', path: '/components/split-button' },
      { id: 'menu-button', name: 'MenuButton', path: '/components/menu-button' },
      { id: 'toggle-button', name: 'ToggleButton', path: '/components/toggle-button' },
      { id: 'button-group', name: 'ButtonGroup', path: '/components/button-group' },
      { id: 'icon-button', name: 'IconButton', path: '/components/icon-button' },
    ],
  },
  { id: 'calendar', name: 'Calendar', path: '/components/calendar' },
  {
    id: 'card-family',
    name: 'Card',
    path: '/components/card',
    isFolder: true,
    children: [
      { id: 'card', name: 'Card', path: '/components/card' },
      { id: 'card-header', name: 'Card Header', path: '/components/card-header' },
      { id: 'card-footer', name: 'Card Footer', path: '/components/card-footer' },
      { id: 'card-preview', name: 'Card Preview', path: '/components/card-preview' },
      { id: 'media-card', name: 'MediaCard', path: '/components/media-card' },
    ],
  },
  {
    id: 'carousel-family',
    name: 'Carousel',
    path: '/components/carousel',
    isFolder: true,
    children: [
      { id: 'carousel', name: 'Carousel', path: '/components/carousel' },
      { id: 'carousel-nav', name: 'Carousel Nav', path: '/components/carousel-nav' },
    ],
  },
  {
    id: 'checkbox-family',
    name: 'Checkbox',
    path: '/components/checkbox',
    isFolder: true,
    children: [
      { id: 'checkbox', name: 'Checkbox', path: '/components/checkbox' },
      { id: 'checkbox-group', name: 'Checkbox Group', path: '/components/checkbox-group' },
    ],
  },
  { id: 'chip', name: 'Chip', path: '/components/chip' },
  { id: 'color-picker', name: 'ColorPicker', path: '/components/color-picker' },
  { id: 'combobox', name: 'Combobox', path: '/components/combobox' },
  { id: 'container', name: 'Container', path: '/components/container' },
  { id: 'copy-button', name: 'CopyButton', path: '/components/copy-button' },
  { id: 'data-grid', name: 'DataGrid', path: '/components/data-grid' },
  { id: 'date-picker', name: 'DatePicker', path: '/components/date-picker' },
  { id: 'dialog', name: 'Dialog', path: '/components/dialog' },
  { id: 'divider', name: 'Divider', path: '/components/divider' },
  { id: 'drawer', name: 'Drawer', path: '/components/drawer' },
  { id: 'dropdown', name: 'Dropdown', path: '/components/select' },
  { id: 'field', name: 'Field', path: '/components/field' },
  { id: 'grid', name: 'Grid', path: '/components/grid' },
  { id: 'image', name: 'Image', path: '/components/image' },
  { id: 'info-label', name: 'InfoLabel', path: '/components/info-label' },
  { id: 'text-input', name: 'Input', path: '/components/text-input' },
  { id: 'label', name: 'Label', path: '/components/label' },
  { id: 'link', name: 'Link', path: '/components/link' },
  {
    id: 'list-family',
    name: 'List',
    path: '/components/list',
    isFolder: true,
    children: [
      { id: 'list', name: 'List', path: '/components/list' },
      { id: 'list-view', name: 'ListView', path: '/components/list-view' },
    ],
  },
  { id: 'live-indicator', name: 'LiveIndicator', path: '/components/live-indicator' },
  {
    id: 'menu-family',
    name: 'Menu',
    path: '/components/menu',
    isFolder: true,
    children: [
      { id: 'menu', name: 'Menu', path: '/components/menu' },
      { id: 'menu-grid', name: 'Menu Grid', path: '/components/menu-grid' },
      { id: 'speed-dial', name: 'SpeedDial', path: '/components/speed-dial' },
    ],
  },
  { id: 'message-bar', name: 'MessageBar', path: '/components/alert' },
  { id: 'overflow', name: 'Overflow', path: '/components/overflow' },
  { id: 'pagination', name: 'Pagination', path: '/components/pagination' },
  { id: 'paper', name: 'Paper', path: '/components/paper' },
  { id: 'persona', name: 'Persona', path: '/components/persona' },
  { id: 'popover', name: 'Popover', path: '/components/popover' },
  { id: 'progress-bar', name: 'ProgressBar', path: '/components/progress-bar' },
  {
    id: 'radio-family',
    name: 'Radio',
    path: '/components/radio',
    isFolder: true,
    children: [
      { id: 'radio', name: 'Radio', path: '/components/radio' },
      { id: 'radio-group', name: 'Radio Group', path: '/components/radio-group' },
    ],
  },
  {
    id: 'rating-family',
    name: 'Rating',
    path: '/components/rating',
    isFolder: true,
    children: [
      { id: 'rating', name: 'Rating', path: '/components/rating' },
      { id: 'rating-display', name: 'Rating Display', path: '/components/rating-display' },
    ],
  },
  { id: 'search-box', name: 'SearchBox', path: '/components/search-box' },
  { id: 'select', name: 'Select', path: '/components/select' },
  { id: 'skeleton', name: 'Skeleton', path: '/components/skeleton' },
  { id: 'slider', name: 'Slider', path: '/components/slider' },
  { id: 'spin-button', name: 'SpinButton', path: '/components/spin-button' },
  { id: 'spinner', name: 'Spinner', path: '/components/spinner' },
  { id: 'stack', name: 'Stack', path: '/components/stack' },
  { id: 'status-indicator', name: 'StatusIndicator', path: '/components/status-indicator' },
  { id: 'stepper', name: 'Stepper', path: '/components/stepper' },
  { id: 'switch', name: 'Switch', path: '/components/switch' },
  { id: 'table', name: 'Table', path: '/components/table' },
  { id: 'tabs', name: 'Tabs', path: '/components/tabs' },
  {
    id: 'tag-family',
    name: 'Tag',
    path: '/components/tag',
    isFolder: true,
    children: [
      { id: 'tag', name: 'Tag', path: '/components/tag' },
      { id: 'tag-group', name: 'Tag Group', path: '/components/tag-group' },
      { id: 'interaction-tag', name: 'Interaction Tag', path: '/components/interaction-tag' },
      { id: 'tag-picker', name: 'TagPicker', path: '/components/tag-picker' },
    ],
  },
  { id: 'teaching-popover', name: 'TeachingPopover', path: '/components/teaching-popover' },
  { id: 'text', name: 'Text', path: '/components/text' },
  { id: 'textarea', name: 'TextArea', path: '/components/textarea' },
  { id: 'time-picker', name: 'TimePicker', path: '/components/time-picker' },
  { id: 'timeline', name: 'Timeline', path: '/components/timeline' },
  { id: 'toast', name: 'Toast', path: '/components/toast' },
  { id: 'toolbar', name: 'Toolbar', path: '/components/toolbar' },
  { id: 'tooltip', name: 'Tooltip', path: '/components/tooltip' },
  { id: 'tree-view', name: 'TreeView', path: '/components/tree-view' },
  { id: 'web-view-box', name: 'WebViewBox', path: '/components/web-view-box' },
];

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

  // In-sidebar interactive instant search filter ("Find components")
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  // View mode toggle for Components section: 'tree' (A-Z with folders) vs 'categories' (MUI grouping)
  const [componentViewMode, setComponentViewMode] = useState<'tree' | 'categories'>('tree');

  // Track open/collapsed state of main top-level sections (Screenshot 1)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    concepts: false,
    theme: false,
    components: true,
    'component-api': false,
    motion: false,
    utilities: false,
    guides: false,
  });

  // Track open/closed state of component family folders (Screenshot 2)
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
    'badge-family': false,
    'button-family': false,
    'card-family': false,
    'carousel-family': false,
    'checkbox-family': false,
    'list-family': false,
    'menu-family': false,
    'radio-family': false,
    'rating-family': false,
    'tag-family': false,
    'avatar-family': false,
    'breadcrumb-family': false,
  });

  // Track category groups open/closed state (for categorized view mode)
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    'data-display': true,
    feedback: true,
    inputs: true,
    navigation: true,
    surfaces: true,
  });

  const [currentHash, setCurrentHash] = useState(
    typeof window !== 'undefined' ? window.location.hash.substring(1) : ''
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (platformDropdownRef.current && !platformDropdownRef.current.contains(e.target as Node)) {
        setPlatformDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleHash = () => {
      setCurrentHash(window.location.hash.substring(1));
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Auto-expand folder when a child component is active
  useEffect(() => {
    if (currentRoute.type === 'components' && currentRoute.id) {
      const activeId = currentRoute.id;
      for (const node of FLUENT_COMPONENTS_TREE) {
        if (node.isFolder && node.children) {
          const hasChild = node.children.some(
            (c) => c.id === activeId || c.path.includes(activeId)
          );
          if (hasChild) {
            setExpandedFolders((prev) => ({ ...prev, [node.id]: true }));
            setExpandedSections((prev) => ({ ...prev, components: true }));
          }
        }
      }
    } else if (currentRoute.type === 'motion') {
      setExpandedSections((prev) => ({ ...prev, motion: true }));
    } else if (currentRoute.type === 'utilities') {
      setExpandedSections((prev) => ({ ...prev, utilities: true }));
    } else if (currentRoute.type === 'guides') {
      setExpandedSections((prev) => ({ ...prev, guides: true }));
    } else if (currentRoute.type === 'tokens') {
      setExpandedSections((prev) => ({ ...prev, theme: true }));
    }
  }, [currentRoute]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const toggleFolder = (folderId: string) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folderId]: !prev[folderId],
    }));
  };

  const toggleCategory = (catId: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }));
  };

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    navigate(path);
    onCloseMobile();
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

  // Filter component tree strictly for the active platform
  const platformFilteredTree = useMemo(() => {
    return FLUENT_COMPONENTS_TREE.map((node) => {
      if (node.isFolder && node.children) {
        const filteredChildren = node.children.filter((c) =>
          isPlatformSupported(c.id, currentPlatform)
        );
        return {
          ...node,
          children: filteredChildren,
        };
      }
      return node;
    }).filter((node) => {
      if (node.isFolder && node.children) {
        return node.children.length > 0;
      }
      return isPlatformSupported(node.id, currentPlatform);
    });
  }, [currentPlatform]);

  // Apply instant search query filter
  const displayedComponentTree = useMemo(() => {
    if (!searchQuery.trim()) return platformFilteredTree;
    const q = searchQuery.toLowerCase().trim();
    return platformFilteredTree
      .map((node) => {
        if (node.isFolder && node.children) {
          const matchingChildren = node.children.filter(
            (c) => c.name.toLowerCase().includes(q) || c.id.toLowerCase().includes(q)
          );
          if (node.name.toLowerCase().includes(q) || matchingChildren.length > 0) {
            return {
              ...node,
              children: matchingChildren.length > 0 ? matchingChildren : node.children,
            };
          }
          return null;
        }
        if (node.name.toLowerCase().includes(q) || node.id.toLowerCase().includes(q)) {
          return node;
        }
        return null;
      })
      .filter((n): n is FluentComponentNode => n !== null);
  }, [platformFilteredTree, searchQuery]);

  // Filtered categories for category view mode
  const platformCategories = useMemo(() => {
    return getComponentCategoriesForPlatform(currentPlatform);
  }, [currentPlatform]);

  const isRouteActive = (path: string) => currentRoute.path === path;

  const isComponentNodeActive = (node: FluentComponentNode) => {
    if (currentRoute.type !== 'components') return false;
    if (node.path === currentRoute.path) return true;
    if (node.id === currentRoute.id) return true;
    if (node.id === 'text-input' && (currentRoute.id === 'input' || currentRoute.id === 'text-input')) return true;
    if (node.path.includes('#')) {
      const [base, anchor] = node.path.split('#');
      return currentRoute.path === base && (currentHash === anchor || currentRoute.anchor === anchor);
    }
    return false;
  };

  const isFolderActive = (node: FluentComponentNode) => {
    if (currentRoute.type !== 'components' || !node.children) return false;
    return node.children.some((c) => isComponentNodeActive(c));
  };

  return (
    <>
      {/* Mobile Backdrop Scrim */}
      {isOpenMobile && (
        <div
          onClick={onCloseMobile}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 40,
            backdropFilter: 'blur(3px)',
          }}
        />
      )}

      <aside
        className={`desktop-sidebar ${isOpenMobile ? 'mobile-open' : ''}`}
        style={{
          width: 260,
          flexShrink: 0,
          borderRight: '1px solid var(--color-border-subtle)',
          backgroundColor: colorScheme === 'dark' ? '#0B0F19' : '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          userSelect: 'none',
        }}
      >
        {/* Brand Header Lockup */}
        <div
          style={{
            height: 48,
            minHeight: 48,
            padding: '0 14px',
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
              gap: 9,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: 5,
                backgroundColor: '#0078D4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: 13,
                boxShadow: '0 2px 5px rgba(0, 120, 212, 0.3)',
              }}
            >
              S
            </div>
            <div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 13.5,
                  letterSpacing: '-0.01em',
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.15,
                }}
              >
                Spectra UI
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: 'var(--color-text-muted)',
                  fontWeight: 500,
                }}
              >
                Fluent 2 Engine
              </div>
            </div>
          </a>

          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              padding: '1px 5px',
              backgroundColor: 'var(--color-surface-raised)',
              border: '1px solid var(--color-border-subtle)',
              borderRadius: 3,
              color: 'var(--color-text-secondary)',
            }}
          >
            {currentVersion}
          </span>
        </div>

        {/* Global Multi-Platform Dropdown Selector */}
        <div ref={platformDropdownRef} style={{ padding: '8px 14px 4px 14px', position: 'relative', flexShrink: 0 }}>
          <button
            onClick={() => setPlatformDropdownOpen(!platformDropdownOpen)}
            title="Switch documentation target platform"
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '6px 10px',
              borderRadius: 6,
              border: '1px solid var(--color-border-default)',
              backgroundColor: colorScheme === 'dark' ? 'rgba(255,255,255,0.04)' : 'var(--color-surface-raised)',
              color: 'var(--color-text-primary)',
              cursor: 'pointer',
              fontSize: 12.5,
              fontWeight: 600,
              transition: 'border-color 0.15s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <PlatformIcon platform={currentPlatform} size={15} color="#0078D4" />
              <span>{platformMeta.name}</span>
            </div>
            <ChevronDownIcon
              size={12}
              style={{
                transform: platformDropdownOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.15s ease',
                color: 'var(--color-text-muted)',
              }}
            />
          </button>

          {/* Platform Popover Dropdown */}
          {platformDropdownOpen && (
            <div
              style={{
                position: 'absolute',
                top: 'calc(100% + 4px)',
                left: 14,
                right: 14,
                backgroundColor: colorScheme === 'dark' ? '#0F172A' : '#FFFFFF',
                border: '1px solid var(--color-border-default)',
                borderRadius: 6,
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
                zIndex: 100,
                overflow: 'hidden',
                padding: 3,
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
                      padding: '7px 8px',
                      borderRadius: 4,
                      border: 'none',
                      backgroundColor: isCurrent ? 'rgba(0, 120, 212, 0.1)' : 'transparent',
                      color: isComingSoon
                        ? 'var(--color-text-muted)'
                        : isCurrent
                        ? '#0078D4'
                        : 'var(--color-text-primary)',
                      cursor: isComingSoon ? 'not-allowed' : 'pointer',
                      opacity: isComingSoon ? 0.6 : 1,
                      fontSize: 12.5,
                      fontWeight: isCurrent ? 700 : 500,
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                      {isCurrent ? (
                        <CheckIcon size={13} color="#0078D4" />
                      ) : (
                        <span style={{ width: 13 }} />
                      )}
                      <PlatformIcon
                        platform={p.id}
                        size={14}
                        color={isCurrent ? '#0078D4' : 'var(--color-text-muted)'}
                      />
                      <span>{p.name}</span>
                    </div>
                    {isComingSoon && (
                      <span
                        style={{
                          fontSize: 9.5,
                          fontWeight: 600,
                          padding: '1px 4px',
                          borderRadius: 3,
                          backgroundColor: colorScheme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
                          color: 'var(--color-text-muted)',
                        }}
                      >
                        Preview
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Realtime Instant Component Search Bar (Screenshot 1: Find components) */}
        <div style={{ padding: '8px 14px 6px 14px', flexShrink: 0 }}>
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <SearchIcon
              size={13}
              style={{
                position: 'absolute',
                left: 9,
                color: 'var(--color-text-muted)',
                pointerEvents: 'none',
              }}
            />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Escape') setSearchQuery('');
              }}
              placeholder="Find components"
              style={{
                width: '100%',
                height: 30,
                paddingLeft: 29,
                paddingRight: searchQuery ? 24 : 48,
                fontSize: 12.5,
                borderRadius: 4,
                border: '1px solid var(--color-border-default)',
                backgroundColor: colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : '#FFFFFF',
                color: 'var(--color-text-primary)',
                outline: 'none',
                transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#0078D4';
                e.currentTarget.style.boxShadow = '0 0 0 1px #0078D4';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-default)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
            {searchQuery ? (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: 6,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 2,
                  color: 'var(--color-text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                }}
                title="Clear filter"
              >
                <CloseIcon size={11} />
              </button>
            ) : (
              <kbd
                onClick={onOpenSearch}
                style={{
                  position: 'absolute',
                  right: 5,
                  fontSize: 9.5,
                  padding: '1px 4px',
                  borderRadius: 3,
                  backgroundColor: 'var(--color-surface-raised)',
                  border: '1px solid var(--color-border-subtle)',
                  color: 'var(--color-text-muted)',
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
                title="Open command palette (Ctrl+K)"
              >
                Ctrl+K
              </kbd>
            )}
          </div>
        </div>

        {/* Scrollable Navigation Tree Area (Screenshots 1 & 2) */}
        <div
          style={{
            flex: 1,
            minHeight: 0,
            overflowY: 'auto',
            overflowX: 'hidden',
            padding: '6px 8px 24px 8px',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            scrollbarWidth: 'thin',
            scrollbarColor: colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.18) transparent' : 'rgba(0, 0, 0, 0.18) transparent',
          }}
        >
          {/* SECTION 1: CONCEPTS (Screenshot 1) */}
          <div>
            <div
              onClick={() => toggleSection('concepts')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 8px',
                borderRadius: 4,
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: 13,
                color: 'var(--color-text-primary)',
                transition: 'background-color 0.1s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colorScheme === 'dark' ? 'rgba(255,255,255,0.06)' : '#F3F4F6')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <ChevronRightIcon
                size={11}
                style={{
                  transform: expandedSections.concepts ? 'rotate(90deg)' : 'none',
                  transition: 'transform 0.15s ease',
                  color: 'var(--color-text-muted)',
                  flexShrink: 0,
                }}
              />
              <span>Concepts</span>
            </div>
            {expandedSections.concepts && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 1, marginTop: 1 }}>
                {[
                  { name: 'Overview', path: '/overview' },
                  { name: 'Installation & Setup', path: '/installation' },
                  { name: 'Multi-Platform Architecture', path: '/cross-platform' },
                ].map((item) => {
                  const isActive = isRouteActive(item.path);
                  return (
                    <a
                      key={item.path}
                      href={item.path}
                      onClick={(e) => handleLinkClick(e, item.path)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        minHeight: 28,
                        padding: '4px 8px 4px 24px',
                        borderRadius: 4,
                        fontSize: 12.5,
                        textDecoration: 'none',
                        color: isActive ? '#FFFFFF' : 'var(--color-text-primary)',
                        backgroundColor: isActive ? '#0078D4' : 'transparent',
                        fontWeight: isActive ? 500 : 400,
                        transition: 'background-color 0.1s ease',
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) e.currentTarget.style.backgroundColor = colorScheme === 'dark' ? 'rgba(255,255,255,0.06)' : '#EBF3FC';
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      <FileTextIcon size={13} color={isActive ? '#FFFFFF' : 'var(--color-text-muted)'} />
                      <span>{item.name}</span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* SECTION 2: THEME & TOKENS (Screenshot 1) */}
          <div>
            <div
              onClick={() => toggleSection('theme')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 8px',
                borderRadius: 4,
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: 13,
                color: 'var(--color-text-primary)',
                transition: 'background-color 0.1s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colorScheme === 'dark' ? 'rgba(255,255,255,0.06)' : '#F3F4F6')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <ChevronRightIcon
                size={11}
                style={{
                  transform: expandedSections.theme ? 'rotate(90deg)' : 'none',
                  transition: 'transform 0.15s ease',
                  color: 'var(--color-text-muted)',
                  flexShrink: 0,
                }}
              />
              <span>Theme</span>
            </div>
            {expandedSections.theme && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 1, marginTop: 1 }}>
                {[
                  { name: 'Colors & Swatches', path: '/tokens/colors' },
                  { name: 'Typography Scale', path: '/tokens/typography' },
                  { name: 'Spacing & 4px Grid', path: '/tokens/spacing' },
                  { name: 'Shadows & Elevation', path: '/tokens/shadows' },
                ].map((item) => {
                  const isActive = isRouteActive(item.path);
                  return (
                    <a
                      key={item.path}
                      href={item.path}
                      onClick={(e) => handleLinkClick(e, item.path)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        minHeight: 28,
                        padding: '4px 8px 4px 24px',
                        borderRadius: 4,
                        fontSize: 12.5,
                        textDecoration: 'none',
                        color: isActive ? '#FFFFFF' : 'var(--color-text-primary)',
                        backgroundColor: isActive ? '#0078D4' : 'transparent',
                        fontWeight: isActive ? 500 : 400,
                        transition: 'background-color 0.1s ease',
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) e.currentTarget.style.backgroundColor = colorScheme === 'dark' ? 'rgba(255,255,255,0.06)' : '#EBF3FC';
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      <FileTextIcon size={13} color={isActive ? '#FFFFFF' : 'var(--color-text-muted)'} />
                      <span>{item.name}</span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* SECTION 3: COMPONENTS (Screenshots 1 & 2 - Exact Fluent 2 Architecture) */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '6px 8px',
                borderRadius: 4,
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: 13,
                color: 'var(--color-text-primary)',
                transition: 'background-color 0.1s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colorScheme === 'dark' ? 'rgba(255,255,255,0.06)' : '#F3F4F6')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <div
                style={{ display: 'flex', alignItems: 'center', gap: 6, flex: 1 }}
                onClick={() => toggleSection('components')}
              >
                <ChevronRightIcon
                  size={11}
                  style={{
                    transform: expandedSections.components ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.15s ease',
                    color: 'var(--color-text-muted)',
                    flexShrink: 0,
                  }}
                />
                <a
                  href="/components"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLinkClick(e, '/components');
                  }}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  Components
                </a>
              </div>

              {/* View mode toggle button (A-Z vs Categories) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setComponentViewMode(componentViewMode === 'tree' ? 'categories' : 'tree');
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '2px 4px',
                  borderRadius: 3,
                  fontSize: 10,
                  fontWeight: 600,
                  color: 'var(--color-text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 3,
                }}
                title={`Switch to ${componentViewMode === 'tree' ? 'Category Groups' : 'A-Z Tree'}`}
              >
                <span>{displayedComponentTree.length}</span>
                <span style={{ fontSize: 11, opacity: 0.6 }}>↕</span>
              </button>
            </div>

            {/* EXPANDED COMPONENTS LIST (Screenshot 2: Accordion, Avatar, Badge, Button, Input...) */}
            {expandedSections.components && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 1, marginTop: 1 }}>
                {componentViewMode === 'tree' ? (
                  /* Mode A: Fluent 2 A-Z Tree with Folders & Document Icons (Screenshot 2) */
                  displayedComponentTree.map((node) => {
                    if (node.isFolder && node.children) {
                      const isFolderOpen = expandedFolders[node.id] ?? false;
                      const hasActiveChild = isFolderActive(node);

                      return (
                        <div key={node.id} style={{ display: 'flex', flexDirection: 'column' }}>
                          {/* Folder Header Row (e.g. > 📁 Button) */}
                          <div
                            onClick={() => toggleFolder(node.id)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              minHeight: 28,
                              padding: '4px 8px 4px 14px',
                              borderRadius: 4,
                              cursor: 'pointer',
                              backgroundColor: hasActiveChild
                                ? colorScheme === 'dark'
                                  ? 'rgba(0, 120, 212, 0.12)'
                                  : '#EBF3FC'
                                : 'transparent',
                              color: hasActiveChild ? '#0078D4' : 'var(--color-text-primary)',
                              fontSize: 12.5,
                              fontWeight: hasActiveChild ? 600 : 400,
                              transition: 'background-color 0.1s ease',
                            }}
                            onMouseEnter={(e) => {
                              if (!hasActiveChild) e.currentTarget.style.backgroundColor = colorScheme === 'dark' ? 'rgba(255,255,255,0.06)' : '#F3F4F6';
                            }}
                            onMouseLeave={(e) => {
                              if (!hasActiveChild) e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                              <ChevronRightIcon
                                size={10}
                                style={{
                                  transform: isFolderOpen ? 'rotate(90deg)' : 'none',
                                  transition: 'transform 0.15s ease',
                                  color: 'var(--color-text-muted)',
                                  flexShrink: 0,
                                }}
                              />
                              <FolderIcon
                                size={14}
                                color={hasActiveChild ? '#0078D4' : 'var(--color-text-secondary)'}
                              />
                              <span>{node.name}</span>
                            </div>

                            <span
                              style={{
                                fontSize: 10,
                                color: 'var(--color-text-muted)',
                                opacity: 0.7,
                              }}
                            >
                              {node.children.length}
                            </span>
                          </div>

                          {/* Children under Folder (indented with Document icons) */}
                          {isFolderOpen && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                              {node.children.map((child) => {
                                const isChildActive = isComponentNodeActive(child);
                                return (
                                  <a
                                    key={child.id}
                                    href={child.path}
                                    onClick={(e) => handleLinkClick(e, child.path)}
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: 7,
                                      minHeight: 28,
                                      padding: '4px 8px 4px 34px',
                                      borderRadius: 4,
                                      fontSize: 12,
                                      textDecoration: 'none',
                                      color: isChildActive ? '#FFFFFF' : 'var(--color-text-primary)',
                                      backgroundColor: isChildActive ? '#0078D4' : 'transparent',
                                      fontWeight: isChildActive ? 500 : 400,
                                      transition: 'background-color 0.1s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                      if (!isChildActive) e.currentTarget.style.backgroundColor = colorScheme === 'dark' ? 'rgba(255,255,255,0.06)' : '#EBF3FC';
                                    }}
                                    onMouseLeave={(e) => {
                                      if (!isChildActive) e.currentTarget.style.backgroundColor = 'transparent';
                                    }}
                                  >
                                    <FileTextIcon
                                      size={13}
                                      color={isChildActive ? '#FFFFFF' : 'var(--color-text-muted)'}
                                    />
                                    <span>{child.name}</span>
                                  </a>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    }

                    // Leaf Standalone Component Row (e.g. 📄 Accordion, 📄 Input)
                    const isNodeActive = isComponentNodeActive(node);
                    const isNew = V020_NEW_COMPONENTS.includes(node.id) || V010_NEW_COMPONENTS.includes(node.id);

                    return (
                      <a
                        key={node.id}
                        href={node.path}
                        onClick={(e) => handleLinkClick(e, node.path)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          minHeight: 28,
                          padding: '4px 8px 4px 22px',
                          borderRadius: 4,
                          fontSize: 12.5,
                          textDecoration: 'none',
                          color: isNodeActive ? '#FFFFFF' : 'var(--color-text-primary)',
                          backgroundColor: isNodeActive ? '#0078D4' : 'transparent',
                          fontWeight: isNodeActive ? 500 : 400,
                          transition: 'background-color 0.1s ease',
                        }}
                        onMouseEnter={(e) => {
                          if (!isNodeActive) e.currentTarget.style.backgroundColor = colorScheme === 'dark' ? 'rgba(255,255,255,0.06)' : '#EBF3FC';
                        }}
                        onMouseLeave={(e) => {
                          if (!isNodeActive) e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                          <FileTextIcon
                            size={13}
                            color={isNodeActive ? '#FFFFFF' : 'var(--color-text-muted)'}
                          />
                          <span>{node.name}</span>
                        </div>

                        {isNew && (
                          <span
                            style={{
                              fontSize: 8.5,
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              padding: '1px 4px',
                              borderRadius: 8,
                              backgroundColor: isNodeActive ? 'rgba(255,255,255,0.25)' : 'rgba(16, 185, 129, 0.15)',
                              color: isNodeActive ? '#FFFFFF' : '#10B981',
                              border: isNodeActive ? 'none' : '1px solid rgba(16, 185, 129, 0.3)',
                            }}
                          >
                            NEW
                          </span>
                        )}
                      </a>
                    );
                  })
                ) : (
                  /* Mode B: Grouped Categories (Screenshot 4 & 5) */
                  platformCategories.map((cat) => {
                    const isCatOpen = expandedCategories[cat.id] ?? true;
                    return (
                      <div key={cat.id} style={{ display: 'flex', flexDirection: 'column' }}>
                        <div
                          onClick={() => toggleCategory(cat.id)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '4px 8px 4px 14px',
                            cursor: 'pointer',
                            fontSize: 11,
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            color: 'var(--color-text-muted)',
                            borderRadius: 4,
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <ChevronRightIcon
                              size={10}
                              style={{
                                transform: isCatOpen ? 'rotate(90deg)' : 'none',
                                transition: 'transform 0.15s ease',
                              }}
                            />
                            <span>{cat.name}</span>
                          </div>
                          <span style={{ fontSize: 10, opacity: 0.7 }}>{cat.components.length}</span>
                        </div>

                        {isCatOpen && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {cat.components.map((comp) => {
                              const isCompActive = currentRoute.type === 'components' && currentRoute.id === comp.id;
                              return (
                                <a
                                  key={comp.id}
                                  href={`/components/${comp.id}`}
                                  onClick={(e) => handleLinkClick(e, `/components/${comp.id}`)}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 7,
                                    minHeight: 28,
                                    padding: '4px 8px 4px 28px',
                                    borderRadius: 4,
                                    fontSize: 12,
                                    textDecoration: 'none',
                                    color: isCompActive ? '#FFFFFF' : 'var(--color-text-primary)',
                                    backgroundColor: isCompActive ? '#0078D4' : 'transparent',
                                    fontWeight: isCompActive ? 500 : 400,
                                  }}
                                >
                                  <FileTextIcon
                                    size={13}
                                    color={isCompActive ? '#FFFFFF' : 'var(--color-text-muted)'}
                                  />
                                  <span>{comp.name}</span>
                                </a>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            )}
          </div>

          {/* SECTION 4: COMPONENT API (Screenshot 3 exact MUI API list) */}
          <div>
            <div
              onClick={() => toggleSection('component-api')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 8px',
                borderRadius: 4,
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: 13,
                color: 'var(--color-text-primary)',
                transition: 'background-color 0.1s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colorScheme === 'dark' ? 'rgba(255,255,255,0.06)' : '#F3F4F6')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <ChevronRightIcon
                size={11}
                style={{
                  transform: expandedSections['component-api'] ? 'rotate(90deg)' : 'none',
                  transition: 'transform 0.15s ease',
                  color: 'var(--color-text-muted)',
                  flexShrink: 0,
                }}
              />
              <span>Component API</span>
            </div>
            {expandedSections['component-api'] && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 1, marginTop: 1, maxHeight: 240, overflowY: 'auto' }}>
                {displayedComponentTree.map((item) => {
                  const targetId = item.id.replace(/-family$/, '');
                  const isApiActive = currentRoute.type === 'components' && currentRoute.id === targetId && currentHash === 'api-reference';
                  return (
                    <a
                      key={item.id}
                      href={`/components/${targetId}#api-reference`}
                      onClick={(e) => handleAnchorClick(e, targetId, 'api-reference')}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        minHeight: 26,
                        padding: '3px 8px 3px 24px',
                        borderRadius: 4,
                        fontSize: 12,
                        textDecoration: 'none',
                        color: isApiActive ? '#0078D4' : 'var(--color-text-secondary)',
                        backgroundColor: isApiActive ? (colorScheme === 'dark' ? 'rgba(0,120,212,0.15)' : '#EBF3FC') : 'transparent',
                        fontWeight: isApiActive ? 600 : 400,
                      }}
                    >
                      <span
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: '50%',
                          backgroundColor: isApiActive ? '#0078D4' : 'var(--color-border-default)',
                          flexShrink: 0,
                        }}
                      />
                      <span>{item.name}</span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* SECTION 5: MOTION (Screenshot 1) */}
          <div>
            <div
              onClick={() => toggleSection('motion')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 8px',
                borderRadius: 4,
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: 13,
                color: 'var(--color-text-primary)',
                transition: 'background-color 0.1s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colorScheme === 'dark' ? 'rgba(255,255,255,0.06)' : '#F3F4F6')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <ChevronRightIcon
                size={11}
                style={{
                  transform: expandedSections.motion ? 'rotate(90deg)' : 'none',
                  transition: 'transform 0.15s ease',
                  color: 'var(--color-text-muted)',
                  flexShrink: 0,
                }}
              />
              <span>Motion</span>
            </div>
            {expandedSections.motion && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 1, marginTop: 1 }}>
                {[
                  { name: 'Motion Overview', path: '/motion' },
                  { name: 'Atoms & Durations', path: '/motion/atoms' },
                  { name: 'Blur Transitions', path: '/motion/blur' },
                  { name: 'Collapse & Expand', path: '/motion/collapse' },
                  { name: 'Fade & Opacity', path: '/motion/fade' },
                  { name: 'Scale & Elevation', path: '/motion/scale' },
                  { name: 'Slide & Sheets', path: '/motion/slide' },
                ].map((item) => {
                  const isActive = isRouteActive(item.path);
                  return (
                    <a
                      key={item.path}
                      href={item.path}
                      onClick={(e) => handleLinkClick(e, item.path)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        minHeight: 28,
                        padding: '4px 8px 4px 24px',
                        borderRadius: 4,
                        fontSize: 12.5,
                        textDecoration: 'none',
                        color: isActive ? '#FFFFFF' : 'var(--color-text-primary)',
                        backgroundColor: isActive ? '#0078D4' : 'transparent',
                        fontWeight: isActive ? 500 : 400,
                      }}
                    >
                      <FileTextIcon size={13} color={isActive ? '#FFFFFF' : 'var(--color-text-muted)'} />
                      <span>{item.name}</span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* SECTION 6: UTILITIES (Screenshot 1) */}
          <div>
            <div
              onClick={() => toggleSection('utilities')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 8px',
                borderRadius: 4,
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: 13,
                color: 'var(--color-text-primary)',
                transition: 'background-color 0.1s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colorScheme === 'dark' ? 'rgba(255,255,255,0.06)' : '#F3F4F6')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <ChevronRightIcon
                size={11}
                style={{
                  transform: expandedSections.utilities ? 'rotate(90deg)' : 'none',
                  transition: 'transform 0.15s ease',
                  color: 'var(--color-text-muted)',
                  flexShrink: 0,
                }}
              />
              <span>Utilities</span>
            </div>
            {expandedSections.utilities && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 1, marginTop: 1 }}>
                {[
                  { name: 'createCSSRuleFromTheme', path: '/utilities/createCSSRuleFromTheme', isMono: true },
                  { name: 'useSafeZoneArea', path: '/utilities/useSafeZoneArea', isMono: true },
                  { name: 'useArrowNavigationGroup', path: '/utilities/useArrowNavigationGroup', isMono: true },
                  { name: 'useFocusableGroup', path: '/utilities/useFocusableGroup', isMono: true },
                  { name: 'AriaLiveAnnouncer', path: '/utilities/AriaLiveAnnouncer', isMono: true },
                  { name: 'useAnnounce', path: '/utilities/useAnnounce', isMono: true },
                ].map((item) => {
                  const isActive = isRouteActive(item.path);
                  return (
                    <a
                      key={item.path}
                      href={item.path}
                      onClick={(e) => handleLinkClick(e, item.path)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        minHeight: 28,
                        padding: '4px 8px 4px 24px',
                        borderRadius: 4,
                        fontSize: item.isMono ? 12 : 12.5,
                        fontFamily: item.isMono ? 'var(--font-mono, monospace)' : 'inherit',
                        textDecoration: 'none',
                        color: isActive ? '#FFFFFF' : 'var(--color-text-primary)',
                        backgroundColor: isActive ? '#0078D4' : 'transparent',
                        fontWeight: isActive ? 500 : 400,
                      }}
                    >
                      <FileTextIcon size={13} color={isActive ? '#FFFFFF' : 'var(--color-text-muted)'} />
                      <span>{item.name}</span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* SECTION 7: GUIDES & ARCHITECTURE (Screenshot 1: Migration Shims / Guides) */}
          <div>
            <div
              onClick={() => toggleSection('guides')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 8px',
                borderRadius: 4,
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: 13,
                color: 'var(--color-text-primary)',
                transition: 'background-color 0.1s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colorScheme === 'dark' ? 'rgba(255,255,255,0.06)' : '#F3F4F6')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <ChevronRightIcon
                size={11}
                style={{
                  transform: expandedSections.guides ? 'rotate(90deg)' : 'none',
                  transition: 'transform 0.15s ease',
                  color: 'var(--color-text-muted)',
                  flexShrink: 0,
                }}
              />
              <span>Architecture & Guides</span>
            </div>
            {expandedSections.guides && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 1, marginTop: 1 }}>
                {[
                  { name: 'Responsive UI', path: '/guides/responsive-ui' },
                  { name: 'Localization', path: '/guides/localization' },
                  { name: 'Building Extensible Themes', path: '/guides/building-extensible-themes' },
                  { name: 'Minimizing Bundle Size', path: '/guides/minimizing-bundle-size' },
                  { name: 'Container Queries', path: '/guides/container-queries', badge: 'NEW' },
                  { name: 'Density & Sizing', path: '/guides/density' },
                  { name: 'Focus Visible', path: '/guides/focus-visible', badge: 'NEW' },
                  { name: 'Dark Mode Baseline', path: '/guides/dark-mode' },
                  { name: 'Right-to-Left (RTL)', path: '/guides/right-to-left' },
                ].map((item) => {
                  const isActive = isRouteActive(item.path);
                  return (
                    <a
                      key={item.path}
                      href={item.path}
                      onClick={(e) => handleLinkClick(e, item.path)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        minHeight: 28,
                        padding: '4px 8px 4px 24px',
                        borderRadius: 4,
                        fontSize: 12.5,
                        textDecoration: 'none',
                        color: isActive ? '#FFFFFF' : 'var(--color-text-primary)',
                        backgroundColor: isActive ? '#0078D4' : 'transparent',
                        fontWeight: isActive ? 500 : 400,
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                        <FileTextIcon size={13} color={isActive ? '#FFFFFF' : 'var(--color-text-muted)'} />
                        <span>{item.name}</span>
                      </div>
                      {item.badge && (
                        <span
                          style={{
                            fontSize: 8.5,
                            fontWeight: 700,
                            padding: '1px 4px',
                            borderRadius: 8,
                            backgroundColor: isActive ? 'rgba(255,255,255,0.25)' : 'rgba(16, 185, 129, 0.15)',
                            color: isActive ? '#FFFFFF' : '#10B981',
                            border: isActive ? 'none' : '1px solid rgba(16, 185, 129, 0.3)',
                          }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* DIVIDER & EXTERNAL REFERENCE 1: FLUENT SYSTEM ICONS (Screenshot 1) */}
          <div style={{ height: 1, backgroundColor: 'var(--color-border-subtle)', margin: '8px 4px 6px 4px' }} />

          <a
            href="/icons"
            onClick={(e) => handleLinkClick(e, '/icons')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              minHeight: 30,
              padding: '6px 8px',
              borderRadius: 4,
              fontSize: 13,
              fontWeight: 600,
              textDecoration: 'none',
              color: currentRoute.type === 'icons' ? '#0078D4' : 'var(--color-text-primary)',
              backgroundColor: currentRoute.type === 'icons' ? (colorScheme === 'dark' ? 'rgba(0,120,212,0.12)' : '#EBF3FC') : 'transparent',
              transition: 'background-color 0.1s ease',
            }}
            onMouseEnter={(e) => {
              if (currentRoute.type !== 'icons') e.currentTarget.style.backgroundColor = colorScheme === 'dark' ? 'rgba(255,255,255,0.06)' : '#F3F4F6';
            }}
            onMouseLeave={(e) => {
              if (currentRoute.type !== 'icons') e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <ChevronRightIcon size={11} color="var(--color-text-muted)" />
              <span>Fluent System Icons</span>
            </div>
            <GlobeIcon size={14} color="var(--color-text-muted)" />
          </a>

          {/* DIVIDER & EXTERNAL REFERENCE 2: DEVICE LAB & CHASSIS (Screenshot 1) */}
          <div style={{ height: 1, backgroundColor: 'var(--color-border-subtle)', margin: '4px 4px 6px 4px' }} />

          <a
            href="/mobile-simulator"
            onClick={(e) => handleLinkClick(e, '/mobile-simulator')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              minHeight: 30,
              padding: '6px 8px',
              borderRadius: 4,
              fontSize: 13,
              fontWeight: 600,
              textDecoration: 'none',
              color: currentRoute.path === '/mobile-simulator' ? '#0078D4' : 'var(--color-text-primary)',
              backgroundColor: currentRoute.path === '/mobile-simulator' ? (colorScheme === 'dark' ? 'rgba(0,120,212,0.12)' : '#EBF3FC') : 'transparent',
              transition: 'background-color 0.1s ease',
            }}
            onMouseEnter={(e) => {
              if (currentRoute.path !== '/mobile-simulator') e.currentTarget.style.backgroundColor = colorScheme === 'dark' ? 'rgba(255,255,255,0.06)' : '#F3F4F6';
            }}
            onMouseLeave={(e) => {
              if (currentRoute.path !== '/mobile-simulator') e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <ChevronRightIcon size={11} color="var(--color-text-muted)" />
              <span>Device Lab & Chassis</span>
            </div>
            <GlobeIcon size={14} color="var(--color-text-muted)" />
          </a>

          {/* DIVIDER & EXTERNAL REFERENCE 3: REPOSITORY & PACKAGES (Screenshot 1) */}
          <div style={{ height: 1, backgroundColor: 'var(--color-border-subtle)', margin: '4px 4px 6px 4px' }} />

          <a
            href="https://github.com/Winplaybox/spectra-ui"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              minHeight: 30,
              padding: '6px 8px',
              borderRadius: 4,
              fontSize: 13,
              fontWeight: 600,
              textDecoration: 'none',
              color: 'var(--color-text-primary)',
              transition: 'background-color 0.1s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colorScheme === 'dark' ? 'rgba(255,255,255,0.06)' : '#F3F4F6')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <ChevronRightIcon size={11} color="var(--color-text-muted)" />
              <span>Contributors Packages</span>
            </div>
            <GlobeIcon size={14} color="var(--color-text-muted)" />
          </a>
        </div>

        {/* Developer Native Sponsor Ad Placement */}
        <div style={{ padding: '6px 12px', borderTop: '1px solid var(--color-border-subtle)', flexShrink: 0 }}>
          <NativeSponsorAd initialFormat="classic" publisherTheme="devtools" allowFormatSwitch={false} />
        </div>

        {/* Footer info with Cookie Preferences */}
        <div
          style={{
            padding: '8px 14px',
            borderTop: '1px solid var(--color-border-subtle)',
            fontSize: 11,
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
            onMouseEnter={(e) => (e.currentTarget.style.color = '#0078D4')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
            title="Manage privacy and cookie settings"
          >
            <span>Cookie Preferences</span>
          </button>

          <span
            style={{
              fontSize: 10,
              padding: '1px 5px',
              borderRadius: 3,
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

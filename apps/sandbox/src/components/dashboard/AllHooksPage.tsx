import React, { useState, useMemo } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  TextInput,
  Button,
} from '@spectra/react';
import {
  SearchIcon,
  ChevronRightIcon,
  SparklesIcon,
  CheckIcon,
  CloseIcon,
  CodeIcon,
} from '@spectra/icons';
import { navigate } from '../../utils/router';

export interface HookItem {
  id: string;
  name: string;
  category: 'State & Interaction' | 'Theme & Environment' | 'Lifecycle & DOM' | 'Utilities & Feedback';
  signature: string;
  description: string;
  returnType: string;
}

export const ALL_HOOKS: HookItem[] = [
  // Category 1: State & Interaction
  {
    id: 'use-disclosure',
    name: 'useDisclosure',
    category: 'State & Interaction',
    signature: 'useDisclosure({ defaultIsOpen?: boolean, onOpen?, onClose? })',
    description: 'Standard state machine for toggling visibility of modals, drawers, tooltips, dropdowns, and accordions.',
    returnType: '{ isOpen, onOpen, onClose, onToggle, setOpen }',
  },
  {
    id: 'use-controllable-state',
    name: 'useControllableState',
    category: 'State & Interaction',
    signature: 'useControllableState({ value?, defaultValue?, onChange? })',
    description: 'Seamlessly bridge controlled and uncontrolled component props with unified updater semantics.',
    returnType: '[value, setValue]',
  },
  {
    id: 'use-outside-click',
    name: 'useOutsideClick',
    category: 'State & Interaction',
    signature: 'useOutsideClick(ref, handler, enabled?: boolean)',
    description: 'Dismiss floating menus, popovers, or drawers when pointer interactions occur outside the target element.',
    returnType: 'void',
  },
  {
    id: 'use-focus-ring',
    name: 'useFocusRing',
    category: 'State & Interaction',
    signature: 'useFocusRing({ isTextInput?: boolean, autoFocus?: boolean })',
    description: 'Distinguish keyboard focus-visible from pointer clicks for WCAG 2.1 AA compliant focus outlines.',
    returnType: '{ isFocused, isFocusVisible, focusProps }',
  },
  {
    id: 'use-debounce',
    name: 'useDebounce',
    category: 'State & Interaction',
    signature: 'useDebounce<T>(value: T, delayMs: number): T',
    description: 'Debounce high-frequency value updates such as search inputs or real-time query filters.',
    returnType: 'debouncedValue',
  },
  {
    id: 'use-throttle',
    name: 'useThrottle',
    category: 'State & Interaction',
    signature: 'useThrottle<T>(value: T, intervalMs: number): T',
    description: 'Throttle rapid state changes such as scroll positions, drag movements, and window coordinates.',
    returnType: 'throttledValue',
  },
  {
    id: 'use-hover',
    name: 'useHover',
    category: 'State & Interaction',
    signature: 'useHover<T extends HTMLElement>()',
    description: 'Track pointer hover states with cross-platform event listeners and automatic teardown.',
    returnType: '{ ref, isHovered }',
  },

  // Category 2: Theme & Environment
  {
    id: 'use-color-scheme',
    name: 'useColorScheme',
    category: 'Theme & Environment',
    signature: 'useColorScheme()',
    description: 'Manage dark/light color schemes with automatic system preference detection and localStorage persistence.',
    returnType: '{ colorScheme, setColorScheme, isDark }',
  },
  {
    id: 'use-media-query',
    name: 'useMediaQuery',
    category: 'Theme & Environment',
    signature: 'useMediaQuery(query: string): boolean',
    description: 'Evaluate and subscribe to CSS media queries dynamically with zero layout flicker or memory leaks.',
    returnType: 'boolean',
  },
  {
    id: 'use-reduced-motion',
    name: 'useReducedMotion',
    category: 'Theme & Environment',
    signature: 'useReducedMotion(): boolean',
    description: 'Detect prefers-reduced-motion OS accessibility settings to conditionally disable intense animations.',
    returnType: 'boolean',
  },
  {
    id: 'use-rtl',
    name: 'useRTL',
    category: 'Theme & Environment',
    signature: 'useRTL(): { isRTL, direction, setDirection }',
    description: 'Detect and toggle right-to-left document layout flow for internationalized typography and layouts.',
    returnType: '{ isRTL, direction, setDirection }',
  },
  {
    id: 'use-platform',
    name: 'usePlatform',
    category: 'Theme & Environment',
    signature: 'usePlatform(): { platform, isMobile, isDesktop }',
    description: 'Detect client runtime OS and hardware form-factor to apply platform-tailored styling rules.',
    returnType: '{ platform, isMobile, isDesktop }',
  },
  {
    id: 'use-breakpoint',
    name: 'useBreakpoint',
    category: 'Theme & Environment',
    signature: 'useBreakpoint(): { breakpoint, isMobile, isTablet, isDesktop }',
    description: 'Access current responsive design breakpoint token synchronized with Spectra UI layout grid.',
    returnType: '{ breakpoint, isMobile, isTablet, isDesktop }',
  },

  // Category 3: Lifecycle & DOM
  {
    id: 'use-id',
    name: 'useId',
    category: 'Lifecycle & DOM',
    signature: 'useId(prefix?: string): string',
    description: 'Generate collision-free unique IDs for accessible ARIA labels, form inputs, and descriptions.',
    returnType: 'string',
  },
  {
    id: 'use-event-listener',
    name: 'useEventListener',
    category: 'Lifecycle & DOM',
    signature: 'useEventListener(eventName, handler, targetElement?, options?)',
    description: 'Declaratively bind event listeners to window, document, or DOM elements with automatic cleanup.',
    returnType: 'void',
  },
  {
    id: 'use-intersection-observer',
    name: 'useIntersectionObserver',
    category: 'Lifecycle & DOM',
    signature: 'useIntersectionObserver(targetRef, options?: IntersectionObserverInit)',
    description: 'Observe DOM element viewport visibility for lazy loading images, infinite scrolling, or animation triggers.',
    returnType: 'IntersectionObserverEntry | null',
  },
  {
    id: 'use-element-size',
    name: 'useElementSize',
    category: 'Lifecycle & DOM',
    signature: 'useElementSize<T extends HTMLElement>()',
    description: 'Real-time bounding width and height measurements powered by native ResizeObserver.',
    returnType: '{ ref, width, height }',
  },
  {
    id: 'use-window-size',
    name: 'useWindowSize',
    category: 'Lifecycle & DOM',
    signature: 'useWindowSize(): { width: number, height: number }',
    description: 'Track window inner dimensions with optimized debounced resize handlers.',
    returnType: '{ width, height }',
  },
  {
    id: 'use-scroll-lock',
    name: 'useScrollLock',
    category: 'Lifecycle & DOM',
    signature: 'useScrollLock(locked: boolean): void',
    description: 'Lock document body scrolling when modal dialogs, drawers, or fullscreen overlays are active.',
    returnType: 'void',
  },

  // Category 4: Utilities & Feedback
  {
    id: 'use-toast',
    name: 'useToast',
    category: 'Utilities & Feedback',
    signature: 'useToast(): { toasts, show, dismiss, clear }',
    description: 'Queue, display, and auto-dismiss floating notification messages with customizable durations.',
    returnType: '{ toasts, show, dismiss, clear }',
  },
  {
    id: 'use-clipboard',
    name: 'useClipboard',
    category: 'Utilities & Feedback',
    signature: 'useClipboard({ timeout?: number }): { copied, copy, error }',
    description: 'Copy text or data to system clipboard with temporary success state and fallback support.',
    returnType: '{ copied, copy, error }',
  },
  {
    id: 'use-local-storage',
    name: 'useLocalStorage',
    category: 'Utilities & Feedback',
    signature: 'useLocalStorage<T>(key: string, initialValue: T)',
    description: 'Persist state values in browser localStorage with cross-tab synchronization and JSON serialization.',
    returnType: '[value, setValue, removeValue]',
  },
  {
    id: 'use-previous',
    name: 'usePrevious',
    category: 'Utilities & Feedback',
    signature: 'usePrevious<T>(value: T): T | undefined',
    description: 'Track and compare previous render cycle values to detect transitions or directional state shifts.',
    returnType: 'T | undefined',
  },
  {
    id: 'use-async',
    name: 'useAsync',
    category: 'Utilities & Feedback',
    signature: 'useAsync<T>(asyncFunction, immediate?: boolean)',
    description: 'Manage asynchronous promise lifecycles with execute trigger, data, error, and loading states.',
    returnType: '{ execute, loading, data, error }',
  },
  {
    id: 'use-interval',
    name: 'useInterval',
    category: 'Utilities & Feedback',
    signature: 'useInterval(callback: () => void, delayMs: number | null): void',
    description: 'Declarative setInterval lifecycle management with dynamic delay and pause capabilities.',
    returnType: 'void',
  },
];

const CATEGORIES = [
  'All',
  'State & Interaction',
  'Theme & Environment',
  'Lifecycle & DOM',
  'Utilities & Feedback',
] as const;

export const AllHooksPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredHooks = useMemo(() => {
    return ALL_HOOKS.filter((hook) => {
      const matchesCategory =
        selectedCategory === 'All' || hook.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        hook.name.toLowerCase().includes(q) ||
        hook.description.toLowerCase().includes(q) ||
        hook.category.toLowerCase().includes(q) ||
        hook.signature.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: ALL_HOOKS.length };
    ALL_HOOKS.forEach((h) => {
      counts[h.category] = (counts[h.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Header Banner */}
      <Card
        variant="bordered"
        style={{
          backgroundColor: 'var(--color-surface)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <CardHeader>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <Badge variant="primary">Functional Primitives</Badge>
            <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>@spectra/primitives</span>
          </div>
          <CardTitle style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--color-text-primary)' }}>
            Headless Hooks & State Machines
          </CardTitle>
          <CardDescription style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--color-text-secondary)', maxWidth: 840 }}>
            Spectra UI primitives provide 25 battle-tested, framework-agnostic headless hooks and state machines.
            They encapsulate keyboard navigation, WAI-ARIA accessibility contracts, responsive breakpoints, and lifecycle observers
            without injecting any CSS styling.
          </CardDescription>

          {/* Quick Metrics Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 24,
              flexWrap: 'wrap',
              marginTop: 18,
              paddingTop: 16,
              borderTop: '1px solid var(--color-border-subtle)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-action-primary)',
                }}
              />
              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)' }}>
                25 Headless Hooks
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#10B981',
                }}
              />
              <span style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
                4 Functional Categories
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#6366F1',
                }}
              />
              <span style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
                100% Tree-Shakeable ESM
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#F59E0B',
                }}
              />
              <span style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
                SSR & Hydration Safe
              </span>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Search & Category Filter Toolbar */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          backgroundColor: 'var(--color-surface)',
          padding: 18,
          borderRadius: 10,
          border: '1px solid var(--color-border-default)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ flex: 1 }}>
            <TextInput
              placeholder="Search 25 hooks by name, category, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              leftIcon={<SearchIcon size={16} />}
              style={{ width: '100%' }}
            />
          </div>
          {searchQuery && (
            <Button
              variant="tertiary"
              size="sm"
              onClick={() => setSearchQuery('')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}
            >
              <CloseIcon size={14} />
              Clear
            </Button>
          )}
        </div>

        {/* Category Pills */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              color: 'var(--color-text-muted)',
              marginRight: 4,
            }}
          >
            Category:
          </span>
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count = categoryCounts[cat] || 0;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '6px 12px',
                  borderRadius: 6,
                  border: '1px solid',
                  borderColor: isSelected ? 'var(--color-action-primary)' : 'var(--color-border-default)',
                  backgroundColor: isSelected ? 'rgba(0, 127, 255, 0.12)' : 'var(--color-surface-raised)',
                  color: isSelected ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
                  fontSize: 12,
                  fontWeight: isSelected ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                <span>{cat}</span>
                <span
                  style={{
                    fontSize: 11,
                    padding: '1px 6px',
                    borderRadius: 10,
                    backgroundColor: isSelected ? 'var(--color-action-primary)' : 'var(--color-border-subtle)',
                    color: isSelected ? '#FFFFFF' : 'var(--color-text-muted)',
                    fontWeight: 700,
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Hooks Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
          gap: 16,
        }}
      >
        {filteredHooks.map((hook) => (
          <div
            key={hook.id}
            onClick={() => navigate(`/hooks/${hook.id}`)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border-default)',
              borderRadius: 10,
              padding: 20,
              cursor: 'pointer',
              transition: 'all 0.18s ease',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-action-primary)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border-default)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)';
            }}
          >
            <div>
              {/* Header: Name + Badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 8,
                  marginBottom: 10,
                }}
              >
                <span
                  style={{
                    fontFamily: 'monospace',
                    fontSize: 16,
                    fontWeight: 700,
                    color: 'var(--color-action-primary)',
                  }}
                >
                  {hook.name}
                </span>
                <Badge variant="default" size="sm">
                  {hook.category}
                </Badge>
              </div>

              {/* Code Signature */}
              <div
                style={{
                  backgroundColor: 'var(--color-surface-raised)',
                  padding: '6px 10px',
                  borderRadius: 6,
                  border: '1px solid var(--color-border-subtle)',
                  fontFamily: 'monospace',
                  fontSize: 12,
                  color: 'var(--color-text-secondary)',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  marginBottom: 12,
                }}
                title={hook.signature}
              >
                {hook.signature}
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.55,
                  color: 'var(--color-text-secondary)',
                  margin: 0,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {hook.description}
              </p>
            </div>

            {/* Footer Action */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 14,
                marginTop: 14,
                borderTop: '1px solid var(--color-border-subtle)',
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontFamily: 'monospace',
                  color: 'var(--color-text-muted)',
                  maxWidth: '70%',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
                title={`Returns: ${hook.returnType}`}
              >
                {hook.returnType}
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4,
                  fontSize: 12,
                  fontWeight: 600,
                  color: 'var(--color-action-primary)',
                }}
              >
                Explore
                <ChevronRightIcon size={14} />
              </span>
            </div>
          </div>
        ))}

        {filteredHooks.length === 0 && (
          <div
            style={{
              gridColumn: '1 / -1',
              padding: '60px 20px',
              textAlign: 'center',
              backgroundColor: 'var(--color-surface)',
              borderRadius: 10,
              border: '1px dashed var(--color-border-default)',
            }}
          >
            <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 6 }}>
              No hooks found matching "{searchQuery}"
            </p>
            <p style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 16 }}>
              Try searching by a different name, category, or clear filters.
            </p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllHooksPage;

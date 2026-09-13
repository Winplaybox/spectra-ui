import React, { useState, useRef, useEffect } from 'react';
import {
  useDisclosure,
  useControllableState,
  useOutsideClick,
  useId,
  useColorScheme,
  useMediaQuery,
  useReducedMotion,
  useRTL,
  useDebounce,
  useThrottle,
  useHover,
  usePlatform,
  useBreakpoint,
  useEventListener,
  useIntersectionObserver,
  useElementSize,
  useWindowSize,
  useScrollLock,
  useClipboard,
  useLocalStorage,
  usePrevious,
  useAsync,
  useInterval,
} from '@spectra/primitives';
import { Button, Badge, Card, CardHeader, CardTitle, CardDescription, CardContent, TextInput, Switch, Spinner } from '@spectra/react';
import { CheckIcon, CloseIcon, CopyIcon, SparklesIcon, AlertCircleIcon, InfoIcon } from '@spectra/icons';
import { navigate } from '../../utils/router';
import { HookApiSection } from './HookApiSection';

interface HooksSectionProps {
  hookId?: string;
}

export const HooksSection: React.FC<HooksSectionProps> = ({ hookId = 'use-disclosure' }) => {
  const [activeHook, setActiveHook] = useState(hookId);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (hookId && hookId !== activeHook) {
      setActiveHook(hookId);
    }
  }, [hookId]);

  // Hook 1: useDisclosure
  const disclosure = useDisclosure({ defaultIsOpen: false });

  // Hook 2: useControllableState
  const [isControlled, setIsControlled] = useState(false);
  const [controlledVal, setControlledVal] = useState('Controlled input value');
  const [stateValue, setStateValue] = useControllableState({
    value: isControlled ? controlledVal : undefined,
    defaultValue: 'Uncontrolled initial value',
  });

  // Hook 3: useOutsideClick
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  useOutsideClick(popoverRef, () => {
    setIsPopoverOpen(false);
  }, isPopoverOpen);

  // Hook 4: useId
  const sampleId1 = useId('spectra-field');
  const sampleId2 = useId('spectra-field');

  // Hook 5: useColorScheme
  const { colorScheme, setColorScheme, isDark } = useColorScheme();

  // Hook 6: useMediaQuery
  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 1024px)');
  const isDesktop = useMediaQuery('(min-width: 1025px)');

  // Hook 7: useFocusRing
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusVisible, setIsFocusVisible] = useState(false);

  // Hook 8: useReducedMotion
  const prefersReducedMotion = useReducedMotion();

  // Hook 9: useRTL
  const [rtlOverride, setRtlOverride] = useState(false);

  // Hook 10: Simple Toast simulator
  const [toastList, setToastList] = useState<{ id: number; msg: string; type: 'success' | 'info' | 'error' }[]>([]);

  const showToast = (msg: string, type: 'success' | 'info' | 'error' = 'info') => {
    const id = Date.now();
    setToastList((prev) => [...prev, { id, msg, type }]);
    setTimeout(() => {
      setToastList((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  // Hook 11: useDebounce
  const [debounceInput, setDebounceInput] = useState('Type rapidly to test debounce...');
  const debouncedValue = useDebounce(debounceInput, 400);

  // Hook 12: useThrottle
  const [throttleCount, setThrottleCount] = useState(0);
  const throttledCount = useThrottle(throttleCount, 500);

  // Hook 13: useHover
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  // Hook 14: usePlatform
  const platformInfo = usePlatform();

  // Hook 15: useBreakpoint
  const breakpointInfo = useBreakpoint();

  // Hook 16: useEventListener
  const [lastKey, setLastKey] = useState<string>('None (Press any key)');
  useEventListener('keydown', (e: KeyboardEvent) => {
    setLastKey(`${e.key} (Code: ${e.code})`);
  });

  // Hook 17: useIntersectionObserver
  const intersectionTargetRef = useRef<HTMLDivElement>(null);
  const intersectionEntry = useIntersectionObserver(intersectionTargetRef as any, { threshold: 0.5 });

  // Hook 18: useElementSize
  const [elementSizeRef, elementSize] = useElementSize<HTMLDivElement>();

  // Hook 19: useWindowSize
  const windowSize = useWindowSize();

  // Hook 20: useScrollLock
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  useScrollLock(isScrollLocked);

  // Hook 21: useClipboard
  const { copy: runCopy, hasCopied: clipboardCopied } = useClipboard({ timeout: 2000 });
  const [clipboardText, setClipboardText] = useState('https://spectra-ui.dev/tokens/colors');

  // Hook 22: useLocalStorage
  const [storageCounter, setStorageCounter] = useLocalStorage<number>('spectra-counter-demo', 1);

  // Hook 23: usePrevious
  const [previousCounter, setPreviousCounter] = useState(0);
  const previousValue = usePrevious(previousCounter);

  // Hook 24: useAsync
  const [simulateError, setSimulateError] = useState(false);
  const { execute: fetchConfig, status: asyncStatus, value: asyncData, isLoading: asyncLoading } = useAsync(
    async () => {
      await new Promise((res) => setTimeout(res, 800));
      if (simulateError) throw new Error('Simulated network timeout (HTTP 504)');
      return { status: 'healthy', version: 'v1.4.0', nodes: 28, latency: '12ms' };
    },
    false
  );

  // Hook 25: useInterval
  const [intervalCount, setIntervalCount] = useState(0);
  const [intervalDelay, setIntervalDelay] = useState<number | null>(1000);
  useInterval(() => {
    setIntervalCount((c) => c + 1);
  }, intervalDelay);


  const copy = (code: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const hooksList = [
    { id: 'use-disclosure', name: 'useDisclosure', category: 'State & Interaction', desc: 'Toggle open/close state for modals, tooltips, accordions, and drawers.' },
    { id: 'use-controllable-state', name: 'useControllableState', category: 'State & Interaction', desc: 'Support both controlled and uncontrolled component props seamlessly.' },
    { id: 'use-outside-click', name: 'useOutsideClick', category: 'State & Interaction', desc: 'Dismiss dropdowns, drawers, or popovers on pointer click outside target.' },
    { id: 'use-focus-ring', name: 'useFocusRing', category: 'State & Interaction', desc: 'Differentiate keyboard focus-visible from mouse clicks for clean outlines.' },
    { id: 'use-debounce', name: 'useDebounce', category: 'State & Interaction', desc: 'Debounce rapid value changes such as search keystrokes.' },
    { id: 'use-throttle', name: 'useThrottle', category: 'State & Interaction', desc: 'Throttle high-frequency updates such as scroll and pointer movement.' },
    { id: 'use-hover', name: 'useHover', category: 'State & Interaction', desc: 'Track pointer hover states with automatic event binding.' },

    { id: 'use-color-scheme', name: 'useColorScheme', category: 'Theme & Environment', desc: 'Manage light, dark, and system color mode preferences.' },
    { id: 'use-media-query', name: 'useMediaQuery', category: 'Theme & Environment', desc: 'Listen to CSS media queries dynamically with zero layout flicker.' },
    { id: 'use-reduced-motion', name: 'useReducedMotion', category: 'Theme & Environment', desc: 'Detect user preference for reduced motion to disable intense animations.' },
    { id: 'use-rtl', name: 'useRTL', category: 'Theme & Environment', desc: 'Detect or switch right-to-left document layout flow.' },
    { id: 'use-platform', name: 'usePlatform', category: 'Theme & Environment', desc: 'Detect client runtime platform (Web, iOS, Android, macOS, Windows).' },
    { id: 'use-breakpoint', name: 'useBreakpoint', category: 'Theme & Environment', desc: 'Access active responsive breakpoint token synchronized with token grid.' },

    { id: 'use-id', name: 'useId', category: 'Lifecycle & DOM', desc: 'Generate collision-free unique IDs for accessible ARIA labels.' },
    { id: 'use-event-listener', name: 'useEventListener', category: 'Lifecycle & DOM', desc: 'Declaratively bind event listeners to window or DOM elements.' },
    { id: 'use-intersection-observer', name: 'useIntersectionObserver', category: 'Lifecycle & DOM', desc: 'Observe DOM element visibility for lazy loading and scroll triggers.' },
    { id: 'use-element-size', name: 'useElementSize', category: 'Lifecycle & DOM', desc: 'Live bounding width and height measurements via ResizeObserver.' },
    { id: 'use-window-size', name: 'useWindowSize', category: 'Lifecycle & DOM', desc: 'Track window inner viewport dimensions with debounced resize.' },
    { id: 'use-scroll-lock', name: 'useScrollLock', category: 'Lifecycle & DOM', desc: 'Lock background body scrolling when modal or drawer is active.' },

    { id: 'use-toast', name: 'useToast', category: 'Utilities & Feedback', desc: 'Queue, trigger, and auto-dismiss floating notification messages.' },
    { id: 'use-clipboard', name: 'useClipboard', category: 'Utilities & Feedback', desc: 'Copy text to system clipboard with temporary success state.' },
    { id: 'use-local-storage', name: 'useLocalStorage', category: 'Utilities & Feedback', desc: 'Persist state values in browser localStorage with cross-tab sync.' },
    { id: 'use-previous', name: 'usePrevious', category: 'Utilities & Feedback', desc: 'Track and compare previous render cycle values.' },
    { id: 'use-async', name: 'useAsync', category: 'Utilities & Feedback', desc: 'Manage async promise execution, loading flags, and error states.' },
    { id: 'use-interval', name: 'useInterval', category: 'Utilities & Feedback', desc: 'Declarative setInterval lifecycle management with dynamic delay.' },
  ];

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Header Card */}
      <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
        <CardHeader>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <Badge variant="primary">Functional Primitives</Badge>
            <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>@spectra/primitives</span>
          </div>
          <CardTitle>Headless Hooks & State Machines</CardTitle>
          <CardDescription>
            Accessibility, keyboard navigation, and core state logic isolated from styling. These headless primitives power all Spectra UI components across Web (React) and Mobile Native (React Native).
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Hook Navigation Bar */}
      <div
        style={{
          display: 'flex',
          gap: 6,
          flexWrap: 'wrap',
          backgroundColor: 'var(--color-surface)',
          padding: 8,
          borderRadius: 8,
          border: '1px solid var(--color-border-default)',
        }}
      >
        {hooksList.map((h) => {
          const isActive = activeHook === h.id;
          return (
            <button
              key={h.id}
              onClick={() => {
                setActiveHook(h.id);
                navigate(`/hooks/${h.id}`);
              }}
              style={{
                padding: '7px 14px',
                borderRadius: 6,
                border: '1px solid',
                borderColor: isActive ? 'var(--color-action-primary)' : 'transparent',
                backgroundColor: isActive ? 'var(--color-surface-raised)' : 'transparent',
                color: isActive ? 'var(--color-action-primary)' : 'var(--color-text-primary)',
                fontWeight: isActive ? 700 : 500,
                fontSize: 13,
                fontFamily: 'monospace',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              {h.name}
            </button>
          );
        })}
      </div>

      {/* ============================================================== */}
      {/* HOOK 1: useDisclosure                                          */}
      {/* ============================================================== */}
      {activeHook === 'use-disclosure' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <Badge variant="primary">Overlay & State</Badge>
                <code style={{ fontSize: 13, color: 'var(--color-action-primary)' }}>useDisclosure(options)</code>
              </div>
              <CardTitle>useDisclosure</CardTitle>
              <CardDescription>
                Standard hook for components that toggle visibility (Dialog, Drawer, Tooltip, Dropdown, Accordion).
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {/* Interactive Playground */}
                <div
                  style={{
                    padding: 32,
                    borderRadius: 8,
                    backgroundColor: 'var(--color-surface-raised)',
                    border: '1px solid var(--color-border-default)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 20,
                  }}
                >
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <Button onClick={disclosure.onToggle} variant="primary">
                      Toggle: {disclosure.isOpen ? 'Opened' : 'Closed'}
                    </Button>
                    <Button onClick={disclosure.onOpen} variant="secondary">
                      Force Open
                    </Button>
                    <Button onClick={disclosure.onClose} variant="tertiary">
                      Force Close
                    </Button>
                  </div>

                  <div
                    style={{
                      width: '100%',
                      maxWidth: 440,
                      padding: 20,
                      borderRadius: 8,
                      backgroundColor: 'var(--color-surface)',
                      border: '1px solid var(--color-border-default)',
                      textAlign: 'center',
                      transition: 'all 0.2s ease',
                      opacity: disclosure.isOpen ? 1 : 0.4,
                      boxShadow: disclosure.isOpen ? '0 4px 16px rgba(0,0,0,0.1)' : 'none',
                    }}
                  >
                    <div style={{ fontWeight: 600, fontSize: 15 }}>
                      Current State: <code style={{ color: 'var(--color-action-primary)' }}>{disclosure.isOpen ? 'isOpen: true' : 'isOpen: false'}</code>
                    </div>
                    <p style={{ margin: '8px 0 0', fontSize: 13, color: 'var(--color-text-secondary)' }}>
                      {disclosure.isOpen ? 'Modal panel is visible with full accessibility aria-expanded="true".' : 'Panel is closed.'}
                    </p>
                  </div>
                </div>

                {/* Code Recipe */}
                <div style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 16, borderRadius: 6, border: '1px solid var(--color-border-subtle)' }}>
                  <pre style={{ margin: 0, fontSize: 12, fontFamily: 'monospace', overflowX: 'auto', color: 'var(--color-text-primary)' }}>
{`import { useDisclosure } from '@spectra/primitives';

export function ModalExample() {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure({ defaultIsOpen: false });

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Dialog isOpen={isOpen} onClose={onClose}>
        <DialogTitle>Profile Settings</DialogTitle>
        <DialogContent>Manage your account preferences.</DialogContent>
      </Dialog>
    </>
  );
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ============================================================== */}
      {/* HOOK 2: useControllableState                                    */}
      {/* ============================================================== */}
      {activeHook === 'use-controllable-state' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <Badge variant="primary">Forms & Input</Badge>
                <code style={{ fontSize: 13, color: 'var(--color-action-primary)' }}>useControllableState(options)</code>
              </div>
              <CardTitle>useControllableState</CardTitle>
              <CardDescription>
                Enables components to be used as both controlled (value passed from parent) and uncontrolled (internal state fallback).
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div
                  style={{
                    padding: 24,
                    borderRadius: 8,
                    backgroundColor: 'var(--color-surface-raised)',
                    border: '1px solid var(--color-border-default)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: 14, fontWeight: 600 }}>Mode:</span>
                    <Button
                      size="sm"
                      variant={isControlled ? 'primary' : 'secondary'}
                      onClick={() => setIsControlled(!isControlled)}
                    >
                      {isControlled ? 'Controlled Mode (Active)' : 'Uncontrolled Mode (Active)'}
                    </Button>
                  </div>

                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <input
                      type="text"
                      value={stateValue}
                      onChange={(e) => {
                        if (isControlled) {
                          setControlledVal(e.target.value);
                        }
                        setStateValue(e.target.value);
                      }}
                      style={{
                        flex: 1,
                        padding: '10px 14px',
                        borderRadius: 6,
                        border: '1px solid var(--color-border-default)',
                        backgroundColor: 'var(--color-surface)',
                        color: 'var(--color-text-primary)',
                        fontSize: 14,
                      }}
                    />
                    <Button variant="secondary" onClick={() => setStateValue('Reset Value')}>
                      Reset
                    </Button>
                  </div>

                  <div style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
                    Current Resolved State Value: <strong style={{ color: 'var(--color-action-primary)' }}>{stateValue}</strong>
                  </div>
                </div>

                <div style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 16, borderRadius: 6, border: '1px solid var(--color-border-subtle)' }}>
                  <pre style={{ margin: 0, fontSize: 12, fontFamily: 'monospace', overflowX: 'auto', color: 'var(--color-text-primary)' }}>
{`import { useControllableState } from '@spectra/primitives';

export function CustomInput({ value, defaultValue, onChange }) {
  const [val, setVal] = useControllableState({
    value,
    defaultValue: defaultValue || '',
    onChange,
  });

  return <input value={val} onChange={(e) => setVal(e.target.value)} />;
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ============================================================== */}
      {/* HOOK 3: useOutsideClick                                        */}
      {/* ============================================================== */}
      {activeHook === 'use-outside-click' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <Badge variant="primary">DOM Events</Badge>
                <code style={{ fontSize: 13, color: 'var(--color-action-primary)' }}>useOutsideClick(ref, handler)</code>
              </div>
              <CardTitle>useOutsideClick</CardTitle>
              <CardDescription>
                Dismisses floating dropdown menus, context popovers, and drawers when the user taps or clicks anywhere outside the element.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div
                  style={{
                    padding: 40,
                    borderRadius: 8,
                    backgroundColor: 'var(--color-surface-raised)',
                    border: '1px solid var(--color-border-default)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 16,
                  }}
                >
                  <Button variant="primary" onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                    {isPopoverOpen ? 'Close Menu' : 'Open Dropdown Menu'}
                  </Button>

                  {isPopoverOpen && (
                    <div
                      ref={popoverRef}
                      style={{
                        padding: 20,
                        borderRadius: 8,
                        backgroundColor: 'var(--color-surface)',
                        border: '1px solid var(--color-border-default)',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                        textAlign: 'center',
                        maxWidth: 320,
                      }}
                    >
                      <h4 style={{ margin: '0 0 8px 0', fontSize: 15, color: 'var(--color-text-primary)' }}>
                        Active Popover Menu
                      </h4>
                      <p style={{ margin: '0 0 12px 0', fontSize: 13, color: 'var(--color-text-secondary)' }}>
                        Click anywhere outside this box to automatically dismiss it!
                      </p>
                      <Badge variant="success">Listening to Outside Clicks</Badge>
                    </div>
                  )}
                </div>

                <div style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 16, borderRadius: 6, border: '1px solid var(--color-border-subtle)' }}>
                  <pre style={{ margin: 0, fontSize: 12, fontFamily: 'monospace', overflowX: 'auto', color: 'var(--color-text-primary)' }}>
{`import { useOutsideClick } from '@spectra/primitives';

export function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useOutsideClick(menuRef, () => setIsOpen(false), isOpen);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Menu</button>
      {isOpen && (
        <div ref={menuRef} className="dropdown-panel">
          Menu Content
        </div>
      )}
    </div>
  );
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ============================================================== */}
      {/* HOOK 4: useId                                                  */}
      {/* ============================================================== */}
      {activeHook === 'use-id' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <Badge variant="primary">Accessibility (ARIA)</Badge>
                <code style={{ fontSize: 13, color: 'var(--color-action-primary)' }}>useId(prefix)</code>
              </div>
              <CardTitle>useId</CardTitle>
              <CardDescription>
                Generates SSR-safe, deterministic, collision-free unique IDs for binding labels to form inputs and ARIA descriptions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div
                  style={{
                    padding: 24,
                    borderRadius: 8,
                    backgroundColor: 'var(--color-surface-raised)',
                    border: '1px solid var(--color-border-default)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label htmlFor={sampleId1} style={{ fontSize: 13, fontWeight: 600 }}>
                      Field 1 Label (bound via htmlFor="{sampleId1}"):
                    </label>
                    <input
                      id={sampleId1}
                      type="text"
                      placeholder="Input field 1"
                      style={{
                        padding: '10px 14px',
                        borderRadius: 6,
                        border: '1px solid var(--color-border-default)',
                        backgroundColor: 'var(--color-surface)',
                        color: 'var(--color-text-primary)',
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label htmlFor={sampleId2} style={{ fontSize: 13, fontWeight: 600 }}>
                      Field 2 Label (bound via htmlFor="{sampleId2}"):
                    </label>
                    <input
                      id={sampleId2}
                      type="text"
                      placeholder="Input field 2"
                      style={{
                        padding: '10px 14px',
                        borderRadius: 6,
                        border: '1px solid var(--color-border-default)',
                        backgroundColor: 'var(--color-surface)',
                        color: 'var(--color-text-primary)',
                      }}
                    />
                  </div>
                </div>

                <div style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 16, borderRadius: 6, border: '1px solid var(--color-border-subtle)' }}>
                  <pre style={{ margin: 0, fontSize: 12, fontFamily: 'monospace', overflowX: 'auto', color: 'var(--color-text-primary)' }}>
{`import { useId } from '@spectra/primitives';

export function FormField({ label }) {
  const id = useId('spectra-field');

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} />
    </div>
  );
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ============================================================== */}
      {/* HOOK 5: useColorScheme                                         */}
      {/* ============================================================== */}
      {activeHook === 'use-color-scheme' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <Badge variant="primary">Theme Management</Badge>
                <code style={{ fontSize: 13, color: 'var(--color-action-primary)' }}>useColorScheme()</code>
              </div>
              <CardTitle>useColorScheme</CardTitle>
              <CardDescription>
                Inspects and toggles the active color scheme between light and dark modes with zero flash of unstyled content.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div
                  style={{
                    padding: 24,
                    borderRadius: 8,
                    backgroundColor: 'var(--color-surface-raised)',
                    border: '1px solid var(--color-border-default)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 16,
                  }}
                >
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)' }}>
                      Current Color Scheme: <Badge variant="primary">{colorScheme}</Badge>
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginTop: 4 }}>
                      isDark: <code>{isDark ? 'true' : 'false'}</code>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: 10 }}>
                    <Button
                      variant={colorScheme === 'light' ? 'primary' : 'secondary'}
                      onClick={() => setColorScheme('light')}
                    >
                      Light Mode
                    </Button>
                    <Button
                      variant={colorScheme === 'dark' ? 'primary' : 'secondary'}
                      onClick={() => setColorScheme('dark')}
                    >
                      Dark Mode
                    </Button>
                  </div>
                </div>

                <div style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 16, borderRadius: 6, border: '1px solid var(--color-border-subtle)' }}>
                  <pre style={{ margin: 0, fontSize: 12, fontFamily: 'monospace', overflowX: 'auto', color: 'var(--color-text-primary)' }}>
{`import { useColorScheme } from '@spectra/primitives';

export function ThemeToggle() {
  const { colorScheme, setColorScheme, isDark } = useColorScheme();

  return (
    <button onClick={() => setColorScheme(isDark ? 'light' : 'dark')}>
      Current Theme: {colorScheme}
    </button>
  );
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ============================================================== */}
      {/* HOOK 6: useMediaQuery                                          */}
      {/* ============================================================== */}
      {activeHook === 'use-media-query' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <Badge variant="primary">Responsive Layout</Badge>
                <code style={{ fontSize: 13, color: 'var(--color-action-primary)' }}>useMediaQuery(query)</code>
              </div>
              <CardTitle>useMediaQuery</CardTitle>
              <CardDescription>
                Subscribes to window media queries and returns boolean matches in real-time as the browser window resizes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div
                  style={{
                    padding: 24,
                    borderRadius: 8,
                    backgroundColor: 'var(--color-surface-raised)',
                    border: '1px solid var(--color-border-default)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: 16,
                  }}
                >
                  <div style={{ padding: 16, borderRadius: 6, backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border-subtle)' }}>
                    <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Mobile (&lt; 640px)</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 18, fontWeight: 700, color: isMobile ? 'var(--color-feedback-success)' : 'var(--color-text-muted)' }}>
                      {isMobile ? <CheckIcon size={18} /> : <CloseIcon size={18} />}
                      <span>{isMobile ? 'Matched' : 'Inactive'}</span>
                    </div>
                  </div>

                  <div style={{ padding: 16, borderRadius: 6, backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border-subtle)' }}>
                    <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Tablet (641px - 1024px)</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 18, fontWeight: 700, color: isTablet ? 'var(--color-feedback-success)' : 'var(--color-text-muted)' }}>
                      {isTablet ? <CheckIcon size={18} /> : <CloseIcon size={18} />}
                      <span>{isTablet ? 'Matched' : 'Inactive'}</span>
                    </div>
                  </div>

                  <div style={{ padding: 16, borderRadius: 6, backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border-subtle)' }}>
                    <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Desktop (&gt; 1024px)</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 18, fontWeight: 700, color: isDesktop ? 'var(--color-feedback-success)' : 'var(--color-text-muted)' }}>
                      {isDesktop ? <CheckIcon size={18} /> : <CloseIcon size={18} />}
                      <span>{isDesktop ? 'Matched' : 'Inactive'}</span>
                    </div>
                  </div>
                </div>

                <div style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 16, borderRadius: 6, border: '1px solid var(--color-border-subtle)' }}>
                  <pre style={{ margin: 0, fontSize: 12, fontFamily: 'monospace', overflowX: 'auto', color: 'var(--color-text-primary)' }}>
{`import { useMediaQuery } from '@spectra/primitives';

export function ResponsiveHeader() {
  const isMobile = useMediaQuery('(max-width: 640px)');

  return isMobile ? <MobileNavDrawer /> : <DesktopNavbar />;
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ============================================================== */}
      {/* HOOK 7: useFocusRing                                           */}
      {/* ============================================================== */}
      {activeHook === 'use-focus-ring' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <Badge variant="primary">Accessibility (Focus)</Badge>
                <code style={{ fontSize: 13, color: 'var(--color-action-primary)' }}>useFocusRing()</code>
              </div>
              <CardTitle>useFocusRing</CardTitle>
              <CardDescription>
                Detects whether focus was initiated via keyboard navigation (Tab key) or mouse click, ensuring high-visibility outline rings appear only when needed.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div
                  style={{
                    padding: 36,
                    borderRadius: 8,
                    backgroundColor: 'var(--color-surface-raised)',
                    border: '1px solid var(--color-border-default)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 16,
                  }}
                >
                  <button
                    onFocus={() => {
                      setIsFocused(true);
                      setIsFocusVisible(true);
                    }}
                    onBlur={() => {
                      setIsFocused(false);
                      setIsFocusVisible(false);
                    }}
                    style={{
                      padding: '12px 24px',
                      borderRadius: 6,
                      border: '1px solid var(--color-action-primary)',
                      backgroundColor: 'var(--color-surface)',
                      color: 'var(--color-text-primary)',
                      fontSize: 14,
                      fontWeight: 600,
                      cursor: 'pointer',
                      outline: isFocusVisible ? '3px solid var(--color-action-primary)' : 'none',
                      outlineOffset: 2,
                    }}
                  >
                    Click or Tab Here to Test Focus Ring
                  </button>

                  <div style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
                    Focus Visible: <code>{isFocusVisible ? 'true (Dual focus ring rendered)' : 'false'}</code>
                  </div>
                </div>

                <div style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 16, borderRadius: 6, border: '1px solid var(--color-border-subtle)' }}>
                  <pre style={{ margin: 0, fontSize: 12, fontFamily: 'monospace', overflowX: 'auto', color: 'var(--color-text-primary)' }}>
{`import { useFocusRing } from '@spectra/primitives';

export function CustomButton(props) {
  const { isFocused, isFocusVisible, focusProps } = useFocusRing();

  return (
    <button
      {...props}
      {...focusProps}
      style={{ outline: isFocusVisible ? '2px solid blue' : 'none' }}
    />
  );
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ============================================================== */}
      {/* HOOK 8: useToast                                               */}
      {/* ============================================================== */}
      {activeHook === 'use-toast' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <Badge variant="primary">Feedback & Alerts</Badge>
                <code style={{ fontSize: 13, color: 'var(--color-action-primary)' }}>useToast()</code>
              </div>
              <CardTitle>useToast</CardTitle>
              <CardDescription>
                Imperative notification dispatcher for floating system toasts with auto-dismiss and stack management.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div
                  style={{
                    padding: 24,
                    borderRadius: 8,
                    backgroundColor: 'var(--color-surface-raised)',
                    border: '1px solid var(--color-border-default)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                  }}
                >
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <Button onClick={() => showToast('Changes saved successfully!', 'success')} variant="primary">
                      Trigger Success Toast
                    </Button>
                    <Button onClick={() => showToast('New system update available', 'info')} variant="secondary">
                      Trigger Info Toast
                    </Button>
                    <Button onClick={() => showToast('Failed to connect to database', 'error')} variant="danger">
                      Trigger Error Toast
                    </Button>
                  </div>

                  {/* Toast stack visualizer */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minHeight: 80 }}>
                    {toastList.length === 0 && (
                      <div style={{ fontSize: 13, color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                        No active toasts in queue. Click a button above!
                      </div>
                    )}
                    {toastList.map((t) => (
                      <div
                        key={t.id}
                        style={{
                          padding: '10px 16px',
                          borderRadius: 6,
                          backgroundColor: 'var(--color-surface)',
                          border: '1px solid var(--color-border-default)',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 10,
                          fontSize: 13,
                          fontWeight: 600,
                        }}
                      >
                        {t.type === 'success' && <CheckIcon size={16} color="var(--color-feedback-success)" />}
                        {t.type === 'info' && <InfoIcon size={16} color="var(--color-feedback-info)" />}
                        {t.type === 'error' && <AlertCircleIcon size={16} color="var(--color-feedback-error)" />}
                        <span>{t.msg}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 16, borderRadius: 6, border: '1px solid var(--color-border-subtle)' }}>
                  <pre style={{ margin: 0, fontSize: 12, fontFamily: 'monospace', overflowX: 'auto', color: 'var(--color-text-primary)' }}>
{`import { useToast } from '@spectra/react';

export function SaveButton() {
  const { toast } = useToast();

  const handleSave = async () => {
    await saveData();
    toast('Changes saved successfully!', { type: 'success' });
  };

  return <Button onClick={handleSave}>Save</Button>;
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ============================================================== */}
      {/* HOOK 9: useReducedMotion                                       */}
      {/* ============================================================== */}
      {activeHook === 'use-reduced-motion' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <Badge variant="primary">Accessibility (WCAG 2.3.3)</Badge>
                <code style={{ fontSize: 13, color: 'var(--color-action-primary)' }}>useReducedMotion()</code>
              </div>
              <CardTitle>useReducedMotion</CardTitle>
              <CardDescription>
                Detects whether the operating system has enabled reduced motion accessibility options, allowing animations to gracefully disable.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div
                  style={{
                    padding: 24,
                    borderRadius: 8,
                    backgroundColor: 'var(--color-surface-raised)',
                    border: '1px solid var(--color-border-default)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700 }}>
                      System Reduced Motion Preference:
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginTop: 4 }}>
                      Value: <code>{prefersReducedMotion ? 'true (Reduced Motion active)' : 'false (Full dynamic motion allowed)'}</code>
                    </div>
                  </div>
                  <Badge variant={prefersReducedMotion ? 'warning' : 'success'}>
                    {prefersReducedMotion ? 'Motion Reduced' : 'Motion Allowed'}
                  </Badge>
                </div>

                <div style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 16, borderRadius: 6, border: '1px solid var(--color-border-subtle)' }}>
                  <pre style={{ margin: 0, fontSize: 12, fontFamily: 'monospace', overflowX: 'auto', color: 'var(--color-text-primary)' }}>
{`import { useReducedMotion } from '@spectra/primitives';

export function AnimatedHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div style={{ transition: shouldReduceMotion ? 'none' : 'transform 0.4s ease' }}>
      Content
    </div>
  );
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ============================================================== */}
      {/* HOOK 10: useRTL                                                */}
      {/* ============================================================== */}
      {activeHook === 'use-rtl' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <Badge variant="primary">Internationalization</Badge>
                <code style={{ fontSize: 13, color: 'var(--color-action-primary)' }}>useRTL()</code>
              </div>
              <CardTitle>useRTL</CardTitle>
              <CardDescription>
                Detects whether the document or parent element is set to Right-To-Left direction for Arabic, Hebrew, and Persian script localization.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div
                  style={{
                    padding: 24,
                    borderRadius: 8,
                    backgroundColor: 'var(--color-surface-raised)',
                    border: '1px solid var(--color-border-default)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 14, fontWeight: 600 }}>Simulation:</span>
                    <Button size="sm" variant="secondary" onClick={() => setRtlOverride(!rtlOverride)}>
                      Toggle Direction: {rtlOverride ? 'RTL (Arabic)' : 'LTR (English)'}
                    </Button>
                  </div>

                  <div
                    dir={rtlOverride ? 'rtl' : 'ltr'}
                    style={{
                      padding: 20,
                      borderRadius: 6,
                      backgroundColor: 'var(--color-surface)',
                      border: '1px solid var(--color-border-default)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                    }}
                  >
                    <div style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: 'var(--color-action-primary)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      1
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14 }}>
                        {rtlOverride ? 'مرحباً بك في نظام سبكترا' : 'Welcome to Spectra UI Design System'}
                      </div>
                      <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
                        {rtlOverride ? 'واجهة مستخدم متقدمة تدعم جميع اللغات' : 'Advanced cross-platform UI with full bidirectional layout.'}
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 16, borderRadius: 6, border: '1px solid var(--color-border-subtle)' }}>
                  <pre style={{ margin: 0, fontSize: 12, fontFamily: 'monospace', overflowX: 'auto', color: 'var(--color-text-primary)' }}>
{`import { useRTL } from '@spectra/primitives';

export function Breadcrumbs() {
  const isRTL = useRTL();

  return (
    <div>
      <span>Home</span>
      <span>{isRTL ? '◀' : '▶'}</span>
      <span>Dashboard</span>
    </div>
  );
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ============================================================== */}
      {/* HOOK 11: useDebounce                                           */}
      {/* ============================================================== */}
      {activeHook === 'use-debounce' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <Badge variant="primary">Performance & Input</Badge>
                <code style={{ fontSize: 13, color: 'var(--color-action-primary)' }}>useDebounce(value, delay)</code>
              </div>
              <CardTitle>useDebounce</CardTitle>
              <CardDescription>
                Delays updating state until a specified pause duration (400ms) has elapsed without keystrokes. Essential for search queries and autosave.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ padding: 24, borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)', display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxWidth: 440 }}>
                    <label style={{ fontSize: 13, fontWeight: 600 }}>Type into rapid input:</label>
                    <input
                      type="text"
                      value={debounceInput}
                      onChange={(e) => setDebounceInput(e.target.value)}
                      style={{ padding: '10px 14px', borderRadius: 6, border: '1px solid var(--color-border-default)', backgroundColor: 'var(--color-surface)', color: 'var(--color-text-primary)' }}
                    />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
                    <div style={{ padding: 14, borderRadius: 6, backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border-subtle)' }}>
                      <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Raw Value (Instant):</div>
                      <div style={{ fontFamily: 'monospace', fontWeight: 600, marginTop: 4, color: 'var(--color-text-primary)' }}>{debounceInput || '<empty>'}</div>
                    </div>
                    <div style={{ padding: 14, borderRadius: 6, backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border-subtle)' }}>
                      <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Debounced (400ms delay):</div>
                      <div style={{ fontFamily: 'monospace', fontWeight: 600, marginTop: 4, color: 'var(--color-action-primary)' }}>{debouncedValue || '<empty>'}</div>
                    </div>
                  </div>
                </div>
                <div style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 16, borderRadius: 6, border: '1px solid var(--color-border-subtle)' }}>
                  <pre style={{ margin: 0, fontSize: 12, fontFamily: 'monospace', overflowX: 'auto', color: 'var(--color-text-primary)' }}>
{`import { useDebounce } from '@spectra/primitives';

export function SearchBox() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 400);

  useEffect(() => {
    if (debouncedQuery) fetchSearchResults(debouncedQuery);
  }, [debouncedQuery]);

  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ============================================================== */}
      {/* HOOK 12: useThrottle                                           */}
      {/* ============================================================== */}
      {activeHook === 'use-throttle' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <Badge variant="primary">Performance & Rate Limiting</Badge>
                <code style={{ fontSize: 13, color: 'var(--color-action-primary)' }}>useThrottle(value, interval)</code>
              </div>
              <CardTitle>useThrottle</CardTitle>
              <CardDescription>
                Limits value emission frequency to at most once per interval (500ms). Perfect for high-frequency pointer coordinates and scroll listeners.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ padding: 24, borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)', display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <Button variant="primary" onClick={() => setThrottleCount((c) => c + 1)}>
                      Click Rapidly (Triggers Raw Events)
                    </Button>
                    <Button variant="secondary" onClick={() => setThrottleCount(0)}>Reset</Button>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
                    <div style={{ padding: 14, borderRadius: 6, backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border-subtle)' }}>
                      <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Raw Event Trigger Count:</div>
                      <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-text-primary)' }}>{throttleCount}</div>
                    </div>
                    <div style={{ padding: 14, borderRadius: 6, backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border-subtle)' }}>
                      <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Throttled Execution Count:</div>
                      <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-action-primary)' }}>{throttledCount}</div>
                    </div>
                  </div>
                </div>
                <div style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 16, borderRadius: 6, border: '1px solid var(--color-border-subtle)' }}>
                  <pre style={{ margin: 0, fontSize: 12, fontFamily: 'monospace', overflowX: 'auto', color: 'var(--color-text-primary)' }}>
{`import { useThrottle } from '@spectra/primitives';

export function ScrollTracker() {
  const [scrollY, setScrollY] = useState(0);
  const throttledScrollY = useThrottle(scrollY, 200);

  return <div>Throttled position: {throttledScrollY}px</div>;
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ============================================================== */}
      {/* HOOK 13: useHover                                              */}
      {/* ============================================================== */}
      {activeHook === 'use-hover' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <Badge variant="primary">Interaction & DOM</Badge>
                <code style={{ fontSize: 13, color: 'var(--color-action-primary)' }}>useHover()</code>
              </div>
              <CardTitle>useHover</CardTitle>
              <CardDescription>
                Tracks pointer hover events on an attached element with automatic event listener cleanup.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ padding: 32, borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)', display: 'flex', justifyContent: 'center' }}>
                  <div
                    ref={hoverRef}
                    style={{
                      padding: '36px 48px',
                      borderRadius: 12,
                      backgroundColor: isHovered ? 'var(--color-action-primary)' : 'var(--color-surface)',
                      color: isHovered ? '#ffffff' : 'var(--color-text-primary)',
                      border: '2px dashed',
                      borderColor: isHovered ? '#ffffff' : 'var(--color-border-default)',
                      boxShadow: isHovered ? '0 12px 32px rgba(37, 99, 235, 0.3)' : 'none',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontSize: 16, fontWeight: 700 }}>{isHovered ? 'Pointer Inside Element!' : 'Hover Pointer Over This Box'}</div>
                    <div style={{ fontSize: 12, opacity: 0.8, marginTop: 4 }}>
                      Current status: <code>{isHovered ? 'isHovered: true' : 'isHovered: false'}</code>
                    </div>
                  </div>
                </div>
                <div style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 16, borderRadius: 6, border: '1px solid var(--color-border-subtle)' }}>
                  <pre style={{ margin: 0, fontSize: 12, fontFamily: 'monospace', overflowX: 'auto', color: 'var(--color-text-primary)' }}>
{`import { useHover } from '@spectra/primitives';

export function HoverCard() {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  return (
    <div ref={hoverRef} className={isHovered ? 'active-hover' : ''}>
      Hover Target
    </div>
  );
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ============================================================== */}
      {/* HOOK 14: usePlatform                                           */}
      {/* ============================================================== */}
      {activeHook === 'use-platform' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <Badge variant="primary">Environment Detection</Badge>
                <code style={{ fontSize: 13, color: 'var(--color-action-primary)' }}>usePlatform()</code>
              </div>
              <CardTitle>usePlatform</CardTitle>
              <CardDescription>
                Identifies current client runtime operating system and capability matrix (mobile vs desktop, touch support).
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ padding: 24, borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                  <div style={{ padding: 14, borderRadius: 6, backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border-subtle)' }}>
                    <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Detected OS Platform:</div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-action-primary)', marginTop: 4 }}>{platformInfo.platform.toUpperCase()}</div>
                  </div>
                  <div style={{ padding: 14, borderRadius: 6, backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border-subtle)' }}>
                    <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Device Form Factor:</div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--color-text-primary)', marginTop: 4 }}>
                      {platformInfo.isMobile ? 'Mobile Device' : 'Desktop / Laptop'}
                    </div>
                  </div>
                  <div style={{ padding: 14, borderRadius: 6, backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border-subtle)' }}>
                    <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Touch Input Support:</div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--color-text-primary)', marginTop: 4 }}>
                      {platformInfo.isTouch ? 'Touch Screen Active' : 'Mouse / Trackpad'}
                    </div>
                  </div>
                </div>
                <div style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 16, borderRadius: 6, border: '1px solid var(--color-border-subtle)' }}>
                  <pre style={{ margin: 0, fontSize: 12, fontFamily: 'monospace', overflowX: 'auto', color: 'var(--color-text-primary)' }}>
{`import { usePlatform } from '@spectra/primitives';

export function AdaptiveWidget() {
  const { platform, isMobile } = usePlatform();

  return <div>Runtime: {platform} (Mobile: {String(isMobile)})</div>;
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ============================================================== */}
      {/* HOOK 15: useBreakpoint                                         */}
      {/* ============================================================== */}
      {activeHook === 'use-breakpoint' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <Badge variant="primary">Responsive Design</Badge>
                <code style={{ fontSize: 13, color: 'var(--color-action-primary)' }}>useBreakpoint()</code>
              </div>
              <CardTitle>useBreakpoint</CardTitle>
              <CardDescription>
                Synchronized with Spectra UI 4px token scale. Reactive breakpoint updates without layout jank.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ padding: 24, borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)', display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                    <div>
                      <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>Current Breakpoint:</span>
                      <div style={{ fontSize: 24, fontWeight: 700, color: 'var(--color-action-primary)' }}>{breakpointInfo.breakpoint.toUpperCase()}</div>
                    </div>
                    <div>
                      <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>Live Window Width:</span>
                      <div style={{ fontSize: 20, fontWeight: 600, color: 'var(--color-text-primary)' }}>{breakpointInfo.width}px</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((bp) => (
                      <span
                        key={bp}
                        style={{
                          padding: '6px 14px',
                          borderRadius: 6,
                          fontSize: 12,
                          fontWeight: 600,
                          backgroundColor: breakpointInfo.breakpoint === bp ? 'var(--color-action-primary)' : 'var(--color-surface)',
                          color: breakpointInfo.breakpoint === bp ? '#ffffff' : 'var(--color-text-secondary)',
                          border: '1px solid var(--color-border-subtle)',
                        }}
                      >
                        {bp.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 16, borderRadius: 6, border: '1px solid var(--color-border-subtle)' }}>
                  <pre style={{ margin: 0, fontSize: 12, fontFamily: 'monospace', overflowX: 'auto', color: 'var(--color-text-primary)' }}>
{`import { useBreakpoint } from '@spectra/primitives';

export function ResponsiveGrid() {
  const { breakpoint, isMobile } = useBreakpoint();

  return <div>Columns: {isMobile ? 1 : 3} (Breakpoint: {breakpoint})</div>;
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ============================================================== */}
      {/* HOOK 16: useEventListener                                      */}
      {/* ============================================================== */}
      {activeHook === 'use-event-listener' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <Badge variant="primary">DOM Lifecycle</Badge>
                <code style={{ fontSize: 13, color: 'var(--color-action-primary)' }}>useEventListener(event, handler)</code>
              </div>
              <CardTitle>useEventListener</CardTitle>
              <CardDescription>
                Declaratively attaches events to window or targets with ref-stabilized callbacks and automatic cleanup on unmount.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ padding: 24, borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)' }}>
                  <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>Press any keyboard key to test live window event binding:</span>
                  <div style={{ marginTop: 8, padding: 16, borderRadius: 6, backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border-subtle)', fontFamily: 'monospace', fontSize: 16, fontWeight: 700, color: 'var(--color-action-primary)' }}>
                    {lastKey}
                  </div>
                </div>
                <div style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 16, borderRadius: 6, border: '1px solid var(--color-border-subtle)' }}>
                  <pre style={{ margin: 0, fontSize: 12, fontFamily: 'monospace', overflowX: 'auto', color: 'var(--color-text-primary)' }}>
{`import { useEventListener } from '@spectra/primitives';

export function EscapeListener({ onEscape }) {
  useEventListener('keydown', (e) => {
    if (e.key === 'Escape') onEscape();
  });

  return <div>Press ESC to close</div>;
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ============================================================== */}
      {/* HOOK 17: useIntersectionObserver                               */}
      {/* ============================================================== */}
      {activeHook === 'use-intersection-observer' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <Badge variant="primary">Visibility & Sensors</Badge>
                <code style={{ fontSize: 13, color: 'var(--color-action-primary)' }}>useIntersectionObserver(ref, options)</code>
              </div>
              <CardTitle>useIntersectionObserver</CardTitle>
              <CardDescription>
                Detects whether a DOM target intersects the viewport. Perfect for lazy image loading and enter-screen triggers.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ padding: 20, borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)' }}>
                  <div style={{ height: 160, overflowY: 'auto', padding: 14, backgroundColor: 'var(--color-surface)', borderRadius: 6, border: '1px solid var(--color-border-subtle)' }}>
                    <div style={{ height: 120, padding: 10, color: 'var(--color-text-muted)', fontSize: 13 }}>
                      Scroll down inside this box to bring the target element into view...
                    </div>
                    <div
                      ref={intersectionTargetRef}
                      style={{
                        padding: 18,
                        borderRadius: 6,
                        backgroundColor: intersectionEntry?.isIntersecting ? 'var(--color-feedback-success)' : 'var(--color-surface-elevated)',
                        color: intersectionEntry?.isIntersecting ? '#ffffff' : 'var(--color-text-secondary)',
                        textAlign: 'center',
                        fontWeight: 600,
                        transition: 'background-color 0.2s ease',
                      }}
                    >
                      {intersectionEntry?.isIntersecting ? 'Target Intersected Viewport!' : 'Target Out of View'}
                    </div>
                    <div style={{ height: 120 }} />
                  </div>
                </div>
                <div style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 16, borderRadius: 6, border: '1px solid var(--color-border-subtle)' }}>
                  <pre style={{ margin: 0, fontSize: 12, fontFamily: 'monospace', overflowX: 'auto', color: 'var(--color-text-primary)' }}>
{`import { useIntersectionObserver } from '@spectra/primitives';

export function LazyHero() {
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.5 });
  const isVisible = !!entry?.isIntersecting;

  return <div ref={ref}>{isVisible ? 'In View' : 'Hidden'}</div>;
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ============================================================== */}
      {/* HOOK 18: useElementSize                                        */}
      {/* ============================================================== */}
      {activeHook === 'use-element-size' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <Badge variant="primary">Measurement</Badge>
                <code style={{ fontSize: 13, color: 'var(--color-action-primary)' }}>useElementSize()</code>
              </div>
              <CardTitle>useElementSize</CardTitle>
              <CardDescription>
                Continuously measures the rendered width and height of a DOM element using ResizeObserver.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ padding: 24, borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)', display: 'flex', justifyContent: 'center' }}>
                  <div
                    ref={elementSizeRef}
                    style={{
                      width: '100%',
                      maxWidth: 420,
                      padding: 24,
                      borderRadius: 8,
                      backgroundColor: 'var(--color-surface)',
                      border: '1px solid var(--color-border-default)',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>Element Dimensions:</div>
                    <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-action-primary)', marginTop: 6 }}>
                      {elementSize.width}px × {elementSize.height}px
                    </div>
                  </div>
                </div>
                <div style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 16, borderRadius: 6, border: '1px solid var(--color-border-subtle)' }}>
                  <pre style={{ margin: 0, fontSize: 12, fontFamily: 'monospace', overflowX: 'auto', color: 'var(--color-text-primary)' }}>
{`import { useElementSize } from '@spectra/primitives';

export function ChartContainer() {
  const [ref, { width, height }] = useElementSize();

  return <div ref={ref}>Canvas Size: {width}x{height}</div>;
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ============================================================== */}
      {/* HOOK 19: useWindowSize                                         */}
      {/* ============================================================== */}
      {activeHook === 'use-window-size' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <Badge variant="primary">Window & Viewport</Badge>
                <code style={{ fontSize: 13, color: 'var(--color-action-primary)' }}>useWindowSize()</code>
              </div>
              <CardTitle>useWindowSize</CardTitle>
              <CardDescription>
                Tracks window inner width and height dynamically with automatic listener lifecycle.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ padding: 24, borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
                  <div style={{ padding: 14, borderRadius: 6, backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border-subtle)' }}>
                    <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Window Inner Width:</div>
                    <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-action-primary)', marginTop: 4 }}>{windowSize.width}px</div>
                  </div>
                  <div style={{ padding: 14, borderRadius: 6, backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border-subtle)' }}>
                    <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Window Inner Height:</div>
                    <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-action-primary)', marginTop: 4 }}>{windowSize.height}px</div>
                  </div>
                </div>
                <div style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 16, borderRadius: 6, border: '1px solid var(--color-border-subtle)' }}>
                  <pre style={{ margin: 0, fontSize: 12, fontFamily: 'monospace', overflowX: 'auto', color: 'var(--color-text-primary)' }}>
{`import { useWindowSize } from '@spectra/primitives';

export function ViewportInfo() {
  const { width, height } = useWindowSize();

  return <div>Viewport: {width} x {height}</div>;
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ============================================================== */}
      {/* HOOK 20: useScrollLock                                         */}
      {/* ============================================================== */}
      {activeHook === 'use-scroll-lock' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <Badge variant="primary">Overlay & Scroll</Badge>
                <code style={{ fontSize: 13, color: 'var(--color-action-primary)' }}>useScrollLock(locked)</code>
              </div>
              <CardTitle>useScrollLock</CardTitle>
              <CardDescription>
                Locks body background scrolling while dialogs or drawer sheets are visible, avoiding page jumping.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ padding: 24, borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>Body Scroll State:</div>
                    <div style={{ fontSize: 13, color: isScrollLocked ? 'var(--color-feedback-danger)' : 'var(--color-feedback-success)', marginTop: 4 }}>
                      {isScrollLocked ? 'Scroll Locked (overflow: hidden)' : 'Scroll Unlocked (normal)'}
                    </div>
                  </div>
                  <Button variant={isScrollLocked ? 'danger' : 'primary'} onClick={() => setIsScrollLocked(!isScrollLocked)}>
                    {isScrollLocked ? 'Unlock Body Scroll' : 'Lock Body Scroll'}
                  </Button>
                </div>
                <div style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 16, borderRadius: 6, border: '1px solid var(--color-border-subtle)' }}>
                  <pre style={{ margin: 0, fontSize: 12, fontFamily: 'monospace', overflowX: 'auto', color: 'var(--color-text-primary)' }}>
{`import { useScrollLock } from '@spectra/primitives';

export function Modal({ isOpen }) {
  useScrollLock(isOpen);

  return isOpen ? <div className="modal">Content</div> : null;
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ============================================================== */}
      {/* HOOK 21: useClipboard                                          */}
      {/* ============================================================== */}
      {activeHook === 'use-clipboard' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <Badge variant="primary">Browser Utilities</Badge>
                <code style={{ fontSize: 13, color: 'var(--color-action-primary)' }}>useClipboard()</code>
              </div>
              <CardTitle>useClipboard</CardTitle>
              <CardDescription>
                Copies text to the system clipboard with automatic success state timeout and error handling.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ padding: 24, borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)', display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div style={{ display: 'flex', gap: 10, maxWidth: 440 }}>
                    <input
                      type="text"
                      value={clipboardText}
                      onChange={(e) => setClipboardText(e.target.value)}
                      style={{ flex: 1, padding: '10px 14px', borderRadius: 6, border: '1px solid var(--color-border-default)', backgroundColor: 'var(--color-surface)', color: 'var(--color-text-primary)' }}
                    />
                    <Button variant={clipboardCopied ? 'secondary' : 'primary'} onClick={() => runCopy(clipboardText)}>
                      {clipboardCopied ? 'Copied!' : 'Copy'}
                    </Button>
                  </div>
                  {clipboardCopied && (
                    <span style={{ fontSize: 12, color: 'var(--color-feedback-success)', fontWeight: 600 }}>
                      Copied to system clipboard!
                    </span>
                  )}
                </div>
                <div style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 16, borderRadius: 6, border: '1px solid var(--color-border-subtle)' }}>
                  <pre style={{ margin: 0, fontSize: 12, fontFamily: 'monospace', overflowX: 'auto', color: 'var(--color-text-primary)' }}>
{`import { useClipboard } from '@spectra/primitives';

export function ShareButton({ url }) {
  const { copy, hasCopied } = useClipboard({ timeout: 2000 });

  return (
    <Button onClick={() => copy(url)}>
      {hasCopied ? 'Copied!' : 'Copy Share Link'}
    </Button>
  );
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ============================================================== */}
      {/* HOOK 22: useLocalStorage                                       */}
      {/* ============================================================== */}
      {activeHook === 'use-local-storage' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <Badge variant="primary">Storage & Persistence</Badge>
                <code style={{ fontSize: 13, color: 'var(--color-action-primary)' }}>useLocalStorage(key, initialValue)</code>
              </div>
              <CardTitle>useLocalStorage</CardTitle>
              <CardDescription>
                Synchronizes state with browser localStorage. Survives page reloads and synchronizes in real-time across multiple tabs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ padding: 24, borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)', display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>Stored Value: <Badge variant="primary">{storageCounter}</Badge></div>
                    <Button size="sm" variant="primary" onClick={() => setStorageCounter((c) => c + 1)}>Increment</Button>
                    <Button size="sm" variant="secondary" onClick={() => setStorageCounter(1)}>Reset</Button>
                  </div>
                  <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
                    Reload the webpage or open another tab: this value is permanently stored in browser localStorage.
                  </span>
                </div>
                <div style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 16, borderRadius: 6, border: '1px solid var(--color-border-subtle)' }}>
                  <pre style={{ margin: 0, fontSize: 12, fontFamily: 'monospace', overflowX: 'auto', color: 'var(--color-text-primary)' }}>
{`import { useLocalStorage } from '@spectra/primitives';

export function Counter() {
  const [count, setCount] = useLocalStorage('app-count', 0);

  return <Button onClick={() => setCount((c) => c + 1)}>Count: {count}</Button>;
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ============================================================== */}
      {/* HOOK 23: usePrevious                                           */}
      {/* ============================================================== */}
      {activeHook === 'use-previous' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <Badge variant="primary">State History</Badge>
                <code style={{ fontSize: 13, color: 'var(--color-action-primary)' }}>usePrevious(value)</code>
              </div>
              <CardTitle>usePrevious</CardTitle>
              <CardDescription>
                Retains the value from the previous render cycle, allowing comparison between current and prior states.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ padding: 24, borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)', display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <Button variant="primary" onClick={() => setPreviousCounter((c) => c + 1)}>Increment Count</Button>
                    <Button variant="secondary" onClick={() => setPreviousCounter((c) => c - 1)}>Decrement</Button>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
                    <div style={{ padding: 14, borderRadius: 6, backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border-subtle)' }}>
                      <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Current Value:</div>
                      <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-action-primary)' }}>{previousCounter}</div>
                    </div>
                    <div style={{ padding: 14, borderRadius: 6, backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border-subtle)' }}>
                      <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Previous Value (Last Render):</div>
                      <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-text-primary)' }}>{previousValue ?? 'undefined'}</div>
                    </div>
                  </div>
                </div>
                <div style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 16, borderRadius: 6, border: '1px solid var(--color-border-subtle)' }}>
                  <pre style={{ margin: 0, fontSize: 12, fontFamily: 'monospace', overflowX: 'auto', color: 'var(--color-text-primary)' }}>
{`import { usePrevious } from '@spectra/primitives';

export function DeltaTracker({ value }) {
  const prevValue = usePrevious(value);

  return <div>Change: from {prevValue} to {value}</div>;
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ============================================================== */}
      {/* HOOK 24: useAsync                                              */}
      {/* ============================================================== */}
      {activeHook === 'use-async' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <Badge variant="primary">Async Lifecycle</Badge>
                <code style={{ fontSize: 13, color: 'var(--color-action-primary)' }}>useAsync(asyncFn)</code>
              </div>
              <CardTitle>useAsync</CardTitle>
              <CardDescription>
                Handles asynchronous promise lifecycles with loading spinners, resolved payload data, and retry on error.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ padding: 24, borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)', display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                    <Button variant="primary" isLoading={asyncLoading} onClick={() => fetchConfig()}>
                      Execute Simulated Network Call
                    </Button>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, cursor: 'pointer' }}>
                      <input type="checkbox" checked={simulateError} onChange={(e) => setSimulateError(e.target.checked)} />
                      <span>Simulate Error</span>
                    </label>
                  </div>
                  <div style={{ padding: 14, borderRadius: 6, backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border-subtle)' }}>
                    <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Status: <strong>{asyncStatus.toUpperCase()}</strong></div>
                    {asyncData && (
                      <pre style={{ margin: '8px 0 0', fontSize: 12, color: 'var(--color-feedback-success)' }}>
                        {JSON.stringify(asyncData, null, 2)}
                      </pre>
                    )}
                  </div>
                </div>
                <div style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 16, borderRadius: 6, border: '1px solid var(--color-border-subtle)' }}>
                  <pre style={{ margin: 0, fontSize: 12, fontFamily: 'monospace', overflowX: 'auto', color: 'var(--color-text-primary)' }}>
{`import { useAsync } from '@spectra/primitives';

export function DataLoader() {
  const { execute, status, value, error, isLoading } = useAsync(fetchData);

  return <Button isLoading={isLoading} onClick={execute}>Fetch</Button>;
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ============================================================== */}
      {/* HOOK 25: useInterval                                           */}
      {/* ============================================================== */}
      {activeHook === 'use-interval' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <Badge variant="primary">Timers & Lifecycle</Badge>
                <code style={{ fontSize: 13, color: 'var(--color-action-primary)' }}>useInterval(callback, delay)</code>
              </div>
              <CardTitle>useInterval</CardTitle>
              <CardDescription>
                Declarative wrapper around setInterval with dynamic delay adjustment and pause/resume capabilities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ padding: 24, borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)', display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                    <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-text-primary)' }}>
                      Interval Ticks: <span style={{ color: 'var(--color-action-primary)' }}>{intervalCount}</span>
                    </div>
                    <Button size="sm" variant={intervalDelay === null ? 'primary' : 'secondary'} onClick={() => setIntervalDelay(intervalDelay === null ? 1000 : null)}>
                      {intervalDelay === null ? 'Resume Interval' : 'Pause Interval'}
                    </Button>
                    <Button size="sm" variant="tertiary" onClick={() => setIntervalCount(0)}>Reset Counter</Button>
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
                    Current interval status: {intervalDelay === null ? 'Paused (delay: null)' : `Running (1 tick every ${intervalDelay}ms)`}
                  </div>
                </div>
                <div style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 16, borderRadius: 6, border: '1px solid var(--color-border-subtle)' }}>
                  <pre style={{ margin: 0, fontSize: 12, fontFamily: 'monospace', overflowX: 'auto', color: 'var(--color-text-primary)' }}>
{`import { useInterval } from '@spectra/primitives';

export function Ticker() {
  const [seconds, setSeconds] = useState(0);
  useInterval(() => setSeconds((s) => s + 1), 1000);

  return <div>Elapsed: {seconds}s</div>;
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Comprehensive Hook API Reference: Signature, Parameters, Return Values, ARIA, and Usage */}
      <HookApiSection hookId={activeHook} />
    </div>
  );
};

export default HooksSection;

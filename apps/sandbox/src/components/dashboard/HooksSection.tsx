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
} from '@spectra/primitives';
import { Button, Badge, Card, CardHeader, CardTitle, CardDescription, CardContent, TextInput, Switch } from '@spectra/react';
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

      {/* Comprehensive Hook API Reference: Signature, Parameters, Return Values, ARIA, and Usage */}
      <HookApiSection hookId={activeHook} />
    </div>
  );
};

export default HooksSection;

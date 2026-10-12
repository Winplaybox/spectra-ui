import React, { useState, useRef } from 'react';
import { Card, Button, Badge, Stack, Box, Text, Grid } from '@winplaybox/react';
import { CheckIcon, CopyIcon } from '@winplaybox/icons';
import { navigate } from '../../utils/router';

interface UtilityCardProps {
  id: string;
  name: string;
  category: string;
  signature: string;
  description: string;
  codeSnippet: string;
  children?: React.ReactNode;
}

const UtilityCard: React.FC<UtilityCardProps> = ({
  id,
  name,
  category,
  signature,
  description,
  codeSnippet,
  children,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card
      id={id}
      variant="bordered"
      style={{
        borderRadius: 16,
        backgroundColor: 'var(--color-surface)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        overflow: 'hidden',
        scrollMarginTop: 80,
      }}
    >
      <Box
        style={{
          padding: '20px 24px',
          borderBottom: '1px solid var(--color-border-subtle)',
          backgroundColor: 'var(--color-surface-raised)',
        }}
      >
        <Stack direction="row" align="center" justify="between" wrap gap="md">
          <Stack direction="row" align="center" gap="sm">
            <Badge variant="primary">{category}</Badge>
            <Text
              as="h3"
              variant="heading"
              size="md"
              weight="bold"
              style={{
                margin: 0,
                fontFamily: 'var(--font-mono, monospace)',
                color: 'var(--color-text-primary)',
              }}
            >
              {name}
            </Text>
          </Stack>
          <Button
            variant="secondary"
            size="sm"
            onClick={handleCopy}
            icon={copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
          >
            {copied ? 'Copied' : 'Copy Hook'}
          </Button>
        </Stack>
      </Box>

      <Box style={{ padding: '24px' }}>
        <Text size="sm" color="secondary" style={{ margin: '0 0 16px 0', lineHeight: 1.6 }}>
          {description}
        </Text>

        <Box
          style={{
            padding: '12px 16px',
            backgroundColor: 'var(--color-surface-elevated)',
            borderRadius: 8,
            border: '1px solid var(--color-border-subtle)',
            marginBottom: 20,
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: 13,
            color: 'var(--color-action-primary)',
            overflowX: 'auto',
          }}
        >
          {signature}
        </Box>

        {children && (
          <Box
            style={{
              marginBottom: 20,
              padding: 20,
              backgroundColor: 'var(--color-surface-raised)',
              borderRadius: 12,
              border: '1px solid var(--color-border-default)',
            }}
          >
            <Text size="xs" weight="bold" color="muted" style={{ textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 12 }}>
              Interactive Live Sandbox
            </Text>
            {children}
          </Box>
        )}

        <Box
          style={{
            borderRadius: 8,
            overflow: 'hidden',
            backgroundColor: '#0F172A',
            color: '#E2E8F0',
            padding: '16px 20px',
            fontSize: 12.5,
            fontFamily: 'var(--font-mono, monospace)',
            lineHeight: 1.5,
            overflowX: 'auto',
          }}
        >
          <pre style={{ margin: 0 }}>{codeSnippet}</pre>
        </Box>
      </Box>
    </Card>
  );
};

export interface UtilitiesSectionProps {
  utilityId?: string;
}

export const UtilitiesSection: React.FC<UtilitiesSectionProps> = ({ utilityId }) => {
  // Demo states
  const [cssRuleTheme, setCssRuleTheme] = useState<'light' | 'dark'>('light');
  const [safeZoneOrientation, setSafeZoneOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [activeArrowIndex, setActiveArrowIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [liveAnnouncement, setLiveAnnouncement] = useState('');
  const [typingInput, setTypingInput] = useState('');

  // Arrow nav items
  const arrowItems = ['Dashboard View', 'Component Registry', 'Token Scaler', 'Accessibility Inspector'];
  const arrowContainerRef = useRef<HTMLDivElement>(null);

  const handleArrowKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      setActiveArrowIndex((prev) => (prev + 1) % arrowItems.length);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      setActiveArrowIndex((prev) => (prev - 1 + arrowItems.length) % arrowItems.length);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActiveArrowIndex(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setActiveArrowIndex(arrowItems.length - 1);
    }
  };

  const announcePolite = (msg: string) => {
    setLiveAnnouncement(msg);
  };

  const UTILITIES_REGISTRY = [
    {
      id: 'createCSSRuleFromTheme',
      name: 'createCSSRuleFromTheme',
      category: 'Theme',
      signature: 'createCSSRuleFromTheme(theme: SpectraTheme, options?: CSSRuleOptions): string',
      description: 'Generates optimized, SSR-safe CSS variables and scoped class rules directly from Spectra UI design token structures. Automatically handles dark/light baseline inversions and high-contrast media queries.',
      codeSnippet: `import { createCSSRuleFromTheme } from '@winplaybox/react';

const lightCss = createCSSRuleFromTheme({
  name: 'spectra-light',
  colors: { primary: '#0078D4', surface: '#FFFFFF' },
});

// Injected into document head or SSR style bundle:
// :root[data-theme='spectra-light'] { --color-primary: #0078D4; --color-surface: #FFFFFF; }`,
      renderDemo: () => (
        <Stack direction="column" gap="md">
          <Stack direction="row" gap="sm" align="center">
            <Text size="sm" weight="semibold">Active Mode:</Text>
            <Button
              variant={cssRuleTheme === 'light' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setCssRuleTheme('light')}
            >
              Light Baseline
            </Button>
            <Button
              variant={cssRuleTheme === 'dark' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setCssRuleTheme('dark')}
            >
              Dark High Contrast
            </Button>
          </Stack>
          <Box
            style={{
              padding: '12px 16px',
              backgroundColor: 'var(--color-surface)',
              borderRadius: 8,
              border: '1px solid var(--color-border-subtle)',
              fontFamily: 'var(--font-mono, monospace)',
              fontSize: 12,
              lineHeight: 1.5,
              color: 'var(--color-text-secondary)',
            }}
          >
            {cssRuleTheme === 'light'
              ? `:root[data-theme="light"] { --spectra-color-surface: #FFFFFF; --spectra-color-primary: #0078D4; --spectra-radius: 8px; }`
              : `:root[data-theme="dark"] { --spectra-color-surface: #090D16; --spectra-color-primary: #38BDF8; --spectra-radius: 8px; }`}
          </Box>
        </Stack>
      ),
    },
    {
      id: 'useSafeZoneArea',
      name: 'useSafeZoneArea',
      category: 'Positioning',
      signature: 'useSafeZoneArea(options?: SafeZoneOptions): SafeZoneInsets',
      description: 'Calculates viewport safe-area insets dynamically across Web (CSS env variables), iOS (Dynamic Island & Home Indicator), and Android (System gesture bar). Prevents UI clipping behind device hardware.',
      codeSnippet: `import { useSafeZoneArea } from '@winplaybox/react';

function StickyHeader() {
  const insets = useSafeZoneArea();

  return (
    <header style={{ paddingTop: insets.top, paddingLeft: insets.left, paddingRight: insets.right }}>
      <AppNav />
    </header>
  );
}`,
      renderDemo: () => (
        <Stack direction="column" gap="md">
          <Stack direction="row" gap="sm" align="center" wrap>
            <Text size="sm" weight="semibold">Simulated Hardware:</Text>
            <Button
              variant={safeZoneOrientation === 'portrait' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setSafeZoneOrientation('portrait')}
            >
              iPhone Dynamic Island (Portrait)
            </Button>
            <Button
              variant={safeZoneOrientation === 'landscape' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setSafeZoneOrientation('landscape')}
            >
              iPad Pro (Landscape)
            </Button>
          </Stack>
          <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 10, textAlign: 'center' }}>
            {[
              { label: 'Top Inset', val: safeZoneOrientation === 'portrait' ? '54px' : '24px' },
              { label: 'Right Inset', val: safeZoneOrientation === 'portrait' ? '0px' : '24px' },
              { label: 'Bottom Inset', val: safeZoneOrientation === 'portrait' ? '34px' : '21px' },
              { label: 'Left Inset', val: safeZoneOrientation === 'portrait' ? '0px' : '24px' },
            ].map((inset) => (
              <Box
                key={inset.label}
                style={{
                  padding: '10px',
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: 8,
                  border: '1px solid var(--color-border-subtle)',
                }}
              >
                <Text size="xs" color="muted" style={{ marginBottom: 4 }}>{inset.label}</Text>
                <Text size="md" weight="bold" style={{ fontFamily: 'var(--font-mono, monospace)' }}>{inset.val}</Text>
              </Box>
            ))}
          </Box>
        </Stack>
      ),
    },
    {
      id: 'useArrowNavigationGroup',
      name: 'useArrowNavigationGroup',
      category: 'Focus Management',
      signature: 'useArrowNavigationGroup(options?: ArrowNavOptions): ArrowNavReturn',
      description: 'Implements W3C WAI-ARIA roving tabindex keyboard navigation across lists, menus, and grid collections. Supports ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Home, and End keys.',
      codeSnippet: `import { useArrowNavigationGroup } from '@winplaybox/react';

function NavigationList() {
  const { containerProps, getItemProps } = useArrowNavigationGroup({
    circular: true,
    orientation: 'vertical',
  });

  return (
    <ul {...containerProps}>
      {items.map((item, index) => (
        <li key={item.id} {...getItemProps(index)}>
          {item.label}
        </li>
      ))}
    </ul>
  );
}`,
      renderDemo: () => (
        <Stack direction="column" gap="sm">
          <Text size="sm" color="secondary">
            Click an item below or use <strong>Up / Down / Left / Right / Home / End</strong> arrow keys:
          </Text>
          <Box
            ref={arrowContainerRef}
            tabIndex={0}
            onKeyDown={handleArrowKeyDown}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              outline: 'none',
              padding: 6,
              borderRadius: 8,
              border: '1px solid var(--color-border-subtle)',
              backgroundColor: 'var(--color-surface)',
            }}
          >
            {arrowItems.map((item, idx) => (
              <Box
                key={item}
                onClick={() => setActiveArrowIndex(idx)}
                style={{
                  padding: '8px 14px',
                  borderRadius: 6,
                  fontSize: 13,
                  fontWeight: activeArrowIndex === idx ? 600 : 400,
                  backgroundColor: activeArrowIndex === idx ? 'var(--color-action-primary)' : 'transparent',
                  color: activeArrowIndex === idx ? '#FFFFFF' : 'var(--color-text-primary)',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'background-color 0.1s ease',
                }}
              >
                <span>{item}</span>
                {activeArrowIndex === idx && <Badge variant="default" size="sm">Focused [tabindex=0]</Badge>}
              </Box>
            ))}
          </Box>
        </Stack>
      ),
    },
    {
      id: 'useFocusableGroup',
      name: 'useFocusableGroup',
      category: 'Focus Management',
      signature: 'useFocusableGroup(options?: FocusableGroupOptions): FocusableGroupReturn',
      description: 'Groups related interactive controls into a managed tab cluster. Allows users to jump past large sets of inputs with a single Tab press or cycle inside with Arrow keys.',
      codeSnippet: `import { useFocusableGroup } from '@winplaybox/react';

function ToolbarRow() {
  const { groupRef } = useFocusableGroup({ tabBehavior: 'roving' });

  return (
    <div ref={groupRef} role="toolbar">
      <Button>Cut</Button>
      <Button>Copy</Button>
      <Button>Paste</Button>
    </div>
  );
}`,
    },
    {
      id: 'useFocusFinders',
      name: 'useFocusFinders',
      category: 'Focus Management',
      signature: 'useFocusFinders(): { findFirstFocusable, findLastFocusable, findNextFocusable }',
      description: 'High-performance tree-traversal algorithms that locate the first, last, or next keyboard-focusable child element within any DOM node according to WCAG 2.1 criteria.',
      codeSnippet: `import { useFocusFinders } from '@winplaybox/react';

function ModalMount({ containerRef }) {
  const { findFirstFocusable } = useFocusFinders();

  useEffect(() => {
    const firstEl = findFirstFocusable(containerRef.current);
    firstEl?.focus();
  }, []);
}`,
    },
    {
      id: 'useModalAttributes',
      name: 'useModalAttributes',
      category: 'Focus Management',
      signature: 'useModalAttributes(options?: ModalAttrOptions): ModalAttributes',
      description: 'Generates compliant WAI-ARIA modal dialogue attributes including role="dialog", aria-modal="true", and auto-generated aria-labelledby references.',
      codeSnippet: `import { useModalAttributes, Text, Stack } from '@winplaybox/react';

function CustomDialog({ isOpen, title }) {
  const modalAttrs = useModalAttributes({ isOpen, titleId: 'dialog-title' });

  return (
    <Stack {...modalAttrs} direction="column" gap="md">
      <Text as="h2" id="dialog-title" variant="heading">{title}</Text>
      <DialogBody />
    </Stack>
  );
}`,
      renderDemo: () => (
        <Stack direction="row" gap="md" align="center" wrap>
          <Button variant="primary" onClick={() => setModalOpen(!modalOpen)}>
            {modalOpen ? 'Close Simulated Modal' : 'Inspect Modal Attributes'}
          </Button>
          {modalOpen && (
            <Text size="sm" weight="semibold" style={{ fontFamily: 'var(--font-mono, monospace)', color: 'var(--color-feedback-success)' }}>
              role="dialog" aria-modal="true" aria-labelledby="spectra-modal-12"
            </Text>
          )}
        </Stack>
      ),
    },
    {
      id: 'useObservedElement',
      name: 'useObservedElement',
      category: 'Focus Management',
      signature: 'useObservedElement<T extends HTMLElement>(): [ref, DOMRectReadOnly | null]',
      description: 'Lightweight ResizeObserver abstraction that monitors container width, height, and content-box margins with zero layout-thrashing.',
      codeSnippet: `import { useObservedElement } from '@winplaybox/react';

function ResponsiveContainer() {
  const [ref, bounds] = useObservedElement<HTMLDivElement>();

  return (
    <div ref={ref}>
      Current Rendered Width: {bounds?.width ?? 0}px
    </div>
  );
}`,
    },
    {
      id: 'useRestoreFocusSource',
      name: 'useRestoreFocusSource',
      category: 'Focus Management',
      signature: 'useRestoreFocusSource(active: boolean): void',
      description: 'Remembers the element that initiated an overlay action (e.g. Button opening a Drawer) and cleanly restores keyboard focus to that exact element upon closure.',
      codeSnippet: `import { useRestoreFocusSource } from '@winplaybox/react';

function SlideDrawer({ isOpen, onClose }) {
  useRestoreFocusSource(isOpen);

  if (!isOpen) return null;
  return <DrawerContent onClose={onClose} />;
}`,
    },
    {
      id: 'useUncontrolledFocus',
      name: 'useUncontrolledFocus',
      category: 'Focus Management',
      signature: 'useUncontrolledFocus(options?: UncontrolledFocusOptions): RefCallback',
      description: 'Manages focus placement in uncontrolled interactive widgets without triggering extraneous React re-renders or state desynchronization.',
      codeSnippet: `import { useUncontrolledFocus } from '@winplaybox/react';

function QuickSearch() {
  const focusRef = useUncontrolledFocus({ autoFocus: true });
  return <input ref={focusRef} placeholder="Search commands..." />;
}`,
    },
    {
      id: 'AriaLiveAnnouncer',
      name: 'AriaLiveAnnouncer',
      category: 'ARIA-Live',
      signature: '<AriaLiveAnnouncer politeness="polite" | "assertive" />',
      description: 'Dedicated, visually-hidden screen reader output container that dispatches dynamic auditory status alerts without disrupting sighted visual rendering.',
      codeSnippet: `import { AriaLiveAnnouncer } from '@winplaybox/react';

export function RootLayout({ children }) {
  return (
    <>
      <AriaLiveAnnouncer />
      {children}
    </>
  );
}`,
      renderDemo: () => (
        <Stack direction="column" gap="md">
          <Stack direction="row" gap="sm" align="center" wrap>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => announcePolite('Changes saved successfully to remote repository.')}
            >
              Trigger Polite Announcement
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => announcePolite('Network connection degraded. Sync paused.')}
            >
              Trigger Warning Alert
            </Button>
          </Stack>
          <Box
            style={{
              padding: '10px 14px',
              backgroundColor: 'var(--color-surface)',
              borderRadius: 6,
              border: '1px solid var(--color-border-subtle)',
              fontSize: 13,
            }}
          >
            <span style={{ color: 'var(--color-text-muted)' }}>Live Region Output: </span>
            <span style={{ fontWeight: 600, color: 'var(--color-action-primary)' }}>
              {liveAnnouncement || '(No announcement dispatched yet)'}
            </span>
          </Box>
        </Stack>
      ),
    },
    {
      id: 'useAnnounce',
      name: 'useAnnounce',
      category: 'ARIA-Live',
      signature: 'useAnnounce(): { announce: (message: string, mode?: "polite" | "assertive") => void }',
      description: 'Imperative hook for scheduling screen reader verbal announcements from anywhere within the component tree.',
      codeSnippet: `import { useAnnounce } from '@winplaybox/react';

function SaveButton() {
  const { announce } = useAnnounce();

  const handleSave = async () => {
    await saveRecord();
    announce('Record successfully committed to Cloud Firestore', 'polite');
  };

  return <Button onClick={handleSave}>Save</Button>;
}`,
    },
    {
      id: 'useTypingAnnounce',
      name: 'useTypingAnnounce',
      category: 'ARIA-Live',
      signature: 'useTypingAnnounce(value: string, options?: TypingAnnounceOptions): void',
      description: 'Throttled speech announcer designed specifically for active search boxes and character counters. Prevents screen-reader verbosity spam during rapid user typing.',
      codeSnippet: `import { useTypingAnnounce } from '@winplaybox/react';

function SearchInput({ query }) {
  useTypingAnnounce(query, {
    delay: 500,
    formatter: (q, count) => \`\${count} results matching \${q}\`,
  });

  return <input value={query} />;
}`,
      renderDemo: () => (
        <Stack direction="column" gap="sm">
          <input
            type="text"
            placeholder="Type query to test throttled speech announcement..."
            value={typingInput}
            onChange={(e) => setTypingInput(e.target.value)}
            style={{
              padding: '10px 14px',
              borderRadius: 8,
              border: '1px solid var(--color-border-default)',
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-text-primary)',
              fontSize: 14,
              outline: 'none',
              maxWidth: 420,
            }}
          />
          <Text size="xs" color="secondary">
            Throttled Speech Output (600ms debounce):{' '}
            <strong style={{ color: 'var(--color-action-primary)' }}>
              {typingInput ? `Announced: "${typingInput}" (speech buffered)` : '(Idle - start typing above)'}
            </strong>
          </Text>
        </Stack>
      ),
    },
  ];

  const targetId = utilityId?.toLowerCase();
  const matchedUtil = UTILITIES_REGISTRY.find((u) => u.id.toLowerCase() === targetId);

  // SUB-PAGE: Dedicated Screen for a single utility
  if (matchedUtil && targetId !== 'all' && targetId !== 'overview') {
    return (
      <Stack direction="column" gap="lg" style={{ maxWidth: 1040, margin: '0 auto', paddingBottom: 64 }}>
        <Stack direction="row" align="center" justify="between" wrap gap="sm">
          <Stack direction="row" align="center" gap="xs">
            <Button size="sm" variant="secondary" onClick={() => navigate('/utilities')}>
              ← All Utilities
            </Button>
            <Text size="xs" color="muted">/</Text>
            <Badge variant="primary" size="sm">{matchedUtil.category}</Badge>
            <Text size="sm" weight="bold">{matchedUtil.name}</Text>
          </Stack>
        </Stack>

        <UtilityCard
          id={matchedUtil.id}
          name={matchedUtil.name}
          category={matchedUtil.category}
          signature={matchedUtil.signature}
          description={matchedUtil.description}
          codeSnippet={matchedUtil.codeSnippet}
        >
          {matchedUtil.renderDemo ? matchedUtil.renderDemo() : null}
        </UtilityCard>
      </Stack>
    );
  }

  // OVERVIEW PAGE: Master Index with Hero Card and Categorized Grid
  return (
    <Stack direction="column" gap="xl" style={{ maxWidth: 1040, margin: '0 auto', paddingBottom: 64 }}>
      {/* Hero Header Card */}
      <Card
        variant="bordered"
        style={{
          padding: '32px 36px',
          backgroundColor: 'var(--color-surface)',
          borderRadius: 16,
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        }}
      >
        <Stack direction="row" align="center" gap="sm" style={{ marginBottom: 10 }}>
          <Badge variant="primary">Core Architecture</Badge>
          <Text size="xs" color="muted" weight="medium">
            Headless Utility Functions & Accessibility Hooks
          </Text>
        </Stack>
        <Text
          as="h1"
          variant="heading"
          size="xl"
          weight="bold"
          style={{ fontSize: 34, letterSpacing: '-0.025em', margin: '0 0 12px 0' }}
        >
          Utilities & Accessibility Hooks
        </Text>
        <Text size="md" color="secondary" style={{ lineHeight: 1.6, maxWidth: 820, margin: 0 }}>
          Spectra UI provides production-tested functional primitives for dynamic theme rule generation, mobile viewport safe-area insets, WAI-ARIA roving tabindexes, modal trap containment, and live screen-reader announcer dispatch.
        </Text>
      </Card>

      {/* Categorized Catalog Grid */}
      {['Theme', 'Positioning', 'Focus Management', 'ARIA-Live'].map((category) => {
        const catUtils = UTILITIES_REGISTRY.filter((u) => u.category === category);
        return (
          <Card
            key={category}
            variant="bordered"
            style={{
              padding: 28,
              borderRadius: 16,
              backgroundColor: 'var(--color-surface)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
            }}
          >
            <Stack direction="row" align="center" gap="sm" style={{ marginBottom: 16 }}>
              <Badge variant="primary">{category}</Badge>
              <Text as="h2" variant="heading" size="md" weight="bold">
                {category} Utilities ({catUtils.length})
              </Text>
            </Stack>

            <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
              {catUtils.map((util) => (
                <Card
                  key={util.id}
                  variant="bordered"
                  style={{
                    padding: '20px',
                    borderRadius: 12,
                    backgroundColor: 'var(--color-surface-raised)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: 14,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                  onClick={() => navigate(`/utilities/${util.id}`)}
                >
                  <Stack direction="column" gap="xs">
                    <Text
                      size="sm"
                      weight="bold"
                      color="primary"
                      style={{ fontFamily: 'var(--font-mono, monospace)' }}
                    >
                      {util.name}
                    </Text>
                    <Text size="xs" color="secondary" style={{ lineHeight: 1.5 }}>
                      {util.description}
                    </Text>
                  </Stack>
                  <Button size="sm" variant="secondary" onClick={() => navigate(`/utilities/${util.id}`)}>
                    View Hook & Sandbox →
                  </Button>
                </Card>
              ))}
            </Box>
          </Card>
        );
      })}
    </Stack>
  );
};

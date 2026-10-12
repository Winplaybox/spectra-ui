import React, { useState } from 'react';
import { Card, Button, Badge, Stack, Box, Text, Grid } from '@winplaybox/react';
import {
  CodeIcon,
  CheckIcon,
  CopyIcon,
  GlobeIcon,
  CubeIcon,
  ComponentIcon,
  FocusTargetIcon,
  SparklesIcon,
} from '@winplaybox/icons';
import { navigate } from '../../utils/router';

interface GuideCardProps {
  id: string;
  title: string;
  badge: string;
  summary: string;
  keyPrinciples: string[];
  codeSnippet: string;
  children?: React.ReactNode;
}

const GuideCard: React.FC<GuideCardProps> = ({
  id,
  title,
  badge,
  summary,
  keyPrinciples,
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
          padding: '22px 28px',
          borderBottom: '1px solid var(--color-border-subtle)',
          backgroundColor: 'var(--color-surface-raised)',
        }}
      >
        <Stack direction="row" align="center" justify="between" wrap gap="md">
          <Stack direction="row" align="center" gap="sm">
            <Badge variant="primary">{badge}</Badge>
            <Text
              as="h2"
              variant="heading"
              size="md"
              weight="bold"
              style={{ margin: 0, color: 'var(--color-text-primary)' }}
            >
              {title}
            </Text>
          </Stack>
          <Button
            variant="secondary"
            size="sm"
            onClick={handleCopy}
            icon={copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
          >
            {copied ? 'Copied' : 'Copy Guide Code'}
          </Button>
        </Stack>
      </Box>

      <Box style={{ padding: '26px 28px' }}>
        <Text size="md" color="secondary" style={{ margin: '0 0 18px 0', lineHeight: 1.6 }}>
          {summary}
        </Text>

        {/* Key Principles Checklist */}
        <Box style={{ marginBottom: 20 }}>
          <Text size="xs" weight="bold" color="muted" style={{ textTransform: 'uppercase', marginBottom: 10, letterSpacing: '0.05em' }}>
            Architectural Guarantees
          </Text>
          <Stack direction="column" gap="xs">
            {keyPrinciples.map((principle, idx) => (
              <Stack key={idx} direction="row" align="start" gap="xs">
                <Text size="sm" color="primary" weight="bold" style={{ lineHeight: 1.5 }}>•</Text>
                <Text size="sm" color="primary" style={{ lineHeight: 1.5 }}>{principle}</Text>
              </Stack>
            ))}
          </Stack>
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
            <Text size="xs" weight="semibold" color="muted" style={{ marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Interactive Sandbox
            </Text>
            {children}
          </Box>
        )}

        <Box
          style={{
            backgroundColor: '#0F172A',
            borderRadius: 10,
            padding: '18px 22px',
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: 13,
            color: '#E2E8F0',
            overflowX: 'auto',
            lineHeight: 1.6,
          }}
        >
          <pre style={{ margin: 0 }}>{codeSnippet}</pre>
        </Box>
      </Box>
    </Card>
  );
};

export interface GuidesSectionProps {
  guideId?: string;
}

export const GuidesSection: React.FC<GuidesSectionProps> = ({ guideId }) => {
  // Demo states for interactive guide sandboxes
  const [densityMode, setDensityMode] = useState<'comfortable' | 'compact'>('comfortable');
  const [rtlSimulated, setRtlSimulated] = useState(false);
  const [cqSimWidth, setCqSimWidth] = useState<'full' | 'narrow'>('full');

  const GUIDES_REGISTRY = [
    {
      id: 'responsive-ui',
      title: 'Responsive UI & Viewports',
      badge: 'Layout',
      summary: 'Spectra UI enforces mobile-first responsive architecture calibrated with 5 standard breakpoint tiers (xs, sm, md, lg, xl). Components dynamically adapt using CSS media queries and semantic fluid token scales.',
      keyPrinciples: [
        'Mobile-first default styling: base rules target 320px+ viewports without min-width queries.',
        'Fluid typography scales calculated via clamp() for zero-layout-shift font rendering.',
        'Platform-aware breakpoints: automatically aligns with iPad Split View and Android Multi-Window.',
      ],
      codeSnippet: `/* Responsive Breakpoints & Viewport Grid */
export const breakpoints = {
  xs: '320px',  // Mobile Portrait
  sm: '600px',  // Mobile Landscape / Small Tablet
  md: '900px',  // Tablet Portrait / Foldables
  lg: '1200px', // Desktop Standard
  xl: '1536px', // Ultra-Wide 4K Displays
};`,
    },
    {
      id: 'localization',
      title: 'Localization & Dynamic Translation',
      badge: 'i18n',
      summary: 'Bi-directional text flow and locale-sensitive date, number, and currency formatters are baked into the component core. No text is hardcoded into DOM templates.',
      keyPrinciples: [
        'Component props accept ReactNode or formatted i18n messages rather than plain strings.',
        'Zero string concatenation: compound status texts use structured slot composition.',
        'Locale-aware number and currency formatting natively powered by Intl.NumberFormat.',
      ],
      codeSnippet: `import { useLocale, formatDate, formatNumber } from '@winplaybox/react';

function OrderSummary({ price, date }) {
  const { locale, dir } = useLocale();
  return (
    <div dir={dir}>
      <span>{formatNumber(price, { style: 'currency', currency: 'USD', locale })}</span>
      <time>{formatDate(date, { dateStyle: 'medium', locale })}</time>
    </div>
  );
}`,
    },
    {
      id: 'api',
      title: 'Programmatic API Design Guidelines',
      badge: 'Contracts',
      summary: 'API signatures prioritize consistency, semantic ergonomics, and TypeScript autocompletion over clever syntactic shortcuts. Every component implements slot-based composition.',
      keyPrinciples: [
        'Controlled and uncontrolled pairs for all stateful inputs (value/onChange & defaultValue).',
        'Standardized slot names: leadingSlot, trailingSlot, actionSlot across all form fields and cards.',
        'No magic string props: all visual variations derive from explicit TypeScript union types.',
      ],
      codeSnippet: `// Universal Spectra UI Component Signature Pattern
export interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  leadingSlot?: React.ReactNode;
  trailingSlot?: React.ReactNode;
}`,
    },
    {
      id: 'building-extensible-themes',
      title: 'Building Extensible Themes',
      badge: 'Theme Architecture',
      summary: 'Design tokens are split into 3 strict tiers: Primitive (raw color hex), Semantic (purpose-driven roles), and Component (scoped component variables). This ensures brand rebranding without breaking layouts.',
      keyPrinciples: [
        'Primitive tokens: raw palette scales (blue.500, gray.100). Never consumed directly in UI.',
        'Semantic tokens: functional roles (color.action.primary, color.surface.raised). Consumed by components.',
        'Component tokens: localized overrides (--button-height, --badge-radius). Fully customizable.',
      ],
      codeSnippet: `import { createCustomTheme } from '@winplaybox/react';

export const fintechTheme = createCustomTheme({
  base: 'dark',
  semanticOverrides: {
    color: {
      action: { primary: '#00E599' },
      surface: { default: '#0B0F17', raised: '#111827' },
    },
  },
});`,
    },
    {
      id: 'minimizing-bundle-size',
      title: 'Minimizing Bundle Size & Tree-Shaking',
      badge: 'Performance',
      summary: 'Every package in the @winplaybox monorepo is fully tree-shakeable. Component modules declare sideEffects: false and export isolated ES modules with zero global side effects.',
      keyPrinciples: [
        'Granular module boundaries: importing Button only bundles Button + its direct CSS token dependencies.',
        'Zero heavy runtime CSS libraries: vanilla CSS or zero-runtime Vanilla Extract styles.',
        'Icons packaged into pure tree-shakeable SVG components with 100% dead-code elimination.',
      ],
      codeSnippet: `// Optimal granular imports
import { Button } from '@winplaybox/react/components/actions/Button';
import { SearchIcon } from '@winplaybox/icons/curated';

// Direct ES module tree-shaking yields < 2.5 kB gzipped per button instance`,
    },
    {
      id: 'container-queries',
      title: 'Container Queries & Micro-Breakpoints',
      badge: 'Responsive Layouts',
      summary: 'Components adapt to their parent container dimensions rather than viewport width. Enables reusable card widgets that render correctly inside 300px sidebars or 1200px main content grids.',
      keyPrinciples: [
        'Self-contained responsiveness: container-type: inline-size on layout roots.',
        'Component layout shifts dynamically based on cqmin and @container queries.',
        'Works seamlessly in dashboard widgets, modal split-views, and sidebar drawers.',
      ],
      codeSnippet: `/* Self-contained responsive card layout */
.spectra-card-container {
  container-type: inline-size;
}

@container (max-width: 400px) {
  .spectra-card__layout {
    flex-direction: column;
  }
}`,
      renderDemo: () => (
        <Stack direction="column" gap="md">
          <Stack direction="row" gap="sm" align="center">
            <Text size="sm" weight="semibold">Container Sandbox Width:</Text>
            <Button
              variant={cqSimWidth === 'full' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setCqSimWidth('full')}
            >
              Wide Parent (560px)
            </Button>
            <Button
              variant={cqSimWidth === 'narrow' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setCqSimWidth('narrow')}
            >
              Narrow Sidebar (280px)
            </Button>
          </Stack>
          <Box
            style={{
              width: cqSimWidth === 'full' ? '100%' : 280,
              maxWidth: '100%',
              padding: 16,
              borderRadius: 8,
              border: '1.5px dashed var(--color-action-primary)',
              backgroundColor: 'var(--color-surface)',
              transition: 'width 0.25s ease',
            }}
          >
            <Stack
              direction={cqSimWidth === 'full' ? 'row' : 'column'}
              align="center"
              justify="between"
              gap="sm"
            >
              <Text size="sm" weight="bold">Responsive Micro-Card</Text>
              <Badge variant="success">{cqSimWidth === 'full' ? 'Row Layout' : 'Stacked Column'}</Badge>
            </Stack>
          </Box>
        </Stack>
      ),
    },
    {
      id: 'density',
      title: 'Density & Dynamic Sizing Scales',
      badge: 'Ergonomics',
      summary: 'Spectra UI supports high-density desktop data workspaces and touch-friendly mobile layouts through unified density scaling variables.',
      keyPrinciples: [
        'Compact mode: 24px and 28px control heights for data-intensive enterprise tables.',
        'Comfortable mode: 36px and 44px control heights exceeding Apple HIG 44pt touch minimums.',
        'Dynamic density switching through data-density="compact | comfortable" HTML attribute.',
      ],
      codeSnippet: `<div data-density="compact">
  <Table data={largeDataset} />
</div>`,
      renderDemo: () => (
        <Stack direction="column" gap="md">
          <Stack direction="row" gap="sm" align="center">
            <Text size="sm" weight="semibold">Target Density:</Text>
            <Button
              variant={densityMode === 'comfortable' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setDensityMode('comfortable')}
            >
              Comfortable (Touch 40px)
            </Button>
            <Button
              variant={densityMode === 'compact' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setDensityMode('compact')}
            >
              Compact (Data 28px)
            </Button>
          </Stack>
          <Box
            style={{
              padding: densityMode === 'comfortable' ? '18px 22px' : '8px 12px',
              borderRadius: 8,
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border-subtle)',
              transition: 'all 0.15s ease',
            }}
          >
            <Stack direction="row" align="center" justify="between">
              <Text size={densityMode === 'comfortable' ? 'md' : 'xs'} weight="bold">
                Data Table Density Sample
              </Text>
              <Button size={densityMode === 'comfortable' ? 'md' : 'sm'} variant="secondary">
                Action Button
              </Button>
            </Stack>
          </Box>
        </Stack>
      ),
    },
    {
      id: 'focus-visible',
      title: 'Focus-Visible & Keyboard Ring Standards',
      badge: 'Accessibility',
      summary: 'Focus indicators appear exclusively when navigating via keyboard (Tab, Arrows) and are suppressed during pointer clicks via :focus-visible. Every component features a 3:1 high-contrast double ring.',
      keyPrinciples: [
        'Strictly prohibited: outline: none without a corresponding :focus-visible replacement.',
        'Double-ring design: 2px solid primary color + 2px white gap ensures contrast over dark & light backgrounds.',
        'WCAG 2.1 AA Non-Text Contrast (1.4.11) compliance verified via automated axe-core matrix.',
      ],
      codeSnippet: `/* Spectra UI universal high-contrast focus indicator */
:focus-visible {
  outline: 2px solid var(--color-action-primary);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px var(--color-surface);
}`,
    },
    {
      id: 'z-index',
      title: 'Z-Index Stacking Elevation Tokens',
      badge: 'Stacking Context',
      summary: 'Eliminates z-index wars through a centralized scale of non-overlapping layers from sticky headers to global toast notifications.',
      keyPrinciples: [
        'Explicit hierarchy: base (0), sticky (10), dropdown (20), drawer (30), modal (40), toast (50), max (9999).',
        'Stacking contexts created intentionally using isolation: isolate on component roots.',
        'Portals mount overlays onto document.body to avoid parent CSS overflow clipping.',
      ],
      codeSnippet: `export const zIndexTokens = {
  sticky: 10,
  dropdown: 20,
  drawer: 30,
  modal: 40,
  toast: 50,
  maximum: 9999,
};`,
    },
    {
      id: 'transitions',
      title: 'Transitions & Motion Architecture',
      badge: 'Animation',
      summary: 'Spectra UI animations are purposeful and subtle. The system strictly honors the prefers-reduced-motion media query, replacing transforms with instant opacities for vestibular safety.',
      keyPrinciples: [
        'Hardware-accelerated CSS properties only: transform and opacity.',
        'Standard duration tiers: instant (50ms), subtle (150ms), normal (250ms), expressive (400ms).',
        'Automatic zero-duration fallback when prefers-reduced-motion: reduce is detected.',
      ],
      codeSnippet: `@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`,
    },
    {
      id: 'shadow-dom',
      title: 'Shadow DOM & Micro-Frontends',
      badge: 'Encapsulation',
      summary: 'Spectra UI components are designed for Web Components and micro-frontends with Shadow DOM roots. Tokens propagate seamlessly through CSS custom properties without style leaks.',
      keyPrinciples: [
        'CSS variables pierce shadow roots natively: tokens applied at :root cascade into shadow trees.',
        'Portal containers allow targeting custom mount roots within shadow boundaries.',
        'Event retargeting handled cleanly by all headless disclosure and menu hooks.',
      ],
      codeSnippet: `// Custom mount root for Shadow DOM encapsulation
<Portal container={shadowRoot.getElementById('portal-container')}>
  <Dialog isOpen={open}>
    <DialogBody />
  </Dialog>
</Portal>`,
    },
    {
      id: 'dark-mode',
      title: 'Dark Mode Baseline & Contrast Ratios',
      badge: 'Theme Baseline',
      summary: 'Light mode is Spectra UI\'s primary baseline, with an equally rigorous dark mode maintaining WCAG AAA contrast ratios. Dark mode is never treated as an afterthought or raw CSS filter.',
      keyPrinciples: [
        'Primary light mode baseline: clean, glare-free, enterprise clarity.',
        'Dark mode baseline: deep obsidian (#090D16) rather than muddy grey.',
        'Contrast ratio guarantees: minimum 4.5:1 for body copy, 3.0:1 for large headings.',
      ],
      codeSnippet: `import { useColorScheme } from '@winplaybox/react';

function Header() {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <Button onClick={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}>
      Active: {colorScheme}
    </Button>
  );
}`,
    },
    {
      id: 'right-to-left',
      title: 'Right-to-Left (RTL) Bidirectional Layout',
      badge: 'Bidirectionality',
      summary: 'Spectra UI utilizes CSS Logical Properties (margin-inline-start, padding-inline-end, inset-inline) across every component. Switching to Arabic, Hebrew, or Persian requires zero manual CSS overrides.',
      keyPrinciples: [
        'Strict prohibition of physical margin-left / margin-right in component libraries.',
        'Icons indicating flow (chevrons, back arrows) mirror automatically when dir="rtl".',
        'Symmetric icons (checkmarks, close icons, search) remain un-mirrored according to HIG.',
      ],
      codeSnippet: `/* Spectra UI logical spacing guarantee */
.spectra-button__icon {
  margin-inline-end: 8px; /* Flips to left automatically in RTL */
}`,
      renderDemo: () => (
        <Stack direction="column" gap="md">
          <Stack direction="row" gap="sm" align="center">
            <Button
              variant={!rtlSimulated ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setRtlSimulated(false)}
            >
              LTR Direction (English)
            </Button>
            <Button
              variant={rtlSimulated ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setRtlSimulated(true)}
            >
              RTL Direction (Arabic / Hebrew)
            </Button>
          </Stack>
          <Box
            dir={rtlSimulated ? 'rtl' : 'ltr'}
            style={{
              padding: 16,
              borderRadius: 8,
              border: '1px solid var(--color-border-subtle)',
              backgroundColor: 'var(--color-surface)',
              display: 'flex',
              gap: 12,
              alignItems: 'center',
            }}
          >
            <Button variant="primary" icon={<GlobeIcon size={16} />}>
              {rtlSimulated ? 'إرسال الطلب' : 'Submit Form'}
            </Button>
            <Text size="sm" color="secondary">
              {rtlSimulated
                ? 'الاتجاه الآن من اليمين إلى اليسار تلقائيًا'
                : 'Current text and icon flow is Left-to-Right'}
            </Text>
          </Box>
        </Stack>
      ),
    },
  ];

  const targetId = guideId?.toLowerCase();
  const matchedGuide = GUIDES_REGISTRY.find((g) => g.id.toLowerCase() === targetId);

  // SUB-PAGE: Dedicated Screen for a single Architecture Guide
  if (matchedGuide && targetId !== 'all' && targetId !== 'overview') {
    return (
      <Stack direction="column" gap="lg" style={{ maxWidth: 1040, margin: '0 auto', paddingBottom: 64 }}>
        <Stack direction="row" align="center" justify="between" wrap gap="sm">
          <Stack direction="row" align="center" gap="xs">
            <Button size="sm" variant="secondary" onClick={() => navigate('/guides')}>
              ← All Architecture Guides
            </Button>
            <Text size="xs" color="muted">/</Text>
            <Badge variant="primary" size="sm">{matchedGuide.badge}</Badge>
            <Text size="sm" weight="bold">{matchedGuide.title}</Text>
          </Stack>
        </Stack>

        <GuideCard
          id={matchedGuide.id}
          title={matchedGuide.title}
          badge={matchedGuide.badge}
          summary={matchedGuide.summary}
          keyPrinciples={matchedGuide.keyPrinciples}
          codeSnippet={matchedGuide.codeSnippet}
        >
          {matchedGuide.renderDemo ? matchedGuide.renderDemo() : null}
        </GuideCard>
      </Stack>
    );
  }

  // OVERVIEW PAGE: Master Index with Hero Card and Guides Catalog Grid
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
          <Badge variant="primary">Enterprise Architecture</Badge>
          <Text size="xs" color="muted" weight="medium">
            Spectra UI System Specifications & Engineering Blueprints
          </Text>
        </Stack>
        <Text
          as="h1"
          variant="heading"
          size="xl"
          weight="bold"
          style={{ fontSize: 34, letterSpacing: '-0.025em', margin: '0 0 12px 0' }}
        >
          Architecture & Implementation Guides
        </Text>
        <Text size="md" color="secondary" style={{ lineHeight: 1.6, maxWidth: 820, margin: 0 }}>
          Comprehensive production guidelines covering multi-platform responsiveness, zero-overhead bundle optimization, container queries, Shadow DOM encapsulation, RTL mirroring, and W3C accessibility compliance.
        </Text>
      </Card>

      {/* Catalog Grid of Guides */}
      <Card
        variant="bordered"
        style={{
          padding: 28,
          borderRadius: 16,
          backgroundColor: 'var(--color-surface)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        }}
      >
        <Text as="h2" variant="heading" size="lg" weight="bold" style={{ margin: '0 0 6px 0' }}>
          Architecture Blueprints ({GUIDES_REGISTRY.length})
        </Text>
        <Text size="sm" color="secondary" style={{ margin: '0 0 20px 0' }}>
          Select any blueprint below to open its dedicated specification screen with architectural guarantees, live test benches, and implementation patterns.
        </Text>
        <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
          {GUIDES_REGISTRY.map((guide) => (
            <Card
              key={guide.id}
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
              onClick={() => navigate(`/guides/${guide.id}`)}
            >
              <Stack direction="column" gap="xs">
                <Stack direction="row" justify="between" align="center">
                  <Badge variant="primary" size="sm">{guide.badge}</Badge>
                </Stack>
                <Text size="md" weight="bold" color="primary">{guide.title}</Text>
                <Text size="xs" color="secondary" style={{ lineHeight: 1.5 }}>
                  {guide.summary}
                </Text>
              </Stack>
              <Button size="sm" variant="secondary" onClick={() => navigate(`/guides/${guide.id}`)}>
                Read Full Blueprint →
              </Button>
            </Card>
          ))}
        </Box>
      </Card>
    </Stack>
  );
};

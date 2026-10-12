import React, { useState } from 'react';
import { Card, Button, Badge, Text, Stack, Box } from '@winplaybox/react';
import {
  CheckIcon,
  CopyIcon,
  ExternalLinkIcon,
  SparklesIcon,
  CodeIcon,
  GlobeIcon,
  SmartphoneIcon,
  ShieldIcon,
  InfoIcon,
} from '@winplaybox/icons';
import { navigate } from '../../utils/router';
import { CURRENT_VERSION, ALL_RELEASES, VersionRelease } from '../../data/versionReleaseData';

interface GettingStartedSectionProps {
  topicId: string;
}

export const GettingStartedSection: React.FC<GettingStartedSectionProps> = ({ topicId }) => {
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  // 1. USAGE
  if (topicId === 'usage') {
    return (
      <Stack direction="column" gap="xl" style={{ maxWidth: 960, margin: '0 auto', paddingBottom: 64 }}>
        <Card variant="bordered" style={{ padding: '32px 36px', backgroundColor: 'var(--color-surface)', borderRadius: 16 }}>
          <Stack direction="row" align="center" gap="sm" style={{ marginBottom: 10 }}>
            <Badge variant="primary">Getting Started</Badge>
            <Text size="xs" color="muted">Core Application Setup</Text>
          </Stack>
          <Text as="h1" variant="heading" size="xl" weight="bold" style={{ fontSize: 32, margin: '0 0 12px 0' }}>
            Basic Usage & Setup
          </Text>
          <Text size="md" color="secondary" style={{ lineHeight: 1.6, margin: 0 }}>
            Spectra UI components are designed to work seamlessly with React 18, React 19, Vite, Next.js (App & Pages Router), Remix, and React Native.
          </Text>
        </Card>

        {/* Step 1: Provider Wrap */}
        <Card variant="bordered" style={{ padding: 24, borderRadius: 14, backgroundColor: 'var(--color-surface)' }}>
          <Text as="h3" variant="heading" size="md" weight="bold" style={{ margin: '0 0 10px 0' }}>
            1. Wrap your application with SpectraProvider
          </Text>
          <Text size="sm" color="secondary" style={{ margin: '0 0 16px 0', lineHeight: 1.6 }}>
            The SpectraProvider handles design token injection, color mode switching (Light / Dark / System), and accessible ARIA live announcers.
          </Text>
          <div style={{ backgroundColor: '#0F172A', color: '#F8FAFC', borderRadius: 8, padding: '14px 18px', fontFamily: 'monospace', fontSize: 13, overflowX: 'auto' }}>
{`import React from 'react';
import ReactDOM from 'react-dom/client';
import '@winplaybox/tokens/css';
import { SpectraProvider, Button } from '@winplaybox/react';

export function App() {
  return (
    <SpectraProvider defaultColorScheme="light">
      <Button variant="primary">Hello Spectra</Button>
    </SpectraProvider>
  );
}`}
          </div>
        </Card>

        {/* Step 2: Next.js Setup */}
        <Card variant="bordered" style={{ padding: 24, borderRadius: 14, backgroundColor: 'var(--color-surface)' }}>
          <Text as="h3" variant="heading" size="md" weight="bold" style={{ margin: '0 0 10px 0' }}>
            2. Next.js App Router Integration
          </Text>
          <Text size="sm" color="secondary" style={{ margin: '0 0 16px 0', lineHeight: 1.6 }}>
            All Spectra UI components are tree-shakeable and SSR-safe. For interactive components, wrap your client boundary in <code>providers.tsx</code>.
          </Text>
          <div style={{ backgroundColor: '#0F172A', color: '#F8FAFC', borderRadius: 8, padding: '14px 18px', fontFamily: 'monospace', fontSize: 13, overflowX: 'auto' }}>
{`// app/providers.tsx
'use client';

import '@winplaybox/tokens/css';
import { SpectraProvider } from '@winplaybox/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return <SpectraProvider defaultColorScheme="system">{children}</SpectraProvider>;
}`}
          </div>
        </Card>
      </Stack>
    );
  }

  // 2. MCP (Model Context Protocol)
  if (topicId === 'mcp') {
    return (
      <Stack direction="column" gap="xl" style={{ maxWidth: 960, margin: '0 auto', paddingBottom: 64 }}>
        <Card variant="bordered" style={{ padding: '32px 36px', backgroundColor: 'var(--color-surface)', borderRadius: 16 }}>
          <Stack direction="row" align="center" gap="sm" style={{ marginBottom: 10 }}>
            <Badge variant="success">NEW in v0.2.0</Badge>
            <Badge variant="primary">AI Assistant Integration</Badge>
          </Stack>
          <Text as="h1" variant="heading" size="xl" weight="bold" style={{ fontSize: 32, margin: '0 0 12px 0' }}>
            Model Context Protocol (MCP) Server
          </Text>
          <Text size="md" color="secondary" style={{ lineHeight: 1.6, margin: 0 }}>
            The official <code>@winplaybox/mcp</code> package provides native tool integrations for Claude Desktop, Cursor, Antigravity, and Gemini, enabling agents to query components, verified recipes, design tokens, and multi-platform capabilities with zero hallucinations.
          </Text>
        </Card>

        <Card variant="bordered" style={{ padding: 24, borderRadius: 14, backgroundColor: 'var(--color-surface)' }}>
          <Text as="h3" variant="heading" size="md" weight="bold" style={{ margin: '0 0 10px 0' }}>
            Installation & Claude Desktop Configuration
          </Text>
          <Text size="sm" color="secondary" style={{ margin: '0 0 14px 0', lineHeight: 1.6 }}>
            Add Spectra UI to your <code>claude_desktop_config.json</code> or Antigravity MCP settings:
          </Text>
          <div style={{ backgroundColor: '#0F172A', color: '#F8FAFC', borderRadius: 8, padding: '14px 18px', fontFamily: 'monospace', fontSize: 13, overflowX: 'auto' }}>
{`{
  "mcpServers": {
    "spectra-ui": {
      "command": "npx",
      "args": ["-y", "@winplaybox/mcp@latest"]
    }
  }
}`}
          </div>
        </Card>

        <Card variant="bordered" style={{ padding: 24, borderRadius: 14, backgroundColor: 'var(--color-surface)' }}>
          <Text as="h3" variant="heading" size="md" weight="bold" style={{ margin: '0 0 14px 0' }}>
            Exposed MCP Tools
          </Text>
          <Stack direction="column" gap="sm">
            {[
              { name: 'getComponent({ component, platform })', desc: 'Returns platform-filtered component anatomy, props, and imports.' },
              { name: 'getRecipes({ component, platform })', desc: 'Returns verified production recipes for the selected platform.' },
              { name: 'getPlatformCapabilities({ platform })', desc: 'Inspects verified support levels across Web, Android, iOS, Windows, and macOS.' },
              { name: 'getTokens({ category })', desc: 'Fetches semantic design tokens, color scales, and 4px spacing values.' },
            ].map((t) => (
              <div key={t.name} style={{ padding: '10px 14px', borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-subtle)' }}>
                <code style={{ fontSize: 12.5, color: '#0078D4', fontWeight: 700 }}>{t.name}</code>
                <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginTop: 4 }}>{t.desc}</div>
              </div>
            ))}
          </Stack>
        </Card>
      </Stack>
    );
  }

  // 3. LLMS.TXT
  if (topicId === 'llms-txt') {
    return (
      <Stack direction="column" gap="xl" style={{ maxWidth: 960, margin: '0 auto', paddingBottom: 64 }}>
        <Card variant="bordered" style={{ padding: '32px 36px', backgroundColor: 'var(--color-surface)', borderRadius: 16 }}>
          <Stack direction="row" align="center" gap="sm" style={{ marginBottom: 10 }}>
            <Badge variant="success">NEW</Badge>
            <Badge variant="primary">Machine-Readable AI Context</Badge>
          </Stack>
          <Text as="h1" variant="heading" size="xl" weight="bold" style={{ fontSize: 32, margin: '0 0 12px 0' }}>
            llms.txt Specification
          </Text>
          <Text size="md" color="secondary" style={{ lineHeight: 1.6, margin: 0 }}>
            Spectra UI provides machine-readable documentation endpoints adhering to the <code>/llms.txt</code> standard, allowing coding LLMs to ingest complete API definitions and component contracts in structured markdown.
          </Text>
        </Card>

        <Card variant="bordered" style={{ padding: 24, borderRadius: 14, backgroundColor: 'var(--color-surface)' }}>
          <Text as="h3" variant="heading" size="md" weight="bold" style={{ margin: '0 0 10px 0' }}>
            Available Endpoints
          </Text>
          <Stack direction="column" gap="md">
            <div style={{ padding: '12px 16px', borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <code style={{ fontSize: 13, color: '#0078D4', fontWeight: 700 }}>https://spectra-ui.winplaybox.in/llms.txt</code>
                <Badge variant="primary" size="sm">Summary</Badge>
              </div>
              <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginTop: 6 }}>
                Contains a concise overview of all 62 components, tokens, hooks, and quick installation guides.
              </div>
            </div>
            <div style={{ padding: '12px 16px', borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <code style={{ fontSize: 13, color: '#0078D4', fontWeight: 700 }}>https://spectra-ui.winplaybox.in/llms-full.txt</code>
                <Badge variant="info" size="sm">Full API</Badge>
              </div>
              <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginTop: 6 }}>
                Contains the complete TypeScript contracts, all props, CSS classes, and multi-platform implementations.
              </div>
            </div>
          </Stack>
        </Card>
      </Stack>
    );
  }

  // 4. EXAMPLE PROJECTS & TEMPLATES
  if (topicId === 'example-projects' || topicId === 'templates') {
    return (
      <Stack direction="column" gap="xl" style={{ maxWidth: 960, margin: '0 auto', paddingBottom: 64 }}>
        <Card variant="bordered" style={{ padding: '32px 36px', backgroundColor: 'var(--color-surface)', borderRadius: 16 }}>
          <Stack direction="row" align="center" gap="sm" style={{ marginBottom: 10 }}>
            <Badge variant="primary">Starters & Boilerplates</Badge>
          </Stack>
          <Text as="h1" variant="heading" size="xl" weight="bold" style={{ fontSize: 32, margin: '0 0 12px 0' }}>
            {topicId === 'templates' ? 'Production Templates' : 'Example Projects'}
          </Text>
          <Text size="md" color="secondary" style={{ lineHeight: 1.6, margin: 0 }}>
            Kickstart your next enterprise application with pre-configured project templates featuring Spectra UI, TypeScript, and modern frameworks.
          </Text>
        </Card>

        <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
          {[
            { title: 'Vite + React 19 Starter', desc: 'Fastest setup with hot module reloading and tokens pre-imported.', tag: 'Vite' },
            { title: 'Next.js 15 App Router', desc: 'Server components, dynamic theme switching, and optimized font loading.', tag: 'Next.js' },
            { title: 'React Native Expo Starter', desc: 'Mobile ready starter targeting iOS and Android with unified design tokens.', tag: 'Expo' },
            { title: 'Enterprise Admin Dashboard', desc: 'Complete layout with sidebar navigation, DataGrid, and metrics cards.', tag: 'Template' },
          ].map((item) => (
            <Card key={item.title} variant="bordered" style={{ padding: 20, borderRadius: 12, backgroundColor: 'var(--color-surface)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 14 }}>
              <div>
                <Badge variant="primary" size="sm" style={{ marginBottom: 8 }}>{item.tag}</Badge>
                <Text as="h3" variant="heading" size="sm" weight="bold" style={{ margin: '0 0 6px 0' }}>{item.title}</Text>
                <Text size="xs" color="secondary" style={{ lineHeight: 1.5 }}>{item.desc}</Text>
              </div>
              <Button size="sm" variant="secondary" onClick={() => window.open('https://github.com/Winplaybox/spectra-ui', '_blank')}>
                Clone on GitHub →
              </Button>
            </Card>
          ))}
        </Box>
      </Stack>
    );
  }

  // 5. ACCESSIBILITY
  if (topicId === 'accessibility') {
    return (
      <Stack direction="column" gap="xl" style={{ maxWidth: 960, margin: '0 auto', paddingBottom: 64 }}>
        <Card variant="bordered" style={{ padding: '32px 36px', backgroundColor: 'var(--color-surface)', borderRadius: 16 }}>
          <Stack direction="row" align="center" gap="sm" style={{ marginBottom: 10 }}>
            <Badge variant="success">WCAG 2.1 AA</Badge>
            <Badge variant="primary">WAI-ARIA APG</Badge>
          </Stack>
          <Text as="h1" variant="heading" size="xl" weight="bold" style={{ fontSize: 32, margin: '0 0 12px 0' }}>
            Accessibility Guarantees
          </Text>
          <Text size="md" color="secondary" style={{ lineHeight: 1.6, margin: 0 }}>
            Accessibility is not an afterthought in Spectra UI. Every component is rigorously built against W3C WAI-ARIA Authoring Practices and verified for keyboard, screen reader, and high-contrast usability.
          </Text>
        </Card>

        <Card variant="bordered" style={{ padding: 24, borderRadius: 14, backgroundColor: 'var(--color-surface)' }}>
          <Text as="h3" variant="heading" size="md" weight="bold" style={{ margin: '0 0 12px 0' }}>
            Core Invariants
          </Text>
          <Stack direction="column" gap="md">
            {[
              { title: 'Double-Ring Focus Visible', desc: 'High-contrast 2px focus indicators that only appear upon keyboard navigation, never clicking.' },
              { title: 'Roving Tabindex Navigation', desc: 'Complex compound components (Tabs, RadioGroup, TreeView, Menu) manage keyboard focus using standard arrow key navigation.' },
              { title: 'Disabled Focusable', desc: 'Buttons and inputs support disabledFocusable so screen readers can discover actions and announce why they are unavailable.' },
              { title: 'ARIA Live Announcements', desc: 'Form validation errors and status updates dispatch to screen readers without interrupting user typing.' },
            ].map((inv) => (
              <div key={inv.title} style={{ padding: '12px 16px', borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-subtle)' }}>
                <Text size="sm" weight="bold" color="primary">{inv.title}</Text>
                <Text size="xs" color="secondary" style={{ marginTop: 4, lineHeight: 1.5 }}>{inv.desc}</Text>
              </div>
            ))}
          </Stack>
        </Card>
      </Stack>
    );
  }

  // 6. FAQS, SUPPORT, VERSIONS, LEARN, DESIGN RESOURCES (Fallback / Generic View)
  return (
    <Stack direction="column" gap="xl" style={{ maxWidth: 960, margin: '0 auto', paddingBottom: 64 }}>
      <Card variant="bordered" style={{ padding: '32px 36px', backgroundColor: 'var(--color-surface)', borderRadius: 16 }}>
        <Stack direction="row" align="center" gap="sm" style={{ marginBottom: 10 }}>
          <Badge variant="primary">Documentation</Badge>
          <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Spectra UI v{CURRENT_VERSION}</span>
        </Stack>
        <Text as="h1" variant="heading" size="xl" weight="bold" style={{ fontSize: 32, margin: '0 0 12px 0', textTransform: 'capitalize' }}>
          {topicId.replace(/-/g, ' ')}
        </Text>
        <Text size="md" color="secondary" style={{ lineHeight: 1.6, margin: 0 }}>
          Essential documentation and developer resources for building multi-platform applications with Spectra UI.
        </Text>
      </Card>

      {topicId === 'versions' && (
        <Card variant="bordered" style={{ padding: 24, borderRadius: 14, backgroundColor: 'var(--color-surface)' }}>
          <Text as="h3" variant="heading" size="md" weight="bold" style={{ margin: '0 0 14px 0' }}>
            Release History & Changelog
          </Text>
          <Stack direction="column" gap="md">
            {ALL_RELEASES.map((rel: VersionRelease) => (
              <div key={rel.version} style={{ padding: '14px 18px', borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Text size="md" weight="bold" color="primary">{rel.version}</Text>
                    {rel.status === 'latest' && <Badge variant="success" size="sm">LATEST</Badge>}
                  </div>
                  <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>{rel.releaseDate}</span>
                </div>
                <div style={{ fontSize: 12.5, color: 'var(--color-text-secondary)', marginTop: 8 }}>
                  {rel.highlights.join(' · ')}
                </div>
              </div>
            ))}
          </Stack>
        </Card>
      )}

      {topicId === 'support' && (
        <Card variant="bordered" style={{ padding: 24, borderRadius: 14, backgroundColor: 'var(--color-surface)' }}>
          <Text as="h3" variant="heading" size="md" weight="bold" style={{ margin: '0 0 10px 0' }}>
            Community & Issue Reporting
          </Text>
          <Text size="sm" color="secondary" style={{ margin: '0 0 16px 0', lineHeight: 1.6 }}>
            Report bugs, request new component features, or join community discussions on GitHub.
          </Text>
          <Stack direction="row" gap="md">
            <Button variant="primary" onClick={() => window.open('https://github.com/Winplaybox/spectra-ui/issues/new/choose', '_blank')}>
              Open GitHub Issue
            </Button>
            <Button variant="secondary" onClick={() => window.open('https://github.com/Winplaybox/spectra-ui/discussions', '_blank')}>
              GitHub Discussions
            </Button>
          </Stack>
        </Card>
      )}

      {topicId === 'faqs' && (
        <Card variant="bordered" style={{ padding: 24, borderRadius: 14, backgroundColor: 'var(--color-surface)' }}>
          <Text as="h3" variant="heading" size="md" weight="bold" style={{ margin: '0 0 14px 0' }}>
            Frequently Asked Questions
          </Text>
          <Stack direction="column" gap="md">
            {[
              { q: 'Is Spectra UI fully tree-shakeable?', a: 'Yes. All packages are built with sideEffects: false. Unused components will be removed from your production bundle.' },
              { q: 'Can I use Spectra UI with Tailwind CSS?', a: 'Yes! Spectra UI CSS variables can be directly integrated into your tailwind.config.js theme colors.' },
              { q: 'Does Spectra UI support React Native out of the box?', a: 'Yes. @winplaybox/react-native provides platform-correct implementations with native touch targets for Android (48dp) and iOS (44pt).' },
            ].map((faq) => (
              <div key={faq.q} style={{ padding: '12px 16px', borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-subtle)' }}>
                <Text size="sm" weight="bold" color="primary">{faq.q}</Text>
                <Text size="xs" color="secondary" style={{ marginTop: 4, lineHeight: 1.5 }}>{faq.a}</Text>
              </div>
            ))}
          </Stack>
        </Card>
      )}
    </Stack>
  );
};

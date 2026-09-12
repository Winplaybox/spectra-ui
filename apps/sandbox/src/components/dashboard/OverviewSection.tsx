import React, { useState } from 'react';
import { Button, Card, Badge } from '@spectra/react';
import { CheckIcon, ExternalLinkIcon, ComponentIcon, PaletteIcon, SparklesIcon } from '@spectra/icons';
import { navigate } from '../../utils/router';
import { CircuitAnimation } from './CircuitAnimation';

export const OverviewSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const installCode = `pnpm add @spectra/react @spectra/tokens @spectra/icons`;

  const setupSnippet = `import React from 'react';
import ReactDOM from 'react-dom/client';
import '@spectra/tokens/css';
import { SpectraProvider, Button } from '@spectra/react';

function App() {
  return (
    <SpectraProvider defaultColorScheme="light">
      <Button variant="primary">Hello Spectra</Button>
    </SpectraProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);`;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const componentLinks = [
    { id: 'button', name: 'Button', category: 'Actions', desc: 'Trigger actions with primary, secondary, subtle, and danger styles.' },
    { id: 'accordion', name: 'Accordion', category: 'Data Display', desc: 'Progressively disclose content to reduce cognitive load.' },
    { id: 'text-input', name: 'TextInput', category: 'Form', desc: 'Form field with left/right icons, helper text, and error states.' },
    { id: 'select', name: 'Select', category: 'Form', desc: 'Dropdown menu to choose options in compact form surfaces.' },
    { id: 'checkbox', name: 'Checkbox', category: 'Form', desc: 'Select one or multiple options with custom styled indicator.' },
    { id: 'radio', name: 'Radio', category: 'Form', desc: 'Mutually exclusive selection within a group.' },
    { id: 'switch', name: 'Switch', category: 'Form', desc: 'Instant binary setting toggles for settings and preferences.' },
    { id: 'badge', name: 'Badge', category: 'Feedback', desc: 'Status indicators with solid semantic color variants.' },
    { id: 'card', name: 'Card', category: 'Surfaces', desc: 'Container for grouping related content and actions.' },
    { id: 'tabs', name: 'Tabs', category: 'Navigation', desc: 'Organize content across alternate views in the same pane.' },
    { id: 'dialog', name: 'Dialog', category: 'Overlay', desc: 'Modal window requiring immediate user interaction.' },
    { id: 'tooltip', name: 'Tooltip', category: 'Overlay', desc: 'Helpful context on hover or focus with W3C APG compliance.' },
    { id: 'avatar', name: 'Avatar', category: 'Data Display', desc: 'User and entity profile visuals with fallback initials.' },
    { id: 'list', name: 'List', category: 'Data Display', desc: 'Structured rows with leading icons and action controls.' },
  ];

  return (
    <div style={{ maxWidth: 1040, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
      {/* Hero Header Card */}
      <Card
        variant="bordered"
        style={{
          padding: '32px 36px',
          backgroundColor: 'var(--color-surface)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 32,
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 'var(--radius-component-lg, 16px)',
        }}
      >
        <div style={{ flex: 1, maxWidth: 680, zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <Badge variant="primary">Design System</Badge>
            <Badge variant="info">Production Ready</Badge>
            <span style={{ fontSize: 13, color: 'var(--color-text-muted)', fontWeight: 500 }}>Version 0.1.0</span>
          </div>
          <h1
            style={{
              fontSize: 36,
              fontWeight: 800,
              letterSpacing: '-0.03em',
              margin: '0 0 12px 0',
              color: 'var(--color-text-primary)',
            }}
          >
            Spectra UI Documentation
          </h1>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: 'var(--color-text-secondary)',
              margin: '0 0 20px 0',
            }}
          >
            A fast, accessible, and token-driven design system with clean 2D flat aesthetics, zero runtime CSS overhead, multi-platform React + React Native support, and 12,253 on-demand icons.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <Button variant="primary" size="md" onClick={() => navigate('/components')}>
              Explore 14 Components
            </Button>
            <Button variant="secondary" size="md" onClick={() => navigate('/cross-platform')}>
              Cross-Platform & Pipeline
            </Button>
          </div>
        </div>

        {/* Decorative Circuit Stream Engine */}
        <div
          style={{
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px 20px',
            background: 'var(--color-surface-raised, rgba(0,0,0,0.02))',
            borderRadius: 'var(--radius-component-md, 12px)',
            border: '1px solid var(--color-border-subtle)',
          }}
        >
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', marginBottom: 8 }}>
            Design Token Bus
          </span>
          <CircuitAnimation
            width={160}
            height={130}
            strokeColor="var(--color-border-default)"
            pulseColor="var(--color-action-primary)"
            duration={3}
          />
          <span style={{ fontSize: 10, color: 'var(--color-text-muted)', marginTop: 6, fontFamily: 'monospace' }}>
            web ⇄ tokens ⇄ native
          </span>
        </div>
      </Card>

      {/* Quick Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
        }}
      >
        <div
          onClick={() => navigate('/components/button')}
          style={{
            padding: 24,
            borderRadius: 'var(--radius-component-md)',
            border: '1px solid var(--color-border-default)',
            backgroundColor: 'var(--color-surface-raised)',
            cursor: 'pointer',
            transition: 'border-color 0.15s ease',
          }}
        >
          <div style={{ marginBottom: 12 }}>
            <ComponentIcon size={24} color="var(--color-action-primary)" />
          </div>
          <h3 style={{ margin: '0 0 6px 0', fontSize: 17, color: 'var(--color-text-primary)' }}>
            14 Core Components
          </h3>
          <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            Buttons, Accordion, Inputs, Dialogs, and Badges with live interactive prop controls and CodeSandbox integration.
          </p>
        </div>

        <div
          onClick={() => navigate('/tokens/colors')}
          style={{
            padding: 24,
            borderRadius: 'var(--radius-component-md)',
            border: '1px solid var(--color-border-default)',
            backgroundColor: 'var(--color-surface-raised)',
            cursor: 'pointer',
            transition: 'border-color 0.15s ease',
          }}
        >
          <div style={{ marginBottom: 12 }}>
            <PaletteIcon size={24} color="var(--color-action-primary)" />
          </div>
          <h3 style={{ margin: '0 0 6px 0', fontSize: 17, color: 'var(--color-text-primary)' }}>
            Flat Design Tokens
          </h3>
          <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            Curated Flat UI color swatches, 4px modular spacing scale, and typography ladder with one-click CSS variable copy.
          </p>
        </div>

        <div
          onClick={() => navigate('/icons')}
          style={{
            padding: 24,
            borderRadius: 'var(--radius-component-md)',
            border: '1px solid var(--color-border-default)',
            backgroundColor: 'var(--color-surface-raised)',
            cursor: 'pointer',
            transition: 'border-color 0.15s ease',
          }}
        >
          <div style={{ marginBottom: 12 }}>
            <SparklesIcon size={24} color="#818CF8" />
          </div>
          <h3 style={{ margin: '0 0 6px 0', fontSize: 17, color: 'var(--color-text-primary)' }}>
            12,253 Icons Catalog
          </h3>
          <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            Filled, outlined, rounded, sharp, and two-tone vector icons with category-level code splitting and lazy loading.
          </p>
        </div>
      </div>

      {/* Installation Block */}
      <div>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            margin: '0 0 16px 0',
            color: 'var(--color-text-primary)',
          }}
        >
          Quick Start Installation
        </h2>

        {/* Command box */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 20px',
            backgroundColor: '#1E1E24',
            borderRadius: 'var(--radius-component-md)',
            marginBottom: 16,
          }}
        >
          <code style={{ color: '#F8F8F2', fontSize: 14, fontFamily: 'monospace' }}>
            {installCode}
          </code>
          <button
            onClick={() => handleCopy(installCode)}
            style={{
              padding: '6px 12px',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              border: 'none',
              borderRadius: 4,
              color: '#FFFFFF',
              cursor: 'pointer',
              fontSize: 12,
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            {copied ? <CheckIcon size={14} /> : null}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>

        {/* Code Example */}
        <div
          style={{
            border: '1px solid var(--color-border-default)',
            borderRadius: 'var(--radius-component-md)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              padding: '10px 16px',
              backgroundColor: 'var(--color-surface-raised)',
              borderBottom: '1px solid var(--color-border-subtle)',
              fontSize: 12,
              fontWeight: 600,
              color: 'var(--color-text-secondary)',
            }}
          >
            App Setup (React 18 / 19)
          </div>
          <pre
            style={{
              margin: 0,
              padding: '20px 24px',
              backgroundColor: '#1E1E24',
              color: '#F8F8F2',
              fontSize: 13,
              fontFamily: 'monospace',
              lineHeight: 1.6,
              overflowX: 'auto',
            }}
          >
            <code>{setupSnippet}</code>
          </pre>
        </div>
      </div>

      {/* Component Directory */}
      <div>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            margin: '0 0 16px 0',
            color: 'var(--color-text-primary)',
          }}
        >
          Components Directory
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 16,
          }}
        >
          {componentLinks.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/components/${item.id}`)}
              style={{
                padding: '16px 20px',
                borderRadius: 'var(--radius-component-md)',
                border: '1px solid var(--color-border-default)',
                backgroundColor: 'var(--color-surface)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.15s ease',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontWeight: 600, fontSize: 15, color: 'var(--color-text-primary)' }}>
                    {item.name}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      color: 'var(--color-text-muted)',
                      backgroundColor: 'var(--color-surface-raised)',
                      padding: '2px 6px',
                      borderRadius: 4,
                    }}
                  >
                    {item.category}
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                  {item.desc}
                </p>
              </div>

              <div
                style={{
                  marginTop: 14,
                  fontSize: 12,
                  fontWeight: 600,
                  color: 'var(--color-action-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                }}
              >
                <span>View component</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

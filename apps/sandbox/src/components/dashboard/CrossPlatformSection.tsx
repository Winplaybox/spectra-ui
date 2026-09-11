import React, { useState } from 'react';
import { Badge, Button } from '@spectra/react';
import { CheckIcon, PaletteIcon, SparklesIcon, SmartphoneIcon } from '@spectra/icons';

export const CrossPlatformSection: React.FC = () => {
  const [platformTab, setPlatformTab] = useState<'web' | 'native'>('web');
  const [copied, setCopied] = useState(false);

  const webCode = `// Web Implementation (React 18/19)
import '@spectra/tokens/css';
import { Button, TextInput, Stack, Card } from '@spectra/react';
import { CheckIcon } from '@spectra/icons';

export const LoginScreen = () => {
  return (
    <Card variant="bordered">
      <Stack direction="column" gap="md">
        <TextInput label="Email Address" placeholder="alex@company.com" />
        <Button variant="primary" icon={<CheckIcon size={16} />}>
          Sign In
        </Button>
      </Stack>
    </Card>
  );
};`;

  const nativeCode = `// Mobile Native Implementation (React Native / iOS & Android)
import React from 'react';
import { Button, TextInput, Stack, Card } from '@spectra/react-native';
import { CheckIcon } from '@spectra/icons';

export const LoginScreen = () => {
  return (
    <Card variant="bordered">
      <Stack direction="column" gap="md">
        <TextInput label="Email Address" placeholder="alex@company.com" />
        <Button variant="primary" icon={<CheckIcon size={16} />}>
          Sign In
        </Button>
      </Stack>
    </Card>
  );
};`;

  const copy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ maxWidth: 1040, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <Badge variant="primary">Architecture</Badge>
          <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>Universal Design System</span>
        </div>
        <h1
          style={{
            fontSize: 34,
            fontWeight: 800,
            letterSpacing: '-0.025em',
            margin: '0 0 12px 0',
            color: 'var(--color-text-primary)',
          }}
        >
          Cross-Platform: Web & Mobile Native
        </h1>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: 'var(--color-text-secondary)',
            margin: 0,
            maxWidth: 760,
          }}
        >
          Spectra UI is engineered from the ground up as a universal design system. The exact same token contract and headless primitives power both responsive web applications and native iOS/Android mobile apps.
        </p>
      </div>

      {/* 3 Pillars of Cross-Platform Architecture */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20,
        }}
      >
        <div
          style={{
            padding: 24,
            borderRadius: 'var(--radius-component-md)',
            border: '1px solid var(--color-border-default)',
            backgroundColor: 'var(--color-surface)',
          }}
        >
          <div style={{ marginBottom: 12 }}>
            <PaletteIcon size={26} color="var(--color-action-primary)" />
          </div>
          <h3 style={{ margin: '0 0 8px 0', fontSize: 17 }}>1. Universal Tokens</h3>
          <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            <code>@spectra/tokens</code> compiles into CSS custom variables for Web and strictly typed JavaScript objects for React Native <code>StyleSheet</code>.
          </p>
        </div>

        <div
          style={{
            padding: 24,
            borderRadius: 'var(--radius-component-md)',
            border: '1px solid var(--color-border-default)',
            backgroundColor: 'var(--color-surface)',
          }}
        >
          <div style={{ marginBottom: 12 }}>
            <SparklesIcon size={26} color="#818CF8" />
          </div>
          <h3 style={{ margin: '0 0 8px 0', fontSize: 17 }}>2. Shared Headless Logic</h3>
          <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            <code>@spectra/primitives</code> houses state machines (controllable state, disclosure, focus) without any DOM assumptions, executing identically on Node, Web, and React Native runtimes.
          </p>
        </div>

        <div
          style={{
            padding: 24,
            borderRadius: 'var(--radius-component-md)',
            border: '1px solid var(--color-border-default)',
            backgroundColor: 'var(--color-surface)',
          }}
        >
          <div style={{ marginBottom: 12 }}>
            <SmartphoneIcon size={26} color="var(--color-semantic-success, #16A34A)" />
          </div>
          <h3 style={{ margin: '0 0 8px 0', fontSize: 17 }}>3. Identical API Surface</h3>
          <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            Both <code>@spectra/react</code> and <code>@spectra/react-native</code> expose matching component signatures, reducing context switching across frontend and mobile teams.
          </p>
        </div>
      </div>

      {/* Code Comparison Switcher */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>
            Unified Component Code Comparison
          </h2>
          <div style={{ display: 'flex', gap: 6, backgroundColor: 'var(--color-surface-raised)', padding: 3, borderRadius: 6 }}>
            <button
              onClick={() => setPlatformTab('web')}
              style={{
                padding: '6px 14px',
                borderRadius: 4,
                border: 'none',
                backgroundColor: platformTab === 'web' ? 'var(--color-surface)' : 'transparent',
                color: platformTab === 'web' ? 'var(--color-action-primary)' : 'var(--color-text-muted)',
                fontWeight: 600,
                fontSize: 13,
                cursor: 'pointer',
              }}
            >
              Web (React)
            </button>
            <button
              onClick={() => setPlatformTab('native')}
              style={{
                padding: '6px 14px',
                borderRadius: 4,
                border: 'none',
                backgroundColor: platformTab === 'native' ? 'var(--color-surface)' : 'transparent',
                color: platformTab === 'native' ? 'var(--color-action-primary)' : 'var(--color-text-muted)',
                fontWeight: 600,
                fontSize: 13,
                cursor: 'pointer',
              }}
            >
              Mobile Native (React Native)
            </button>
          </div>
        </div>

        <div
          style={{
            borderRadius: 'var(--radius-component-md)',
            border: '1px solid var(--color-border-default)',
            backgroundColor: '#1E1E24',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              padding: '10px 16px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: '#A1A1AA',
              fontSize: 12,
            }}
          >
            <span>{platformTab === 'web' ? '@spectra/react (Web App)' : '@spectra/react-native (iOS & Android)'}</span>
            <button
              onClick={() => copy(platformTab === 'web' ? webCode : nativeCode)}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: 4,
                color: '#FFFFFF',
                padding: '4px 10px',
                cursor: 'pointer',
                fontSize: 12,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              {copied ? <CheckIcon size={12} /> : null}
              <span>{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>
          </div>
          <pre
            style={{
              margin: 0,
              padding: '20px 24px',
              fontSize: 13,
              fontFamily: 'monospace',
              color: '#F8F8F2',
              lineHeight: 1.6,
              overflowX: 'auto',
            }}
          >
            <code>{platformTab === 'web' ? webCode : nativeCode}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

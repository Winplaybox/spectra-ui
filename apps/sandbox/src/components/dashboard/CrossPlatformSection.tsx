import React, { useState } from 'react';
import { Badge, Button, Tabs, TabList, Tab, Card } from '@spectra/react';
import { CheckIcon, PaletteIcon, SparklesIcon, SmartphoneIcon } from '@spectra/icons';
import { CircuitAnimation } from './CircuitAnimation';

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

      {/* Universal Pipeline Architecture with Circuit & Network Animation */}
      <Card
        variant="bordered"
        style={{
          padding: '24px 28px',
          backgroundColor: 'var(--color-surface)',
          borderRadius: 14,
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 24,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div style={{ flex: '1 1 360px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--color-action-primary)' }}>
              NETWORK CIRCUIT PULSE
            </span>
          </div>
          <h3 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 8px 0', color: 'var(--color-text-primary)' }}>
            Real-Time Token & Component Stream
          </h3>
          <p style={{ fontSize: 13.5, color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
            The animated circuit traces below visualize the continuous data flow between the core token engine,
            shared headless state machines, and universal runtime outputs across Web (CSS custom variables) and
            Mobile Native (StyleSheet objects).
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <CircuitAnimation width={120} height={96} duration="3s" pulseColor="#007FFF" />
          <CircuitAnimation width={120} height={96} duration="2.4s" pulseColor="#10B981" style={{ transform: 'scaleX(-1)' }} />
        </div>
      </Card>

      {/* Code Comparison Switcher */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>
            Unified Component Code Comparison
          </h2>
          <Tabs variant="pills" size="sm" value={platformTab} onChange={(val) => setPlatformTab(val as 'web' | 'native')}>
            <TabList style={{ gap: 4 }}>
              <Tab value="web" style={{ fontSize: 13, fontWeight: 600 }}>
                Web (React)
              </Tab>
              <Tab value="native" style={{ fontSize: 13, fontWeight: 600 }}>
                Mobile Native (React Native)
              </Tab>
            </TabList>
          </Tabs>
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

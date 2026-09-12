import React, { useState } from 'react';
import { Badge, Button, Tabs, TabList, Tab, Card } from '@spectra/react';
import { CheckIcon, PaletteIcon, SparklesIcon, SmartphoneIcon } from '@spectra/icons';
import { CircuitAnimation } from './CircuitAnimation';
import { PlatformCompatibilityMatrix } from './PlatformCompatibilityMatrix';
import { PlatformIcon } from './PlatformIcon';
import { usePlatform } from '../../context/PlatformContext';
import { Platform } from '../../data/platformData';

export const CrossPlatformSection: React.FC = () => {
  const { currentPlatform, setPlatform } = usePlatform();
  const [platformTab, setPlatformTab] = useState<Platform>(currentPlatform);
  const [copied, setCopied] = useState(false);

  const snippets: Record<Platform, { title: string; pkg: string; code: string }> = {
    web: {
      title: 'Web Implementation (React DOM 18/19)',
      pkg: '@spectra/react',
      code: `// Web Implementation (React DOM 18/19)
import '@spectra/tokens/css';
import { Button, TextInput, Stack, Card } from '@spectra/react';
import { CheckIcon } from '@spectra/icons';

export const WebLoginScreen = () => {
  return (
    <Card variant="bordered">
      <Stack direction="column" gap="md">
        <TextInput label="Email Address" placeholder="alex@company.com" />
        <Button variant="primary" icon={<CheckIcon size={16} />} onClick={() => console.log('Web login')}>
          Sign In
        </Button>
      </Stack>
    </Card>
  );
};`,
    },
    ios: {
      title: 'Apple iOS Implementation (Swift & React Native)',
      pkg: '@spectra/react-native',
      code: `// Apple iOS React Native Implementation (Apple HIG 44pt Target)
import React from 'react';
import { Button, TextInput, Stack, Card } from '@spectra/react-native';
import { CheckIcon } from '@spectra/icons';

export const IOSLoginScreen = () => {
  return (
    <Card variant="bordered">
      <Stack direction="column" gap="md">
        <TextInput label="Email Address" placeholder="alex@company.com" />
        <Button
          variant="primary"
          icon={<CheckIcon size={16} />}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          hapticFeedback={true}
          onPress={() => console.log('iOS tap triggered')}
        >
          Sign In
        </Button>
      </Stack>
    </Card>
  );
};`,
    },
    android: {
      title: 'Google Android Implementation (Material 3 & React Native)',
      pkg: '@spectra/react-native',
      code: `// Google Android React Native Implementation (Material 48dp Target)
import React from 'react';
import { Button, TextInput, Stack, Card } from '@spectra/react-native';
import { CheckIcon } from '@spectra/icons';

export const AndroidLoginScreen = () => {
  return (
    <Card variant="bordered">
      <Stack direction="column" gap="md">
        <TextInput label="Email Address" placeholder="alex@company.com" />
        <Button
          variant="primary"
          icon={<CheckIcon size={16} />}
          android_ripple={{ color: 'rgba(255, 255, 255, 0.24)' }}
          elevation={2}
          onPress={() => console.log('Android tap triggered')}
        >
          Sign In
        </Button>
      </Stack>
    </Card>
  );
};`,
    },
    windows: {
      title: 'Microsoft Windows Implementation (WinUI 3 / RNW)',
      pkg: '@spectra/react-native-windows',
      code: `// Microsoft Windows RNW Implementation (WinUI 3 / Acrylic Surface)
import React from 'react';
import { Button, TextInput, Stack, Card } from '@spectra/react-native-windows';
import { CheckIcon } from '@spectra/icons';

export const WindowsLoginScreen = () => {
  return (
    <Card variant="bordered" highContrastSupport={true}>
      <Stack direction="column" gap="md">
        <TextInput label="Email Address" placeholder="alex@company.com" />
        <Button
          variant="primary"
          icon={<CheckIcon size={16} />}
          acceleratorKey="Enter"
          tooltip="Sign In (Press Enter)"
          onPress={() => console.log('Windows accelerator triggered')}
        >
          Sign In
        </Button>
      </Stack>
    </Card>
  );
};`,
    },
    macos: {
      title: 'Apple macOS Implementation (AppKit / SwiftUI / RN macOS)',
      pkg: '@spectra/react-native-macos',
      code: `// Apple macOS RN Implementation (macOS Sequoia / Vibrancy Material)
import React from 'react';
import { Button, TextInput, Stack, Card } from '@spectra/react-native-macos';
import { CheckIcon } from '@spectra/icons';

export const MacOSLoginScreen = () => {
  return (
    <Card variant="bordered" enableVibrancy={true}>
      <Stack direction="column" gap="md">
        <TextInput label="Email Address" placeholder="alex@company.com" />
        <Button
          variant="primary"
          icon={<CheckIcon size={16} />}
          keyboardShortcut={{ key: 'return', modifiers: ['cmd'] }}
          enableHoverVisuals={true}
          tooltip="Sign In (⌘Enter)"
          onPress={() => console.log('macOS action triggered')}
        >
          Sign In
        </Button>
      </Stack>
    </Card>
  );
};`,
    },
  };

  const copy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ maxWidth: 1040, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
      {/* 1. Hero Header Card */}
      <Card
        variant="bordered"
        style={{
          padding: '32px 36px',
          backgroundColor: 'var(--color-surface)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          borderRadius: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <Badge variant="primary">Architecture</Badge>
          <span style={{ fontSize: 13, color: 'var(--color-text-muted)', fontWeight: 500 }}>Universal Design System</span>
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
            maxWidth: 780,
          }}
        >
          Spectra UI is engineered from the ground up as a universal design system. The exact same token contract and headless primitives power both responsive web applications and native iOS/Android mobile apps.
        </p>
      </Card>

      {/* 2. 3 Pillars of Cross-Platform Architecture */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20,
        }}
      >
        <Card
          variant="bordered"
          style={{
            padding: 24,
            borderRadius: 'var(--radius-component-md)',
            backgroundColor: 'var(--color-surface)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          }}
        >
          <div style={{ marginBottom: 12 }}>
            <PaletteIcon size={26} color="var(--color-action-primary)" />
          </div>
          <h3 style={{ margin: '0 0 8px 0', fontSize: 17, fontWeight: 700, color: 'var(--color-text-primary)' }}>
            1. Universal Tokens
          </h3>
          <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            <code>@spectra/tokens</code> compiles into CSS custom variables for Web and strictly typed JavaScript objects for React Native <code>StyleSheet</code>.
          </p>
        </Card>

        <Card
          variant="bordered"
          style={{
            padding: 24,
            borderRadius: 'var(--radius-component-md)',
            backgroundColor: 'var(--color-surface)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          }}
        >
          <div style={{ marginBottom: 12 }}>
            <SparklesIcon size={26} color="#818CF8" />
          </div>
          <h3 style={{ margin: '0 0 8px 0', fontSize: 17, fontWeight: 700, color: 'var(--color-text-primary)' }}>
            2. Shared Headless Logic
          </h3>
          <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            <code>@spectra/primitives</code> houses state machines (controllable state, disclosure, focus) without any DOM assumptions, executing identically on Node, Web, and React Native runtimes.
          </p>
        </Card>

        <Card
          variant="bordered"
          style={{
            padding: 24,
            borderRadius: 'var(--radius-component-md)',
            backgroundColor: 'var(--color-surface)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          }}
        >
          <div style={{ marginBottom: 12 }}>
            <SmartphoneIcon size={26} color="var(--color-semantic-success, #16A34A)" />
          </div>
          <h3 style={{ margin: '0 0 8px 0', fontSize: 17, fontWeight: 700, color: 'var(--color-text-primary)' }}>
            3. Identical API Surface
          </h3>
          <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            Both <code>@spectra/react</code> and <code>@spectra/react-native</code> expose matching component signatures, reducing context switching across frontend and mobile teams.
          </p>
        </Card>
      </div>

      {/* 3. Real-Time Token & Component Stream Pipeline Card */}
      <Card
        variant="bordered"
        style={{
          padding: '24px 28px',
          backgroundColor: 'var(--color-surface)',
          borderRadius: 16,
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

      {/* 4. Unified Component Code Comparison Card */}
      <Card
        variant="bordered"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderRadius: 16,
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          overflow: 'hidden',
        }}
      >
        {/* Header Bar with Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '18px 24px',
            borderBottom: '1px solid var(--color-border-subtle)',
            backgroundColor: 'var(--color-surface-raised)',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 800, margin: 0, color: 'var(--color-text-primary)', letterSpacing: '-0.015em' }}>
              Unified Component Code Comparison
            </h2>
            <span style={{ fontSize: 12.5, color: 'var(--color-text-muted)', marginTop: 2, display: 'block' }}>
              Zero mental tax: import identically across web and mobile native targets
            </span>
          </div>
          <Tabs variant="pills" size="sm" value={platformTab} onChange={(val) => {
            const p = val as Platform;
            setPlatformTab(p);
            setPlatform(p);
          }}>
            <TabList style={{ gap: 4 }}>
              <Tab value="web" style={{ fontSize: 13, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <PlatformIcon platform="web" size={14} />
                <span>Web (React)</span>
              </Tab>
              <Tab value="ios" style={{ fontSize: 13, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <PlatformIcon platform="ios" size={14} />
                <span>iOS (Swift/RN)</span>
              </Tab>
              <Tab value="android" style={{ fontSize: 13, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <PlatformIcon platform="android" size={14} />
                <span>Android (Compose)</span>
              </Tab>
              <Tab value="windows" style={{ fontSize: 13, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <PlatformIcon platform="windows" size={14} />
                <span>Windows (WinUI 3)</span>
              </Tab>
              <Tab value="macos" style={{ fontSize: 13, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <PlatformIcon platform="macos" size={14} />
                <span>macOS (Sequoia)</span>
              </Tab>
            </TabList>
          </Tabs>
        </div>

        {/* Code Content */}
        <div
          style={{
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
            <span>{snippets[platformTab].pkg} · {snippets[platformTab].title}</span>
            <button
              onClick={() => copy(snippets[platformTab].code)}
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
              fontFamily: "'JetBrains Mono', Consolas, monospace",
              color: '#F8F8F2',
              lineHeight: 1.6,
              overflowX: 'auto',
            }}
          >
            <code>{snippets[platformTab].code}</code>
          </pre>
        </div>
      </Card>

      {/* 5. Real-Time Multi-Platform Compatibility Matrix */}
      <PlatformCompatibilityMatrix
        componentName="Universal Design System"
        componentId="button"
        onSelectPlatform={(p) => {
          setPlatformTab(p);
          setPlatform(p);
        }}
      />
    </div>
  );
};

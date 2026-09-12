import React, { useState } from 'react';
import { Badge, Card, Tabs, TabList, Tab } from '@spectra/react';
import {
  CheckIcon,
  CopyIcon,
  GlobeIcon,
  SmartphoneIcon,
  CubeIcon,
  LightningIcon,
  ExternalLinkIcon,
} from '@spectra/icons';

type PackageManager = 'pnpm' | 'npm' | 'yarn' | 'expo';
type PlatformTarget = 'web' | 'native' | 'all';

export const InstallationSection: React.FC = () => {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);
  const [pkgManager, setPkgManager] = useState<PackageManager>('pnpm');
  const [platformTarget, setPlatformTarget] = useState<PlatformTarget>('web');

  const copy = (text: string, stepIndex: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepIndex);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  // Commands map
  const getInstallCommand = () => {
    if (platformTarget === 'native') {
      switch (pkgManager) {
        case 'expo':
          return `npx expo install @spectra/react-native @spectra/tokens @spectra/icons react-native-svg`;
        case 'pnpm':
          return `pnpm add @spectra/react-native @spectra/tokens @spectra/icons react-native-svg`;
        case 'yarn':
          return `yarn add @spectra/react-native @spectra/tokens @spectra/icons react-native-svg`;
        case 'npm':
        default:
          return `npm install @spectra/react-native @spectra/tokens @spectra/icons react-native-svg`;
      }
    } else if (platformTarget === 'all') {
      switch (pkgManager) {
        case 'expo':
          return `npx expo install @spectra/react-native @spectra/tokens @spectra/icons react-native-svg\npnpm add @spectra/react`;
        case 'pnpm':
          return `pnpm add @spectra/react @spectra/react-native @spectra/tokens @spectra/icons react-native-svg`;
        case 'yarn':
          return `yarn add @spectra/react @spectra/react-native @spectra/tokens @spectra/icons react-native-svg`;
        case 'npm':
        default:
          return `npm install @spectra/react @spectra/react-native @spectra/tokens @spectra/icons react-native-svg`;
      }
    } else {
      // web
      switch (pkgManager) {
        case 'pnpm':
          return `pnpm add @spectra/react @spectra/tokens @spectra/icons`;
        case 'yarn':
          return `yarn add @spectra/react @spectra/tokens @spectra/icons`;
        case 'expo':
        case 'npm':
        default:
          return `npm install @spectra/react @spectra/tokens @spectra/icons`;
      }
    }
  };

  const webSetupCode = `import React from 'react';
import ReactDOM from 'react-dom/client';
// 1. Import Design Tokens CSS
import '@spectra/tokens/css';
// 2. Import Spectra Components
import { SpectraProvider, Button } from '@spectra/react';

const App = () => (
  <SpectraProvider defaultColorScheme="light">
    <div style={{ padding: 24, display: 'flex', gap: 12 }}>
      <Button variant="primary">Hello Spectra Web</Button>
      <Button variant="secondary">Outlined</Button>
    </div>
  </SpectraProvider>
);

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);`;

  const nativeSetupCode = `import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
// 1. Import Spectra Native Components (iOS & Android)
import { Button, Text } from '@spectra/react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Spectra Native (iOS & Android)</Text>
      <View style={styles.row}>
        <Button variant="primary" onPress={() => alert('Pressed!')}>
          Native Button
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8FAFC' },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 16 },
  row: { flexDirection: 'row', gap: 12 },
});`;

  const installCmd = getInstallCommand();

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 36 }}>
      {/* 1. Hero Header Card */}
      <Card
        variant="bordered"
        style={{
          padding: '32px 36px',
          backgroundColor: 'var(--color-surface)',
          borderRadius: 16,
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <Badge variant="primary">Installation & Setup</Badge>
          <span style={{ fontSize: 13, color: 'var(--color-text-muted)', fontWeight: 500 }}>Cross-Platform Architecture</span>
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
          Installing Spectra UI
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
          Spectra UI provides dedicated, optimized packages for both <strong>Web (React DOM)</strong> and{' '}
          <strong>Mobile Native (iOS & Android via Expo / React Native)</strong>, sharing the exact same design
          tokens and icon architecture.
        </p>
      </Card>

      {/* 2. Target Platform Selector Card */}
      <Card
        variant="bordered"
        style={{
          padding: '20px 24px',
          backgroundColor: 'var(--color-surface)',
          borderRadius: 12,
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        <span style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-muted)' }}>
          Choose Your Target Platform:
        </span>
        <Tabs variant="pills" value={platformTarget} onChange={(val) => setPlatformTarget(val as PlatformTarget)}>
          <TabList style={{ flexWrap: 'wrap', gap: 8 }}>
            <Tab value="web" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <GlobeIcon size={16} />
              <span>Web (@spectra/react)</span>
            </Tab>
            <Tab value="native" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <SmartphoneIcon size={16} />
              <span>Mobile Native (Expo / iOS / Android)</span>
            </Tab>
            <Tab value="all" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <GlobeIcon size={14} />
              <SmartphoneIcon size={14} />
              <span>Universal Monorepo (Web + Native)</span>
            </Tab>
          </TabList>
        </Tabs>
      </Card>

      {/* 3. Step 1: Package Manager Selector & Install */}
      <Card
        variant="bordered"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderRadius: 12,
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          overflow: 'hidden',
        }}
      >
        <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--color-border-subtle)', backgroundColor: 'var(--color-surface-raised)' }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
            1. Install Packages
          </h2>
        </div>
        <div>
          {/* Package Manager Tabs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '8px 16px',
              backgroundColor: '#0B1120',
            }}
          >
            <Tabs variant="pills" size="sm" value={pkgManager} onChange={(val) => setPkgManager(val as PackageManager)}>
              <TabList style={{ backgroundColor: 'transparent', border: 'none', padding: 0, gap: 4 }}>
                {(['pnpm', 'npm', 'yarn', 'expo'] as PackageManager[]).map((mgr) => (
                  <Tab
                    key={mgr}
                    value={mgr}
                    style={{
                      padding: '4px 10px',
                      fontSize: 12,
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {mgr}
                  </Tab>
                ))}
              </TabList>
            </Tabs>

            <button
              onClick={() => copy(installCmd, 1)}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: 4,
                color: copiedStep === 1 ? '#4ADE80' : '#FFFFFF',
                padding: '4px 12px',
                cursor: 'pointer',
                fontSize: 12,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              {copiedStep === 1 ? <CheckIcon size={13} /> : <CopyIcon size={13} />}
              <span>{copiedStep === 1 ? 'Copied' : 'Copy Command'}</span>
            </button>
          </div>

          <div style={{ padding: '16px 20px', backgroundColor: '#0F172A' }}>
            <pre style={{ margin: 0, color: '#F8FAFC', fontSize: 13, fontFamily: "'JetBrains Mono', Consolas, monospace", whiteSpace: 'pre-wrap' }}>
              <code>{installCmd}</code>
            </pre>
          </div>
        </div>
      </Card>

      {/* 4. Step 2: Code Integration */}
      <Card
        variant="bordered"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderRadius: 12,
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          overflow: 'hidden',
          padding: 24,
        }}
      >
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 16px 0', color: 'var(--color-text-primary)' }}>
          2. Code Integration
        </h2>

        {platformTarget !== 'native' && (
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, margin: '0 0 8px 0', color: 'var(--color-text-secondary)' }}>
              Web Setup: Root Provider & Tokens
            </h3>
            <div
              style={{
                border: '1px solid var(--color-border-default)',
                borderRadius: 'var(--radius-component-md)',
                backgroundColor: '#0F172A',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '8px 16px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#94A3B8',
                  fontSize: 12,
                }}
              >
                <span>App.tsx</span>
                <button
                  onClick={() => copy(webSetupCode, 2)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: 'none',
                    borderRadius: 4,
                    color: copiedStep === 2 ? '#4ADE80' : '#FFFFFF',
                    padding: '3px 10px',
                    cursor: 'pointer',
                    fontSize: 11,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  {copiedStep === 2 ? <CheckIcon size={12} /> : <CopyIcon size={12} />}
                  <span>{copiedStep === 2 ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre style={{ margin: 0, padding: '16px 20px', fontSize: 12.5, fontFamily: "'JetBrains Mono', Consolas, monospace", color: '#F8FAFC', lineHeight: 1.6, overflowX: 'auto' }}>
                <code>{webSetupCode}</code>
              </pre>
            </div>
          </div>
        )}

        {(platformTarget === 'native' || platformTarget === 'all') && (
          <div>
            <h3 style={{ fontSize: 15, fontWeight: 600, margin: '0 0 8px 0', color: 'var(--color-text-secondary)' }}>
              Mobile Native Setup: React Native & Expo
            </h3>
            <div
              style={{
                border: '1px solid var(--color-border-default)',
                borderRadius: 'var(--radius-component-md)',
                backgroundColor: '#0F172A',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '8px 16px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#94A3B8',
                  fontSize: 12,
                }}
              >
                <span>App.native.tsx / App.js</span>
                <button
                  onClick={() => copy(nativeSetupCode, 3)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: 'none',
                    borderRadius: 4,
                    color: copiedStep === 3 ? '#4ADE80' : '#FFFFFF',
                    padding: '3px 10px',
                    cursor: 'pointer',
                    fontSize: 11,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  {copiedStep === 3 ? <CheckIcon size={12} /> : <CopyIcon size={12} />}
                  <span>{copiedStep === 3 ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre style={{ margin: 0, padding: '16px 20px', fontSize: 12.5, fontFamily: "'JetBrains Mono', Consolas, monospace", color: '#F8FAFC', lineHeight: 1.6, overflowX: 'auto' }}>
                <code>{nativeSetupCode}</code>
              </pre>
            </div>
          </div>
        )}
      </Card>

      {/* 5. Step 3: Realtime Testing & Demos */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Card
          variant="bordered"
          style={{
            padding: '20px 24px',
            backgroundColor: 'var(--color-surface)',
            borderRadius: 12,
            boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          }}
        >
          <h2 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 6px 0', color: 'var(--color-text-primary)' }}>
            3. Realtime Testing & Interactive Sandboxes
          </h2>
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
            You can test, inspect, and demo Spectra UI components in realtime using live sandboxes:
          </p>
        </Card>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {/* Expo Snack Card */}
          <Card variant="bordered" style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 10, backgroundColor: 'var(--color-surface)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <SmartphoneIcon size={20} color="var(--color-action-primary)" />
              <h4 style={{ margin: 0, fontSize: 15, fontWeight: 700 }}>Expo Snack (Mobile Native)</h4>
            </div>
            <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              Run components directly on real iOS or Android devices via the Expo Go app (by scanning a QR code) or inside
              the web simulator without any local environment setup.
            </p>
            <div style={{ marginTop: 'auto', paddingTop: 6 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-action-primary)' }}>
                Integrated in every demo card toolbar (Cube icon)
              </span>
            </div>
          </Card>

          {/* Built-in MobileSimulator Card */}
          <Card variant="bordered" style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 10, backgroundColor: 'var(--color-surface)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <SmartphoneIcon size={20} color="var(--color-semantic-success, #16A34A)" />
              <h4 style={{ margin: 0, fontSize: 15, fontWeight: 700 }}>Spectra Mobile Simulator</h4>
            </div>
            <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              Switch any component page to <strong>Mobile Native</strong> mode to view live components inside an interactive phone frame with 44pt touch-target inspection.
            </p>
            <div style={{ marginTop: 'auto', paddingTop: 6 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-semantic-success, #16A34A)' }}>
                Active right here on every component page
              </span>
            </div>
          </Card>

          {/* StackBlitz & CodeSandbox Card */}
          <Card variant="bordered" style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 10, backgroundColor: 'var(--color-surface)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <LightningIcon size={20} color="#F59E0B" />
              <h4 style={{ margin: 0, fontSize: 15, fontWeight: 700 }}>StackBlitz & CodeSandbox (Web)</h4>
            </div>
            <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              Every component demo card provides direct one-click buttons to spin up isolated web sandboxes with instant hot module reloading.
            </p>
            <div style={{ marginTop: 'auto', paddingTop: 6 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: '#F59E0B' }}>
                Instant one-click toolbar buttons (Lightning & Cube icons)
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

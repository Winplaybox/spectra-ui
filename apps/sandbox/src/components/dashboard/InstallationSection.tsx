import React, { useState } from 'react';
import { Badge, Card } from '@spectra/react';
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
      {/* Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <Badge variant="primary">Installation & Setup</Badge>
          <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Cross-Platform Architecture</span>
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
      </div>

      {/* Target Platform Selector Pills */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <span style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-muted)' }}>
          Choose Your Target Platform:
        </span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          <button
            onClick={() => setPlatformTarget('web')}
            style={{
              padding: '8px 16px',
              borderRadius: 8,
              border: platformTarget === 'web' ? '2px solid var(--color-action-primary)' : '1px solid var(--color-border-default)',
              backgroundColor: platformTarget === 'web' ? 'var(--color-surface-raised)' : 'var(--color-surface)',
              color: platformTarget === 'web' ? 'var(--color-action-primary)' : 'var(--color-text-primary)',
              fontWeight: platformTarget === 'web' ? 700 : 500,
              fontSize: 13,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              transition: 'all 0.15s ease',
            }}
          >
            <GlobeIcon size={16} />
            <span>Web (@spectra/react)</span>
          </button>

          <button
            onClick={() => setPlatformTarget('native')}
            style={{
              padding: '8px 16px',
              borderRadius: 8,
              border: platformTarget === 'native' ? '2px solid var(--color-action-primary)' : '1px solid var(--color-border-default)',
              backgroundColor: platformTarget === 'native' ? 'var(--color-surface-raised)' : 'var(--color-surface)',
              color: platformTarget === 'native' ? 'var(--color-action-primary)' : 'var(--color-text-primary)',
              fontWeight: platformTarget === 'native' ? 700 : 500,
              fontSize: 13,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              transition: 'all 0.15s ease',
            }}
          >
            <SmartphoneIcon size={16} />
            <span>Mobile Native (Expo / iOS / Android)</span>
          </button>

          <button
            onClick={() => setPlatformTarget('all')}
            style={{
              padding: '8px 16px',
              borderRadius: 8,
              border: platformTarget === 'all' ? '2px solid var(--color-action-primary)' : '1px solid var(--color-border-default)',
              backgroundColor: platformTarget === 'all' ? 'var(--color-surface-raised)' : 'var(--color-surface)',
              color: platformTarget === 'all' ? 'var(--color-action-primary)' : 'var(--color-text-primary)',
              fontWeight: platformTarget === 'all' ? 700 : 500,
              fontSize: 13,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              transition: 'all 0.15s ease',
            }}
          >
            <GlobeIcon size={14} />
            <SmartphoneIcon size={14} />
            <span>Universal Monorepo (Web + Native)</span>
          </button>
        </div>
      </div>

      {/* Step 1: Package Manager Selector & Install */}
      <div>
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 12px 0', color: 'var(--color-text-primary)' }}>
          1. Install Packages
        </h2>
        <div
          style={{
            border: '1px solid var(--color-border-default)',
            borderRadius: 'var(--radius-component-md)',
            backgroundColor: '#0F172A',
            overflow: 'hidden',
          }}
        >
          {/* Package Manager Tabs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '6px 12px',
              backgroundColor: '#0B1120',
            }}
          >
            <div style={{ display: 'flex', gap: 6 }}>
              {(['pnpm', 'npm', 'yarn', 'expo'] as PackageManager[]).map((mgr) => (
                <button
                  key={mgr}
                  onClick={() => setPkgManager(mgr)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: 4,
                    border: 'none',
                    backgroundColor: pkgManager === mgr ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                    color: pkgManager === mgr ? '#FFFFFF' : '#94A3B8',
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {mgr}
                </button>
              ))}
            </div>

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

          <div style={{ padding: '16px 20px' }}>
            <pre style={{ margin: 0, color: '#F8FAFC', fontSize: 13, fontFamily: "'JetBrains Mono', Consolas, monospace", whiteSpace: 'pre-wrap' }}>
              <code>{installCmd}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Step 2: Code Integration */}
      <div>
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 12px 0', color: 'var(--color-text-primary)' }}>
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
      </div>

      {/* Step 3: Realtime Testing & Demos */}
      <div>
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 12px 0', color: 'var(--color-text-primary)' }}>
          3. Realtime Testing & Interactive Sandboxes
        </h2>
        <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', margin: '0 0 16px 0', lineHeight: 1.6 }}>
          You can test, inspect, and demo Spectra UI components in realtime using live sandboxes:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {/* Expo Snack Card */}
          <Card variant="bordered" style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
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
          <Card variant="bordered" style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
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
          <Card variant="bordered" style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
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

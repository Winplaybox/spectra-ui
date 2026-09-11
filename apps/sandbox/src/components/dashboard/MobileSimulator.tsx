import React, { useState } from 'react';
import { Card } from '@spectra/react';
import { ExternalLinkIcon, CheckIcon, SmartphoneIcon } from '@spectra/icons';
import { openInExpoSnack, openInReactNativeSandbox } from '../../utils/sandbox';

interface MobileSimulatorProps {
  componentId: string;
  componentName: string;
  children: React.ReactNode;
  nativeCodeSnippet: string;
  nativeProps: Array<{
    name: string;
    type: string;
    defaultValue: string;
    description: string;
  }>;
}

export const MobileSimulator: React.FC<MobileSimulatorProps> = ({
  componentId,
  componentName,
  children,
  nativeCodeSnippet,
  nativeProps,
}) => {
  const [deviceOS, setDeviceOS] = useState<'ios' | 'android'>('ios');
  const [showTouchTargets, setShowTouchTargets] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(nativeCodeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Platform Sub-header */}
      <Card
        variant="bordered"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
          padding: '16px 20px',
          backgroundColor: 'var(--color-surface-raised)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        }}
      >
        <div>
          <h3 style={{ margin: '0 0 4px 0', fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)', display: 'flex', alignItems: 'center', gap: 6 }}>
            <SmartphoneIcon size={18} color="var(--color-action-primary)" />
            <span>Mobile Native Simulator ({componentName})</span>
          </h3>
          <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-secondary)' }}>
            Pre-rendered React Native ergonomics optimized for Apple Human Interface & Google Material 3.
          </p>
        </div>

        {/* Device Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* OS Switcher */}
          <div
            style={{
              display: 'flex',
              backgroundColor: 'var(--color-surface)',
              borderRadius: 6,
              padding: 3,
              border: '1px solid var(--color-border-subtle)',
            }}
          >
            <button
              onClick={() => setDeviceOS('ios')}
              style={{
                padding: '4px 10px',
                border: 'none',
                borderRadius: 4,
                backgroundColor: deviceOS === 'ios' ? 'var(--color-action-primary)' : 'transparent',
                color: deviceOS === 'ios' ? '#FFFFFF' : 'var(--color-text-secondary)',
                fontSize: 12,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
               iOS
            </button>
            <button
              onClick={() => setDeviceOS('android')}
              style={{
                padding: '4px 10px',
                border: 'none',
                borderRadius: 4,
                backgroundColor: deviceOS === 'android' ? 'var(--color-action-primary)' : 'transparent',
                color: deviceOS === 'android' ? '#FFFFFF' : 'var(--color-text-secondary)',
                fontSize: 12,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Android
            </button>
          </div>

          {/* Touch Target Debug Overlay Toggle */}
          <button
            onClick={() => setShowTouchTargets(!showTouchTargets)}
            style={{
              padding: '6px 12px',
              borderRadius: 6,
              border: '1px solid var(--color-border-subtle)',
              backgroundColor: showTouchTargets ? 'rgba(0, 216, 255, 0.15)' : 'var(--color-surface)',
              color: showTouchTargets ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
              fontSize: 12,
              fontWeight: 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            {showTouchTargets && <CheckIcon size={12} />}
            <span>{showTouchTargets ? '44pt Touch Targets On' : 'Inspect Touch Targets'}</span>
          </button>
        </div>
      </Card>

      {/* Simulator Device Chassis & Playground */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
        }}
      >
        {/* Device Frame */}
        <div
          style={{
            width: 360,
            height: 640,
            borderRadius: deviceOS === 'ios' ? 44 : 28,
            border: '8px solid var(--color-border-default)',
            backgroundColor: 'var(--color-surface)',
            boxShadow: 'var(--elevation-overlay)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* iOS Dynamic Island / Android Punch Hole */}
          {deviceOS === 'ios' ? (
            <div
              style={{
                position: 'absolute',
                top: 10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 96,
                height: 24,
                backgroundColor: 'var(--color-border-default)',
                borderRadius: 20,
                zIndex: 30,
              }}
            />
          ) : (
            <div
              style={{
                position: 'absolute',
                top: 12,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 12,
                height: 12,
                backgroundColor: 'var(--color-border-default)',
                borderRadius: '50%',
                zIndex: 30,
              }}
            />
          )}

          {/* Mobile Status Bar */}
          <div
            style={{
              height: 44,
              padding: '0 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: 12,
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              zIndex: 20,
            }}
          >
            <span>9:41</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 10 }}>5G</span>
              <span style={{ fontSize: 10 }}>100%</span>
            </div>
          </div>

          {/* Mobile App Header */}
          <div
            style={{
              padding: '12px 20px',
              borderBottom: '1px solid var(--color-border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ fontWeight: 700, fontSize: 15 }}>Spectra Mobile</span>
            <span style={{ fontSize: 11, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {deviceOS.toUpperCase()}
            </span>
          </div>

          {/* Mobile Interactive Screen Area */}
          <div
            style={{
              flex: 1,
              padding: '24px 20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflowY: 'auto',
            }}
          >
            {/* Touch Target Highlight Overlay */}
            {showTouchTargets && (
              <div
                style={{
                  position: 'absolute',
                  inset: 20,
                  border: '1px dashed var(--color-action-primary)',
                  borderRadius: 8,
                  pointerEvents: 'none',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-end',
                  padding: 4,
                  fontSize: 10,
                  color: 'var(--color-action-primary)',
                }}
              >
                {deviceOS === 'ios' ? 'Apple HIG 44×44pt' : 'Material 48×48dp'}
              </div>
            )}

            {children}
          </div>

          {/* Bottom Home Indicator */}
          <div
            style={{
              height: 24,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: 120,
                height: 4,
                borderRadius: 2,
                backgroundColor: 'var(--color-border-subtle)',
              }}
            />
          </div>
        </div>

        {/* Mobile Action Bar */}
        <div
          style={{
            display: 'flex',
            gap: 16,
            flexWrap: 'wrap',
            justifyContent: 'center',
            fontSize: 13,
          }}
        >
          <button
            onClick={() => openInExpoSnack({ title: componentName, code: nativeCodeSnippet })}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '8px 16px',
              borderRadius: 6,
              border: '1px solid var(--color-border-default)',
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-text-primary)',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            <ExternalLinkIcon size={14} />
            <span>Open in Expo Snack</span>
          </button>

          <button
            onClick={() => openInReactNativeSandbox({ title: componentName, code: nativeCodeSnippet })}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '8px 16px',
              borderRadius: 6,
              border: '1px solid var(--color-border-default)',
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-text-primary)',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            <ExternalLinkIcon size={14} />
            <span>Open in CodeSandbox</span>
          </button>

          <button
            onClick={handleCopy}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '8px 16px',
              borderRadius: 6,
              border: '1px solid var(--color-action-primary)',
              backgroundColor: 'var(--color-action-primary)',
              color: '#FFFFFF',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            {copied ? <CheckIcon size={14} /> : null}
            <span>{copied ? 'Copied Native Code!' : 'Copy React Native Code'}</span>
          </button>
        </div>
      </div>

      {/* React Native Code Snippet Box */}
      <div
        style={{
          border: '1px solid var(--color-border-default)',
          borderRadius: 'var(--radius-component-md)',
          backgroundColor: '#1E1E24',
          color: '#F8F8F2',
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
            fontSize: 12,
            color: '#A1A1AA',
          }}
        >
          <span>@spectra/react-native · iOS & Android</span>
          <span style={{ fontSize: 11 }}>TypeScript · React Native 0.73+</span>
        </div>
        <pre
          style={{
            margin: 0,
            padding: '18px 20px',
            fontSize: 13,
            fontFamily: "'JetBrains Mono', Consolas, monospace",
            lineHeight: 1.6,
            overflowX: 'auto',
          }}
        >
          <code>{nativeCodeSnippet}</code>
        </pre>
      </div>

      {/* Mobile Native Architecture Guidelines */}
      <div>
        <Card
          variant="bordered"
          style={{
            backgroundColor: 'var(--color-surface)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
            padding: 24,
          }}
        >
          <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 16px 0', color: 'var(--color-text-primary)' }}>
            Mobile Native Architecture & Touch Guidelines
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 16,
            }}
          >
          <div
            style={{
              padding: 16,
              borderRadius: 'var(--radius-component-md)',
              border: '1px solid var(--color-border-subtle)',
              backgroundColor: 'var(--color-surface)',
            }}
          >
            <strong style={{ fontSize: 14, color: 'var(--color-text-primary)' }}>Touch Target Ergonomics</strong>
            <p style={{ margin: '6px 0 0 0', fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              All interactive native components enforce minimum 44×44 pt (Apple HIG) and 48×48 dp (Google Material) hit areas via <code>hitSlop</code> padding.
            </p>
          </div>

          <div
            style={{
              padding: 16,
              borderRadius: 'var(--radius-component-md)',
              border: '1px solid var(--color-border-subtle)',
              backgroundColor: 'var(--color-surface)',
            }}
          >
            <strong style={{ fontSize: 14, color: 'var(--color-text-primary)' }}>VoiceOver & TalkBack Accessibility</strong>
            <p style={{ margin: '6px 0 0 0', fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              Automatically maps ARIA roles to native <code>accessibilityRole</code> and <code>accessibilityState</code> ({'{'} disabled, expanded, checked {'}'}) for flawless screen-reader support.
            </p>
          </div>

          <div
            style={{
              padding: 16,
              borderRadius: 'var(--radius-component-md)',
              border: '1px solid var(--color-border-subtle)',
              backgroundColor: 'var(--color-surface)',
            }}
          >
            <strong style={{ fontSize: 14, color: 'var(--color-text-primary)' }}>Zero-Layout-Shift Performance</strong>
            <p style={{ margin: '6px 0 0 0', fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              Tokens compile to static JavaScript literals avoiding runtime CSS-in-JS overhead, running at a locked 60/120 FPS on Hermes and Fabric engines.
            </p>
          </div>
        </div>
        </Card>
      </div>

      {/* Native Props Table */}
      <div>
        <Card
          variant="bordered"
          style={{
            backgroundColor: 'var(--color-surface)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              padding: '18px 24px',
              borderBottom: '1px solid var(--color-border-default)',
              backgroundColor: 'var(--color-surface-raised)',
            }}
          >
            <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
              React Native Props & API Reference
            </h3>
          </div>
          <div style={{ overflowX: 'auto', backgroundColor: 'var(--color-surface)' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
                fontSize: 13,
                backgroundColor: 'var(--color-surface)',
              }}
            >
              <thead>
                <tr style={{ backgroundColor: 'var(--color-surface-raised)', borderBottom: '1px solid var(--color-border-default)' }}>
                  <th style={{ padding: '12px 20px', fontWeight: 600 }}>Prop</th>
                  <th style={{ padding: '12px 20px', fontWeight: 600 }}>Type</th>
                  <th style={{ padding: '12px 20px', fontWeight: 600 }}>Default</th>
                  <th style={{ padding: '12px 20px', fontWeight: 600 }}>Description</th>
                </tr>
              </thead>
              <tbody>
                {nativeProps.map((p, idx) => (
                  <tr
                    key={p.name}
                    style={{
                      backgroundColor: idx % 2 === 0 ? 'var(--color-surface)' : 'var(--color-surface-raised)',
                      borderBottom: idx === nativeProps.length - 1 ? 'none' : '1px solid var(--color-border-subtle)',
                    }}
                  >
                    <td style={{ padding: '12px 20px', fontFamily: 'monospace', fontWeight: 600, color: 'var(--color-action-primary)' }}>
                      {p.name}
                    </td>
                    <td style={{ padding: '12px 20px', fontFamily: 'monospace', color: 'var(--color-text-secondary)', fontSize: 12 }}>
                      {p.type}
                    </td>
                    <td style={{ padding: '12px 20px', fontFamily: 'monospace', color: 'var(--color-text-muted)', fontSize: 12 }}>
                      {p.defaultValue}
                    </td>
                    <td style={{ padding: '12px 20px', color: 'var(--color-text-secondary)' }}>
                      {p.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

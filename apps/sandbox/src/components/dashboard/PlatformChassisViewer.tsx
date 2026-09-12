import React, { useState } from 'react';
import { Card, Badge } from '@spectra/react';
import { ExternalLinkIcon, CheckIcon, SmartphoneIcon, WindowsIcon } from '@spectra/icons';
import { Platform, PLATFORMS, getComponentPlatformData } from '../../data/platformData';
import { openInExpoSnack, openInReactNativeSandbox } from '../../utils/sandbox';

interface PlatformChassisViewerProps {
  platform: 'ios' | 'android' | 'windows' | 'macos';
  componentId: string;
  componentName: string;
  children: React.ReactNode;
  nativeProps?: Array<{
    name: string;
    type: string;
    defaultValue: string;
    description: string;
  }>;
}

export const PlatformChassisViewer: React.FC<PlatformChassisViewerProps> = ({
  platform,
  componentId,
  componentName,
  children,
  nativeProps = [],
}) => {
  const meta = PLATFORMS[platform];
  const platformData = getComponentPlatformData(componentId, componentName)[platform];

  // Language switcher: 'primary' (React Native TS) vs 'native' (Swift / Kotlin / C#)
  const [selectedLang, setSelectedLang] = useState<'primary' | 'native'>('primary');
  const [showTouchTargets, setShowTouchTargets] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hapticTriggered, setHapticTriggered] = useState(false);
  const [rippleActive, setRippleActive] = useState(false);

  const activeSnippet = selectedLang === 'primary' ? platformData.primarySnippet : platformData.nativeSnippet;

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInteractiveTap = () => {
    if (platform === 'ios') {
      setHapticTriggered(true);
      setTimeout(() => setHapticTriggered(false), 400);
    } else if (platform === 'android') {
      setRippleActive(true);
      setTimeout(() => setRippleActive(false), 500);
    }
  };

  // Get frame styling based on platform
  const renderDeviceChassis = () => {
    switch (platform) {
      case 'ios':
        return (
          <div
            style={{
              width: 360,
              height: 640,
              borderRadius: 48,
              border: '10px solid #1C1C1E',
              backgroundColor: 'var(--color-surface)',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              position: 'relative',
              animation: hapticTriggered ? 'spectra-haptic-pulse 0.3s ease' : 'none',
            }}
          >
            {/* Apple Dynamic Island */}
            <div
              style={{
                position: 'absolute',
                top: 10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 100,
                height: 26,
                backgroundColor: '#000000',
                borderRadius: 20,
                zIndex: 30,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 8px',
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#1A1A24' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#0A2540' }} />
            </div>

            {/* iOS Status Bar */}
            <div
              style={{
                height: 48,
                padding: '0 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: 13,
                fontWeight: 600,
                color: 'var(--color-text-primary)',
                zIndex: 20,
              }}
            >
              <span>9:41</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 11 }}>5G</span>
                <span style={{ fontSize: 11 }}>100%</span>
              </div>
            </div>

            {/* iOS Navigation Bar */}
            <div
              style={{
                padding: '10px 20px',
                borderBottom: '1px solid var(--color-border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontWeight: 700, fontSize: 16, fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}>
                Spectra iOS
              </span>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  padding: '2px 6px',
                  borderRadius: 6,
                  backgroundColor: 'rgba(0, 122, 255, 0.12)',
                  color: '#007AFF',
                }}
              >
                iOS 15.0+
              </span>
            </div>

            {/* Interactive Screen Area */}
            <div
              onClick={handleInteractiveTap}
              style={{
                flex: 1,
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflowY: 'auto',
                cursor: 'pointer',
              }}
            >
              {showTouchTargets && (
                <div
                  style={{
                    position: 'absolute',
                    inset: 24,
                    border: '1.5px dashed #007AFF',
                    borderRadius: 8,
                    pointerEvents: 'none',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-end',
                    padding: 6,
                    fontSize: 10,
                    fontWeight: 600,
                    color: '#007AFF',
                  }}
                >
                  Apple HIG 44×44 pt
                </div>
              )}

              {children}

              {hapticTriggered && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: 24,
                    padding: '4px 12px',
                    borderRadius: 20,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    color: '#FFFFFF',
                    fontSize: 11,
                    fontWeight: 600,
                    pointerEvents: 'none',
                    animation: 'spectra-fade-in 0.2s ease',
                  }}
                >
                  UIImpactFeedbackGenerator (Haptic)
                </div>
              )}
            </div>

            {/* iOS Home Indicator */}
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
                  width: 128,
                  height: 4,
                  borderRadius: 2,
                  backgroundColor: 'var(--color-border-default)',
                }}
              />
            </div>
          </div>
        );

      case 'android':
        return (
          <div
            style={{
              width: 360,
              height: 640,
              borderRadius: 32,
              border: '8px solid #202124',
              backgroundColor: 'var(--color-surface)',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {/* Center Camera Punch Hole */}
            <div
              style={{
                position: 'absolute',
                top: 10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 12,
                height: 12,
                backgroundColor: '#000000',
                borderRadius: '50%',
                zIndex: 30,
              }}
            />

            {/* Android Status Bar */}
            <div
              style={{
                height: 40,
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
              <span>10:00</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 10 }}>LTE</span>
                <span style={{ fontSize: 10 }}>98%</span>
              </div>
            </div>

            {/* Android Top App Bar (Material Design) */}
            <div
              style={{
                padding: '12px 20px',
                borderBottom: '1px solid var(--color-border-subtle)',
                backgroundColor: 'var(--color-surface-raised)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontWeight: 700, fontSize: 16, fontFamily: 'Roboto, sans-serif' }}>
                Spectra Android
              </span>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  padding: '2px 6px',
                  borderRadius: 6,
                  backgroundColor: 'rgba(52, 168, 83, 0.15)',
                  color: '#34A853',
                }}
              >
                API 26+
              </span>
            </div>

            {/* Interactive Screen Area */}
            <div
              onClick={handleInteractiveTap}
              style={{
                flex: 1,
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflowY: 'auto',
                cursor: 'pointer',
              }}
            >
              {showTouchTargets && (
                <div
                  style={{
                    position: 'absolute',
                    inset: 20,
                    border: '1.5px dashed #34A853',
                    borderRadius: 8,
                    pointerEvents: 'none',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-end',
                    padding: 6,
                    fontSize: 10,
                    fontWeight: 600,
                    color: '#34A853',
                  }}
                >
                  Material 48×48 dp
                </div>
              )}

              {children}

              {rippleActive && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: 24,
                    padding: '4px 12px',
                    borderRadius: 20,
                    backgroundColor: 'rgba(52, 168, 83, 0.9)',
                    color: '#FFFFFF',
                    fontSize: 11,
                    fontWeight: 600,
                    pointerEvents: 'none',
                    animation: 'spectra-fade-in 0.2s ease',
                  }}
                >
                  Android Hardware Ripple Triggered
                </div>
              )}
            </div>

            {/* Gesture Navigation Bar */}
            <div
              style={{
                height: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 3,
                  borderRadius: 2,
                  backgroundColor: 'var(--color-border-default)',
                }}
              />
            </div>
          </div>
        );

      case 'windows':
        return (
          <div
            style={{
              width: '100%',
              maxWidth: 580,
              minHeight: 400,
              borderRadius: 8,
              border: '1px solid var(--color-border-default)',
              backgroundColor: 'var(--color-surface)',
              boxShadow: '0 20px 48px rgba(0, 0, 0, 0.22)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Windows 11 Titlebar */}
            <div
              style={{
                height: 36,
                backgroundColor: 'var(--color-surface-raised)',
                borderBottom: '1px solid var(--color-border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 12px',
                userSelect: 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <WindowsIcon size={14} color="var(--color-action-primary)" />
                <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-primary)' }}>
                  Spectra Windows 11 Desktop · {componentName}
                </span>
              </div>

              {/* Windows Window Controls */}
              <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <div style={{ width: 36, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10 }}>─</div>
                <div style={{ width: 36, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10 }}>□</div>
                <div style={{ width: 36, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: '#EF4444' }}>✕</div>
              </div>
            </div>

            {/* Windows 11 Acrylic / Mica Area */}
            <div
              style={{
                flex: 1,
                padding: '40px 32px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              {showTouchTargets && (
                <div
                  style={{
                    position: 'absolute',
                    top: 12,
                    right: 16,
                    fontSize: 11,
                    fontWeight: 600,
                    color: '#0078D4',
                    border: '1px dashed #0078D4',
                    padding: '2px 8px',
                    borderRadius: 4,
                  }}
                >
                  Desktop Pointer 32×32 epx
                </div>
              )}
              {children}
            </div>

            {/* Windows Status Strip */}
            <div
              style={{
                padding: '6px 14px',
                borderTop: '1px solid var(--color-border-subtle)',
                backgroundColor: 'var(--color-surface-raised)',
                fontSize: 11,
                color: 'var(--color-text-muted)',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>WinUI 3 · Windows App SDK 1.4+</span>
              <span>Alt+Key Accelerator Ready</span>
            </div>
          </div>
        );

      case 'macos':
        return (
          <div
            style={{
              width: '100%',
              maxWidth: 580,
              minHeight: 400,
              borderRadius: 10,
              border: '1px solid var(--color-border-default)',
              backgroundColor: 'var(--color-surface)',
              boxShadow: '0 22px 54px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* macOS Sequoia Titlebar with Traffic Lights */}
            <div
              style={{
                height: 38,
                backgroundColor: 'var(--color-surface-raised)',
                borderBottom: '1px solid var(--color-border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 14px',
                userSelect: 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FF5F56', display: 'inline-block' }} />
                <span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FFBD2E', display: 'inline-block' }} />
                <span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#27C93F', display: 'inline-block' }} />
              </div>

              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)' }}>
                {componentName} — macOS Sequoia
              </span>

              <div style={{ width: 50 }} />
            </div>

            {/* macOS Vibrancy Area */}
            <div
              style={{
                flex: 1,
                padding: '40px 32px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              {showTouchTargets && (
                <div
                  style={{
                    position: 'absolute',
                    top: 12,
                    right: 16,
                    fontSize: 11,
                    fontWeight: 600,
                    color: '#A855F7',
                    border: '1px dashed #A855F7',
                    padding: '2px 8px',
                    borderRadius: 4,
                  }}
                >
                  Precision Cursor 28×28 pt
                </div>
              )}
              {children}
            </div>

            {/* macOS Bottom Status */}
            <div
              style={{
                padding: '6px 14px',
                borderTop: '1px solid var(--color-border-subtle)',
                backgroundColor: 'var(--color-surface-raised)',
                fontSize: 11,
                color: 'var(--color-text-muted)',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>AppKit / SwiftUI Mac · macOS 12+</span>
              <span>⌘+Key Accelerator Ready</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      {/* Platform Header & Controls Card */}
      <Card
        variant="bordered"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
          padding: '16px 22px',
          backgroundColor: 'var(--color-surface-raised)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          borderRadius: 12,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 24 }}>{meta.icon}</span>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: 'var(--color-text-primary)' }}>
                {meta.name} Simulator
              </h3>
              <Badge variant="primary">{meta.badge}</Badge>
            </div>
            <p style={{ margin: '2px 0 0 0', fontSize: 13, color: 'var(--color-text-secondary)' }}>
              {meta.touchStandard} · {meta.accessibilityStandard}
            </p>
          </div>
        </div>

        {/* Action Toggles */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button
            onClick={() => setShowTouchTargets(!showTouchTargets)}
            style={{
              padding: '6px 12px',
              borderRadius: 6,
              border: '1px solid var(--color-border-default)',
              backgroundColor: showTouchTargets ? 'rgba(99, 102, 241, 0.15)' : 'var(--color-surface)',
              color: showTouchTargets ? '#6366F1' : 'var(--color-text-secondary)',
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            {showTouchTargets && <CheckIcon size={12} />}
            <span>Inspect Touch Target</span>
          </button>
        </div>
      </Card>

      {/* Simulator Chassis */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0' }}>
        {renderDeviceChassis()}
      </div>

      {/* Language Switcher & Idiomatic Code Block */}
      <div
        style={{
          border: '1px solid var(--color-border-default)',
          borderRadius: 10,
          backgroundColor: '#0F172A',
          color: '#E2E8F0',
          overflow: 'hidden',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
        }}
      >
        {/* Code Header Bar */}
        <div
          style={{
            padding: '10px 16px',
            backgroundColor: '#1E293B',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          {/* Language Tabs */}
          <div style={{ display: 'flex', gap: 6 }}>
            <button
              onClick={() => setSelectedLang('primary')}
              style={{
                padding: '4px 10px',
                borderRadius: 4,
                border: 'none',
                backgroundColor: selectedLang === 'primary' ? '#3B82F6' : 'transparent',
                color: selectedLang === 'primary' ? '#FFFFFF' : '#94A3B8',
                fontSize: 12,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              {meta.primaryLanguage}
            </button>
            <button
              onClick={() => setSelectedLang('native')}
              style={{
                padding: '4px 10px',
                borderRadius: 4,
                border: 'none',
                backgroundColor: selectedLang === 'native' ? '#3B82F6' : 'transparent',
                color: selectedLang === 'native' ? '#FFFFFF' : '#94A3B8',
                fontSize: 12,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              {meta.nativeLanguage}
            </button>
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {(platform === 'ios' || platform === 'android') && selectedLang === 'primary' && (
              <button
                onClick={() => openInExpoSnack({ title: componentName, code: activeSnippet })}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4,
                  padding: '4px 10px',
                  borderRadius: 4,
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  backgroundColor: 'transparent',
                  color: '#CBD5E1',
                  cursor: 'pointer',
                  fontSize: 12,
                }}
              >
                <ExternalLinkIcon size={12} />
                <span>Expo Snack</span>
              </button>
            )}

            <button
              onClick={handleCopy}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '4px 12px',
                borderRadius: 4,
                border: 'none',
                backgroundColor: copied ? '#10B981' : '#334155',
                color: '#FFFFFF',
                cursor: 'pointer',
                fontSize: 12,
                fontWeight: 600,
                transition: 'background-color 0.15s ease',
              }}
            >
              {copied ? <CheckIcon size={12} /> : null}
              <span>{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>
          </div>
        </div>

        {/* Code Content */}
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
          <code>{activeSnippet}</code>
        </pre>
      </div>

      {/* Platform Native Props Table */}
      {nativeProps.length > 0 && (
        <Card
          variant="bordered"
          style={{
            padding: 24,
            backgroundColor: 'var(--color-surface)',
            borderRadius: 12,
            boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          }}
        >
          <h3 style={{ margin: '0 0 8px 0', fontSize: 17, fontWeight: 700, color: 'var(--color-text-primary)' }}>
            {meta.name} Idiomatic Properties & Props
          </h3>
          <p style={{ margin: '0 0 16px 0', fontSize: 13, color: 'var(--color-text-secondary)' }}>
            These properties conform strictly to {meta.name} conventions and are completely isolated from DOM attributes.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                  <th style={{ padding: '8px 12px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Prop</th>
                  <th style={{ padding: '8px 12px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Type</th>
                  <th style={{ padding: '8px 12px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Default</th>
                  <th style={{ padding: '8px 12px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Description</th>
                </tr>
              </thead>
              <tbody>
                {nativeProps.map((p) => (
                  <tr key={p.name} style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                    <td style={{ padding: '10px 12px', fontFamily: 'monospace', fontWeight: 600, color: 'var(--color-action-primary)' }}>
                      {p.name}
                    </td>
                    <td style={{ padding: '10px 12px', fontFamily: 'monospace', color: '#10B981', fontSize: 12 }}>
                      {p.type}
                    </td>
                    <td style={{ padding: '10px 12px', fontFamily: 'monospace', color: 'var(--color-text-muted)', fontSize: 12 }}>
                      {p.defaultValue || '—'}
                    </td>
                    <td style={{ padding: '10px 12px', color: 'var(--color-text-secondary)' }}>
                      {p.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </div>
  );
};

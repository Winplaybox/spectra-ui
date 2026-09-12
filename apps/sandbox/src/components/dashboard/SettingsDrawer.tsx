import React from 'react';
import { useColorScheme, useRTL } from '@spectra/react';
import { CloseIcon, SettingsIcon, CheckIcon, ExternalLinkIcon, SunIcon, MoonIcon, MonitorIcon } from '@spectra/icons';
import { useVersion } from '../../context/VersionContext';

interface SettingsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  ambientIntensity?: 'subtle' | 'balanced' | 'vivid' | 'off';
  onSetAmbientIntensity?: (intensity: 'subtle' | 'balanced' | 'vivid' | 'off') => void;
  onOpenCookieModal?: () => void;
}

export const SettingsDrawer: React.FC<SettingsDrawerProps> = ({
  isOpen,
  onClose,
  ambientIntensity = 'balanced',
  onSetAmbientIntensity,
  onOpenCookieModal,
}) => {
  const { colorScheme, setColorScheme, mode, setMode } = useColorScheme();
  const { isRTL, toggleRTL } = useRTL();
  const { currentVersion, setCurrentVersion, releases } = useVersion();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          zIndex: 90,
          animation: 'spectra-fade-in 0.15s ease',
        }}
      />

      {/* Slide-out Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Workspace Settings & Preferences"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: 360,
          maxWidth: '90vw',
          height: '100vh',
          backgroundColor: colorScheme === 'dark' ? '#0B0F19' : '#FFFFFF',
          borderLeft: '1px solid var(--color-border-default)',
          boxShadow: '-12px 0 36px rgba(0, 0, 0, 0.28)',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          animation: 'spectra-slide-in 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '20px 24px',
            borderBottom: '1px solid var(--color-border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'var(--color-surface-raised)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <SettingsIcon size={18} color="var(--color-action-primary)" />
            <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)' }}>
              Settings & Preferences
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close settings drawer"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-text-muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 4,
              borderRadius: 6,
            }}
          >
            <CloseIcon size={16} />
          </button>
        </div>

        {/* Drawer Content */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 28,
          }}
        >
          {/* 1. Theme Mode (Matching Benchmark Image 1) */}
          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', marginBottom: 10 }}>
              Mode
            </label>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                padding: 4,
                borderRadius: 10,
                border: '1px solid var(--color-border-default)',
                backgroundColor: 'var(--color-surface-raised)',
                gap: 4,
              }}
            >
              {/* Light Option */}
              <button
                type="button"
                onClick={() => setMode('light')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 7,
                  padding: '9px 8px',
                  borderRadius: 7,
                  border: mode === 'light' ? '1.5px solid var(--color-action-primary)' : '1.5px solid transparent',
                  backgroundColor: mode === 'light' ? 'rgba(0, 127, 255, 0.14)' : 'transparent',
                  color: mode === 'light' ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
                  cursor: 'pointer',
                  fontWeight: mode === 'light' ? 700 : 500,
                  fontSize: 13,
                  transition: 'all 0.12s ease',
                }}
              >
                <SunIcon size={15} color={mode === 'light' ? 'var(--color-action-primary)' : 'currentColor'} />
                <span>Light</span>
              </button>

              {/* System Option */}
              <button
                type="button"
                onClick={() => setMode('system')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 7,
                  padding: '9px 8px',
                  borderRadius: 7,
                  border: mode === 'system' ? '1.5px solid var(--color-action-primary)' : '1.5px solid transparent',
                  backgroundColor: mode === 'system' ? 'rgba(0, 127, 255, 0.14)' : 'transparent',
                  color: mode === 'system' ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
                  cursor: 'pointer',
                  fontWeight: mode === 'system' ? 700 : 500,
                  fontSize: 13,
                  transition: 'all 0.12s ease',
                }}
              >
                <MonitorIcon size={15} color={mode === 'system' ? 'var(--color-action-primary)' : 'currentColor'} />
                <span>System</span>
              </button>

              {/* Dark Option */}
              <button
                type="button"
                onClick={() => setMode('dark')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 7,
                  padding: '9px 8px',
                  borderRadius: 7,
                  border: mode === 'dark' ? '1.5px solid var(--color-action-primary)' : '1.5px solid transparent',
                  backgroundColor: mode === 'dark' ? 'rgba(0, 127, 255, 0.14)' : 'transparent',
                  color: mode === 'dark' ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
                  cursor: 'pointer',
                  fontWeight: mode === 'dark' ? 700 : 500,
                  fontSize: 13,
                  transition: 'all 0.12s ease',
                }}
              >
                <MoonIcon size={15} color={mode === 'dark' ? 'var(--color-action-primary)' : 'currentColor'} />
                <span>Dark</span>
              </button>
            </div>
          </div>

          {/* 2. Documentation Release Version */}
          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-muted)', marginBottom: 10 }}>
              Release Version
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {releases.map((rel) => {
                const isCurrent = currentVersion === rel.version;
                return (
                  <button
                    key={rel.version}
                    onClick={() => setCurrentVersion(rel.version)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 12px',
                      borderRadius: 8,
                      border: isCurrent ? '1.5px solid var(--color-action-primary)' : '1px solid var(--color-border-default)',
                      backgroundColor: isCurrent ? 'rgba(0, 127, 255, 0.08)' : 'var(--color-surface-raised)',
                      color: 'var(--color-text-primary)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontSize: 13,
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ fontWeight: isCurrent ? 700 : 500 }}>{rel.version}</span>
                        {rel.status === 'latest' && (
                          <span
                            style={{
                              fontSize: 10,
                              fontWeight: 700,
                              padding: '1px 6px',
                              borderRadius: 10,
                              backgroundColor: 'rgba(16, 185, 129, 0.15)',
                              color: '#10B981',
                              border: '1px solid rgba(16, 185, 129, 0.3)',
                            }}
                          >
                            LATEST
                          </span>
                        )}
                      </div>
                      <span style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>
                        {rel.releaseDate}
                      </span>
                    </div>
                    {isCurrent && <CheckIcon size={16} color="var(--color-action-primary)" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Reading Direction (RTL / LTR) */}
          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-muted)', marginBottom: 10 }}>
              Direction
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <button
                onClick={() => { if (isRTL) toggleRTL(); }}
                style={{
                  padding: '9px 12px',
                  borderRadius: 8,
                  border: !isRTL ? '2px solid var(--color-action-primary)' : '1px solid var(--color-border-default)',
                  backgroundColor: !isRTL ? 'rgba(0, 127, 255, 0.1)' : 'var(--color-surface-raised)',
                  color: !isRTL ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: 13,
                }}
              >
                LTR (Left to Right)
              </button>
              <button
                onClick={() => { if (!isRTL) toggleRTL(); }}
                style={{
                  padding: '9px 12px',
                  borderRadius: 8,
                  border: isRTL ? '2px solid var(--color-action-primary)' : '1px solid var(--color-border-default)',
                  backgroundColor: isRTL ? 'rgba(0, 127, 255, 0.1)' : 'var(--color-surface-raised)',
                  color: isRTL ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: 13,
                }}
              >
                RTL (Right to Left)
              </button>
            </div>
          </div>

          {/* 4. Ambient Breathing Dots Animation */}
          {onSetAmbientIntensity && (
            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-muted)', marginBottom: 10 }}>
                Background Ambient Dots
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
                {(['off', 'subtle', 'balanced', 'vivid'] as const).map((level) => {
                  const isSelected = ambientIntensity === level;
                  return (
                    <button
                      key={level}
                      onClick={() => onSetAmbientIntensity(level)}
                      style={{
                        padding: '8px 4px',
                        borderRadius: 6,
                        border: isSelected ? '1.5px solid var(--color-action-primary)' : '1px solid var(--color-border-default)',
                        backgroundColor: isSelected ? 'rgba(0, 127, 255, 0.12)' : 'var(--color-surface-raised)',
                        color: isSelected ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
                        cursor: 'pointer',
                        fontSize: 12,
                        fontWeight: isSelected ? 700 : 500,
                        textTransform: 'capitalize',
                      }}
                    >
                      {level}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* 5. Cookie & Telemetry Preferences */}
          {onOpenCookieModal && (
            <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: 20 }}>
              <button
                onClick={() => {
                  onClose();
                  onOpenCookieModal();
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: 8,
                  border: '1px solid var(--color-border-default)',
                  backgroundColor: 'var(--color-surface-raised)',
                  color: 'var(--color-text-primary)',
                  cursor: 'pointer',
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                <span>Privacy & Cookie Preferences</span>
                <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Manage</span>
              </button>
            </div>
          )}

          {/* External Links */}
          <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: 16 }}>
            <a
              href="https://github.com/Winplaybox/spectra-ui/blob/main/CHANGELOG.md"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 10px',
                borderRadius: 6,
                color: 'var(--color-action-primary)',
                textDecoration: 'none',
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              <span>View Full Changelog</span>
              <ExternalLinkIcon size={14} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

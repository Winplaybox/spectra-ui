import React from 'react';
import { Card, Badge } from '@spectra/react';
import { CheckIcon, ExternalLinkIcon } from '@spectra/icons';
import { PLATFORMS, Platform } from '../../data/platformData';
import { usePlatform } from '../../context/PlatformContext';

interface PlatformCompatibilityMatrixProps {
  componentName: string;
  componentId: string;
  onSelectPlatform?: (platform: Platform) => void;
}

export const PlatformCompatibilityMatrix: React.FC<PlatformCompatibilityMatrixProps> = ({
  componentName,
  componentId,
  onSelectPlatform,
}) => {
  const { currentPlatform, setPlatform } = usePlatform();
  const platformsList = Object.values(PLATFORMS);

  const handleSelect = (platformId: Platform) => {
    setPlatform(platformId);
    if (onSelectPlatform) {
      onSelectPlatform(platformId);
    }
  };

  return (
    <Card
      variant="bordered"
      style={{
        padding: 0,
        backgroundColor: 'var(--color-surface)',
        borderRadius: 12,
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        border: '1px solid var(--color-border-default)',
        scrollMarginTop: 80,
      }}
    >
      {/* Header bar */}
      <div
        style={{
          padding: '18px 24px',
          borderBottom: '1px solid var(--color-border-subtle)',
          backgroundColor: 'var(--color-surface-raised)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <span style={{ fontSize: 18 }}>⚡</span>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: 'var(--color-text-primary)' }}>
              Real-Time Universal Compatibility & Support Matrix
            </h3>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                padding: '2px 8px',
                borderRadius: 10,
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                color: '#10B981',
                border: '1px solid rgba(16, 185, 129, 0.3)',
              }}
            >
              5 Platforms Certified
            </span>
          </div>
          <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-secondary)' }}>
            Real-time multi-platform runtime requirements, minimum operating system baselines, touch standards, and accessibility mappings for <strong>{componentName}</strong>.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Token Sync:</span>
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: '#10B981',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <CheckIcon size={14} />
            100% Token Parity
          </span>
        </div>
      </div>

      {/* Responsive Matrix Table */}
      <div style={{ overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: 13,
            textAlign: 'left',
          }}
        >
          <thead>
            <tr
              style={{
                borderBottom: '1px solid var(--color-border-subtle)',
                backgroundColor: 'rgba(0,0,0,0.02)',
              }}
            >
              <th style={{ padding: '12px 18px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                Target Platform
              </th>
              <th style={{ padding: '12px 18px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                Minimum OS Version
              </th>
              <th style={{ padding: '12px 18px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                Framework / Runtime
              </th>
              <th style={{ padding: '12px 18px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                Touch / Cursor Target
              </th>
              <th style={{ padding: '12px 18px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                Accessibility Standard
              </th>
              <th style={{ padding: '12px 18px', fontWeight: 600, color: 'var(--color-text-secondary)', textAlign: 'right' }}>
                View Isolated
              </th>
            </tr>
          </thead>
          <tbody>
            {platformsList.map((p) => {
              const isSelected = currentPlatform === p.id;
              return (
                <tr
                  key={p.id}
                  onClick={() => handleSelect(p.id)}
                  style={{
                    borderBottom: '1px solid var(--color-border-subtle)',
                    backgroundColor: isSelected ? 'rgba(99, 102, 241, 0.06)' : 'transparent',
                    cursor: 'pointer',
                    transition: 'background-color 0.12s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) e.currentTarget.style.backgroundColor = 'var(--color-surface-raised)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  {/* Platform Name & Badge */}
                  <td style={{ padding: '14px 18px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontSize: 20 }}>{p.icon}</span>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <span style={{ fontWeight: isSelected ? 700 : 600, color: 'var(--color-text-primary)' }}>
                            {p.name}
                          </span>
                          {isSelected && (
                            <span
                              style={{
                                fontSize: 10,
                                fontWeight: 700,
                                padding: '1px 6px',
                                borderRadius: 4,
                                backgroundColor: '#6366F1',
                                color: '#FFFFFF',
                              }}
                            >
                              ACTIVE
                            </span>
                          )}
                        </div>
                        <span style={{ fontSize: 11, color: 'var(--color-text-muted)', fontFamily: 'monospace' }}>
                          {p.package}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Min OS Version */}
                  <td style={{ padding: '14px 18px' }}>
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        padding: '3px 8px',
                        borderRadius: 6,
                        backgroundColor: 'var(--color-surface-raised)',
                        border: '1px solid var(--color-border-subtle)',
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      {p.badge}
                    </span>
                    <div style={{ fontSize: 11, color: 'var(--color-text-muted)', marginTop: 4 }}>
                      {p.minOsVersion}
                    </div>
                  </td>

                  {/* Framework / Runtime */}
                  <td style={{ padding: '14px 18px' }}>
                    <div style={{ fontWeight: 500, color: 'var(--color-text-primary)' }}>
                      {p.primaryLanguage}
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--color-text-secondary)', marginTop: 2 }}>
                      {p.minFrameworkVersion}
                    </div>
                  </td>

                  {/* Touch / Cursor Target */}
                  <td style={{ padding: '14px 18px' }}>
                    <div style={{ fontWeight: 500, color: 'var(--color-text-primary)' }}>
                      {p.touchStandard}
                    </div>
                  </td>

                  {/* Accessibility Standard */}
                  <td style={{ padding: '14px 18px' }}>
                    <div style={{ fontWeight: 500, color: 'var(--color-text-primary)' }}>
                      {p.accessibilityStandard}
                    </div>
                  </td>

                  {/* View Isolated Button */}
                  <td style={{ padding: '14px 18px', textAlign: 'right' }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelect(p.id);
                      }}
                      style={{
                        padding: '6px 12px',
                        borderRadius: 6,
                        border: isSelected ? '1px solid #6366F1' : '1px solid var(--color-border-default)',
                        backgroundColor: isSelected ? '#6366F1' : 'var(--color-surface)',
                        color: isSelected ? '#FFFFFF' : 'var(--color-text-primary)',
                        cursor: 'pointer',
                        fontSize: 12,
                        fontWeight: 600,
                        transition: 'all 0.15s ease',
                      }}
                    >
                      {isSelected ? 'Viewing' : `Switch to ${p.shortName}`}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer Benchmark note */}
      <div
        style={{
          padding: '12px 24px',
          borderTop: '1px solid var(--color-border-subtle)',
          backgroundColor: 'var(--color-surface-raised)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
          fontSize: 12,
          color: 'var(--color-text-secondary)',
        }}
      >
        <span>
          💡 <strong>Architectural Note:</strong> Platform code, APIs, and hooks are strictly isolated. No DOM <code style={{ color: '#F43F5E' }}>onClick</code> or web attributes are rendered inside native views.
        </span>
        <span style={{ color: 'var(--color-text-muted)' }}>
          Benchmarked against Microsoft Fluent 2 & Apple Human Interface Guidelines
        </span>
      </div>
    </Card>
  );
};

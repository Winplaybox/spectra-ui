import React, { useState } from 'react';
import { Card, Tabs, TabList, Tab } from '@spectra/react';
import { CopyIcon, CheckIcon, CodeIcon, PaletteIcon, CubeIcon, SmartphoneIcon } from '@spectra/icons';
import { COMPONENT_API_DATA, ComponentApiReference } from '../../data/apiReferenceData';

interface ComponentApiSectionProps {
  componentId: string;
}

export const ComponentApiSection: React.FC<ComponentApiSectionProps> = ({ componentId }) => {
  const [activeTab, setActiveTab] = useState<'props' | 'css' | 'tokens' | 'native'>('props');
  const [copiedImport, setCopiedImport] = useState(false);

  const apiData: ComponentApiReference | undefined = COMPONENT_API_DATA[componentId];

  if (!apiData) {
    return null;
  }

  const handleCopyImport = () => {
    navigator.clipboard.writeText(apiData.importStatement);
    setCopiedImport(true);
    setTimeout(() => setCopiedImport(false), 2000);
  };

  return (
    <div id="api" style={{ display: 'flex', flexDirection: 'column', gap: 24, scrollMarginTop: 80 }}>
      {/* Header Card (Solid elevated surface - eliminates breathing dots bleed-through) */}
      <Card
        variant="bordered"
        style={{
          backgroundColor: 'var(--color-surface)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          padding: '24px 28px',
          borderRadius: 14,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
              padding: '3px 10px',
              borderRadius: 20,
              backgroundColor: 'rgba(56, 189, 248, 0.12)',
              color: '#38BDF8',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            <CodeIcon size={13} />
            API Reference
          </span>
          <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>·</span>
          <span style={{ fontSize: 13, color: 'var(--color-text-secondary)', fontFamily: 'monospace' }}>
            {apiData.componentName}
          </span>
        </div>

        <h2
          style={{
            fontSize: 26,
            fontWeight: 800,
            margin: '0 0 8px 0',
            color: 'var(--color-text-primary)',
            letterSpacing: '-0.02em',
          }}
        >
          {apiData.componentName} API
        </h2>
        <p
          style={{
            fontSize: 14,
            color: 'var(--color-text-secondary)',
            margin: 0,
            lineHeight: 1.6,
            maxWidth: 780,
          }}
        >
          {apiData.description}
        </p>
      </Card>

      {/* 1. Module Import Box */}
      <Card
        variant="bordered"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderRadius: 12,
          overflow: 'hidden',
          boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 16px',
            backgroundColor: 'var(--color-surface-raised)',
            borderBottom: '1px solid var(--color-border-subtle)',
            fontSize: 12,
            fontWeight: 600,
            color: 'var(--color-text-secondary)',
          }}
        >
          <span>Import & Module Name</span>
          <button
            onClick={handleCopyImport}
            style={{
              background: 'none',
              border: 'none',
              color: copiedImport ? '#4ADE80' : 'var(--color-text-secondary)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
              cursor: 'pointer',
              fontSize: 12,
              fontWeight: 600,
              padding: 0,
            }}
          >
            {copiedImport ? <CheckIcon size={13} /> : <CopyIcon size={13} />}
            <span>{copiedImport ? 'Copied Import!' : 'Copy Import'}</span>
          </button>
        </div>

        <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div
            style={{
              backgroundColor: '#0F172A',
              color: '#F8FAFC',
              borderRadius: 8,
              padding: '12px 16px',
              fontFamily: "'JetBrains Mono', Consolas, monospace",
              fontSize: 13,
              lineHeight: 1.6,
              overflowX: 'auto',
            }}
          >
            <div>
              <span style={{ color: '#38BDF8' }}>import</span> {'{ '}
              <span style={{ color: '#4ADE80', fontWeight: 600 }}>{apiData.exportName}</span>
              {' }'} <span style={{ color: '#38BDF8' }}>from</span>{' '}
              <span style={{ color: '#F472B6' }}>'@spectra/react'</span>;
            </div>
            <div style={{ color: '#64748B', margin: '4px 0' }}>// or via direct subpath export</div>
            <div>
              <span style={{ color: '#38BDF8' }}>import</span>{' '}
              <span style={{ color: '#4ADE80', fontWeight: 600 }}>{apiData.exportName}</span>{' '}
              <span style={{ color: '#38BDF8' }}>from</span>{' '}
              <span style={{ color: '#F472B6' }}>'@spectra/react/{apiData.exportName}'</span>;
            </div>
          </div>

          <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            The component name <code style={{ color: 'var(--color-action-primary)', fontWeight: 600 }}>Spectra{apiData.componentName}</code> can be used for providing default props or style overrides via theme configuration.
          </p>
        </div>
      </Card>

      {/* 2. Interactive Navigation Tabs for API Reference */}
      <Card
        variant="bordered"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderRadius: 12,
          overflow: 'hidden',
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        }}
      >
        {/* Tab Buttons Toolbar */}
        <div
          style={{
            padding: '10px 16px',
            backgroundColor: 'var(--color-surface-raised)',
            borderBottom: '1px solid var(--color-border-default)',
            overflowX: 'auto',
          }}
        >
          <Tabs variant="pills" size="sm" value={activeTab} onChange={(val) => setActiveTab(val as 'props' | 'css' | 'tokens' | 'native')}>
            <TabList style={{ gap: 6 }}>
              <Tab value="props" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <CodeIcon size={14} />
                <span>Props</span>
                <span
                  style={{
                    fontSize: 11,
                    padding: '1px 6px',
                    borderRadius: 10,
                    backgroundColor: activeTab === 'props' ? 'rgba(56, 189, 248, 0.15)' : 'var(--color-surface-sunken)',
                    color: activeTab === 'props' ? 'var(--color-action-primary)' : 'var(--color-text-muted)',
                  }}
                >
                  {apiData.props.length}
                </span>
              </Tab>

              <Tab value="css" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <PaletteIcon size={14} />
                <span>CSS Classes</span>
                <span
                  style={{
                    fontSize: 11,
                    padding: '1px 6px',
                    borderRadius: 10,
                    backgroundColor: activeTab === 'css' ? 'rgba(56, 189, 248, 0.15)' : 'var(--color-surface-sunken)',
                    color: activeTab === 'css' ? 'var(--color-action-primary)' : 'var(--color-text-muted)',
                  }}
                >
                  {apiData.cssClasses.length}
                </span>
              </Tab>

              <Tab value="tokens" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <CubeIcon size={14} />
                <span>Design Tokens</span>
                <span
                  style={{
                    fontSize: 11,
                    padding: '1px 6px',
                    borderRadius: 10,
                    backgroundColor: activeTab === 'tokens' ? 'rgba(56, 189, 248, 0.15)' : 'var(--color-surface-sunken)',
                    color: activeTab === 'tokens' ? 'var(--color-action-primary)' : 'var(--color-text-muted)',
                  }}
                >
                  {apiData.cssVariables.length}
                </span>
              </Tab>

              <Tab value="native" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <SmartphoneIcon size={14} />
                <span>Mobile Native Props</span>
                <span
                  style={{
                    fontSize: 11,
                    padding: '1px 6px',
                    borderRadius: 10,
                    backgroundColor: activeTab === 'native' ? 'rgba(56, 189, 248, 0.15)' : 'var(--color-surface-sunken)',
                    color: activeTab === 'native' ? 'var(--color-action-primary)' : 'var(--color-text-muted)',
                  }}
                >
                  {apiData.nativeProps.length}
                </span>
              </Tab>
            </TabList>
          </Tabs>
        </div>

        {/* TAB 1: Props Table */}
        {activeTab === 'props' && (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 13 }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--color-surface-raised)', borderBottom: '1px solid var(--color-border-default)' }}>
                  <th style={{ padding: '12px 20px', fontWeight: 700, width: 180 }}>Name</th>
                  <th style={{ padding: '12px 20px', fontWeight: 700, width: 280 }}>Type</th>
                  <th style={{ padding: '12px 20px', fontWeight: 700, width: 140 }}>Default</th>
                  <th style={{ padding: '12px 20px', fontWeight: 700 }}>Description</th>
                </tr>
              </thead>
              <tbody>
                {apiData.props.map((p, idx) => (
                  <tr
                    key={p.name}
                    style={{
                      backgroundColor: idx % 2 === 0 ? 'var(--color-surface)' : 'var(--color-surface-raised)',
                      borderBottom: idx === apiData.props.length - 1 ? 'none' : '1px solid var(--color-border-subtle)',
                    }}
                  >
                    <td style={{ padding: '14px 20px', verticalAlign: 'top' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                        <code style={{ fontFamily: "'JetBrains Mono', Consolas, monospace", fontWeight: 700, color: 'var(--color-action-primary)', fontSize: 13 }}>
                          {p.name}
                        </code>
                        {p.required && (
                          <span style={{ color: '#EF4444', fontWeight: 800, fontSize: 14 }} title="Required prop">
                            *
                          </span>
                        )}
                      </div>
                    </td>
                    <td style={{ padding: '14px 20px', verticalAlign: 'top' }}>
                      <code
                        style={{
                          fontFamily: "'JetBrains Mono', Consolas, monospace",
                          fontSize: 12,
                          color: '#E2E8F0',
                          backgroundColor: '#0F172A',
                          padding: '2px 7px',
                          borderRadius: 4,
                          display: 'inline-block',
                          wordBreak: 'break-word',
                          lineHeight: 1.4,
                        }}
                      >
                        {p.type}
                      </code>
                    </td>
                    <td style={{ padding: '14px 20px', verticalAlign: 'top', color: 'var(--color-text-muted)', fontFamily: 'monospace', fontSize: 12 }}>
                      {p.defaultValue}
                    </td>
                    <td style={{ padding: '14px 20px', verticalAlign: 'top', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      {p.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* TAB 2: CSS Classes Table */}
        {activeTab === 'css' && (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 13 }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--color-surface-raised)', borderBottom: '1px solid var(--color-border-default)' }}>
                  <th style={{ padding: '12px 20px', fontWeight: 700, width: 220 }}>Global Class</th>
                  <th style={{ padding: '12px 20px', fontWeight: 700, width: 140 }}>Rule Name</th>
                  <th style={{ padding: '12px 20px', fontWeight: 700 }}>Description</th>
                </tr>
              </thead>
              <tbody>
                {apiData.cssClasses.map((c, idx) => (
                  <tr
                    key={c.className}
                    style={{
                      backgroundColor: idx % 2 === 0 ? 'var(--color-surface)' : 'var(--color-surface-raised)',
                      borderBottom: idx === apiData.cssClasses.length - 1 ? 'none' : '1px solid var(--color-border-subtle)',
                    }}
                  >
                    <td style={{ padding: '14px 20px', verticalAlign: 'top' }}>
                      <code style={{ fontFamily: "'JetBrains Mono', Consolas, monospace", fontWeight: 700, color: '#A855F7', fontSize: 13 }}>
                        {c.className}
                      </code>
                    </td>
                    <td style={{ padding: '14px 20px', verticalAlign: 'top' }}>
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          padding: '2px 8px',
                          borderRadius: 4,
                          backgroundColor: 'var(--color-surface-sunken)',
                          color: 'var(--color-text-secondary)',
                          fontFamily: 'monospace',
                        }}
                      >
                        {c.ruleName}
                      </span>
                    </td>
                    <td style={{ padding: '14px 20px', verticalAlign: 'top', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      {c.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* TAB 3: Design Tokens (CSS Variables) Table */}
        {activeTab === 'tokens' && (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 13 }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--color-surface-raised)', borderBottom: '1px solid var(--color-border-default)' }}>
                  <th style={{ padding: '12px 20px', fontWeight: 700, width: 240 }}>CSS Variable</th>
                  <th style={{ padding: '12px 20px', fontWeight: 700, width: 220 }}>Default Token</th>
                  <th style={{ padding: '12px 20px', fontWeight: 700 }}>Description</th>
                </tr>
              </thead>
              <tbody>
                {apiData.cssVariables.map((t, idx) => (
                  <tr
                    key={t.variable}
                    style={{
                      backgroundColor: idx % 2 === 0 ? 'var(--color-surface)' : 'var(--color-surface-raised)',
                      borderBottom: idx === apiData.cssVariables.length - 1 ? 'none' : '1px solid var(--color-border-subtle)',
                    }}
                  >
                    <td style={{ padding: '14px 20px', verticalAlign: 'top' }}>
                      <code style={{ fontFamily: "'JetBrains Mono', Consolas, monospace", fontWeight: 700, color: '#0EA5E9', fontSize: 13 }}>
                        {t.variable}
                      </code>
                    </td>
                    <td style={{ padding: '14px 20px', verticalAlign: 'top' }}>
                      <code
                        style={{
                          fontFamily: "'JetBrains Mono', Consolas, monospace",
                          fontSize: 12,
                          color: 'var(--color-text-secondary)',
                          backgroundColor: 'var(--color-surface-sunken)',
                          padding: '2px 7px',
                          borderRadius: 4,
                        }}
                      >
                        {t.defaultToken}
                      </code>
                    </td>
                    <td style={{ padding: '14px 20px', verticalAlign: 'top', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      {t.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* TAB 4: Mobile Native Props Table */}
        {activeTab === 'native' && (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 13 }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--color-surface-raised)', borderBottom: '1px solid var(--color-border-default)' }}>
                  <th style={{ padding: '12px 20px', fontWeight: 700, width: 180 }}>Native Prop</th>
                  <th style={{ padding: '12px 20px', fontWeight: 700, width: 260 }}>Native Type</th>
                  <th style={{ padding: '12px 20px', fontWeight: 700, width: 140 }}>Default</th>
                  <th style={{ padding: '12px 20px', fontWeight: 700 }}>Description</th>
                </tr>
              </thead>
              <tbody>
                {apiData.nativeProps.map((np, idx) => (
                  <tr
                    key={np.name}
                    style={{
                      backgroundColor: idx % 2 === 0 ? 'var(--color-surface)' : 'var(--color-surface-raised)',
                      borderBottom: idx === apiData.nativeProps.length - 1 ? 'none' : '1px solid var(--color-border-subtle)',
                    }}
                  >
                    <td style={{ padding: '14px 20px', verticalAlign: 'top' }}>
                      <code style={{ fontFamily: "'JetBrains Mono', Consolas, monospace", fontWeight: 700, color: '#10B981', fontSize: 13 }}>
                        {np.name}
                      </code>
                    </td>
                    <td style={{ padding: '14px 20px', verticalAlign: 'top' }}>
                      <code
                        style={{
                          fontFamily: "'JetBrains Mono', Consolas, monospace",
                          fontSize: 12,
                          color: '#E2E8F0',
                          backgroundColor: '#0F172A',
                          padding: '2px 7px',
                          borderRadius: 4,
                          display: 'inline-block',
                          wordBreak: 'break-word',
                          lineHeight: 1.4,
                        }}
                      >
                        {np.type}
                      </code>
                    </td>
                    <td style={{ padding: '14px 20px', verticalAlign: 'top', color: 'var(--color-text-muted)', fontFamily: 'monospace', fontSize: 12 }}>
                      {np.defaultValue}
                    </td>
                    <td style={{ padding: '14px 20px', verticalAlign: 'top', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      {np.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
};

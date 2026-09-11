import React, { useState } from 'react';
import { Card } from '@spectra/react';
import { CopyIcon, CheckIcon, CodeIcon, SparklesIcon, InfoIcon } from '@spectra/icons';
import { HOOK_API_DATA, HookApiReference } from '../../data/apiReferenceData';

interface HookApiSectionProps {
  hookId: string;
}

export const HookApiSection: React.FC<HookApiSectionProps> = ({ hookId }) => {
  const [copiedImport, setCopiedImport] = useState(false);
  const [copiedSignature, setCopiedSignature] = useState(false);
  const [copiedUsage, setCopiedUsage] = useState(false);

  const hookData: HookApiReference | undefined = HOOK_API_DATA[hookId];

  if (!hookData) {
    return null;
  }

  const handleCopy = (text: string, setCopied: (v: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="hook-api" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 12 }}>
      {/* Section Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
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
            Hook API Reference
          </span>
          <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>·</span>
          <span style={{ fontSize: 13, color: 'var(--color-text-secondary)', fontFamily: 'monospace' }}>
            {hookData.hookName}
          </span>
        </div>

        <h3
          style={{
            fontSize: 22,
            fontWeight: 800,
            margin: '0 0 6px 0',
            color: 'var(--color-text-primary)',
            letterSpacing: '-0.02em',
          }}
        >
          {hookData.hookName} API
        </h3>
        <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
          {hookData.description}
        </p>
      </div>

      {/* 1. Import Statement Card */}
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
          <span>Import</span>
          <button
            onClick={() => handleCopy(hookData.importStatement, setCopiedImport)}
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

        <div style={{ padding: '14px 20px' }}>
          <div
            style={{
              backgroundColor: '#0F172A',
              color: '#F8FAFC',
              borderRadius: 8,
              padding: '12px 16px',
              fontFamily: "'JetBrains Mono', Consolas, monospace",
              fontSize: 13,
              overflowX: 'auto',
            }}
          >
            <span style={{ color: '#38BDF8' }}>import</span> {'{ '}
            <span style={{ color: '#4ADE80', fontWeight: 600 }}>{hookData.hookName}</span>
            {' }'} <span style={{ color: '#38BDF8' }}>from</span>{' '}
            <span style={{ color: '#F472B6' }}>'@spectra/primitives'</span>;
          </div>
        </div>
      </Card>

      {/* 2. Hook Function Signature */}
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
          <span>Function Signature</span>
          <button
            onClick={() => handleCopy(hookData.signature, setCopiedSignature)}
            style={{
              background: 'none',
              border: 'none',
              color: copiedSignature ? '#4ADE80' : 'var(--color-text-secondary)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
              cursor: 'pointer',
              fontSize: 12,
              fontWeight: 600,
              padding: 0,
            }}
          >
            {copiedSignature ? <CheckIcon size={13} /> : <CopyIcon size={13} />}
            <span>{copiedSignature ? 'Copied Signature!' : 'Copy Signature'}</span>
          </button>
        </div>

        <div style={{ padding: '14px 20px' }}>
          <div
            style={{
              backgroundColor: '#0F172A',
              borderRadius: 8,
              padding: '12px 16px',
              fontFamily: "'JetBrains Mono', Consolas, monospace",
              fontSize: 13,
              overflowX: 'auto',
              color: '#38BDF8',
            }}
          >
            <code>{hookData.signature}</code>
          </div>
        </div>
      </Card>

      {/* 3. Parameters Table (if hook takes parameters) */}
      {hookData.parameters.length > 0 && (
        <Card
          variant="bordered"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderRadius: 12,
            overflow: 'hidden',
            boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          }}
        >
          <div
            style={{
              padding: '14px 20px',
              backgroundColor: 'var(--color-surface-raised)',
              borderBottom: '1px solid var(--color-border-default)',
            }}
          >
            <h4 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)' }}>
              Parameters ({hookData.parameters.length})
            </h4>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 13 }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--color-surface-raised)', borderBottom: '1px solid var(--color-border-default)' }}>
                  <th style={{ padding: '12px 20px', fontWeight: 700, width: 180 }}>Parameter</th>
                  <th style={{ padding: '12px 20px', fontWeight: 700, width: 240 }}>Type</th>
                  <th style={{ padding: '12px 20px', fontWeight: 700, width: 140 }}>Default</th>
                  <th style={{ padding: '12px 20px', fontWeight: 700 }}>Description</th>
                </tr>
              </thead>
              <tbody>
                {hookData.parameters.map((param, idx) => (
                  <tr
                    key={param.name}
                    style={{
                      backgroundColor: idx % 2 === 0 ? 'var(--color-surface)' : 'var(--color-surface-raised)',
                      borderBottom: idx === hookData.parameters.length - 1 ? 'none' : '1px solid var(--color-border-subtle)',
                    }}
                  >
                    <td style={{ padding: '14px 20px', verticalAlign: 'top' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                        <code style={{ fontFamily: "'JetBrains Mono', Consolas, monospace", fontWeight: 700, color: 'var(--color-action-primary)', fontSize: 13 }}>
                          {param.name}
                        </code>
                        {param.required && (
                          <span style={{ color: '#EF4444', fontWeight: 800, fontSize: 14 }} title="Required parameter">
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
                        }}
                      >
                        {param.type}
                      </code>
                    </td>
                    <td style={{ padding: '14px 20px', verticalAlign: 'top', color: 'var(--color-text-muted)', fontFamily: 'monospace', fontSize: 12 }}>
                      {param.defaultValue}
                    </td>
                    <td style={{ padding: '14px 20px', verticalAlign: 'top', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      {param.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* 4. Return Values Table */}
      {hookData.returnValues.length > 0 && (
        <Card
          variant="bordered"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderRadius: 12,
            overflow: 'hidden',
            boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          }}
        >
          <div
            style={{
              padding: '14px 20px',
              backgroundColor: 'var(--color-surface-raised)',
              borderBottom: '1px solid var(--color-border-default)',
            }}
          >
            <h4 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)' }}>
              Return Values ({hookData.returnValues.length})
            </h4>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 13 }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--color-surface-raised)', borderBottom: '1px solid var(--color-border-default)' }}>
                  <th style={{ padding: '12px 20px', fontWeight: 700, width: 220 }}>Return Property / Method</th>
                  <th style={{ padding: '12px 20px', fontWeight: 700, width: 260 }}>Type</th>
                  <th style={{ padding: '12px 20px', fontWeight: 700 }}>Description</th>
                </tr>
              </thead>
              <tbody>
                {hookData.returnValues.map((ret, idx) => (
                  <tr
                    key={ret.name}
                    style={{
                      backgroundColor: idx % 2 === 0 ? 'var(--color-surface)' : 'var(--color-surface-raised)',
                      borderBottom: idx === hookData.returnValues.length - 1 ? 'none' : '1px solid var(--color-border-subtle)',
                    }}
                  >
                    <td style={{ padding: '14px 20px', verticalAlign: 'top' }}>
                      <code style={{ fontFamily: "'JetBrains Mono', Consolas, monospace", fontWeight: 700, color: '#A855F7', fontSize: 13 }}>
                        {ret.name}
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
                        }}
                      >
                        {ret.type}
                      </code>
                    </td>
                    <td style={{ padding: '14px 20px', verticalAlign: 'top', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      {ret.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* 5. Accessibility & ARIA Mapping Table (if applicable) */}
      {hookData.ariaAttributes && hookData.ariaAttributes.length > 0 && (
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
              padding: '14px 20px',
              backgroundColor: 'var(--color-surface-raised)',
              borderBottom: '1px solid var(--color-border-default)',
            }}
          >
            <h4 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)' }}>
              Accessibility & ARIA Bindings
            </h4>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 13 }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--color-surface-raised)', borderBottom: '1px solid var(--color-border-default)' }}>
                  <th style={{ padding: '12px 20px', fontWeight: 700, width: 220 }}>ARIA Attribute</th>
                  <th style={{ padding: '12px 20px', fontWeight: 700 }}>Accessibility Purpose</th>
                </tr>
              </thead>
              <tbody>
                {hookData.ariaAttributes.map((aria, idx) => (
                  <tr
                    key={aria.attr}
                    style={{
                      backgroundColor: idx % 2 === 0 ? 'var(--color-surface)' : 'var(--color-surface-raised)',
                      borderBottom: idx === hookData.ariaAttributes!.length - 1 ? 'none' : '1px solid var(--color-border-subtle)',
                    }}
                  >
                    <td style={{ padding: '14px 20px', verticalAlign: 'top' }}>
                      <code style={{ fontFamily: "'JetBrains Mono', Consolas, monospace", fontWeight: 700, color: '#10B981', fontSize: 13 }}>
                        {aria.attr}
                      </code>
                    </td>
                    <td style={{ padding: '14px 20px', verticalAlign: 'top', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      {aria.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* 6. Complete TypeScript Usage Recipe */}
      <Card
        variant="bordered"
        style={{
          backgroundColor: '#0F172A',
          borderColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: 12,
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
        }}
      >
        <div
          style={{
            padding: '10px 16px',
            backgroundColor: '#1E293B',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 12,
            color: '#94A3B8',
            fontFamily: "'JetBrains Mono', Consolas, monospace",
          }}
        >
          <span>TypeScript Usage Recipe</span>
          <button
            onClick={() => handleCopy(hookData.exampleUsage, setCopiedUsage)}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: copiedUsage ? '#4ADE80' : '#F1F5F9',
              padding: '3px 10px',
              borderRadius: 4,
              cursor: 'pointer',
              fontSize: 11,
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            {copiedUsage ? <CheckIcon size={12} /> : <CopyIcon size={12} />}
            <span>{copiedUsage ? 'Copied Recipe!' : 'Copy Recipe'}</span>
          </button>
        </div>

        <pre
          style={{
            margin: 0,
            padding: '18px 20px',
            fontSize: 13,
            fontFamily: "'JetBrains Mono', Consolas, monospace",
            lineHeight: 1.6,
            overflowX: 'auto',
            color: '#F8FAFC',
          }}
        >
          <code>{hookData.exampleUsage}</code>
        </pre>
      </Card>
    </div>
  );
};

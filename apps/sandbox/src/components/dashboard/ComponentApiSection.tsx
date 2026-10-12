import React, { useState, useMemo } from 'react';
import { Card, Text, Badge } from '@winplaybox/react';
import { CopyIcon, CheckIcon, CodeIcon, SearchIcon, CloseIcon } from '@winplaybox/icons';
import { COMPONENT_API_DATA, ComponentApiReference, PropApiItem } from '../../data/apiReferenceData';

interface ComponentApiSectionProps {
  componentId: string;
}

/**
 * Microsoft Fluent UI Benchmark Component API Section
 * Dedicated, in-depth Props Reference documenting the primary component
 * plus all child, wrapper, and subcomponents that make up the component family.
 */
export const ComponentApiSection: React.FC<ComponentApiSectionProps> = ({ componentId }) => {
  const apiData: ComponentApiReference | undefined = COMPONENT_API_DATA[componentId];
  const [selectedSubcomponent, setSelectedSubcomponent] = useState<string>('root');
  const [propsSearch, setPropsSearch] = useState<string>('');
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [copiedImport, setCopiedImport] = useState(false);

  if (!apiData) {
    return null;
  }

  // Component families and their subcomponents
  const allSubcomponents = useMemo(() => {
    const list: Array<{ name: string; description: string; props: PropApiItem[] }> = [
      {
        name: apiData.componentName,
        description: apiData.description,
        props: apiData.props,
      },
    ];

    if (apiData.subcomponents && apiData.subcomponents.length > 0) {
      apiData.subcomponents.forEach((sub) => {
        list.push({
          name: sub.name,
          description: sub.description,
          props: sub.props,
        });
      });
    }

    return list;
  }, [apiData]);

  // Active target component/subcomponent
  const activeComponent = useMemo(() => {
    if (selectedSubcomponent === 'root') {
      return allSubcomponents[0];
    }
    return allSubcomponents.find((c) => c.name === selectedSubcomponent) || allSubcomponents[0];
  }, [allSubcomponents, selectedSubcomponent]);

  // Filtered props list
  const filteredProps = useMemo(() => {
    if (!propsSearch.trim()) return activeComponent.props;
    const q = propsSearch.toLowerCase().trim();
    return activeComponent.props.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.defaultValue.toLowerCase().includes(q)
    );
  }, [activeComponent, propsSearch]);

  const handleCopyType = (typeStr: string) => {
    navigator.clipboard.writeText(typeStr);
    setCopiedType(typeStr);
    setTimeout(() => setCopiedType(null), 1800);
  };

  const handleCopyImport = () => {
    navigator.clipboard.writeText(apiData.importStatement);
    setCopiedImport(true);
    setTimeout(() => setCopiedImport(false), 2000);
  };

  return (
    <div id="api" style={{ display: 'flex', flexDirection: 'column', gap: 20, scrollMarginTop: 80 }}>
      {/* Header Card (Fluent UI Style) */}
      <Card
        variant="bordered"
        style={{
          backgroundColor: 'var(--color-surface)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          padding: '24px 28px',
          borderRadius: 14,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
                padding: '3px 10px',
                borderRadius: 20,
                backgroundColor: 'rgba(0, 120, 212, 0.12)',
                color: '#0078D4',
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
            <span style={{ fontSize: 13, color: 'var(--color-text-secondary)', fontFamily: 'monospace', fontWeight: 600 }}>
              {apiData.componentName}
            </span>
          </div>

          <button
            onClick={handleCopyImport}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '5px 12px',
              borderRadius: 6,
              border: '1px solid var(--color-border-default)',
              backgroundColor: 'var(--color-surface-raised)',
              color: copiedImport ? '#10B981' : 'var(--color-text-secondary)',
              cursor: 'pointer',
              fontSize: 12,
              fontWeight: 600,
              fontFamily: "'JetBrains Mono', Consolas, monospace",
              transition: 'all 0.15s ease',
            }}
            title="Copy package import statement"
          >
            {copiedImport ? <CheckIcon size={12} color="#10B981" /> : <CopyIcon size={12} />}
            <span>{copiedImport ? 'Import Copied!' : apiData.importStatement}</span>
          </button>
        </div>

        <Text
          as="h2"
          variant="heading"
          style={{
            fontSize: 24,
            fontWeight: 800,
            margin: '0 0 6px 0',
            color: 'var(--color-text-primary)',
            letterSpacing: '-0.02em',
          }}
        >
          {apiData.componentName} Component Props
        </Text>
        <p
          style={{
            fontSize: 13.5,
            color: 'var(--color-text-secondary)',
            margin: 0,
            lineHeight: 1.55,
            maxWidth: 820,
          }}
        >
          {apiData.description}
        </p>
      </Card>

      {/* Main Props Card with Fluent UI Subcomponent Selector */}
      <Card
        variant="bordered"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderRadius: 14,
          overflow: 'hidden',
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        }}
      >
        {/* Subcomponent Switcher Toolbar (Fluent UI Benchmark) */}
        {allSubcomponents.length > 1 && (
          <div
            style={{
              padding: '12px 20px',
              backgroundColor: 'var(--color-surface-raised)',
              borderBottom: '1px solid var(--color-border-default)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 12,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--color-text-muted)',
                  marginRight: 4,
                }}
              >
                Component:
              </span>
              {allSubcomponents.map((sub, idx) => {
                const isSelected =
                  (selectedSubcomponent === 'root' && idx === 0) ||
                  selectedSubcomponent === sub.name;
                return (
                  <button
                    key={sub.name}
                    onClick={() => {
                      setSelectedSubcomponent(idx === 0 ? 'root' : sub.name);
                      setPropsSearch('');
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      padding: '5px 12px',
                      borderRadius: 6,
                      border: isSelected ? '1.5px solid #0078D4' : '1px solid var(--color-border-default)',
                      backgroundColor: isSelected ? 'rgba(0, 120, 212, 0.1)' : 'var(--color-surface)',
                      color: isSelected ? '#0078D4' : 'var(--color-text-primary)',
                      cursor: 'pointer',
                      fontSize: 12.5,
                      fontWeight: isSelected ? 700 : 500,
                      fontFamily: "'JetBrains Mono', Consolas, monospace",
                      transition: 'all 0.12s ease',
                    }}
                  >
                    <span>{sub.name}</span>
                    <span
                      style={{
                        fontSize: 10,
                        padding: '1px 5px',
                        borderRadius: 10,
                        backgroundColor: isSelected ? '#0078D4' : 'var(--color-surface-sunken)',
                        color: isSelected ? '#FFFFFF' : 'var(--color-text-muted)',
                        fontWeight: 600,
                      }}
                    >
                      {sub.props.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Props Filter Bar & Active Subcomponent Summary */}
        <div
          style={{
            padding: '12px 20px',
            borderBottom: '1px solid var(--color-border-subtle)',
            backgroundColor: 'var(--color-surface-raised)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-primary)' }}>
              {activeComponent.name} Props ({filteredProps.length} of {activeComponent.props.length})
            </span>
            <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
              — {activeComponent.description}
            </span>
          </div>

          <div style={{ position: 'relative', width: 220 }}>
            <SearchIcon
              size={12}
              style={{
                position: 'absolute',
                left: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--color-text-muted)',
                pointerEvents: 'none',
              }}
            />
            <input
              type="text"
              value={propsSearch}
              onChange={(e) => setPropsSearch(e.target.value)}
              placeholder="Filter props..."
              style={{
                width: '100%',
                height: 28,
                paddingLeft: 26,
                paddingRight: propsSearch ? 22 : 8,
                fontSize: 12,
                borderRadius: 4,
                border: '1px solid var(--color-border-default)',
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-text-primary)',
                outline: 'none',
              }}
            />
            {propsSearch && (
              <button
                onClick={() => setPropsSearch('')}
                style={{
                  position: 'absolute',
                  right: 4,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--color-text-muted)',
                  padding: 2,
                  display: 'flex',
                  alignItems: 'center',
                }}
                title="Clear filter"
              >
                <CloseIcon size={10} />
              </button>
            )}
          </div>
        </div>

        {/* Props Table (Exact Fluent UI Layout) */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 13 }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--color-surface-raised)', borderBottom: '1px solid var(--color-border-default)' }}>
                <th style={{ padding: '12px 20px', fontWeight: 700, width: 200, color: 'var(--color-text-secondary)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Property
                </th>
                <th style={{ padding: '12px 20px', fontWeight: 700, width: 280, color: 'var(--color-text-secondary)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Type
                </th>
                <th style={{ padding: '12px 20px', fontWeight: 700, width: 140, color: 'var(--color-text-secondary)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Default
                </th>
                <th style={{ padding: '12px 20px', fontWeight: 700, color: 'var(--color-text-secondary)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProps.length === 0 ? (
                <tr>
                  <td colSpan={4} style={{ padding: '36px 20px', textAlign: 'center', color: 'var(--color-text-muted)' }}>
                    No props match &quot;{propsSearch}&quot;.
                  </td>
                </tr>
              ) : (
                filteredProps.map((p, idx) => {
                  const isCopied = copiedType === p.type;
                  return (
                    <tr
                      key={p.name}
                      style={{
                        backgroundColor: idx % 2 === 0 ? 'var(--color-surface)' : 'var(--color-surface-raised)',
                        borderBottom: idx === filteredProps.length - 1 ? 'none' : '1px solid var(--color-border-subtle)',
                        transition: 'background-color 0.1s ease',
                      }}
                    >
                      {/* Prop Name */}
                      <td style={{ padding: '14px 20px', verticalAlign: 'top' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                          <code
                            style={{
                              fontFamily: "'JetBrains Mono', Consolas, monospace",
                              fontWeight: 700,
                              color: '#0078D4',
                              fontSize: 13,
                            }}
                          >
                            {p.name}
                          </code>
                          {p.required && (
                            <span
                              style={{
                                fontSize: 9.5,
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                padding: '1px 5px',
                                borderRadius: 4,
                                backgroundColor: 'rgba(239, 68, 68, 0.12)',
                                color: '#EF4444',
                                border: '1px solid rgba(239, 68, 68, 0.3)',
                              }}
                              title="Required property"
                            >
                              required
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Prop Type */}
                      <td style={{ padding: '14px 20px', verticalAlign: 'top' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6 }}>
                          <code
                            style={{
                              fontFamily: "'JetBrains Mono', Consolas, monospace",
                              fontSize: 12,
                              color: 'var(--color-text-primary)',
                              backgroundColor: 'var(--color-surface-sunken)',
                              padding: '2px 6px',
                              borderRadius: 4,
                              border: '1px solid var(--color-border-subtle)',
                              wordBreak: 'break-word',
                              lineHeight: 1.45,
                              flex: 1,
                            }}
                          >
                            {p.type}
                          </code>
                          <button
                            onClick={() => handleCopyType(p.type)}
                            style={{
                              background: 'transparent',
                              border: 'none',
                              cursor: 'pointer',
                              color: isCopied ? '#10B981' : 'var(--color-text-muted)',
                              padding: 2,
                              flexShrink: 0,
                            }}
                            title="Copy type definition"
                          >
                            {isCopied ? <CheckIcon size={12} color="#10B981" /> : <CopyIcon size={12} />}
                          </button>
                        </div>
                      </td>

                      {/* Default Value */}
                      <td style={{ padding: '14px 20px', verticalAlign: 'top' }}>
                        <code
                          style={{
                            fontFamily: "'JetBrains Mono', Consolas, monospace",
                            fontSize: 12,
                            color: p.defaultValue === 'undefined' ? 'var(--color-text-muted)' : 'var(--color-text-secondary)',
                            backgroundColor: p.defaultValue === 'undefined' ? 'transparent' : 'var(--color-surface-sunken)',
                            padding: p.defaultValue === 'undefined' ? 0 : '2px 6px',
                            borderRadius: 4,
                          }}
                        >
                          {p.defaultValue}
                        </code>
                      </td>

                      {/* Description */}
                      <td style={{ padding: '14px 20px', verticalAlign: 'top', color: 'var(--color-text-primary)', lineHeight: 1.55 }}>
                        {p.description}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

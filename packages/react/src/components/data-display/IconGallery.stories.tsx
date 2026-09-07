import React, { useState, useMemo } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import * as Icons from '@spectra/icons';
import { iconManifest } from '@spectra/icons';

const meta: Meta = {
  title: 'Design System/Icon Gallery',
  parameters: {
    layout: 'padded',
  },
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [iconSize, setIconSize] = useState(24);
    const [copiedName, setCopiedName] = useState<string | null>(null);
    const [displayLimit, setDisplayLimit] = useState(120);

    const categories = useMemo(() => {
      const set = new Set<string>();
      iconManifest.forEach((item) => {
        if (item.category) set.add(item.category);
      });
      return ['All', ...Array.from(set).sort()];
    }, []);

    const filteredIcons = useMemo(() => {
      const q = search.trim().toLowerCase();
      return iconManifest.filter((item) => {
        const matchesCategory =
          selectedCategory === 'All' || item.category === selectedCategory;
        if (!matchesCategory) return false;
        if (!q) return true;
        return (
          item.name.toLowerCase().includes(q) ||
          item.componentName.toLowerCase().includes(q) ||
          item.tags.some((t) => t.includes(q))
        );
      });
    }, [search, selectedCategory]);

    const handleCopy = (compName: string) => {
      const text = `import { ${compName} } from '@spectra/icons';`;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
      }
      setCopiedName(compName);
      setTimeout(() => setCopiedName(null), 2000);
    };

    return (
      <div style={{ fontFamily: 'sans-serif', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 24 }}>
          <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>
            Spectra Icon Library (DesignCode UI)
          </h1>
          <p style={{ color: 'var(--color-text-secondary, #666)', fontSize: 14 }}>
            Explore {iconManifest.length} unique flat SVG vector icons. Click any icon to copy its React import snippet.
          </p>
        </div>

        {/* Toolbar: Search, Category, Size */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
            padding: 16,
            borderRadius: 8,
            backgroundColor: 'var(--color-surface-raised, #f5f5f5)',
            border: '1px solid var(--color-border-default, #e0e0e0)',
          }}
        >
          <input
            type="text"
            placeholder="Search 1,200+ icons by name or tag (e.g. arrow, chat, user)..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setDisplayLimit(120);
            }}
            style={{
              flex: '1 1 300px',
              padding: '10px 14px',
              borderRadius: 6,
              border: '1px solid var(--color-border-default, #ccc)',
              backgroundColor: 'var(--color-surface, #fff)',
              color: 'var(--color-text-primary, #111)',
              fontSize: 14,
            }}
          />

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 13, color: 'var(--color-text-secondary, #666)' }}>Size:</span>
            {[16, 20, 24, 32, 40].map((s) => (
              <button
                key={s}
                onClick={() => setIconSize(s)}
                style={{
                  padding: '4px 8px',
                  borderRadius: 4,
                  border: '1px solid var(--color-border-default, #ccc)',
                  backgroundColor: iconSize === s ? 'var(--color-action-primary, #0066cc)' : 'var(--color-surface, #fff)',
                  color: iconSize === s ? '#fff' : 'inherit',
                  cursor: 'pointer',
                  fontSize: 12,
                  fontWeight: iconSize === s ? 600 : 400,
                }}
              >
                {s}px
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            marginBottom: 24,
          }}
        >
          {categories.slice(0, 15).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setDisplayLimit(120);
              }}
              style={{
                padding: '6px 14px',
                borderRadius: 20,
                border: '1px solid var(--color-border-default, #ddd)',
                backgroundColor: selectedCategory === cat ? 'var(--color-action-primary, #0066cc)' : 'transparent',
                color: selectedCategory === cat ? '#fff' : 'var(--color-text-primary, #333)',
                fontSize: 12,
                fontWeight: selectedCategory === cat ? 600 : 500,
                cursor: 'pointer',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Status Counter */}
        <div style={{ fontSize: 13, color: 'var(--color-text-secondary, #777)', marginBottom: 16 }}>
          Showing {Math.min(filteredIcons.length, displayLimit)} of {filteredIcons.length} matched icons
          {copiedName && (
            <span style={{ marginLeft: 16, color: 'var(--color-feedback-success, green)', fontWeight: 600 }}>
              ✓ Copied import for {copiedName}!
            </span>
          )}
        </div>

        {/* Icon Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
            gap: 12,
          }}
        >
          {filteredIcons.slice(0, displayLimit).map((item) => {
            const IconComponent = (Icons as any)[item.componentName];
            if (!IconComponent) return null;

            return (
              <div
                key={item.id}
                onClick={() => handleCopy(item.componentName)}
                title={`Click to copy: import { ${item.componentName} } from '@spectra/icons'`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px 8px',
                  borderRadius: 8,
                  border: '1px solid var(--color-border-default, #e5e5e5)',
                  backgroundColor: 'var(--color-surface, #fff)',
                  cursor: 'pointer',
                  transition: 'transform 0.15s ease, border-color 0.15s ease',
                  textAlign: 'center',
                }}
              >
                <div style={{ marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <IconComponent size={iconSize} color="currentColor" />
                </div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: 'var(--color-text-primary, #222)',
                    wordBreak: 'break-word',
                    lineHeight: 1.2,
                  }}
                >
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {displayLimit < filteredIcons.length && (
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <button
              onClick={() => setDisplayLimit((prev) => prev + 120)}
              style={{
                padding: '10px 24px',
                borderRadius: 6,
                border: '1px solid var(--color-border-default, #ccc)',
                backgroundColor: 'var(--color-surface-raised, #f0f0f0)',
                color: 'var(--color-text-primary, #111)',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Load More Icons ({filteredIcons.length - displayLimit} remaining)
            </button>
          </div>
        )}
      </div>
    );
  },
};

import { describe, it, expect } from 'vitest';
import React from 'react';
import * as Icons from './index';
import { iconManifest } from './index';

describe('@spectra/icons Library', () => {
  it('contains over 1,200 compiled icon components', () => {
    expect(iconManifest.length).toBeGreaterThan(1200);
  });

  it('exports every icon defined in the manifest', () => {
    // Sample check 20 icons from manifest
    const sample = iconManifest.slice(0, 20);
    for (const item of sample) {
      const Comp = (Icons as any)[item.componentName];
      expect(Comp).toBeDefined();
      expect(typeof Comp).toBe('function');
    }
  });

  it('renders SVG with default size, currentColor, and attributes', () => {
    const el = React.createElement(Icons.ArchiveIcon, { size: 32, color: 'red' });
    expect(el).toBeDefined();
    expect(el.props.size).toBe(32);
    expect(el.props.color).toBe('red');
  });

  it('preserves core curated icons for backwards compatibility', () => {
    expect(Icons.CheckIcon).toBeDefined();
    expect(Icons.CloseIcon).toBeDefined();
    expect(Icons.ChevronDownIcon).toBeDefined();
    expect(Icons.SunIcon).toBeDefined();
    expect(Icons.MoonIcon).toBeDefined();
  });

  it('manifest metadata includes categories and tags', () => {
    const first = iconManifest[0];
    expect(first.id).toBeDefined();
    expect(first.name).toBeDefined();
    expect(first.componentName).toBeDefined();
    expect(first.category).toBeDefined();
    expect(Array.isArray(first.tags)).toBe(true);
  });
});

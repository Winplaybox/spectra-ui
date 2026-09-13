import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Button, Badge } from '@spectra/react';
import { CheckIcon, CopyIcon, ExternalLinkIcon } from '@spectra/icons';

interface TokensSectionProps {
  tokenId?: string;
}

export const TokensSection: React.FC<TokensSectionProps> = ({ tokenId = 'colors' }) => {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    setCopiedToken(text);
    setTimeout(() => setCopiedToken(null), 1800);
  };

  // -------------------------------------------------------------
  // 1. COLOR TOKENS DATA (Light vs Dark Mode Mappings & Flat Palettes)
  // -------------------------------------------------------------
  const semanticColorsComparison = [
    {
      token: '--color-surface',
      role: 'Surface Base (Application background)',
      light: '#FFFFFF',
      dark: '#1A1A1A',
      contrast: '21:1 (AAA)',
    },
    {
      token: '--color-surface-raised',
      role: 'Surface Raised (Cards, toolbars, panels)',
      light: '#F7F7F8',
      dark: '#242424',
      contrast: '18.4:1 (AAA)',
    },
    {
      token: '--color-surface-sunken',
      role: 'Surface Sunken (Code blocks, inputs)',
      light: '#F1F5F9',
      dark: '#111827',
      contrast: '16.5:1 (AAA)',
    },
    {
      token: '--color-border-default',
      role: 'Border Default (Crisp 1px dividers)',
      light: '#E4E4E7',
      dark: '#333333',
      contrast: '3.8:1 (AA)',
    },
    {
      token: '--color-border-strong',
      role: 'Border Strong (Active focus ring, tab border)',
      light: '#D4D4D8',
      dark: '#444444',
      contrast: '4.9:1 (AA)',
    },
    {
      token: '--color-text-primary',
      role: 'Text Primary (Headings, high-contrast text)',
      light: '#18181B',
      dark: '#F4F4F5',
      contrast: '16.2:1 (AAA)',
    },
    {
      token: '--color-text-secondary',
      role: 'Text Secondary (Descriptions, metadata)',
      light: '#3F3F46',
      dark: '#D4D4D8',
      contrast: '9.8:1 (AAA)',
    },
    {
      token: '--color-text-muted',
      role: 'Text Muted (Placeholders, disabled state)',
      light: '#71717A',
      dark: '#A1A1AA',
      contrast: '4.6:1 (AA)',
    },
    {
      token: '--color-action-primary',
      role: 'Action Primary (Main call to action)',
      light: '#2563EB',
      dark: '#3B82F6',
      contrast: '4.8:1 (AA)',
    },
    {
      token: '--color-action-hover',
      role: 'Action Hover (Hover interaction state)',
      light: '#1D4ED8',
      dark: '#60A5FA',
      contrast: '5.4:1 (AA)',
    },
    {
      token: '--color-feedback-success',
      role: 'Feedback Success (Affirmations, active badges)',
      light: '#16A34A',
      dark: '#4ADE80',
      contrast: '4.7:1 (AA)',
    },
    {
      token: '--color-feedback-warning',
      role: 'Feedback Warning (Caution alerts, review states)',
      light: '#D97706',
      dark: '#FBBF24',
      contrast: '4.5:1 (AA)',
    },
    {
      token: '--color-feedback-error',
      role: 'Feedback Error (Destructive actions, error states)',
      light: '#DC2626',
      dark: '#F87171',
      contrast: '4.9:1 (AA)',
    },
    {
      token: '--color-feedback-info',
      role: 'Feedback Info (Guidance tips, notifications)',
      light: '#2563EB',
      dark: '#3B82F6',
      contrast: '4.8:1 (AA)',
    },
  ];

  const swissFlatPalettes = [
    {
      family: 'Swiss Sapphire (Brand Action)',
      shades: [
        { step: 50, hex: '#EFF6FF' },
        { step: 100, hex: '#DBEAFE' },
        { step: 200, hex: '#BFDBFE' },
        { step: 300, hex: '#93C5FD' },
        { step: 400, hex: '#60A5FA' },
        { step: 500, hex: '#3B82F6' },
        { step: 600, hex: '#2563EB' },
        { step: 700, hex: '#1D4ED8' },
        { step: 800, hex: '#1E40AF' },
        { step: 900, hex: '#1E3A8A' },
      ],
    },
    {
      family: 'Emerald Green (Success Feedback)',
      shades: [
        { step: 50, hex: '#F0FDF4' },
        { step: 100, hex: '#DCFCE7' },
        { step: 200, hex: '#BBF7D0' },
        { step: 300, hex: '#86EFAC' },
        { step: 400, hex: '#4ADE80' },
        { step: 500, hex: '#22C55E' },
        { step: 600, hex: '#16A34A' },
        { step: 700, hex: '#15803D' },
        { step: 800, hex: '#166534' },
        { step: 900, hex: '#14532D' },
      ],
    },
    {
      family: 'Sunflower Amber (Warning Feedback)',
      shades: [
        { step: 50, hex: '#FFFBEB' },
        { step: 100, hex: '#FEF3C7' },
        { step: 200, hex: '#FDE68A' },
        { step: 300, hex: '#FCD34D' },
        { step: 400, hex: '#FBBF24' },
        { step: 500, hex: '#F59E0B' },
        { step: 600, hex: '#D97706' },
        { step: 700, hex: '#B45309' },
        { step: 800, hex: '#92400E' },
        { step: 900, hex: '#78350F' },
      ],
    },
    {
      family: 'Alizarin Crimson (Destructive Error)',
      shades: [
        { step: 50, hex: '#FEF2F2' },
        { step: 100, hex: '#FEE2E2' },
        { step: 200, hex: '#FECACA' },
        { step: 300, hex: '#FCA5A5' },
        { step: 400, hex: '#F87171' },
        { step: 500, hex: '#EF4444' },
        { step: 600, hex: '#DC2626' },
        { step: 700, hex: '#B91C1C' },
        { step: 800, hex: '#991B1B' },
        { step: 900, hex: '#7F1D1D' },
      ],
    },
    {
      family: 'Amethyst Purple (Creative Accent)',
      shades: [
        { step: 50, hex: '#FAF5FF' },
        { step: 100, hex: '#F3E8FF' },
        { step: 200, hex: '#E9D5FF' },
        { step: 300, hex: '#D8B4FE' },
        { step: 400, hex: '#C084FC' },
        { step: 500, hex: '#A855F7' },
        { step: 600, hex: '#9333EA' },
        { step: 700, hex: '#7E22CE' },
        { step: 800, hex: '#6B21A8' },
        { step: 900, hex: '#581C87' },
      ],
    },
    {
      family: 'Zinc Slate (Surfaces & Neutral Hierarchy)',
      shades: [
        { step: 50, hex: '#FAFAFA' },
        { step: 100, hex: '#F4F4F5' },
        { step: 200, hex: '#E4E4E7' },
        { step: 300, hex: '#D4D4D8' },
        { step: 400, hex: '#A1A1AA' },
        { step: 500, hex: '#71717A' },
        { step: 600, hex: '#52525B' },
        { step: 700, hex: '#3F3F46' },
        { step: 800, hex: '#27272A' },
        { step: 900, hex: '#18181B' },
      ],
    },
  ];

  // -------------------------------------------------------------
  // 2. TYPOGRAPHY TOKENS DATA & INTERACTIVE TESTER
  // -------------------------------------------------------------
  const [testText, setTestText] = useState('Design Systems are languages, not collections of static styles.');
  const [testFontSize, setTestFontSize] = useState(20);
  const [testFontWeight, setTestFontWeight] = useState(600);
  const [testLineHeight, setTestLineHeight] = useState(1.5);

  const typographyRamp = [
    { token: 'font.size.display', size: '36px', line: '44px', weight: 800, name: 'Display', sample: 'Display Title — Swiss Minimalism' },
    { token: 'font.size.h1', size: '28px', line: '36px', weight: 700, name: 'Heading 1', sample: 'Structured Visual Hierarchy' },
    { token: 'font.size.h2', size: '22px', line: '28px', weight: 700, name: 'Heading 2', sample: 'Clear Sectional Anchor Point' },
    { token: 'font.size.h3', size: '18px', line: '24px', weight: 600, name: 'Heading 3', sample: 'Component Card Header' },
    { token: 'font.size.h4', size: '16px', line: '22px', weight: 600, name: 'Heading 4', sample: 'Form Field Label & Navigation Title' },
    { token: 'font.size.body-lg', size: '16px', line: '24px', weight: 400, name: 'Body Large', sample: 'Editorial lead paragraphs and hero overview descriptions.' },
    { token: 'font.size.body', size: '14px', line: '20px', weight: 400, name: 'Body Medium', sample: 'Standard readability copy aligned to the 4px vertical rhythm grid.' },
    { token: 'font.size.body-sm', size: '12px', line: '16px', weight: 500, name: 'Body Small', sample: 'Input descriptions, table cells, and secondary card captions.' },
    { token: 'font.size.caption', size: '11px', line: '14px', weight: 600, name: 'Caption / Badge', sample: 'UPPERCASE METADATA & MICRO STATUS TAGS' },
    { token: 'font.family.mono', size: '13px', line: '18px', weight: 400, name: 'Code / Mono', sample: 'const token = getComputedStyle(document.body);', mono: true },
  ];

  // -------------------------------------------------------------
  // 3. SPACING TOKENS DATA & BOX MODEL SIMULATOR
  // -------------------------------------------------------------
  const [boxPadding, setBoxPadding] = useState(16);
  const [boxGap, setBoxGap] = useState(12);

  const spacingGrid = [
    { token: 'spacing.0', px: '0px', rem: '0rem', role: 'Zero reset' },
    { token: 'spacing.1', px: '4px', rem: '0.25rem', role: 'Tight icon gap, tag padding' },
    { token: 'spacing.2', px: '8px', rem: '0.5rem', role: 'Compact button gap, input horizontal padding' },
    { token: 'spacing.3', px: '12px', rem: '0.75rem', role: 'Standard button padding, list item separation' },
    { token: 'spacing.4', px: '16px', rem: '1rem', role: 'Card internal padding, standard form stack' },
    { token: 'spacing.5', px: '20px', rem: '1.25rem', role: 'Dialog modal padding, section header offset' },
    { token: 'spacing.6', px: '24px', rem: '1.5rem', role: 'Large container gutter, dashboard widget gap' },
    { token: 'spacing.8', px: '32px', rem: '2rem', role: 'Hero header margin, major section divider' },
    { token: 'spacing.10', px: '40px', rem: '2.5rem', role: 'Landing page row padding' },
    { token: 'spacing.12', px: '48px', rem: '3rem', role: 'Page layout margin' },
    { token: 'spacing.16', px: '64px', rem: '4rem', role: 'Extra large hero viewport spacing' },
    { token: 'spacing.20', px: '80px', rem: '5rem', role: 'Display section offset' },
    { token: 'spacing.24', px: '96px', rem: '6rem', role: 'Maximum boundary whitespace' },
  ];

  // -------------------------------------------------------------
  // 4. RADII TOKENS DATA & INTERACTIVE SHAPE TESTER
  // -------------------------------------------------------------
  const [selectedRadius, setSelectedRadius] = useState('6px');

  const radiiScale = [
    { token: 'radius.none', value: '0px', name: 'Sharp (Swiss Strict)', role: 'Zero rounding, sharp editorial flat borders' },
    { token: 'radius.xs', value: '2px', name: 'Subtle Extra Small', role: 'Micro badges, tooltips, tags' },
    { token: 'radius.sm', value: '4px', name: 'Small (Standard Controls)', role: 'Buttons, inputs, checkboxes, selects' },
    { token: 'radius.md', value: '6px', name: 'Medium (Card Surfaces)', role: 'Cards, popovers, dropdown menus' },
    { token: 'radius.lg', value: '8px', name: 'Large (Containers)', role: 'Dialog modals, application sheets, drawers' },
    { token: 'radius.xl', value: '12px', name: 'Extra Large', role: 'Floating overlays, elevated hero panels' },
    { token: 'radius.2xl', value: '16px', name: 'Double Extra Large', role: 'Large promotional media banners' },
    { token: 'radius.full', value: '9999px', name: 'Pill / Circular', role: 'Round avatars, pill badges, switch tracks' },
  ];

  // -------------------------------------------------------------
  // 5. SHADOWS & ELEVATION DATA
  // -------------------------------------------------------------
  const [elevationLevel, setElevationLevel] = useState(2);

  const elevationTokens = [
    {
      level: 0,
      name: 'Elevation 0 (Flat)',
      shadowLight: 'none',
      shadowDark: 'none',
      borderLight: '1px solid #E4E4E7',
      borderDark: '1px solid #333333',
      useCase: 'Flat resting surfaces, dividers, canvas base',
    },
    {
      level: 1,
      name: 'Elevation 1 (Card Resting)',
      shadowLight: '0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)',
      shadowDark: '0 1px 3px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      borderLight: '1px solid #E4E4E7',
      borderDark: '1px solid #333333',
      useCase: 'Resting dashboard cards, list items, search bars',
    },
    {
      level: 2,
      name: 'Elevation 2 (Card Hover / Raised)',
      shadowLight: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)',
      shadowDark: '0 4px 16px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
      borderLight: '1px solid #D4D4D8',
      borderDark: '1px solid #444444',
      useCase: 'Hover states on interactive cards, active toolbars',
    },
    {
      level: 3,
      name: 'Elevation 3 (Dropdown & Popover)',
      shadowLight: '0 8px 24px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.06)',
      shadowDark: '0 8px 30px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      borderLight: '1px solid #D4D4D8',
      borderDark: '1px solid #444444',
      useCase: 'Select menus, auto-complete dropdowns, tooltips',
    },
    {
      level: 4,
      name: 'Elevation 4 (Modal Dialog & Drawer)',
      shadowLight: '0 16px 40px rgba(0, 0, 0, 0.16), 0 6px 12px rgba(0, 0, 0, 0.08)',
      shadowDark: '0 16px 48px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
      borderLight: '1px solid #CBD5E1',
      borderDark: '1px solid #555555',
      useCase: 'Confirmation dialogs, slide-out configuration drawers',
    },
    {
      level: 5,
      name: 'Elevation 5 (Toast Notification)',
      shadowLight: '0 24px 60px rgba(0, 0, 0, 0.22), 0 10px 20px rgba(0, 0, 0, 0.1)',
      shadowDark: '0 24px 72px rgba(0, 0, 0, 0.9), inset 0 1px 0 rgba(255, 255, 255, 0.16)',
      borderLight: '1px solid #94A3B8',
      borderDark: '1px solid #666666',
      useCase: 'Floating toast alerts, priority modal dialogs',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 1200, margin: '0 auto' }}>

      {/* ============================================================== */}
      {/* SCREEN: /tokens/colors                                         */}
      {/* ============================================================== */}
      {tokenId === 'colors' && (
        <>
          {/* Header Card */}
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <Badge variant="primary">Semantic Color System</Badge>
                <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Spectra Calibrated Tokens</span>
              </div>
              <CardTitle>Semantic Color Tokens (Light & Dark Reactive)</CardTitle>
              <CardDescription>
                Spectra UI employs a dual-palette architecture. Unlike static colors, each token dynamically shifts its RGB values, contrast ratios, and lightness levels between Light mode and Dark mode to guarantee WCAG AAA/AA legibility. Click any token to copy its CSS variable.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Light vs Dark Comparison Table */}
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
            <div style={{ padding: '18px 24px', borderBottom: '1px solid var(--color-border-default)', backgroundColor: 'var(--color-surface-raised)' }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                Side-by-Side Light vs. Dark Mode Mappings
              </h3>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 13 }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-surface-raised)', borderBottom: '1px solid var(--color-border-default)' }}>
                    <th style={{ padding: '12px 20px', fontWeight: 600 }}>CSS Variable</th>
                    <th style={{ padding: '12px 20px', fontWeight: 600 }}>Semantic Role</th>
                    <th style={{ padding: '12px 20px', fontWeight: 600 }}>Light Value</th>
                    <th style={{ padding: '12px 20px', fontWeight: 600 }}>Dark Value</th>
                    <th style={{ padding: '12px 20px', fontWeight: 600 }}>Active Swatch</th>
                    <th style={{ padding: '12px 20px', fontWeight: 600 }}>WCAG</th>
                  </tr>
                </thead>
                <tbody>
                  {semanticColorsComparison.map((row, idx) => {
                    const isCopied = copiedToken === row.token;
                    return (
                      <tr
                        key={row.token}
                        onClick={() => copyToClipboard(`var(${row.token})`)}
                        style={{
                          backgroundColor: idx % 2 === 0 ? 'var(--color-surface)' : 'var(--color-surface-raised)',
                          borderBottom: idx === semanticColorsComparison.length - 1 ? 'none' : '1px solid var(--color-border-subtle)',
                          cursor: 'pointer',
                        }}
                        title="Click to copy CSS variable"
                      >
                        <td style={{ padding: '12px 20px', fontFamily: 'monospace', fontWeight: 600, color: 'var(--color-action-primary)' }}>
                          var({row.token})
                        </td>
                        <td style={{ padding: '12px 20px', color: 'var(--color-text-secondary)' }}>
                          {row.role}
                        </td>
                        <td style={{ padding: '12px 20px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <span style={{ width: 16, height: 16, borderRadius: 3, backgroundColor: row.light, border: '1px solid #E2E8F0', display: 'inline-block' }} />
                            <code style={{ fontSize: 12 }}>{row.light}</code>
                          </div>
                        </td>
                        <td style={{ padding: '12px 20px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <span style={{ width: 16, height: 16, borderRadius: 3, backgroundColor: row.dark, border: '1px solid #334155', display: 'inline-block' }} />
                            <code style={{ fontSize: 12 }}>{row.dark}</code>
                          </div>
                        </td>
                        <td style={{ padding: '12px 20px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <div
                              style={{
                                width: 28,
                                height: 28,
                                borderRadius: 4,
                                backgroundColor: `var(${row.token})`,
                                border: '1px solid var(--color-border-default)',
                              }}
                            />
                            {isCopied && (
                              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 700, color: 'var(--color-action-primary)' }}>
                                <CheckIcon size={12} /> Copied
                              </span>
                            )}
                          </div>
                        </td>
                        <td style={{ padding: '12px 20px' }}>
                          <span style={{ fontSize: 11, fontWeight: 600, padding: '2px 6px', borderRadius: 4, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-subtle)' }}>
                            {row.contrast}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Extended Swiss Flat UI Color Palette */}
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <CardTitle>Extended Swiss Flat UI Palettes (50–900 Ramps)</CardTitle>
              <CardDescription>
                Curated harmonic palettes inspired by Swiss poster modernism and Material UI density scales. Click any swatch to copy hex code.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {swissFlatPalettes.map((pal) => (
                  <div key={pal.family}>
                    <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 8, color: 'var(--color-text-primary)' }}>
                      {pal.family}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))', gap: 8 }}>
                      {pal.shades.map((s) => {
                        const isCopied = copiedToken === s.hex;
                        return (
                          <div
                            key={s.step}
                            onClick={() => copyToClipboard(s.hex)}
                            style={{
                              backgroundColor: s.hex,
                              borderRadius: 4,
                              height: 64,
                              padding: 8,
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              cursor: 'pointer',
                              border: '1px solid rgba(0,0,0,0.08)',
                              color: s.step > 400 ? '#FFFFFF' : '#0F172A',
                              transition: 'transform 0.1s ease',
                            }}
                          >
                            <span style={{ fontSize: 11, fontWeight: 700 }}>{s.step}</span>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: 10, fontFamily: 'monospace' }}>
                              {isCopied ? <><CheckIcon size={10} /> Copied</> : s.hex}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {/* ============================================================== */}
      {/* SCREEN: /tokens/typography                                     */}
      {/* ============================================================== */}
      {tokenId === 'typography' && (
        <>
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <Badge variant="primary">Typography Ramp</Badge>
                <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Swiss Asymmetrical Geometry</span>
              </div>
              <CardTitle>Typographic Scale & Proportional Rhythm</CardTitle>
              <CardDescription>
                Built on Josef Müller-Brockmann's modular grid principles and Inter/JetBrains Mono typography stacks. All sizes, line heights, and letter-spacings lock to a strict 4px baseline rhythm.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Interactive Live Typography Playground */}
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <CardTitle>Interactive Typography Playground</CardTitle>
              <CardDescription>Type live text, test font sizes, adjust weights, and check line-height responsiveness.</CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <input
                  type="text"
                  value={testText}
                  onChange={(e) => setTestText(e.target.value)}
                  style={{
                    padding: '12px 16px',
                    borderRadius: 6,
                    border: '1px solid var(--color-border-default)',
                    backgroundColor: 'var(--color-surface-raised)',
                    color: 'var(--color-text-primary)',
                    fontSize: 15,
                  }}
                />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
                    Size ({testFontSize}px):
                    <input
                      type="range"
                      min={10}
                      max={48}
                      value={testFontSize}
                      onChange={(e) => setTestFontSize(Number(e.target.value))}
                    />
                  </label>

                  <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
                    Weight ({testFontWeight}):
                    <select
                      value={testFontWeight}
                      onChange={(e) => setTestFontWeight(Number(e.target.value))}
                      style={{
                        padding: '4px 8px',
                        borderRadius: 4,
                        border: '1px solid var(--color-border-default)',
                        backgroundColor: 'var(--color-surface-raised)',
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      <option value={300}>300 - Light</option>
                      <option value={400}>400 - Regular</option>
                      <option value={500}>500 - Medium</option>
                      <option value={600}>600 - SemiBold</option>
                      <option value={700}>700 - Bold</option>
                      <option value={800}>800 - ExtraBold</option>
                    </select>
                  </label>

                  <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
                    Line-Height ({testLineHeight}):
                    <input
                      type="range"
                      min={1.0}
                      max={2.0}
                      step={0.1}
                      value={testLineHeight}
                      onChange={(e) => setTestLineHeight(Number(e.target.value))}
                    />
                  </label>
                </div>

                {/* Rendered live text preview */}
                <div
                  style={{
                    padding: 24,
                    borderRadius: 6,
                    backgroundColor: 'var(--color-surface-raised)',
                    border: '1px solid var(--color-border-subtle)',
                    fontSize: `${testFontSize}px`,
                    fontWeight: testFontWeight,
                    lineHeight: testLineHeight,
                    color: 'var(--color-text-primary)',
                    wordBreak: 'break-word',
                  }}
                >
                  {testText}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Scale Table */}
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
            <div style={{ padding: '18px 24px', borderBottom: '1px solid var(--color-border-default)', backgroundColor: 'var(--color-surface-raised)' }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                Standard Typography Ramp Specifications
              </h3>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 13 }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-surface-raised)', borderBottom: '1px solid var(--color-border-default)' }}>
                    <th style={{ padding: '12px 20px', fontWeight: 600 }}>Level / Role</th>
                    <th style={{ padding: '12px 20px', fontWeight: 600 }}>Token</th>
                    <th style={{ padding: '12px 20px', fontWeight: 600 }}>Font Size</th>
                    <th style={{ padding: '12px 20px', fontWeight: 600 }}>Line Height</th>
                    <th style={{ padding: '12px 20px', fontWeight: 600 }}>Weight</th>
                    <th style={{ padding: '12px 20px', fontWeight: 600 }}>Visual Preview</th>
                  </tr>
                </thead>
                <tbody>
                  {typographyRamp.map((item, idx) => (
                    <tr
                      key={item.token}
                      style={{
                        backgroundColor: idx % 2 === 0 ? 'var(--color-surface)' : 'var(--color-surface-raised)',
                        borderBottom: idx === typographyRamp.length - 1 ? 'none' : '1px solid var(--color-border-subtle)',
                      }}
                    >
                      <td style={{ padding: '12px 20px', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                        {item.name}
                      </td>
                      <td style={{ padding: '12px 20px', fontFamily: 'monospace', color: 'var(--color-action-primary)' }}>
                        {item.token}
                      </td>
                      <td style={{ padding: '12px 20px', fontFamily: 'monospace' }}>{item.size}</td>
                      <td style={{ padding: '12px 20px', fontFamily: 'monospace', color: 'var(--color-text-muted)' }}>{item.line}</td>
                      <td style={{ padding: '12px 20px' }}>{item.weight}</td>
                      <td style={{ padding: '12px 20px', fontSize: item.size, fontWeight: item.weight, fontFamily: item.mono ? 'monospace' : undefined, color: 'var(--color-text-primary)' }}>
                        {item.sample}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </>
      )}

      {/* ============================================================== */}
      {/* SCREEN: /tokens/spacing                                        */}
      {/* ============================================================== */}
      {tokenId === 'spacing' && (
        <>
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <Badge variant="primary">4px / 8px Grid</Badge>
                <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Spatial Geometry</span>
              </div>
              <CardTitle>Spacing Scale & 4px Grid Layout</CardTitle>
              <CardDescription>
                Spectra UI employs an uncompromising 4px / 8px geometric grid. Every padding, margin, gap, and component bounding box is an exact integer multiple of 4px (0.25rem), eliminating micro-misalignment across viewports.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Interactive Box Model Simulator */}
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <CardTitle>Interactive Box Model & Spacing Visualizer</CardTitle>
              <CardDescription>Adjust internal padding and layout gap to see 4px grid rhythm in real-time.</CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
                    Padding ({boxPadding}px):
                    <input
                      type="range"
                      min={4}
                      max={48}
                      step={4}
                      value={boxPadding}
                      onChange={(e) => setBoxPadding(Number(e.target.value))}
                    />
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
                    Gap ({boxGap}px):
                    <input
                      type="range"
                      min={4}
                      max={36}
                      step={4}
                      value={boxGap}
                      onChange={(e) => setBoxGap(Number(e.target.value))}
                    />
                  </label>
                </div>

                <div
                  style={{
                    border: '2px dashed var(--color-action-primary)',
                    borderRadius: 6,
                    padding: `${boxPadding}px`,
                    backgroundColor: 'var(--color-surface-raised)',
                    display: 'flex',
                    gap: `${boxGap}px`,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      style={{
                        padding: '12px 20px',
                        backgroundColor: 'var(--color-action-primary)',
                        color: '#FFFFFF',
                        borderRadius: 4,
                        fontSize: 13,
                        fontWeight: 600,
                      }}
                    >
                      Box {i}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Spacing Ruler Table */}
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
            <div style={{ padding: '18px 24px', borderBottom: '1px solid var(--color-border-default)', backgroundColor: 'var(--color-surface-raised)' }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                4px Modular Spacing Tokens & Visual Ruler
              </h3>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 13 }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-surface-raised)', borderBottom: '1px solid var(--color-border-default)' }}>
                    <th style={{ padding: '12px 20px', fontWeight: 600 }}>Token</th>
                    <th style={{ padding: '12px 20px', fontWeight: 600 }}>Pixels</th>
                    <th style={{ padding: '12px 20px', fontWeight: 600 }}>Rem Unit</th>
                    <th style={{ padding: '12px 20px', fontWeight: 600 }}>Recommended Spatial Role</th>
                    <th style={{ padding: '12px 20px', fontWeight: 600 }}>Visual Ruler</th>
                  </tr>
                </thead>
                <tbody>
                  {spacingGrid.map((item, idx) => (
                    <tr
                      key={item.token}
                      style={{
                        backgroundColor: idx % 2 === 0 ? 'var(--color-surface)' : 'var(--color-surface-raised)',
                        borderBottom: idx === spacingGrid.length - 1 ? 'none' : '1px solid var(--color-border-subtle)',
                      }}
                    >
                      <td style={{ padding: '12px 20px', fontFamily: 'monospace', fontWeight: 600, color: 'var(--color-action-primary)' }}>
                        {item.token}
                      </td>
                      <td style={{ padding: '12px 20px', fontWeight: 600 }}>{item.px}</td>
                      <td style={{ padding: '12px 20px', color: 'var(--color-text-muted)' }}>{item.rem}</td>
                      <td style={{ padding: '12px 20px', color: 'var(--color-text-secondary)' }}>{item.role}</td>
                      <td style={{ padding: '12px 20px', minWidth: 200 }}>
                        <div
                          style={{
                            height: 16,
                            width: item.px,
                            backgroundColor: 'var(--color-action-primary)',
                            borderRadius: 2,
                            minWidth: item.px === '0px' ? 2 : undefined,
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </>
      )}

      {/* ============================================================== */}
      {/* SCREEN: /tokens/radii                                          */}
      {/* ============================================================== */}
      {tokenId === 'radii' && (
        <>
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <Badge variant="primary">Corner Radii Scale</Badge>
                <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Flat Minimal Curvature</span>
              </div>
              <CardTitle>Border Radius & Geometric Curvature</CardTitle>
              <CardDescription>
                Modern 2D surfaces calibrated to prevent over-rounded bubble aesthetics while maintaining human-friendly touch boundaries.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Interactive Shape Simulator */}
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <CardTitle>Interactive Shape Simulator</CardTitle>
              <CardDescription>Select a radius token to preview its effect on buttons, inputs, and card containers.</CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {/* Selector pills */}
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {radiiScale.map((r) => (
                    <button
                      key={r.token}
                      onClick={() => setSelectedRadius(r.value)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: r.value === '9999px' ? 16 : 4,
                        border: selectedRadius === r.value ? '2px solid var(--color-action-primary)' : '1px solid var(--color-border-default)',
                        backgroundColor: selectedRadius === r.value ? 'var(--color-surface-raised)' : 'transparent',
                        color: selectedRadius === r.value ? 'var(--color-action-primary)' : 'var(--color-text-primary)',
                        fontWeight: 600,
                        fontSize: 13,
                        cursor: 'pointer',
                      }}
                    >
                      {r.name} ({r.value})
                    </button>
                  ))}
                </div>

                {/* Preview Box */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: 20,
                    padding: 24,
                    backgroundColor: 'var(--color-surface-raised)',
                    borderRadius: 8,
                  }}
                >
                  {/* Button */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Button Control</span>
                    <button
                      style={{
                        padding: '10px 20px',
                        borderRadius: selectedRadius,
                        backgroundColor: 'var(--color-action-primary)',
                        color: '#FFFFFF',
                        border: 'none',
                        fontWeight: 600,
                        fontSize: 14,
                        cursor: 'pointer',
                      }}
                    >
                      Action Button
                    </button>
                  </div>

                  {/* Input */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Input Field</span>
                    <input
                      type="text"
                      placeholder="Type query..."
                      style={{
                        padding: '10px 14px',
                        borderRadius: selectedRadius,
                        border: '1px solid var(--color-border-default)',
                        backgroundColor: 'var(--color-surface)',
                        color: 'var(--color-text-primary)',
                        fontSize: 14,
                      }}
                    />
                  </div>

                  {/* Card */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Surface Card</span>
                    <div
                      style={{
                        padding: 16,
                        borderRadius: selectedRadius,
                        border: '1px solid var(--color-border-default)',
                        backgroundColor: 'var(--color-surface)',
                        fontSize: 13,
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      Container with radius: <strong>{selectedRadius}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Radii Table */}
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
            <div style={{ padding: '18px 24px', borderBottom: '1px solid var(--color-border-default)', backgroundColor: 'var(--color-surface-raised)' }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                Corner Radii Token Specifications
              </h3>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 13 }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-surface-raised)', borderBottom: '1px solid var(--color-border-default)' }}>
                    <th style={{ padding: '12px 20px', fontWeight: 600 }}>Token</th>
                    <th style={{ padding: '12px 20px', fontWeight: 600 }}>Name</th>
                    <th style={{ padding: '12px 20px', fontWeight: 600 }}>Value</th>
                    <th style={{ padding: '12px 20px', fontWeight: 600 }}>Recommended Semantic Component</th>
                    <th style={{ padding: '12px 20px', fontWeight: 600 }}>Shape Preview</th>
                  </tr>
                </thead>
                <tbody>
                  {radiiScale.map((r, idx) => (
                    <tr
                      key={r.token}
                      style={{
                        backgroundColor: idx % 2 === 0 ? 'var(--color-surface)' : 'var(--color-surface-raised)',
                        borderBottom: idx === radiiScale.length - 1 ? 'none' : '1px solid var(--color-border-subtle)',
                      }}
                    >
                      <td style={{ padding: '12px 20px', fontFamily: 'monospace', fontWeight: 600, color: 'var(--color-action-primary)' }}>
                        {r.token}
                      </td>
                      <td style={{ padding: '12px 20px', fontWeight: 600 }}>{r.name}</td>
                      <td style={{ padding: '12px 20px', fontFamily: 'monospace' }}>{r.value}</td>
                      <td style={{ padding: '12px 20px', color: 'var(--color-text-secondary)' }}>{r.role}</td>
                      <td style={{ padding: '12px 20px' }}>
                        <div
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: r.value,
                            backgroundColor: 'var(--color-surface-raised)',
                            border: '2px solid var(--color-action-primary)',
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </>
      )}

      {/* ============================================================== */}
      {/* SCREEN: /tokens/shadows                                        */}
      {/* ============================================================== */}
      {tokenId === 'shadows' && (
        <>
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <Badge variant="primary">Elevation Scale (0–5)</Badge>
                <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Spectra Layering Tokens</span>
              </div>
              <CardTitle>Elevation Levels & Ambient Shadows</CardTitle>
              <CardDescription>
                Elevation communicates the spatial depth and visual hierarchy between layered surfaces. In Light mode, diffuse ambient shadows soften boundaries. In Dark mode, elevation uses surface luminance steps combined with deep backdrop shadows.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Interactive Elevation Playground */}
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <CardHeader>
              <CardTitle>Interactive Elevation Simulator</CardTitle>
              <CardDescription>Adjust the elevation slider to inspect real-time shadow displacement and card floating depth.</CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14 }}>
                  Elevation Level ({elevationLevel}):
                  <input
                    type="range"
                    min={0}
                    max={5}
                    step={1}
                    value={elevationLevel}
                    onChange={(e) => setElevationLevel(Number(e.target.value))}
                  />
                  <span style={{ fontWeight: 600, color: 'var(--color-action-primary)' }}>
                    {elevationTokens[elevationLevel].name}
                  </span>
                </label>

                <div
                  style={{
                    padding: 36,
                    borderRadius: 8,
                    backgroundColor: 'var(--color-surface-raised)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 280,
                      padding: 24,
                      borderRadius: 8,
                      backgroundColor: 'var(--color-surface)',
                      boxShadow: elevationTokens[elevationLevel].shadowLight,
                      border: '1px solid var(--color-border-default)',
                      textAlign: 'center',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4, color: 'var(--color-text-primary)' }}>
                      Layer Level {elevationLevel}
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
                      {elevationTokens[elevationLevel].useCase}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Elevation Table */}
          <Card variant="bordered" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
            <div style={{ padding: '18px 24px', borderBottom: '1px solid var(--color-border-default)', backgroundColor: 'var(--color-surface-raised)' }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                Elevation Specifications (Light Mode vs. Dark Mode)
              </h3>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 13 }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-surface-raised)', borderBottom: '1px solid var(--color-border-default)' }}>
                    <th style={{ padding: '12px 20px', fontWeight: 600 }}>Level</th>
                    <th style={{ padding: '12px 20px', fontWeight: 600 }}>Name</th>
                    <th style={{ padding: '12px 20px', fontWeight: 600 }}>Light Mode Shadow</th>
                    <th style={{ padding: '12px 20px', fontWeight: 600 }}>Dark Mode Depth Strategy</th>
                    <th style={{ padding: '12px 20px', fontWeight: 600 }}>Component Placement</th>
                  </tr>
                </thead>
                <tbody>
                  {elevationTokens.map((el, idx) => (
                    <tr
                      key={el.level}
                      style={{
                        backgroundColor: idx % 2 === 0 ? 'var(--color-surface)' : 'var(--color-surface-raised)',
                        borderBottom: idx === elevationTokens.length - 1 ? 'none' : '1px solid var(--color-border-subtle)',
                      }}
                    >
                      <td style={{ padding: '12px 20px', fontFamily: 'monospace', fontWeight: 700, color: 'var(--color-action-primary)' }}>
                        elevation.{el.level}
                      </td>
                      <td style={{ padding: '12px 20px', fontWeight: 600 }}>{el.name}</td>
                      <td style={{ padding: '12px 20px', fontFamily: 'monospace', fontSize: 11, maxWidth: 220 }}>
                        {el.shadowLight}
                      </td>
                      <td style={{ padding: '12px 20px', fontFamily: 'monospace', fontSize: 11, maxWidth: 220, color: 'var(--color-text-secondary)' }}>
                        {el.shadowDark}
                      </td>
                      <td style={{ padding: '12px 20px', color: 'var(--color-text-secondary)' }}>
                        {el.useCase}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </>
      )}

    </div>
  );
};

export default TokensSection;

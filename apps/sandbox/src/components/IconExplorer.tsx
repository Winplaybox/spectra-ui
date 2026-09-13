import React, { useState, useEffect, useMemo } from 'react';
import {
  DynamicIcon,
  getIconManifest,
  CheckIcon,
  CloseIcon,
  SearchIcon,
  SpinnerIcon,
  AlertCircleIcon,
  InfoIcon,
  SparklesIcon,
  ExternalLinkIcon,
  UserIcon,
  CopyIcon,
} from '@spectra/icons';
import {
  GithubIcon,
  GoogleIcon,
  AppleIcon,
  TwitterIcon,
  FacebookIcon,
} from '@spectra/icons/social';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
  TextInput,
  Badge,
  useToast,
} from '@spectra/react';

export const IconExplorer: React.FC = () => {
  const { toast } = useToast();
  const [viewMode, setViewMode] = useState<'catalog' | 'recipes'>('recipes');
  const [manifest, setManifest] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Catalog state
  const [iconSearch, setIconSearch] = useState('');
  const [iconStyle, setIconStyle] = useState('All');
  const [iconCategory, setIconCategory] = useState('All');
  const [iconLimit, setIconLimit] = useState(72);
  const [catalogIconSize, setCatalogIconSize] = useState(24);

  // Interactive Playground state (Recipes tab)
  const [playgroundIconName, setPlaygroundIconName] = useState('TwoToneFavoriteIcon');
  const [playgroundSize, setPlaygroundSize] = useState(32);
  const [playgroundPadding, setPlaygroundPadding] = useState(12);
  const [playgroundOpacity, setPlaygroundOpacity] = useState(0.35);
  const [playgroundColor, setPlaygroundColor] = useState('var(--color-action-primary)');
  const [playgroundRadius, setPlaygroundRadius] = useState('8px');
  const [playgroundBg, setPlaygroundBg] = useState<'raised' | 'sunken' | 'transparent'>('raised');
  const [recipeSearch, setRecipeSearch] = useState('');

  useEffect(() => {
    let isMounted = true;
    getIconManifest().then((data) => {
      if (isMounted) {
        setManifest(data);
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // Clean, structured style families
  const styleTabs = [
    { key: 'All', label: 'All Styles' },
    { key: 'outlined', label: 'Outlined' },
    { key: 'filled', label: 'Filled' },
    { key: 'rounded', label: 'Rounded' },
    { key: 'sharp', label: 'Sharp' },
    { key: 'twotone', label: 'Two-Tone' },
    { key: 'core', label: 'Core (DesignCode)' },
    { key: 'social', label: 'Social & Brands' },
  ];

  // Curated category list
  const cleanCategories = [
    'All',
    'Action',
    'Alert',
    'AV',
    'Communication',
    'Content',
    'Device',
    'Editor',
    'File',
    'Hardware',
    'Home',
    'Image',
    'Maps',
    'Navigation',
    'Notification',
    'Places',
    'Search',
    'Shopping',
    'Social',
    'Toggle',
  ];

  // Filtered catalog items
  const filtered = useMemo(() => {
    const query = iconSearch.trim().toLowerCase();
    return manifest.filter((item) => {
      const matchesStyle =
        iconStyle === 'All' ||
        item.style === iconStyle ||
        (iconStyle === 'social' && (item.style === 'brand' || item.style === 'monochrome'));
      if (!matchesStyle) return false;

      if (iconCategory !== 'All') {
        if (!item.category || item.category.toLowerCase() !== iconCategory.toLowerCase()) {
          return false;
        }
      }

      if (!query) return true;
      return (
        item.name.toLowerCase().includes(query) ||
        item.componentName.toLowerCase().includes(query) ||
        (item.alias && item.alias.toLowerCase().includes(query)) ||
        item.tags?.some((t: string) => t.includes(query))
      );
    });
  }, [manifest, iconStyle, iconCategory, iconSearch]);

  const handleCopy = (snippet: string, msg: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(snippet);
    }
    toast(msg, { type: 'success' });
  };

  const playgroundCodeSnippet = `<DynamicIcon
  name="${playgroundIconName}"
  size={${playgroundSize}}
  color="${playgroundColor}"${playgroundIconName.startsWith('TwoTone') ? `\n  fillOpacity={${playgroundOpacity}}` : ''}
/>`;

  const standardSizes = [12, 16, 20, 24, 28, 32, 40, 48, 64];

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 260, gap: 12 }}>
        <SpinnerIcon size={24} style={{ animation: 'spin 1s linear infinite' }} />
        <span style={{ fontSize: 14, color: 'var(--color-text-secondary)' }}>
          Loading Spectra Icon Explorer (12,253 icons)...
        </span>
      </div>
    );
  }

  return (
    <Card
      variant="bordered"
      padding="lg"
      style={{
        backgroundColor: 'var(--color-surface)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
      }}
    >
      <CardHeader>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <Badge variant="primary">12,253 Vectors</Badge>
              <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Spectra Enterprise Sizing Standards</span>
            </div>
            <CardTitle>Spectra Icon Explorer & Interactive Recipes</CardTitle>
            <CardDescription>
              High-performance, tree-shaken SVG vector icons with modular code-splitting and live props configuration.
            </CardDescription>
          </div>

          {/* Mode Switcher */}
          <div style={{ display: 'flex', gap: 4, backgroundColor: 'var(--color-surface-raised)', padding: 4, borderRadius: 8, border: '1px solid var(--color-border-subtle)' }}>
            <button
              onClick={() => setViewMode('recipes')}
              style={{
                padding: '8px 18px',
                borderRadius: 6,
                border: 'none',
                backgroundColor: viewMode === 'recipes' ? 'var(--color-surface)' : 'transparent',
                color: viewMode === 'recipes' ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
                fontWeight: viewMode === 'recipes' ? 700 : 500,
                fontSize: 13,
                cursor: 'pointer',
                boxShadow: viewMode === 'recipes' ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
              }}
            >
              Interactive Recipes & Playground
            </button>
            <button
              onClick={() => setViewMode('catalog')}
              style={{
                padding: '8px 18px',
                borderRadius: 6,
                border: 'none',
                backgroundColor: viewMode === 'catalog' ? 'var(--color-surface)' : 'transparent',
                color: viewMode === 'catalog' ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
                fontWeight: viewMode === 'catalog' ? 700 : 500,
                fontSize: 13,
                cursor: 'pointer',
                boxShadow: viewMode === 'catalog' ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
              }}
            >
              Browse Catalog ({manifest.length.toLocaleString()})
            </button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {viewMode === 'recipes' ? (
          /* ========================================================== */
          /* RECIPES & INTERACTIVE PLAYGROUND VIEW                      */
          /* ========================================================== */
          <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>

            {/* HERO INTERACTIVE PLAYGROUND */}
            <div
              style={{
                borderRadius: 'var(--radius-component-md, 8px)',
                border: '1px solid var(--color-border-default)',
                backgroundColor: 'var(--color-surface-raised)',
                padding: 24,
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: 'var(--color-text-primary)' }}>
                    Live Icon Playground & Props Sandbox
                  </h3>
                  <p style={{ margin: '4px 0 0', fontSize: 13, color: 'var(--color-text-secondary)' }}>
                    Test sizing scale, bounding-box touch padding, colors, and two-tone fill opacity in real-time.
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => handleCopy(playgroundCodeSnippet, 'Copied JSX snippet!')}
                >
                  <CopyIcon size={14} style={{ marginRight: 6 }} /> Copy JSX
                </Button>
              </div>

              {/* Playground Visual Arena */}
              <div
                style={{
                  minHeight: 180,
                  borderRadius: 8,
                  border: '1px dashed var(--color-border-default)',
                  backgroundColor: 'var(--color-surface)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 24,
                }}
              >
                <div
                  style={{
                    padding: `${playgroundPadding}px`,
                    borderRadius: playgroundRadius,
                    backgroundColor:
                      playgroundBg === 'raised'
                        ? 'var(--color-surface-raised)'
                        : playgroundBg === 'sunken'
                        ? 'var(--color-surface-sunken)'
                        : 'transparent',
                    border: playgroundBg !== 'transparent' ? '1px solid var(--color-border-default)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <DynamicIcon
                    name={playgroundIconName}
                    size={playgroundSize}
                    color={playgroundColor}
                    fillOpacity={playgroundOpacity}
                  />
                </div>
              </div>

              {/* Controls Matrix */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18 }}>
                {/* 1. Icon Preset Picker */}
                <div>
                  <label style={{ fontSize: 12, fontWeight: 700, display: 'block', marginBottom: 6, color: 'var(--color-text-primary)' }}>
                    Active Icon:
                  </label>
                  <select
                    value={playgroundIconName}
                    onChange={(e) => setPlaygroundIconName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: 6,
                      border: '1px solid var(--color-border-default)',
                      backgroundColor: 'var(--color-surface)',
                      color: 'var(--color-text-primary)',
                      fontSize: 13,
                    }}
                  >
                    <optgroup label="Two-Tone Mode (Dual Layer)">
                      <option value="TwoToneFavoriteIcon">TwoToneFavoriteIcon (Heart)</option>
                      <option value="TwoToneBookmarkIcon">TwoToneBookmarkIcon</option>
                      <option value="TwoToneStarIcon">TwoToneStarIcon</option>
                      <option value="TwoToneThumbUpIcon">TwoToneThumbUpIcon</option>
                      <option value="TwoToneSettingsIcon">TwoToneSettingsIcon</option>
                    </optgroup>
                    <optgroup label="Filled Icons">
                      <option value="FilledCheckIcon">FilledCheckIcon</option>
                      <option value="FilledFavoriteIcon">FilledFavoriteIcon</option>
                      <option value="FilledSettingsIcon">FilledSettingsIcon</option>
                      <option value="FilledSearchIcon">FilledSearchIcon</option>
                    </optgroup>
                    <optgroup label="Outlined Icons">
                      <option value="OutlinedArrowForwardIcon">OutlinedArrowForwardIcon</option>
                      <option value="OutlinedDeleteIcon">OutlinedDeleteIcon</option>
                      <option value="OutlinedEditIcon">OutlinedEditIcon</option>
                    </optgroup>
                    <optgroup label="Curated Essentials">
                      <option value="CheckIcon">CheckIcon</option>
                      <option value="CloseIcon">CloseIcon</option>
                      <option value="SearchIcon">SearchIcon</option>
                      <option value="SparklesIcon">SparklesIcon</option>
                      <option value="UserIcon">UserIcon</option>
                    </optgroup>
                    <optgroup label="Brands & Social">
                      <option value="GithubIcon">GithubIcon</option>
                      <option value="AppleIcon">AppleIcon</option>
                      <option value="GoogleIcon">GoogleIcon</option>
                      <option value="TwitterIcon">TwitterIcon</option>
                      <option value="FacebookIcon">FacebookIcon</option>
                    </optgroup>
                  </select>
                </div>

                {/* 2. Standard Size Pills */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-text-primary)' }}>
                      Size Preset ({playgroundSize}px):
                    </label>
                  </div>
                  <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                    {standardSizes.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setPlaygroundSize(sz)}
                        style={{
                          padding: '4px 8px',
                          borderRadius: 4,
                          border: '1px solid',
                          borderColor: playgroundSize === sz ? 'var(--color-action-primary)' : 'var(--color-border-default)',
                          backgroundColor: playgroundSize === sz ? 'var(--color-action-primary)' : 'var(--color-surface)',
                          color: playgroundSize === sz ? '#FFFFFF' : 'var(--color-text-primary)',
                          fontSize: 11,
                          fontWeight: 600,
                          cursor: 'pointer',
                        }}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Padding / Touch Target */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-text-primary)' }}>
                      Container Padding ({playgroundPadding}px):
                    </label>
                    <span style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>
                      Target: {playgroundSize + playgroundPadding * 2}px
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={32}
                    step={4}
                    value={playgroundPadding}
                    onChange={(e) => setPlaygroundPadding(Number(e.target.value))}
                    style={{ width: '100%' }}
                  />
                </div>

                {/* 4. Two-Tone Fill Opacity */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-text-primary)' }}>
                      Two-Tone fillOpacity ({Math.round(playgroundOpacity * 100)}%):
                    </label>
                  </div>
                  <input
                    type="range"
                    min={0.05}
                    max={1.0}
                    step={0.05}
                    value={playgroundOpacity}
                    onChange={(e) => setPlaygroundOpacity(parseFloat(e.target.value))}
                    style={{ width: '100%' }}
                  />
                </div>

                {/* 5. Color Palette */}
                <div>
                  <label style={{ fontSize: 12, fontWeight: 700, display: 'block', marginBottom: 6, color: 'var(--color-text-primary)' }}>
                    Color Palette:
                  </label>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {[
                      { label: 'Primary', val: 'var(--color-action-primary)' },
                      { label: 'Success', val: 'var(--color-feedback-success)' },
                      { label: 'Warning', val: 'var(--color-feedback-warning)' },
                      { label: 'Error', val: 'var(--color-feedback-error)' },
                      { label: 'Text', val: 'var(--color-text-primary)' },
                      { label: 'Muted', val: 'var(--color-text-muted)' },
                    ].map((c) => (
                      <button
                        key={c.label}
                        onClick={() => setPlaygroundColor(c.val)}
                        style={{
                          padding: '4px 8px',
                          borderRadius: 4,
                          border: '1px solid',
                          borderColor: playgroundColor === c.val ? 'var(--color-action-primary)' : 'var(--color-border-default)',
                          backgroundColor: 'var(--color-surface)',
                          color: 'var(--color-text-primary)',
                          fontSize: 11,
                          fontWeight: playgroundColor === c.val ? 700 : 500,
                          cursor: 'pointer',
                        }}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 6. Container Shape & Background */}
                <div>
                  <label style={{ fontSize: 12, fontWeight: 700, display: 'block', marginBottom: 6, color: 'var(--color-text-primary)' }}>
                    Container Shape & Background:
                  </label>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <button
                      onClick={() => setPlaygroundRadius(playgroundRadius === '9999px' ? '8px' : '9999px')}
                      style={{
                        padding: '4px 8px',
                        borderRadius: 4,
                        border: '1px solid var(--color-border-default)',
                        backgroundColor: 'var(--color-surface)',
                        color: 'var(--color-text-primary)',
                        fontSize: 11,
                        cursor: 'pointer',
                      }}
                    >
                      {playgroundRadius === '9999px' ? '● Circle' : '■ Rounded'}
                    </button>
                    <button
                      onClick={() => setPlaygroundBg(playgroundBg === 'raised' ? 'transparent' : 'raised')}
                      style={{
                        padding: '4px 8px',
                        borderRadius: 4,
                        border: '1px solid var(--color-border-default)',
                        backgroundColor: 'var(--color-surface)',
                        color: 'var(--color-text-primary)',
                        fontSize: 11,
                        cursor: 'pointer',
                      }}
                    >
                      Bg: {playgroundBg}
                    </button>
                  </div>
                </div>
              </div>

              {/* Code Snippet Box */}
              <div style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 14, borderRadius: 6, border: '1px solid var(--color-border-subtle)' }}>
                <pre style={{ margin: 0, fontSize: 12, fontFamily: 'monospace', overflowX: 'auto', color: 'var(--color-text-primary)' }}>
                  {playgroundCodeSnippet}
                </pre>
              </div>
            </div>

            {/* Recipe 1: Buttons with Icons */}
            <div style={{ padding: 20, borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)' }}>
              <h4 style={{ margin: '0 0 12px 0', fontSize: 16, color: 'var(--color-text-primary)' }}>
                1. Action Buttons with Contextual Icons
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', marginBottom: 12 }}>
                <Button icon={<CheckIcon size={16} />}>Save Changes</Button>
                <Button variant="secondary" icon={<ExternalLinkIcon size={16} />} iconPosition="right">Open Resource</Button>
                <Button variant="danger" icon={<CloseIcon size={16} />}>Cancel Order</Button>
                <Button variant="tertiary" icon={<SparklesIcon size={16} />}>AI Copilot</Button>
              </div>
              <pre style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 12, borderRadius: 6, fontSize: 12, overflowX: 'auto', margin: 0 }}>
{`<Button icon={<CheckIcon size={16} />}>Save Changes</Button>
<Button variant="secondary" icon={<ExternalLinkIcon size={16} />} iconPosition="right">Open Resource</Button>`}
              </pre>
            </div>

            {/* Recipe 2: Search Input with Leading & Clear Icon */}
            <div style={{ padding: 20, borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)' }}>
              <h4 style={{ margin: '0 0 12px 0', fontSize: 16, color: 'var(--color-text-primary)' }}>
                2. Inputs with Leading Search & Clear Icons
              </h4>
              <div style={{ maxWidth: 400, marginBottom: 12 }}>
                <TextInput
                  placeholder="Type to test clear button..."
                  value={recipeSearch}
                  onChange={(e) => setRecipeSearch(e.target.value)}
                  leftIcon={<SearchIcon size={16} />}
                  rightIcon={
                    recipeSearch ? (
                      <CloseIcon
                        size={14}
                        style={{ cursor: 'pointer' }}
                        onClick={() => setRecipeSearch('')}
                      />
                    ) : undefined
                  }
                />
              </div>
              <pre style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 12, borderRadius: 6, fontSize: 12, overflowX: 'auto', margin: 0 }}>
{`<TextInput
  leftIcon={<SearchIcon size={16} />}
  rightIcon={query ? <CloseIcon size={14} onClick={() => setQuery('')} /> : undefined}
/>`}
              </pre>
            </div>

            {/* Recipe 3: Badges */}
            <div style={{ padding: 20, borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)' }}>
              <h4 style={{ margin: '0 0 12px 0', fontSize: 16, color: 'var(--color-text-primary)' }}>
                3. Semantic Badges with Contextual Icons
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center', marginBottom: 12 }}>
                <Badge variant="success"><CheckIcon size={12} style={{ marginRight: 4 }} /> Active</Badge>
                <Badge variant="warning"><AlertCircleIcon size={12} style={{ marginRight: 4 }} /> Review</Badge>
                <Badge variant="error"><CloseIcon size={12} style={{ marginRight: 4 }} /> Failed</Badge>
                <Badge variant="info"><InfoIcon size={12} style={{ marginRight: 4 }} /> Deployed</Badge>
              </div>
              <pre style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 12, borderRadius: 6, fontSize: 12, overflowX: 'auto', margin: 0 }}>
{`<Badge variant="success"><CheckIcon size={12} /> Active</Badge>
<Badge variant="warning"><AlertCircleIcon size={12} /> Review</Badge>`}
              </pre>
            </div>

            {/* Recipe 4: Social Auth Buttons */}
            <div style={{ padding: 20, borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)' }}>
              <h4 style={{ margin: '0 0 12px 0', fontSize: 16, color: 'var(--color-text-primary)' }}>
                4. Social Authentication Vector Icons
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
                <Button variant="secondary" icon={<GithubIcon size={18} />}>GitHub</Button>
                <Button variant="secondary" icon={<GoogleIcon size={18} />}>Google</Button>
                <Button variant="secondary" icon={<AppleIcon size={18} />}>Apple</Button>
                <Button variant="secondary" icon={<TwitterIcon size={18} />}>X / Twitter</Button>
                <Button variant="secondary" icon={<FacebookIcon size={18} />}>Facebook</Button>
              </div>
              <pre style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 12, borderRadius: 6, fontSize: 12, overflowX: 'auto', margin: 0 }}>
{`import { GithubIcon, GoogleIcon } from '@spectra/icons/social';

<Button variant="secondary" icon={<GithubIcon size={18} />}>GitHub</Button>`}
              </pre>
            </div>

            {/* Recipe 5: Two-Tone Opacity Control */}
            <div style={{ padding: 20, borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)' }}>
              <h4 style={{ margin: '0 0 12px 0', fontSize: 16, color: 'var(--color-text-primary)' }}>
                5. Two-Tone Theming with fillOpacity
              </h4>
              <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', margin: '0 0 12px 0' }}>
                Two-tone icons support a secondary fill opacity layer, giving complex depth while retaining crisp vector outlines.
              </p>
              <div style={{ display: 'flex', gap: 24, alignItems: 'center', marginBottom: 12 }}>
                <DynamicIcon name="TwoToneFavoriteIcon" size={36} color="var(--color-action-primary)" fillOpacity={playgroundOpacity} />
                <DynamicIcon name="TwoToneBookmarkIcon" size={36} color="var(--color-feedback-success)" fillOpacity={playgroundOpacity} />
                <DynamicIcon name="TwoToneStarIcon" size={36} color="var(--color-feedback-warning)" fillOpacity={playgroundOpacity} />
                <DynamicIcon name="TwoToneThumbUpIcon" size={36} color="var(--color-feedback-info)" fillOpacity={playgroundOpacity} />
              </div>
              <pre style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 12, borderRadius: 6, fontSize: 12, overflowX: 'auto', margin: 0 }}>
{`<DynamicIcon name="TwoToneFavoriteIcon" size={36} color="var(--color-action-primary)" fillOpacity={${playgroundOpacity}} />`}
              </pre>
            </div>
          </div>
        ) : (
          /* ========================================================== */
          /* CATALOG BROWSE VIEW                                        */
          /* ========================================================== */
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Style Selector Tabs */}
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 8, color: 'var(--color-text-primary)' }}>
                Filter by Icon Style:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {styleTabs.map((st) => {
                  const isSelected = iconStyle === st.key;
                  return (
                    <button
                      key={st.key}
                      onClick={() => {
                        setIconStyle(st.key);
                        setIconCategory('All');
                        setIconLimit(72);
                      }}
                      style={{
                        padding: '6px 14px',
                        borderRadius: 6,
                        border: isSelected ? '1px solid var(--color-action-primary)' : '1px solid var(--color-border-default)',
                        backgroundColor: isSelected ? 'var(--color-action-primary)' : 'var(--color-surface-raised)',
                        color: isSelected ? '#FFFFFF' : 'var(--color-text-primary)',
                        fontSize: 12,
                        fontWeight: isSelected ? 700 : 500,
                        cursor: 'pointer',
                        transition: 'all 120ms ease',
                      }}
                    >
                      {st.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Category Dropdown / Pills */}
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 8, color: 'var(--color-text-primary)' }}>
                Filter by Category:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {cleanCategories.map((cat) => {
                  const isSelected = iconCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        setIconCategory(cat);
                        setIconLimit(72);
                      }}
                      style={{
                        padding: '4px 10px',
                        borderRadius: 14,
                        border: '1px solid',
                        borderColor: isSelected ? 'var(--color-action-primary)' : 'var(--color-border-subtle)',
                        backgroundColor: isSelected ? 'var(--color-surface-raised)' : 'transparent',
                        color: isSelected ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
                        fontSize: 11,
                        fontWeight: isSelected ? 700 : 400,
                        cursor: 'pointer',
                      }}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Search and Size Controls */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
              <input
                type="text"
                placeholder={`Search ${manifest.length.toLocaleString()} icons by name or tag (e.g. star, home, github, settings)...`}
                value={iconSearch}
                onChange={(e) => {
                  setIconSearch(e.target.value);
                  setIconLimit(72);
                }}
                style={{
                  flex: '1 1 320px',
                  padding: '10px 14px',
                  borderRadius: 6,
                  border: '1px solid var(--color-border-default)',
                  backgroundColor: 'var(--color-surface-raised)',
                  color: 'var(--color-text-primary)',
                  fontSize: 14,
                }}
              />

              {/* Sizing scale buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Size:</span>
                {standardSizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setCatalogIconSize(sz)}
                    style={{
                      padding: '4px 8px',
                      borderRadius: 4,
                      border: '1px solid',
                      borderColor: catalogIconSize === sz ? 'var(--color-action-primary)' : 'var(--color-border-default)',
                      backgroundColor: catalogIconSize === sz ? 'var(--color-action-primary)' : 'var(--color-surface-raised)',
                      color: catalogIconSize === sz ? '#FFFFFF' : 'var(--color-text-primary)',
                      fontSize: 11,
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Status counter */}
            <div style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>
              Showing {Math.min(filtered.length, iconLimit).toLocaleString()} of {filtered.length.toLocaleString()} icons
            </div>

            {/* Lazy Render Grid using DynamicIcon */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                gap: 12,
              }}
            >
              {filtered.slice(0, iconLimit).map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleCopy(`import { ${item.componentName} } from '@spectra/icons';`, `Copied import for <${item.componentName} />!`)}
                  title={`Click to copy: import { ${item.componentName} } from '@spectra/icons'`}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px 8px',
                    borderRadius: 6,
                    border: '1px solid var(--color-border-default)',
                    backgroundColor: 'var(--color-surface-raised)',
                    cursor: 'pointer',
                    textAlign: 'center',
                    transition: 'all 120ms ease',
                  }}
                >
                  <div style={{ marginBottom: 8, color: 'var(--color-text-primary)', minHeight: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <DynamicIcon name={item.componentName} size={catalogIconSize} color="currentColor" />
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                      wordBreak: 'break-word',
                      lineHeight: 1.2,
                      marginBottom: 2,
                    }}
                  >
                    {item.componentName}
                  </div>
                  {item.style && (
                    <span style={{ fontSize: 9, color: 'var(--color-text-muted)', textTransform: 'capitalize' }}>
                      {item.style}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {iconLimit < filtered.length && (
              <div style={{ textAlign: 'center', marginTop: 16 }}>
                <Button variant="secondary" onClick={() => setIconLimit((prev) => prev + 72)}>
                  Load More Icons ({(filtered.length - iconLimit).toLocaleString()} remaining)
                </Button>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default IconExplorer;

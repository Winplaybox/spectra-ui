import React, { useState, useEffect, useMemo } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  DynamicIcon,
  getIconManifest,
  CheckIcon,
  CloseIcon,
  SearchIcon,
  SpinnerIcon,
  AlertCircleIcon,
  InfoIcon,
  SunIcon,
  MoonIcon,
  SparklesIcon,
  ExternalLinkIcon,
} from '@spectra/icons';
import {
  GithubIcon,
  GoogleIcon,
  AppleIcon,
  TwitterIcon,
  FacebookIcon,
} from '@spectra/icons/social';
import {
  Button,
  TextInput,
  Badge,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAction,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../../index';

const meta: Meta = {
  title: 'Design System/Icon Gallery',
  parameters: {
    layout: 'padded',
  },
};

export default meta;

/**
 * Real-World Component Usage Patterns
 *
 * Demonstrates best practices for integrating @spectra/icons with Spectra UI components:
 * Buttons, TextInputs, Badges, Lists, Social Auth, and Two-Tone styling.
 */
export const UsagePatterns: StoryObj = {
  render: () => {
    const [twoToneOpacity, setTwoToneOpacity] = useState(0.35);
    const [twoToneColor, setTwoToneColor] = useState('var(--color-action-primary, #0066cc)');
    const [searchVal, setSearchVal] = useState('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40, maxWidth: 1000, margin: '0 auto' }}>
        {/* Header */}
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
            Icon Component Recipes & Usage
          </h1>
          <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', marginTop: 8 }}>
            Pairing <code style={{ color: 'var(--color-action-primary)' }}>@spectra/icons</code> with Spectra UI components for accessible, theme-reactive interfaces.
          </p>
        </div>

        {/* 1. Buttons with Icons */}
        <Card>
          <CardHeader>
            <CardTitle>1. Buttons with Icons</CardTitle>
            <CardDescription>
              Use <code style={{ color: 'var(--color-action-primary)' }}>icon</code> and <code style={{ color: 'var(--color-action-primary)' }}>iconPosition</code> props on Button for visual affordances.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
              <Button icon={<DynamicIcon name="filled:check" size={16} />}>
                Save Changes
              </Button>

              <Button variant="secondary" icon={<DynamicIcon name="outlined:arrow_forward" size={16} />} iconPosition="right">
                Continue
              </Button>

              <Button variant="danger" icon={<DynamicIcon name="outlined:delete" size={16} />}>
                Delete Item
              </Button>

              <Button variant="secondary" icon={<SpinnerIcon size={16} style={{ animation: 'spin 1s linear infinite' }} />}>
                Processing...
              </Button>

              <Button variant="tertiary" icon={<SparklesIcon size={16} />}>
                AI Assist
              </Button>
            </div>

            <pre style={{ backgroundColor: 'var(--color-surface-raised, #f5f5f5)', padding: 12, borderRadius: 6, marginTop: 16, fontSize: 13, overflowX: 'auto' }}>
{`<Button icon={<FilledCheckIcon size={16} />}>Save Changes</Button>
<Button variant="secondary" icon={<OutlinedArrowForwardIcon size={16} />} iconPosition="right">Continue</Button>
<Button variant="danger" icon={<OutlinedDeleteIcon size={16} />}>Delete Item</Button>`}
            </pre>
          </CardContent>
        </Card>

        {/* 2. Form Inputs */}
        <Card>
          <CardHeader>
            <CardTitle>2. Inputs with Leading & Trailing Icons</CardTitle>
            <CardDescription>
              Enhance input clarity with search, status, and clear icons.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 420 }}>
              <TextInput
                label="Search Documentation"
                placeholder="Search components or icons..."
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                leftIcon={<SearchIcon size={16} />}
                rightIcon={
                  searchVal ? (
                    <CloseIcon
                      size={14}
                      style={{ cursor: 'pointer' }}
                      onClick={() => setSearchVal('')}
                    />
                  ) : undefined
                }
              />

              <TextInput
                label="Verified Account Username"
                defaultValue="spectra_designer"
                rightIcon={<CheckIcon size={16} color="var(--color-feedback-success, #00875a)" />}
              />
            </div>

            <pre style={{ backgroundColor: 'var(--color-surface-raised, #f5f5f5)', padding: 12, borderRadius: 6, marginTop: 16, fontSize: 13, overflowX: 'auto' }}>
{`<TextInput
  label="Search Documentation"
  leftIcon={<SearchIcon size={16} />}
  rightIcon={searchVal ? <CloseIcon size={14} onClick={() => setSearchVal('')} /> : undefined}
/>`}
            </pre>
          </CardContent>
        </Card>

        {/* 3. Status Badges */}
        <Card>
          <CardHeader>
            <CardTitle>3. Status Badges with Contextual Icons</CardTitle>
            <CardDescription>
              Combine compact icons with badges for glanceable system health states.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
              <Badge variant="success">
                <CheckIcon size={12} style={{ marginRight: 4 }} /> Active
              </Badge>

              <Badge variant="warning">
                <AlertCircleIcon size={12} style={{ marginRight: 4 }} /> Maintenance
              </Badge>

              <Badge variant="error">
                <CloseIcon size={12} style={{ marginRight: 4 }} /> Deployment Failed
              </Badge>

              <Badge variant="info">
                <InfoIcon size={12} style={{ marginRight: 4 }} /> v0.1.0 Ready
              </Badge>

              <Badge variant="primary">
                <SparklesIcon size={12} style={{ marginRight: 4 }} /> AI Enabled
              </Badge>
            </div>

            <pre style={{ backgroundColor: 'var(--color-surface-raised, #f5f5f5)', padding: 12, borderRadius: 6, marginTop: 16, fontSize: 13, overflowX: 'auto' }}>
{`<Badge variant="success">
  <CheckIcon size={12} /> Active
</Badge>
<Badge variant="warning">
  <AlertCircleIcon size={12} /> Maintenance
</Badge>`}
            </pre>
          </CardContent>
        </Card>

        {/* 4. Lists with ListItemIcon */}
        <Card>
          <CardHeader>
            <CardTitle>4. Compound Lists with ListItemIcon</CardTitle>
            <CardDescription>
              Create structured navigation lists and file trees.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <List style={{ maxWidth: 450 }}>
              <ListItem>
                <ListItemIcon>
                  <DynamicIcon name="outlined:folder" size={20} color="var(--color-action-primary, #0066cc)" />
                </ListItemIcon>
                <ListItemText primary="Project Documents" secondary="18 files in workspace" />
                <ListItemAction>
                  <ExternalLinkIcon size={16} color="var(--color-text-muted)" />
                </ListItemAction>
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <DynamicIcon name="outlined:insert_drive_file" size={20} color="var(--color-feedback-warning, #ff9900)" />
                </ListItemIcon>
                <ListItemText primary="Design-Tokens.json" secondary="Updated 2 hours ago" />
                <ListItemAction>
                  <ExternalLinkIcon size={16} color="var(--color-text-muted)" />
                </ListItemAction>
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <DynamicIcon name="filled:star" size={20} color="var(--color-feedback-warning, #e5a000)" />
                </ListItemIcon>
                <ListItemText primary="Favorites" secondary="Starred components" />
              </ListItem>
            </List>

            <pre style={{ backgroundColor: 'var(--color-surface-raised, #f5f5f5)', padding: 12, borderRadius: 6, marginTop: 16, fontSize: 13, overflowX: 'auto' }}>
{`<List>
  <ListItem>
    <ListItemIcon><OutlinedFolderIcon size={20} /></ListItemIcon>
    <ListItemText primary="Project Documents" secondary="18 files" />
    <ListItemAction><ExternalLinkIcon size={16} /></ListItemAction>
  </ListItem>
</List>`}
            </pre>
          </CardContent>
        </Card>

        {/* 5. Social Auth Buttons */}
        <Card>
          <CardHeader>
            <CardTitle>5. Social Authentication & Platform Buttons</CardTitle>
            <CardDescription>
              Built-in brand vector icons from the native <code style={{ color: 'var(--color-action-primary)' }}>@spectra/icons/social</code> subpath.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, maxWidth: 680 }}>
              <Button variant="secondary" icon={<GithubIcon size={18} />}>
                Continue with GitHub
              </Button>
              <Button variant="secondary" icon={<GoogleIcon size={18} />}>
                Continue with Google
              </Button>
              <Button variant="secondary" icon={<AppleIcon size={18} />}>
                Continue with Apple
              </Button>
              <Button variant="secondary" icon={<TwitterIcon size={18} />}>
                Continue with X / Twitter
              </Button>
              <Button variant="secondary" icon={<FacebookIcon size={18} />}>
                Continue with Facebook
              </Button>
            </div>

            <pre style={{ backgroundColor: 'var(--color-surface-raised, #f5f5f5)', padding: 12, borderRadius: 6, marginTop: 16, fontSize: 13, overflowX: 'auto' }}>
{`import { GithubIcon, GoogleIcon, AppleIcon } from '@spectra/icons/social';

<Button variant="secondary" icon={<GithubIcon size={18} />}>
  Continue with GitHub
</Button>`}
            </pre>
          </CardContent>
        </Card>

        {/* 6. Two-Tone Custom Styling */}
        <Card>
          <CardHeader>
            <CardTitle>6. Two-Tone Theming with Dynamic fillOpacity</CardTitle>
            <CardDescription>
              Two-Tone icons feature primary stroke layers and a secondary background layer controlled by <code style={{ color: 'var(--color-action-primary)' }}>fillOpacity</code> (default 0.3).
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
                  Secondary Opacity ({Math.round(twoToneOpacity * 100)}%):
                  <input
                    type="range"
                    min="0.05"
                    max="0.9"
                    step="0.05"
                    value={twoToneOpacity}
                    onChange={(e) => setTwoToneOpacity(parseFloat(e.target.value))}
                  />
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
                  Theme Accent:
                  <select
                    value={twoToneColor}
                    onChange={(e) => setTwoToneColor(e.target.value)}
                    style={{ padding: '4px 8px', borderRadius: 4 }}
                  >
                    <option value="var(--color-action-primary, #0066cc)">Primary Blue</option>
                    <option value="var(--color-feedback-error, #d9383a)">Error Red</option>
                    <option value="var(--color-feedback-success, #00875a)">Success Green</option>
                    <option value="var(--color-feedback-warning, #e5a000)">Warning Amber</option>
                    <option value="currentColor">Current Color</option>
                  </select>
                </label>
              </div>

              <div style={{ display: 'flex', gap: 32, alignItems: 'center', padding: 24, backgroundColor: 'var(--color-surface-raised, #f9f9f9)', borderRadius: 8 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                  <DynamicIcon name="twotone:favorite" size={48} color={twoToneColor} fillOpacity={twoToneOpacity} />
                  <span style={{ fontSize: 12, fontWeight: 600 }}>TwoTone Favorite</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                  <DynamicIcon name="twotone:bookmark" size={48} color={twoToneColor} fillOpacity={twoToneOpacity} />
                  <span style={{ fontSize: 12, fontWeight: 600 }}>TwoTone Bookmark</span>
                </div>
              </div>

              <pre style={{ backgroundColor: 'var(--color-surface-raised, #f5f5f5)', padding: 12, borderRadius: 6, fontSize: 13, overflowX: 'auto' }}>
{`<TwoToneFavoriteIcon
  size={48}
  color="${twoToneColor}"
  fillOpacity={${twoToneOpacity}}
/>`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

/**
 * Dynamic & Lazy Loading Superpower Demo
 *
 * Demonstrates <DynamicIcon /> loading any of the 12,253 icons on-demand in isolated ~15KB chunks.
 */
export const DynamicAndLazyLoading: StoryObj = {
  render: () => {
    const [typedName, setTypedName] = useState('FilledHomeIcon');
    const [selectedQuick, setSelectedQuick] = useState('FilledHomeIcon');

    const presets = [
      { name: 'FilledHomeIcon', label: 'Filled Home' },
      { name: 'OutlinedSettingsIcon', label: 'Outlined Settings' },
      { name: 'RoundedSearchIcon', label: 'Rounded Search' },
      { name: 'SharpDashboardIcon', label: 'Sharp Dashboard' },
      { name: 'TwoToneFavoriteIcon', label: 'Two-Tone Favorite' },
      { name: 'GithubIcon', label: 'Social GitHub' },
      { name: 'AppleIcon', label: 'Social Apple' },
      { name: 'CheckIcon', label: 'Curated Check' },
    ];

    return (
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
          Dynamic & Lazy Loading Demo
        </h1>
        <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', marginTop: 8, marginBottom: 28 }}>
          Load any icon on-demand using <code style={{ color: 'var(--color-action-primary)' }}>&lt;DynamicIcon name="..." /&gt;</code>.
          Zero upfront bundle weight — chunks are loaded and cached dynamically.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Interactive Dynamic Loader</CardTitle>
            <CardDescription>
              Select a preset or type any component name to dynamically load its category chunk.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
              {presets.map((p) => (
                <button
                  key={p.name}
                  onClick={() => {
                    setSelectedQuick(p.name);
                    setTypedName(p.name);
                  }}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 20,
                    border: '1px solid var(--color-border-default, #ccc)',
                    backgroundColor: typedName === p.name ? 'var(--color-action-primary, #0066cc)' : 'transparent',
                    color: typedName === p.name ? '#fff' : 'var(--color-text-primary, #333)',
                    cursor: 'pointer',
                    fontSize: 13,
                    fontWeight: 500,
                  }}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 28 }}>
              <TextInput
                value={typedName}
                onChange={(e) => setTypedName(e.target.value)}
                placeholder="Enter icon component name (e.g. OutlinedSettingsIcon)"
                style={{ flex: 1 }}
              />
            </div>

            {/* Live Render Preview */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 24,
                padding: 32,
                backgroundColor: 'var(--color-surface-raised, #f9f9f9)',
                borderRadius: 8,
                border: '1px solid var(--color-border-default, #e5e5e5)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 80,
                  height: 80,
                  borderRadius: 12,
                  backgroundColor: 'var(--color-surface, #fff)',
                  border: '1px solid var(--color-border-default, #ddd)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                }}
              >
                <DynamicIcon
                  name={typedName}
                  size={44}
                  color="var(--color-action-primary, #0066cc)"
                />
              </div>

              <div>
                <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-text-primary)' }}>
                  {typedName}
                </div>
                <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginTop: 4 }}>
                  Dynamically loaded via <code>@spectra/icons</code>
                </div>
              </div>
            </div>

            <pre style={{ backgroundColor: 'var(--color-surface-raised, #f5f5f5)', padding: 14, borderRadius: 6, marginTop: 24, fontSize: 13, overflowX: 'auto' }}>
{`import { DynamicIcon } from '@spectra/icons';

// Only loads the specific category chunk (~15KB) over the network
<DynamicIcon
  name="${typedName}"
  size={32}
  color="var(--color-action-primary)"
  fallback={<span className="icon-skeleton" />}
/>`}
            </pre>
          </CardContent>
        </Card>
      </div>
    );
  },
};

/**
 * Interactive Full Catalog (12,253 Icons) with Asynchronous Manifest Loading
 */
export const Catalog: StoryObj = {
  render: () => {
    const [manifest, setManifest] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [selectedStyle, setSelectedStyle] = useState<string>('All');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [iconSize, setIconSize] = useState(24);
    const [copiedName, setCopiedName] = useState<string | null>(null);
    const [displayLimit, setDisplayLimit] = useState(120);

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

    const styleTabs = [
      { key: 'All', label: 'All Styles' },
      { key: 'core', label: 'Core (DesignCode)' },
      { key: 'filled', label: 'Filled' },
      { key: 'outlined', label: 'Outlined' },
      { key: 'rounded', label: 'Rounded' },
      { key: 'sharp', label: 'Sharp' },
      { key: 'twotone', label: 'Two-Tone' },
      { key: 'social', label: 'Social & Brands' },
    ];

    const categories = useMemo(() => {
      const set = new Set<string>();
      manifest.forEach((item) => {
        if (
          selectedStyle === 'All' ||
          item.style === selectedStyle ||
          (selectedStyle === 'social' && (item.style === 'brand' || item.style === 'monochrome'))
        ) {
          if (item.category) set.add(item.category);
        }
      });
      return ['All', ...Array.from(set).sort()];
    }, [manifest, selectedStyle]);

    const filteredIcons = useMemo(() => {
      const q = search.trim().toLowerCase();
      return manifest.filter((item) => {
        const matchesStyle =
          selectedStyle === 'All' ||
          item.style === selectedStyle ||
          (selectedStyle === 'social' && (item.style === 'brand' || item.style === 'monochrome'));
        if (!matchesStyle) return false;

        const matchesCategory =
          selectedCategory === 'All' || item.category === selectedCategory;
        if (!matchesCategory) return false;

        if (!q) return true;
        return (
          item.name.toLowerCase().includes(q) ||
          item.componentName.toLowerCase().includes(q) ||
          (item.alias && item.alias.toLowerCase().includes(q)) ||
          item.tags?.some((t: string) => t.includes(q))
        );
      });
    }, [manifest, search, selectedStyle, selectedCategory]);

    const handleCopy = (compName: string) => {
      const text = `import { ${compName} } from '@spectra/icons';`;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
      }
      setCopiedName(compName);
      setTimeout(() => setCopiedName(null), 3000);
    };

    if (loading) {
      return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 300, gap: 12 }}>
          <SpinnerIcon size={24} style={{ animation: 'spin 1s linear infinite' }} />
          <span style={{ fontSize: 15, color: 'var(--color-text-secondary)' }}>
            Loading searchable catalog of 12,253 icons...
          </span>
        </div>
      );
    }

    return (
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 24 }}>
          <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
            Spectra Icon Catalog ({manifest.length.toLocaleString()} Icons)
          </h1>
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', marginTop: 6 }}>
            Browse and search all multi-shade variants and brand icons. Click any card to copy import syntax.
          </p>
        </div>

        {/* Style Variant Tabs */}
        <div
          style={{
            display: 'flex',
            gap: 4,
            borderBottom: '1px solid var(--color-border-default, #e5e5e5)',
            marginBottom: 20,
            overflowX: 'auto',
          }}
        >
          {styleTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setSelectedStyle(tab.key);
                setSelectedCategory('All');
                setDisplayLimit(120);
              }}
              style={{
                padding: '10px 18px',
                border: 'none',
                borderBottom: selectedStyle === tab.key ? '2px solid var(--color-action-primary, #0066cc)' : '2px solid transparent',
                backgroundColor: 'transparent',
                color: selectedStyle === tab.key ? 'var(--color-action-primary, #0066cc)' : 'var(--color-text-secondary, #666)',
                fontWeight: selectedStyle === tab.key ? 700 : 500,
                fontSize: 14,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search & Size Controls */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            marginBottom: 16,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ flex: 1, minWidth: 260, maxWidth: 500 }}>
            <TextInput
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setDisplayLimit(120);
              }}
              placeholder={`Search ${manifest.length.toLocaleString()} icons by name or tag...`}
              leadingIcon={<SearchIcon size={16} />}
              trailingIcon={
                search ? (
                  <CloseIcon
                    size={14}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setSearch('')}
                  />
                ) : undefined
              }
            />
          </div>

          {/* Size Switcher */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>Size:</span>
            {[16, 20, 24, 32, 40].map((sz) => (
              <button
                key={sz}
                onClick={() => setIconSize(sz)}
                style={{
                  padding: '4px 10px',
                  borderRadius: 4,
                  border: '1px solid var(--color-border-default, #ccc)',
                  backgroundColor: iconSize === sz ? 'var(--color-action-primary, #0066cc)' : 'transparent',
                  color: iconSize === sz ? '#fff' : 'var(--color-text-primary, #333)',
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {sz}px
              </button>
            ))}
          </div>
        </div>

        {/* Category Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
          {categories.slice(0, 18).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setDisplayLimit(120);
              }}
              style={{
                padding: '5px 12px',
                borderRadius: 16,
                border: '1px solid var(--color-border-default, #ddd)',
                backgroundColor: selectedCategory === cat ? 'var(--color-action-primary, #0066cc)' : 'transparent',
                color: selectedCategory === cat ? '#fff' : 'var(--color-text-secondary, #555)',
                fontSize: 12,
                fontWeight: selectedCategory === cat ? 600 : 400,
                cursor: 'pointer',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Status Counter & Copy Notification */}
        <div style={{ fontSize: 13, color: 'var(--color-text-secondary, #777)', marginBottom: 16 }}>
          Showing {Math.min(filteredIcons.length, displayLimit).toLocaleString()} of {filteredIcons.length.toLocaleString()} matched icons
          {copiedName && (
            <span style={{ marginLeft: 16, color: 'var(--color-feedback-success, green)', fontWeight: 600 }}>
              ✓ Copied: import &#123; {copiedName} &#125; from '@spectra/icons';
            </span>
          )}
        </div>

        {/* Lazy Grid using DynamicIcon */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
            gap: 12,
          }}
        >
          {filteredIcons.slice(0, displayLimit).map((item) => (
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
                textAlign: 'center',
              }}
            >
              <div style={{ marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 40 }}>
                <DynamicIcon name={item.componentName} size={iconSize} color="currentColor" />
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: 'var(--color-text-primary, #222)',
                  wordBreak: 'break-word',
                  lineHeight: 1.2,
                  marginBottom: 4,
                }}
              >
                {item.componentName}
              </div>
              {item.style && (
                <span
                  style={{
                    fontSize: 10,
                    color: 'var(--color-text-muted, #888)',
                    textTransform: 'capitalize',
                  }}
                >
                  {item.style}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Load More */}
        {displayLimit < filteredIcons.length && (
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Button variant="secondary" onClick={() => setDisplayLimit((prev) => prev + 120)}>
              Load More Icons ({(filteredIcons.length - displayLimit).toLocaleString()} remaining)
            </Button>
          </div>
        )}
      </div>
    );
  },
};

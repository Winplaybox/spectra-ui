import React, { useState, useMemo } from 'react';
import {
  Button,
  TextInput,
  Select,
  Checkbox,
  Radio,
  Switch,
  Badge,
  Card,
  Tabs,
  TabList,
  Tab,
  Alert,
  Spinner,
  Skeleton,
  Divider,
  Chip,
  Breadcrumbs,
  Avatar,
} from '@spectra/react';
import {
  SearchIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CheckIcon,
  GlobeIcon,
  SmartphoneIcon,
  ComponentIcon,
  SparklesIcon,
  CloseIcon,
  ExternalLinkIcon,
} from '@spectra/icons';
import { navigate } from '../../utils/router';
import { COMPONENT_CATEGORIES } from './Sidebar';
import { V010_NEW_COMPONENTS } from '../../data/versionReleaseData';
import { COMPONENTS_DATA } from '../../data/componentsData';
import { useVersion } from '../../context/VersionContext';
import { usePlatform } from '../../context/PlatformContext';
import { PLATFORMS, Platform } from '../../data/platformData';
import { PlatformIcon } from './PlatformIcon';

// Mini visual preview component for each Spectra UI component
const MiniComponentPreview: React.FC<{ componentId: string }> = ({ componentId }) => {
  switch (componentId) {
    case 'button':
      return (
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Button variant="primary" size="sm">
            Primary
          </Button>
          <Button variant="secondary" size="sm">
            Outline
          </Button>
        </div>
      );
    case 'text-input':
      return (
        <div style={{ width: '85%' }}>
          <TextInput
            size="sm"
            placeholder="Type query..."
            leftIcon={<SearchIcon size={14} />}
            value="Design Systems"
            readOnly
          />
        </div>
      );
    case 'select':
      return (
        <div style={{ width: '85%' }}>
          <Select
            size="sm"
            value="us"
            onChange={() => {}}
            options={[
              { value: 'us', label: 'United States' },
              { value: 'eu', label: 'Europe (EU)' },
            ]}
          />
        </div>
      );
    case 'checkbox':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <Checkbox label="Selected option" checked readOnly />
          <Checkbox label="Indeterminate" indeterminate readOnly />
        </div>
      );
    case 'radio':
      return (
        <div style={{ display: 'flex', gap: 14 }}>
          <Radio value="a" label="Option A" checked onChange={() => {}} />
          <Radio value="b" label="Option B" checked={false} onChange={() => {}} />
        </div>
      );
    case 'switch':
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Switch checked label="Active state" readOnly />
        </div>
      );
    case 'divider':
      return (
        <div style={{ width: '85%' }}>
          <Divider label="OR CONTINUE WITH" />
        </div>
      );
    case 'accordion':
      return (
        <div
          style={{
            width: '88%',
            border: '1px solid var(--color-border-subtle)',
            borderRadius: 6,
            padding: '8px 12px',
            backgroundColor: 'var(--color-surface)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            <span>Overview & Details</span>
            <ChevronDownIcon size={12} style={{ color: 'var(--color-text-muted)' }} />
          </div>
        </div>
      );
    case 'avatar':
      return (
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <Avatar name="John Doe" size="md" status="online" />
          <Avatar name="Alex Ingram" size="md" status="busy" />
          <Avatar name="Spectra UI" size="sm" />
        </div>
      );
    case 'chip':
      return (
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Chip label="Active" variant="filled" size="sm" />
          <Chip label="Tag" variant="outlined" size="sm" />
          <Chip label="Filter" variant="filled" size="sm" onDelete={() => {}} />
        </div>
      );
    case 'list':
      return (
        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12 }}>
            <CheckIcon size={13} style={{ color: '#10B981' }} />
            <span>Accessible keyboard nav</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12 }}>
            <CheckIcon size={13} style={{ color: '#10B981' }} />
            <span>Cross-platform parity</span>
          </div>
        </div>
      );
    case 'alert':
      return (
        <div style={{ width: '90%' }}>
          <Alert variant="info" style={{ padding: '6px 10px', fontSize: 11 }}>
            System ready for deployment
          </Alert>
        </div>
      );
    case 'badge':
      return (
        <div style={{ display: 'flex', gap: 8 }}>
          <Badge variant="primary">v0.1.0</Badge>
          <Badge variant="success">Active</Badge>
          <Badge variant="error">Error</Badge>
        </div>
      );
    case 'skeleton':
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, width: '85%' }}>
          <Skeleton variant="circular" width={32} height={32} />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <Skeleton variant="text" width="90%" height={8} />
            <Skeleton variant="text" width="60%" height={8} />
          </div>
        </div>
      );
    case 'spinner':
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Spinner size="md" />
          <span style={{ fontSize: 12, color: 'var(--color-text-secondary)', fontWeight: 500 }}>
            Syncing catalog...
          </span>
        </div>
      );
    case 'tooltip':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <div
            style={{
              backgroundColor: 'var(--color-text-primary)',
              color: 'var(--color-surface)',
              fontSize: 10,
              padding: '2px 8px',
              borderRadius: 4,
              fontWeight: 600,
            }}
          >
            Quick explanation
          </div>
          <Button variant="secondary" size="sm" style={{ pointerEvents: 'none' }}>
            Hover Target
          </Button>
        </div>
      );
    case 'breadcrumbs':
      return (
        <div style={{ fontSize: 12 }}>
          <Breadcrumbs
            items={[{ label: 'Home' }, { label: 'Library' }, { label: 'Components' }]}
            separator="/"
          />
        </div>
      );
    case 'tabs':
      return (
        <div style={{ width: '85%' }}>
          <Tabs value="t1" variant="underline">
            <TabList>
              <Tab value="t1">Overview</Tab>
              <Tab value="t2">Specs</Tab>
            </TabList>
          </Tabs>
        </div>
      );
    case 'card':
      return (
        <Card
          variant="bordered"
          style={{
            padding: '10px 14px',
            width: '88%',
            backgroundColor: 'var(--color-surface)',
          }}
        >
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-text-primary)' }}>
            Elevated Surface
          </div>
          <div style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>
            Bordered container card
          </div>
        </Card>
      );
    case 'dialog':
      return (
        <div
          style={{
            width: '88%',
            border: '1px solid var(--color-border-subtle)',
            borderRadius: 8,
            padding: '8px 12px',
            backgroundColor: 'var(--color-surface)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        >
          <div
            style={{
              fontSize: 11.5,
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              marginBottom: 4,
            }}
          >
            Confirm Action
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 6, marginTop: 4 }}>
            <Button
              variant="secondary"
              size="sm"
              style={{ padding: '2px 8px', fontSize: 10, height: 22 }}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              size="sm"
              style={{ padding: '2px 8px', fontSize: 10, height: 22 }}
            >
              Save
            </Button>
          </div>
        </div>
      );
    default:
      return <ComponentIcon size={24} style={{ color: 'var(--color-text-muted)' }} />;
  }
};

export const AllComponentsPage: React.FC = () => {
  const { currentVersion } = useVersion();
  const { currentPlatform, setPlatform } = usePlatform();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | 'all'>('all');
  const [selectedTag, setSelectedTag] = useState<'all' | 'new' | 'form' | 'feedback'>('all');
  const [sortBy, setSortBy] = useState<'category' | 'name-asc' | 'name-desc' | 'newest'>('category');

  // Total components count
  const allComponentsList = useMemo(() => {
    return COMPONENT_CATEGORIES.flatMap((cat) => cat.components);
  }, []);

  // Filtered and Sorted categories
  const filteredCategories = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return COMPONENT_CATEGORIES.map((cat) => {
      // Category filter check
      if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
        return { ...cat, components: [] };
      }

      let matchingComponents = cat.components.filter((comp) => {
        const data = COMPONENTS_DATA[comp.id];
        const nameMatches = comp.name.toLowerCase().includes(q) || comp.id.toLowerCase().includes(q);
        const descMatches = data?.description.toLowerCase().includes(q) || false;
        const catMatches = cat.name.toLowerCase().includes(q);

        const searchMatch = !q || nameMatches || descMatches || catMatches;

        // Tag filter check
        let tagMatch = true;
        if (selectedTag === 'new') {
          tagMatch = V010_NEW_COMPONENTS.includes(comp.id);
        } else if (selectedTag === 'form') {
          tagMatch = cat.id === 'form';
        } else if (selectedTag === 'feedback') {
          tagMatch = cat.id === 'feedback' || cat.id === 'overlay';
        }

        return searchMatch && tagMatch;
      });

      // Sorting within categories
      if (sortBy === 'name-asc') {
        matchingComponents = [...matchingComponents].sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortBy === 'name-desc') {
        matchingComponents = [...matchingComponents].sort((a, b) => b.name.localeCompare(a.name));
      } else if (sortBy === 'newest') {
        matchingComponents = [...matchingComponents].sort((a, b) => {
          const aNew = V010_NEW_COMPONENTS.includes(a.id);
          const bNew = V010_NEW_COMPONENTS.includes(b.id);
          if (aNew && !bNew) return -1;
          if (!aNew && bNew) return 1;
          return a.name.localeCompare(b.name);
        });
      }

      return {
        ...cat,
        components: matchingComponents,
      };
    }).filter((cat) => cat.components.length > 0);
  }, [searchQuery, selectedCategory, selectedTag, sortBy]);

  const totalMatches = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.components.length, 0);
  }, [filteredCategories]);

  return (
    <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* 1. Hero Header Card (MUI & Microsoft Fluent 2 benchmark) */}
      <Card
        variant="bordered"
        style={{
          backgroundColor: 'var(--color-surface)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          padding: '32px',
          borderRadius: 16,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
            marginBottom: 12,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <h1
              style={{
                fontSize: 34,
                fontWeight: 800,
                letterSpacing: '-0.025em',
                margin: 0,
                color: 'var(--color-text-primary)',
              }}
            >
              All Components
            </h1>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                padding: '3px 10px',
                borderRadius: 20,
                backgroundColor: 'rgba(0, 127, 255, 0.12)',
                color: 'var(--color-action-primary)',
                border: '1px solid rgba(0, 127, 255, 0.3)',
                letterSpacing: '0.02em',
              }}
            >
              {allComponentsList.length} Components
            </span>
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                padding: '3px 8px',
                borderRadius: 20,
                backgroundColor: 'var(--color-surface-raised)',
                color: 'var(--color-text-muted)',
                border: '1px solid var(--color-border-subtle)',
              }}
            >
              {currentVersion}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 12,
                color: 'var(--color-text-muted)',
                fontWeight: 500,
              }}
            >
              <GlobeIcon size={14} /> Web
            </span>
            <span style={{ color: 'var(--color-border-default)' }}>•</span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 12,
                color: 'var(--color-text-muted)',
                fontWeight: 500,
              }}
            >
              <SmartphoneIcon size={14} /> Mobile Native
            </span>
            <span style={{ color: 'var(--color-border-default)' }}>•</span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 12,
                color: 'var(--color-text-muted)',
                fontWeight: 500,
              }}
            >
              <ComponentIcon size={14} /> Headless
            </span>
          </div>
        </div>

        <p
          style={{
            fontSize: 15,
            lineHeight: 1.6,
            color: 'var(--color-text-secondary)',
            margin: '0 0 24px 0',
            maxWidth: 820,
          }}
        >
          Explore the complete collection of 20 cross-platform UI components. Every component offers
          100% token synchronization, WCAG 2.1 AA accessibility compliance, and identical API semantics
          across React DOM and React Native.
        </p>

        {/* Search & Instant Filter Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            flexWrap: 'wrap',
          }}
        >
          <div style={{ position: 'relative', flex: '1 1 300px', maxWidth: 460 }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter components by name, role, or keyword..."
              style={{
                width: '100%',
                padding: '9px 12px 9px 36px',
                fontSize: 13,
                borderRadius: 8,
                border: '1px solid var(--color-border-default)',
                backgroundColor: 'var(--color-surface-raised)',
                color: 'var(--color-text-primary)',
                outline: 'none',
                transition: 'border-color 0.15s ease',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'var(--color-action-primary)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--color-border-default)')}
            />
            <SearchIcon
              size={15}
              style={{
                position: 'absolute',
                left: 12,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--color-text-muted)',
                pointerEvents: 'none',
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: 10,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--color-text-muted)',
                  cursor: 'pointer',
                  padding: 2,
                  display: 'flex',
                  alignItems: 'center',
                }}
                title="Clear search"
              >
                <CloseIcon size={14} />
              </button>
            )}
          </div>

          {/* Dynamic Sort Selector (Benchmark feature) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-muted)' }}>
              Sort by:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              style={{
                padding: '8px 12px',
                fontSize: 12,
                fontWeight: 600,
                borderRadius: 8,
                border: '1px solid var(--color-border-default)',
                backgroundColor: 'var(--color-surface-raised)',
                color: 'var(--color-text-primary)',
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              <option value="category">Category Default</option>
              <option value="name-asc">Name (A → Z)</option>
              <option value="name-desc">Name (Z → A)</option>
              <option value="newest">Newest (v0.1.0 New)</option>
            </select>
          </div>

          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: 'var(--color-text-muted)',
              marginLeft: 'auto',
            }}
          >
            Showing {totalMatches} of {allComponentsList.length} components
          </span>
        </div>

        {/* Quick Tag Filter Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            flexWrap: 'wrap',
            marginTop: 16,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              color: 'var(--color-text-muted)',
              marginRight: 6,
            }}
          >
            Filter By:
          </span>

          {[
            { id: 'all', label: `All Components (${allComponentsList.length})` },
            { id: 'new', label: `New in v0.1.0 (${V010_NEW_COMPONENTS.length})` },
            { id: 'form', label: 'Form & Input Controls (5)' },
            { id: 'feedback', label: 'Feedback & Overlays (6)' },
          ].map((tag) => {
            const isSelected = selectedTag === tag.id;
            return (
              <button
                key={tag.id}
                onClick={() => setSelectedTag(tag.id as any)}
                style={{
                  padding: '4px 10px',
                  borderRadius: 6,
                  border: '1px solid',
                  borderColor: isSelected ? 'var(--color-action-primary)' : 'var(--color-border-default)',
                  backgroundColor: isSelected ? 'rgba(0, 127, 255, 0.12)' : 'var(--color-surface-raised)',
                  color: isSelected ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
                  fontSize: 12,
                  fontWeight: isSelected ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.12s ease',
                }}
              >
                {tag.label}
              </button>
            );
          })}
        </div>

        {/* Universal Platform Filter Pills (Fluent 2 Benchmark) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            flexWrap: 'wrap',
            marginTop: 12,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              color: 'var(--color-text-muted)',
              marginRight: 6,
            }}
          >
            Platform:
          </span>

          {[
            { id: 'all', label: 'All Platforms (5)', platform: null },
            { id: 'web', label: 'Web (React 19)', platform: 'web' },
            { id: 'ios', label: 'iOS (Swift/RN)', platform: 'ios' },
            { id: 'android', label: 'Android (Compose/RN)', platform: 'android' },
            { id: 'windows', label: 'Windows (WinUI 3)', platform: 'windows' },
            { id: 'macos', label: 'macOS (Sequoia)', platform: 'macos' },
          ].map((p) => {
            const isSelected = selectedPlatform === p.id;
            return (
              <button
                key={p.id}
                onClick={() => {
                  setSelectedPlatform(p.id as any);
                  if (p.id !== 'all') {
                    setPlatform(p.id as any);
                  }
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '4px 10px',
                  borderRadius: 6,
                  border: '1px solid',
                  borderColor: isSelected ? 'var(--color-action-primary)' : 'var(--color-border-default)',
                  backgroundColor: isSelected ? 'rgba(0, 127, 255, 0.12)' : 'var(--color-surface-raised)',
                  color: isSelected ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
                  fontSize: 12,
                  fontWeight: isSelected ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.12s ease',
                }}
              >
                {p.platform ? (
                  <PlatformIcon platform={p.platform as any} size={13} color={isSelected ? 'var(--color-action-primary)' : 'var(--color-text-secondary)'} />
                ) : (
                  <SparklesIcon size={13} color={isSelected ? 'var(--color-action-primary)' : 'var(--color-text-secondary)'} />
                )}
                <span>{p.label}</span>
              </button>
            );
          })}
        </div>

        {/* Category Jump Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            flexWrap: 'wrap',
            marginTop: 20,
            paddingTop: 16,
            borderTop: '1px solid var(--color-border-subtle)',
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              color: 'var(--color-text-muted)',
              marginRight: 6,
            }}
          >
            Categories:
          </span>

          <button
            onClick={() => setSelectedCategory('all')}
            style={{
              padding: '4px 10px',
              borderRadius: 6,
              border: '1px solid',
              borderColor: selectedCategory === 'all' ? 'var(--color-action-primary)' : 'var(--color-border-default)',
              backgroundColor: selectedCategory === 'all' ? 'rgba(0, 127, 255, 0.12)' : 'var(--color-surface-raised)',
              color: selectedCategory === 'all' ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
              fontSize: 12,
              fontWeight: selectedCategory === 'all' ? 700 : 500,
              cursor: 'pointer',
              transition: 'all 0.12s ease',
            }}
          >
            All ({allComponentsList.length})
          </button>

          {COMPONENT_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(isSelected ? 'all' : cat.id)}
                style={{
                  padding: '4px 10px',
                  borderRadius: 6,
                  border: '1px solid',
                  borderColor: isSelected ? 'var(--color-action-primary)' : 'var(--color-border-default)',
                  backgroundColor: isSelected ? 'rgba(0, 127, 255, 0.12)' : 'var(--color-surface-raised)',
                  color: isSelected ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
                  fontSize: 12,
                  fontWeight: isSelected ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.12s ease',
                }}
              >
                {cat.name} ({cat.components.length})
              </button>
            );
          })}
        </div>
      </Card>

      {/* 2. Categorized Components Grid */}
      {filteredCategories.length === 0 ? (
        <Card
          variant="bordered"
          style={{
            backgroundColor: 'var(--color-surface)',
            padding: '60px 24px',
            textAlign: 'center',
            borderRadius: 16,
          }}
        >
          <SearchIcon size={36} style={{ color: 'var(--color-text-muted)', marginBottom: 12 }} />
          <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px 0' }}>
            No components match "{searchQuery}"
          </h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 14, margin: '0 0 16px 0' }}>
            Try searching for a different keyword or reset the category filters.
          </p>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
          >
            Clear Filters
          </Button>
        </Card>
      ) : (
        filteredCategories.map((cat) => (
          <section key={cat.id} id={cat.id} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Category Header Card */}
            <Card
              variant="bordered"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 20px',
                backgroundColor: 'var(--color-surface)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                borderRadius: 12,
                flexWrap: 'wrap',
                gap: 8,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <h2
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    letterSpacing: '-0.015em',
                    margin: 0,
                    color: 'var(--color-text-primary)',
                  }}
                >
                  {cat.name}
                </h2>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: 12,
                    backgroundColor: 'var(--color-surface-raised)',
                    color: 'var(--color-text-muted)',
                    border: '1px solid var(--color-border-subtle)',
                  }}
                >
                  {cat.components.length} {cat.components.length === 1 ? 'component' : 'components'}
                </span>
              </div>
              <span style={{ fontSize: 12, color: 'var(--color-text-muted)', fontWeight: 500 }}>
                {cat.id === 'actions' && 'Buttons & Triggers'}
                {cat.id === 'form' && 'Form Controls & Inputs'}
                {cat.id === 'layout' && 'Structure & Spacing'}
                {cat.id === 'data-display' && 'Data & Visual Lists'}
                {cat.id === 'feedback' && 'Badges & Indicators'}
                {cat.id === 'surfaces' && 'Cards & Panels'}
                {cat.id === 'navigation' && 'Tabs & Wayfinding'}
                {cat.id === 'overlay' && 'Dialogs & Floating UI'}
              </span>
            </Card>

            {/* Component Cards Responsive Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
                gap: 20,
              }}
            >
              {cat.components.map((comp) => {
                const isNew = V010_NEW_COMPONENTS.includes(comp.id);
                const data = COMPONENTS_DATA[comp.id];

                return (
                  <div
                    key={comp.id}
                    onClick={() => navigate(`/components/${comp.id}`)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        navigate(`/components/${comp.id}`);
                      }
                    }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 12,
                      border: '1px solid var(--color-border-default)',
                      backgroundColor: 'var(--color-surface)',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.borderColor = 'var(--color-action-primary)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 127, 255, 0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.borderColor = 'var(--color-border-default)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
                    }}
                  >
                    {/* Live Miniature Visual Preview Area */}
                    <div
                      style={{
                        height: 140,
                        backgroundColor: 'var(--color-surface-raised)',
                        borderBottom: '1px solid var(--color-border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '16px',
                        overflow: 'hidden',
                        position: 'relative',
                      }}
                    >
                      <MiniComponentPreview componentId={comp.id} />
                    </div>

                    {/* Card Content Information */}
                    <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: 8,
                        }}
                      >
                        <h3
                          style={{
                            fontSize: 16,
                            fontWeight: 700,
                            margin: 0,
                            color: 'var(--color-text-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                          }}
                        >
                          <span>{comp.name}</span>
                          <ChevronRightIcon
                            size={13}
                            style={{ color: 'var(--color-text-muted)', opacity: 0.7 }}
                          />
                        </h3>

                        {isNew && (
                          <span
                            style={{
                              fontSize: 9,
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              letterSpacing: '0.04em',
                              padding: '2px 6px',
                              borderRadius: 10,
                              backgroundColor: 'rgba(16, 185, 129, 0.15)',
                              color: '#10B981',
                              border: '1px solid rgba(16, 185, 129, 0.3)',
                            }}
                          >
                            NEW
                          </span>
                        )}
                      </div>

                      <p
                        style={{
                          fontSize: 12.5,
                          lineHeight: 1.5,
                          color: 'var(--color-text-secondary)',
                          margin: 0,
                          flex: 1,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {data ? data.description : `Cross-platform ${comp.name} component with full token styling.`}
                      </p>

                      {/* Universal Platform Parity Badges Footer */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginTop: 6,
                          paddingTop: 8,
                          borderTop: '1px solid var(--color-border-subtle)',
                          fontSize: 11,
                          color: 'var(--color-text-muted)',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <PlatformIcon platform="web" size={12} color="var(--color-text-secondary)" />
                          <PlatformIcon platform="ios" size={12} color="var(--color-text-secondary)" />
                          <PlatformIcon platform="android" size={12} color="var(--color-text-secondary)" />
                          <PlatformIcon platform="windows" size={12} color="var(--color-text-secondary)" />
                          <PlatformIcon platform="macos" size={12} color="var(--color-text-secondary)" />
                        </div>
                        <span
                          style={{
                            fontSize: 10,
                            fontWeight: 600,
                            color: '#10B981',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 3,
                          }}
                        >
                          <CheckIcon size={12} />
                          5 Platforms
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))
      )}
    </div>
  );
};

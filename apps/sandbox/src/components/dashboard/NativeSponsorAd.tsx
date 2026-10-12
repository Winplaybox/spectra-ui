import React, { useState, useMemo } from 'react';
import { Card, Badge, Button, Text, Stack } from '@winplaybox/react';
import { ExternalLinkIcon, SparklesIcon, CloseIcon } from '@winplaybox/icons';

interface NativeSponsorAdProps {
  componentId?: string;
  componentCategory?: string;
  publisherTheme?: 'docs' | 'devtools' | 'editorial';
  style?: React.CSSProperties;
  className?: string;
}

interface AdContent {
  badge: string;
  badgeVariant: 'primary' | 'success' | 'warning' | 'info';
  title: string;
  description: string;
  actionText: string;
  url: string;
  iconBg: string;
}

/**
 * Spectra UI Dynamic Native Sponsor Ad Unit
 * Displays a single, elegant native card ad dynamically tailored
 * to the active component context, strictly reusing Spectra UI design system primitives.
 */
export const NativeSponsorAd: React.FC<NativeSponsorAdProps> = ({
  componentId = '',
  componentCategory = '',
  style,
  className,
}) => {
  const [isDismissed, setIsDismissed] = useState(false);

  // Dynamically resolve ad content tailored to the active component or category
  const adContent: AdContent = useMemo(() => {
    const id = componentId.toLowerCase();
    const cat = componentCategory.toLowerCase();

    // 1. Form & Inputs category
    if (
      cat.includes('form') ||
      cat.includes('input') ||
      ['text-input', 'input', 'checkbox', 'radio', 'switch', 'select', 'combobox', 'autocomplete', 'slider', 'field'].includes(id)
    ) {
      return {
        badge: 'ENTERPRISE FORMS',
        badgeVariant: 'primary',
        title: 'Spectra Form Engine & Validation',
        description:
          'Type-safe forms with real-time Zod validation, accessible error announcements, and zero-re-render affixes.',
        actionText: 'Explore Forms',
        url: 'https://github.com/Winplaybox/spectra-ui',
        iconBg: 'linear-gradient(135deg, #0078D4, #00B7C3)',
      };
    }

    // 2. Data Display & Grids
    if (
      cat.includes('data') ||
      ['data-grid', 'table', 'list', 'card', 'avatar', 'badge'].includes(id)
    ) {
      return {
        badge: 'VIRTUALIZED GRID',
        badgeVariant: 'success',
        title: '60fps Virtualized DataGrid Pro',
        description:
          'Sub-millisecond render cycles over 500k rows with column pinning, multi-sort, and Excel spreadsheet export.',
        actionText: 'Inspect DataGrid',
        url: 'https://github.com/Winplaybox/spectra-ui',
        iconBg: 'linear-gradient(135deg, #10B981, #059669)',
      };
    }

    // 3. Overlays & Dialogs
    if (
      cat.includes('overlay') ||
      cat.includes('feedback') ||
      ['dialog', 'drawer', 'tooltip', 'popover', 'modal', 'alert', 'toast', 'message-bar'].includes(id)
    ) {
      return {
        badge: 'ACCESSIBLE OVERLAYS',
        badgeVariant: 'warning',
        title: 'APG Focus Trap & Modal Layers',
        description:
          'WAI-ARIA APG compliant modal layers with nested scroll lock, escape dismissal, and automatic focus restoration.',
        actionText: 'View APG Patterns',
        url: 'https://github.com/Winplaybox/spectra-ui',
        iconBg: 'linear-gradient(135deg, #F59E0B, #D97706)',
      };
    }

    // 4. Navigation
    if (
      cat.includes('nav') ||
      ['tabs', 'breadcrumb', 'menu', 'nav', 'pagination', 'stepper'].includes(id)
    ) {
      return {
        badge: 'NAVIGATION ENGINE',
        badgeVariant: 'info',
        title: 'Roving Tabindex & Keyboard Navigation',
        description:
          'Robust directional keyboard navigation with automatic ARIA orientation, nested submenus, and screen reader labels.',
        actionText: 'Learn Navigation',
        url: 'https://github.com/Winplaybox/spectra-ui',
        iconBg: 'linear-gradient(135deg, #6366F1, #4F46E5)',
      };
    }

    // Default: Core Multi-Platform Ecosystem
    return {
      badge: 'SPECTRA ECOSYSTEM',
      badgeVariant: 'primary',
      title: 'Spectra Multi-Platform Native Engine',
      description:
        'Unified design tokens, Web + React Native parity, and 14,255 on-demand vector icons for enterprise applications.',
      actionText: 'Get Started Free',
      url: 'https://github.com/Winplaybox/spectra-ui',
      iconBg: 'linear-gradient(135deg, #0078D4, #38BDF8)',
    };
  }, [componentId, componentCategory]);

  if (isDismissed) {
    return null;
  }

  return (
    <Card
      variant="bordered"
      className={className}
      style={{
        padding: '14px 16px',
        backgroundColor: 'var(--color-surface)',
        borderRadius: 12,
        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.05)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        ...style,
      }}
    >
      {/* Top Header Row with Badge & Dismiss */}
      <Stack direction="row" align="center" justify="between">
        <Stack direction="row" align="center" gap="xs">
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: 6,
              background: adContent.iconBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '0 2px 6px rgba(0, 120, 212, 0.25)',
              flexShrink: 0,
            }}
          >
            <SparklesIcon size={13} />
          </div>
          <Badge variant={adContent.badgeVariant} size="sm">
            {adContent.badge}
          </Badge>
        </Stack>

        <button
          onClick={() => setIsDismissed(true)}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--color-text-muted)',
            cursor: 'pointer',
            padding: 2,
            display: 'flex',
            alignItems: 'center',
            borderRadius: 4,
          }}
          title="Dismiss ad"
          aria-label="Dismiss sponsor"
        >
          <CloseIcon size={12} />
        </button>
      </Stack>

      {/* Dynamic Copy Link */}
      <a
        href={adContent.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none',
          color: 'inherit',
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
        }}
      >
        <Text
          as="h4"
          variant="heading"
          style={{
            margin: 0,
            fontSize: 13,
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            lineHeight: 1.3,
          }}
        >
          {adContent.title}
        </Text>
        <Text
          as="p"
          style={{
            margin: 0,
            fontSize: 11.5,
            color: 'var(--color-text-secondary)',
            lineHeight: 1.45,
          }}
        >
          {adContent.description}
        </Text>
      </a>

      {/* Bottom Action Footer */}
      <Stack direction="row" align="center" justify="between" style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: 8 }}>
        <span
          style={{
            fontSize: 9.5,
            fontWeight: 600,
            color: 'var(--color-text-muted)',
            letterSpacing: '0.04em',
          }}
        >
          SPONSOR
        </span>

        <Button
          variant="secondary"
          size="sm"
          onClick={() => window.open(adContent.url, '_blank')}
          style={{
            height: 24,
            fontSize: 11,
            padding: '0 8px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <span>{adContent.actionText}</span>
          <ExternalLinkIcon size={10} />
        </Button>
      </Stack>
    </Card>
  );
};

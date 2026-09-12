import React, { useState } from 'react';
import { Card, Button } from '@spectra/react';
import { ExternalLinkIcon, SparklesIcon, CloseIcon } from '@spectra/icons';

export type AdFormat = 'cover' | 'responsive' | 'classic';
export type PublisherTheme = 'docs' | 'devtools' | 'editorial';

interface NativeSponsorAdProps {
  initialFormat?: AdFormat;
  publisherTheme?: PublisherTheme;
  allowFormatSwitch?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export const NativeSponsorAd: React.FC<NativeSponsorAdProps> = ({
  initialFormat = 'classic',
  publisherTheme = 'docs',
  allowFormatSwitch = true,
  style,
  className,
}) => {
  const [format, setFormat] = useState<AdFormat>(initialFormat);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return null;
  }

  // Theme-specific colors
  const themeColors = {
    docs: {
      accent: '#007FFF',
      badgeBg: 'rgba(0, 127, 255, 0.12)',
      badgeBorder: 'rgba(0, 127, 255, 0.3)',
      tagText: 'DOCS SPONSOR',
    },
    devtools: {
      accent: '#10B981',
      badgeBg: 'rgba(16, 185, 129, 0.12)',
      badgeBorder: 'rgba(16, 185, 129, 0.3)',
      tagText: 'DEV TOOLS PARTNER',
    },
    editorial: {
      accent: '#8B5CF6',
      badgeBg: 'rgba(139, 92, 246, 0.12)',
      badgeBorder: 'rgba(139, 92, 246, 0.3)',
      tagText: 'FEATURED EDITORIAL',
    },
  }[publisherTheme];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        ...style,
      }}
      className={className}
    >
      {/* Optional Format Switcher (MUI / Developer benchmark preview) */}
      {allowFormatSwitch && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 10,
            color: 'var(--color-text-muted)',
            padding: '0 2px',
          }}
        >
          <span style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Ad Format:
          </span>
          <div style={{ display: 'flex', gap: 4 }}>
            {(['classic', 'responsive', 'cover'] as AdFormat[]).map((fmt) => (
              <button
                key={fmt}
                onClick={() => setFormat(fmt)}
                style={{
                  background: format === fmt ? 'var(--color-surface-raised)' : 'transparent',
                  border: '1px solid',
                  borderColor: format === fmt ? 'var(--color-action-primary)' : 'transparent',
                  color: format === fmt ? 'var(--color-action-primary)' : 'var(--color-text-muted)',
                  borderRadius: 4,
                  padding: '2px 6px',
                  cursor: 'pointer',
                  fontSize: 10,
                  fontWeight: 600,
                  textTransform: 'capitalize',
                  transition: 'all 0.1s ease',
                }}
              >
                {fmt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 1. CLASSIC FORMAT: Fit naturally & perform quietly */}
      {format === 'classic' && (
        <Card
          variant="bordered"
          style={{
            padding: '12px 14px',
            backgroundColor: 'var(--color-surface)',
            borderRadius: 10,
            boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: 'linear-gradient(135deg, #007FFF, #38BDF8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: 13,
                  boxShadow: '0 2px 8px rgba(0,127,255,0.3)',
                }}
              >
                S
              </div>
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  padding: '1px 6px',
                  borderRadius: 4,
                  backgroundColor: themeColors.badgeBg,
                  color: themeColors.accent,
                  border: `1px solid ${themeColors.badgeBorder}`,
                  letterSpacing: '0.04em',
                }}
              >
                {themeColors.tagText}
              </span>
            </div>

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
              }}
              title="Dismiss ad"
            >
              <CloseIcon size={12} />
            </button>
          </div>

          <a
            href="https://github.com/Winplaybox/spectra-ui"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-text-primary)' }}>
              Fit naturally & perform quietly
            </div>
            <p
              style={{
                fontSize: 11.5,
                lineHeight: 1.5,
                color: 'var(--color-text-secondary)',
                margin: 0,
              }}
            >
              Publishers style this ad to match their site, so readers engage with it like content,
              not advertising.
            </p>
          </a>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: 10,
              color: 'var(--color-text-muted)',
              borderTop: '1px solid var(--color-border-subtle)',
              paddingTop: 6,
            }}
          >
            <span>ADS VIA SPECTRA NETWORK</span>
            <ExternalLinkIcon size={10} />
          </div>
        </Card>
      )}

      {/* 2. RESPONSIVE FORMAT: Attract attention & inspire interaction */}
      {format === 'responsive' && (
        <Card
          variant="bordered"
          style={{
            padding: '14px 16px',
            backgroundColor: 'var(--color-surface)',
            borderRadius: 12,
            boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 10,
              background: 'linear-gradient(135deg, #0EA5E9, #2563EB)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              flexShrink: 0,
              boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)',
            }}
          >
            <SparklesIcon size={26} />
          </div>

          <div style={{ flex: 1, minWidth: 160, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  padding: '1px 5px',
                  borderRadius: 4,
                  backgroundColor: themeColors.badgeBg,
                  color: themeColors.accent,
                }}
              >
                RESPONSIVE
              </span>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-text-primary)' }}>
                Attract attention & inspire interaction
              </span>
            </div>
            <p
              style={{
                fontSize: 11.5,
                lineHeight: 1.45,
                color: 'var(--color-text-secondary)',
                margin: 0,
              }}
            >
              A polished native ad that adapts to any site width. Your brand image paired with concise
              copy, styled and consistent across every publisher.
            </p>
          </div>

          <Button
            variant="primary"
            size="sm"
            onClick={() => window.open('https://github.com/Winplaybox/spectra-ui', '_blank')}
            style={{ height: 28, fontSize: 11, padding: '0 12px', whiteSpace: 'nowrap' }}
          >
            Learn More →
          </Button>
        </Card>
      )}

      {/* 3. COVER FORMAT: Tell a story & drive engagement */}
      {format === 'cover' && (
        <div
          style={{
            position: 'relative',
            borderRadius: 14,
            overflow: 'hidden',
            background: 'linear-gradient(145deg, #0B1120 0%, #0369A1 60%, #1E3A8A 100%)',
            color: '#FFFFFF',
            padding: '20px 22px',
            boxShadow: '0 8px 24px rgba(3, 105, 161, 0.25)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '2px 8px',
                borderRadius: 20,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                backdropFilter: 'blur(4px)',
              }}
            >
              COVER EXPERIENCE · {themeColors.tagText}
            </span>

            <button
              onClick={() => setIsDismissed(true)}
              style={{
                background: 'rgba(0, 0, 0, 0.2)',
                border: 'none',
                color: '#FFFFFF',
                cursor: 'pointer',
                padding: 4,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
              }}
              title="Dismiss ad"
            >
              <CloseIcon size={12} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <h4
              style={{
                fontSize: 16,
                fontWeight: 800,
                margin: 0,
                letterSpacing: '-0.01em',
                color: '#FFFFFF',
              }}
            >
              Tell a story & drive engagement
            </h4>
            <p
              style={{
                fontSize: 12,
                lineHeight: 1.5,
                color: 'rgba(255, 255, 255, 0.9)',
                margin: 0,
              }}
            >
              Cover is a high-impact native ad with rich visuals, your brand’s story, and a clear
              call-to-action. Viewers interact with the creative, not just glance past it.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
            <button
              onClick={() => window.open('https://github.com/Winplaybox/spectra-ui', '_blank')}
              style={{
                padding: '6px 14px',
                borderRadius: 6,
                backgroundColor: '#FFFFFF',
                color: '#0369A1',
                border: 'none',
                fontWeight: 700,
                fontSize: 12,
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                transition: 'transform 0.12s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-1px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
            >
              Interact with Creative →
            </button>
            <span style={{ fontSize: 10, color: 'rgba(255, 255, 255, 0.7)' }}>SPONSORED BY SPECTRA</span>
          </div>
        </div>
      )}
    </div>
  );
};

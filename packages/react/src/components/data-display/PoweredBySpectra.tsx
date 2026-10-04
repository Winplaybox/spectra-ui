import React from 'react';

export interface PoweredBySpectraProps {
  /** Destination URL when clicked */
  href?: string;
  /** Visual theme: light | dark | auto (respects prefers-color-scheme) */
  theme?: 'light' | 'dark' | 'auto';
  /** Size preset */
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  target?: '_blank' | '_self';
}

const SIZE_MAP = {
  sm: { height: 20, logoScale: 0.72, fontSize: 9.5 },
  md: { height: 26, logoScale: 0.92, fontSize: 11 },
  lg: { height: 32, logoScale: 1.12, fontSize: 13 },
};

/**
 * PoweredBySpectra
 *
 * A self-contained, theme-aware attribution badge.
 * Mirrors the Algolia DocSearch "Powered by" pattern.
 *
 * @example
 * <PoweredBySpectra href="https://spectra-ui.winplaybox.in" theme="auto" size="md" />
 */
export const PoweredBySpectra: React.FC<PoweredBySpectraProps> = ({
  href = 'https://spectra-ui.winplaybox.in',
  theme = 'auto',
  size = 'md',
  className,
  target = '_blank',
}) => {
  const { height, logoScale, fontSize } = SIZE_MAP[size];
  const badgeWidth = 168;
  const isDark = theme === 'dark';
  const isAuto = theme === 'auto';

  // Token-aligned colors (matches light.mode.json / dark.mode.json)
  const colors = {
    bg:       isDark ? '#18181B' : '#FFFFFF',
    border:   isDark ? '#3F3F46' : '#E4E4E7',
    label:    '#71717A',
    wordmark: isDark ? '#F4F4F5' : '#18181B',
    primary:  '#2563EB',
    hover:    '#1D4ED8',
    spark:    '#3B82F6',
  };

  return (
    <>
      {isAuto && (
        <style>{`
          @media (prefers-color-scheme: dark) {
            .spctr-badge   { background: #18181B !important; border-color: #3F3F46 !important; }
            .spctr-wordmark { fill: #F4F4F5 !important; }
          }
        `}</style>
      )}
      <a
        href={href}
        target={target}
        rel="noopener noreferrer"
        aria-label="Powered by Spectra UI"
        className={className}
        style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={badgeWidth}
          height={height}
          viewBox={`0 0 ${badgeWidth} ${height}`}
          role="img"
          aria-label="Powered by Spectra UI"
          className="spctr-badge"
          style={{
            display: 'block',
            background: colors.bg,
            border: `1px solid ${colors.border}`,
            borderRadius: height * 0.38,
          }}
        >
          {/* "Powered by" label */}
          <text
            x="10"
            y={height * 0.65}
            fontFamily="Inter, system-ui, -apple-system, sans-serif"
            fontSize={fontSize - 1}
            fill={colors.label}
          >
            Powered by
          </text>

          {/* Spectra prism / spark glyph */}
          <g transform={`translate(68, ${height / 2 - 7.5 * logoScale}) scale(${logoScale})`}>
            <polygon points="7.5,0 15,4.33 15,12.99 7.5,17.32 0,12.99 0,4.33" fill={colors.primary} opacity="0.15" />
            <polygon points="7.5,2.5 7.5,8.66 2,11.75 2,5.6"                   fill={colors.hover} />
            <polygon points="7.5,2.5 13,5.6 13,11.75 7.5,8.66"                 fill={colors.primary} />
            <polygon points="7.5,8.66 13,11.75 7.5,14.82 2,11.75"              fill={colors.spark} opacity="0.75" />
            <polygon points="7.5,2.5 11,4.4 9.5,7.5 7.5,6.5"                  fill="white" opacity="0.55" />
          </g>

          {/* "Spectra UI" wordmark */}
          <text
            x={68 + 18 * logoScale}
            y={height * 0.65}
            fontFamily="Inter, system-ui, -apple-system, sans-serif"
            fontSize={fontSize}
            fontWeight="600"
            letterSpacing="-0.01em"
            className="spctr-wordmark"
            fill={colors.wordmark}
          >
            Spectra UI
          </text>
        </svg>
      </a>
    </>
  );
};

export default PoweredBySpectra;

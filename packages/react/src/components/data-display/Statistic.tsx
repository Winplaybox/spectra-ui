// packages/react/src/components/data-display/Statistic.tsx
import React, { forwardRef, ReactNode } from 'react';

export interface StatisticProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title' | 'prefix'> {
  title: ReactNode;
  value: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  trend?: {
    value: number | string;
    direction: 'up' | 'down' | 'neutral';
    label?: string;
  };
  extra?: ReactNode;
}

/**
 * Statistic - High-impact KPI display for enterprise dashboards.
 * Strict Zero Emoji Policy: Trend indicators use authentic SVG chevrons.
 */
export const Statistic = forwardRef<HTMLDivElement, StatisticProps>(
  (
    {
      title,
      value,
      prefix,
      suffix,
      trend,
      extra,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={className}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          padding: '16px 20px',
          borderRadius: 'var(--radius-component-md, 8px)',
          backgroundColor: 'var(--color-surface-elevated)',
          border: '1px solid var(--color-border-default)',
          ...style,
        }}
        {...rest}
      >
        <div
          style={{
            fontSize: 13,
            fontWeight: 500,
            color: 'var(--color-text-secondary)',
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 4,
            fontSize: 28,
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            fontVariantNumeric: 'tabular-nums',
            lineHeight: 1.2,
          }}
        >
          {prefix && <span style={{ fontSize: '0.75em', opacity: 0.8 }}>{prefix}</span>}
          <span>{value}</span>
          {suffix && <span style={{ fontSize: '0.65em', color: 'var(--color-text-muted)' }}>{suffix}</span>}
        </div>

        {(trend || extra) && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginTop: 4,
              fontSize: 12,
            }}
          >
            {trend && (
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 3,
                  fontWeight: 600,
                  color:
                    trend.direction === 'up'
                      ? 'var(--color-feedback-success, #22c55e)'
                      : trend.direction === 'down'
                      ? 'var(--color-feedback-danger)'
                      : 'var(--color-text-muted)',
                }}
              >
                {trend.direction === 'up' && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="18 15 12 9 6 15" />
                  </svg>
                )}
                {trend.direction === 'down' && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                )}
                <span>{trend.value}</span>
                {trend.label && (
                  <span style={{ color: 'var(--color-text-muted)', fontWeight: 400, marginLeft: 2 }}>
                    {trend.label}
                  </span>
                )}
              </div>
            )}
            {extra}
          </div>
        )}
      </div>
    );
  }
);

Statistic.displayName = 'Statistic';

// packages/react/src/components/surfaces/MediaCard.tsx
import React, { forwardRef, ReactNode } from 'react';
import { Card } from './Card';

export interface MediaCardProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  media?: ReactNode;
  mediaHeight?: number | string;
  title: ReactNode;
  subtitle?: ReactNode;
  badge?: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
}

/**
 * MediaCard - Composite surface combining a visual media header with structured content and actions.
 * Benchmarked against Google Material UI Card with Media & Microsoft Fluent UI 2 Card.
 */
export const MediaCard = forwardRef<HTMLDivElement, MediaCardProps>(
  (
    {
      media,
      mediaHeight = 140,
      title,
      subtitle,
      badge,
      children,
      actions,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    return (
      <Card
        ref={ref}
        variant="bordered"
        padding="none"
        className={className}
        style={{
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          ...style,
        }}
        {...rest}
      >
        {/* Media header slot */}
        {media && (
          <div
            style={{
              width: '100%',
              height: mediaHeight,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'var(--color-surface-raised, #0f172a)',
            }}
          >
            {media}
          </div>
        )}

        {/* Content body */}
        <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--color-text-primary, #f8fafc)' }}>
                {title}
              </div>
              {subtitle && (
                <div style={{ fontSize: 13, color: 'var(--color-text-muted, #94a3b8)', marginTop: 2 }}>
                  {subtitle}
                </div>
              )}
            </div>
            {badge && <div style={{ flexShrink: 0 }}>{badge}</div>}
          </div>

          {children && (
            <div style={{ fontSize: 13, color: 'var(--color-text-secondary, #94a3b8)', lineHeight: 1.5 }}>
              {children}
            </div>
          )}

          {actions && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 'auto', paddingTop: 8 }}>
              {actions}
            </div>
          )}
        </div>
      </Card>
    );
  }
);

MediaCard.displayName = 'MediaCard';

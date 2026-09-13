// packages/react/src/components/data-display/Timeline.tsx
import React, { forwardRef, ReactNode } from 'react';

export interface TimelineItemProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  title: ReactNode;
  description?: ReactNode;
  timestamp?: ReactNode;
  icon?: ReactNode;
  isLast?: boolean;
}

/**
 * TimelineItem - Individual node along a chronological timeline spine.
 */
export const TimelineItem = forwardRef<HTMLDivElement, TimelineItemProps>(
  (
    {
      title,
      description,
      timestamp,
      icon,
      isLast = false,
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
          gap: 14,
          position: 'relative',
          paddingBottom: isLast ? 0 : 24,
          ...style,
        }}
        {...rest}
      >
        {/* Left icon and connecting spine */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            width: 20,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: '50%',
              backgroundColor: 'var(--color-action-primary)',
              border: '3px solid var(--color-surface)',
              boxShadow: '0 0 0 1px var(--color-action-primary)',
              zIndex: 1,
              marginTop: 3,
            }}
          >
            {icon}
          </div>

          {!isLast && (
            <div
              style={{
                position: 'absolute',
                top: 18,
                bottom: 0,
                width: 2,
                backgroundColor: 'var(--color-border-default)',
              }}
            />
          )}
        </div>

        {/* Content body */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 600, fontSize: 13, color: 'var(--color-text-primary)' }}>
              {title}
            </span>
            {timestamp && (
              <span style={{ fontSize: 11, color: 'var(--color-text-muted)', fontVariantNumeric: 'tabular-nums' }}>
                {timestamp}
              </span>
            )}
          </div>
          {description && (
            <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
              {description}
            </div>
          )}
        </div>
      </div>
    );
  }
);
TimelineItem.displayName = 'TimelineItem';

export interface TimelineProps extends React.ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
}

/**
 * Timeline - Chronological vertical sequence for logs, audits, and deployment history.
 * Benchmarked against IBM Carbon Timeline & Google Material UI Timeline.
 */
export const Timeline = forwardRef<HTMLDivElement, TimelineProps>(
  ({ children, className, style, ...rest }, ref) => {
    const childArray = React.Children.toArray(children);
    const count = childArray.length;

    return (
      <div
        ref={ref}
        className={className}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          ...style,
        }}
        {...rest}
      >
        {childArray.map((child, index) => {
          if (!React.isValidElement(child)) return child;
          return React.cloneElement(child as React.ReactElement<any>, {
            isLast: index === count - 1,
          });
        })}
      </div>
    );
  }
);
Timeline.displayName = 'Timeline';

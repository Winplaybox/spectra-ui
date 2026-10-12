import React, { forwardRef, ReactNode } from 'react';
import { Stack } from '../layout/Stack';
import { Text } from '../layout/Text';

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
        <Stack direction="column" gap="xs" style={{ flex: 1 }}>
          <Stack direction="row" justify="between" align="center">
            <Text as="span" size="sm" weight="semibold" color="primary">
              {title}
            </Text>
            {timestamp && (
              <Text as="span" size="xs" color="muted" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {timestamp}
              </Text>
            )}
          </Stack>
          {description && (
            <Text as="span" size="xs" color="secondary" style={{ lineHeight: 1.4 }}>
              {description}
            </Text>
          )}
        </Stack>
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

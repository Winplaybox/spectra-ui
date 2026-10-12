// packages/react/src/components/surfaces/MediaCard.tsx
import React, { forwardRef, ReactNode } from 'react';
import { Card } from './Card';
import { Stack } from '../layout/Stack';
import { Box } from '../layout/Box';
import { Text } from '../layout/Text';

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
 * Engineered for rich media cards, visual showcases, and structured callouts.
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
          <Box
            style={{
              width: '100%',
              height: mediaHeight,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'var(--color-surface-raised)',
            }}
          >
            {media}
          </Box>
        )}

        {/* Content body */}
        <Stack direction="column" gap="sm" style={{ padding: '18px 20px', flex: 1 }}>
          <Stack direction="row" justify="between" align="start" gap="sm">
            <Stack direction="column" gap="xs">
              <Text variant="heading" size="md" weight="bold" color="primary">
                {title}
              </Text>
              {subtitle && (
                <Text variant="body" size="sm" color="muted">
                  {subtitle}
                </Text>
              )}
            </Stack>
            {badge && <Box style={{ flexShrink: 0 }}>{badge}</Box>}
          </Stack>

          {children && (
            <Text variant="body" size="sm" color="secondary" style={{ lineHeight: 1.5 }}>
              {children}
            </Text>
          )}

          {actions && (
            <Stack direction="row" align="center" gap="sm" style={{ marginTop: 'auto', paddingTop: 8 }}>
              {actions}
            </Stack>
          )}
        </Stack>
      </Card>
    );
  }
);

MediaCard.displayName = 'MediaCard';

// packages/react/src/components/data-display/AvatarGroup.tsx
import React, { forwardRef, ReactNode } from 'react';
import type { AvatarSize } from './Avatar';

export interface AvatarGroupProps extends React.ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  /** Maximum number of avatars to display before showing an overflow badge. Default is 4. */
  max?: number;
  /** Uniform avatar size across the group. Default is 40. */
  size?: AvatarSize;
  /** Overlap spacing in pixels (e.g. -8 for overlapping stack). Default is -8. */
  spacing?: number;
  /** Group presentation layout: 'stack' (overlapping) or 'spread' (spaced items). Default is 'stack'. */
  layout?: 'stack' | 'spread';
}

function getDimension(size: AvatarSize): number {
  if (typeof size === 'number') return size;
  switch (size) {
    case 'xs':
      return 24;
    case 'sm':
      return 32;
    case 'md':
      return 40;
    case 'lg':
      return 56;
    case 'xl':
      return 64;
    default:
      return 40;
  }
}

/**
 * AvatarGroup - Stack of overlapping avatars with an automatic overflow count indicator.
 * Engineered for compact team rosters, collaborator bars, and hierarchical presence presentation.
 */
export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      children,
      max = 4,
      size = 40,
      spacing = -8,
      layout = 'stack',
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const childArray = React.Children.toArray(children);
    const total = childArray.length;
    const visibleCount = max ? Math.min(max, total) : total;
    const overflow = total - visibleCount;

    const visibleChildren = childArray.slice(0, visibleCount);
    const dim = getDimension(size);
    const fontSize = Math.max(10, Math.floor(dim * 0.35));
    const effectiveSpacing = layout === 'spread' ? 8 : spacing;

    return (
      <div
        ref={ref}
        role="group"
        aria-label={`Group of ${total} avatars`}
        className={className}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          flexDirection: 'row',
          ...style,
        }}
        {...rest}
      >
        {visibleChildren.map((child, index) => (
          <div
            key={index}
            style={{
              marginLeft: index === 0 ? 0 : effectiveSpacing,
              zIndex: layout === 'stack' ? visibleCount - index : 1,
              borderRadius: '9999px',
              boxShadow: layout === 'stack' ? '0 0 0 2px var(--color-surface, #ffffff)' : 'none',
              display: 'inline-flex',
            }}
          >
            {React.isValidElement(child)
              ? React.cloneElement(child as React.ReactElement<any>, { size })
              : child}
          </div>
        ))}

        {overflow > 0 && (
          <div
            aria-label={`${overflow} more users`}
            style={{
              marginLeft: effectiveSpacing,
              zIndex: 0,
              width: dim,
              height: dim,
              borderRadius: '9999px',
              backgroundColor: 'var(--color-surface-raised, #F4F4F5)',
              color: 'var(--color-text-secondary, #3F3F46)',
              border: layout === 'stack' ? '2px solid var(--color-surface, #ffffff)' : '1px solid var(--color-border-subtle, #E4E4E7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize,
              fontWeight: 600,
              userSelect: 'none',
              fontVariantNumeric: 'tabular-nums',
              boxSizing: 'border-box',
            }}
          >
            +{overflow}
          </div>
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';

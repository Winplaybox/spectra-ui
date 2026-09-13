// packages/react/src/components/data-display/AvatarGroup.tsx
import React, { forwardRef, ReactNode } from 'react';

export interface AvatarGroupProps extends React.ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  spacing?: number;
}

/**
 * AvatarGroup - Stack of overlapping avatars with an automatic overflow count indicator.
 * Engineered for compact team rosters and hierarchical presence presentation.
 */
export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      children,
      max = 4,
      size = 'md',
      spacing = -8,
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
    const dim = size === 'sm' ? 28 : size === 'lg' ? 44 : 36;
    const fontSize = size === 'sm' ? 11 : size === 'lg' ? 14 : 12;

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
              marginLeft: index === 0 ? 0 : spacing,
              zIndex: visibleCount - index,
              borderRadius: '50%',
              boxShadow: '0 0 0 2px var(--color-surface, #090D16)',
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
              marginLeft: spacing,
              zIndex: 0,
              width: dim,
              height: dim,
              borderRadius: '50%',
              backgroundColor: 'var(--color-surface-raised, #1e293b)',
              color: 'var(--color-text-secondary, #94a3b8)',
              border: '2px solid var(--color-surface, #090D16)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize,
              fontWeight: 600,
              userSelect: 'none',
              fontVariantNumeric: 'tabular-nums',
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

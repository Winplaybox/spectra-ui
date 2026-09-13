// packages/react/src/components/navigation/Link.tsx
import React, { forwardRef, ReactNode } from 'react';
import { ExternalLinkIcon } from '@spectra/icons';

export interface LinkProps extends React.ComponentPropsWithoutRef<'a'> {
  children: ReactNode;
  external?: boolean;
  underline?: 'always' | 'hover' | 'none';
  variant?: 'primary' | 'muted';
}

/**
 * Link - Accessible interactive hyperlink component.
 * Engineered for inline anchors, navigation references, and external target indicators.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      children,
      external = false,
      underline = 'hover',
      variant = 'primary',
      className,
      style,
      href,
      target,
      rel,
      ...rest
    },
    ref
  ) => {
    const isExternal = external || (href && (href.startsWith('http://') || href.startsWith('https://')));

    return (
      <a
        ref={ref}
        href={href}
        target={isExternal ? '_blank' : target}
        rel={isExternal ? 'noopener noreferrer' : rel}
        className={className}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          color:
            variant === 'primary'
              ? 'var(--color-action-primary, #007FFF)'
              : 'var(--color-text-secondary, #94a3b8)',
          textDecoration: underline === 'always' ? 'underline' : 'none',
          cursor: 'pointer',
          fontWeight: 500,
          transition: 'color 0.12s ease',
          ...style,
        }}
        onMouseEnter={(e) => {
          if (underline === 'hover') e.currentTarget.style.textDecoration = 'underline';
        }}
        onMouseLeave={(e) => {
          if (underline === 'hover') e.currentTarget.style.textDecoration = 'none';
        }}
        {...rest}
      >
        <span>{children}</span>
        {isExternal && (
          <span style={{ display: 'inline-flex', opacity: 0.8 }}>
            <ExternalLinkIcon size={13} />
          </span>
        )}
      </a>
    );
  }
);

Link.displayName = 'Link';

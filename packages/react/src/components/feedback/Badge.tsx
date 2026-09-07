import React from 'react';
import * as styles from './Badge.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  dot = false,
  children,
  className,
  ...props
}) => {
  const variantClass = variant === 'default' ? styles.defaultVariant : styles[variant];

  return (
    <span className={`${styles.badge} ${variantClass} ${styles[size]} ${className || ''}`} {...props}>
      {dot && <span className={styles.dot} aria-hidden="true" />}
      {children}
    </span>
  );
};

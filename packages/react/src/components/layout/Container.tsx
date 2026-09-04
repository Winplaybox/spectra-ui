// packages/react/src/components/layout/Container.tsx
import { forwardRef, ReactNode } from 'react';
import * as styles from './Container.css';

export interface ContainerProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  centered?: boolean;
  fullHeight?: boolean;
}

const paddingMap = {
  none: styles.paddingNone,
  sm: styles.paddingSm,
  md: styles.paddingMd,
  lg: styles.paddingLg,
};

const sizeMap = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
  xl: styles.xl,
  full: styles.full,
};

/**
 * Container - Base layout container component
 */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      children,
      size = 'lg',
      padding = 'md',
      centered = true,
      fullHeight = false,
      className,
      ...rest
    },
    ref
  ) => {
    const containerClass = [
      styles.container,
      sizeMap[size],
      paddingMap[padding],
      size,
      padding,
      centered ? `${styles.centered} centered` : '',
      fullHeight ? 'fullHeight' : '',
      className || '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={containerClass} {...rest}>
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

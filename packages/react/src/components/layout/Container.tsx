// packages/react/src/components/layout/Container.tsx
import { forwardRef, ReactNode } from 'react';
import * as styles from './Container.css';

export interface ContainerProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  centered?: boolean;
}

/**
 * Container - Base layout component for page/section containers
 * @example
 * <Container size="lg" centered>
 *   <h1>Main Content</h1>
 * </Container>
 */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      children,
      size = 'lg',
      padding = 'md',
      centered = true,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`${styles.container} ${styles[size]} ${styles[`padding-${padding}`]} ${
          centered ? styles.centered : ''
        } ${className || ''}`}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

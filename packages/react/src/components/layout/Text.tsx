// packages/react/src/components/layout/Text.tsx
import { forwardRef, ReactNode } from 'react';
import * as styles from './Text.css';

type TextElement = 'p' | 'span' | 'div';
type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold';
type TextColor = 'primary' | 'secondary' | 'muted' | 'inverse';

export interface TextProps extends React.ComponentPropsWithoutRef<TextElement> {
  children?: ReactNode;
  as?: TextElement;
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColor;
  truncate?: boolean;
}

/**
 * Text - Semantic text rendering with size/weight/color variants
 * @example
 * <Text size="lg" weight="semibold" color="primary">
 *   Heading text
 * </Text>
 */
export const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      children,
      as = 'p',
      size = 'md',
      weight = 'regular',
      color = 'primary',
      truncate = false,
      className,
      ...rest
    },
    ref
  ) => {
    const Component = as as any;
    const styleClasses = `${styles.text} ${styles[size]} ${styles[weight]} ${styles[color]} ${
      truncate ? styles.truncate : ''
    } ${className || ''}`;

    return (
      <Component ref={ref} className={styleClasses} {...rest}>
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';

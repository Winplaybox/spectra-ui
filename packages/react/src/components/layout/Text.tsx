// packages/react/src/components/layout/Text.tsx
import { forwardRef, ReactNode } from 'react';
import * as styles from './Text.css';

type TextElement = 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label';
type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold';
type TextColor = 'primary' | 'secondary' | 'muted' | 'inverse';
type TextVariant = 'heading' | 'body' | 'label' | 'caption';
type TextAlign = 'left' | 'center' | 'right' | 'justify';

export interface TextProps extends React.ComponentPropsWithoutRef<any> {
  children?: ReactNode;
  as?: TextElement;
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColor;
  variant?: TextVariant;
  align?: TextAlign;
  truncate?: boolean;
}

/**
 * Text - Semantic text rendering with size/weight/color/variant scales
 */
export const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      children,
      as = 'p',
      size = 'md',
      weight = 'regular',
      color = 'primary',
      variant = 'body',
      align,
      truncate = false,
      className,
      ...rest
    },
    ref
  ) => {
    const Component = as as any;

    const alignClass = align === 'center' ? 'center' : align === 'right' ? 'right' : align || '';

    const styleMap = styles as Record<string, string>;
    const styleClasses = [
      styles.text,
      styleMap[size],
      styleMap[weight],
      styleMap[color],
      size,
      weight,
      color,
      variant,
      alignClass,
      truncate ? `${styles.truncate} truncate` : '',
      className || '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <Component ref={ref} className={styleClasses} {...rest}>
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';

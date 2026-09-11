import React, { forwardRef } from 'react';
import * as styles from './Skeleton.css';

export type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: SkeletonVariant;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  animation?: 'wave' | 'pulse' | 'none';
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      variant = 'text',
      width,
      height,
      borderRadius,
      animation = 'wave',
      style: customStyle,
      className,
      ...rest
    },
    ref
  ) => {
    const defaultHeight = variant === 'text' ? '1em' : variant === 'circular' ? width || 40 : 120;
    const defaultWidth = variant === 'circular' ? height || 40 : '100%';
    const computedRadius =
      borderRadius !== undefined
        ? borderRadius
        : variant === 'rounded'
        ? 8
        : variant === 'circular'
        ? '50%'
        : undefined;

    const baseVariantStyle = variant === 'rounded' ? styles.rectangular : styles[variant];

    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={`${styles.skeleton} ${baseVariantStyle} spectra-skeleton spectra-skeleton--${variant} ${className || ''}`}
        style={{
          width: width !== undefined ? width : defaultWidth,
          height: height !== undefined ? height : defaultHeight,
          borderRadius: computedRadius,
          ...customStyle,
        }}
        {...rest}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';

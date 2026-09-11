import React, { forwardRef, ReactNode } from 'react';
import * as styles from './Divider.css';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement | HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed' | 'dotted';
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  label?: ReactNode;
  labelPosition?: 'center' | 'left' | 'right';
  children?: ReactNode;
}

export const Divider = forwardRef<any, DividerProps>(
  (
    {
      orientation = 'horizontal',
      variant = 'solid',
      spacing = 'md',
      label,
      labelPosition = 'center',
      children,
      className,
      style: customStyle,
      ...rest
    },
    ref
  ) => {
    const textContent = label || children;

    const borderStyle = variant !== 'solid' ? { borderStyle: variant } : {};
    const marginMap = { none: 0, sm: '8px 0', md: '16px 0', lg: '24px 0' };
    const spacingStyle = orientation === 'horizontal' ? { margin: marginMap[spacing] } : { margin: '0 8px' };

    if (textContent && orientation === 'horizontal') {
      return (
        <div
          ref={ref}
          role="separator"
          aria-orientation="horizontal"
          className={`${styles.withText} spectra-divider spectra-divider--with-text ${className || ''}`}
          style={{ ...spacingStyle, ...customStyle }}
          {...rest}
        >
          <span className={`${styles.textLabel} spectra-divider__label`}>{textContent}</span>
        </div>
      );
    }

    return (
      <hr
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={`${styles.divider} ${styles[orientation]} spectra-divider spectra-divider--${orientation} spectra-divider--${variant} ${className || ''}`}
        style={{ ...borderStyle, ...spacingStyle, ...customStyle }}
        {...rest}
      />
    );
  }
);

Divider.displayName = 'Divider';

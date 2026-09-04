// packages/react/src/components/form/Switch.tsx
import { forwardRef } from 'react';
import { useControllableState, useId } from '@spectra/primitives';
import * as styles from './Switch.css';

export interface SwitchProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size' | 'onChange'> {
  label?: string;
  description?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

/**
 * Switch - Accessible toggle control component with native checkbox accessibility
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      label,
      description,
      checked: checkedProp,
      defaultChecked = false,
      onChange,
      required = false,
      size = 'md',
      disabled = false,
      id: idProp,
      className,
      ...rest
    },
    ref
  ) => {
    const generatedId = useId('switch');
    const id = idProp || generatedId;
    const labelId = `${id}-label`;
    const descriptionId = `${id}-desc`;

    const [checked, setChecked] = useControllableState<boolean>({
      value: checkedProp,
      defaultValue: defaultChecked,
      onChange,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      setChecked(e.target.checked);
    };

    const sizeControlStyle =
      size === 'sm' ? styles.smControl : size === 'lg' ? styles.lgControl : styles.mdControl;
    const sizeThumbStyle =
      size === 'sm' ? styles.smThumb : size === 'lg' ? styles.lgThumb : styles.mdThumb;
    const sizeThumbCheckedStyle =
      size === 'sm' ? styles.smThumbChecked : size === 'lg' ? styles.lgThumbChecked : styles.mdThumbChecked;

    return (
      <div className={`${styles.wrapper} ${className || ''}`}>
        <div
          className={`${styles.control} ${sizeControlStyle} ${checked ? styles.controlChecked : ''} ${
            disabled ? styles.controlDisabled : ''
          }`}
        >
          <input
            ref={ref}
            id={id}
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
            aria-describedby={description ? descriptionId : undefined}
            aria-required={required ? true : undefined}
            className={`${size} ${checked ? 'checked' : ''}`}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              margin: 0,
              opacity: 0,
              cursor: disabled ? 'not-allowed' : 'pointer',
              zIndex: 1,
            }}
            {...rest}
          />
          <span
            className={`${styles.thumb} ${sizeThumbStyle} ${checked ? sizeThumbCheckedStyle : ''}`}
          />
        </div>

        {(label || description) && (
          <div className={styles.content}>
            {label && (
              <label htmlFor={id} id={labelId} className={styles.label}>
                {label}
                {required && <span className={styles.required}>*</span>}
              </label>
            )}
            {description && (
              <span id={descriptionId} className={styles.description}>
                {description}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';

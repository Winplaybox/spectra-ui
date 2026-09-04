// packages/react/src/components/form/Switch.tsx
import { forwardRef } from 'react';
import { useControllableState, useId, useFormField } from '@spectra/primitives';
import * as styles from './Switch.css';

export interface SwitchProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> {
  label?: string;
  description?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Switch - Toggle control for on/off states
 * @example
 * <Switch label="Enable notifications" defaultChecked />
 * @example
 * const [enabled, setEnabled] = useState(false);
 * <Switch checked={enabled} onChange={setEnabled} />
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      label,
      description,
      checked,
      defaultChecked = false,
      onChange,
      required,
      size = 'md',
      disabled = false,
      id,
      ...rest
    },
    ref
  ) => {
    const switchId = useId(id || 'switch');
    const [isChecked, setIsChecked] = useControllableState({
      controlled: checked,
      defaultValue: defaultChecked,
      onChange,
    });

    const { descriptionId } = useFormField({ description, required });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.target.checked);
    };

    return (
      <div className={styles.wrapper}>
        <div className={styles.control}>
          <input
            ref={ref}
            id={switchId}
            type="checkbox"
            className={styles.input}
            checked={isChecked}
            onChange={handleChange}
            disabled={disabled}
            aria-describedby={description ? descriptionId : undefined}
            aria-required={required}
            {...rest}
          />
          <div className={`${styles.thumb} ${styles[size]}`} />
        </div>

        {(label || description) && (
          <div className={styles.content}>
            {label && (
              <label htmlFor={switchId} className={styles.label}>
                {label}
                {required && <span className={styles.required}>*</span>}
              </label>
            )}
            {description && (
              <div id={descriptionId} className={styles.description}>
                {description}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';

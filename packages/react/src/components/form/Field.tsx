// packages/react/src/components/form/Field.tsx
import React, { forwardRef, ReactNode } from 'react';
import { useId } from '@winplaybox/primitives';
import { Stack } from '../layout/Stack';
import { Text } from '../layout/Text';
import { Label } from './Label';
import { InfoLabel } from './InfoLabel';

export { Label } from './Label';
export type { LabelProps } from './Label';
export { InfoLabel } from './InfoLabel';
export type { InfoLabelProps } from './InfoLabel';

export interface FieldProps extends React.ComponentPropsWithoutRef<'div'> {
  label?: ReactNode;
  info?: ReactNode;
  hint?: ReactNode;
  validationMessage?: ReactNode;
  validationState?: 'error' | 'warning' | 'success';
  required?: boolean;
  children: ReactNode;
}

export const Field = forwardRef<HTMLDivElement, FieldProps>(
  (
    {
      label,
      info,
      hint,
      validationMessage,
      validationState,
      required = false,
      children,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const id = useId();

    const getValidationColor = () => {
      switch (validationState) {
        case 'error': return 'var(--color-feedback-error)';
        case 'warning': return 'var(--color-feedback-warning)';
        case 'success': return 'var(--color-feedback-success)';
        default: return 'var(--color-text-muted)';
      }
    };

    return (
      <Stack
        ref={ref as any}
        direction="column"
        gap="xs"
        style={{ width: '100%', ...style }}
        className={className}
        {...(rest as any)}
      >
        {label && (
          info ? (
            <InfoLabel
              htmlFor={id}
              required={required}
              info={info}
            >
              {label}
            </InfoLabel>
          ) : (
            <Label
              htmlFor={id}
              required={required}
            >
              {label}
            </Label>
          )
        )}

        {children}

        {validationMessage ? (
          <Text as="span" size="xs" style={{ color: getValidationColor() }}>
            {validationMessage}
          </Text>
        ) : hint ? (
          <Text as="span" size="xs" color="muted">
            {hint}
          </Text>
        ) : null}
      </Stack>
    );
  }
);

Field.displayName = 'Field';

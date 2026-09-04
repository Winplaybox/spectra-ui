import { useId } from './useId';

export interface UseFormFieldProps {
  id?: string;
  label?: string;
  error?: string | boolean;
  description?: string;
  required?: boolean;
  disabled?: boolean;
}

export function useFormField(props: UseFormFieldProps = {}) {
  const generatedId = useId('field');
  const id = props.id || generatedId;
  const labelId = `${id}-label`;
  const errorId = `${id}-error`;
  const descriptionId = `${id}-desc`;

  const hasError = !!props.error;
  const errorText = typeof props.error === 'string' ? props.error : undefined;

  const ariaDescribedBy = [
    props.description ? descriptionId : null,
    hasError && errorText ? errorId : null,
  ]
    .filter(Boolean)
    .join(' ');

  return {
    id,
    labelId,
    errorId,
    descriptionId,
    hasError,
    errorText,
    isRequired: !!props.required,
    isDisabled: !!props.disabled,
    labelProps: {
      id: labelId,
      htmlFor: id,
    },
    inputProps: {
      id,
      'aria-invalid': hasError ? true : undefined,
      'aria-required': props.required ? true : undefined,
      'aria-describedby': ariaDescribedBy || undefined,
      disabled: props.disabled,
    },
    errorProps: {
      id: errorId,
      role: 'alert',
      'aria-live': 'polite' as const,
    },
    descriptionProps: {
      id: descriptionId,
    },
  };
}

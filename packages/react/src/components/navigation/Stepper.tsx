// packages/react/src/components/navigation/Stepper.tsx
import React, { forwardRef, ReactNode } from 'react';
import { CheckIcon } from '@spectra/icons';

export interface StepItem {
  title: ReactNode;
  description?: ReactNode;
  optional?: boolean;
}

export interface StepperProps extends React.ComponentPropsWithoutRef<'div'> {
  steps: StepItem[];
  activeStep: number;
  orientation?: 'horizontal' | 'vertical';
}

/**
 * Stepper - Multi-step workflow navigation wizard.
 * Engineered for sequential workflows, onboarding wizards, and multi-stage form progress.
 */
export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      steps,
      activeStep,
      orientation = 'horizontal',
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const isHorizontal = orientation === 'horizontal';

    return (
      <div
        ref={ref}
        role="navigation"
        aria-label="Progress Stepper"
        className={className}
        style={{
          display: 'flex',
          flexDirection: isHorizontal ? 'row' : 'column',
          alignItems: isHorizontal ? 'center' : 'stretch',
          justifyContent: 'space-between',
          width: '100%',
          gap: isHorizontal ? 12 : 20,
          ...style,
        }}
        {...rest}
      >
        {steps.map((step, index) => {
          const isCompleted = index < activeStep;
          const isCurrent = index === activeStep;
          const isLast = index === steps.length - 1;

          return (
            <React.Fragment key={index}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  flexShrink: 0,
                }}
              >
                {/* Step indicator bubble */}
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    fontWeight: 700,
                    backgroundColor: isCompleted
                      ? 'var(--color-feedback-success, #22c55e)'
                      : isCurrent
                      ? 'var(--color-action-primary, #007FFF)'
                      : 'var(--color-surface-raised, #1e293b)',
                    color: isCompleted || isCurrent
                      ? 'var(--color-text-inverse, #ffffff)'
                      : 'var(--color-text-muted, #94a3b8)',
                    border: isCurrent
                      ? '2px solid var(--color-action-primary, #007FFF)'
                      : '1px solid var(--color-border-subtle, rgba(255,255,255,0.12))',
                    boxShadow: isCurrent ? '0 0 0 3px rgba(0, 127, 255, 0.2)' : 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {isCompleted ? <CheckIcon size={14} /> : index + 1}
                </div>

                {/* Step Label */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: isCurrent ? 700 : 500,
                      color: isCurrent
                        ? 'var(--color-text-primary, #f8fafc)'
                        : isCompleted
                        ? 'var(--color-text-primary, #f8fafc)'
                        : 'var(--color-text-muted, #64748b)',
                    }}
                  >
                    {step.title}
                  </span>
                  {step.description && (
                    <span style={{ fontSize: 11, color: 'var(--color-text-muted, #94a3b8)' }}>
                      {step.description}
                    </span>
                  )}
                </div>
              </div>

              {/* Connecting line */}
              {!isLast && isHorizontal && (
                <div
                  style={{
                    flex: 1,
                    height: 2,
                    backgroundColor: isCompleted
                      ? 'var(--color-feedback-success, #22c55e)'
                      : 'var(--color-border-subtle, rgba(255,255,255,0.12))',
                    transition: 'background-color 0.2s ease',
                  }}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  }
);

Stepper.displayName = 'Stepper';

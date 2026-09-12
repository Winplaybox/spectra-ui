# Stepper

Displays progress through a sequential multi-step wizard with active, completed, and error step nodes.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Stepper } from '@spectra/react';

export default function BasicStepperExample() {
  return (
    <Stepper>
      Stepper Example
    </Stepper>
  );
}
```

## Guidelines

Use steppers for multi-stage checkout flows, onboarding wizards, and account creation steps.

### Recommended (Dos)

- Show checkmark vectors on completed steps and numbers on upcoming steps.
- Allow users to click preceding completed steps to revise information.

### Avoid (Don'ts)

- Do not allow skipping required upcoming steps without validation.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Stepper Track` | Horizontal or vertical line connecting step nodes. |
| `Step Circle` | Indicator showing step number or check icon. |
| `Step Label` | Headline and subtitle for step. |

## Motion & Transitions

- **Duration**: `--motion-normal (250ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Connector line fills and checkmark vector animates on step advance.

## Keyboard Navigation & ARIA

Official pattern: [Progress & Wizard Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Tab` | Focuses through interactive completed step nodes. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `activeStep` | `number` | `0` | Zero-indexed active step. |
| `steps` | `Array<{ label: string; description?: string }>` | `[]` | Step definitions. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useControllableState`
Description: Tracks step progress and completion status.

```tsx
import { useControllableState } from '@spectra/primitives';

export function StepperPrimitive({ steps, defaultValue = 0 }) {
  const [activeStep, setActiveStep] = useControllableState({ defaultValue });
  return <div className="stepper">{/* step nodes */}</div>;
}
```

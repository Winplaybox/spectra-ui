# Switch

Switches toggle the state of a single setting on or off immediately without requiring a Save or Submit step.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Switch } from '@spectra/react';

export default function BasicSwitchExample() {
  return (
    <Switch>
      Switch Example
    </Switch>
  );
}
```

## Guidelines

Use switches for instant binary preference toggles (e.g. Dark Mode, Push Notifications, Auto-save).

### Recommended (Dos)

- Use for preferences that take effect immediately upon toggle.
- Ensure clear active vs inactive states with high contrast ratio.

### Avoid (Don'ts)

- Do not use inside a form where values are only saved after clicking "Submit" (use Checkbox instead).

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Track` | Background pill container indicating on/off state via color. |
| `Thumb` | 2D circle translating along the track upon toggle. |
| `Label` | Descriptive text describing the setting. |

## Motion & Transitions

- **Duration**: `--motion-subtle (150ms)`
- **Easing Curve**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Specification**: The switch thumb glides smoothly along the track.

## Keyboard Navigation & ARIA

Official pattern: [Switch pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Space / Enter` | Toggles between on and off states. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `label` | `string` | `undefined` | Label explaining the setting being toggled. |
| `checked` | `boolean` | `false` | Controlled boolean state. |
| `disabled` | `boolean` | `false` | Disables the toggle switch. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useControllableState`
Description: Manages instant binary boolean transitions with ARIA switch roles.

```tsx
import { useControllableState } from '@spectra/primitives';

export function CustomSwitch({ checked, onChange }) {
  const [isOn, setIsOn] = useControllableState({ value: checked, defaultValue: false, onChange });
  return <button role="switch" aria-checked={isOn} onClick={() => setIsOn(!isOn)}>Toggle</button>;
}
```

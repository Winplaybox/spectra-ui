# Color Picker

Interactive hue, saturation, and hex input panel for selecting design tokens and custom color values.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Color Picker } from '@spectra/react';

export default function BasicColorPickerExample() {
  return (
    <Color Picker>
      Color Picker Example
    </Color Picker>
  );
}
```

## Guidelines

Use color pickers in design tool settings, theme customizers, and avatar personalization interfaces.

### Recommended (Dos)

- Provide preset swatch palettes matching Spectra design token swatches.
- Allow direct hex, RGB, and HSL text input for precision entry.

### Avoid (Don'ts)

- Do not restrict users to arbitrary hex codes without contrast feedback.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Swatch Trigger` | Clickable button displaying currently active color. |
| `Saturation Area` | 2D gradient map for hue/saturation navigation. |
| `Hue Slider` | 1D spectrum track. |
| `Hex Input` | Text input for manual color code entry. |

## Motion & Transitions

- **Duration**: `--motion-fast (150ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Picker panel pops open with subtle spring easing.

## Keyboard Navigation & ARIA

Official pattern: [Color Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Arrow Keys` | Fine-tunes color coordinates across 2D spectrum map. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `string` | `'#2563EB'` | Active hex color string. |
| `onChange` | `(color: string) => void` | `undefined` | Color change callback. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useDisclosure`
Description: Opens and closes color picker popover.

```tsx
import { useDisclosure } from '@spectra/primitives';

export function ColorPickerDemo() {
  const { isOpen, onToggle } = useDisclosure();
  return <button onClick={onToggle}>Pick Color</button>;
}
```

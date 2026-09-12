# Platform Chassis

Interactive frame simulator reproducing native iOS, Android, Windows, and macOS window geometries.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { PlatformChassis } from '@spectra/react';

export default function BasicPlatformChassisExample() {
  return (
    <PlatformChassis>
      Platform Chassis Example
    </PlatformChassis>
  );
}
```

## Guidelines

Use Platform Chassis to preview and test components under pixel-exact native OS frames and window chrome.

### Recommended (Dos)

- Accurately replicate OS title bars, traffic lights, and home indicators.
- Allow live zooming and scaling of device viewport preview.

### Avoid (Don'ts)

- Do not force chassis simulator on mobile viewport viewports where screen space is tight.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Device Shell` | Outer frame matching device bezel curvature. |
| `Title Bar / Island` | macOS traffic lights, Windows controls, or Dynamic Island. |
| `Screen Canvas` | Component rendering viewport. |

## Motion & Transitions

- **Duration**: `--motion-normal (200ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Smooth frame transformation when toggling platforms.

## Keyboard Navigation & ARIA

Official pattern: [Chassis Simulator](https://www.w3.org/WAI/ARIA/apg/patterns/)

| Key | Action & Focus Behavior |
| :--- | :--- |


## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `platform` | `'web' \| 'ios' \| 'android' \| 'macos' \| 'windows'` | `'web'` | Target chassis platform. |
| `children` | `ReactNode` | `undefined` | Component to preview inside chassis. |

## Headless Primitive (`@spectra/primitives`)

Hook: `usePlatform`
Description: Extracts platform metadata and geometry dimensions.

```tsx
import { usePlatform } from '@spectra/primitives';

export function ChassisPrimitive({ children }) {
  const { platform } = usePlatform();
  return <div className={`chassis-${platform}`}>{children}</div>;
}
```

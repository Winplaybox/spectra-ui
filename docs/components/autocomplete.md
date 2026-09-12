# Autocomplete

Search-driven input with real-time suggestion list, fuzzy filtering, and keyboard navigation.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Autocomplete } from '@spectra/react';

export default function BasicAutocompleteExample() {
  return (
    <Autocomplete>
      Autocomplete Example
    </Autocomplete>
  );
}
```

## Guidelines

Use autocomplete for large datasets (e.g. countries, cities, repository branches) where users need immediate suggestions.

### Recommended (Dos)

- Debounce search query execution to prevent API spam.
- Support free-form text entry if custom values are permitted.

### Avoid (Don'ts)

- Do not display empty popups when no suggestions match query.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Search Field` | Text input with aria-autocomplete="list". |
| `Suggestions Dropdown` | Listbox containing suggestions matched against query. |

## Motion & Transitions

- **Duration**: `--motion-fast (120ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Dropdown animates in synchronously with query results.

## Keyboard Navigation & ARIA

Official pattern: [Combobox with Autocomplete Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `ArrowDown / ArrowUp` | Cycles through suggestions list. |
| `Enter` | Accepts highlighted suggestion. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `suggestions` | `string[]` | `[]` | Array of suggestion strings. |
| `onSearch` | `(query: string) => void` | `undefined` | Callback fired as user types. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useDebounce`
Description: Debounces query changes to prevent excessive API invocations.

```tsx
import { useDebounce } from '@spectra/primitives';

export function AutocompleteDemo() {
  const [val, setVal] = useState('');
  const debounced = useDebounce(val, 300);
  return <input value={val} onChange={e => setVal(e.target.value)} />;
}
```

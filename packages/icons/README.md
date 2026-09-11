# @spectra/icons 🎨⚡

> Over **12,200+** accessible, tree-shakeable, multi-shade vector icons built specifically for the **Spectra UI** design system.

- **100% Spectra-Branded**: Clean PascalCase naming with zero external vendor prefixes.
- **7 Visual Styles**: `Core (DesignCode UI)`, `Social & Brands`, `Filled`, `Outlined`, `Rounded`, `Sharp`, and `Two-Tone`.
- **Strict Rule #0 & Theme Compliant**: Zero hardcoded hex colors. Icons automatically inherit active Light and Dark themes via `currentColor`.
- **Superpower Performance**: Subpath exports for instant bundling and `<DynamicIcon />` for on-demand lazy loading with zero upfront bundle weight.

---

## Installation

```bash
pnpm add @spectra/icons
# or
npm install @spectra/icons
# or
yarn add @spectra/icons
```

---

## 1. Quickstart & Basic Usage

Import any icon directly by its component name:

```tsx
import React from 'react';
import { CheckIcon, FilledHomeIcon, OutlinedSearchIcon } from '@spectra/icons';

export const MyComponent = () => {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <CheckIcon size={16} />
      <FilledHomeIcon size={24} color="var(--color-action-primary)" />
      <OutlinedSearchIcon size={20} />
    </div>
  );
};
```

---

## 2. Multi-Shade Variants

Every core concept is available across 5 official design shades, plus suffix aliases:

| Style Variant | Primary Export | Suffix Alias |
|---|---|---|
| **Filled** | `<FilledHomeIcon />` | `<HomeFilledIcon />` |
| **Outlined** | `<OutlinedHomeIcon />` | `<HomeOutlinedIcon />` |
| **Rounded** | `<RoundedHomeIcon />` | `<HomeRoundedIcon />` |
| **Sharp** | `<SharpHomeIcon />` | `<HomeSharpIcon />` |
| **Two-Tone** | `<TwoToneHomeIcon />` | `<HomeTwoToneIcon />` |

---

## 3. Subpath Imports (Superpower for Build Speed)

For large applications and blazing-fast local builds, you can import directly from style subpaths to minimize module evaluation:

```tsx
// Only parses the filled suite
import { FilledFavoriteIcon, FilledAccountCircleIcon } from '@spectra/icons/filled';

// Only parses the outlined suite
import { OutlinedSettingsIcon, OutlinedSearchIcon } from '@spectra/icons/outlined';

// Only parses the social suite
import { GithubIcon, AppleIcon, GoogleIcon } from '@spectra/icons/social';

// Only parses the core DesignCode suite
import { ActionDislikeIcon } from '@spectra/icons/core';
```

Available subpaths:
- `@spectra/icons` (curated base icons, types, DynamicIcon)
- `@spectra/icons/core` (1,258 DesignCode UI icons)
- `@spectra/icons/social` (40 brand & monochrome social icons)
- `@spectra/icons/filled` (2,191 filled icons)
- `@spectra/icons/outlined` (2,191 outlined icons)
- `@spectra/icons/rounded` (2,191 rounded icons)
- `@spectra/icons/sharp` (2,191 sharp icons)
- `@spectra/icons/twotone` (2,191 two-tone icons)
- `@spectra/icons/manifest` (complete searchable JSON catalog)

---

## 4. Dynamic & Lazy Loading (`<DynamicIcon />`)

When building dashboards, CMS platforms, or navigation menus where icon names are determined at runtime, use `<DynamicIcon />`.

Instead of bundling 12,000 icons upfront, `<DynamicIcon />` loads only the specific ~15KB category chunk needed on-demand, caching it in memory for 0ms future renders:

```tsx
import React from 'react';
import { DynamicIcon } from '@spectra/icons';

export const DynamicMenu: React.FC<{ iconName: string; label: string }> = ({
  iconName,
  label,
}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <DynamicIcon
        name={iconName} // e.g. "FilledHomeIcon", "OutlinedSettingsIcon", "GithubIcon"
        size={20}
        fallback={<span className="icon-skeleton" style={{ width: 20, height: 20 }} />}
      />
      <span>{label}</span>
    </div>
  );
};
```

---

## 5. Real-World Component Recipes

### A. Buttons with Icons

```tsx
import { Button } from '@spectra/react';
import { FilledCheckIcon, OutlinedDeleteIcon, OutlinedArrowForwardIcon } from '@spectra/icons';

// Leading icon
<Button leftIcon={<FilledCheckIcon size={16} />}>Save Changes</Button>

// Trailing icon
<Button variant="outline" rightIcon={<OutlinedArrowForwardIcon size={16} />}>
  Continue
</Button>

// Destructive button with icon
<Button variant="destructive" leftIcon={<OutlinedDeleteIcon size={16} />}>
  Delete Account
</Button>
```

### B. Search Input with Leading & Clear Icons

```tsx
import { TextInput } from '@spectra/react';
import { SearchIcon, CloseIcon } from '@spectra/icons';

<TextInput
  leadingIcon={<SearchIcon size={16} />}
  trailingIcon={<CloseIcon size={14} style={{ cursor: 'pointer' }} />}
  placeholder="Search 12,200+ icons..."
/>
```

### C. Status Badges

```tsx
import { Badge } from '@spectra/react';
import { FilledCheckCircleIcon, FilledWarningAmberIcon, FilledErrorIcon } from '@spectra/icons';

<Badge variant="success">
  <FilledCheckCircleIcon size={14} /> Active
</Badge>

<Badge variant="warning">
  <FilledWarningAmberIcon size={14} /> Attention Needed
</Badge>

<Badge variant="error">
  <FilledErrorIcon size={14} /> Deployment Failed
</Badge>
```

### D. Compound Lists with `ListItemIcon`

```tsx
import { List, ListItem, ListItemIcon, ListItemText } from '@spectra/react';
import { OutlinedFolderIcon, OutlinedInsertDriveFileIcon } from '@spectra/icons';

<List>
  <ListItem>
    <ListItemIcon>
      <OutlinedFolderIcon size={20} color="var(--color-action-primary)" />
    </ListItemIcon>
    <ListItemText primary="Documents" secondary="24 items" />
  </ListItem>
  <ListItem>
    <ListItemIcon>
      <OutlinedInsertDriveFileIcon size={20} />
    </ListItemIcon>
    <ListItemText primary="Project-Spec.pdf" secondary="2.4 MB" />
  </ListItem>
</List>
```

### E. Social Authentication Buttons

```tsx
import { Button } from '@spectra/react';
import { GithubIcon, GoogleIcon, AppleIcon } from '@spectra/icons/social';

<Button variant="outline" leftIcon={<GithubIcon size={18} />}>
  Continue with GitHub
</Button>

<Button variant="outline" leftIcon={<GoogleIcon size={18} />}>
  Continue with Google
</Button>

<Button variant="outline" leftIcon={<AppleIcon size={18} />}>
  Continue with Apple
</Button>
```

### F. Two-Tone Customization

Two-tone icons have layered secondary geometry configured with `fillOpacity` (defaults to `0.3`):

```tsx
import { TwoToneFavoriteIcon, TwoToneBookmarkIcon } from '@spectra/icons/twotone';

// Light mode or dark mode primary tint with 25% secondary opacity
<TwoToneFavoriteIcon
  size={32}
  color="var(--color-feedback-error)"
  fillOpacity={0.25}
/>

<TwoToneBookmarkIcon
  size={32}
  color="var(--color-action-primary)"
  fillOpacity={0.4}
/>
```

---

## 6. Props & Types

All icons accept the standard `IconProps` interface:

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `number \| string` | `24` (curated: `16`) | Width and height in pixels |
| `color` | `string` | `'currentColor'` | Stroke and fill color |
| `strokeWidth` | `number \| string` | `1.5` | Stroke width (for line-based SVGs) |
| `fillOpacity` | `number` | `0.3` | Opacity for secondary layer (Two-Tone icons) |
| `className` | `string` | `undefined` | Custom CSS class name |
| `aria-hidden` | `boolean` | `true` | Hides decorative icon from screen readers |
| `title` | `string` | `undefined` | Accessible tooltip title when icon is standalone |

---

## License

MIT © Spectra UI Team

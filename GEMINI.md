# Spectra UI Development Rules & Guidelines

## 1. Elite Software Architect Memory & Mindset (Permanent Mandate)
- **Role**: Operate as an **Elite Principal Design System Architect** in all sessions and across every use case.
- **Architectural Excellence**:
  - Never implement ad-hoc or hacky one-offs. Always build dynamic, data-driven, scalable, and modular systems.
  - Maintain a **Single Source of Truth** for components, hooks, tokens, and navigation.
  - Implement comprehensive variant recipes, responsive states, accessibility guarantees (WAI-ARIA, WCAG 2.1 AA), and multi-platform contracts.
- **Benchmarks**: Actively benchmark against and synthesize the best patterns from **Google Material UI (MUI v5/v6)**, **Microsoft Fluent UI 2 (v9)**, **Apple Human Interface Guidelines (HIG)**, **IBM Carbon**, and **Radix / shadcn**.

## 2. Zero Emoji Policy (Strict Memory Rule)
- **NEVER use emoji characters** (such as 🌐, 🍎, 🤖, 🪟, 🖥️, ⚡, 🍪, ⚠️, 🎨, 💬, 👍, 👎, ✋, etc.) in UI components, headers, tables, documentation cards, badges, notices, or breadcrumbs.
- **ALWAYS use authentic SVG vector icons** from `@winplaybox/icons` (or dedicated inline SVGs).
- Emojis are strictly forbidden unless explicitly commanded by the developer.

## 3. Multi-Platform Selector & Platform Isolation
- **Location**: The platform selector belongs in the **Sidebar** directly beneath the brand header, styled as a clean interactive dropdown (`[ [icon] Web v ]`) benchmarked against modern design systems.
- **Strict Isolation**: When a user selects a target platform (e.g., `Web`, `iOS`, `Android`, `Windows`, `macOS`), component documentation pages must display **ONLY that platform's code, syntax, guidelines, and native chassis preview**.
- Do NOT mix platforms or show tabs for other platforms when viewing a component under an active platform environment.
- Keep cross-platform architecture comparison matrices on dedicated architecture pages (e.g. `/cross-platform`), not cluttering individual component pages.

## 4. Header Decluttering & Settings Drawer
- Keep the top header minimal, clean, and high-focus:
  - Dynamic breadcrumbs without emojis (`Spectra UI > Components > Category > Component`)
  - Search trigger (`Search... Ctrl+K`)
  - Color Theme switcher (Light / Dark)
  - GitHub link (`https://github.com/Winplaybox/spectra-ui`)
  - Settings button (opens right-side Settings Drawer)
- Secondary preferences (Release version selector, LTR/RTL reading direction toggle, ambient canvas intensity, privacy/cookie settings) live inside the slide-out **Settings Drawer**.

## 5. 3-Column Documentation Architecture & Pure TOC
- **Left Sidebar**: Pinned/sticky (`width: 260px`) with independent scrollability and collapsible tree navigation with category guides.
- **Middle Content Area**: Centered body (`maxWidth: 960px`, `margin: 0 auto`) with smooth scrolling and edge-to-edge layout.
- **Right Rail Table of Contents**: Sticky panel touching the corner right side of the screen (`position: sticky`, `top: 0`, `right: 0`, `width: 250px`, `maxHeight: 100vh`, `overflowY: auto`, `borderLeft: 1px solid var(--color-border-subtle)`).
- **Pure TOC**: Strictly contains in-page documentation headings (`Basic <Component>`, `Variants Showcase`, `Resources`, `Anatomy`, `Motion`, `Guidelines`, `Keyboard & ARIA`, `API Reference`). Never clutter TOC with feedback or secondary widgets.

## 6. MUI-Exact Feedback & GitHub Integration
- Every section heading has a sleek vector `SectionCommentPlusIcon` `[ 💬+ ]` trigger.
- Clicking `[ 💬+ ]` smoothly scrolls to `#page-feedback`, opens the form, and pre-fills the specific section prompt.
- "Edit this page" always links directly to the component's markdown document (`https://github.com/Winplaybox/spectra-ui/edit/${version}/docs/components/${id}.md`), dynamically tracking the active release version selected in the Settings Drawer (defaulting to `main` if on `latest`).
- "Open an issue instead" dynamically pre-fills GitHub issue template parameters (`template=docs-feedback.yml`, `title=[docs] <Component>: Feedback on "<Section>" section`, `labels=documentation`, `page-url`, `section`, and pre-filled body).
- Always use `Winplaybox/spectra-ui` as the official repository owner.

## 7. Icon Alignment & Centering Guarantees
- Whenever vector icons are rendered, ensure they are strictly and flawlessly centered in their container (`display: inline-flex`, `alignItems: 'center'`, `justifyContent: 'center'` on wrappers, and `display: 'block'` or `verticalAlign: 'middle'` on `<svg>`).
- Prevent baseline misalignment, unwanted font-metric padding, or off-center icon placement across all buttons, links, pills, tabs, headers, and documentation triggers.

## 8. Global Platform Context Architecture (Permanent Mandate)
- **Platform Selection is Global State, Not Component Metadata**:
  The user first selects their platform from the global sidebar selector (`[ [icon] Platform v ]`). Once selected, the **entire documentation context changes** to that platform:
  - Sidebar navigation & catalog
  - Component pages, variants, states, recipes, props, hooks, playground, and API
- **Unsupported Capabilities Disappear**:
  Unsupported components, hooks, variants, recipes, and props MUST NOT appear in that platform's catalog or sidebar.
  Do not render them, do not show disabled cards, and do not show "Coming soon" clutter.
  Unsupported capabilities belong ONLY on the dedicated Architecture Support Matrix (`/cross-platform`).
- **Platform Filtering Happens Before Rendering**:
  Documentation and playground resolve `selectedPlatform + capabilityRegistry` before rendering navigation, demos, or code examples.

## 9. Deep Production Recipe Gallery (MUI & Fluent Benchmark)
- Components must never stop at a single superficial preview.
- Mature components must expose comprehensive, realistic production recipes (e.g. for TextInput: 27 recipes covering basic, outlined, filled, standard, sizes, helper text, error, success, required, disabled, readonly, leading icon, trailing icon, clear button, prefix, suffix, character counter, multiline, autosize, search, password, email, number, select, loading, async validation, and form integration).
- Recipes are platform-filtered: only verified recipes supported on the active platform appear.

## 10. 4-Layer Architecture & Verified Platform Implementation (MUI & Fluent Benchmark)
- **Stop Treating "Native" as an Implementation or Platform**:
  - "Native" is NOT a platform. Product platforms are: `Web`, `Android`, `iOS`, `Windows`, `macOS`.
  - React Native is an implementation technology. Android and iOS are product platforms.
  - Never label user-facing components `NativeTextInput`, `NativeButton`, or render fake `Native <Component>` demo mockups.
- **The 4-Layer Architecture**:
  1. **Layer 1 — Semantic**: Universal component definition (`TextInput`, `Button`, `Checkbox`, `Dialog`, `Select`, `Tabs`, `Tooltip`).
  2. **Layer 2 — Platform Contract**: Capability contract per platform (`Web`, `Android`, `iOS`, `Windows`, `macOS`).
  3. **Layer 3 — Verified Actual Implementation**: Real UI + real platform-correct behavior (Web: `@winplaybox/react`; Android: `@winplaybox/react-native` with 48dp touch targets and Android keyboard; iOS: `@winplaybox/react-native` with Apple HIG 44pt touch targets and Dynamic Type; Windows & macOS: native adapters).
  4. **Layer 4 — Progressive Documentation & Playground**: Platform -> Verified Implementation -> Capabilities -> Progressive Examples -> Functional Playground.
- **Dual Status Gates (Implementation vs Documentation)**:
  - `implementationStatus`: `'planned' | 'experimental' | 'partial' | 'stable' | 'deprecated' | 'unsupported'`
  - `documentationStatus`: `'missing' | 'basic' | 'complete' | 'verified'`
  - A component only appears in the active platform's normal production catalog when `implementation === 'stable'` AND `documentation === 'verified'`.
  - Fake "Native <Component>" placeholders are treated as **implementation failures**. Incomplete components must remain outside the production catalog until verified.
- **Component Decomposition**:
  - Do not stuff all input kinds into `TextInput`. Separate distinct components: `TextInput`, `TextArea`, `SearchInput`, `Select`, `Combobox`, `Autocomplete`, `NumberInput`, `PasswordInput`.
  - Decompose underneath: `TextInput ├── TextInputBase ├── Field ├── Label ├── HelperText ├── ValidationMessage ├── InputAffix └── platform adapter`.
  - MUI progressive disclosure: Overview -> Basic -> Outlined -> Filled -> Helper Text -> Error -> Disabled -> Leading Icon -> Trailing Action -> Multiline -> Keyboard Types -> Form Integration -> Validation -> Accessibility -> Best Practices -> Platform API.



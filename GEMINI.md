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
- **ALWAYS use authentic SVG vector icons** from `@spectra/icons` (or dedicated inline SVGs).
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
- "Edit this page" always links directly to the component's markdown document (`https://github.com/Winplaybox/spectra-ui/edit/main/docs/components/${id}.md`).
- "Open an issue instead" dynamically pre-fills GitHub issue template parameters (`template=docs-feedback.yml`, `title=[docs] <Component>: Feedback on "<Section>" section`, `labels=documentation`, `page-url`, `section`, and pre-filled body).
- Always use `Winplaybox/spectra-ui` as the official repository owner.

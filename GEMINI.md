# Spectra UI Development Rules & Guidelines

## 1. Zero Emoji Policy (Strict Memory Rule)
- **NEVER use emoji characters** (such as 🌐, 🍎, 🤖, 🪟, 🖥️, ⚡, 🍪, ⚠️, 🎨, etc.) in UI components, headers, tables, documentation cards, badges, or breadcrumbs.
- **ALWAYS use authentic SVG vector icons** from `@spectra/icons` (or custom inline SVGs if a dedicated icon is needed).
- Emojis are strictly forbidden unless explicitly commanded by the developer.

## 2. Multi-Platform Selector & Platform Isolation
- **Location**: The platform selector belongs in the **Sidebar** directly beneath the brand header, styled as a clean interactive dropdown (`[ [icon] Web v ]`) benchmarked against modern design systems.
- **Strict Isolation**: When a user selects a target platform (e.g., `Web`, `iOS`, `Android`, `Windows`, `macOS`), component documentation pages must display **ONLY that platform's code, syntax, guidelines, and native chassis preview**.
- Do NOT mix platforms or show tabs for other platforms when viewing a component under an active platform environment.
- Keep cross-platform architecture comparison matrices on dedicated architecture pages (e.g. `/cross-platform`), not cluttering individual component pages.

## 3. Header Decluttering & Settings Drawer
- Keep the top header minimal, clean, and high-focus:
  - Dynamic breadcrumbs without emojis (`Spectra UI > Components > Category > Component`)
  - Search trigger (`Search... Ctrl+K`)
  - Color Theme switcher (Light / Dark)
  - GitHub link
  - Settings button (opens right-side Settings Drawer)
- Secondary preferences (Release version selector, LTR/RTL reading direction toggle, ambient canvas intensity, privacy/cookie settings) live inside the slide-out **Settings Drawer**.

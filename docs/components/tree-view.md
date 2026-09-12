# Tree View

Hierarchical collapsible folder and item list with arrow key navigation (APG Tree View pattern).

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { TreeView } from '@spectra/react';

export default function BasicTreeViewExample() {
  return (
    <TreeView>
      Tree View Example
    </TreeView>
  );
}
```

## Guidelines

Use tree views for file system explorers, nested taxonomy categories, and organizational hierarchies.

### Recommended (Dos)

- Support Right Arrow to expand folder and Left Arrow to collapse folder.
- Assign aria-expanded to parent nodes and role="treeitem" to all nodes.

### Avoid (Don'ts)

- Do not require mouse clicks to explore nested tree hierarchies.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Tree Container` | Root with role="tree". |
| `Folder Node` | Parent item with chevron toggle and role="treeitem". |
| `Leaf Item` | Terminal item with role="treeitem". |

## Motion & Transitions

- **Duration**: `--motion-fast (150ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Folder chevron rotates and sub-tree animates open.

## Keyboard Navigation & ARIA

Official pattern: [Tree View Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `ArrowDown / ArrowUp` | Navigates to next / previous visible node. |
| `ArrowRight` | Expands collapsed folder node. |
| `ArrowLeft` | Collapses expanded folder node or moves to parent. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `data` | `TreeNode[]` | `[]` | Hierarchical tree data structure. |
| `multiSelect` | `boolean` | `false` | Allows multiple item selection. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useDisclosure`
Description: Manages expanded/collapsed state for nested sub-trees.

```tsx
import { useDisclosure } from '@spectra/primitives';

export function TreeNode({ label, children }) {
  const { isOpen, onToggle } = useDisclosure();
  return <li role="treeitem" aria-expanded={isOpen}><button onClick={onToggle}>{label}</button></li>;
}
```

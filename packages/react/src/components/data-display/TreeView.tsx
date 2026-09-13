// packages/react/src/components/data-display/TreeView.tsx
import React, { useState, forwardRef, ReactNode } from 'react';
import { ChevronDownIcon } from '@spectra/icons';

export interface TreeItemData {
  id: string;
  label: string;
  icon?: ReactNode;
  children?: TreeItemData[];
}

export interface TreeViewProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onSelect'> {
  items: TreeItemData[];
  selectedId?: string;
  onSelect?: (item: TreeItemData) => void;
  defaultExpandedIds?: string[];
}

/**
 * TreeView - Hierarchical navigation and file explorer tree.
 * Engineered for nested folder structures, hierarchical categorization, and keyboard navigation.
 */
export const TreeView = forwardRef<HTMLDivElement, TreeViewProps>(
  (
    {
      items,
      selectedId,
      onSelect,
      defaultExpandedIds = [],
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
      const init: Record<string, boolean> = {};
      defaultExpandedIds.forEach((id) => (init[id] = true));
      return init;
    });

    const toggleExpand = (id: string, e: React.MouseEvent) => {
      e.stopPropagation();
      setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const renderNode = (node: TreeItemData, depth: number = 0) => {
      const hasChildren = node.children && node.children.length > 0;
      const isExpanded = expanded[node.id] ?? false;
      const isSelected = selectedId === node.id;

      return (
        <div key={node.id} style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            role="treeitem"
            aria-expanded={hasChildren ? isExpanded : undefined}
            aria-selected={isSelected}
            onClick={() => {
              if (hasChildren) toggleExpand(node.id, {} as any);
              onSelect?.(node);
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 10px',
              paddingLeft: depth * 18 + 10,
              borderRadius: 6,
              cursor: 'pointer',
              fontSize: 13,
              backgroundColor: isSelected
                ? 'var(--color-action-primary)'
                : 'transparent',
              color: isSelected
                ? 'var(--color-text-on-action, #ffffff)'
                : 'var(--color-text-primary)',
              userSelect: 'none',
              transition: 'background-color 0.12s ease',
            }}
            onMouseEnter={(e) => {
              if (!isSelected) {
                e.currentTarget.style.backgroundColor = 'var(--color-surface-raised)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isSelected) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            {hasChildren ? (
              <span
                onClick={(e) => toggleExpand(node.id, e)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  color: isSelected ? 'inherit' : 'var(--color-text-muted)',
                  transform: isExpanded ? 'none' : 'rotate(-90deg)',
                  transition: 'transform 0.15s ease',
                  flexShrink: 0,
                }}
              >
                <ChevronDownIcon size={14} />
              </span>
            ) : (
              <span style={{ width: 14, flexShrink: 0 }} />
            )}

            {node.icon && <span style={{ display: 'inline-flex', flexShrink: 0 }}>{node.icon}</span>}
            <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {node.label}
            </span>
          </div>

          {hasChildren && isExpanded && (
            <div
              role="group"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderLeft: '1px solid var(--color-border-default)',
                marginLeft: depth * 18 + 16,
              }}
            >
              {node.children!.map((child) => renderNode(child, depth + 1))}
            </div>
          )}
        </div>
      );
    };

    return (
      <div
        ref={ref}
        role="tree"
        className={className}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: '100%',
          ...style,
        }}
        {...rest}
      >
        {items.map((node) => renderNode(node, 0))}
      </div>
    );
  }
);

TreeView.displayName = 'TreeView';

// packages/react/src/components/navigation/Overflow.tsx
import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { Menu, MenuItem } from './Menu';
import { MenuButton } from '../actions/MenuButton';
import { Button } from '../actions/Button';

export interface OverflowContextValue {
  registerItem: (id: string, width: number, priority?: number) => void;
  unregisterItem: (id: string) => void;
  isItemVisible: (id: string) => boolean;
  overflowCount: number;
  overflowItemIds: string[];
  isOverflowing: boolean;
  containerWidth: number;
}

const OverflowContext = createContext<OverflowContextValue | null>(null);

export function useOverflow(): OverflowContextValue {
  const ctx = useContext(OverflowContext);
  if (!ctx) {
    throw new Error('useOverflow must be used within an <Overflow> provider');
  }
  return ctx;
}

export function useOverflowMenu(): {
  isOverflowing: boolean;
  overflowCount: number;
  overflowItemIds: string[];
} {
  const ctx = useContext(OverflowContext);
  if (!ctx) {
    return { isOverflowing: false, overflowCount: 0, overflowItemIds: [] };
  }
  return {
    isOverflowing: ctx.isOverflowing,
    overflowCount: ctx.overflowCount,
    overflowItemIds: ctx.overflowItemIds,
  };
}

export interface OverflowProps extends React.HTMLAttributes<HTMLDivElement> {
  minimumVisible?: number;
  padding?: number;
  children: React.ReactNode;
}

/**
 * Overflow - Responsive container that automatically detects when items exceed
 * available width and transitions overflowing items into an overflow menu.
 */
export const Overflow = forwardRef<HTMLDivElement, OverflowProps>(
  ({ minimumVisible = 0, padding = 8, children, className, style, ...rest }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

    const [containerWidth, setContainerWidth] = useState<number>(0);
    const itemRegistry = useRef<Map<string, { width: number; priority: number; order: number }>>(new Map());
    const orderCounter = useRef<number>(0);

    const [visibleSet, setVisibleSet] = useState<Set<string>>(new Set());
    const [overflowItemIds, setOverflowItemIds] = useState<string[]>([]);

    const recompute = useCallback(() => {
      const container = containerRef.current;
      if (!container) return;

      const available = container.clientWidth;
      setContainerWidth(available);

      const items = Array.from(itemRegistry.current.entries()).map(([id, info]) => ({
        id,
        ...info,
      }));

      // Sort by order originally mounted
      items.sort((a, b) => a.order - b.order);

      const OVERFLOW_TRIGGER_ESTIMATE = 90; // Approximate width needed for '+N items ⌵'
      let currentWidth = 0;
      const visible = new Set<string>();
      const overflow: string[] = [];

      // First check if all items fit without overflow trigger
      const totalWidth = items.reduce((sum, item) => sum + item.width + padding, 0);

      if (totalWidth <= available) {
        items.forEach((item) => visible.add(item.id));
        setVisibleSet(visible);
        setOverflowItemIds([]);
        return;
      }

      // Items exceed available width: account for overflow button space
      const budget = Math.max(0, available - OVERFLOW_TRIGGER_ESTIMATE);

      // Higher priority stays visible longer. Stable sort with order as secondary tie breaker
      const prioritized = [...items].sort((a, b) => {
        if (b.priority !== a.priority) return b.priority - a.priority;
        return a.order - b.order;
      });

      for (let i = 0; i < prioritized.length; i++) {
        const item = prioritized[i];
        const nextWidth = currentWidth + item.width + padding;

        if (visible.size < minimumVisible || nextWidth <= budget) {
          visible.add(item.id);
          currentWidth = nextWidth;
        } else {
          overflow.push(item.id);
        }
      }

      // Keep overflow item list ordered by original layout order
      const sortedOverflow = items.filter((i) => overflow.includes(i.id)).map((i) => i.id);

      setVisibleSet(visible);
      setOverflowItemIds(sortedOverflow);
    }, [minimumVisible, padding]);

    const registerItem = useCallback(
      (id: string, width: number, priority = 0) => {
        if (!itemRegistry.current.has(id)) {
          orderCounter.current += 1;
        }
        itemRegistry.current.set(id, {
          width,
          priority,
          order: itemRegistry.current.get(id)?.order ?? orderCounter.current,
        });
        recompute();
      },
      [recompute]
    );

    const unregisterItem = useCallback(
      (id: string) => {
        itemRegistry.current.delete(id);
        recompute();
      },
      [recompute]
    );

    const isItemVisible = useCallback(
      (id: string) => {
        if (visibleSet.size === 0 && overflowItemIds.length === 0) return true;
        return visibleSet.has(id);
      },
      [visibleSet, overflowItemIds]
    );

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const observer = new ResizeObserver(() => {
        recompute();
      });

      observer.observe(container);
      recompute();

      return () => {
        observer.disconnect();
      };
    }, [recompute]);

    const isOverflowing = overflowItemIds.length > 0;
    const overflowCount = overflowItemIds.length;

    const contextValue: OverflowContextValue = {
      registerItem,
      unregisterItem,
      isItemVisible,
      overflowCount,
      overflowItemIds,
      isOverflowing,
      containerWidth,
    };

    return (
      <OverflowContext.Provider value={contextValue}>
        <div
          ref={containerRef}
          className={className}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: padding,
            minWidth: 0,
            overflow: 'hidden',
            ...style,
          }}
          {...rest}
        >
          {children}
        </div>
      </OverflowContext.Provider>
    );
  }
);

Overflow.displayName = 'Overflow';

export interface OverflowItemProps {
  id: string;
  priority?: number;
  children: React.ReactElement;
}

/**
 * OverflowItem - Wraps individual items inside an Overflow container.
 */
export const OverflowItem: React.FC<OverflowItemProps> = ({ id, priority = 0, children }) => {
  const { registerItem, unregisterItem, isItemVisible } = useOverflow();
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = itemRef.current;
    if (el) {
      const width = el.offsetWidth || el.getBoundingClientRect().width || 60;
      registerItem(id, width, priority);
    }
    return () => {
      unregisterItem(id);
    };
  }, [id, priority, registerItem, unregisterItem]);

  const visible = isItemVisible(id);

  return (
    <div
      ref={itemRef}
      data-overflow-item={id}
      style={{
        display: visible ? 'inline-flex' : 'none',
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
};

export interface OverflowMenuProps {
  itemLabels?: Record<string, string>;
  onSelect?: (id: string) => void;
  renderTrigger?: (count: number) => React.ReactNode;
}

/**
 * OverflowMenu - Fluent UI-style trigger button displaying `+N items ⌵` and
 * a menu displaying collapsed items.
 */
export const OverflowMenu: React.FC<OverflowMenuProps> = ({
  itemLabels = {},
  onSelect,
  renderTrigger,
}) => {
  const { isOverflowing, overflowCount, overflowItemIds } = useOverflowMenu();

  if (!isOverflowing || overflowCount === 0) {
    return null;
  }

  const label = overflowCount === 1 ? '+1 item' : `+${overflowCount} items`;

  return (
    <Menu>
      <MenuButton size="sm" variant="secondary" style={{ flexShrink: 0 }}>
        {renderTrigger ? renderTrigger(overflowCount) : label}
      </MenuButton>
      {overflowItemIds.map((id) => (
        <MenuItem
          key={id}
          onClick={() => onSelect?.(id)}
        >
          {itemLabels[id] || id}
        </MenuItem>
      ))}
    </Menu>
  );
};

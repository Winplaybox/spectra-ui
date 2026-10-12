// packages/react/src/components/data-display/Accordion.tsx
import React, { createContext, useContext, forwardRef, useRef, useId as useReactId } from 'react';
import { useControllableState } from '@winplaybox/primitives';
import { ChevronRightIcon, ChevronDownIcon } from '@winplaybox/icons';
import * as styles from './Accordion.css';

export type AccordionSize = 'small' | 'medium' | 'large' | 'extra-large';
export type AccordionExpandIconPosition = 'start' | 'end';

export type AccordionToggleEvent =
  | React.MouseEvent<HTMLButtonElement>
  | React.KeyboardEvent<HTMLButtonElement>;

export interface AccordionToggleData {
  value: string;
  openItems: string[];
}

export type AccordionToggleEventHandler = (
  event: AccordionToggleEvent,
  data: AccordionToggleData
) => void;

interface AccordionContextValue {
  expandedValues: string[];
  toggleItem: (val: string, event: AccordionToggleEvent) => void;
  baseId: string;
  size: AccordionSize;
  expandIconPosition: AccordionExpandIconPosition;
  registerHeader: (val: string, element: HTMLButtonElement | null) => void;
  onHeaderKeyDown: (val: string, event: React.KeyboardEvent<HTMLButtonElement>) => void;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

export interface AccordionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Whether multiple panels can be expanded simultaneously. Default is false. */
  multiple?: boolean;
  /** Whether an expanded panel can be collapsed by clicking. Default is true. */
  collapsible?: boolean;
  /** Sizing scale for padding, chevron, and typography across all items. Default is 'medium'. */
  size?: AccordionSize;
  /** Position of the expand/collapse chevron: 'start' or 'end'. Default is 'start'. */
  expandIconPosition?: AccordionExpandIconPosition;
  /** Controlled array of expanded item values. */
  openItems?: string[];
  /** Initial uncontrolled array of expanded item values. */
  defaultOpenItems?: string[];
  /** Callback triggered when any item expands or collapses. */
  onToggle?: AccordionToggleEventHandler;
  /** Backward compatibility alias for openItems. */
  value?: string | string[];
  /** Backward compatibility alias for defaultOpenItems. */
  defaultValue?: string | string[];
  /** Backward compatibility alias for onToggle. */
  onChange?: (value: string | string[]) => void;
  /** Keyboard navigation mode across accordion headers (ArrowUp/Down, Home, End). Default is 'linear'. */
  navigation?: 'linear' | 'cycle' | 'none';
  children: React.ReactNode;
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      multiple = false,
      collapsible = true,
      size = 'medium',
      expandIconPosition = 'start',
      openItems: controlledOpenItems,
      defaultOpenItems,
      onToggle,
      value: legacyValue,
      defaultValue: legacyDefaultValue,
      onChange: legacyOnChange,
      navigation = 'linear',
      children,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const rawId = useReactId();
    const baseId = `accordion-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`;

    const headersRef = useRef<Map<string, HTMLButtonElement>>(new Map());

    const registerHeader = (val: string, element: HTMLButtonElement | null) => {
      if (element) {
        headersRef.current.set(val, element);
      } else {
        headersRef.current.delete(val);
      }
    };

    const normalizeArray = (val?: string | string[]): string[] => {
      if (val === undefined || val === null) return [];
      return Array.isArray(val) ? val : [val];
    };

    const initialControlled = controlledOpenItems !== undefined ? controlledOpenItems : legacyValue;
    const initialDefault = defaultOpenItems !== undefined ? defaultOpenItems : legacyDefaultValue;

    const [expanded, setExpanded] = useControllableState<string[]>({
      value: initialControlled !== undefined ? normalizeArray(initialControlled) : undefined,
      defaultValue: normalizeArray(initialDefault),
    });

    const toggleItem = (itemVal: string, event: AccordionToggleEvent) => {
      const isCurrentlyExpanded = expanded.includes(itemVal);

      // If not collapsible and single-select, do not allow closing the only open item
      if (!collapsible && !multiple && isCurrentlyExpanded) {
        return;
      }

      let nextExpanded: string[];
      if (multiple) {
        nextExpanded = isCurrentlyExpanded
          ? expanded.filter((v) => v !== itemVal)
          : [...expanded, itemVal];
      } else {
        nextExpanded = isCurrentlyExpanded ? [] : [itemVal];
      }

      setExpanded(nextExpanded);

      if (onToggle) {
        onToggle(event, { value: itemVal, openItems: nextExpanded });
      }

      if (legacyOnChange) {
        legacyOnChange(multiple ? nextExpanded : nextExpanded[0] || '');
      }
    };

    const onHeaderKeyDown = (val: string, event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (navigation === 'none') return;

      const headerElements = Array.from(headersRef.current.entries())
        .map(([key, el]) => ({ key, el }))
        .filter(({ el }) => !el.disabled);

      if (headerElements.length === 0) return;

      const currentIndex = headerElements.findIndex(({ key }) => key === val);

      let targetIndex = -1;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          if (currentIndex < headerElements.length - 1) {
            targetIndex = currentIndex + 1;
          } else if (navigation === 'cycle') {
            targetIndex = 0;
          }
          break;
        case 'ArrowUp':
          event.preventDefault();
          if (currentIndex > 0) {
            targetIndex = currentIndex - 1;
          } else if (navigation === 'cycle') {
            targetIndex = headerElements.length - 1;
          }
          break;
        case 'Home':
          event.preventDefault();
          targetIndex = 0;
          break;
        case 'End':
          event.preventDefault();
          targetIndex = headerElements.length - 1;
          break;
        default:
          break;
      }

      if (targetIndex >= 0 && headerElements[targetIndex]) {
        headerElements[targetIndex].el.focus();
      }
    };

    return (
      <AccordionContext.Provider
        value={{
          expandedValues: expanded,
          toggleItem,
          baseId,
          size,
          expandIconPosition,
          registerHeader,
          onHeaderKeyDown,
        }}
      >
        <div
          ref={ref}
          className={`${styles.accordion} ${className || ''}`}
          style={style}
          {...rest}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);

Accordion.displayName = 'Accordion';

interface AccordionItemContextValue {
  value: string;
  isExpanded: boolean;
  disabled?: boolean;
  headerId: string;
  panelId: string;
}

const AccordionItemContext = createContext<AccordionItemContextValue | null>(null);

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Unique identifier for this section. Required. */
  value: string;
  /** Whether this section is disabled. */
  disabled?: boolean;
  children: React.ReactNode;
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, disabled = false, className, children, ...props }, ref) => {
    const rootCtx = useContext(AccordionContext);
    const isExpanded = rootCtx?.expandedValues.includes(value) ?? false;
    const headerId = `${rootCtx?.baseId}-hdr-${value}`;
    const panelId = `${rootCtx?.baseId}-pnl-${value}`;

    return (
      <AccordionItemContext.Provider value={{ value, isExpanded, disabled, headerId, panelId }}>
        <div
          ref={ref}
          data-expanded={isExpanded ? 'true' : 'false'}
          data-disabled={disabled ? 'true' : 'false'}
          className={`${styles.accordionItem} ${className || ''}`}
          {...props}
        >
          {children}
        </div>
      </AccordionItemContext.Provider>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';

export interface AccordionHeaderProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'as'> {
  /** Sizing override for this header. Inherits from root Accordion if omitted. */
  size?: AccordionSize;
  /** Expand icon placement override: 'start' or 'end'. Inherits from root if omitted. */
  expandIconPosition?: AccordionExpandIconPosition;
  /** Custom expand/collapse indicator icon. */
  expandIcon?: React.ReactNode;
  /** Leading decorative/contextual icon placed next to text. */
  icon?: React.ReactNode;
  /** Trailing inline action slot (e.g. edit button, counter badge, menu trigger). */
  inlineAction?: React.ReactNode;
  /** Semantic HTML heading tag wrapping the interactive button for accessibility. Default is 'h3'. */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
  children: React.ReactNode;
}

export const AccordionHeader = forwardRef<HTMLButtonElement, AccordionHeaderProps>(
  (
    {
      size: explicitSize,
      expandIconPosition: explicitExpandIconPosition,
      expandIcon,
      icon,
      inlineAction,
      as: HeadingTag = 'h3',
      children,
      className,
      onClick,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const rootCtx = useContext(AccordionContext);
    const itemCtx = useContext(AccordionItemContext);

    if (!itemCtx) {
      throw new Error('AccordionHeader must be used inside an AccordionItem');
    }

    const size = explicitSize || rootCtx?.size || 'medium';
    const expandIconPosition =
      explicitExpandIconPosition || rootCtx?.expandIconPosition || 'start';

    const localRef = useRef<HTMLButtonElement | null>(null);

    const setRef = (node: HTMLButtonElement | null) => {
      localRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
      }
      rootCtx?.registerHeader(itemCtx.value, node);
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      if (!itemCtx.disabled) {
        rootCtx?.toggleItem(itemCtx.value, e);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      onKeyDown?.(e);
      rootCtx?.onHeaderKeyDown(itemCtx.value, e);
    };

    // Calculate chevron icon size
    const iconSize =
      size === 'small' ? 14 : size === 'medium' ? 16 : size === 'large' ? 18 : 20;

    const defaultChevron =
      expandIconPosition === 'start' ? (
        <ChevronRightIcon size={iconSize} />
      ) : (
        <ChevronDownIcon size={iconSize} />
      );

    const renderedExpandIcon = (
      <span
        className={`${styles.chevron} ${
          expandIconPosition === 'start' ? styles.chevronStart : styles.chevronEnd
        }`}
        data-expanded={itemCtx.isExpanded ? 'true' : 'false'}
        aria-hidden="true"
      >
        {expandIcon || defaultChevron}
      </span>
    );

    return (
      <HeadingTag className={styles.heading}>
        <button
          ref={setRef}
          type="button"
          id={itemCtx.headerId}
          aria-expanded={itemCtx.isExpanded}
          aria-controls={itemCtx.panelId}
          disabled={itemCtx.disabled}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          className={`${styles.accordionHeader} ${styles.headerSize[size]} ${className || ''}`}
          {...props}
        >
          {expandIconPosition === 'start' && renderedExpandIcon}

          <span className={styles.headerLabel}>
            {icon && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                {icon}
              </span>
            )}
            <span>{children}</span>
          </span>

          {inlineAction && (
            <span
              className={styles.inlineAction}
              onClick={(e) => e.stopPropagation()}
            >
              {inlineAction}
            </span>
          )}

          {expandIconPosition === 'end' && renderedExpandIcon}
        </button>
      </HeadingTag>
    );
  }
);

AccordionHeader.displayName = 'AccordionHeader';

export interface AccordionPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Sizing override for panel padding and font scale. Inherits from root Accordion if omitted. */
  size?: AccordionSize;
  children: React.ReactNode;
}

export const AccordionPanel = forwardRef<HTMLDivElement, AccordionPanelProps>(
  ({ size: explicitSize, children, className, ...props }, ref) => {
    const rootCtx = useContext(AccordionContext);
    const itemCtx = useContext(AccordionItemContext);

    if (!itemCtx) {
      throw new Error('AccordionPanel must be used inside an AccordionItem');
    }

    if (!itemCtx.isExpanded) {
      return null;
    }

    const size = explicitSize || rootCtx?.size || 'medium';

    return (
      <div
        ref={ref}
        id={itemCtx.panelId}
        role="region"
        aria-labelledby={itemCtx.headerId}
        className={`${styles.accordionPanel} ${styles.panelSize[size]} ${className || ''}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AccordionPanel.displayName = 'AccordionPanel';

import React, { createContext, useContext, forwardRef } from 'react';
import { useControllableState, useId } from '@spectra/primitives';
import { ChevronRightIcon } from '@spectra/icons';
import * as styles from './Accordion.css';

interface AccordionContextValue {
  expandedValues: string[];
  toggleItem: (val: string) => void;
  baseId: string;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

export interface AccordionProps {
  multiple?: boolean;
  value?: string | string[];
  defaultValue?: string | string[];
  onChange?: (value: string | string[]) => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Accordion: React.FC<AccordionProps> = ({
  multiple = false,
  value: controlledValue,
  defaultValue,
  onChange,
  children,
  className,
  style,
}) => {
  const baseId = useId('accordion');

  const normalizeInitial = (val?: string | string[]): string[] => {
    if (!val) return [];
    return Array.isArray(val) ? val : [val];
  };

  const [expanded, setExpanded] = useControllableState<string[]>({
    value: controlledValue ? (Array.isArray(controlledValue) ? controlledValue : [controlledValue]) : undefined,
    defaultValue: normalizeInitial(defaultValue),
    onChange: (next) => {
      if (onChange) {
        onChange(multiple ? next : next[0] || '');
      }
    },
  });

  const toggleItem = (itemVal: string) => {
    if (multiple) {
      setExpanded(
        expanded.includes(itemVal)
          ? expanded.filter((v) => v !== itemVal)
          : [...expanded, itemVal]
      );
    } else {
      setExpanded(expanded.includes(itemVal) ? [] : [itemVal]);
    }
  };

  return (
    <AccordionContext.Provider value={{ expandedValues: expanded, toggleItem, baseId }}>
      <div className={`${styles.accordion} ${className || ''}`} style={style}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

interface AccordionItemContextValue {
  value: string;
  isExpanded: boolean;
  disabled?: boolean;
  headerId: string;
  panelId: string;
}

const AccordionItemContext = createContext<AccordionItemContextValue | null>(null);

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
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
        <div ref={ref} className={`${styles.accordionItem} ${className || ''}`} {...props}>
          {children}
        </div>
      </AccordionItemContext.Provider>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';

export interface AccordionHeaderProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const AccordionHeader = forwardRef<HTMLButtonElement, AccordionHeaderProps>(
  ({ children, icon, className, ...props }, ref) => {
    const rootCtx = useContext(AccordionContext);
    const itemCtx = useContext(AccordionItemContext);

    if (!itemCtx) {
      throw new Error('AccordionHeader must be used inside an AccordionItem');
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      props.onClick?.(e);
      if (!itemCtx.disabled) {
        rootCtx?.toggleItem(itemCtx.value);
      }
    };

    return (
      <h3>
        <button
          ref={ref}
          type="button"
          id={itemCtx.headerId}
          aria-expanded={itemCtx.isExpanded}
          aria-controls={itemCtx.panelId}
          disabled={itemCtx.disabled}
          onClick={handleClick}
          className={`${styles.accordionHeader} ${className || ''}`}
          {...props}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span
              className={styles.chevron}
              data-expanded={itemCtx.isExpanded ? 'true' : 'false'}
              aria-hidden="true"
            >
              {icon || <ChevronRightIcon size={16} />}
            </span>
            <span>{children}</span>
          </span>
        </button>
      </h3>
    );
  }
);

AccordionHeader.displayName = 'AccordionHeader';

export interface AccordionPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const AccordionPanel = forwardRef<HTMLDivElement, AccordionPanelProps>(
  ({ children, className, ...props }, ref) => {
    const itemCtx = useContext(AccordionItemContext);

    if (!itemCtx) {
      throw new Error('AccordionPanel must be used inside an AccordionItem');
    }

    if (!itemCtx.isExpanded) {
      return null;
    }

    return (
      <div
        ref={ref}
        id={itemCtx.panelId}
        role="region"
        aria-labelledby={itemCtx.headerId}
        className={`${styles.accordionPanel} ${className || ''}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AccordionPanel.displayName = 'AccordionPanel';

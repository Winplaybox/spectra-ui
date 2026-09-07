import React, { createContext, useContext, forwardRef } from 'react';
import { useControllableState, useId } from '@spectra/primitives';
import * as styles from './Tabs.css';

interface TabsContextValue {
  selectedId: string;
  setSelectedId: (id: string) => void;
  variant: 'underline' | 'pills';
  size: 'sm' | 'md' | 'lg';
  baseId: string;
}

const TabsContext = createContext<TabsContextValue | null>(null);

export interface TabsProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  variant?: 'underline' | 'pills';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  value: controlledValue,
  defaultValue = '',
  onChange,
  variant = 'underline',
  size = 'md',
  children,
  className,
}) => {
  const baseId = useId('tabs');
  const [selectedId, setSelectedId] = useControllableState({
    value: controlledValue,
    defaultValue,
    onChange,
  });

  return (
    <TabsContext.Provider value={{ selectedId, setSelectedId, variant, size, baseId }}>
      <div className={`${styles.tabs} ${className || ''}`}>{children}</div>
    </TabsContext.Provider>
  );
};

export interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const TabList = forwardRef<HTMLDivElement, TabListProps>(({ className, children, ...props }, ref) => {
  const ctx = useContext(TabsContext);
  const variantClass = ctx?.variant === 'pills' ? styles.pillsList : styles.underlineList;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const tabsElements = Array.from(
      e.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]:not([disabled])')
    );
    if (!tabsElements.length) return;

    const currentIndex = tabsElements.findIndex((tab) => tab === document.activeElement);
    if (currentIndex === -1) return;

    let nextIndex = currentIndex;
    if (e.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % tabsElements.length;
    } else if (e.key === 'ArrowLeft') {
      nextIndex = (currentIndex - 1 + tabsElements.length) % tabsElements.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = tabsElements.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    tabsElements[nextIndex].focus();
    tabsElements[nextIndex].click();
  };

  return (
    <div
      ref={ref}
      role="tablist"
      onKeyDown={handleKeyDown}
      className={`${styles.tabList} ${variantClass} ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
});

TabList.displayName = 'TabList';

export interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Tab = forwardRef<HTMLButtonElement, TabProps>(
  ({ value, icon, disabled = false, className, children, ...props }, ref) => {
    const ctx = useContext(TabsContext);
    const isSelected = ctx?.selectedId === value;
    const variantTabClass = ctx?.variant === 'pills' ? styles.pillsTab : styles.underlineTab;
    const sizeClass = ctx?.size ? styles[ctx.size] : styles.md;
    const tabId = `${ctx?.baseId}-tab-${value}`;
    const panelId = `${ctx?.baseId}-panel-${value}`;

    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        id={tabId}
        aria-selected={isSelected}
        aria-controls={panelId}
        tabIndex={isSelected ? 0 : -1}
        disabled={disabled}
        data-selected={isSelected ? 'true' : 'false'}
        onClick={() => ctx?.setSelectedId(value)}
        className={`${styles.tab} ${variantTabClass} ${sizeClass} ${className || ''}`}
        {...props}
      >
        {icon && <span aria-hidden="true">{icon}</span>}
        {children}
      </button>
    );
  }
);

Tab.displayName = 'Tab';

export interface TabPanelsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const TabPanels: React.FC<TabPanelsProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  children: React.ReactNode;
}

export const TabPanel: React.FC<TabPanelProps> = ({ value, className, children, ...props }) => {
  const ctx = useContext(TabsContext);
  const isSelected = ctx?.selectedId === value;
  const tabId = `${ctx?.baseId}-tab-${value}`;
  const panelId = `${ctx?.baseId}-panel-${value}`;

  if (!isSelected) return null;

  return (
    <div
      role="tabpanel"
      id={panelId}
      aria-labelledby={tabId}
      tabIndex={0}
      className={`${styles.tabPanel} ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

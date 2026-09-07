import React, { forwardRef } from 'react';
import * as styles from './List.css';

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode;
  className?: string;
}

export const List = forwardRef<HTMLUListElement, ListProps>(({ children, className, ...props }, ref) => {
  return (
    <ul ref={ref} role="list" className={`${styles.list} ${className || ''}`} {...props}>
      {children}
    </ul>
  );
});

List.displayName = 'List';

export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  interactive?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ interactive = false, disabled = false, onClick, onKeyDown, children, className, ...props }, ref) => {
    const isInteractive = interactive && !disabled;

    const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
      if (isInteractive && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        (e.currentTarget as any).click();
      }
      onKeyDown?.(e);
    };

    return (
      <li
        ref={ref}
        role="listitem"
        tabIndex={isInteractive ? 0 : undefined}
        data-interactive={isInteractive ? 'true' : 'false'}
        data-disabled={disabled ? 'true' : 'false'}
        onClick={disabled ? undefined : onClick}
        onKeyDown={handleKeyDown}
        className={`${styles.listItem} ${className || ''}`}
        {...props}
      >
        {children}
      </li>
    );
  }
);

ListItem.displayName = 'ListItem';

export interface ListItemIconProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const ListItemIcon: React.FC<ListItemIconProps> = ({ children, className, ...props }) => (
  <div className={`${styles.itemIcon} ${className || ''}`} aria-hidden="true" {...props}>
    {children}
  </div>
);

export interface ListItemTextProps extends React.HTMLAttributes<HTMLDivElement> {
  primary: React.ReactNode;
  secondary?: React.ReactNode;
  className?: string;
}

export const ListItemText: React.FC<ListItemTextProps> = ({ primary, secondary, className, ...props }) => (
  <div className={`${styles.itemContent} ${className || ''}`} {...props}>
    <span className={styles.itemTitle}>{primary}</span>
    {secondary && <span className={styles.itemSubtitle}>{secondary}</span>}
  </div>
);

export interface ListItemActionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const ListItemAction: React.FC<ListItemActionProps> = ({ children, className, ...props }) => (
  <div className={`${styles.itemAction} ${className || ''}`} {...props}>
    {children}
  </div>
);

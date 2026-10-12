import React, {
  createContext,
  forwardRef,
  useContext,
  useState,
  useRef,
  useEffect,
  ReactNode,
  ElementType,
  HTMLAttributes,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from 'react';
import * as styles from './Breadcrumb.css';
import { ChevronRightIcon, MoreHorizontalIcon } from '@winplaybox/icons';

export type BreadcrumbSize = 'small' | 'medium' | 'large';
export type BreadcrumbAppearance = 'subtle' | 'transparent';
export type BreadcrumbDividerType = 'chevron' | 'slash';

export interface BreadcrumbContextValue {
  size: BreadcrumbSize;
  appearance: BreadcrumbAppearance;
  dividerType: BreadcrumbDividerType;
  customDivider?: ReactNode;
}

const BreadcrumbContext = createContext<BreadcrumbContextValue>({
  size: 'medium',
  appearance: 'subtle',
  dividerType: 'chevron',
});

export const useBreadcrumbContext = () => useContext(BreadcrumbContext);

// --- BreadcrumbItemData for data-driven mode ---
export interface BreadcrumbItemData {
  key?: string | number;
  label: ReactNode;
  href?: string;
  onClick?: (event: React.MouseEvent) => void;
  icon?: ReactNode;
  isCurrent?: boolean;
  current?: boolean;
  disabled?: boolean;
  disabledFocusable?: boolean;
  truncate?: boolean;
  maxWidth?: number | string;
  tooltip?: string;
}

// Alias for backward compatibility
export type BreadcrumbItem = BreadcrumbItemData;

// --- Breadcrumb Props ---
export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  /**
   * Visual size scale: small (12px), medium (14px), large (16px).
   * @default 'medium'
   */
  size?: BreadcrumbSize;
  /**
   * Visual button appearance: subtle (hover highlight) or transparent.
   * @default 'subtle'
   */
  appearance?: BreadcrumbAppearance;
  /**
   * Delimiter type between breadcrumb items: chevron or slash.
   * @default 'chevron'
   */
  dividerType?: BreadcrumbDividerType;
  /**
   * Custom separator element to render between items.
   */
  divider?: ReactNode;
  /**
   * Array of breadcrumb item data for declarative rendering.
   */
  items?: BreadcrumbItemData[];
  /**
   * Maximum number of items to display before collapsing into an overflow menu.
   * First item (root/home) and last item (current page) remain visible.
   */
  maxItems?: number;
  /**
   * Index where the overflow collapse begins.
   * @default 1
   */
  overflowIndex?: number;
  /**
   * Accessible label for the overflow button.
   * @default 'Show more breadcrumb items'
   */
  overflowAriaLabel?: string;
  /**
   * Custom renderer for the overflow trigger and menu.
   */
  renderOverflow?: (overflowItems: BreadcrumbItemData[]) => ReactNode;
  /**
   * Custom separator element (backward compatible alias for `divider`).
   */
  separator?: ReactNode;
  /**
   * Content when using compound JSX composition.
   */
  children?: ReactNode;
}

// Alias for backward compatibility
export type BreadcrumbsProps = BreadcrumbProps;

// --- BreadcrumbItem Component ---
export interface BreadcrumbItemProps extends HTMLAttributes<HTMLLIElement> {
  current?: boolean;
  children?: ReactNode;
}

export const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ current = false, className, children, ...rest }, ref) => {
    return (
      <li
        ref={ref}
        role="listitem"
        aria-current={current ? 'page' : undefined}
        className={`${styles.item} ${className || ''}`}
        {...rest}
      >
        {children}
      </li>
    );
  }
);
BreadcrumbItem.displayName = 'BreadcrumbItem';

// --- BreadcrumbDivider Component ---
export interface BreadcrumbDividerProps extends HTMLAttributes<HTMLLIElement> {
  type?: BreadcrumbDividerType;
  children?: ReactNode;
}

export const BreadcrumbDivider = forwardRef<HTMLLIElement, BreadcrumbDividerProps>(
  ({ type, className, children, ...rest }, ref) => {
    const context = useBreadcrumbContext();
    const resolvedType = type || context.dividerType || 'chevron';

    const getIconSize = (size: BreadcrumbSize) => {
      switch (size) {
        case 'small':
          return 12;
        case 'large':
          return 16;
        case 'medium':
        default:
          return 14;
      }
    };

    return (
      <li
        ref={ref}
        role="presentation"
        aria-hidden="true"
        className={`${styles.divider} ${className || ''}`}
        {...rest}
      >
        {children !== undefined ? (
          children
        ) : context.customDivider ? (
          context.customDivider
        ) : resolvedType === 'slash' ? (
          <span className={styles.slashDivider}>/</span>
        ) : (
          <ChevronRightIcon size={getIconSize(context.size)} />
        )}
      </li>
    );
  }
);
BreadcrumbDivider.displayName = 'BreadcrumbDivider';

// --- BreadcrumbButton Component ---
export interface BreadcrumbButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel'> {
  as?: ElementType;
  icon?: ReactNode;
  current?: boolean;
  disabled?: boolean;
  disabledFocusable?: boolean;
  truncate?: boolean;
  maxWidth?: number | string;
  tooltip?: string;
  children?: ReactNode;
}

export const BreadcrumbButton = forwardRef<HTMLElement, BreadcrumbButtonProps>(
  (
    {
      as,
      icon,
      current = false,
      disabled = false,
      disabledFocusable = false,
      truncate = false,
      maxWidth,
      tooltip,
      className,
      href,
      onClick,
      children,
      ...rest
    },
    ref
  ) => {
    const { size } = useBreadcrumbContext();

    // Determine the underlying component:
    // When current is true, render a non-interactive semantic span unless an explicit element is passed.
    // If href is present and not current, default to 'a'. Otherwise default to 'button'.
    const Component = as || (current ? 'span' : href ? 'a' : 'button');

    const isButton = Component === 'button';
    const isAnchor = Component === 'a';

    const handleClick = (e: React.MouseEvent<any>) => {
      if (disabled || disabledFocusable) {
        e.preventDefault();
        return;
      }
      if (onClick) {
        onClick(e);
      }
    };

    const stateClass = current
      ? styles.buttonCurrent
      : disabled
      ? styles.buttonDisabled
      : disabledFocusable
      ? styles.buttonDisabledFocusable
      : '';

    const sizeClass = styles.buttonSizeVariants[size];

    const labelStyle: React.CSSProperties = truncate
      ? {
          maxWidth: maxWidth ? (typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth) : '160px',
        }
      : {};

    const elementProps: any = {
      ref,
      className: `${styles.buttonBase} ${sizeClass} ${stateClass} ${className || ''}`,
      onClick: handleClick,
      title: tooltip,
      ...rest,
    };

    if (current) {
      elementProps['aria-current'] = 'page';
    }

    if (isButton) {
      elementProps.type = rest.type || 'button';
      if (disabled) elementProps.disabled = true;
      if (disabledFocusable) {
        elementProps['aria-disabled'] = true;
        elementProps.tabIndex = 0;
      }
    } else if (isAnchor) {
      if (href && !disabled && !disabledFocusable) {
        elementProps.href = href;
      }
      if (disabled || disabledFocusable) {
        elementProps['aria-disabled'] = true;
        elementProps.role = 'link';
        if (disabledFocusable) elementProps.tabIndex = 0;
      }
    } else {
      if (disabledFocusable) {
        elementProps['aria-disabled'] = true;
        elementProps.tabIndex = 0;
      }
    }

    return (
      <Component {...elementProps}>
        {icon && <span className={styles.iconSlot}>{icon}</span>}
        {truncate ? (
          <span className={styles.truncate} style={labelStyle}>
            {children}
          </span>
        ) : (
          children
        )}
      </Component>
    );
  }
);
BreadcrumbButton.displayName = 'BreadcrumbButton';

// --- Overflow Dropdown Menu for intermediate crumbs ---
interface BreadcrumbOverflowProps {
  items: BreadcrumbItemData[];
  ariaLabel?: string;
  size: BreadcrumbSize;
}

const BreadcrumbOverflow: React.FC<BreadcrumbOverflowProps> = ({
  items,
  ariaLabel = 'Show more breadcrumb items',
  size,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const iconSize = size === 'small' ? 12 : size === 'large' ? 18 : 14;

  return (
    <div ref={containerRef} className={styles.overflowWrapper}>
      <button
        type="button"
        aria-label={ariaLabel}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        title={`${items.length} hidden items`}
        className={styles.overflowButton}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <MoreHorizontalIcon size={iconSize} />
      </button>

      {isOpen && (
        <ul role="menu" className={styles.overflowMenu} aria-label={ariaLabel}>
          {items.map((item, idx) => (
            <li key={item.key || idx} role="none">
              {item.href ? (
                <a
                  href={item.href}
                  role="menuitem"
                  className={styles.overflowMenuItem}
                  onClick={(e) => {
                    setIsOpen(false);
                    if (item.onClick) item.onClick(e);
                  }}
                  title={item.tooltip}
                >
                  {item.icon && <span className={styles.iconSlot}>{item.icon}</span>}
                  <span>{item.label}</span>
                </a>
              ) : (
                <button
                  type="button"
                  role="menuitem"
                  className={styles.overflowMenuItem}
                  onClick={(e) => {
                    setIsOpen(false);
                    if (item.onClick) item.onClick(e);
                  }}
                  title={item.tooltip}
                >
                  {item.icon && <span className={styles.iconSlot}>{item.icon}</span>}
                  <span>{item.label}</span>
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// --- Breadcrumb Root Component ---
export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  (
    {
      size = 'medium',
      appearance = 'subtle',
      dividerType = 'chevron',
      divider,
      separator,
      items,
      maxItems,
      overflowIndex = 1,
      overflowAriaLabel,
      renderOverflow,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const resolvedDivider = divider || separator;
    const contextValue: BreadcrumbContextValue = {
      size,
      appearance,
      dividerType,
      customDivider: resolvedDivider,
    };

    // If items array is provided, render data-driven with overflow support
    const renderDataDrivenItems = () => {
      if (!items || items.length === 0) return null;

      // Handle overflow collapse when maxItems is specified
      const shouldCollapse = maxItems !== undefined && items.length > maxItems && maxItems >= 2;

      let renderedElements: ReactNode[] = [];

      if (shouldCollapse) {
        const head = items.slice(0, overflowIndex);
        const tailCount = maxItems - overflowIndex;
        const tail = items.slice(items.length - tailCount);
        const overflow = items.slice(overflowIndex, items.length - tailCount);

        const buildItemNode = (item: BreadcrumbItemData, index: number, isLast: boolean) => {
          const isCurrent = item.current || item.isCurrent || isLast;
          return (
            <React.Fragment key={item.key || `crumb-${index}`}>
              <BreadcrumbItem current={isCurrent}>
                <BreadcrumbButton
                  href={item.href}
                  onClick={item.onClick}
                  icon={item.icon}
                  current={isCurrent}
                  disabled={item.disabled}
                  disabledFocusable={item.disabledFocusable}
                  truncate={item.truncate}
                  maxWidth={item.maxWidth}
                  tooltip={item.tooltip}
                >
                  {item.label}
                </BreadcrumbButton>
              </BreadcrumbItem>
              {!isLast && <BreadcrumbDivider type={dividerType} />}
            </React.Fragment>
          );
        };

        // Render Head
        head.forEach((item, idx) => {
          renderedElements.push(buildItemNode(item, idx, false));
        });

        // Render Overflow Trigger
        renderedElements.push(
          <React.Fragment key="crumb-overflow">
            <BreadcrumbItem>
              {renderOverflow ? (
                renderOverflow(overflow)
              ) : (
                <BreadcrumbOverflow
                  items={overflow}
                  ariaLabel={overflowAriaLabel}
                  size={size}
                />
              )}
            </BreadcrumbItem>
            <BreadcrumbDivider type={dividerType} />
          </React.Fragment>
        );

        // Render Tail
        tail.forEach((item, idx) => {
          const isLast = idx === tail.length - 1;
          renderedElements.push(buildItemNode(item, items.length - tailCount + idx, isLast));
        });
      } else {
        items.forEach((item, index) => {
          const isLast = index === items.length - 1 || item.current || item.isCurrent;
          renderedElements.push(
            <React.Fragment key={item.key || `crumb-${index}`}>
              <BreadcrumbItem current={isLast}>
                <BreadcrumbButton
                  href={item.href}
                  onClick={item.onClick}
                  icon={item.icon}
                  current={isLast}
                  disabled={item.disabled}
                  disabledFocusable={item.disabledFocusable}
                  truncate={item.truncate}
                  maxWidth={item.maxWidth}
                  tooltip={item.tooltip}
                >
                  {item.label}
                </BreadcrumbButton>
              </BreadcrumbItem>
              {!isLast && <BreadcrumbDivider type={dividerType} />}
            </React.Fragment>
          );
        });
      }

      return renderedElements;
    };

    return (
      <BreadcrumbContext.Provider value={contextValue}>
        <nav
          ref={ref}
          aria-label={rest['aria-label'] || 'Breadcrumb'}
          className={`${styles.nav} spectra-breadcrumb ${className || ''}`}
          {...rest}
        >
          <ol className={`${styles.list} ${styles.sizeVariants[size]} spectra-breadcrumb__list`}>
            {items ? renderDataDrivenItems() : children}
          </ol>
        </nav>
      </BreadcrumbContext.Provider>
    );
  }
);
Breadcrumb.displayName = 'Breadcrumb';

// Backward compatibility alias:
export const Breadcrumbs = Breadcrumb;

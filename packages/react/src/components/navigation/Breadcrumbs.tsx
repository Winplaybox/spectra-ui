import React, { forwardRef, ReactNode } from 'react';
import * as styles from './Breadcrumbs.css';
import { ChevronRightIcon } from '@spectra/icons';

export interface BreadcrumbItem {
  label: ReactNode;
  href?: string;
  onClick?: () => void;
  isCurrent?: boolean;
}

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  separator?: ReactNode;
  maxItems?: number;
}

export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  (
    {
      items,
      separator = <ChevronRightIcon size={12} />,
      maxItems,
      className,
      ...rest
    },
    ref
  ) => {
    let renderItems = items;
    if (maxItems && items.length > maxItems && maxItems >= 2) {
      const first = items[0];
      const tailCount = maxItems - 1;
      const tail = items.slice(items.length - tailCount);
      renderItems = [first, { label: '…' }, ...tail];
    }

    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={`${styles.nav} spectra-breadcrumbs ${className || ''}`}
        {...rest}
      >
        <ol className={`${styles.list} spectra-breadcrumbs__list`}>
          {renderItems.map((item, index) => {
            const isLast = index === renderItems.length - 1 || item.isCurrent;

            return (
              <React.Fragment key={index}>
                <li
                  className={`${styles.item} ${isLast ? styles.current : ''} spectra-breadcrumbs__item`}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.href && !isLast ? (
                    <a
                      href={item.href}
                      onClick={item.onClick}
                      style={{ color: 'inherit', textDecoration: 'none' }}
                      onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                      onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                    >
                      {item.label}
                    </a>
                  ) : item.onClick && !isLast ? (
                    <button
                      type="button"
                      onClick={item.onClick}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        font: 'inherit',
                        color: 'inherit',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                      onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </li>

                {!isLast && (
                  <li aria-hidden="true" className={`${styles.separator} spectra-breadcrumbs__separator`}>
                    {separator}
                  </li>
                )}
              </React.Fragment>
            );
          })}
        </ol>
      </nav>
    );
  }
);

Breadcrumbs.displayName = 'Breadcrumbs';

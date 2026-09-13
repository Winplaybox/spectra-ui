// packages/react/src/components/navigation/Pagination.tsx
import React, { forwardRef } from 'react';
import { ChevronDownIcon } from '@spectra/icons';

export interface PaginationProps extends Omit<React.ComponentPropsWithoutRef<'nav'>, 'onChange'> {
  page?: number;
  count: number;
  defaultPage?: number;
  onChange?: (page: number) => void;
  disabled?: boolean;
}

/**
 * Pagination - Enables navigation across partitioned datasets.
 * Engineered for multi-page tables, data catalogs, and accessible range jumping.
 */
export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  (
    {
      page: controlledPage,
      count,
      defaultPage = 1,
      onChange,
      disabled = false,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const isControlled = controlledPage !== undefined;
    const [internalPage, setInternalPage] = React.useState(defaultPage);
    const currentPage = isControlled ? controlledPage : internalPage;

    const setPage = (p: number) => {
      if (disabled || p < 1 || p > count || p === currentPage) return;
      if (!isControlled) setInternalPage(p);
      onChange?.(p);
    };

    // Calculate pages to show
    const getPages = () => {
      const pages: (number | '...')[] = [];
      for (let i = 1; i <= count; i++) {
        if (i === 1 || i === count || (i >= currentPage - 1 && i <= currentPage + 1)) {
          pages.push(i);
        } else if (pages[pages.length - 1] !== '...') {
          pages.push('...');
        }
      }
      return pages;
    };

    return (
      <nav
        ref={ref}
        role="navigation"
        aria-label="Pagination Navigation"
        className={className}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          userSelect: 'none',
          ...style,
        }}
        {...rest}
      >
        {/* Previous page button */}
        <button
          type="button"
          aria-label="Previous page"
          disabled={disabled || currentPage <= 1}
          onClick={() => setPage(currentPage - 1)}
          style={{
            width: 32,
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'var(--radius-component-md, 8px)',
            border: '1px solid var(--color-border-default, rgba(255,255,255,0.12))',
            backgroundColor: 'var(--color-surface-raised, #1e293b)',
            color: 'var(--color-text-primary, #f8fafc)',
            cursor: disabled || currentPage <= 1 ? 'not-allowed' : 'pointer',
            opacity: disabled || currentPage <= 1 ? 0.4 : 1,
          }}
        >
          <ChevronDownIcon size={14} style={{ transform: 'rotate(90deg)' }} />
        </button>

        {/* Page buttons */}
        {getPages().map((p, idx) => {
          if (p === '...') {
            return (
              <span
                key={`ellipsis-${idx}`}
                style={{
                  width: 32,
                  height: 32,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-muted, #64748b)',
                  fontSize: 13,
                }}
              >
                ...
              </span>
            );
          }

          const isSelected = p === currentPage;
          return (
            <button
              key={p}
              type="button"
              aria-current={isSelected ? 'page' : undefined}
              disabled={disabled}
              onClick={() => setPage(p)}
              style={{
                width: 32,
                height: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'var(--radius-component-md, 8px)',
                border: isSelected
                  ? '1px solid var(--color-action-primary, #007FFF)'
                  : '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
                backgroundColor: isSelected
                  ? 'var(--color-action-primary, #007FFF)'
                  : 'transparent',
                color: isSelected
                  ? 'var(--color-text-inverse, #ffffff)'
                  : 'var(--color-text-primary, #f8fafc)',
                fontSize: 13,
                fontWeight: isSelected ? 600 : 400,
                cursor: disabled ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.12s ease',
              }}
              onMouseEnter={(e) => {
                if (!isSelected && !disabled) {
                  e.currentTarget.style.backgroundColor = 'var(--color-surface-raised, rgba(255,255,255,0.08))';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected && !disabled) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              {p}
            </button>
          );
        })}

        {/* Next page button */}
        <button
          type="button"
          aria-label="Next page"
          disabled={disabled || currentPage >= count}
          onClick={() => setPage(currentPage + 1)}
          style={{
            width: 32,
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'var(--radius-component-md, 8px)',
            border: '1px solid var(--color-border-default, rgba(255,255,255,0.12))',
            backgroundColor: 'var(--color-surface-raised, #1e293b)',
            color: 'var(--color-text-primary, #f8fafc)',
            cursor: disabled || currentPage >= count ? 'not-allowed' : 'pointer',
            opacity: disabled || currentPage >= count ? 0.4 : 1,
          }}
        >
          <ChevronDownIcon size={14} style={{ transform: 'rotate(-90deg)' }} />
        </button>
      </nav>
    );
  }
);

Pagination.displayName = 'Pagination';

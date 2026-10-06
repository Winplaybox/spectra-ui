import React, { forwardRef } from 'react';
import { SpinnerIcon } from '@winplaybox/icons';

export interface ListViewProps<T> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * Data items to render.
   */
  data?: readonly T[] | null;
  /**
   * Render function for each item.
   */
  renderItem: (item: T, index: number) => React.ReactNode;
  /**
   * Custom key extractor function. Defaults to index.
   */
  keyExtractor?: (item: T, index: number) => string | number;
  /**
   * Automatically adds a 1px divider using Spectra border tokens between items.
   * Defaults to true.
   */
  divided?: boolean;
  /**
   * Container padding scale matching Spectra Box tokens.
   */
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  /**
   * Empty state component rendered when data list is empty.
   */
  emptyState?: React.ReactNode;
  /**
   * Convenient fallback message string when data list is empty.
   */
  emptyText?: string;
  /**
   * Pull-to-refresh or active loading state indicator.
   */
  refreshing?: boolean;
  /**
   * Pull-to-refresh / reload trigger callback.
   */
  onRefresh?: () => void;
  /**
   * Optional header rendered above list items.
   */
  ListHeaderComponent?: React.ReactNode;
  /**
   * Optional footer rendered below list items.
   */
  ListFooterComponent?: React.ReactNode;
  /**
   * Maximum height of scrollable container.
   */
  maxHeight?: number | string;
}

const resolveSpacing = (val?: ListViewProps<any>['padding']): string | undefined => {
  if (val === undefined) return undefined;
  if (typeof val === 'number') return `${val}px`;
  switch (val) {
    case 'none':
      return '0px';
    case 'xs':
      return '4px';
    case 'sm':
      return '8px';
    case 'md':
      return '16px';
    case 'lg':
      return '24px';
    case 'xl':
      return '32px';
    default:
      return undefined;
  }
};

/**
 * Universal ListView component for high-performance, token-aware data list rendering.
 * Provides accessible list markup, pull-to-refresh indicators, empty states, and divider lines.
 */
export const ListView = forwardRef(function ListView<T>(
  {
    data,
    renderItem,
    keyExtractor,
    divided = true,
    padding,
    emptyState,
    emptyText = 'No items found',
    refreshing = false,
    onRefresh,
    ListHeaderComponent,
    ListFooterComponent,
    maxHeight,
    className,
    style,
    ...props
  }: ListViewProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const items = data || [];
  const isEmpty = items.length === 0;
  const paddingValue = resolveSpacing(padding);

  return (
    <div
      ref={ref}
      role="region"
      aria-busy={refreshing}
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxHeight: maxHeight,
        overflowY: maxHeight ? 'auto' : undefined,
        backgroundColor: 'var(--color-surface, #ffffff)',
        color: 'var(--color-text-primary, #111827)',
        borderRadius: 'var(--radius-component-md, 8px)',
        border: '1px solid var(--color-border-default, #e5e7eb)',
        position: 'relative',
        ...style,
      }}
      {...props}
    >
      {/* Refreshing Header Bar */}
      {refreshing && (
        <div
          role="status"
          aria-live="polite"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '8px 16px',
            backgroundColor: 'var(--color-surface-raised, #f9fafb)',
            borderBottom: '1px solid var(--color-border-subtle, #f3f4f6)',
            fontSize: 'var(--font-size-body-sm, 13px)',
            color: 'var(--color-text-secondary, #6b7280)',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'spectra-spin 1s linear infinite',
            }}
          >
            <SpinnerIcon size={14} color="var(--color-primary-default, #2563eb)" />
          </div>
          <span>Refreshing...</span>
        </div>
      )}

      {/* Optional List Header */}
      {ListHeaderComponent && <div>{ListHeaderComponent}</div>}

      {/* Main List Container */}
      <div
        role="list"
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          padding: paddingValue,
          boxSizing: 'border-box',
        }}
      >
        {isEmpty ? (
          <div
            role="status"
            style={{
              padding: '32px 16px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {emptyState ? (
              emptyState
            ) : (
              <span
                style={{
                  fontSize: 'var(--font-size-body-sm, 14px)',
                  color: 'var(--color-text-secondary, #6b7280)',
                }}
              >
                {emptyText}
              </span>
            )}
          </div>
        ) : (
          items.map((item, index) => {
            const key = keyExtractor ? keyExtractor(item, index) : index;
            const isLast = index === items.length - 1;

            return (
              <div
                key={key}
                role="listitem"
                style={{
                  borderBottom:
                    divided && !isLast
                      ? '1px solid var(--color-border-subtle, #f3f4f6)'
                      : undefined,
                }}
              >
                {renderItem(item, index)}
              </div>
            );
          })
        )}
      </div>

      {/* Optional List Footer */}
      {ListFooterComponent && <div>{ListFooterComponent}</div>}
    </div>
  );
}) as <T>(
  props: ListViewProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => React.ReactElement;

// packages/react/src/components/data-display/Table.tsx
import React, { forwardRef, ReactNode } from 'react';

export interface TableProps extends React.ComponentPropsWithoutRef<'table'> {
  children: ReactNode;
  striped?: boolean;
  hoverable?: boolean;
  dense?: boolean;
  bordered?: boolean;
}

/**
 * Table & DataGrid - High density tabular data presentation.
 * Engineered for tabular data grids, sortable records, and enterprise datasets.
 */
export const Table = forwardRef<HTMLTableElement, TableProps>(
  (
    {
      children,
      striped = false,
      hoverable = true,
      dense = false,
      bordered = true,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        style={{
          width: '100%',
          overflowX: 'auto',
          borderRadius: 'var(--radius-component-md, 8px)',
          border: bordered ? '1px solid var(--color-border-subtle, rgba(255,255,255,0.12))' : 'none',
          backgroundColor: 'var(--color-surface-elevated, #1e293b)',
        }}
      >
        <table
          ref={ref}
          className={className}
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            textAlign: 'left',
            fontSize: dense ? 12 : 13,
            color: 'var(--color-text-primary, #f8fafc)',
            ...style,
          }}
          {...rest}
        >
          {children}
        </table>
      </div>
    );
  }
);

Table.displayName = 'Table';

export const TableHead = forwardRef<HTMLTableSectionElement, React.ComponentPropsWithoutRef<'thead'>>(
  ({ children, style, ...rest }, ref) => (
    <thead
      ref={ref}
      style={{
        backgroundColor: 'var(--color-surface-raised, #0f172a)',
        borderBottom: '1px solid var(--color-border-default, rgba(255,255,255,0.15))',
        ...style,
      }}
      {...rest}
    >
      {children}
    </thead>
  )
);
TableHead.displayName = 'TableHead';

export const TableBody = forwardRef<HTMLTableSectionElement, React.ComponentPropsWithoutRef<'tbody'>>(
  ({ children, ...rest }, ref) => <tbody ref={ref} {...rest}>{children}</tbody>
);
TableBody.displayName = 'TableBody';

export const TableRow = forwardRef<HTMLTableRowElement, React.ComponentPropsWithoutRef<'tr'>>(
  ({ children, style, ...rest }, ref) => (
    <tr
      ref={ref}
      style={{
        borderBottom: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
        transition: 'background-color 0.12s ease',
        ...style,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-surface-raised, rgba(255,255,255,0.04))')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
      {...rest}
    >
      {children}
    </tr>
  )
);
TableRow.displayName = 'TableRow';

export const TableHeaderCell = forwardRef<HTMLTableCellElement, React.ComponentPropsWithoutRef<'th'>>(
  ({ children, style, ...rest }, ref) => (
    <th
      ref={ref}
      style={{
        padding: '12px 16px',
        fontWeight: 600,
        color: 'var(--color-text-secondary, #94a3b8)',
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        fontSize: 11,
        ...style,
      }}
      {...rest}
    >
      {children}
    </th>
  )
);
TableHeaderCell.displayName = 'TableHeaderCell';

export const TableCell = forwardRef<HTMLTableCellElement, React.ComponentPropsWithoutRef<'td'>>(
  ({ children, style, ...rest }, ref) => (
    <td
      ref={ref}
      style={{
        padding: '12px 16px',
        color: 'inherit',
        ...style,
      }}
      {...rest}
    >
      {children}
    </td>
  )
);
TableCell.displayName = 'TableCell';

export const DataGrid = Table;

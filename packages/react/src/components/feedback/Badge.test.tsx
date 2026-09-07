import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders badge text', () => {
    render(<Badge>Active</Badge>);
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('renders with dot indicator', () => {
    const { container } = render(<Badge dot variant="success">Completed</Badge>);
    expect(screen.getByText('Completed')).toBeInTheDocument();
    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
  });

  it('renders different status variants', () => {
    const { rerender } = render(<Badge variant="error">Critical</Badge>);
    expect(screen.getByText('Critical')).toBeInTheDocument();

    rerender(<Badge variant="warning">Pending</Badge>);
    expect(screen.getByText('Pending')).toBeInTheDocument();
  });
});

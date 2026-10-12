import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Badge, CounterBadge, PresenceBadge } from './Badge';

describe('Badge', () => {
  it('renders badge text', () => {
    render(<Badge>Active</Badge>);
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('renders with dot indicator', () => {
    const { container } = render(<Badge dot color="success">Completed</Badge>);
    expect(screen.getByText('Completed')).toBeInTheDocument();
    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
  });

  it('renders tiny badge as a status indicator dot', () => {
    const { container } = render(<Badge size="tiny" color="danger" aria-label="Unread alerts" />);
    expect(container.querySelector('[role="status"]')).toBeInTheDocument();
  });

  it('renders legacy variants without breaking', () => {
    const { rerender } = render(<Badge variant="error">Critical</Badge>);
    expect(screen.getByText('Critical')).toBeInTheDocument();

    rerender(<Badge variant="warning">Pending</Badge>);
    expect(screen.getByText('Pending')).toBeInTheDocument();

    rerender(<Badge variant="primary">Primary</Badge>);
    expect(screen.getByText('Primary')).toBeInTheDocument();
  });

  it('renders all appearance variants', () => {
    const { rerender } = render(<Badge appearance="filled" color="brand">Filled</Badge>);
    expect(screen.getByText('Filled')).toBeInTheDocument();

    rerender(<Badge appearance="ghost" color="brand">Ghost</Badge>);
    expect(screen.getByText('Ghost')).toBeInTheDocument();

    rerender(<Badge appearance="outline" color="brand">Outline</Badge>);
    expect(screen.getByText('Outline')).toBeInTheDocument();

    rerender(<Badge appearance="tint" color="brand">Tint</Badge>);
    expect(screen.getByText('Tint')).toBeInTheDocument();
  });

  it('renders shapes properly', () => {
    const { rerender } = render(<Badge shape="rounded">Rounded</Badge>);
    expect(screen.getByText('Rounded')).toBeInTheDocument();

    rerender(<Badge shape="circular">Circular</Badge>);
    expect(screen.getByText('Circular')).toBeInTheDocument();

    rerender(<Badge shape="square">Square</Badge>);
    expect(screen.getByText('Square')).toBeInTheDocument();
  });

  it('renders with vector icon before and after', () => {
    const testIcon = <svg data-testid="test-icon" width="12" height="12"><circle cx="6" cy="6" r="6" /></svg>;

    const { rerender } = render(<Badge icon={testIcon} iconPosition="before">With Icon</Badge>);
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();

    rerender(<Badge icon={testIcon} iconPosition="after">Trailing Icon</Badge>);
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });
});

describe('CounterBadge', () => {
  it('renders count number', () => {
    render(<CounterBadge count={5} />);
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('formats overflow count with plus sign', () => {
    render(<CounterBadge count={150} overflowCount={99} />);
    expect(screen.getByText('99+')).toBeInTheDocument();
  });

  it('does not render when count is zero and showZero is false', () => {
    const { container } = render(<CounterBadge count={0} showZero={false} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders when count is zero and showZero is true', () => {
    render(<CounterBadge count={0} showZero={true} />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('renders dot when count is zero and dot is true', () => {
    const { container } = render(<CounterBadge count={0} dot={true} aria-label="New messages" />);
    expect(container.querySelector('[role="status"]')).toBeInTheDocument();
  });
});

describe('PresenceBadge', () => {
  it('renders available presence badge with accessible label', () => {
    render(<PresenceBadge status="available" />);
    expect(screen.getByLabelText('Available')).toBeInTheDocument();
  });

  it('renders busy presence badge', () => {
    render(<PresenceBadge status="busy" />);
    expect(screen.getByLabelText('Busy')).toBeInTheDocument();
  });

  it('renders away presence badge', () => {
    render(<PresenceBadge status="away" />);
    expect(screen.getByLabelText('Away')).toBeInTheDocument();
  });

  it('renders out-of-office modifier', () => {
    const { container } = render(<PresenceBadge status="out-of-office" outOfOffice />);
    expect(screen.getByLabelText('Out of Office')).toBeInTheDocument();
    expect(container.querySelector('[role="status"]')).toBeInTheDocument();
  });
});

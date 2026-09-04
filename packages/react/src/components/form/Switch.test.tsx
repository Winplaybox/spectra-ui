// packages/react/src/components/form/Switch.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Switch } from './Switch';

describe('Switch', () => {
  it('renders with label', () => {
    render(<Switch label="Notifications" />);
    expect(screen.getByLabelText('Notifications')).toBeInTheDocument();
  });

  it('renders as checked initially when defaultChecked is true', () => {
    render(<Switch defaultChecked />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('handles toggle changes', async () => {
    const handleChange = vi.fn();
    render(<Switch onChange={handleChange} />);

    const switchInput = screen.getByRole('checkbox');
    await userEvent.click(switchInput);

    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('supports controlled state', async () => {
    const { rerender } = render(<Switch checked={false} onChange={() => {}} />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();

    rerender(<Switch checked={true} onChange={() => {}} />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('can be disabled', () => {
    render(<Switch disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('displays description', () => {
    render(<Switch description="Enable notifications" />);
    expect(screen.getByText('Enable notifications')).toBeInTheDocument();
  });

  it('shows required indicator when required', () => {
    render(<Switch label="Accept terms" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('supports different sizes', () => {
    const { rerender } = render(<Switch size="sm" />);
    expect(screen.getByRole('checkbox')).toHaveClass('sm');

    rerender(<Switch size="lg" />);
    expect(screen.getByRole('checkbox')).toHaveClass('lg');
  });

  it('associates description via aria-describedby', () => {
    render(<Switch description="Additional info" />);
    const input = screen.getByRole('checkbox');
    expect(input).toHaveAttribute('aria-describedby');
  });
});

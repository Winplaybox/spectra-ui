import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders unchecked by default', () => {
    render(<Checkbox label="Accept terms" />);
    const input = screen.getByRole('checkbox', { name: /Accept terms/i }) as HTMLInputElement;
    expect(input.checked).toBe(false);
  });

  it('handles toggle changes in uncontrolled mode', () => {
    const handleChange = vi.fn();
    render(<Checkbox label="Accept terms" onChange={handleChange} />);
    const input = screen.getByRole('checkbox', { name: /Accept terms/i });
    fireEvent.click(input);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('respects controlled checked state', () => {
    const { rerender } = render(<Checkbox label="Notifications" checked={true} onChange={() => {}} />);
    const input = screen.getByRole('checkbox', { name: /Notifications/i }) as HTMLInputElement;
    expect(input.checked).toBe(true);

    rerender(<Checkbox label="Notifications" checked={false} onChange={() => {}} />);
    expect(input.checked).toBe(false);
  });

  it('renders disabled state properly', () => {
    const handleChange = vi.fn();
    render(<Checkbox label="Disabled option" disabled onChange={handleChange} />);
    const input = screen.getByRole('checkbox', { name: /Disabled option/i }) as HTMLInputElement;
    expect(input.disabled).toBe(true);
    fireEvent.click(input);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('renders error message and connects aria-invalid', () => {
    render(<Checkbox label="Consent" error="Consent is required" />);
    const input = screen.getByRole('checkbox', { name: /Consent/i });
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('Consent is required')).toBeInTheDocument();
  });

  it('renders description with aria-describedby', () => {
    render(<Checkbox label="Newsletter" description="Weekly tech digest" />);
    const input = screen.getByRole('checkbox', { name: /Newsletter/i });
    expect(input).toHaveAttribute('aria-describedby');
    expect(screen.getByText('Weekly tech digest')).toBeInTheDocument();
  });
});

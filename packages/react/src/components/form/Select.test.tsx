import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Select } from './Select';

const sampleOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
];

describe('Select', () => {
  it('renders select with options and handles selection change', () => {
    const handleChange = vi.fn();
    render(<Select label="Favorite Fruit" options={sampleOptions} onChange={handleChange} defaultValue="apple" />);

    const select = screen.getByRole('combobox', { name: /Favorite Fruit/i }) as HTMLSelectElement;
    expect(select.value).toBe('apple');

    fireEvent.change(select, { target: { value: 'cherry' } });
    expect(handleChange).toHaveBeenCalled();
    expect(select.value).toBe('cherry');
  });

  it('renders error message and connects aria-invalid', () => {
    render(<Select label="Role" options={sampleOptions} error="Role is required" />);
    const select = screen.getByRole('combobox', { name: /Role/i });
    expect(select).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('Role is required')).toBeInTheDocument();
  });

  it('respects disabled state', () => {
    render(<Select label="Disabled Select" options={sampleOptions} disabled />);
    const select = screen.getByRole('combobox', { name: /Disabled Select/i }) as HTMLSelectElement;
    expect(select.disabled).toBe(true);
  });
});

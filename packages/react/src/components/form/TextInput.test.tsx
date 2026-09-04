// packages/react/src/components/form/TextInput.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { TextInput } from './TextInput';

describe('TextInput', () => {
  it('renders with label', () => {
    render(<TextInput label="Email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('displays error message', () => {
    render(<TextInput label="Email" error="Invalid email" />);
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
  });

  it('displays description', () => {
    render(<TextInput label="Password" description="Min 8 characters" />);
    expect(screen.getByText('Min 8 characters')).toBeInTheDocument();
  });

  it('handles input changes', async () => {
    const handleChange = vi.fn();
    render(<TextInput onChange={handleChange} />);
    
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'hello');
    
    expect(handleChange).toHaveBeenCalled();
    expect(input).toHaveValue('hello');
  });

  it('can be disabled', () => {
    render(<TextInput disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('supports required state', () => {
    render(<TextInput label="Name" required />);
    expect(screen.getByLabelText(/Name/)).toHaveAttribute('required');
  });

  it('supports placeholder', () => {
    render(<TextInput placeholder="Enter text..." />);
    expect(screen.getByPlaceholderText('Enter text...')).toBeInTheDocument();
  });

  it('renders with icon', () => {
    render(<TextInput icon="🔍" iconPosition="left" />);
    expect(screen.getByText('🔍')).toBeInTheDocument();
  });

  it('associates error message via aria-describedby', () => {
    render(<TextInput error="This field is required" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-describedby');
  });

  it('supports different variants', () => {
    const { rerender } = render(<TextInput variant="default" />);
    let input = screen.getByRole('textbox');
    expect(input).toHaveClass('default');

    rerender(<TextInput variant="filled" />);
    input = screen.getByRole('textbox');
    expect(input).toHaveClass('filled');
  });
});

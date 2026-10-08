import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { LiveIndicator } from './LiveIndicator';

describe('LiveIndicator (React Web)', () => {
  it('renders default LIVE label with status role', () => {
    render(<LiveIndicator />);
    const indicator = screen.getByRole('status');
    expect(indicator).toBeInTheDocument();
    expect(indicator).toHaveTextContent('LIVE');
    expect(indicator).toHaveAttribute('aria-live', 'polite');
  });

  it('renders custom label and status', () => {
    render(<LiveIndicator label="RECORDING" status="busy" />);
    const indicator = screen.getByRole('status');
    expect(indicator).toHaveTextContent('RECORDING');
  });

  it('renders dot-only without text when label is null', () => {
    render(<LiveIndicator label={null} />);
    const indicator = screen.getByRole('status');
    expect(indicator.textContent).toBe('');
  });

  it('renders beacon animation variant without crash', () => {
    render(<LiveIndicator variant="beacon" status="online" />);
    const indicator = screen.getByRole('status');
    expect(indicator).toBeInTheDocument();
  });
});

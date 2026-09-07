import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import React from 'react';
import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
  it('shows tooltip content on mouse enter and hides on mouse leave', () => {
    vi.useFakeTimers();
    render(
      <Tooltip content="Helper text" delay={50}>
        <button type="button">Hover me</button>
      </Tooltip>
    );

    const button = screen.getByRole('button', { name: 'Hover me' });
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

    fireEvent.mouseEnter(button);
    act(() => {
      vi.advanceTimersByTime(60);
    });

    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveTextContent('Helper text');
    expect(button).toHaveAttribute('aria-describedby', tooltip.id);

    fireEvent.mouseLeave(button);
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    vi.useRealTimers();
  });

  it('shows tooltip on focus and hides on blur', () => {
    vi.useFakeTimers();
    render(
      <Tooltip content="Keyboard hint" delay={0}>
        <button type="button">Focus me</button>
      </Tooltip>
    );

    const button = screen.getByRole('button', { name: 'Focus me' });
    fireEvent.focus(button);
    act(() => {
      vi.advanceTimersByTime(10);
    });

    expect(screen.getByRole('tooltip')).toHaveTextContent('Keyboard hint');

    fireEvent.blur(button);
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    vi.useRealTimers();
  });
});

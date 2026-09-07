import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Radio, RadioGroup } from './Radio';

describe('Radio and RadioGroup', () => {
  it('selects radio item on click and triggers onChange', () => {
    const handleChange = vi.fn();
    render(
      <RadioGroup defaultValue="starter" onChange={handleChange}>
        <Radio value="free" label="Free Plan" />
        <Radio value="starter" label="Starter Plan" />
        <Radio value="pro" label="Pro Plan" />
      </RadioGroup>
    );

    const starter = screen.getByRole('radio', { name: /Starter Plan/i }) as HTMLInputElement;
    expect(starter.checked).toBe(true);

    const pro = screen.getByRole('radio', { name: /Pro Plan/i }) as HTMLInputElement;
    expect(pro.checked).toBe(false);

    fireEvent.click(pro);
    expect(handleChange).toHaveBeenCalledWith('pro');
  });

  it('handles controlled RadioGroup', () => {
    const { rerender } = render(
      <RadioGroup value="pro">
        <Radio value="free" label="Free Plan" />
        <Radio value="pro" label="Pro Plan" />
      </RadioGroup>
    );

    const pro = screen.getByRole('radio', { name: /Pro Plan/i }) as HTMLInputElement;
    expect(pro.checked).toBe(true);

    rerender(
      <RadioGroup value="free">
        <Radio value="free" label="Free Plan" />
        <Radio value="pro" label="Pro Plan" />
      </RadioGroup>
    );

    const free = screen.getByRole('radio', { name: /Free Plan/i }) as HTMLInputElement;
    expect(free.checked).toBe(true);
  });

  it('respects disabled state on Radio and RadioGroup', () => {
    const handleChange = vi.fn();
    render(
      <RadioGroup disabled onChange={handleChange}>
        <Radio value="option1" label="Option 1" />
      </RadioGroup>
    );

    const radio = screen.getByRole('radio', { name: /Option 1/i }) as HTMLInputElement;
    expect(radio.disabled).toBe(true);
    fireEvent.click(radio);
    expect(handleChange).not.toHaveBeenCalled();
  });
});

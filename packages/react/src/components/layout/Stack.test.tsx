// packages/react/src/components/layout/Stack.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Stack } from './Stack';

describe('Stack', () => {
  it('renders children', () => {
    render(
      <Stack>
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('supports direction prop', () => {
    const { rerender } = render(
      <Stack direction="row">
        <div>Row</div>
      </Stack>
    );
    expect(screen.getByText('Row')).toHaveClass('row');

    rerender(
      <Stack direction="column">
        <div>Column</div>
      </Stack>
    );
    expect(screen.getByText('Column')).toHaveClass('column');
  });

  it('supports align prop', () => {
    const { rerender } = render(
      <Stack align="center">
        <div>Centered</div>
      </Stack>
    );
    expect(screen.getByText('Centered')).toHaveClass('center');

    rerender(
      <Stack align="flex-start">
        <div>Start</div>
      </Stack>
    );
    expect(screen.getByText('Start')).toHaveClass('flex-start');
  });

  it('supports justify prop', () => {
    const { rerender } = render(
      <Stack justify="space-between">
        <div>Spaced</div>
      </Stack>
    );
    expect(screen.getByText('Spaced')).toHaveClass('space-between');

    rerender(
      <Stack justify="center">
        <div>Centered</div>
      </Stack>
    );
    expect(screen.getByText('Centered')).toHaveClass('center');
  });

  it('supports gap prop', () => {
    const { rerender } = render(
      <Stack gap="sm">
        <div>Small Gap</div>
      </Stack>
    );
    expect(screen.getByText('Small Gap')).toHaveClass('sm');

    rerender(
      <Stack gap="lg">
        <div>Large Gap</div>
      </Stack>
    );
    expect(screen.getByText('Large Gap')).toHaveClass('lg');
  });

  it('renders as div', () => {
    const { container } = render(
      <Stack>
        <div>Content</div>
      </Stack>
    );
    expect(container.querySelector('div > div')).toBeInTheDocument();
  });
});

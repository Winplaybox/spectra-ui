// packages/react/src/components/layout/Text.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Text } from './Text';

describe('Text', () => {
  it('renders text content', () => {
    render(<Text>Hello World</Text>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('supports variant prop', () => {
    const { rerender } = render(<Text variant="heading">Heading</Text>);
    expect(screen.getByText('Heading')).toHaveClass('heading');

    rerender(<Text variant="body">Body</Text>);
    expect(screen.getByText('Body')).toHaveClass('body');
  });

  it('supports size prop', () => {
    const { rerender } = render(<Text size="sm">Small</Text>);
    expect(screen.getByText('Small')).toHaveClass('sm');

    rerender(<Text size="lg">Large</Text>);
    expect(screen.getByText('Large')).toHaveClass('lg');
  });

  it('supports weight prop', () => {
    const { rerender } = render(<Text weight="regular">Regular</Text>);
    expect(screen.getByText('Regular')).toHaveClass('regular');

    rerender(<Text weight="bold">Bold</Text>);
    expect(screen.getByText('Bold')).toHaveClass('bold');
  });

  it('supports color prop', () => {
    const { rerender } = render(<Text color="primary">Primary</Text>);
    expect(screen.getByText('Primary')).toHaveClass('primary');

    rerender(<Text color="secondary">Secondary</Text>);
    expect(screen.getByText('Secondary')).toHaveClass('secondary');
  });

  it('supports truncate prop', () => {
    render(<Text truncate>This is a long text that should be truncated</Text>);
    const text = screen.getByText(/This is a long text/);
    expect(text).toHaveClass('truncate');
  });

  it('supports align prop', () => {
    const { rerender } = render(<Text align="center">Centered</Text>);
    expect(screen.getByText('Centered')).toHaveClass('center');

    rerender(<Text align="right">Right aligned</Text>);
    expect(screen.getByText('Right aligned')).toHaveClass('right');
  });
});

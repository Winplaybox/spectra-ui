// packages/react/src/components/layout/Container.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Container } from './Container';

describe('Container', () => {
  it('renders children', () => {
    render(<Container>Content</Container>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('supports size prop', () => {
    const { rerender } = render(<Container size="sm">Small</Container>);
    expect(screen.getByText('Small')).toHaveClass('sm');

    rerender(<Container size="lg">Large</Container>);
    expect(screen.getByText('Large')).toHaveClass('lg');
  });

  it('supports centered prop', () => {
    render(<Container centered>Centered</Container>);
    expect(screen.getByText('Centered')).toHaveClass('centered');
  });

  it('supports fullHeight prop', () => {
    render(<Container fullHeight>Full Height</Container>);
    expect(screen.getByText('Full Height')).toHaveClass('fullHeight');
  });

  it('supports padding prop', () => {
    const { rerender } = render(<Container padding="md">Medium</Container>);
    expect(screen.getByText('Medium')).toHaveClass('md');

    rerender(<Container padding="lg">Large</Container>);
    expect(screen.getByText('Large')).toHaveClass('lg');
  });

  it('renders as div', () => {
    const { container } = render(<Container>Content</Container>);
    const div = container.querySelector('div');
    expect(div).toBeInTheDocument();
  });

  it('accepts custom className', () => {
    render(<Container className="custom">Custom</Container>);
    expect(screen.getByText('Custom')).toHaveClass('custom');
  });
});

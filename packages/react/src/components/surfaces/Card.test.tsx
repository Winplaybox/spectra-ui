// packages/react/src/components/surfaces/Card.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Card } from './Card';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('supports padding variants', () => {
    const { rerender } = render(<Card padding="sm">Content</Card>);
    expect(screen.getByText('Content')).toHaveClass('sm');

    rerender(<Card padding="lg">Content</Card>);
    expect(screen.getByText('Content')).toHaveClass('lg');
  });

  it('supports variant prop', () => {
    const { rerender } = render(<Card variant="default">Content</Card>);
    expect(screen.getByText('Content')).toHaveClass('default');

    rerender(<Card variant="bordered">Content</Card>);
    expect(screen.getByText('Content')).toHaveClass('bordered');
  });

  it('can be interactive', async () => {
    const handleClick = vi.fn();
    render(
      <Card interactive onClick={handleClick}>
        Clickable
      </Card>
    );

    const card = screen.getByRole('button');
    await userEvent.click(card);
    expect(handleClick).toHaveBeenCalled();
  });

  it('sets proper role and tabindex for interactive cards', () => {
    render(<Card interactive>Interactive Card</Card>);
    const card = screen.getByRole('button');
    expect(card).toHaveAttribute('tabindex', '0');
  });

  it('renders as div when not interactive', () => {
    render(<Card>Regular Card</Card>);
    const card = screen.getByText('Regular Card');
    expect(card.tagName).toBe('DIV');
  });
});

// packages/react/src/components/actions/Button.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';
import { CompoundButton } from './CompoundButton';
import { MenuButton } from './MenuButton';
import { ToggleButton } from './ToggleButton';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('supports variant prop', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole('button')).toHaveClass('primary');

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toHaveClass('secondary');
  });

  it('supports appearance prop (Spectra)', () => {
    const { rerender } = render(<Button appearance="outline">Outline</Button>);
    expect(screen.getByRole('button')).toHaveClass('outline');

    rerender(<Button appearance="subtle">Subtle</Button>);
    expect(screen.getByRole('button')).toHaveClass('subtle');

    rerender(<Button appearance="transparent">Transparent</Button>);
    expect(screen.getByRole('button')).toHaveClass('transparent');
  });

  it('supports shape prop (Spectra)', () => {
    const { rerender } = render(<Button shape="circular">Circular</Button>);
    expect(screen.getByRole('button')).toHaveClass('circular');

    rerender(<Button shape="square">Square</Button>);
    expect(screen.getByRole('button')).toHaveClass('square');
  });

  it('supports size prop', () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByRole('button')).toHaveClass('sm');

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByRole('button')).toHaveClass('lg');

    rerender(<Button size="small">Small alias</Button>);
    expect(screen.getByRole('button')).toHaveClass('sm');
  });

  it('can be disabled', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('supports disabledFocusable (WCAG 2.1 AA keyboard focusable disabled)', async () => {
    const handleClick = vi.fn();
    render(<Button disabledFocusable onClick={handleClick}>Focusable Disabled</Button>);
    const button = screen.getByRole('button');

    expect(button).not.toBeDisabled();
    expect(button).toHaveAttribute('aria-disabled', 'true');
    expect(button).toHaveAttribute('tabIndex', '0');

    await userEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('shows loading state', () => {
    render(<Button isLoading>Loading</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-busy', 'true');
  });

  it('handles click events', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('supports full width', () => {
    render(<Button fullWidth>Full Width</Button>);
    expect(screen.getByRole('button')).toHaveClass('fullWidth');
  });

  it('renders with vector icon', () => {
    render(
      <Button icon={<span data-testid="test-icon">Icon</span>} iconPosition="left">
        With Icon
      </Button>
    );
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('supports accessibility attributes', () => {
    render(<Button aria-label="Custom label">Button</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-label');
  });
});

describe('MenuButton', () => {
  it('renders with chevron icon and aria-haspopup="menu"', () => {
    render(
      <MenuButton
        menuItems={[
          { label: 'Option 1', onClick: vi.fn() },
          { label: 'Option 2', onClick: vi.fn() },
        ]}
      >
        Options
      </MenuButton>
    );

    const button = screen.getByRole('button', { name: /Options/i });
    expect(button).toHaveAttribute('aria-haspopup', 'menu');
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('opens menu on click and handles item selection', async () => {
    const handleSelect = vi.fn();
    render(
      <MenuButton
        menuItems={[
          { label: 'Edit Profile', onClick: handleSelect },
          { label: 'Log Out' },
        ]}
      >
        User Actions
      </MenuButton>
    );

    const button = screen.getByRole('button', { name: /User Actions/i });
    await userEvent.click(button);

    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('menu')).toBeInTheDocument();

    const editItem = screen.getByRole('menuitem', { name: 'Edit Profile' });
    await userEvent.click(editItem);

    expect(handleSelect).toHaveBeenCalledTimes(1);
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });
});

describe('ToggleButton', () => {
  it('renders with aria-pressed and toggles state on click', async () => {
    const handleToggle = vi.fn();
    render(<ToggleButton onToggle={handleToggle}>Mute Audio</ToggleButton>);

    const button = screen.getByRole('button', { name: 'Mute Audio' });
    expect(button).toHaveAttribute('aria-pressed', 'false');

    await userEvent.click(button);
    expect(button).toHaveAttribute('aria-pressed', 'true');
    expect(button).toHaveClass('toggleChecked');
    expect(handleToggle).toHaveBeenCalledWith(true);

    await userEvent.click(button);
    expect(button).toHaveAttribute('aria-pressed', 'false');
    expect(handleToggle).toHaveBeenCalledWith(false);
  });
});

describe('CompoundButton', () => {
  it('renders primary label and secondaryContent subtitle', () => {
    render(
      <CompoundButton secondaryContent="Create and configure new workspace">
        New Workspace
      </CompoundButton>
    );

    expect(screen.getByRole('button', { name: /New Workspace/i })).toBeInTheDocument();
    expect(screen.getByText('Create and configure new workspace')).toBeInTheDocument();
  });
});

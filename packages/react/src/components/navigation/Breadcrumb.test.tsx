import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import {
  Breadcrumb,
  Breadcrumbs,
  BreadcrumbItem,
  BreadcrumbButton,
  BreadcrumbDivider,
} from './Breadcrumb';

describe('Breadcrumb', () => {
  it('renders nav element with accessible landmark and ordered list', () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbButton href="/">Home</BreadcrumbButton>
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem current>
          <BreadcrumbButton current>Library</BreadcrumbButton>
        </BreadcrumbItem>
      </Breadcrumb>
    );

    const nav = screen.getByRole('navigation', { name: /breadcrumb/i });
    expect(nav).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });

  it('marks current page with aria-current="page"', () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbButton href="/">Home</BreadcrumbButton>
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem current>
          <BreadcrumbButton current>Settings</BreadcrumbButton>
        </BreadcrumbItem>
      </Breadcrumb>
    );

    const currentButton = screen.getByText('Settings');
    expect(currentButton).toHaveAttribute('aria-current', 'page');
  });

  it('handles click events on interactive breadcrumb buttons', () => {
    const handleClick = vi.fn();
    render(
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbButton onClick={handleClick}>Projects</BreadcrumbButton>
        </BreadcrumbItem>
      </Breadcrumb>
    );

    fireEvent.click(screen.getByText('Projects'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders data-driven items array correctly', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Documents', href: '/docs' },
      { label: 'Project Plans', isCurrent: true },
    ];

    render(<Breadcrumb items={items} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Documents')).toBeInTheDocument();
    const currentItem = screen.getByText('Project Plans');
    expect(currentItem).toBeInTheDocument();
    expect(currentItem).toHaveAttribute('aria-current', 'page');
  });

  it('collapses items into an overflow menu when maxItems is exceeded', () => {
    const items = [
      { label: 'Root', href: '/' },
      { label: 'Level 1', href: '/1' },
      { label: 'Level 2', href: '/2' },
      { label: 'Level 3', href: '/3' },
      { label: 'Current Page', isCurrent: true },
    ];

    render(<Breadcrumb items={items} maxItems={3} />);

    // Root and Current Page should be visible
    expect(screen.getByText('Root')).toBeInTheDocument();
    expect(screen.getByText('Current Page')).toBeInTheDocument();

    // Intermediate items Level 1 and Level 2 should be in overflow
    expect(screen.queryByText('Level 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Level 2')).not.toBeInTheDocument();

    // Overflow button exists
    const overflowBtn = screen.getByRole('button', { name: /show more breadcrumb items/i });
    expect(overflowBtn).toBeInTheDocument();

    // Clicking overflow button reveals the menu
    fireEvent.click(overflowBtn);
    expect(screen.getByRole('menu')).toBeInTheDocument();
    expect(screen.getByText('Level 1')).toBeInTheDocument();
    expect(screen.getByText('Level 2')).toBeInTheDocument();
  });

  it('supports slash divider type', () => {
    render(
      <Breadcrumb dividerType="slash">
        <BreadcrumbItem>
          <BreadcrumbButton href="/">Root</BreadcrumbButton>
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem current>
          <BreadcrumbButton current>Folder</BreadcrumbButton>
        </BreadcrumbItem>
      </Breadcrumb>
    );

    expect(screen.getByText('/')).toBeInTheDocument();
  });

  it('prevents click when disabled or disabledFocusable', () => {
    const handleClick = vi.fn();
    render(
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbButton disabled onClick={handleClick}>
            Disabled
          </BreadcrumbButton>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbButton disabledFocusable onClick={handleClick}>
            Disabled Focusable
          </BreadcrumbButton>
        </BreadcrumbItem>
      </Breadcrumb>
    );

    const disabledBtn = screen.getByText('Disabled');
    fireEvent.click(disabledBtn);
    expect(handleClick).not.toHaveBeenCalled();

    const focusableBtn = screen.getByText('Disabled Focusable');
    expect(focusableBtn).toHaveAttribute('aria-disabled', 'true');
    fireEvent.click(focusableBtn);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('maintains full backward compatibility with Breadcrumbs export', () => {
    const items = [
      { label: 'Dashboard', href: '/dash' },
      { label: 'Analytics' },
    ];

    render(<Breadcrumbs items={items} />);

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Analytics')).toBeInTheDocument();
  });

  it('supports size scales small, medium, and large', () => {
    const { rerender } = render(
      <Breadcrumb size="small">
        <BreadcrumbItem>
          <BreadcrumbButton href="/">Home</BreadcrumbButton>
        </BreadcrumbItem>
      </Breadcrumb>
    );
    expect(screen.getByRole('list')).toHaveClass(/small/);

    rerender(
      <Breadcrumb size="large">
        <BreadcrumbItem>
          <BreadcrumbButton href="/">Home</BreadcrumbButton>
        </BreadcrumbItem>
      </Breadcrumb>
    );
    expect(screen.getByRole('list')).toHaveClass(/large/);
  });

  it('supports custom divider element', () => {
    render(
      <Breadcrumb divider={<span data-testid="custom-dot">•</span>}>
        <BreadcrumbItem>
          <BreadcrumbButton href="/">A</BreadcrumbButton>
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem>
          <BreadcrumbButton href="/b">B</BreadcrumbButton>
        </BreadcrumbItem>
      </Breadcrumb>
    );

    expect(screen.getByTestId('custom-dot')).toBeInTheDocument();
  });

  it('supports truncation and tooltip', () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbButton
            truncate
            maxWidth={100}
            tooltip="Very Long Breadcrumb Directory Name That Truncates"
          >
            Very Long Breadcrumb Directory Name That Truncates
          </BreadcrumbButton>
        </BreadcrumbItem>
      </Breadcrumb>
    );

    const btn = screen.getByTitle('Very Long Breadcrumb Directory Name That Truncates');
    expect(btn).toBeInTheDocument();
  });

  it('supports custom overflow renderer', () => {
    const items = [
      { label: 'Root' },
      { label: 'Deep 1' },
      { label: 'Deep 2' },
      { label: 'End' },
    ];

    render(
      <Breadcrumb
        items={items}
        maxItems={2}
        renderOverflow={(overflowItems) => (
          <span data-testid="custom-overflow">+{overflowItems.length} more</span>
        )}
      />
    );

    expect(screen.getByTestId('custom-overflow')).toHaveTextContent('+2 more');
  });
});

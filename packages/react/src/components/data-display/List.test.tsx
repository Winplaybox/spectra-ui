import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { List, ListItem, ListItemText } from './List';

describe('List and ListItem', () => {
  it('renders list items with text', () => {
    render(
      <List>
        <ListItem>
          <ListItemText primary="Settings" secondary="System preferences" />
        </ListItem>
      </List>
    );

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByRole('listitem')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('System preferences')).toBeInTheDocument();
  });

  it('handles interactive item clicks and Enter key', () => {
    const handleClick = vi.fn();
    render(
      <List>
        <ListItem interactive onClick={handleClick}>
          <ListItemText primary="Interactive Item" />
        </ListItem>
      </List>
    );

    const item = screen.getByRole('listitem');
    expect(item).toHaveAttribute('tabindex', '0');

    fireEvent.click(item);
    expect(handleClick).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(item, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('does not trigger click when disabled', () => {
    const handleClick = vi.fn();
    render(
      <List>
        <ListItem interactive disabled onClick={handleClick}>
          <ListItemText primary="Disabled Item" />
        </ListItem>
      </List>
    );

    const item = screen.getByRole('listitem');
    fireEvent.click(item);
    expect(handleClick).not.toHaveBeenCalled();
  });
});

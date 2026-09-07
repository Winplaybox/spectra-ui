import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, ListItemAction } from './List';
import { ChevronRightIcon, UserIcon, InfoIcon } from '@spectra/icons';

const meta: Meta<typeof List> = {
  title: 'Data Display/List',
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  render: () => (
    <div style={{ width: '360px' }}>
      <List>
        <ListItem interactive>
          <ListItemIcon>
            <UserIcon size={18} />
          </ListItemIcon>
          <ListItemText primary="User Profile" secondary="Manage account credentials" />
          <ListItemAction>
            <ChevronRightIcon size={16} />
          </ListItemAction>
        </ListItem>
        <ListItem interactive>
          <ListItemIcon>
            <InfoIcon size={18} />
          </ListItemIcon>
          <ListItemText primary="System Information" secondary="Version 1.0.0 Swiss Flat" />
          <ListItemAction>
            <ChevronRightIcon size={16} />
          </ListItemAction>
        </ListItem>
      </List>
    </div>
  ),
};

export const DisabledItem: Story = {
  render: () => (
    <div style={{ width: '360px' }}>
      <List>
        <ListItem interactive>
          <ListItemText primary="Standard Feature" secondary="Available in all tiers" />
        </ListItem>
        <ListItem interactive disabled>
          <ListItemText primary="Enterprise Analytics (Locked)" secondary="Upgrade plan to access" />
        </ListItem>
      </List>
    </div>
  ),
};

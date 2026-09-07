import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Feedback/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
};

export const WithDot: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge dot variant="success">Online</Badge>
      <Badge dot variant="error">Offline</Badge>
      <Badge dot variant="warning">Away</Badge>
      <Badge dot variant="info">Updating</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Badge size="sm" variant="primary">Small</Badge>
      <Badge size="md" variant="primary">Medium (Default)</Badge>
      <Badge size="lg" variant="primary">Large</Badge>
    </div>
  ),
};

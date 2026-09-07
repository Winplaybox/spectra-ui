import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    name: 'Max Miedinger',
  },
};

export const WithImage: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    alt: 'Elena Rostova',
    name: 'Elena Rostova',
  },
};

export const WithStatus: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Avatar name="Sarah Connor" status="online" />
      <Avatar name="John Doe" status="busy" />
      <Avatar name="Alex Vance" status="away" />
      <Avatar name="David Miller" status="offline" />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Avatar shape="circle" name="Circular Avatar" />
      <Avatar shape="square" name="Square Avatar" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Avatar size="xs" name="XS" />
      <Avatar size="sm" name="SM" />
      <Avatar size="md" name="MD" />
      <Avatar size="lg" name="LG" />
      <Avatar size="xl" name="XL" />
    </div>
  ),
};

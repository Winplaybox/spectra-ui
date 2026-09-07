import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tooltip } from './Tooltip';
import { Button } from '../actions/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip content="Archive this document permanently">
      <Button variant="secondary">Hover me</Button>
    </Tooltip>
  ),
};

export const Placements: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', padding: '40px' }}>
      <Tooltip content="Tooltip on Top" placement="top">
        <Button variant="secondary">Top</Button>
      </Tooltip>
      <Tooltip content="Tooltip on Bottom" placement="bottom">
        <Button variant="secondary">Bottom</Button>
      </Tooltip>
      <Tooltip content="Tooltip on Left" placement="left">
        <Button variant="secondary">Left</Button>
      </Tooltip>
      <Tooltip content="Tooltip on Right" placement="right">
        <Button variant="secondary">Right</Button>
      </Tooltip>
    </div>
  ),
};

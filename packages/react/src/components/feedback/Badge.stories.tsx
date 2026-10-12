import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Badge, CounterBadge, PresenceBadge } from './Badge';

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
    appearance: 'filled',
    color: 'brand',
    size: 'medium',
    shape: 'rounded',
  },
};

export const Appearances: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Badge appearance="filled" color="brand">Filled</Badge>
      <Badge appearance="ghost" color="brand">Ghost</Badge>
      <Badge appearance="outline" color="brand">Outline</Badge>
      <Badge appearance="tint" color="brand">Tint</Badge>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge color="brand">Brand</Badge>
      <Badge color="danger">Danger</Badge>
      <Badge color="important">Important</Badge>
      <Badge color="informative">Informative</Badge>
      <Badge color="severe">Severe</Badge>
      <Badge color="subtle">Subtle</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Badge size="tiny" color="danger" aria-label="Notification dot" />
      <Badge size="extra-small" color="brand">Extra Small</Badge>
      <Badge size="small" color="brand">Small</Badge>
      <Badge size="medium" color="brand">Medium</Badge>
      <Badge size="large" color="brand">Large</Badge>
      <Badge size="extra-large" color="brand">Extra Large</Badge>
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Badge shape="rounded" color="brand">Rounded</Badge>
      <Badge shape="circular" color="brand">Circular</Badge>
      <Badge shape="square" color="brand">Square</Badge>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => {
    const starIcon = (
      <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 1.5l2.1 4.3 4.7.7-3.4 3.3.8 4.7L8 12.2l-4.2 2.3.8-4.7-3.4-3.3 4.7-.7L8 1.5z" />
      </svg>
    );

    return (
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Badge icon={starIcon} color="brand">Featured</Badge>
        <Badge icon={starIcon} iconPosition="after" color="success">Verified</Badge>
        <Badge dot color="warning">Pending Review</Badge>
      </div>
    );
  },
};

export const CounterBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <CounterBadge count={3} color="brand" />
      <CounterBadge count={42} color="important" />
      <CounterBadge count={128} overflowCount={99} color="danger" />
      <CounterBadge count={0} showZero color="subtle" />
      <CounterBadge count={0} dot color="brand" aria-label="New alerts" />
    </div>
  ),
};

export const PresenceBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <PresenceBadge status="available" size="medium" />
      <PresenceBadge status="busy" size="medium" />
      <PresenceBadge status="away" size="medium" />
      <PresenceBadge status="dnd" size="medium" />
      <PresenceBadge status="offline" size="medium" />
      <PresenceBadge status="out-of-office" outOfOffice size="medium" />
    </div>
  ),
};

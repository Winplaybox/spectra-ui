import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Radio, RadioGroup } from './Radio';

const meta: Meta<typeof RadioGroup> = {
  title: 'Form/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="standard">
      <Radio value="standard" label="Standard Delivery" description="Arrives in 3-5 business days" />
      <Radio value="express" label="Express Delivery" description="Arrives tomorrow" />
      <Radio value="overnight" label="Overnight Priority" description="Arrives by 9:00 AM" />
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup orientation="horizontal" defaultValue="credit">
      <Radio value="credit" label="Credit Card" />
      <Radio value="paypal" label="PayPal" />
      <Radio value="apple" label="Apple Pay" />
    </RadioGroup>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <RadioGroup size="sm" defaultValue="sm1">
        <Radio value="sm1" label="Small Option 1" />
        <Radio value="sm2" label="Small Option 2" />
      </RadioGroup>
      <RadioGroup size="md" defaultValue="md1">
        <Radio value="md1" label="Medium Option 1" />
        <Radio value="md2" label="Medium Option 2" />
      </RadioGroup>
      <RadioGroup size="lg" defaultValue="lg1">
        <Radio value="lg1" label="Large Option 1" />
        <Radio value="lg2" label="Large Option 2" />
      </RadioGroup>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="opt1" disabled>
      <Radio value="opt1" label="Disabled Selected" />
      <Radio value="opt2" label="Disabled Unselected" />
    </RadioGroup>
  ),
};

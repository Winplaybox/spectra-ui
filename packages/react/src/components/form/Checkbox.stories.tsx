import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Subscribe to newsletter',
    defaultChecked: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'I agree to the Terms and Conditions',
    defaultChecked: true,
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Enable Multi-Factor Authentication',
    description: 'Protect your account with extra security verifications',
    defaultChecked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Select all items',
    indeterminate: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'I accept privacy terms',
    error: 'You must accept the privacy terms to continue',
    defaultChecked: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Auto-renewal (Locked)',
    disabled: true,
    defaultChecked: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox size="sm" label="Small Checkbox" defaultChecked />
      <Checkbox size="md" label="Medium Checkbox (Default)" defaultChecked />
      <Checkbox size="lg" label="Large Checkbox" defaultChecked />
    </div>
  ),
};

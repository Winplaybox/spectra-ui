import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Select } from './Select';

const sampleOptions = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'jp', label: 'Japan' },
];

const meta: Meta<typeof Select> = {
  title: 'Form/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: 'Country',
    placeholder: 'Select a country',
    options: sampleOptions,
    defaultValue: '',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Billing Region',
    description: 'Taxes will be calculated based on your location',
    options: sampleOptions,
    defaultValue: 'us',
  },
};

export const WithError: Story = {
  args: {
    label: 'Country',
    options: sampleOptions,
    error: 'Please select a valid destination country',
    defaultValue: '',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Select size="sm" label="Small" options={sampleOptions} defaultValue="us" />
      <Select size="md" label="Medium (Default)" options={sampleOptions} defaultValue="us" />
      <Select size="lg" label="Large" options={sampleOptions} defaultValue="us" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Assigned Workspace (Locked)',
    options: sampleOptions,
    defaultValue: 'us',
    disabled: true,
  },
};

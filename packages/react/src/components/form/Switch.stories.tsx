// packages/react/src/components/form/Switch.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Form/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Toggle Feature',
  },
};

export const Checked: Story = {
  args: {
    label: 'Notifications Enabled',
    defaultChecked: true,
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Enable Dark Mode',
    description: 'Switch to dark mode for better visibility in low light',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Unavailable',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Unavailable (Enabled)',
    disabled: true,
    defaultChecked: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Small Switch',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Switch',
    size: 'lg',
  },
};

export const Required: Story = {
  args: {
    label: 'Accept Terms',
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Confirm',
    description: 'You must enable this to proceed',
  },
};

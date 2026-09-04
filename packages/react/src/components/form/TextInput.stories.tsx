// packages/react/src/components/form/TextInput.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Form/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'filled', 'outlined'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    error: { control: 'text' },
    description: { control: 'text' },
    placeholder: { control: 'text' },
  },
  args: {
    placeholder: 'Enter text...',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: 'Email' },
};

export const WithDescription: Story = {
  args: {
    label: 'Password',
    description: 'Min 8 characters, include numbers and symbols',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    error: 'Please enter a valid email',
  },
};

export const Required: Story = {
  args: {
    label: 'Full Name',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    disabled: true,
    value: 'Cannot edit',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Search',
    icon: '🔍',
    iconPosition: 'left',
    placeholder: 'Search items...',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Input',
    size: 'lg',
  },
};

export const Small: Story = {
  args: {
    label: 'Small Input',
    size: 'sm',
  },
};

export const FilledVariant: Story = {
  args: {
    label: 'Filled Input',
    variant: 'filled',
  },
};

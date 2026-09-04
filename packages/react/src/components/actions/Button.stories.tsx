// packages/react/src/components/actions/Button.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Actions/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    children: 'Click me',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Primary Variants
export const Primary: Story = {
  args: { variant: 'primary' },
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const Tertiary: Story = {
  args: { variant: 'tertiary' },
};

export const Danger: Story = {
  args: { variant: 'danger' },
};

// Sizes
export const Small: Story = {
  args: { size: 'sm', children: 'Small Button' },
};

export const Medium: Story = {
  args: { size: 'md', children: 'Medium Button' },
};

export const Large: Story = {
  args: { size: 'lg', children: 'Large Button' },
};

// States
export const Disabled: Story = {
  args: { disabled: true },
};

export const Loading: Story = {
  args: { isLoading: true, children: 'Loading...' },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
};

// With Icons
export const WithIconLeft: Story = {
  args: {
    icon: '✨',
    iconPosition: 'left',
    children: 'With Icon',
  },
};

export const WithIconRight: Story = {
  args: {
    icon: '→',
    iconPosition: 'right',
    children: 'Continue',
  },
};

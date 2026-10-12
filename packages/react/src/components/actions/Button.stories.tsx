// packages/react/src/components/actions/Button.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { SparklesIcon, ChevronRightIcon, CheckIcon } from '@winplaybox/icons';

const meta: Meta<typeof Button> = {
  title: 'Actions/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'subtle', 'transparent'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'danger'],
    },
    shape: {
      control: 'select',
      options: ['rounded', 'circular', 'square'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    disabledFocusable: { control: 'boolean' },
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

// Spectra Appearances
export const Primary: Story = {
  args: { appearance: 'primary' },
};

export const Secondary: Story = {
  args: { appearance: 'secondary' },
};

export const Outline: Story = {
  args: { appearance: 'outline', children: 'Outline Button' },
};

export const Subtle: Story = {
  args: { appearance: 'subtle', children: 'Subtle Button' },
};

export const Transparent: Story = {
  args: { appearance: 'transparent', children: 'Transparent Button' },
};

export const Danger: Story = {
  args: { variant: 'danger', children: 'Destructive' },
};

// Shapes
export const Rounded: Story = {
  args: { shape: 'rounded', children: 'Rounded' },
};

export const Circular: Story = {
  args: { shape: 'circular', children: 'Circular Pill' },
};

export const Square: Story = {
  args: { shape: 'square', children: 'Square' },
};

// Sizes
export const Small: Story = {
  args: { size: 'sm', children: 'Small Button (24px)' },
};

export const Medium: Story = {
  args: { size: 'md', children: 'Medium Button (32px)' },
};

export const Large: Story = {
  args: { size: 'lg', children: 'Large Button (40px)' },
};

// States
export const Disabled: Story = {
  args: { disabled: true, children: 'Disabled' },
};

export const DisabledFocusable: Story = {
  args: { disabledFocusable: true, children: 'Disabled Focusable (WCAG)' },
};

export const Loading: Story = {
  args: { isLoading: true, children: 'Deploying...' },
};

export const FullWidth: Story = {
  args: { fullWidth: true, children: 'Full-Width Block Button' },
};

// Authentic Vector Icons
export const WithIconLeft: Story = {
  args: {
    icon: <SparklesIcon size={16} />,
    iconPosition: 'left',
    children: 'AI Generate',
  },
};

export const WithIconRight: Story = {
  args: {
    icon: <ChevronRightIcon size={16} />,
    iconPosition: 'right',
    children: 'Continue',
  },
};

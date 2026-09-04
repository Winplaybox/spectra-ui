// packages/react/src/components/layout/Text.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Layout/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['heading', 'body', 'label', 'caption'] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] },
    weight: { control: 'select', options: ['regular', 'medium', 'semibold', 'bold'] },
    color: { control: 'select', options: ['primary', 'secondary', 'muted', 'error', 'success'] },
    align: { control: 'select', options: ['left', 'center', 'right', 'justify'] },
    truncate: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default text content',
  },
};

export const Heading: Story = {
  args: {
    variant: 'heading',
    size: 'lg',
    weight: 'bold',
    children: 'Main Heading',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    size: 'md',
    children: 'This is body text with standard size and weight.',
  },
};

export const Label: Story = {
  args: {
    variant: 'label',
    weight: 'medium',
    children: 'Form Label',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    size: 'xs',
    color: 'muted',
    children: 'This is a small caption or helper text',
  },
};

export const Bold: Story = {
  args: {
    weight: 'bold',
    children: 'Bold text content',
  },
};

export const Centered: Story = {
  args: {
    align: 'center',
    children: 'This text is centered',
  },
};

export const Truncated: Story = {
  args: {
    truncate: true,
    children: 'This is a very long text that will be truncated if it exceeds the container width to prevent overflow',
  },
};

export const ErrorColor: Story = {
  args: {
    color: 'error',
    children: 'Error message text',
  },
};

export const SuccessColor: Story = {
  args: {
    color: 'success',
    children: 'Success message text',
  },
};

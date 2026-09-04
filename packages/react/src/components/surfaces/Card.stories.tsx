// packages/react/src/components/surfaces/Card.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Text } from '../layout/Text';
import { Stack } from '../layout/Stack';

const meta: Meta<typeof Card> = {
  title: 'Surfaces/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'bordered', 'elevated'] },
    padding: { control: 'select', options: ['none', 'sm', 'md', 'lg'] },
    interactive: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <Stack direction="column" gap="md">
        <Text variant="heading" size="lg">Card Title</Text>
        <Text>This is the card content with some information displayed.</Text>
      </Stack>
    ),
  },
};

export const Bordered: Story = {
  args: {
    variant: 'bordered',
    padding: 'md',
    children: (
      <Stack direction="column" gap="md">
        <Text variant="heading">Bordered Card</Text>
        <Text>This card has a subtle border around it.</Text>
      </Stack>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    padding: 'lg',
    children: (
      <Stack direction="column" gap="md">
        <Text variant="heading">Elevated Card</Text>
        <Text>This card has a shadow for elevation effect.</Text>
      </Stack>
    ),
  },
};

export const Interactive: Story = {
  args: {
    interactive: true,
    variant: 'bordered',
    padding: 'md',
    children: (
      <Stack direction="column" gap="md">
        <Text variant="heading">Click me!</Text>
        <Text>This card is interactive and responds to clicks.</Text>
      </Stack>
    ),
  },
};

export const CompactPadding: Story = {
  args: {
    padding: 'sm',
    children: <Text>Compact card with minimal padding</Text>,
  },
};

export const NoPadding: Story = {
  args: {
    padding: 'none',
    children: <div style={{ background: 'blue', color: 'white', padding: '1rem' }}>Full-width content</div>,
  },
};

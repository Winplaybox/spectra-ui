// packages/react/src/components/layout/Container.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';
import { Text } from './Text';
import { Stack } from './Stack';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl', '2xl', 'full'] },
    padding: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    centered: { control: 'boolean' },
    fullHeight: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <Stack direction="column" gap="md">
        <Text variant="heading">Container Content</Text>
        <Text>This is the main content inside the container.</Text>
      </Stack>
    ),
  },
};

export const Centered: Story = {
  args: {
    centered: true,
    children: (
      <Stack direction="column" gap="md" align="center">
        <Text variant="heading">Centered Container</Text>
        <Text>Content is centered horizontally and vertically.</Text>
      </Stack>
    ),
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: <Text>Small container with limited width</Text>,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: <Text>Large container with maximum width</Text>,
  },
};

export const FullWidth: Story = {
  args: {
    size: 'full',
    children: <Text>Full width container spanning 100% of parent</Text>,
  },
};

export const WithPadding: Story = {
  args: {
    padding: 'lg',
    children: (
      <Stack direction="column" gap="md">
        <Text variant="heading">Padded Container</Text>
        <Text>Container with extra internal padding</Text>
      </Stack>
    ),
  },
};

export const FullHeight: Story = {
  args: {
    fullHeight: true,
    centered: true,
    children: (
      <Stack direction="column" gap="md" align="center">
        <Text variant="heading">Full Height</Text>
        <Text>Container takes full available height</Text>
      </Stack>
    ),
  },
};

export const CompactWithMinimalPadding: Story = {
  args: {
    size: 'md',
    padding: 'xs',
    centered: true,
    children: <Text>Compact container with minimal padding</Text>,
  },
};

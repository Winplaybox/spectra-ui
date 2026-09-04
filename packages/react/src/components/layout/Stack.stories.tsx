// packages/react/src/components/layout/Stack.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';
import { Button } from '../actions/Button';
import { Card } from '../surfaces/Card';
import { Text } from './Text';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'select', options: ['row', 'column', 'row-reverse', 'column-reverse'] },
    align: { control: 'select', options: ['flex-start', 'center', 'flex-end', 'stretch'] },
    justify: { control: 'select', options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around'] },
    gap: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
  args: {
    direction: 'row',
    gap: 'md',
    children: (
      <>
        <Card>Item 1</Card>
        <Card>Item 2</Card>
        <Card>Item 3</Card>
      </>
    ),
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
    gap: 'md',
    children: (
      <>
        <Card>Item 1</Card>
        <Card>Item 2</Card>
        <Card>Item 3</Card>
      </>
    ),
  },
};

export const CenteredAligned: Story = {
  args: {
    direction: 'row',
    align: 'center',
    justify: 'center',
    gap: 'lg',
    children: (
      <>
        <Button variant="primary">Button 1</Button>
        <Button variant="secondary">Button 2</Button>
        <Button variant="tertiary">Button 3</Button>
      </>
    ),
  },
};

export const SpacedBetween: Story = {
  args: {
    direction: 'row',
    justify: 'space-between',
    gap: 'md',
    children: (
      <>
        <Text>Left</Text>
        <Text>Right</Text>
      </>
    ),
  },
};

export const SmallGap: Story = {
  args: {
    direction: 'row',
    gap: 'xs',
    children: (
      <>
        <Button size="sm">1</Button>
        <Button size="sm">2</Button>
        <Button size="sm">3</Button>
      </>
    ),
  },
};

export const LargeGap: Story = {
  args: {
    direction: 'column',
    gap: 'xl',
    children: (
      <>
        <Card>Section 1</Card>
        <Card>Section 2</Card>
      </>
    ),
  },
};

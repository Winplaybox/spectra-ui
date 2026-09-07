import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Underline: Story = {
  render: () => (
    <Tabs defaultValue="account" variant="underline">
      <TabList>
        <Tab value="account">Account</Tab>
        <Tab value="security">Security & Privacy</Tab>
        <Tab value="billing">Billing & Invoices</Tab>
        <Tab value="notifications">Notifications</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="account">
          <h3>Account Settings</h3>
          <p>Manage your public profile and workspace preferences.</p>
        </TabPanel>
        <TabPanel value="security">
          <h3>Security & Privacy</h3>
          <p>Configure password, two-factor authentication, and active sessions.</p>
        </TabPanel>
        <TabPanel value="billing">
          <h3>Billing & Invoices</h3>
          <p>Review payment methods, transaction receipts, and upgrade plans.</p>
        </TabPanel>
        <TabPanel value="notifications">
          <h3>Notifications</h3>
          <p>Customize email notifications and system alert preferences.</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  ),
};

export const Pills: Story = {
  render: () => (
    <Tabs defaultValue="day" variant="pills">
      <TabList>
        <Tab value="day">Day</Tab>
        <Tab value="week">Week</Tab>
        <Tab value="month">Month</Tab>
        <Tab value="year">Year</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="day">Viewing daily performance metrics.</TabPanel>
        <TabPanel value="week">Viewing weekly summary report.</TabPanel>
        <TabPanel value="month">Viewing monthly aggregations.</TabPanel>
        <TabPanel value="year">Viewing annual forecast.</TabPanel>
      </TabPanels>
    </Tabs>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <Tabs defaultValue="1" size="sm">
        <TabList>
          <Tab value="1">Small Tab 1</Tab>
          <Tab value="2">Small Tab 2</Tab>
        </TabList>
      </Tabs>
      <Tabs defaultValue="1" size="md">
        <TabList>
          <Tab value="1">Medium Tab 1 (Default)</Tab>
          <Tab value="2">Medium Tab 2</Tab>
        </TabList>
      </Tabs>
      <Tabs defaultValue="1" size="lg">
        <TabList>
          <Tab value="1">Large Tab 1</Tab>
          <Tab value="2">Large Tab 2</Tab>
        </TabList>
      </Tabs>
    </div>
  ),
};

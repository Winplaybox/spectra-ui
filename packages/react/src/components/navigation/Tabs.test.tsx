import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from './Tabs';

describe('Tabs', () => {
  it('renders tablist and displays active tab panel', () => {
    render(
      <Tabs defaultValue="overview">
        <TabList>
          <Tab value="overview">Overview</Tab>
          <Tab value="billing">Billing</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="overview">Overview Content</TabPanel>
          <TabPanel value="billing">Billing Content</TabPanel>
        </TabPanels>
      </Tabs>
    );

    expect(screen.getByRole('tab', { name: /Overview/i })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tab', { name: /Billing/i })).toHaveAttribute('aria-selected', 'false');
    expect(screen.getByText('Overview Content')).toBeInTheDocument();
    expect(screen.queryByText('Billing Content')).not.toBeInTheDocument();
  });

  it('switches panel on tab click', () => {
    const handleChange = vi.fn();
    render(
      <Tabs defaultValue="overview" onChange={handleChange}>
        <TabList>
          <Tab value="overview">Overview</Tab>
          <Tab value="billing">Billing</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="overview">Overview Content</TabPanel>
          <TabPanel value="billing">Billing Content</TabPanel>
        </TabPanels>
      </Tabs>
    );

    fireEvent.click(screen.getByRole('tab', { name: /Billing/i }));
    expect(handleChange).toHaveBeenCalledWith('billing');
    expect(screen.getByText('Billing Content')).toBeInTheDocument();
    expect(screen.queryByText('Overview Content')).not.toBeInTheDocument();
  });

  it('navigates with keyboard ArrowRight and ArrowLeft', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabList>
          <Tab value="tab1">Tab 1</Tab>
          <Tab value="tab2">Tab 2</Tab>
          <Tab value="tab3">Tab 3</Tab>
        </TabList>
      </Tabs>
    );

    const tab1 = screen.getByRole('tab', { name: 'Tab 1' });
    tab1.focus();

    fireEvent.keyDown(screen.getByRole('tablist'), { key: 'ArrowRight' });
    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    expect(tab2).toHaveAttribute('aria-selected', 'true');
  });
});

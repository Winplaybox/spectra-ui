// packages/react/src/tests/a11y.test.tsx
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import axe from 'axe-core';
import { Button } from '../components/actions/Button';
import { TextInput } from '../components/form/TextInput';
import { Switch } from '../components/form/Switch';
import { Checkbox } from '../components/form/Checkbox';
import { Radio, RadioGroup } from '../components/form/Radio';
import { Select } from '../components/form/Select';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '../components/navigation/Tabs';
import { Card, CardTitle, CardContent } from '../components/surfaces/Card';
import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogBody } from '../components/overlay/Dialog';
import { Tooltip } from '../components/overlay/Tooltip';
import { Avatar } from '../components/data-display/Avatar';
import { Badge } from '../components/feedback/Badge';
import { List, ListItem, ListItemText } from '../components/data-display/List';
import { SpectraProvider } from '../provider/SpectraProvider';

async function expectNoAxeViolations(container: HTMLElement) {
  const results = await axe.run(container);
  expect(results.violations).toEqual([]);
}

describe('Accessibility Gate (WCAG 2.1 AA Compliance via axe-core)', () => {
  it('Button passes a11y checks', async () => {
    const { container } = render(
      <SpectraProvider>
        <Button variant="primary">Accessible Button</Button>
      </SpectraProvider>
    );
    await expectNoAxeViolations(container);
  });

  it('TextInput with label passes a11y checks', async () => {
    const { container } = render(
      <SpectraProvider>
        <TextInput
          id="email-input"
          label="Email Address"
          placeholder="name@domain.com"
          description="We will send your verification link here"
        />
      </SpectraProvider>
    );
    await expectNoAxeViolations(container);
  });

  it('Switch toggle control passes a11y checks', async () => {
    const { container } = render(
      <SpectraProvider>
        <Switch
          id="notifications-switch"
          label="Enable Push Notifications"
          description="Receive real-time system alerts"
        />
      </SpectraProvider>
    );
    await expectNoAxeViolations(container);
  });

  it('Card surface passes a11y checks', async () => {
    const { container } = render(
      <SpectraProvider>
        <Card>
          <CardTitle>System Overview</CardTitle>
          <CardContent>All services running normally.</CardContent>
        </Card>
      </SpectraProvider>
    );
    await expectNoAxeViolations(container);
  });

  it('Dialog modal passes a11y checks', async () => {
    const { container } = render(
      <SpectraProvider>
        <Dialog isOpen={true} onClose={() => {}}>
          <DialogHeader>
            <DialogTitle>Account Verification</DialogTitle>
            <DialogDescription>Please confirm your account details below.</DialogDescription>
          </DialogHeader>
          <DialogBody>Details confirmed.</DialogBody>
        </Dialog>
      </SpectraProvider>
    );
    await expectNoAxeViolations(container);
  });

  it('Checkbox passes a11y checks', async () => {
    const { container } = render(
      <SpectraProvider>
        <Checkbox
          label="Remember my preference"
          description="Save this device for 30 days"
        />
      </SpectraProvider>
    );
    await expectNoAxeViolations(container);
  });

  it('RadioGroup passes a11y checks', async () => {
    const { container } = render(
      <SpectraProvider>
        <RadioGroup defaultValue="opt1">
          <Radio value="opt1" label="Standard tier" />
          <Radio value="opt2" label="Enterprise tier" />
        </RadioGroup>
      </SpectraProvider>
    );
    await expectNoAxeViolations(container);
  });

  it('Select passes a11y checks', async () => {
    const { container } = render(
      <SpectraProvider>
        <Select
          label="Country Selection"
          options={[
            { value: 'us', label: 'United States' },
            { value: 'ca', label: 'Canada' },
          ]}
          defaultValue="us"
        />
      </SpectraProvider>
    );
    await expectNoAxeViolations(container);
  });

  it('Tabs pass a11y checks', async () => {
    const { container } = render(
      <SpectraProvider>
        <Tabs defaultValue="tab1">
          <TabList>
            <Tab value="tab1">General</Tab>
            <Tab value="tab2">Security</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="tab1">General content</TabPanel>
            <TabPanel value="tab2">Security content</TabPanel>
          </TabPanels>
        </Tabs>
      </SpectraProvider>
    );
    await expectNoAxeViolations(container);
  });

  it('Avatar passes a11y checks', async () => {
    const { container } = render(
      <SpectraProvider>
        <Avatar name="Sarah Connor" status="online" />
      </SpectraProvider>
    );
    await expectNoAxeViolations(container);
  });

  it('Badge passes a11y checks', async () => {
    const { container } = render(
      <SpectraProvider>
        <Badge variant="success">Completed</Badge>
      </SpectraProvider>
    );
    await expectNoAxeViolations(container);
  });

  it('List passes a11y checks', async () => {
    const { container } = render(
      <SpectraProvider>
        <List>
          <ListItem interactive>
            <ListItemText primary="Item 1" secondary="Subtitle" />
          </ListItem>
        </List>
      </SpectraProvider>
    );
    await expectNoAxeViolations(container);
  });
});

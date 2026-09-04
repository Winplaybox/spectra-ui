// packages/react/src/tests/a11y.test.tsx
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import axe from 'axe-core';
import { Button } from '../components/actions/Button';
import { TextInput } from '../components/form/TextInput';
import { Switch } from '../components/form/Switch';
import { Card, CardTitle, CardContent } from '../components/surfaces/Card';
import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogBody } from '../components/overlay/Dialog';
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
});

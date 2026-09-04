// packages/react/src/components/overlay/Dialog.stories.tsx
import React, { useState } from 'react';
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  DialogCloseButton,
} from './Dialog';
import { Button } from '../actions/Button';

export default {
  title: 'Overlay/Dialog',
  component: Dialog,
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: 24 }}>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Dialog
      </Button>

      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DialogCloseButton onClose={() => setIsOpen(false)} />
        <DialogHeader>
          <DialogTitle>Confirm Action</DialogTitle>
          <DialogDescription>Are you sure you want to proceed with this operation?</DialogDescription>
        </DialogHeader>
        <DialogBody>
          This action will immediately update your preferences across all connected devices.
        </DialogBody>
        <DialogFooter>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setIsOpen(false)}>
            Confirm
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

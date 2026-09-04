// packages/react/src/components/overlay/Dialog.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
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

describe('Dialog Component', () => {
  it('does not render when isOpen is false', () => {
    render(
      <Dialog isOpen={false} onClose={() => {}}>
        <DialogTitle>Hidden Title</DialogTitle>
      </Dialog>
    );
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('renders modal content when isOpen is true', () => {
    render(
      <Dialog isOpen={true} onClose={() => {}}>
        <DialogHeader>
          <DialogTitle>Modal Heading</DialogTitle>
          <DialogDescription>Description text</DialogDescription>
        </DialogHeader>
        <DialogBody>Body text</DialogBody>
      </Dialog>
    );

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeDefined();
    expect(screen.getByText('Modal Heading')).toBeDefined();
    expect(screen.getByText('Description text')).toBeDefined();
    expect(screen.getByText('Body text')).toBeDefined();
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = vi.fn();
    render(
      <Dialog isOpen={true} onClose={handleClose}>
        <DialogCloseButton onClose={handleClose} />
        <DialogTitle>Test</DialogTitle>
      </Dialog>
    );

    const closeBtn = screen.getByLabelText('Close dialog');
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when Escape key is pressed', () => {
    const handleClose = vi.fn();
    render(
      <Dialog isOpen={true} onClose={handleClose}>
        <DialogTitle>Test Dialog</DialogTitle>
      </Dialog>
    );

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});

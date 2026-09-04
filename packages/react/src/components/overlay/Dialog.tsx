// packages/react/src/components/overlay/Dialog.tsx
import React, { forwardRef, useEffect, useRef } from 'react';
import { useId, useOutsideClick } from '@spectra/primitives';
import { CloseIcon } from '@spectra/icons';
import * as styles from './Dialog.css';

interface DialogContextType {
  titleId: string;
  descriptionId: string;
}

const DialogContext = React.createContext<DialogContextType | null>(null);

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeOnOutsideClick?: boolean;
  closeOnEsc?: boolean;
  ariaLabel?: string;
  ariaLabelledBy?: string;
}

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  children,
  closeOnOutsideClick = true,
  closeOnEsc = true,
  ariaLabel,
  ariaLabelledBy,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const titleId = useId('dialog-title');
  const descId = useId('dialog-desc');

  useOutsideClick(contentRef, () => {
    if (closeOnOutsideClick) onClose();
  }, isOpen);

  useEffect(() => {
    if (!isOpen || !closeOnEsc) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeOnEsc, onClose]);

  // Prevent background scroll when dialog is open
  useEffect(() => {
    if (!isOpen) return;
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const accessibleNameProps = ariaLabel
    ? { 'aria-label': ariaLabel }
    : { 'aria-labelledby': ariaLabelledBy || titleId };

  return (
    <DialogContext.Provider value={{ titleId, descriptionId: descId }}>
      <div className={styles.overlay} role="presentation">
        <div
          ref={contentRef}
          className={styles.content}
          role="dialog"
          aria-modal="true"
          aria-describedby={descId}
          {...accessibleNameProps}
        >
          {children}
        </div>
      </div>
    </DialogContext.Provider>
  );
};

export const DialogHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div className={`${styles.header} ${className || ''}`} {...props}>
    {children}
  </div>
);

export const DialogTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className, children, id, ...props }) => {
  const ctx = React.useContext(DialogContext);
  return (
    <h2 id={id || ctx?.titleId} className={`${styles.title} ${className || ''}`} {...props}>
      {children}
    </h2>
  );
};

export const DialogDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ className, children, id, ...props }) => {
  const ctx = React.useContext(DialogContext);
  return (
    <p id={id || ctx?.descriptionId} className={`${styles.description} ${className || ''}`} {...props}>
      {children}
    </p>
  );
};

export const DialogBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div className={`${styles.body} ${className || ''}`} {...props}>
    {children}
  </div>
);

export const DialogFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div className={`${styles.footer} ${className || ''}`} {...props}>
    {children}
  </div>
);

export interface DialogCloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClose?: () => void;
}

export const DialogCloseButton: React.FC<DialogCloseButtonProps> = ({ onClose, className, ...props }) => (
  <button
    type="button"
    aria-label="Close dialog"
    onClick={onClose}
    className={`${styles.closeButton} ${className || ''}`}
    {...props}
  >
    <CloseIcon size={16} />
  </button>
);

import { useState, useCallback } from 'react';

export interface UseDisclosureProps {
  isOpen?: boolean;
  defaultIsOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export function useDisclosure({
  isOpen: isOpenProp,
  defaultIsOpen = false,
  onOpen: onOpenProp,
  onClose: onCloseProp,
}: UseDisclosureProps = {}) {
  const [isOpenState, setIsOpenState] = useState(defaultIsOpen);
  const isControlled = isOpenProp !== undefined;
  const isOpen = isControlled ? !!isOpenProp : isOpenState;

  const onOpen = useCallback(() => {
    if (!isControlled) setIsOpenState(true);
    onOpenProp?.();
  }, [isControlled, onOpenProp]);

  const onClose = useCallback(() => {
    if (!isControlled) setIsOpenState(false);
    onCloseProp?.();
  }, [isControlled, onCloseProp]);

  const onToggle = useCallback(() => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  }, [isOpen, onOpen, onClose]);

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  };
}

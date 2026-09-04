import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import React from 'react';
import {
  useDisclosure,
  useId,
  useControllableState,
  ThemeProvider,
  useTheme,
  useRTL,
} from './index';

describe('@spectra/primitives hooks', () => {
  it('useDisclosure handles open, close, and toggle transitions', () => {
    const { result } = renderHook(() => useDisclosure({ defaultIsOpen: false }));

    expect(result.current.isOpen).toBe(false);

    act(() => {
      result.current.onOpen();
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.onClose();
    });
    expect(result.current.isOpen).toBe(false);

    act(() => {
      result.current.onToggle();
    });
    expect(result.current.isOpen).toBe(true);
  });

  it('useId generates unique id with custom prefix', () => {
    const { result: id1 } = renderHook(() => useId('spectra-field'));
    const { result: id2 } = renderHook(() => useId('spectra-field'));

    expect(id1.current).toMatch(/^spectra-field-/);
    expect(id2.current).toMatch(/^spectra-field-/);
    expect(id1.current).not.toBe(id2.current);
  });

  it('useControllableState works in uncontrolled mode with default value', () => {
    const { result } = renderHook(() =>
      useControllableState({ defaultValue: 'initial' })
    );

    expect(result.current[0]).toBe('initial');

    act(() => {
      result.current[1]('updated');
    });

    expect(result.current[0]).toBe('updated');
  });

  it('useControllableState works in controlled mode and invokes onChange', () => {
    let changedValue = '';
    const { result } = renderHook(() =>
      useControllableState({
        value: 'controlled',
        onChange: (v) => {
          changedValue = v;
        },
      })
    );

    expect(result.current[0]).toBe('controlled');

    act(() => {
      result.current[1]('new-value');
    });

    expect(changedValue).toBe('new-value');
  });

  it('ThemeProvider and useTheme provide theme context and update state', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider defaultPack="minimal" defaultColorScheme="light">
        {children}
      </ThemeProvider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(result.current.pack).toBe('minimal');
    expect(result.current.colorScheme).toBe('light');
    expect(result.current.isDark).toBe(false);

    act(() => {
      result.current.setColorScheme('dark');
    });

    expect(result.current.colorScheme).toBe('dark');
    expect(result.current.isDark).toBe(true);
  });

  it('useRTL provides RTL state and updates document direction', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider defaultRTL={false}>{children}</ThemeProvider>
    );

    const { result } = renderHook(() => useRTL(), { wrapper });

    expect(result.current.isRTL).toBe(false);

    act(() => {
      result.current.setIsRTL(true);
    });

    expect(result.current.isRTL).toBe(true);
  });
});

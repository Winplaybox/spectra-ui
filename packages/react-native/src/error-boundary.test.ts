import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import {
  ErrorBoundary,
  withErrorBoundary,
  SpectraProvider,
  Text,
  View,
} from './index';

// Problematic component that simulates fatal render crashes
const FatalComponent: React.FC<{ shouldThrow?: boolean }> = ({ shouldThrow = true }) => {
  if (shouldThrow) {
    throw new Error('Fatal Native Render Failure');
  }
  return React.createElement(Text, null, 'Safe Native Content');
};

describe('Spectra UI Native - ErrorBoundary & SpectraProvider', () => {
  it('instantiates ErrorBoundary element with children', () => {
    const child = React.createElement(Text, null, 'Protected Native View');
    const element = React.createElement(ErrorBoundary, null, child);

    expect(element).toBeDefined();
    expect(element.props.children).toBe(child);
  });

  it('supports withErrorBoundary HOC wrapper', () => {
    const Wrapped = withErrorBoundary(FatalComponent);
    const element = React.createElement(Wrapped, { shouldThrow: false });

    expect(element).toBeDefined();
    expect(Wrapped.displayName).toBe('withErrorBoundary(FatalComponent)');
  });

  it('SpectraProvider configures automated ErrorBoundary shielding', () => {
    const child = React.createElement(Text, null, 'Root Content');
    const provider = React.createElement(
      SpectraProvider,
      { errorBoundary: true },
      child
    );

    expect(provider).toBeDefined();
    expect(provider.props.errorBoundary).toBe(true);
  });

  it('ErrorBoundary instance correctly updates state via getDerivedStateFromError', () => {
    const error = new Error('Test Crash');
    const newState = ErrorBoundary.getDerivedStateFromError(error);

    expect(newState.hasError).toBe(true);
    expect(newState.error).toBe(error);
  });

  it('invokes onError callback when provided on crash', () => {
    const onError = vi.fn();
    const boundary = new ErrorBoundary({ onError });
    const error = new Error('Boundary Failure');
    const errorInfo: React.ErrorInfo = { componentStack: 'FatalComponent\nApp' };

    boundary.componentDidCatch(error, errorInfo);
    expect(onError).toHaveBeenCalledWith(error, errorInfo);
  });

  it('invokes onReset callback when resetErrorBoundary is called', () => {
    const onReset = vi.fn();
    const boundary = new ErrorBoundary({ onReset });

    boundary.resetErrorBoundary();
    expect(onReset).toHaveBeenCalledTimes(1);
  });
});

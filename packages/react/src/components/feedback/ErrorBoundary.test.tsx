import React, { useState } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ErrorBoundary, withErrorBoundary } from './ErrorBoundary';
import { SpectraProvider } from '../../provider/SpectraProvider';

// Buggy component that throws error when shouldThrow is true
const ProblemChild: React.FC<{ shouldThrow?: boolean; message?: string }> = ({
  shouldThrow = true,
  message = 'Simulated Component Crash',
}) => {
  if (shouldThrow) {
    throw new Error(message);
  }
  return <div>Component rendered safely!</div>;
};

describe('Spectra UI React - ErrorBoundary', () => {
  // Silence console.error in tests for intentional throw
  const originalError = console.error;
  beforeEach(() => {
    console.error = vi.fn();
  });
  afterEach(() => {
    console.error = originalError;
  });

  it('renders children normally when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Hello World</div>
      </ErrorBoundary>
    );

    expect(screen.getByText('Hello World')).toBeDefined();
  });

  it('catches render errors and displays default fallback UI without crashing', () => {
    render(
      <ErrorBoundary>
        <ProblemChild shouldThrow={true} message="Fatal child exception" />
      </ErrorBoundary>
    );

    expect(screen.getByRole('alert')).toBeDefined();
    expect(screen.getByText('An unexpected error occurred')).toBeDefined();
    expect(screen.getByText('Fatal child exception')).toBeDefined();
    expect(screen.getByText('Try again')).toBeDefined();
  });

  it('calls onError callback when error is captured', () => {
    const handleError = vi.fn();

    render(
      <ErrorBoundary onError={handleError}>
        <ProblemChild shouldThrow={true} message="Logged error" />
      </ErrorBoundary>
    );

    expect(handleError).toHaveBeenCalledTimes(1);
    expect(handleError.mock.calls[0][0].message).toBe('Logged error');
  });

  it('renders custom fallback ReactNode or render prop', () => {
    render(
      <ErrorBoundary
        fallback={({ error, resetErrorBoundary }) => (
          <div>
            <span>Custom Fallback: {error.message}</span>
            <button onClick={resetErrorBoundary}>Recover</button>
          </div>
        )}
      >
        <ProblemChild shouldThrow={true} message="Custom message" />
      </ErrorBoundary>
    );

    expect(screen.getByText('Custom Fallback: Custom message')).toBeDefined();
  });

  it('allows recovery via resetErrorBoundary button', () => {
    const RecoverableParent = () => {
      const [explode, setExplode] = useState(true);
      return (
        <div>
          <button onClick={() => setExplode(false)}>Fix Error</button>
          <ErrorBoundary onReset={() => setExplode(false)}>
            <ProblemChild shouldThrow={explode} message="Temporary glitch" />
          </ErrorBoundary>
        </div>
      );
    };

    render(<RecoverableParent />);

    expect(screen.getByText('Temporary glitch')).toBeDefined();
    const fixButton = screen.getByText('Fix Error');
    fireEvent.click(fixButton);

    const tryAgainButton = screen.getByText('Try again');
    fireEvent.click(tryAgainButton);

    expect(screen.getByText('Component rendered safely!')).toBeDefined();
  });

  it('withErrorBoundary HOC wraps components cleanly', () => {
    const SafeProblemChild = withErrorBoundary(ProblemChild);

    render(<SafeProblemChild shouldThrow={true} message="Caught by HOC" />);

    expect(screen.getByRole('alert')).toBeDefined();
    expect(screen.getByText('Caught by HOC')).toBeDefined();
  });

  it('SpectraProvider wraps app in ErrorBoundary by default', () => {
    render(
      <SpectraProvider>
        <ProblemChild shouldThrow={true} message="Root app failure" />
      </SpectraProvider>
    );

    expect(screen.getByRole('alert')).toBeDefined();
    expect(screen.getByText('Application Error')).toBeDefined();
    expect(screen.getByText('Root app failure')).toBeDefined();
  });
});

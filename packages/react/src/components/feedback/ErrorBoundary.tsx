import React, { Component, ReactNode, ErrorInfo, ComponentType } from 'react';
import { ErrorBoundaryContext } from '@winplaybox/primitives';

export interface FallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export interface ErrorBoundaryProps {
  children?: ReactNode;
  fallback?: ReactNode | ((props: FallbackProps) => ReactNode);
  FallbackComponent?: ComponentType<FallbackProps>;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  onReset?: () => void;
  resetKeys?: any[];
  title?: string;
  description?: string;
  showDetails?: boolean;
  level?: 'component' | 'section' | 'screen' | 'app';
  className?: string;
  style?: React.CSSProperties;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  showTrace: boolean;
}

/**
 * Standard vector warning icon (Strict Zero-Emoji Policy conforming).
 */
const WarningIcon: React.FC<{ size?: number; color?: string }> = ({ size = 20, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'block' }}
    aria-hidden="true"
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

/**
 * Standard vector retry/reload icon.
 */
const RefreshIcon: React.FC<{ size?: number; color?: string }> = ({ size = 16, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'block' }}
    aria-hidden="true"
  >
    <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
  </svg>
);

/**
 * Default fallback UI component for Spectra UI React.
 * Strictly adheres to token-driven CSS variables and Zero-Emoji vector aesthetics.
 */
export const DefaultErrorFallback: React.FC<{
  error: Error;
  resetErrorBoundary: () => void;
  title?: string;
  description?: string;
  showDetails?: boolean;
  level?: 'component' | 'section' | 'screen' | 'app';
  style?: React.CSSProperties;
}> = ({
  error,
  resetErrorBoundary,
  title = 'An unexpected error occurred',
  description = 'This component failed to render gracefully. You can try recovering.',
  showDetails = true,
  level = 'component',
  style,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const isInline = level === 'component';
  const isScreen = level === 'screen' || level === 'app';

  return (
    <div
      role="alert"
      aria-live="assertive"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: isInline ? 'flex-start' : 'center',
        justifyContent: 'center',
        padding: isInline ? '12px 16px' : isScreen ? '48px 24px' : '24px',
        backgroundColor: 'var(--color-surface-raised, #f9fafb)',
        border: '1px solid var(--color-feedback-danger-light, #fecaca)',
        borderRadius: '8px',
        color: 'var(--color-text-primary, #111827)',
        fontFamily: 'inherit',
        boxSizing: 'border-box',
        width: '100%',
        minHeight: isScreen ? '300px' : undefined,
        textAlign: isInline ? 'left' : 'center',
        ...style,
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: isInline ? '28px' : '44px',
          height: isInline ? '28px' : '44px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-feedback-danger-light, #fee2e2)',
          color: 'var(--color-feedback-danger, #dc2626)',
          marginBottom: isInline ? '8px' : '16px',
        }}
      >
        <WarningIcon size={isInline ? 16 : 24} />
      </div>

      <div style={{ fontWeight: 600, fontSize: isInline ? '14px' : '16px', marginBottom: '4px' }}>
        {title}
      </div>

      <div
        style={{
          fontSize: '13px',
          color: 'var(--color-text-muted, #6b7280)',
          marginBottom: '12px',
          maxWidth: '540px',
        }}
      >
        {description}
      </div>

      {error?.message && (
        <div
          style={{
            fontSize: '12px',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
            backgroundColor: 'var(--color-surface, #ffffff)',
            border: '1px solid var(--color-border, #e5e7eb)',
            borderRadius: '4px',
            padding: '6px 10px',
            color: 'var(--color-feedback-danger, #dc2626)',
            marginBottom: '12px',
            wordBreak: 'break-word',
            maxWidth: '100%',
          }}
        >
          {error.message}
        </div>
      )}

      <div style={{ display: 'inline-flex', gap: '8px', alignItems: 'center' }}>
        <button
          type="button"
          onClick={resetErrorBoundary}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            padding: '6px 14px',
            fontSize: '13px',
            fontWeight: 500,
            borderRadius: '6px',
            backgroundColor: 'var(--color-action-primary, #2563eb)',
            color: 'var(--color-text-on-action, #ffffff)',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.15s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-action-primary-hover, #1d4ed8)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-action-primary, #2563eb)';
          }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <RefreshIcon size={14} />
          </span>
          <span>Try again</span>
        </button>

        {showDetails && error?.stack && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            style={{
              padding: '6px 12px',
              fontSize: '12px',
              fontWeight: 500,
              borderRadius: '6px',
              backgroundColor: 'transparent',
              color: 'var(--color-text-secondary, #4b5563)',
              border: '1px solid var(--color-border, #e5e7eb)',
              cursor: 'pointer',
            }}
          >
            {expanded ? 'Hide Details' : 'View Details'}
          </button>
        )}
      </div>

      {expanded && error?.stack && (
        <pre
          style={{
            marginTop: '12px',
            padding: '12px',
            width: '100%',
            maxHeight: '180px',
            overflowY: 'auto',
            fontSize: '11px',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
            backgroundColor: 'var(--color-surface, #ffffff)',
            border: '1px solid var(--color-border, #e5e7eb)',
            borderRadius: '6px',
            textAlign: 'left',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-all',
            color: 'var(--color-text-secondary, #374151)',
            boxSizing: 'border-box',
          }}
        >
          {error.stack}
        </pre>
      )}
    </div>
  );
};

/**
 * Enterprise ErrorBoundary Component for Spectra UI.
 * Prevents cascading unhandled crashes, white screen of death, and provides zero-emoji graceful recovery.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public override state: ErrorBoundaryState = {
    hasError: false,
    error: null,
    showTrace: false,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
      showTrace: false,
    };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  public override componentDidUpdate(prevProps: ErrorBoundaryProps): void {
    if (this.state.hasError && this.props.resetKeys && prevProps.resetKeys) {
      const hasChanged = this.props.resetKeys.some((val, idx) => val !== prevProps.resetKeys?.[idx]);
      if (hasChanged) {
        this.resetErrorBoundary();
      }
    }
  }

  private _mounted = false;

  public override componentDidMount(): void {
    this._mounted = true;
  }

  public override componentWillUnmount(): void {
    this._mounted = false;
  }

  public resetErrorBoundary = (): void => {
    if (this.props.onReset) {
      this.props.onReset();
    }
    if (this._mounted) {
      this.setState({
        hasError: false,
        error: null,
        showTrace: false,
      });
    }
  };

  public showBoundary = (error: unknown): void => {
    const err = error instanceof Error ? error : new Error(String(error));
    if (this._mounted) {
      this.setState({
        hasError: true,
        error: err,
      });
    }
  };

  public override render(): ReactNode {
    const { hasError, error } = this.state;
    const {
      children,
      fallback,
      FallbackComponent,
      title,
      description,
      showDetails,
      level,
      style,
    } = this.props;

    if (hasError && error) {
      const fallbackProps: FallbackProps = {
        error,
        resetErrorBoundary: this.resetErrorBoundary,
      };

      if (FallbackComponent) {
        return <FallbackComponent {...fallbackProps} />;
      }

      if (typeof fallback === 'function') {
        return fallback(fallbackProps);
      }

      if (fallback) {
        return fallback;
      }

      return (
        <DefaultErrorFallback
          error={error}
          resetErrorBoundary={this.resetErrorBoundary}
          title={title}
          description={description}
          showDetails={showDetails}
          level={level}
          style={style}
        />
      );
    }

    return (
      <ErrorBoundaryContext.Provider
        value={{
          showBoundary: this.showBoundary,
          resetBoundary: this.resetErrorBoundary,
        }}
      >
        {children}
      </ErrorBoundaryContext.Provider>
    );
  }
}

/**
 * Higher-Order Component to wrap any React component with an ErrorBoundary.
 */
export function withErrorBoundary<P extends object>(
  ComponentToWrap: ComponentType<P>,
  errorBoundaryProps?: Omit<ErrorBoundaryProps, 'children'>
): React.FC<P> {
  const Wrapped: React.FC<P> = (props) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <ComponentToWrap {...props} />
    </ErrorBoundary>
  );

  Wrapped.displayName = `withErrorBoundary(${ComponentToWrap.displayName || ComponentToWrap.name || 'Component'})`;
  return Wrapped;
}

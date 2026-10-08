import React, { Component, ReactNode, ErrorInfo, ComponentType } from 'react';
import { View, Text, StyleSheet, Pressable, ViewStyle, Platform, ScrollView } from 'react-native';
import { ErrorBoundaryContext } from '@winplaybox/primitives';
import { getTokens } from '@winplaybox/tokens';

export interface NativeFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export interface NativeErrorBoundaryProps {
  children?: ReactNode;
  fallback?: ReactNode | ((props: NativeFallbackProps) => ReactNode);
  FallbackComponent?: ComponentType<NativeFallbackProps>;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  onReset?: () => void;
  resetKeys?: any[];
  title?: string;
  description?: string;
  showDetails?: boolean;
  level?: 'component' | 'section' | 'screen' | 'app';
  style?: ViewStyle;
}

interface NativeErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  expanded: boolean;
}

/**
 * Default native fallback UI card for Spectra UI Native.
 * Strictly adheres to token aesthetics and zero-emoji compliance.
 */
export const DefaultNativeErrorFallback: React.FC<{
  error: Error;
  resetErrorBoundary: () => void;
  title?: string;
  description?: string;
  showDetails?: boolean;
  level?: 'component' | 'section' | 'screen' | 'app';
  style?: ViewStyle;
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

  // Standard safe token lookup
  const tokens = getTokens('light');
  const bgSurface = tokens['color-semantic-surface-raised'] || '#F9FAFB';
  const dangerColor = tokens['color-semantic-feedback-danger'] || '#DC2626';
  const dangerLight = tokens['color-semantic-feedback-danger-light'] || '#FEE2E2';
  const textPrimary = tokens['color-semantic-text-primary'] || '#111827';
  const textSecondary = tokens['color-semantic-text-secondary'] || '#4B5563';
  const textMuted = tokens['color-semantic-text-muted'] || '#6B7280';
  const actionPrimary = tokens['color-semantic-action-primary'] || '#2563EB';

  return (
    <View
      accessibilityRole="alert"
      style={[
        styles.container,
        {
          backgroundColor: bgSurface,
          borderColor: dangerLight,
          minHeight: isScreen ? 320 : undefined,
          padding: isInline ? 16 : isScreen ? 32 : 20,
        },
        style,
      ]}
    >
      {/* Alert Icon Badge (Zero-Emoji Authentic Vector Indicator) */}
      <View style={[styles.iconBadge, { backgroundColor: dangerLight }]}>
        <View style={[styles.exclamationDot, { backgroundColor: dangerColor }]} />
      </View>

      <Text style={[styles.title, { color: textPrimary, fontSize: isInline ? 14 : 16 }]}>
        {title}
      </Text>

      <Text style={[styles.description, { color: textMuted }]}>
        {description}
      </Text>

      {error?.message ? (
        <View style={styles.errorBox}>
          <Text style={[styles.errorMessage, { color: dangerColor }]}>
            {error.message}
          </Text>
        </View>
      ) : null}

      <View style={styles.buttonRow}>
        <Pressable
          accessibilityRole="button"
          onPress={resetErrorBoundary}
          style={({ pressed }) => [
            styles.retryButton,
            { backgroundColor: actionPrimary, opacity: pressed ? 0.8 : 1 },
          ]}
        >
          <Text style={styles.retryButtonText}>Try again</Text>
        </Pressable>

        {showDetails && error?.stack ? (
          <Pressable
            accessibilityRole="button"
            onPress={() => setExpanded(!expanded)}
            style={styles.detailsToggle}
          >
            <Text style={[styles.detailsToggleText, { color: textSecondary }]}>
              {expanded ? 'Hide Details' : 'View Details'}
            </Text>
          </Pressable>
        ) : null}
      </View>

      {expanded && error?.stack ? (
        <ScrollView style={styles.traceContainer} nestedScrollEnabled>
          <Text style={[styles.traceText, { color: textSecondary }]}>
            {error.stack}
          </Text>
        </ScrollView>
      ) : null}
    </View>
  );
};

/**
 * Enterprise Native ErrorBoundary for Spectra UI Native.
 * Prevents mobile and web crash unmounts and isolates runtime exceptions.
 */
export class ErrorBoundary extends Component<NativeErrorBoundaryProps, NativeErrorBoundaryState> {
  public override state: NativeErrorBoundaryState = {
    hasError: false,
    error: null,
    expanded: false,
  };

  public static getDerivedStateFromError(error: Error): NativeErrorBoundaryState {
    return {
      hasError: true,
      error,
      expanded: false,
    };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  public override componentDidUpdate(prevProps: NativeErrorBoundaryProps): void {
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
        expanded: false,
      });
    } else {
      this.state = {
        hasError: false,
        error: null,
        expanded: false,
      };
    }
  };

  public showBoundary = (error: unknown): void => {
    const err = error instanceof Error ? error : new Error(String(error));
    if (this._mounted) {
      this.setState({
        hasError: true,
        error: err,
      });
    } else {
      this.state = {
        ...this.state,
        hasError: true,
        error: err,
      };
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
      const fallbackProps: NativeFallbackProps = {
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
        <DefaultNativeErrorFallback
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
 * Higher-Order Component for wrapping any React Native component with an ErrorBoundary.
 */
export function withErrorBoundary<P extends object>(
  ComponentToWrap: ComponentType<P>,
  errorBoundaryProps?: Omit<NativeErrorBoundaryProps, 'children'>
): React.FC<P> {
  const Wrapped: React.FC<P> = (props) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <ComponentToWrap {...props} />
    </ErrorBoundary>
  );

  Wrapped.displayName = `withErrorBoundary(${ComponentToWrap.displayName || ComponentToWrap.name || 'Component'})`;
  return Wrapped;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  iconBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  exclamationDot: {
    width: 6,
    height: 14,
    borderRadius: 3,
  },
  title: {
    fontWeight: '600',
    marginBottom: 4,
    textAlign: 'center',
  },
  description: {
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 12,
  },
  errorBox: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    width: '100%',
    marginBottom: 12,
  },
  errorMessage: {
    fontSize: 12,
    fontFamily: typeof Platform !== 'undefined' && Platform?.OS === 'ios' ? 'Menlo' : 'monospace',
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  retryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  detailsToggle: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  detailsToggleText: {
    fontSize: 12,
    fontWeight: '500',
  },
  traceContainer: {
    marginTop: 12,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    maxHeight: 140,
    width: '100%',
  },
  traceText: {
    fontSize: 11,
    fontFamily: typeof Platform !== 'undefined' && Platform?.OS === 'ios' ? 'Menlo' : 'monospace',
  },
});

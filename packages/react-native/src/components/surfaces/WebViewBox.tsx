import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  ViewStyle,
  StyleProp,
} from 'react-native';
import { useTheme } from '@winplaybox/primitives';
import { getTokens } from '@winplaybox/tokens';
import { GlobeIcon, WarningIcon, RefreshIcon, OpenIcon } from '../data-display/Icon';

// Safe dynamic resolution of react-native-webview
let RNWebView: any = null;
try {
  const mod = require('react-native-webview');
  RNWebView = mod.WebView || mod.default || mod;
} catch {
  // Graceful fallback when react-native-webview native module is not installed
}

export const WebView = RNWebView;

export interface NativeWebViewBoxProps {
  /**
   * The web page source specification (URL object or HTML string).
   */
  source: { uri: string; headers?: Record<string, string> } | { html: string; baseUrl?: string };
  /**
   * Optional title displayed in header or fallback state.
   */
  title?: string;
  /**
   * Whether to show the Spectra animated loading progress bar at the top.
   * Defaults to true.
   */
  showProgressBar?: boolean;
  /**
   * Additional style for the outer containment container.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Additional style for the underlying WebView engine.
   */
  webviewStyle?: StyleProp<ViewStyle>;
  /**
   * Callback fired when page load starts.
   */
  onLoadStart?: () => void;
  /**
   * Callback fired when page load finishes.
   */
  onLoadEnd?: () => void;
  /**
   * Callback fired on page load error.
   */
  onError?: (syntheticEvent: any) => void;
  /**
   * Callback fired on HTTP error (e.g., 404, 500).
   */
  onHttpError?: (syntheticEvent: any) => void;
  testID?: string;
  [key: string]: any;
}

export interface NativeWebViewBoxRef {
  reload: () => void;
  goBack: () => void;
  goForward: () => void;
  injectJavaScript: (script: string) => void;
  getRawRef: () => any;
}

/**
 * Universal Native WebViewBox component for Spectra UI.
 * Provides a robust containment wrapper with theme-synchronized progress bar,
 * error state cards, retry mechanisms, and zero-crash browser fallback.
 */
export const WebViewBox = forwardRef<NativeWebViewBoxRef, NativeWebViewBoxProps>(
  (
    {
      source,
      title,
      showProgressBar = true,
      style,
      webviewStyle,
      onLoadStart,
      onLoadEnd,
      onError,
      onHttpError,
      testID,
      ...restProps
    },
    ref
  ) => {
    const { colorScheme } = useTheme();
    const tokens = getTokens(colorScheme);

    const internalRef = useRef<any>(null);
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useImperativeHandle(ref, () => ({
      reload: () => {
        setHasError(false);
        internalRef.current?.reload();
      },
      goBack: () => internalRef.current?.goBack(),
      goForward: () => internalRef.current?.goForward(),
      injectJavaScript: (script: string) =>
        internalRef.current?.injectJavaScript(script),
      getRawRef: () => internalRef.current,
    }));

    const uri = 'uri' in source ? source.uri : undefined;

    const handleLoadStart = () => {
      setIsLoading(true);
      setHasError(false);
      setProgress(0.1);
      onLoadStart?.();
    };

    const handleLoadProgress = ({ nativeEvent }: any) => {
      setProgress(nativeEvent.progress);
    };

    const handleLoadEnd = () => {
      setIsLoading(false);
      setProgress(1);
      onLoadEnd?.();
    };

    const handleError = (e: any) => {
      setIsLoading(false);
      setHasError(true);
      setErrorMessage(
        e?.nativeEvent?.description || 'Failed to load webpage'
      );
      onError?.(e);
    };

    const handleRetry = () => {
      setHasError(false);
      if (internalRef.current) {
        internalRef.current.reload();
      }
    };

    const handleOpenInExternalBrowser = () => {
      if (uri) {
        Linking.openURL(uri).catch(() => {});
      }
    };

    // Fallback card if react-native-webview native bridge is not installed
    if (!RNWebView) {
      return (
        <View
          style={[
            styles.fallbackContainer,
            {
              backgroundColor: tokens['color-semantic-surface'],
              borderColor: tokens['color-semantic-border-default'],
            },
            style,
          ]}
          testID={testID}
        >
          <View style={styles.fallbackIconBox}>
            <GlobeIcon size={36} color={tokens['color-semantic-action-primary']} />
          </View>
          <Text
            style={[
              styles.fallbackTitle,
              { color: tokens['color-semantic-text-primary'] },
            ]}
          >
            {title || 'Web Content'}
          </Text>
          <Text
            style={[
              styles.fallbackDescription,
              { color: tokens['color-semantic-text-secondary'] },
            ]}
          >
            react-native-webview native bridge is not installed in this environment.
          </Text>

          {uri && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleOpenInExternalBrowser}
              style={[
                styles.openBrowserButton,
                { backgroundColor: tokens['color-semantic-action-primary'] },
              ]}
            >
              <OpenIcon size={16} color="#ffffff" />
              <Text style={styles.openBrowserText}>Open in Browser</Text>
            </TouchableOpacity>
          )}
        </View>
      );
    }

    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: tokens['color-semantic-surface'],
            borderColor: tokens['color-semantic-border-default'],
          },
          style,
        ]}
        testID={testID}
      >
        {/* Progress Bar */}
        {showProgressBar && isLoading && progress < 1 && (
          <View
            style={[
              styles.progressBarTrack,
              { backgroundColor: tokens['color-semantic-border-subtle'] },
            ]}
          >
            <View
              style={[
                styles.progressBarFill,
                {
                  width: `${Math.round(progress * 100)}%`,
                  backgroundColor: tokens['color-semantic-action-primary'],
                },
              ]}
            />
          </View>
        )}

        {/* Error State Card */}
        {hasError ? (
          <View style={styles.errorContainer}>
            <View style={styles.errorIconWrapper}>
              <WarningIcon size={32} color={tokens['color-semantic-feedback-error']} />
            </View>
            <Text
              style={[
                styles.errorTitle,
                { color: tokens['color-semantic-text-primary'] },
              ]}
            >
              Page Unavailable
            </Text>
            <Text
              style={[
                styles.errorSubtext,
                { color: tokens['color-semantic-text-secondary'] },
              ]}
            >
              {errorMessage}
            </Text>

            <View style={styles.errorButtonRow}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleRetry}
                style={[
                  styles.retryButton,
                  {
                    backgroundColor: tokens['color-semantic-surface-raised'] || '#f3f4f6',
                    borderColor: tokens['color-semantic-border-default'],
                  },
                ]}
              >
                <RefreshIcon size={16} color={tokens['color-semantic-text-primary']} />
                <Text
                  style={[
                    styles.retryText,
                    { color: tokens['color-semantic-text-primary'] },
                  ]}
                >
                  Try Again
                </Text>
              </TouchableOpacity>

              {uri && (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={handleOpenInExternalBrowser}
                  style={[
                    styles.retryButton,
                    {
                      backgroundColor: tokens['color-semantic-action-primary'],
                      borderColor: tokens['color-semantic-action-primary'],
                    },
                  ]}
                >
                  <OpenIcon size={16} color="#ffffff" />
                  <Text style={[styles.retryText, { color: '#ffffff' }]}>
                    Open Externally
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ) : (
          <RNWebView
            ref={internalRef}
            source={source}
            onLoadStart={handleLoadStart}
            onLoadProgress={handleLoadProgress}
            onLoadEnd={handleLoadEnd}
            onError={handleError}
            onHttpError={onHttpError}
            style={[styles.webview, webviewStyle]}
            {...restProps}
          />
        )}
      </View>
    );
  }
);

WebViewBox.displayName = 'WebViewBox';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    borderWidth: 1,
    borderRadius: 8,
  },
  webview: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  progressBarTrack: {
    height: 3,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
  },
  progressBarFill: {
    height: '100%',
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  errorIconWrapper: {
    marginBottom: 12,
  },
  errorTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  errorSubtext: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  errorButtonRow: {
    flexDirection: 'row',
    gap: 12,
  },
  retryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  retryText: {
    fontSize: 14,
    fontWeight: '500',
  },
  fallbackContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    borderWidth: 1,
    borderRadius: 8,
  },
  fallbackIconBox: {
    marginBottom: 16,
  },
  fallbackTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  fallbackDescription: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
    maxWidth: 280,
  },
  openBrowserButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  openBrowserText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
});

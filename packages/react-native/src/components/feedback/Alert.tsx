import React from 'react';
import { View, Text, StyleSheet, Pressable, ViewStyle } from 'react-native';
import { useTheme } from '@spectra/primitives';
import { getTokens } from '@spectra/tokens';

export type NativeAlertSeverity = 'info' | 'success' | 'warning' | 'error' | 'danger';

export interface NativeAlertProps {
  severity?: NativeAlertSeverity;
  variant?: NativeAlertSeverity;
  title?: string;
  children?: React.ReactNode;
  onClose?: () => void;
  onDismiss?: () => void;
  style?: ViewStyle;
}

export const Alert: React.FC<NativeAlertProps> = ({
  severity,
  variant = 'info',
  title,
  children,
  onClose,
  onDismiss,
  style,
}) => {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);
  const rawSev = severity || variant || 'info';
  const activeSev = rawSev === 'danger' ? 'error' : rawSev;
  const handleDismiss = onClose || onDismiss;

  const getColors = () => {
    switch (activeSev) {
      case 'success':
        return { bg: 'rgba(22, 163, 74, 0.1)', border: '#16A34A', text: '#16A34A' };
      case 'warning':
        return { bg: 'rgba(217, 119, 6, 0.1)', border: '#D97706', text: '#D97706' };
      case 'error':
        return { bg: 'rgba(220, 38, 38, 0.1)', border: '#DC2626', text: '#DC2626' };
      default:
        return { bg: 'rgba(37, 99, 235, 0.1)', border: '#2563EB', text: '#2563EB' };
    }
  };

  const colors = getColors();

  return (
    <View
      accessibilityRole="alert"
      style={[
        styles.container,
        {
          backgroundColor: colors.bg,
          borderColor: colors.border,
        },
        style,
      ]}
    >
      <View style={styles.content}>
        {title ? (
          <Text style={[styles.title, { color: tokens['color-semantic-text-primary'] }]}>
            {title}
          </Text>
        ) : null}
        {typeof children === 'string' ? (
          <Text style={[styles.description, { color: tokens['color-semantic-text-secondary'] }]}>
            {children}
          </Text>
        ) : (
          children
        )}
      </View>
      {handleDismiss && (
        <Pressable
          accessibilityLabel="Dismiss alert"
          accessibilityRole="button"
          onPress={handleDismiss}
          hitSlop={8}
          style={styles.closeBtn}
        >
          <Text style={{ color: colors.text, fontSize: 16, fontWeight: '700' }}>✕</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 4,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    fontSize: 13,
    lineHeight: 18,
  },
  closeBtn: {
    marginLeft: 12,
    padding: 2,
  },
});

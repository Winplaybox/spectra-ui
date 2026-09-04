import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { useTheme } from '@spectra/primitives';
import { getTokens } from '@spectra/tokens';

export interface NativeDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export const Dialog: React.FC<NativeDialogProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
}) => {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);

  return (
    <Modal
      transparent
      visible={isOpen}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View
              style={[
                styles.content,
                {
                  backgroundColor: tokens['color-semantic-surface'],
                  borderColor: tokens['color-semantic-border-default'],
                },
              ]}
            >
              {title && (
                <Text style={[styles.title, { color: tokens['color-semantic-text-primary'] }]}>
                  {title}
                </Text>
              )}
              {description && (
                <Text style={[styles.description, { color: tokens['color-semantic-text-muted'] }]}>
                  {description}
                </Text>
              )}
              <View style={styles.body}>{children}</View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  content: {
    width: '100%',
    maxWidth: 400,
    borderRadius: 12,
    borderWidth: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    marginBottom: 16,
  },
  body: {
    marginTop: 8,
  },
});

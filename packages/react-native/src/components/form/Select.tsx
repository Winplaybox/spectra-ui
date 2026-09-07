import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  ViewStyle,
  TouchableWithoutFeedback,
} from 'react-native';
import { useTheme, useControllableState } from '@spectra/primitives';
import { getTokens } from '@spectra/tokens';

export interface NativeSelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface NativeSelectProps {
  options: NativeSelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  testID?: string;
  style?: ViewStyle;
}

export const Select: React.FC<NativeSelectProps> = ({
  options = [],
  value: controlledValue,
  defaultValue,
  onChange,
  placeholder = 'Select an option...',
  label,
  error,
  disabled = false,
  size = 'md',
  testID,
  style,
}) => {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);
  const [isOpen, setIsOpen] = useState(false);

  const [selectedValue, setSelectedValue] = useControllableState({
    value: controlledValue,
    defaultValue,
    onChange,
  });

  const selectedOption = options.find((opt) => opt.value === selectedValue);

  const handleSelect = (option: NativeSelectOption) => {
    if (option.disabled) return;
    setSelectedValue(option.value);
    setIsOpen(false);
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return { paddingVertical: 8, paddingHorizontal: 10, fontSize: 13, height: 36 };
      case 'lg':
        return { paddingVertical: 14, paddingHorizontal: 16, fontSize: 16, height: 48 };
      case 'md':
      default:
        return { paddingVertical: 10, paddingHorizontal: 12, fontSize: 14, height: 42 };
    }
  };

  const sizeStyle = getSizeStyles();

  return (
    <View style={[styles.container, style]}>
      {label && (
        <Text
          style={[
            styles.label,
            { color: tokens['color-semantic-text-primary'] },
          ]}
        >
          {label}
        </Text>
      )}

      <TouchableOpacity
        testID={testID}
        activeOpacity={0.7}
        disabled={disabled}
        onPress={() => setIsOpen(true)}
        accessibilityRole="combobox"
        accessibilityState={{
          disabled,
          expanded: isOpen,
        }}
        style={[
          styles.trigger,
          {
            height: sizeStyle.height,
            paddingHorizontal: sizeStyle.paddingHorizontal,
            borderRadius: 6,
            borderColor: error
              ? tokens['color-semantic-feedback-error']
              : isOpen
              ? tokens['color-semantic-action-primary']
              : tokens['color-semantic-border-default'],
            backgroundColor: tokens['color-semantic-surface-raised'],
            opacity: disabled ? 0.5 : 1,
          },
        ]}
      >
        <Text
          numberOfLines={1}
          style={[
            styles.triggerText,
            {
              fontSize: sizeStyle.fontSize,
              color: selectedOption
                ? tokens['color-semantic-text-primary']
                : tokens['color-semantic-text-muted'],
            },
          ]}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </Text>

        <Text
          style={[
            styles.arrowIcon,
            {
              color: tokens['color-semantic-text-muted'],
              transform: [{ rotate: isOpen ? '180deg' : '0deg' }],
            },
          ]}
        >
          ▼
        </Text>
      </TouchableOpacity>

      {error && (
        <Text
          style={[
            styles.error,
            { color: tokens['color-semantic-feedback-error'] },
          ]}
        >
          {error}
        </Text>
      )}

      <Modal
        visible={isOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <TouchableWithoutFeedback onPress={() => setIsOpen(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View
                style={[
                  styles.modalContent,
                  {
                    backgroundColor: tokens['color-semantic-surface'],
                    borderColor: tokens['color-semantic-border-default'],
                  },
                ]}
              >
                {label && (
                  <View
                    style={[
                      styles.modalHeader,
                      { borderBottomColor: tokens['color-semantic-border-subtle'] },
                    ]}
                  >
                    <Text
                      style={[
                        styles.modalTitle,
                        { color: tokens['color-semantic-text-primary'] },
                      ]}
                    >
                      {label}
                    </Text>
                  </View>
                )}

                <FlatList
                  data={options}
                  keyExtractor={(item) => item.value}
                  renderItem={({ item }) => {
                    const isItemSelected = item.value === selectedValue;
                    return (
                      <TouchableOpacity
                        activeOpacity={0.7}
                        disabled={item.disabled}
                        onPress={() => handleSelect(item)}
                        style={[
                          styles.optionItem,
                          {
                            backgroundColor: isItemSelected
                              ? tokens['color-semantic-action-primary']
                              : 'transparent',
                            opacity: item.disabled ? 0.4 : 1,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.optionText,
                            {
                              color: isItemSelected
                                ? tokens['color-semantic-text-inverse']
                                : tokens['color-semantic-text-primary'],
                              fontWeight: isItemSelected ? '600' : '400',
                            },
                          ]}
                        >
                          {item.label}
                        </Text>
                        {isItemSelected && (
                          <Text
                            style={[
                              styles.optionCheck,
                              { color: tokens['color-semantic-text-inverse'] },
                            ]}
                          >
                            ✓
                          </Text>
                        )}
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 6,
  },
  trigger: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
  },
  triggerText: {
    flex: 1,
    marginRight: 8,
  },
  arrowIcon: {
    fontSize: 10,
  },
  error: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: '500',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modalContent: {
    width: '100%',
    maxWidth: 360,
    maxHeight: 400,
    borderRadius: 8,
    borderWidth: 1,
    overflow: 'hidden',
  },
  modalHeader: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  optionText: {
    fontSize: 14,
  },
  optionCheck: {
    fontSize: 14,
    fontWeight: '700',
  },
});

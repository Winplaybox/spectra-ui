import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Platform,
  ViewStyle,
  StyleProp,
  TouchableWithoutFeedback,
} from 'react-native';
import { useTheme, useControllableState } from '@winplaybox/primitives';
import { getTokens } from '@winplaybox/tokens';
import { CalendarIcon, CloseIcon } from '../data-display/Icon';

// Safe dynamic resolution of @react-native-community/datetimepicker
let RNDateTimePicker: any = null;
let RNDateTimePickerAndroid: any = null;

try {
  const mod = require('@react-native-community/datetimepicker');
  RNDateTimePicker = mod.default || mod;
  RNDateTimePickerAndroid = mod.DateTimePickerAndroid;
} catch {
  // Graceful fallback when native community picker is not linked
}

export interface NativeDatePickerProps {
  /**
   * The selected Date value (controlled).
   */
  value?: Date;
  /**
   * Default Date value (uncontrolled).
   */
  defaultValue?: Date;
  /**
   * Callback fired when date is picked or cleared.
   */
  onChange?: (date: Date | undefined) => void;
  /**
   * Placeholder string shown when no date is selected.
   */
  placeholder?: string;
  /**
   * Field label text.
   */
  label?: string;
  /**
   * Error message string.
   */
  error?: string;
  /**
   * Whether the date picker trigger is disabled.
   */
  disabled?: boolean;
  /**
   * Minimum selectable date.
   */
  minDate?: Date;
  /**
   * Maximum selectable date.
   */
  maxDate?: Date;
  /**
   * Custom date formatting function. Defaults to YYYY-MM-DD.
   */
  formatDate?: (date: Date) => string;
  /**
   * Whether the selected date can be cleared.
   */
  clearable?: boolean;
  /**
   * Size scale of the input trigger.
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Container style override.
   */
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

const defaultFormatDate = (date: Date): string => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

const sizeHeights = {
  sm: 36,
  md: 44,
  lg: 52,
};

/**
 * Universal Native DatePicker component for Spectra UI.
 * Integrates native OS pickers (Android Dialog / iOS Modal Sheet) with Spectra tokens,
 * robust fallbacks, and zero emoji policy.
 */
export const DatePicker: React.FC<NativeDatePickerProps> = ({
  value: controlledValue,
  defaultValue,
  onChange,
  placeholder = 'Select date...',
  label,
  error,
  disabled = false,
  minDate,
  maxDate,
  formatDate = defaultFormatDate,
  clearable = true,
  size = 'md',
  style,
  testID,
}) => {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);

  const [selectedDate, setSelectedDate] = useControllableState<Date | undefined>({
    value: controlledValue,
    defaultValue,
    onChange,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [tempDate, setTempDate] = useState<Date>(selectedDate || new Date());

  const handleOpenPicker = () => {
    if (disabled) return;

    const baseDate = selectedDate || new Date();
    setTempDate(baseDate);

    // On Android, use native DateTimePickerAndroid dialog if available
    if (Platform.OS === 'android' && RNDateTimePickerAndroid?.open) {
      RNDateTimePickerAndroid.open({
        value: baseDate,
        onChange: (event: any, newDate?: Date) => {
          if (event.type === 'set' && newDate) {
            setSelectedDate(newDate);
          }
        },
        mode: 'date',
        minimumDate: minDate,
        maximumDate: maxDate,
      });
      return;
    }

    // On iOS or fallback, open modal sheet
    setIsOpen(true);
  };

  const handleConfirmIOS = () => {
    setSelectedDate(tempDate);
    setIsOpen(false);
  };

  const handleClear = () => {
    setSelectedDate(undefined);
  };

  const hasError = Boolean(error);
  const height = sizeHeights[size];

  return (
    <View style={[styles.container, style]} testID={testID}>
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

      {/* Trigger Button */}
      <TouchableOpacity
        activeOpacity={0.7}
        disabled={disabled}
        onPress={handleOpenPicker}
        accessibilityRole="button"
        accessibilityLabel={label || placeholder}
        style={[
          styles.trigger,
          {
            height,
            backgroundColor: disabled
              ? tokens['color-semantic-surface-sunken'] || '#f3f4f6'
              : tokens['color-semantic-surface'],
            borderColor: hasError
              ? tokens['color-semantic-feedback-error']
              : tokens['color-semantic-border-default'],
          },
        ]}
      >
        <Text
          style={[
            styles.triggerText,
            {
              color: selectedDate
                ? tokens['color-semantic-text-primary']
                : tokens['color-semantic-text-muted'],
            },
          ]}
          numberOfLines={1}
        >
          {selectedDate ? formatDate(selectedDate) : placeholder}
        </Text>

        <View style={styles.actionRow}>
          {clearable && selectedDate && !disabled && (
            <TouchableOpacity
              onPress={handleClear}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              style={styles.clearButton}
              accessibilityLabel="Clear date"
            >
              <CloseIcon size={14} color={tokens['color-semantic-text-muted']} />
            </TouchableOpacity>
          )}
          <View style={styles.iconWrapper}>
            <CalendarIcon size={18} color={tokens['color-semantic-text-secondary']} />
          </View>
        </View>
      </TouchableOpacity>

      {/* Error text */}
      {error && (
        <Text
          style={[
            styles.errorText,
            { color: tokens['color-semantic-feedback-error'] },
          ]}
        >
          {error}
        </Text>
      )}

      {/* Modal Picker for iOS or Fallback */}
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
                {/* Modal Header */}
                <View
                  style={[
                    styles.modalHeader,
                    { borderBottomColor: tokens['color-semantic-border-subtle'] },
                  ]}
                >
                  <TouchableOpacity
                    onPress={() => setIsOpen(false)}
                    style={styles.headerButton}
                  >
                    <Text
                      style={[
                        styles.cancelText,
                        { color: tokens['color-semantic-text-secondary'] },
                      ]}
                    >
                      Cancel
                    </Text>
                  </TouchableOpacity>

                  <Text
                    style={[
                      styles.modalTitle,
                      { color: tokens['color-semantic-text-primary'] },
                    ]}
                  >
                    Select Date
                  </Text>

                  <TouchableOpacity
                    onPress={handleConfirmIOS}
                    style={styles.headerButton}
                  >
                    <Text
                      style={[
                        styles.doneText,
                        { color: tokens['color-semantic-action-primary'] },
                      ]}
                    >
                      Done
                    </Text>
                  </TouchableOpacity>
                </View>

                {/* Picker Body */}
                <View style={styles.pickerContainer}>
                  {RNDateTimePicker ? (
                    <RNDateTimePicker
                      value={tempDate}
                      mode="date"
                      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                      minimumDate={minDate}
                      maximumDate={maxDate}
                      onChange={(_: any, date?: Date) => {
                        if (date) {
                          setTempDate(date);
                          if (Platform.OS !== 'ios') {
                            setSelectedDate(date);
                            setIsOpen(false);
                          }
                        }
                      }}
                      textColor={tokens['color-semantic-text-primary']}
                    />
                  ) : (
                    /* Fallback Notice when @react-native-community/datetimepicker is not installed */
                    <View style={styles.fallbackNotice}>
                      <Text
                        style={[
                          styles.fallbackTitle,
                          { color: tokens['color-semantic-text-primary'] },
                        ]}
                      >
                        {formatDate(tempDate)}
                      </Text>
                      <Text
                        style={[
                          styles.fallbackSubtitle,
                          { color: tokens['color-semantic-text-secondary'] },
                        ]}
                      >
                        Install @react-native-community/datetimepicker for native wheel picker dialogs.
                      </Text>
                    </View>
                  )}
                </View>
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
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  triggerText: {
    fontSize: 15,
    flex: 1,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  clearButton: {
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 12,
    marginTop: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderWidth: 1,
    borderBottomWidth: 0,
    paddingBottom: 24,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  headerButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  cancelText: {
    fontSize: 15,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  doneText: {
    fontSize: 15,
    fontWeight: '600',
  },
  pickerContainer: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
  },
  fallbackNotice: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  fallbackTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },
  fallbackSubtitle: {
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
  },
});

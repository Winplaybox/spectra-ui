import React, { createContext, useContext } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';
import { useTheme, useControllableState } from '@spectra/primitives';
import { getTokens } from '@spectra/tokens';

interface RadioGroupContextValue {
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  name?: string;
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

export interface NativeRadioGroupProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  name?: string;
  orientation?: 'vertical' | 'horizontal';
  children: React.ReactNode;
  style?: ViewStyle;
}

export const RadioGroup: React.FC<NativeRadioGroupProps> = ({
  value: controlledValue,
  defaultValue,
  onChange,
  disabled = false,
  name,
  orientation = 'vertical',
  children,
  style,
}) => {
  const [value, setValue] = useControllableState({
    value: controlledValue,
    defaultValue,
    onChange,
  });

  return (
    <RadioGroupContext.Provider
      value={{
        value,
        onChange: setValue,
        disabled,
        name,
      }}
    >
      <View
        accessibilityRole="radiogroup"
        style={[
          styles.group,
          orientation === 'horizontal' ? styles.groupHorizontal : styles.groupVertical,
          style,
        ]}
      >
        {children}
      </View>
    </RadioGroupContext.Provider>
  );
};

export interface NativeRadioProps {
  value: string;
  label?: React.ReactNode | string;
  description?: React.ReactNode | string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  testID?: string;
  style?: ViewStyle;
}

export const Radio: React.FC<NativeRadioProps> = ({
  value,
  label,
  description,
  disabled: itemDisabled = false,
  size = 'md',
  checked: controlledChecked,
  onChange,
  testID,
  style,
}) => {
  const group = useContext(RadioGroupContext);
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);

  const isChecked = group ? group.value === value : !!controlledChecked;
  const isDisabled = group?.disabled || itemDisabled;

  const handlePress = (_e: GestureResponderEvent) => {
    if (isDisabled) return;
    if (group?.onChange) {
      group.onChange(value);
    } else if (onChange) {
      onChange(true);
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return { outerSize: 16, innerSize: 8, fontSize: 12 };
      case 'lg':
        return { outerSize: 24, innerSize: 12, fontSize: 16 };
      case 'md':
      default:
        return { outerSize: 20, innerSize: 10, fontSize: 14 };
    }
  };

  const sizeStyle = getSizeStyles();

  return (
    <TouchableOpacity
      testID={testID}
      activeOpacity={0.7}
      disabled={isDisabled}
      onPress={handlePress}
      accessibilityRole="radio"
      accessibilityState={{
        checked: isChecked,
        disabled: isDisabled,
      }}
      style={[
        styles.container,
        { opacity: isDisabled ? 0.5 : 1 },
        style,
      ]}
    >
      <View
        style={[
          styles.outerCircle,
          {
            width: sizeStyle.outerSize,
            height: sizeStyle.outerSize,
            borderRadius: sizeStyle.outerSize / 2,
            borderColor: isChecked
              ? tokens['color-semantic-action-primary']
              : tokens['color-semantic-border-default'],
            backgroundColor: tokens['color-semantic-surface-raised'],
          },
        ]}
      >
        {isChecked && (
          <View
            style={[
              styles.innerDot,
              {
                width: sizeStyle.innerSize,
                height: sizeStyle.innerSize,
                borderRadius: sizeStyle.innerSize / 2,
                backgroundColor: tokens['color-semantic-action-primary'],
              },
            ]}
          />
        )}
      </View>

      {(label || description) && (
        <View style={styles.textWrapper}>
          {typeof label === 'string' ? (
            <Text
              style={[
                styles.label,
                {
                  fontSize: sizeStyle.fontSize,
                  color: tokens['color-semantic-text-primary'],
                },
              ]}
            >
              {label}
            </Text>
          ) : (
            label
          )}
          {typeof description === 'string' ? (
            <Text
              style={[
                styles.description,
                { color: tokens['color-semantic-text-muted'] },
              ]}
            >
              {description}
            </Text>
          ) : (
            description
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  group: {
    gap: 8,
  },
  groupVertical: {
    flexDirection: 'column',
  },
  groupHorizontal: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 4,
  },
  outerCircle: {
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  innerDot: {},
  textWrapper: {
    marginLeft: 10,
    flex: 1,
  },
  label: {
    fontWeight: '500',
  },
  description: {
    fontSize: 12,
    marginTop: 2,
  },
});

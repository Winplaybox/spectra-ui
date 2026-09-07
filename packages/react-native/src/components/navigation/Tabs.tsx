import React, { createContext, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';
import { useTheme, useControllableState } from '@spectra/primitives';
import { getTokens } from '@spectra/tokens';

interface TabsContextValue {
  value: string;
  onChange: (value: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

export interface NativeTabsProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  children: React.ReactNode;
  style?: ViewStyle;
}

export const Tabs: React.FC<NativeTabsProps> = ({
  value: controlledValue,
  defaultValue = '',
  onChange,
  children,
  style,
}) => {
  const [value, setValue] = useControllableState({
    value: controlledValue,
    defaultValue,
    onChange,
  });

  return (
    <TabsContext.Provider value={{ value: value || '', onChange: setValue }}>
      <View style={[styles.tabsRoot, style]}>{children}</View>
    </TabsContext.Provider>
  );
};

export interface NativeTabListProps {
  children: React.ReactNode;
  scrollable?: boolean;
  style?: ViewStyle;
}

export const TabList: React.FC<NativeTabListProps> = ({
  children,
  scrollable = false,
  style,
}) => {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);

  const containerStyle: ViewStyle = {
    borderBottomWidth: 1,
    borderBottomColor: tokens['color-semantic-border-subtle'],
  };

  if (scrollable) {
    return (
      <View style={[containerStyle, style]}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollList}
        >
          {children}
        </ScrollView>
      </View>
    );
  }

  return (
    <View
      accessibilityRole="tablist"
      style={[styles.tabList, containerStyle, style]}
    >
      {children}
    </View>
  );
};

export interface NativeTabProps {
  value: string;
  children?: React.ReactNode;
  label?: string;
  disabled?: boolean;
  testID?: string;
  style?: ViewStyle;
}

export const Tab: React.FC<NativeTabProps> = ({
  value,
  children,
  label,
  disabled = false,
  testID,
  style,
}) => {
  const context = useContext(TabsContext);
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);

  if (!context) {
    throw new Error('Tab must be used within a Tabs component');
  }

  const isSelected = context.value === value;

  const handlePress = (_e: GestureResponderEvent) => {
    if (disabled) return;
    context.onChange(value);
  };

  return (
    <TouchableOpacity
      testID={testID}
      activeOpacity={0.7}
      disabled={disabled}
      onPress={handlePress}
      accessibilityRole="tab"
      accessibilityState={{
        selected: isSelected,
        disabled,
      }}
      style={[
        styles.tab,
        {
          borderBottomColor: isSelected
            ? tokens['color-semantic-action-primary']
            : 'transparent',
          opacity: disabled ? 0.4 : 1,
        },
        style,
      ]}
    >
      {label ? (
        <Text
          style={[
            styles.tabText,
            {
              color: isSelected
                ? tokens['color-semantic-action-primary']
                : tokens['color-semantic-text-secondary'],
              fontWeight: isSelected ? '600' : '500',
            },
          ]}
        >
          {label}
        </Text>
      ) : typeof children === 'string' ? (
        <Text
          style={[
            styles.tabText,
            {
              color: isSelected
                ? tokens['color-semantic-action-primary']
                : tokens['color-semantic-text-secondary'],
              fontWeight: isSelected ? '600' : '500',
            },
          ]}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export interface NativeTabPanelsProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const TabPanels: React.FC<NativeTabPanelsProps> = ({
  children,
  style,
}) => {
  return <View style={[styles.tabPanels, style]}>{children}</View>;
};

export interface NativeTabPanelProps {
  value: string;
  children: React.ReactNode;
  style?: ViewStyle;
}

export const TabPanel: React.FC<NativeTabPanelProps> = ({
  value,
  children,
  style,
}) => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('TabPanel must be used within a Tabs component');
  }

  if (context.value !== value) {
    return null;
  }

  return (
    <View accessibilityRole="none" style={[styles.tabPanel, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  tabsRoot: {
    width: '100%',
  },
  tabList: {
    flexDirection: 'row',
  },
  scrollList: {
    flexDirection: 'row',
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 14,
  },
  tabPanels: {
    width: '100%',
  },
  tabPanel: {
    paddingTop: 16,
  },
});

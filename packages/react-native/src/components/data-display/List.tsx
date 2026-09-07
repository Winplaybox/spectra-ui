import React, { createContext, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';
import { useTheme } from '@spectra/primitives';
import { getTokens } from '@spectra/tokens';

interface ListContextValue {
  divided?: boolean;
}

const ListContext = createContext<ListContextValue>({ divided: false });

export interface NativeListProps {
  children: React.ReactNode;
  divided?: boolean;
  style?: ViewStyle;
}

export const List: React.FC<NativeListProps> = ({
  children,
  divided = false,
  style,
}) => {
  return (
    <ListContext.Provider value={{ divided }}>
      <View
        accessibilityRole="none"
        style={[styles.list, style]}
      >
        {children}
      </View>
    </ListContext.Provider>
  );
};

export interface NativeListItemProps {
  children: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  selected?: boolean;
  testID?: string;
  style?: ViewStyle;
}

export const ListItem: React.FC<NativeListItemProps> = ({
  children,
  onPress,
  disabled = false,
  selected = false,
  testID,
  style,
}) => {
  const { divided } = useContext(ListContext);
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);

  const isInteractive = !!onPress && !disabled;

  const itemContent = (
    <View
      style={[
        styles.listItemContent,
        {
          backgroundColor: selected
            ? tokens['color-semantic-surface-raised']
            : 'transparent',
          borderBottomWidth: divided ? 1 : 0,
          borderBottomColor: tokens['color-semantic-border-subtle'],
          opacity: disabled ? 0.4 : 1,
        },
        style,
      ]}
    >
      {children}
    </View>
  );

  if (isInteractive) {
    return (
      <TouchableOpacity
        testID={testID}
        activeOpacity={0.7}
        onPress={onPress}
        disabled={disabled}
        accessibilityRole="button"
        accessibilityState={{
          selected,
          disabled,
        }}
      >
        {itemContent}
      </TouchableOpacity>
    );
  }

  return (
    <View testID={testID} accessibilityRole="none">
      {itemContent}
    </View>
  );
};

export interface NativeListItemIconProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const ListItemIcon: React.FC<NativeListItemIconProps> = ({
  children,
  style,
}) => {
  return <View style={[styles.itemIcon, style]}>{children}</View>;
};

export interface NativeListItemTextProps {
  primary: React.ReactNode;
  secondary?: React.ReactNode;
  style?: ViewStyle;
}

export const ListItemText: React.FC<NativeListItemTextProps> = ({
  primary,
  secondary,
  style,
}) => {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);

  return (
    <View style={[styles.itemTextContainer, style]}>
      {typeof primary === 'string' ? (
        <Text
          style={[
            styles.primaryText,
            { color: tokens['color-semantic-text-primary'] },
          ]}
        >
          {primary}
        </Text>
      ) : (
        primary
      )}
      {secondary && (
        typeof secondary === 'string' ? (
          <Text
            style={[
              styles.secondaryText,
              { color: tokens['color-semantic-text-muted'] },
            ]}
          >
            {secondary}
          </Text>
        ) : (
          secondary
        )
      )}
    </View>
  );
};

export interface NativeListItemActionProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const ListItemAction: React.FC<NativeListItemActionProps> = ({
  children,
  style,
}) => {
  return <View style={[styles.itemAction, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
  listItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  itemIcon: {
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  primaryText: {
    fontSize: 14,
    fontWeight: '500',
  },
  secondaryText: {
    fontSize: 12,
    marginTop: 2,
  },
  itemAction: {
    marginLeft: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React, { createContext, useContext, useState, useId } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { useTheme } from '@spectra/primitives';
import { getTokens } from '@spectra/tokens';

if (typeof Platform !== 'undefined' && Platform?.OS === 'android' && UIManager?.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface AccordionContextValue {
  expandedItems: string[];
  toggleItem: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextValue>({
  expandedItems: [],
  toggleItem: () => {},
});

interface AccordionItemContextValue {
  value: string;
  isExpanded: boolean;
  headerId: string;
  panelId: string;
}

const AccordionItemContext = createContext<AccordionItemContextValue>({
  value: '',
  isExpanded: false,
  headerId: '',
  panelId: '',
});

export interface NativeAccordionProps {
  children: React.ReactNode;
  multiple?: boolean;
  value?: string | string[];
  defaultValue?: string | string[];
  onChange?: (value: string | string[]) => void;
  style?: ViewStyle;
}

export const Accordion: React.FC<NativeAccordionProps> = ({
  children,
  multiple = false,
  value: controlledValue,
  defaultValue = [],
  onChange,
  style,
}) => {
  const isControlled = controlledValue !== undefined;
  const initial = Array.isArray(defaultValue) ? defaultValue : [defaultValue].filter(Boolean);
  const [internalExpanded, setInternalExpanded] = useState<string[]>(initial);

  const expandedItems = isControlled
    ? Array.isArray(controlledValue)
      ? controlledValue
      : [controlledValue].filter(Boolean)
    : internalExpanded;

  const toggleItem = (itemValue: string) => {
    if (LayoutAnimation?.configureNext && LayoutAnimation?.Presets?.easeInEaseOut) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
    let next: string[];
    if (multiple) {
      next = expandedItems.includes(itemValue)
        ? expandedItems.filter((i) => i !== itemValue)
        : [...expandedItems, itemValue];
    } else {
      next = expandedItems.includes(itemValue) ? [] : [itemValue];
    }

    if (!isControlled) {
      setInternalExpanded(next);
    }
    onChange?.(multiple ? next : next[0] || '');
  };

  return (
    <AccordionContext.Provider value={{ expandedItems, toggleItem }}>
      <View style={[styles.accordion, style]}>{children}</View>
    </AccordionContext.Provider>
  );
};

export interface NativeAccordionItemProps {
  children: React.ReactNode;
  value: string;
  disabled?: boolean;
  style?: ViewStyle;
}

export const AccordionItem: React.FC<NativeAccordionItemProps> = ({
  children,
  value,
  disabled = false,
  style,
}) => {
  const { expandedItems } = useContext(AccordionContext);
  const isExpanded = expandedItems.includes(value);
  const headerId = useId();
  const panelId = useId();

  return (
    <AccordionItemContext.Provider value={{ value, isExpanded, headerId, panelId }}>
      <View style={[styles.item, disabled && styles.itemDisabled, style]}>
        {children}
      </View>
    </AccordionItemContext.Provider>
  );
};

export interface NativeAccordionHeaderProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const AccordionHeader: React.FC<NativeAccordionHeaderProps> = ({
  children,
  style,
}) => {
  const { value, isExpanded } = useContext(AccordionItemContext);
  const { toggleItem } = useContext(AccordionContext);
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={{ expanded: isExpanded }}
      onPress={() => toggleItem(value)}
      activeOpacity={0.7}
      style={[
        styles.header,
        {
          backgroundColor: tokens['color-semantic-surface'],
          borderBottomColor: tokens['color-semantic-border-subtle'],
        },
        style,
      ]}
    >
      <Text
        style={[
          styles.headerText,
          {
            color: tokens['color-semantic-text-primary'],
          },
        ]}
      >
        {children}
      </Text>
      <Text
        style={[
          styles.chevron,
          {
            color: tokens['color-semantic-text-secondary'],
            transform: [{ rotate: isExpanded ? '90deg' : '0deg' }],
          },
        ]}
      >
        ▶
      </Text>
    </TouchableOpacity>
  );
};

export interface NativeAccordionPanelProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const AccordionPanel: React.FC<NativeAccordionPanelProps> = ({
  children,
  style,
}) => {
  const { isExpanded } = useContext(AccordionItemContext);
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);

  if (!isExpanded) {
    return null;
  }

  return (
    <View
      accessibilityRole="region"
      style={[
        styles.panel,
        {
          backgroundColor: tokens['color-semantic-surface'],
          borderBottomColor: tokens['color-semantic-border-subtle'],
        },
        style,
      ]}
    >
      {typeof children === 'string' ? (
        <Text style={[styles.panelText, { color: tokens['color-semantic-text-secondary'] }]}>
          {children}
        </Text>
      ) : (
        children
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  accordion: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 8,
    overflow: 'hidden',
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.06)',
  },
  itemDisabled: {
    opacity: 0.5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
    minHeight: 48,
  },
  headerText: {
    fontSize: 15,
    fontWeight: '600',
    flex: 1,
  },
  chevron: {
    fontSize: 12,
    marginLeft: 8,
  },
  panel: {
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  panelText: {
    fontSize: 14,
    lineHeight: 20,
  },
});

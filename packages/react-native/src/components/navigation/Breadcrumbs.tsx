import React from 'react';
import { View, Text, StyleSheet, Pressable, ViewStyle } from 'react-native';
import { useTheme } from '@spectra/primitives';
import { getTokens } from '@spectra/tokens';

export interface NativeBreadcrumbItem {
  label: string;
  onPress?: () => void;
  isCurrent?: boolean;
}

export interface NativeBreadcrumbsProps {
  items: NativeBreadcrumbItem[];
  separator?: string;
  style?: ViewStyle;
}

export const Breadcrumbs: React.FC<NativeBreadcrumbsProps> = ({
  items,
  separator = '›',
  style,
}) => {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);

  return (
    <View accessibilityRole="navigation" style={[styles.container, style]}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1 || item.isCurrent;

        return (
          <React.Fragment key={index}>
            {item.onPress && !isLast ? (
              <Pressable onPress={item.onPress} accessibilityRole="link">
                <Text style={[styles.link, { color: tokens['color-semantic-text-secondary'] }]}>
                  {item.label}
                </Text>
              </Pressable>
            ) : (
              <Text
                style={[
                  isLast ? styles.current : styles.link,
                  {
                    color: isLast
                      ? tokens['color-semantic-text-primary']
                      : tokens['color-semantic-text-secondary'],
                  },
                ]}
              >
                {item.label}
              </Text>
            )}
            {!isLast && (
              <Text style={[styles.separator, { color: tokens['color-semantic-text-muted'] }]}>
                {separator}
              </Text>
            )}
          </React.Fragment>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  link: {
    fontSize: 13,
  },
  current: {
    fontSize: 13,
    fontWeight: '600',
  },
  separator: {
    marginHorizontal: 6,
    fontSize: 14,
  },
});

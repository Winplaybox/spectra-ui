// packages/react-native/src/components/data-display/Table.tsx
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ViewStyle,
  StyleProp,
} from 'react-native';
import { useTheme } from '@winplaybox/primitives';
import { getTokens } from '@winplaybox/tokens';
import { getIosTheme } from '../../theme/ios';
import { getM3Theme } from '../../theme/android';

export interface TableColumn<T = any> {
  key: string;
  title: string;
  width?: number;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, record: T, index: number) => React.ReactNode;
}

export interface NativeTableProps<T = any> {
  columns: TableColumn<T>[];
  data: T[];
  keyExtractor?: (item: T, index: number) => string;
  onRowPress?: (item: T, index: number) => void;
  striped?: boolean;
  dense?: boolean;
  variant?: 'adaptive' | 'standard' | 'insetGrouped';
  style?: StyleProp<ViewStyle>;
}

/**
 * Adaptive Table for React Native
 * Benchmarked directly against Figma Adaptive Tables Community Kit:
 * - On iOS: Adapts to HIG Inset Grouped Table view with disclosure indicators and grouped surfaces.
 * - On Android: Adapts to Material 3 Data Table with surface container card and horizontal scrolling.
 */
export function Table<T extends Record<string, any>>({
  columns,
  data,
  keyExtractor = (item, idx) => item.id?.toString() || idx.toString(),
  onRowPress,
  striped = false,
  dense = false,
  variant = 'adaptive',
  style,
}: NativeTableProps<T>): React.ReactElement {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);
  const iosTheme = getIosTheme(colorScheme === 'dark' ? 'dark' : 'light');
  const m3Theme = getM3Theme(colorScheme === 'dark' ? 'dark' : 'light');

  const isIos = Platform.OS === 'ios' || variant === 'insetGrouped';

  // iOS HIG Inset Grouped List adaptation
  if (isIos && variant !== 'standard') {
    return (
      <View
        accessibilityRole="summary"
        style={[
          styles.iosContainer,
          {
            backgroundColor: iosTheme.colors.secondarySystemGroupedBackground,
            borderColor: iosTheme.colors.separator,
          },
          style,
        ]}
      >
        {data.map((row, index) => {
          const isLast = index === data.length - 1;
          const primaryCol = columns[0];
          const secondaryCols = columns.slice(1);

          return (
            <TouchableOpacity
              key={keyExtractor(row, index)}
              activeOpacity={onRowPress ? 0.6 : 1}
              onPress={onRowPress ? () => onRowPress(row, index) : undefined}
              style={[
                styles.iosRow,
                {
                  paddingVertical: dense ? 10 : 14,
                  borderBottomColor: iosTheme.colors.separator,
                  borderBottomWidth: isLast ? 0 : 0.5,
                },
              ]}
            >
              <View style={styles.iosRowContent}>
                <Text
                  style={[
                    styles.iosPrimaryText,
                    { color: iosTheme.colors.label },
                  ]}
                >
                  {primaryCol.render
                    ? primaryCol.render(row[primaryCol.key], row, index)
                    : row[primaryCol.key]}
                </Text>

                <View style={styles.iosSecondaryGroup}>
                  {secondaryCols.map((col) => (
                    <Text
                      key={col.key}
                      style={[
                        styles.iosSecondaryText,
                        { color: iosTheme.colors.secondaryLabel },
                      ]}
                    >
                      {col.render
                        ? col.render(row[col.key], row, index)
                        : row[col.key]}
                    </Text>
                  ))}
                </View>
              </View>

              {onRowPress && (
                <Text
                  style={[
                    styles.iosChevron,
                    { color: iosTheme.colors.tertiaryLabel },
                  ]}
                >
                  ›
                </Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  // Android Material 3 / Standard Cross-Platform Data Table
  return (
    <View
      style={[
        styles.m3Container,
        {
          backgroundColor: m3Theme.colors.surfaceContainer,
          borderColor: m3Theme.colors.outlineVariant,
        },
        style,
      ]}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View>
          {/* Table Header Row */}
          <View
            style={[
              styles.m3HeaderRow,
              {
                backgroundColor: m3Theme.colors.surfaceContainerHigh,
                borderBottomColor: m3Theme.colors.outlineVariant,
              },
            ]}
          >
            {columns.map((col) => (
              <View
                key={col.key}
                style={[
                  styles.m3Cell,
                  { width: col.width || 120, alignItems: col.align === 'right' ? 'flex-end' : 'flex-start' },
                ]}
              >
                <Text
                  style={[
                    styles.m3HeaderText,
                    { color: m3Theme.colors.onSurfaceVariant },
                  ]}
                >
                  {col.title}
                </Text>
              </View>
            ))}
          </View>

          {/* Table Body Rows */}
          {data.map((row, index) => {
            const isLast = index === data.length - 1;
            const isStriped = striped && index % 2 === 1;

            return (
              <TouchableOpacity
                key={keyExtractor(row, index)}
                activeOpacity={onRowPress ? 0.7 : 1}
                onPress={onRowPress ? () => onRowPress(row, index) : undefined}
                style={[
                  styles.m3BodyRow,
                  {
                    paddingVertical: dense ? 8 : 12,
                    backgroundColor: isStriped
                      ? m3Theme.colors.surfaceContainerLow
                      : m3Theme.colors.surfaceContainer,
                    borderBottomColor: m3Theme.colors.outlineVariant,
                    borderBottomWidth: isLast ? 0 : 1,
                  },
                ]}
              >
                {columns.map((col) => (
                  <View
                    key={col.key}
                    style={[
                      styles.m3Cell,
                      { width: col.width || 120, alignItems: col.align === 'right' ? 'flex-end' : 'flex-start' },
                    ]}
                  >
                    {col.render ? (
                      col.render(row[col.key], row, index)
                    ) : (
                      <Text
                        style={[
                          styles.m3CellText,
                          { color: m3Theme.colors.onSurface },
                        ]}
                      >
                        {row[col.key]}
                      </Text>
                    )}
                  </View>
                ))}
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // iOS Inset Grouped Table
  iosContainer: {
    borderRadius: 12,
    borderWidth: 0.5,
    overflow: 'hidden',
    paddingHorizontal: 16,
  },
  iosRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iosRowContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 8,
  },
  iosPrimaryText: {
    fontSize: 16,
    fontWeight: '500',
  },
  iosSecondaryGroup: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  iosSecondaryText: {
    fontSize: 14,
  },
  iosChevron: {
    fontSize: 20,
    fontWeight: '300',
    marginLeft: 4,
  },

  // Material 3 Data Table
  m3Container: {
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
  },
  m3HeaderRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  m3HeaderText: {
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.1,
  },
  m3BodyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  m3Cell: {
    paddingHorizontal: 6,
    justifyContent: 'center',
  },
  m3CellText: {
    fontSize: 14,
  },
});

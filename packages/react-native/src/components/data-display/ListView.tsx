import React from 'react';
import {
  FlatList as RNFlatList,
  FlatListProps as RNFlatListProps,
  View,
  RefreshControl,
  StyleSheet,
  ViewStyle,
  StyleProp,
  ListRenderItemInfo,
} from 'react-native';
import { useTheme } from '@winplaybox/primitives';
import { getTokens } from '@winplaybox/tokens';
import { Text } from '../layout/Text';
import { BoxPadding } from '../layout/Box';

export interface NativeListViewProps<T> extends Omit<RNFlatListProps<T>, 'style' | 'contentContainerStyle' | 'data'> {
  data?: Readonly<ArrayLike<T>> | null;
  renderItem: (info: ListRenderItemInfo<T>) => React.ReactElement | null;
  /**
   * Automatically adds a 1px divider using Spectra border tokens between items.
   */
  divided?: boolean;
  /**
   * Container padding scale matching Spectra Box tokens.
   */
  padding?: BoxPadding;
  /**
   * Empty state component rendered when data list is empty.
   */
  emptyState?: React.ReactNode;
  /**
   * Convenient fallback message string when data list is empty.
   */
  emptyText?: string;
  /**
   * Pull-to-refresh active state indicator.
   */
  refreshing?: boolean;
  /**
   * Pull-to-refresh trigger callback.
   */
  onRefresh?: () => void;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

const resolveSpacing = (val?: BoxPadding): number | undefined => {
  if (val === undefined) return undefined;
  if (typeof val === 'number') return val;
  switch (val) {
    case 'none':
      return 0;
    case 'xs':
      return 4;
    case 'sm':
      return 8;
    case 'lg':
      return 24;
    case 'xl':
      return 32;
    case 'md':
    default:
      return 16;
  }
};

/**
 * ListView - Token-aware high-performance virtualized list for Spectra UI Native.
 * Features built-in dividers, theme-synchronized pull-to-refresh, and empty state handling.
 */
export function ListView<T>({
  data,
  renderItem,
  divided = false,
  padding,
  emptyState,
  emptyText = 'No items found',
  refreshing,
  onRefresh,
  ItemSeparatorComponent,
  ListEmptyComponent,
  style,
  contentContainerStyle,
  ...props
}: NativeListViewProps<T>): React.ReactElement {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);

  const resolvedPadding = resolveSpacing(padding);

  const defaultSeparator = () => (
    <View
      style={{
        height: 1,
        backgroundColor: tokens['color-semantic-border-subtle'] || '#f5f5f5',
        width: '100%',
      }}
    />
  );

  const defaultEmpty = () => {
    if (emptyState) return <>{emptyState}</>;
    return (
      <View style={styles.emptyContainer}>
        <Text color="muted" size="md">
          {emptyText}
        </Text>
      </View>
    );
  };

  const refreshControl =
    onRefresh !== undefined ? (
      <RefreshControl
        refreshing={Boolean(refreshing)}
        onRefresh={onRefresh}
        tintColor={tokens['color-semantic-action-primary'] || '#1fae7d'}
        colors={[tokens['color-semantic-action-primary'] || '#1fae7d']}
        progressBackgroundColor={tokens['color-semantic-surface-raised'] || '#ffffff'}
      />
    ) : undefined;

  return (
    <RNFlatList<T>
      data={data ?? undefined}
      renderItem={renderItem}
      style={style}
      contentContainerStyle={[
        resolvedPadding !== undefined && { padding: resolvedPadding },
        (!data || data.length === 0) && styles.emptyContentContainer,
        contentContainerStyle,
      ]}
      ItemSeparatorComponent={divided ? (ItemSeparatorComponent || defaultSeparator) : ItemSeparatorComponent}
      ListEmptyComponent={ListEmptyComponent || defaultEmpty}
      refreshControl={refreshControl}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyContentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

// packages/react-native/src/components/actions/ButtonGroup.tsx
import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { useTheme } from '@winplaybox/primitives';
import { getTokens } from '@winplaybox/tokens';

export interface NativeButtonGroupProps {
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
  style?: StyleProp<ViewStyle>;
}

/**
 * ButtonGroup - Container that coordinates related native buttons with unified border geometry.
 */
export const ButtonGroup: React.FC<NativeButtonGroupProps> = ({
  children,
  orientation = 'horizontal',
  style,
}) => {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);

  const isHorizontal = orientation === 'horizontal';
  const childArray = React.Children.toArray(children);

  return (
    <View
      accessibilityRole="toolbar"
      style={[
        styles.container,
        isHorizontal ? styles.horizontal : styles.vertical,
        {
          borderColor: tokens['color-semantic-border-default'],
        },
        style,
      ]}
    >
      {childArray.map((child, index) => {
        if (!React.isValidElement(child)) return child;

        const isFirst = index === 0;
        const isLast = index === childArray.length - 1;

        const borderOverride: ViewStyle = isHorizontal
          ? {
              borderTopRightRadius: isLast ? 8 : 0,
              borderBottomRightRadius: isLast ? 8 : 0,
              borderTopLeftRadius: isFirst ? 8 : 0,
              borderBottomLeftRadius: isFirst ? 8 : 0,
              borderRightWidth: isLast ? 1 : 0,
            }
          : {
              borderTopLeftRadius: isFirst ? 8 : 0,
              borderTopRightRadius: isFirst ? 8 : 0,
              borderBottomLeftRadius: isLast ? 8 : 0,
              borderBottomRightRadius: isLast ? 8 : 0,
              borderBottomWidth: isLast ? 1 : 0,
            };

        return React.cloneElement(child as React.ReactElement<any>, {
          style: [child.props.style, borderOverride],
        });
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 8,
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vertical: {
    flexDirection: 'column',
  },
});

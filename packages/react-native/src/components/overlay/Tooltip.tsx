import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ViewStyle,
  TouchableWithoutFeedback,
  LayoutRectangle,
} from 'react-native';
import { useTheme } from '@spectra/primitives';
import { getTokens } from '@spectra/tokens';

export interface NativeTooltipProps {
  content: React.ReactNode | string;
  children: React.ReactElement;
  position?: 'top' | 'bottom';
  delay?: number;
  testID?: string;
  style?: ViewStyle;
}

export const Tooltip: React.FC<NativeTooltipProps> = ({
  content,
  children,
  position = 'top',
  delay = 1500,
  testID,
  style,
}) => {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);
  const [visible, setVisible] = useState(false);
  const [targetLayout, setTargetLayout] = useState<LayoutRectangle | null>(null);
  const triggerRef = useRef<any>(null);
  const timerRef = useRef<any>(null);

  const showTooltip = () => {
    if (triggerRef.current && typeof triggerRef.current.measureInWindow === 'function') {
      triggerRef.current.measureInWindow((x: number, y: number, width: number, height: number) => {
        setTargetLayout({ x, y, width, height });
        setVisible(true);

        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          setVisible(false);
        }, delay);
      });
    } else {
      setVisible(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setVisible(false);
      }, delay);
    }
  };

  const hideTooltip = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(false);
  };

  return (
    <>
      <View
        ref={triggerRef}
        collapsable={false}
        style={style}
      >
        <TouchableOpacity
          testID={testID}
          activeOpacity={0.8}
          onPress={showTooltip}
          onLongPress={showTooltip}
          accessibilityRole="button"
          accessibilityHint="Shows information tooltip"
        >
          {children}
        </TouchableOpacity>
      </View>

      <Modal
        visible={visible}
        transparent
        animationType="none"
        onRequestClose={hideTooltip}
      >
        <TouchableWithoutFeedback onPress={hideTooltip}>
          <View style={styles.overlay}>
            {targetLayout && (
              <View
                style={[
                  styles.tooltipBubble,
                  {
                    backgroundColor: tokens['color-semantic-surface-overlay'],
                    borderColor: tokens['color-semantic-border-default'],
                    left: Math.max(12, targetLayout.x + targetLayout.width / 2 - 80),
                    top:
                      position === 'top'
                        ? Math.max(20, targetLayout.y - 44)
                        : targetLayout.y + targetLayout.height + 8,
                  },
                ]}
              >
                {typeof content === 'string' ? (
                  <Text
                    style={[
                      styles.tooltipText,
                      { color: tokens['color-semantic-text-inverse'] },
                    ]}
                  >
                    {content}
                  </Text>
                ) : (
                  content
                )}
              </View>
            )}
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
  },
  tooltipBubble: {
    position: 'absolute',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    minWidth: 60,
    maxWidth: 240,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tooltipText: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
});

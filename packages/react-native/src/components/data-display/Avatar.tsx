import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';
import { useTheme } from '@winplaybox/primitives';
import { getTokens } from '@winplaybox/tokens';

export type NativeAvatarStatus =
  | 'online'
  | 'offline'
  | 'busy'
  | 'away'
  | 'dnd'
  | 'in-meeting'
  | 'meeting'
  | 'focus'
  | 'idle'
  | 'invisible'
  | 'streaming';

export interface NativeAvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'circle' | 'rounded' | 'square';
  status?: NativeAvatarStatus;
  testID?: string;
  style?: ViewStyle;
}

export const Avatar: React.FC<NativeAvatarProps> = ({
  src,
  alt,
  name,
  size = 'md',
  variant = 'circle',
  status,
  testID,
  style,
}) => {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);
  const [hasError, setHasError] = useState(false);

  const getInitials = (text?: string): string => {
    if (!text) return '?';
    const parts = text.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'xs':
        return { dim: 24, fontSize: 10, statusDim: 8, statusBorder: 1.5 };
      case 'sm':
        return { dim: 32, fontSize: 12, statusDim: 10, statusBorder: 2 };
      case 'lg':
        return { dim: 48, fontSize: 18, statusDim: 14, statusBorder: 2 };
      case 'xl':
        return { dim: 64, fontSize: 24, statusDim: 18, statusBorder: 2.5 };
      case 'md':
      default:
        return { dim: 40, fontSize: 14, statusDim: 12, statusBorder: 2 };
    }
  };

  const getBorderRadius = (dim: number) => {
    switch (variant) {
      case 'square':
        return 0;
      case 'rounded':
        return dim * 0.2;
      case 'circle':
      default:
        return dim / 2;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'online':
        return tokens['color-semantic-feedback-success'] || '#10B981';
      case 'busy':
      case 'dnd':
        return tokens['color-semantic-feedback-error'] || '#EF4444';
      case 'away':
        return tokens['color-semantic-feedback-warning'] || '#F59E0B';
      case 'in-meeting':
      case 'meeting':
        return '#8B5CF6';
      case 'focus':
        return '#6366F1';
      case 'idle':
        return tokens['color-semantic-surface'] || '#1E293B';
      case 'invisible':
        return tokens['color-semantic-surface'] || '#1E293B';
      case 'streaming':
        return '#A855F7';
      case 'offline':
      default:
        return tokens['color-semantic-text-muted'] || '#6B7280';
    }
  };

  const sizeStyle = getSizeStyles();
  const borderRadius = getBorderRadius(sizeStyle.dim);
  const initials = getInitials(name || alt);

  return (
    <View
      testID={testID}
      accessibilityRole="image"
      accessibilityLabel={alt || name || 'Avatar'}
      style={[
        styles.container,
        {
          width: sizeStyle.dim,
          height: sizeStyle.dim,
        },
        style,
      ]}
    >
      <View
        style={[
          styles.avatarBody,
          {
            width: sizeStyle.dim,
            height: sizeStyle.dim,
            borderRadius,
            backgroundColor: tokens['color-semantic-surface-raised'],
            borderColor: tokens['color-semantic-border-default'],
          },
        ]}
      >
        {src && !hasError ? (
          <Image
            source={{ uri: src } as ImageSourcePropType}
            onError={() => setHasError(true)}
            style={{
              width: sizeStyle.dim,
              height: sizeStyle.dim,
              borderRadius,
            }}
            resizeMode="cover"
          />
        ) : (
          <Text
            style={[
              styles.initials,
              {
                fontSize: sizeStyle.fontSize,
                color: tokens['color-semantic-text-primary'],
              },
            ]}
          >
            {initials}
          </Text>
        )}
      </View>

      {status && (
        <View
          style={[
            styles.statusBadge,
            {
              width: sizeStyle.statusDim,
              height: sizeStyle.statusDim,
              borderRadius: sizeStyle.statusDim / 2,
              borderWidth: sizeStyle.statusBorder,
              borderColor:
                status === 'invisible'
                  ? tokens['color-semantic-text-muted'] || '#6B7280'
                  : status === 'idle'
                  ? tokens['color-semantic-feedback-warning'] || '#F59E0B'
                  : tokens['color-semantic-surface'] || '#0F172A',
              backgroundColor: getStatusColor(),
            },
          ]}
        >
          {status === 'dnd' && (
            <View
              style={{
                width: sizeStyle.statusDim * 0.5,
                height: 2,
                backgroundColor: '#ffffff',
                borderRadius: 1,
              }}
            />
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  avatarBody: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    overflow: 'hidden',
  },
  initials: {
    fontWeight: '600',
  },
  statusBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

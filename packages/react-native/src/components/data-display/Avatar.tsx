import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';
import { useTheme } from '@spectra/primitives';
import { getTokens } from '@spectra/tokens';

export interface NativeAvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'circle' | 'rounded' | 'square';
  status?: 'online' | 'offline' | 'busy' | 'away';
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
        return { dim: 24, fontSize: 10, statusDim: 6, statusBorder: 1.5 };
      case 'sm':
        return { dim: 32, fontSize: 12, statusDim: 8, statusBorder: 2 };
      case 'lg':
        return { dim: 48, fontSize: 18, statusDim: 12, statusBorder: 2 };
      case 'xl':
        return { dim: 64, fontSize: 24, statusDim: 14, statusBorder: 2.5 };
      case 'md':
      default:
        return { dim: 40, fontSize: 14, statusDim: 10, statusBorder: 2 };
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
        return tokens['color-semantic-feedback-success'];
      case 'busy':
        return tokens['color-semantic-feedback-error'];
      case 'away':
        return tokens['color-semantic-feedback-warning'];
      case 'offline':
      default:
        return tokens['color-semantic-text-muted'];
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
              borderColor: tokens['color-semantic-surface'],
              backgroundColor: getStatusColor(),
            },
          ]}
        />
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
  },
});

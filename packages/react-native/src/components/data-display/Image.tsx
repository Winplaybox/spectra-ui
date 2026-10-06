import React, { useState } from 'react';
import {
  Image as RNImage,
  ImageProps as RNImageProps,
  View,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useTheme } from '@winplaybox/primitives';
import { getTokens } from '@winplaybox/tokens';
import { BoxRadius } from '../layout/Box';

export interface NativeImageProps extends Omit<RNImageProps, 'style'> {
  radius?: BoxRadius;
  aspectRatio?: number;
  fit?: 'cover' | 'contain' | 'stretch' | 'center';
  fallback?: React.ReactNode;
  style?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const resolveRadius = (val?: BoxRadius): number | undefined => {
  if (val === undefined) return undefined;
  if (typeof val === 'number') return val;
  switch (val) {
    case 'none':
      return 0;
    case 'xs':
      return 4;
    case 'sm':
      return 6;
    case 'lg':
      return 12;
    case 'xl':
      return 16;
    case 'full':
      return 9999;
    case 'md':
    default:
      return 8;
  }
};

/**
 * Image - Design-token integrated image component for Spectra UI Native.
 * Provides fallback handling, aspect-ratio containment, and token-based border radius.
 */
export const Image: React.FC<NativeImageProps> = ({
  radius,
  aspectRatio,
  fit = 'cover',
  fallback,
  style,
  containerStyle,
  onError,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);

  const borderRadius = resolveRadius(radius);

  if (hasError && fallback) {
    return (
      <View
        style={[
          {
            overflow: 'hidden',
            backgroundColor: tokens['color-semantic-surface-raised'] || '#f3f4f6',
            justifyContent: 'center',
            alignItems: 'center',
            ...(borderRadius !== undefined && { borderRadius }),
            ...(aspectRatio !== undefined && { aspectRatio }),
          },
          containerStyle,
        ]}
      >
        {fallback}
      </View>
    );
  }

  const imageStyles: StyleProp<ImageStyle> = [
    {
      resizeMode: fit,
      ...(borderRadius !== undefined && { borderRadius }),
      ...(aspectRatio !== undefined && { aspectRatio }),
    },
    style,
  ];

  return (
    <RNImage
      onError={(e) => {
        setHasError(true);
        onError?.(e);
      }}
      style={imageStyles}
      {...rest}
    />
  );
};

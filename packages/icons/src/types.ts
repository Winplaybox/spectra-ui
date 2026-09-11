import React from 'react';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  fillOpacity?: number | string;
  className?: string;
  styleVariant?: 'core' | 'filled' | 'outlined' | 'rounded' | 'sharp' | 'twotone' | 'brand' | 'monochrome';
}

export type TwoToneIconProps = IconProps;

export interface IconMetadata {
  id: string;
  name: string;
  componentName: string;
  alias?: string;
  category: string;
  style?: string;
  tags: string[];
}


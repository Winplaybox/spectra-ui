import React from 'react';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  className?: string;
}

export interface IconMetadata {
  id: string;
  name: string;
  componentName: string;
  category: string;
  tags: string[];
}

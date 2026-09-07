import React from 'react';
import { IconProps } from '../types';

export const MinusIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  strokeWidth = 1.5,
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="M4 12C4 11.72 4.22 11.5 4.5 11.5H19.5C19.78 11.5 20 11.72 20 12C20 12.28 19.78 12.5 19.5 12.5H4.5C4.22 12.5 4 12.28 4 12Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

MinusIcon.displayName = 'MinusIcon';

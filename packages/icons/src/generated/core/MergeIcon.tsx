import React from 'react';
import { IconProps } from '../../types';

export const MergeIcon: React.FC<IconProps> = ({
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
    <path d="M2 6H5.33C6.41 6 7.46 6.35 8.33 7L13.66 11C14.53 11.65 15.58 12 16.66 12H22H16.67C15.59 12 14.54 12.35 13.67 13L8.34 17C7.47 17.65 6.42 18 5.34 18H2" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
<path d="M18 16L22 12L18 8" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

MergeIcon.displayName = 'MergeIcon';

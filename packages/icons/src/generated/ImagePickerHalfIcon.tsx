import React from 'react';
import { IconProps } from '../types';

export const ImagePickerHalfIcon: React.FC<IconProps> = ({
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
    <path d="M8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V16.7639C16 17.5215 15.572 18.214 14.8944 18.5528L14 19L13 22H11L10 19L9.10557 18.5528C8.428 18.214 8 17.5215 8 16.7639V6Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 7L5 7" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16L12 12" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ImagePickerHalfIcon.displayName = 'ImagePickerHalfIcon';

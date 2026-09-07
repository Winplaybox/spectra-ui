import React from 'react';
import { IconProps } from '../types';

export const ImageFrameIcon: React.FC<IconProps> = ({
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
    <path d="M17.9999 2V16C17.9999 17.1 17.0999 18 15.9999 18H1.99988" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.0001 6H8.00012C6.90012 6 6.00012 6.9 6.00012 8V22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 6L8.00024 6.00024C6.90024 6.00024 6.00024 6.90024 6.00024 8.00024V17.9998L16 18C17.1 18 18 17.1 18 16V6Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ImageFrameIcon.displayName = 'ImageFrameIcon';

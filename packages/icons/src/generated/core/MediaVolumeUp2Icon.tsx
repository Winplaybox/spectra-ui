import React from 'react';
import { IconProps } from '../../types';

export const MediaVolumeUp2Icon: React.FC<IconProps> = ({
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
    <path d="M18 4.00999C20.43 5.82999 22 8.72999 22 12C22 15.27 20.43 18.17 18 19.99" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 8.23C16.39 8.64 16.72 9.12 16.96 9.64C17 9.71 17.04 9.78 17.07 9.86C17.34 10.52 17.5 11.24 17.5 12C17.5 12.76 17.34 13.48 17.07 14.14C17.04 14.22 17 14.29 16.96 14.36C16.72 14.88 16.39 15.36 16 15.77" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 8H2V16H6V8Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 16V8L12 3V21L6 16Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

MediaVolumeUp2Icon.displayName = 'MediaVolumeUp2Icon';

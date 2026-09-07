import React from 'react';
import { IconProps } from '../types';

export const PhoneIncoming2Icon: React.FC<IconProps> = ({
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
    <path d="M21 12H13.41" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M13.41 12L15 10.41V13.59L13.41 12Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M3 12C3 6.48 5.24 2 8 2H11V8H8V16H11V22H8C5.24 22 3 17.52 3 12Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

PhoneIncoming2Icon.displayName = 'PhoneIncoming2Icon';

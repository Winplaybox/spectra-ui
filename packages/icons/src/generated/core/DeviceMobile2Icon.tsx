import React from 'react';
import { IconProps } from '../../types';

export const DeviceMobile2Icon: React.FC<IconProps> = ({
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
    <path d="M18 18H6V4C6 2.9 6.9 2 8 2H16C17.1 2 18 2.9 18 4V18Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M16 22H8C6.9 22 6 21.1 6 20V18H18V20C18 21.1 17.1 22 16 22Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
  </svg>
);

DeviceMobile2Icon.displayName = 'DeviceMobile2Icon';

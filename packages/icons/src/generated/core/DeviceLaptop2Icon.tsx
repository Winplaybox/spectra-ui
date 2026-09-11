import React from 'react';
import { IconProps } from '../../types';

export const DeviceLaptop2Icon: React.FC<IconProps> = ({
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
    <path d="M19.5 16H4.5C4.22 16 4 15.78 4 15.5V5.5C4 5.22 4.22 5 4.5 5H19.5C19.78 5 20 5.22 20 5.5V15.5C20 15.78 19.78 16 19.5 16Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 19H5C3.34 19 2 17.66 2 16H22C22 17.66 20.66 19 19 19Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

DeviceLaptop2Icon.displayName = 'DeviceLaptop2Icon';

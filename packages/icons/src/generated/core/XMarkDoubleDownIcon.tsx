import React from 'react';
import { IconProps } from '../../types';

export const XMarkDoubleDownIcon: React.FC<IconProps> = ({
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
    <path d="M18 5V6H9C7.34 6 6 7.34 6 9V18H5C3.34 18 2 16.66 2 15V5C2 3.34 3.34 2 5 2H15C16.66 2 18 3.34 18 5Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 22H9C7.34 22 6 20.66 6 19V9C6 7.34 7.34 6 9 6H19C20.66 6 22 7.34 22 9V19C22 20.66 20.66 22 19 22Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 10L18 18" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M18 10L10 18" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
  </svg>
);

XMarkDoubleDownIcon.displayName = 'XMarkDoubleDownIcon';

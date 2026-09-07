import React from 'react';
import { IconProps } from '../types';

export const ActionUnfavouriteIcon: React.FC<IconProps> = ({
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
    <path d="M21.8689 9.00004C21.3438 11.7409 18.6207 14.6046 16.4861 17C13.9474 19.8489 11.9861 22 11.9861 22C11.9861 22 10.004 19.8539 7.48608 17C5.37982 14.6127 2.73234 11.7558 2.14654 9.00004C1.29495 4.99389 4.32193 2 6.98611 2C9.99507 2 11.9861 4.00004 11.9861 4.00004C11.9861 4.00004 14.1229 1.99993 16.9861 2C19.8697 2.00007 22.6376 4.8726 21.8689 9.00004Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M2 2L22 22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ActionUnfavouriteIcon.displayName = 'ActionUnfavouriteIcon';

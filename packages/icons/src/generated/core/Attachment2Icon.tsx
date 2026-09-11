import React from 'react';
import { IconProps } from '../../types';

export const Attachment2Icon: React.FC<IconProps> = ({
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
    <path d="M14.83 6.34003L6.34004 14.83C4.78004 16.39 4.78004 18.92 6.34004 20.49C7.90004 22.05 10.43 22.05 12 20.49L20.49 12" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.17001 17.66L17.66 9.17003C19.22 7.61003 19.22 5.08003 17.66 3.51003C16.1 1.95003 13.57 1.95003 12 3.51003L3.51001 12" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

Attachment2Icon.displayName = 'Attachment2Icon';

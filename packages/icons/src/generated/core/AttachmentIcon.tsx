import React from 'react';
import { IconProps } from '../../types';

export const AttachmentIcon: React.FC<IconProps> = ({
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
    <path d="M13.99 5.78998V16.1C13.99 17.15 13.14 18 12.09 18C10.94 18 10 17.06 10 15.91V6.99998" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 15V6C6 3.8 7.8 2 10 2C12.13 2 13.99 3.79 13.99 5.91L14 15" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 9V16C18 19.3 15.3 22 12 22C8.7 22 6 19.3 6 16V10" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

AttachmentIcon.displayName = 'AttachmentIcon';

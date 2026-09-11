import React from 'react';
import { IconProps } from '../../types';

export const ChatSquareDoubleSmallIcon: React.FC<IconProps> = ({
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
    <path d="M16 9H11.6C11.27 9 11 9.27 11 9.6V14H9L5 18V14H2.8C2.36 14 2 13.64 2 13.2V4.8C2 4.36 2.36 4 2.8 4H15.2C15.64 4 16 4.36 16 4.8V9Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 9.6V16.4C22 16.73 21.73 17 21.4 17H19V20L16 17H11.6C11.27 17 11 16.73 11 16.4V9.6C11 9.27 11.27 9 11.6 9H21.4C21.73 9 22 9.27 22 9.6Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ChatSquareDoubleSmallIcon.displayName = 'ChatSquareDoubleSmallIcon';

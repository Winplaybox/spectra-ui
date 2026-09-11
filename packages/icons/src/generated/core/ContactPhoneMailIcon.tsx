import React from 'react';
import { IconProps } from '../../types';

export const ContactPhoneMailIcon: React.FC<IconProps> = ({
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
    <path d="M2.99069 6.91051L4.78963 5L8.08679 8.92875C8.36281 9.25764 8.4562 9.68968 8.33774 10.0897L7.91559 11.515L10.3427 14.407L11.588 14.0816C11.9967 13.9748 12.4367 14.1119 12.7028 14.429L16 18.3578L13.6086 19.5624C11.9127 20.4167 9.79506 19.9894 8.58623 18.5491L2.87485 11.7436C1.66602 10.3033 1.71486 8.26546 2.99069 6.91051Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 8L15 11L11 8" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 5H22V15H17" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ContactPhoneMailIcon.displayName = 'ContactPhoneMailIcon';

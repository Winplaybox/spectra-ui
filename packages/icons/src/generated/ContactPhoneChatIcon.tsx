import React from 'react';
import { IconProps } from '../types';

export const ContactPhoneChatIcon: React.FC<IconProps> = ({
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
    <path d="M2.99069 7.91051L4.78963 6L8.08679 9.92875C8.36281 10.2576 8.4562 10.6897 8.33774 11.0897L7.91559 12.515L10.3427 15.407L11.588 15.0816C11.9967 14.9748 12.4367 15.1119 12.7028 15.429L16 19.3578L13.6086 20.5624C11.9127 21.4167 9.79506 20.9894 8.58623 19.5491L2.87485 12.7436C1.66602 11.3033 1.71486 9.26546 2.99069 7.91051Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 3V10H15V13L18 10H22V3H12Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ContactPhoneChatIcon.displayName = 'ContactPhoneChatIcon';

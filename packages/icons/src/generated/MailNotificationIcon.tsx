import React from 'react';
import { IconProps } from '../types';

export const MailNotificationIcon: React.FC<IconProps> = ({
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
    <path d="M17 12C18.12 12 19.15 12.38 19.98 13.01L20 13V4C20 2.9 19.1 2 18 2H4C2.9 2 2 2.9 2 4V15C2 16.1 2.9 17 4 17H12C12 14.24 14.24 12 17 12Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 4L11 9L2 4C2 2.9 2.9 2 4 2H18C19.1 2 20 2.9 20 4Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M17 12C19.76 12 22 14.24 22 17C22 19.76 19.76 22 17 22C14.24 22 12 19.76 12 17C12 14.24 14.24 12 17 12Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

MailNotificationIcon.displayName = 'MailNotificationIcon';

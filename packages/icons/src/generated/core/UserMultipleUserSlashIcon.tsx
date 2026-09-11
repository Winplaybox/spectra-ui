import React from 'react';
import { IconProps } from '../../types';

export const UserMultipleUserSlashIcon: React.FC<IconProps> = ({
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
    <path d="M17 15C19.76 15 22 17.24 22 20C21.99 20 12 20 12 20C12 17.24 14.24 15 17 15Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 15C15.6193 15 14.5 13.8807 14.5 12.5C14.5 11.1193 15.6193 10 17 10C18.3807 10 19.5 11.1193 19.5 12.5C19.5 13.8807 18.3807 15 17 15Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 9C9.76 9 12 11.24 12 14C11.99 14 2 14 2 14C2 11.24 4.24 9 7 9Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 9C5.61929 9 4.5 7.88071 4.5 6.5C4.5 5.11929 5.61929 4 7 4C8.38071 4 9.5 5.11929 9.5 6.5C9.5 7.88071 8.38071 9 7 9Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 2L22 22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

UserMultipleUserSlashIcon.displayName = 'UserMultipleUserSlashIcon';

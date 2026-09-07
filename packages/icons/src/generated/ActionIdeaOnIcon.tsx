import React from 'react';
import { IconProps } from '../types';

export const ActionIdeaOnIcon: React.FC<IconProps> = ({
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
    <path d="M11 2C8.66004 2 5.71004 3.72 5.76004 8.16L2.04004 12.98C1.93004 13.12 2.06004 13.3 2.26004 13.3L4.74004 14.53C4.87004 15.45 5.35004 18.13 5.61004 19.47C5.70004 19.89 9.80004 19.57 9.80004 19.57L11 22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.28 2L14.26 4.85" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.69 4.73999L18.27 7.29999" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 12.11L18.73 11.87" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.4901 15.22C14.6701 14.62 17.6101 11.58 15.8401 9.25002C14.4001 7.36002 11.6701 7.36002 10.2301 9.25002C8.46006 11.58 11.4101 14.61 12.5801 15.22C12.8701 15.36 13.2001 15.36 13.4901 15.22Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.04 11.78V15.33" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.72 17.91H14.35" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.72 15.33H14.35" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 11.78C13.2761 11.78 13.5 11.5562 13.5 11.28C13.5 11.0039 13.2761 10.78 13 10.78C12.7239 10.78 12.5 11.0039 12.5 11.28C12.5 11.5562 12.7239 11.78 13 11.78Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ActionIdeaOnIcon.displayName = 'ActionIdeaOnIcon';

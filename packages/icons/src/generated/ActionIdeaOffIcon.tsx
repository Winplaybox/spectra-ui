import React from 'react';
import { IconProps } from '../types';

export const ActionIdeaOffIcon: React.FC<IconProps> = ({
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
    <path d="M11.0002 2C8.66016 2 5.71016 3.72 5.76016 8.16L2.04016 12.98C1.93016 13.12 2.06016 13.3 2.26016 13.3L4.74016 14.53C4.87016 15.45 5.35016 18.13 5.61016 19.47C5.70016 19.89 9.80016 19.57 9.80016 19.57L11.0002 22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.2801 2L14.2601 4.85" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.6901 4.73999L18.2701 7.29999" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.0001 12.11L18.7301 11.87" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.4902 15.22C14.6702 14.62 17.6102 11.58 15.8402 9.25002C14.4002 7.36002 11.6702 7.36002 10.2302 9.25002C8.46018 11.58 11.4102 14.61 12.5802 15.22C12.8702 15.36 13.2002 15.36 13.4902 15.22Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.0402 11.78V15.33" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.7201 17.91H14.3501" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.7201 15.33H14.3501" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.0001 11.78C13.2763 11.78 13.5001 11.5562 13.5001 11.28C13.5001 11.0039 13.2763 10.78 13.0001 10.78C12.724 10.78 12.5001 11.0039 12.5001 11.28C12.5001 11.5562 12.724 11.78 13.0001 11.78Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.00012 2L22.0001 22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ActionIdeaOffIcon.displayName = 'ActionIdeaOffIcon';

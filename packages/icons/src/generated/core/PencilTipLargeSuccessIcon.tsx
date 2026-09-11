import React from 'react';
import { IconProps } from '../../types';

export const PencilTipLargeSuccessIcon: React.FC<IconProps> = ({
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
    <path d="M13 7H7L10 2L13 7Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 22V19C13.24 19 11 16.76 11 14C11 13.29 11.15 12.61 11.41 12H4H11.41H4V22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.36 9.27C13.04 9.73 11.97 10.73 11.41 12H4L7 7H13L14.36 9.27Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19C18.7614 19 21 16.7614 21 14C21 11.2386 18.7614 9 16 9C13.2386 9 11 11.2386 11 14C11 16.7614 13.2386 19 16 19Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.6 13.3499L15.4 15.1499L18.4 12.1499" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10"/>
  </svg>
);

PencilTipLargeSuccessIcon.displayName = 'PencilTipLargeSuccessIcon';

import React from 'react';
import { IconProps } from '../../types';

export const PhoneAddIcon: React.FC<IconProps> = ({
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
    <path d="M6.19999 12.07C3.97999 8.8 3.30999 5.6 4.78999 4.12L6.90999 2L11.45 6.54L9.32999 8.66L15.34 14.67L17.46 12.55L22 17.09L19.88 19.21C18.4 20.69 15.2 20.02 11.93 17.8C11.98 17.54 12 17.27 12 17C12 14.24 9.75999 12 6.99999 12C6.72999 12 6.45999 12.02 6.19999 12.07Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 22C9.76142 22 12 19.7614 12 17C12 14.2386 9.76142 12 7 12C4.23858 12 2 14.2386 2 17C2 19.7614 4.23858 22 7 22Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 17H10" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M7 14V20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
  </svg>
);

PhoneAddIcon.displayName = 'PhoneAddIcon';

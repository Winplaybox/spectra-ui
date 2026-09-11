import React from 'react';
import { IconProps } from '../../types';

export const CreditCardRectangleIcon: React.FC<IconProps> = ({
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
    <path d="M3.5 5C2.67 5 2 5.67 2 6.5V17.5C2 18.33 2.67 19 3.5 19H20.5C21.33 19 22 18.33 22 17.5V6.5C22 5.67 21.33 5 20.5 5H3.5Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 16H19" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M14 8H19" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M14 11H19" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M5 8.5V10.5C5 10.7761 5.22386 11 5.5 11H9.5C9.77614 11 10 10.7761 10 10.5V8.5C10 8.22386 9.77614 8 9.5 8H5.5C5.22386 8 5 8.22386 5 8.5Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
  </svg>
);

CreditCardRectangleIcon.displayName = 'CreditCardRectangleIcon';

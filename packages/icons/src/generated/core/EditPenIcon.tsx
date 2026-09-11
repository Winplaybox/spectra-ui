import React from 'react';
import { IconProps } from '../../types';

export const EditPenIcon: React.FC<IconProps> = ({
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
    <path d="M20 12V21C20 21.55 19.55 22 19 22H3C2.45 22 2 21.55 2 21V5C2 4.45 2.45 4 3 4H12" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.15 2.38L9.24 12.29L8 16L11.71 14.76L21.62 4.85C22.07 4.4 22.13 3.71 21.74 3.32L20.68 2.26C20.29 1.87 19.6 1.92 19.15 2.38Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

EditPenIcon.displayName = 'EditPenIcon';

import React from 'react';
import { IconProps } from '../../types';

export const TrashIcon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M16.56 22H7.44C6.91 22 6.47 21.59 6.44 21.06L5.5 6H18.5L17.56 21.06C17.53 21.59 17.09 22 16.56 22Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 2H9.5V3H14.5V2Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M19.5 6H4.5C4.22 6 4 5.78 4 5.5V3.5C4 3.22 4.22 3 4.5 3H19.5C19.78 3 20 3.22 20 3.5V5.5C20 5.78 19.78 6 19.5 6Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

TrashIcon.displayName = 'TrashIcon';

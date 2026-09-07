import React from 'react';
import { IconProps } from '../types';

export const TrashQuestionIcon: React.FC<IconProps> = ({
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
    <path d="M15 22H7.44C6.91 22 6.47 21.59 6.44 21.06L5.5 6H18.5L18.19 11" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 2H9.5V3H14.5V2Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M19.5 6H4.5C4.22 6 4 5.78 4 5.5V3.5C4 3.22 4.22 3 4.5 3H19.5C19.78 3 20 3.22 20 3.5V5.5C20 5.78 19.78 6 19.5 6Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 22H18.01" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 16.04C16.04 15.75 16.16 15.21 16.56 14.73C16.66 14.6 16.85 14.37 17.18 14.2C17.58 14 17.94 14 18.1 14C18.28 14 18.71 14.02 19.15 14.31C19.69 14.67 19.86 15.19 19.91 15.35C19.94 15.43 20.1 15.96 19.91 16.56C19.8 16.94 19.6 17.18 19.43 17.39C18.73 18.22 18.11 18.15 18 18.69C17.99 18.71 18 18.82 18 19" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

TrashQuestionIcon.displayName = 'TrashQuestionIcon';

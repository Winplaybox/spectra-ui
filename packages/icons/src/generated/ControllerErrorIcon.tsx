import React from 'react';
import { IconProps } from '../types';

export const ControllerErrorIcon: React.FC<IconProps> = ({
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
    <path d="M12 7V5C12 3.34 10.66 2 9 2H6" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.5498 11.67C21.3697 9.04 19.1986 7 16.5773 7H7.43272C4.81141 7 2.64032 9.04 2.46023 11.67L2 19.56V19.7C2 20.96 3.01051 22 4.26113 22C5.06153 22 5.7919 21.58 6.21211 20.89L7.72286 18.81C8.11306 18.3 8.70335 18 9.33367 18H14.6763C15.3067 18 15.907 18.3 16.2771 18.81L17.7879 20.89C18.2081 21.58 18.9485 22 19.7389 22C20.9895 22 22 20.96 22 19.7V19.56L21.5498 11.67Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 15L9.5 10" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 15L14.5 10" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ControllerErrorIcon.displayName = 'ControllerErrorIcon';

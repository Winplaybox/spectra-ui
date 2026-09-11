import React from 'react';
import { IconProps } from '../../types';

export const NintendoSwitchController2Icon: React.FC<IconProps> = ({
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
    <path d="M2 9C2 7.89543 2.89543 7 4 7H8V17H4C2.89543 17 2 16.1046 2 15V9Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M22 15C22 16.1046 21.1046 17 20 17L16 17L16 7L20 7C21.1046 7 22 7.89543 22 9L22 15Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M8 7H16V17H8V7Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<circle cx="5" cy="10.5" r="0.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<circle cx="19" cy="13.5" r="0.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
  </svg>
);

NintendoSwitchController2Icon.displayName = 'NintendoSwitchController2Icon';

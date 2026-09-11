import React from 'react';
import { IconProps } from '../../types';

export const MachineSquarePaymentIcon: React.FC<IconProps> = ({
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
    <path d="M10 8V11" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 16H8" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M16 16H20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M4 13H8V19H16C16 17.0474 16 13 16 13H20V22H4V13Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<rect x="8" y="11" width="8" height="8" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 2H22V6C22 7.10457 21.1046 8 20 8H4C2.89543 8 2 7.10457 2 6V2Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<circle cx="12" cy="5" r="0.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<rect x="11" y="14" width="2" height="2" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

MachineSquarePaymentIcon.displayName = 'MachineSquarePaymentIcon';

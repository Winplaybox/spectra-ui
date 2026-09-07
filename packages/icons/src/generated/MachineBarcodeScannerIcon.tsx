import React from 'react';
import { IconProps } from '../types';

export const MachineBarcodeScannerIcon: React.FC<IconProps> = ({
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
    <path d="M12.08 13C10.52 13 9.36997 11.53 9.74997 10.01L9.99997 9H13L12.08 13Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 9H5L3 2H6L8 9Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.45 22C11.2 22 10.27 20.83 10.55 19.61L13 9H17L14.35 20.49C14.14 21.37 13.36 22 12.45 22Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 9H8L6 2H17.5C19.43 2 21 3.57 21 5.5C21 7.43 19.43 9 17.5 9Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

MachineBarcodeScannerIcon.displayName = 'MachineBarcodeScannerIcon';

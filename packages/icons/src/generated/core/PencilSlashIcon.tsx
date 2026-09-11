import React from 'react';
import { IconProps } from '../../types';

export const PencilSlashIcon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M17.82 2.29001L5.01 15.11L2 22L8.89 18.99L21.71 6.18001C22.1 5.79001 22.1 5.16001 21.71 4.77001L19.24 2.30001C18.84 1.90001 18.21 1.90001 17.82 2.29001Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.01 15.11L8.89 18.99L2 22L5.01 15.11Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.23 8.66001L15.34 4.77001L17.81 2.30001C18.2 1.91001 18.83 1.91001 19.22 2.30001L21.69 4.77001C22.08 5.16001 22.08 5.79001 21.69 6.18001L19.23 8.66001Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 2L22 22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

PencilSlashIcon.displayName = 'PencilSlashIcon';

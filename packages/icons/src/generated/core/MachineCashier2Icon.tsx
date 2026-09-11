import React from 'react';
import { IconProps } from '../../types';

export const MachineCashier2Icon: React.FC<IconProps> = ({
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
    <path d="M8.34241 8.09448L7.8734 8.97768L9.63978 9.91569L10.1088 9.0325L8.34241 8.09448Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.7584 10.4397L12.2894 11.3229L14.0557 12.2609L14.5247 11.3777L12.7584 10.4397Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.1743 12.7847L16.7053 13.6679L18.4717 14.6059L18.9407 13.7227L17.1743 12.7847Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 2H5V8H3V2Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<rect x="2" y="20" width="20" height="2" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinejoin="round"/>
<path d="M3.00385 8L2.99646 20L20.9965 20L20.9989 16.0019L6.00385 8.00185L3.00385 8Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

MachineCashier2Icon.displayName = 'MachineCashier2Icon';

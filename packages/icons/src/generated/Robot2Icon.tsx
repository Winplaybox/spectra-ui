import React from 'react';
import { IconProps } from '../types';

export const Robot2Icon: React.FC<IconProps> = ({
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
    <path d="M14 20H10C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M22 20V20.01" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M2 20V20.01" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M10.5 5.46637V5.53361" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M13.5 5.46637V5.53361" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M10 8.5C10 8.5 10.8727 9 12 9C13.1273 9 14 8.5 14 8.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M16.5487 9C16.8355 8.38754 17 7.7111 17 7C17 6.2889 16.8355 5.61246 16.5487 5H17.8C18.3523 5 18.8 5.44772 18.8 6V8C18.8 8.55228 18.3523 9 17.8 9H16.5487Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M7.45854 5C7.16731 5.61246 6.99993 6.2889 6.99993 7C6.99993 7.7111 7.16731 8.38754 7.45854 9H6.19995C5.64767 9 5.19995 8.55228 5.19995 8V6C5.19995 5.44772 5.64767 5 6.19995 5H7.45854Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path fillRule="evenodd" clipRule="evenodd" d="M12.0223 12C14.5204 12 17 9.76142 17 7C17 4.23858 14.5204 2 12.0223 2C9.52416 2 7 4.23858 7 7C7 9.76142 9.52416 12 12.0223 12Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path fillRule="evenodd" clipRule="evenodd" d="M5 14C5 12.8954 5.89543 12 7 12H17C18.1046 12 19 12.8954 19 14V18C19 19.1046 18.1046 20 17 20H7C5.89543 20 5 19.1046 5 18V14Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M5 15H3.5C2.67157 15 2 15.6716 2 16.5V19" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 15H20.5C21.3284 15 22 15.6716 22 16.5V19" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

Robot2Icon.displayName = 'Robot2Icon';

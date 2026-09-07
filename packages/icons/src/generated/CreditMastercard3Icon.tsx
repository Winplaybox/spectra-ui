import React from 'react';
import { IconProps } from '../types';

export const CreditMastercard3Icon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M22 9H2V6.5C2 5.67 2.67 5 3.5 5H20.5C21.33 5 22 5.67 22 6.5V9Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M20.5 19H3.5C2.67 19 2 18.33 2 17.5V9H22V17.5C22 18.33 21.33 19 20.5 19Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 8H2V9H22V8Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M4.5 16.3V15.2C4.5 15.0895 4.58954 15 4.7 15H5.8C5.91046 15 6 15.0895 6 15.2V16.3C6 16.4105 5.91046 16.5 5.8 16.5H4.7C4.58954 16.5 4.5 16.4105 4.5 16.3Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M8.5 16.3V15.2C8.5 15.0895 8.58954 15 8.7 15H9.8C9.91046 15 10 15.0895 10 15.2V16.3C10 16.4105 9.91046 16.5 9.8 16.5H8.7C8.58954 16.5 8.5 16.4105 8.5 16.3Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M16.5 14.5C16.5 15.6046 15.6046 16.5 14.5 16.5C13.3954 16.5 12.5 15.6046 12.5 14.5C12.5 13.3954 13.3954 12.5 14.5 12.5C15.6046 12.5 16.5 13.3954 16.5 14.5Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M17.5 16.5C18.6046 16.5 19.5 15.6046 19.5 14.5C19.5 13.3954 18.6046 12.5 17.5 12.5C16.9027 12.5 16.3665 12.7619 16 13.1771C16.3112 13.5297 16.5 13.9928 16.5 14.5C16.5 15.0072 16.3112 15.4703 16 15.8229C16.3665 16.2381 16.9027 16.5 17.5 16.5Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
  </svg>
);

CreditMastercard3Icon.displayName = 'CreditMastercard3Icon';

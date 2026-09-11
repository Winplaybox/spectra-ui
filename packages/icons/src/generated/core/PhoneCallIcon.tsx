import React from 'react';
import { IconProps } from '../../types';

export const PhoneCallIcon: React.FC<IconProps> = ({
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
    <path d="M16.06 14.3825L14.06 16.3825C13.28 17.1625 12.01 17.1625 11.23 16.3825L7.60997 12.7625C6.82997 11.9825 6.82997 10.7125 7.60997 9.9325L9.60997 7.9325L4.73997 3.0625L2.83997 4.9625C0.749967 7.0525 2.66997 12.3825 7.13997 16.8525C11.61 21.3225 16.93 23.2525 19.03 21.1525L20.93 19.2525L16.06 14.3825Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.85 18.7625L16.55 13.4625C16.36 13.2725 16.04 13.2725 15.85 13.4625C15.66 13.6525 15.66 13.9725 15.85 14.1625L21.15 19.4625C21.34 19.6525 21.66 19.6525 21.85 19.4625C22.05 19.2725 22.05 18.9525 21.85 18.7625Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.82995 8.1425L4.52995 2.8425C4.33995 2.6525 4.33995 2.3325 4.52995 2.1425C4.71995 1.9525 5.03995 1.9525 5.22995 2.1425L10.53 7.4425C10.72 7.6325 10.72 7.9525 10.53 8.1425C10.34 8.3425 10.03 8.3425 9.82995 8.1425Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

PhoneCallIcon.displayName = 'PhoneCallIcon';

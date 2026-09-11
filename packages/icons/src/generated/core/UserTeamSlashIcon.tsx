import React from 'react';
import { IconProps } from '../../types';

export const UserTeamSlashIcon: React.FC<IconProps> = ({
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
    <path d="M12.12 15.47C12.62 13.48 14.62 12 17 12C19.76 12 22 13.99 22 16.44C20.03 16.89 18.31 17 17 17C15.55 17 14.27 16.86 13.2 16.68C12.91 16.23 12.55 15.82 12.12 15.47Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 9C18.3807 9 19.5 7.88071 19.5 6.5C19.5 5.11929 18.3807 4 17 4C15.6193 4 14.5 5.11929 14.5 6.5C14.5 7.88071 15.6193 9 17 9Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 19.33C11.64 19.87 9.57 20 8 20C5.57 20 3.52 19.68 2 19.33C2 16.39 4.69 14 8 14C11.31 14 14 16.39 14 19.33Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 2L22 22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

UserTeamSlashIcon.displayName = 'UserTeamSlashIcon';

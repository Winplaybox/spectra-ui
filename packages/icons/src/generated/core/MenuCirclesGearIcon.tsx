import React from 'react';
import { IconProps } from '../../types';

export const MenuCirclesGearIcon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M11.9891 15C13.646 15 14.9891 13.6569 14.9891 12C14.9891 10.3431 13.646 9 11.9891 9C10.3323 9 8.98914 10.3431 8.98914 12C8.98914 13.6569 10.3323 15 11.9891 15Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M12.0577 8.99139V8.00287" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="square"/>
<path d="M15.0287 15.0104L14.1298 14.2006" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="square"/>
<path d="M8.89368 15.0352L9.89368 14.1758" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="square"/>
<path d="M8.99402 8.86176L9.88098 9.87323" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="square"/>
<path d="M15.0056 8.99139L14.1301 9.90009" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="square"/>
<path d="M16.0109 12.0219H15.0109" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="square"/>
<path d="M8.985 12.0086H7.98914" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="square"/>
<path d="M12.0704 15.9914V15.0029" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="square"/>
<circle cx="19" cy="5.00574" r="3" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<circle cx="4.97827" cy="5.00574" r="3" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<circle cx="4.97827" cy="19.0057" r="3" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<circle cx="18.9783" cy="19.0057" r="3" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M10.9539 4H13.113M4 10.8365V12.6561M20 10.8365V12.6561M13.113 20H10.9539" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
  </svg>
);

MenuCirclesGearIcon.displayName = 'MenuCirclesGearIcon';

import React from 'react';
import { IconProps } from '../types';

export const NetworkSignalCellularWaveIcon: React.FC<IconProps> = ({
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
    <circle cx="12" cy="10.6622" r="2" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M7 2C4.01099 3.72905 2 6.96077 2 10.6622C2 14.3636 4.01099 17.5953 7 19.3244" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 19.3243C19.989 17.5953 22 14.3636 22 10.6622C22 6.96075 19.989 3.72903 17 1.99998" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 5.46487C7.2066 6.5023 6 8.44133 6 10.6622C6 12.883 7.2066 14.8221 9 15.8595" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 15.8595C16.7934 14.8221 18 12.883 18 10.6622C18 8.44134 16.7934 6.50231 15 5.46488" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 13V22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

NetworkSignalCellularWaveIcon.displayName = 'NetworkSignalCellularWaveIcon';

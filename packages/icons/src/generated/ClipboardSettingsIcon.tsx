import React from 'react';
import { IconProps } from '../types';

export const ClipboardSettingsIcon: React.FC<IconProps> = ({
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
    <path d="M8 4V5C8 5.55 8.45 6 9 6H15C15.55 6 16 5.55 16 5V4H19C19.55 4 20 4.45 20 5V21C20 21.55 19.55 22 19 22H5C4.45 22 4 21.55 4 21V5C4 4.45 4.45 4 5 4H8Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 6H9C8.45 6 8 5.55 8 5V3C8 2.45 8.45 2 9 2H15C15.55 2 16 2.45 16 3V5C16 5.55 15.55 6 15 6Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 18.5V16.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M12 11.5V9.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M9.5 14H7.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M16.5 14H14.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M15.18 17.18L13.77 15.77" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M10.23 12.23L8.82001 10.82" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M10.23 15.77L8.82001 17.18" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M15.18 10.82L13.77 12.23" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M12 16.5C13.3807 16.5 14.5 15.3807 14.5 14C14.5 12.6193 13.3807 11.5 12 11.5C10.6193 11.5 9.5 12.6193 9.5 14C9.5 15.3807 10.6193 16.5 12 16.5Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ClipboardSettingsIcon.displayName = 'ClipboardSettingsIcon';

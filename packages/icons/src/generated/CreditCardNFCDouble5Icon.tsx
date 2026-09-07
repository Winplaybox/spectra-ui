import React from 'react';
import { IconProps } from '../types';

export const CreditCardNFCDouble5Icon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M20.0235 5.36219L4.96622 10.7731L4.36233 9.09256C4.16184 8.53463 4.50441 7.90299 5.12929 7.67844L17.928 3.0792C18.5529 2.85465 19.2191 3.12376 19.4196 3.68169L20.0235 5.36219Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.782 4.68994L4.72467 10.1008L4.96623 10.773L20.0235 5.36214L19.782 4.68994Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M18.2631 9.33439L17.9249 8.39331L8.79718 11.6734H11.7542L18.2631 9.33439Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M20.0235 5.36218L4.96619 10.773L5.28973 11.6734H16.8C17.464 11.6734 18 12.152 18 12.7448V13.6794L21.3098 12.49C21.9346 12.2655 22.2772 11.6338 22.0767 11.0759L20.0235 5.36218Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.2 11.6735C2.536 11.6735 2 12.152 2 12.7449L2 20.602C2 21.1949 2.536 21.6735 3.2 21.6735L16.8 21.6735C17.464 21.6735 18 21.1949 18 20.602L18 16.0421L18 12.7449C18 12.152 17.464 11.6735 16.8 11.6735L3.2 11.6735Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.00001 19.1733L5.00001 19.1734C4.72386 19.1734 4.5 18.9495 4.5 18.6734V17.6734C4.5 17.3972 4.72385 17.1734 5 17.1734L6.99999 17.1733C7.27614 17.1733 7.5 17.3972 7.5 17.6733V18.6733C7.5 18.9495 7.27615 19.1733 7.00001 19.1733Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M10.5 14.1733H9.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M7 14.1733H4.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M13.6252 18.4548C13.8998 18.0674 14.0625 17.5859 14.0625 17.0641C14.0625 16.5423 13.8998 16.0607 13.6252 15.6733" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 17.1733L12 16.6733" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 19.5796C15.5446 18.9258 15.875 18.067 15.875 17.1265C15.875 16.1859 15.5446 15.3271 15 14.6733" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

CreditCardNFCDouble5Icon.displayName = 'CreditCardNFCDouble5Icon';

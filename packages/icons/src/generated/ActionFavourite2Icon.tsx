import React from 'react';
import { IconProps } from '../types';

export const ActionFavourite2Icon: React.FC<IconProps> = ({
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
    <path d="M21.8689 9.00004C20.9052 14.03 14.6126 19.762 12.6024 21.4846C12.2448 21.791 11.729 21.7896 11.3736 21.4808C9.3923 19.7598 3.22307 14.0646 2.14648 9.00004C1.29489 4.99389 4.32186 2 6.98605 2C9.99501 2 11.986 4.00004 11.986 4.00004C11.986 4.00004 14.1228 1.99993 16.986 2C19.8696 2.00007 22.6375 4.8726 21.8689 9.00004Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ActionFavourite2Icon.displayName = 'ActionFavourite2Icon';

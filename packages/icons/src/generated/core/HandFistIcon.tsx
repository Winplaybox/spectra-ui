import React from 'react';
import { IconProps } from '../../types';

export const HandFistIcon: React.FC<IconProps> = ({
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
    <path d="M17.3216 8.88V8.33C17.3216 7.32 16.5019 6.5 15.4924 6.5C14.4828 6.5 13.6631 7.32 13.6631 8.33V8.88V7.83C13.6531 6.82 12.8335 6 11.8239 6C10.8143 6 9.99465 6.82 9.99465 7.83V8.88H9.98465V8.22C9.98465 7.28 9.16499 6.5 8.15541 6.5C7.14583 6.5 6.31618 7.27 6.31618 8.22V10.59C5.58648 9.9 4.27703 9.76 3.54733 10.45C2.81764 11.14 2.81764 12.32 3.54733 13L8.81514 17.71C9.91468 18.48 11.2841 19 12.8435 19H14.4028C18.0613 19 21.0001 16.25 21.0001 12.82V8.94C21.0001 8 20.1804 7.22 19.1708 7.22C18.1612 7.22 17.3416 7.96 17.3416 8.91" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

HandFistIcon.displayName = 'HandFistIcon';

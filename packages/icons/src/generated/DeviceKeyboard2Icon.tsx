import React from 'react';
import { IconProps } from '../types';

export const DeviceKeyboard2Icon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M2 6C2 5.44772 2.44772 5 3 5L21 5C21.5523 5 22 5.44772 22 6V18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18V6Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<rect x="5.5" y="14.5" width="1" height="1" stroke={color || 'currentColor'}/>
<rect x="9.5" y="14.5" width="5" height="1" stroke={color || 'currentColor'}/>
<rect x="17.5" y="14.5" width="1" height="1" stroke={color || 'currentColor'}/>
<rect x="5.5" y="11.5" width="2" height="1" stroke={color || 'currentColor'}/>
<rect x="9.5" y="11.5" width="1" height="1" stroke={color || 'currentColor'}/>
<rect x="12.5" y="11.5" width="1" height="1" stroke={color || 'currentColor'}/>
<rect x="16.5" y="11.5" width="2" height="1" stroke={color || 'currentColor'}/>
<rect x="5.5" y="8.5" width="1" height="1" stroke={color || 'currentColor'}/>
<rect x="8.5" y="8.5" width="1" height="1" stroke={color || 'currentColor'}/>
<rect x="11.5" y="8.5" width="1" height="1" stroke={color || 'currentColor'}/>
<rect x="14.5" y="8.5" width="1" height="1" stroke={color || 'currentColor'}/>
<rect x="17.5" y="8.5" width="1" height="1" stroke={color || 'currentColor'}/>
  </svg>
);

DeviceKeyboard2Icon.displayName = 'DeviceKeyboard2Icon';

import React from 'react';
import { IconProps } from '../../types';

export const TwoToneAddAlertIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12 6c-2.76 0-5 2.24-5 5v7h10v-7c0-2.76-2.24-5-5-5zm4 7h-3v3h-2v-3H8v-2h3V8h2v3h3v2z"/><path fill={color || 'currentColor'} d="M12 23c1.1 0 1.99-.89 1.99-1.99h-3.98c0 1.1.89 1.99 1.99 1.99zm7-6v-6c0-3.35-2.36-6.15-5.5-6.83V3c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v1.17C7.36 4.85 5 7.65 5 11v6l-2 2v1h18v-1l-2-2zm-2 1H7v-7c0-2.76 2.24-5 5-5s5 2.24 5 5v7zm-4-7V8h-2v3H8v2h3v3h2v-3h3v-2z"/>
  </svg>
);
TwoToneAddAlertIcon.displayName = 'TwoToneAddAlertIcon';
export const AddAlertTwoToneIcon = TwoToneAddAlertIcon;

export const TwoToneAutoDeleteIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12 7H4v10h5.08c-.05-.33-.08-.66-.08-1c0-2.38 1.19-4.47 3-5.74V7z"/><path fill={color || 'currentColor'} d="M15 2h-3.5l-1-1h-5l-1 1H1v2h14zm1 7c-.7 0-1.37.1-2 .29V5H2v12c0 1.1.9 2 2 2h5.68A6.999 6.999 0 0 0 23 16c0-3.87-3.13-7-7-7zm-7 7c0 .34.03.67.08 1H4V7h8v3.26c-1.81 1.27-3 3.36-3 5.74zm7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5z"/><path fill={color || 'currentColor'} d="M16.5 12H15v5l3.6 2.1l.8-1.2l-2.9-1.7z"/>
  </svg>
);
TwoToneAutoDeleteIcon.displayName = 'TwoToneAutoDeleteIcon';
export const AutoDeleteTwoToneIcon = TwoToneAutoDeleteIcon;

export const TwoToneErrorIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8zm1 13h-2v-2h2v2zm0-4h-2V7h2v6z"/><path fill={color || 'currentColor'} d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm-1-5h2v2h-2zm0-8h2v6h-2z"/>
  </svg>
);
TwoToneErrorIcon.displayName = 'TwoToneErrorIcon';
export const ErrorTwoToneIcon = TwoToneErrorIcon;

export const TwoToneErrorOutlineIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm-1-5h2v2h-2zm0-8h2v6h-2z"/>
  </svg>
);
TwoToneErrorOutlineIcon.displayName = 'TwoToneErrorOutlineIcon';
export const ErrorOutlineTwoToneIcon = TwoToneErrorOutlineIcon;

export const TwoToneNotificationImportantIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12 6c-2.76 0-5 2.24-5 5v7h10v-7c0-2.76-2.24-5-5-5zm1 10h-2v-2h2v2zm0-4h-2V8h2v4z"/><path fill={color || 'currentColor'} d="M12 23c1.1 0 1.99-.89 1.99-1.99h-3.98c0 1.1.89 1.99 1.99 1.99zm7-6v-6c0-3.35-2.36-6.15-5.5-6.83V3c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v1.17C7.36 4.85 5 7.65 5 11v6l-2 2v1h18v-1l-2-2zm-2 1H7v-7c0-2.76 2.24-5 5-5s5 2.24 5 5v7zM11 8h2v4h-2zm0 6h2v2h-2z"/>
  </svg>
);
TwoToneNotificationImportantIcon.displayName = 'TwoToneNotificationImportantIcon';
export const NotificationImportantTwoToneIcon = TwoToneNotificationImportantIcon;

export const TwoToneWarningIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M4.47 19h15.06L12 5.99L4.47 19zM13 18h-2v-2h2v2zm0-4h-2v-4h2v4z"/><path fill={color || 'currentColor'} d="M1 21h22L12 2L1 21zm3.47-2L12 5.99L19.53 19H4.47zM11 16h2v2h-2zm0-6h2v4h-2z"/>
  </svg>
);
TwoToneWarningIcon.displayName = 'TwoToneWarningIcon';
export const WarningTwoToneIcon = TwoToneWarningIcon;

export const TwoToneWarningAmberIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M1 21h22L12 2L1 21zm3.47-2L12 5.99L19.53 19H4.47zM11 16h2v2h-2zm0-6h2v4h-2z"/>
  </svg>
);
TwoToneWarningAmberIcon.displayName = 'TwoToneWarningAmberIcon';
export const WarningAmberTwoToneIcon = TwoToneWarningAmberIcon;

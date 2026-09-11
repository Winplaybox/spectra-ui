import React from 'react';
import { IconProps } from '../../types';

export const OutlinedAdfScannerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 12h-1V4H6v8H5c-1.66 0-3 1.34-3 3v5h20v-5c0-1.66-1.34-3-3-3zM8 6h8v6H8V6zm12 12H4v-3c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v3z"/><circle cx="18" cy="16" r="1"/>
  </svg>
);
OutlinedAdfScannerIcon.displayName = 'OutlinedAdfScannerIcon';
export const AdfScannerOutlinedIcon = OutlinedAdfScannerIcon;

export const OutlinedBrowserNotSupportedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 6v10.5l1.95 1.95c.03-.15.05-.3.05-.45V6c0-1.1-.9-2-2-2H6.5l2 2H19zM3.22 3.32L1.95 4.59L3 5.64V18c0 1.1.9 2 2 2h12.36l2.06 2.06l1.27-1.27L3.22 3.32zM15 18H5V7.64L15.36 18H15z"/>
  </svg>
);
OutlinedBrowserNotSupportedIcon.displayName = 'OutlinedBrowserNotSupportedIcon';
export const BrowserNotSupportedOutlinedIcon = OutlinedBrowserNotSupportedIcon;

export const OutlinedBrowserUpdatedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 13v3c0 1.1-.9 2-2 2h-3l1 1v2H6v-2l1-1H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h8v2H4v11h16v-3h2zm-7 2l-5-5l1.41-1.41L14 11.17V3h2v8.17l2.59-2.58L20 10l-5 5z"/>
  </svg>
);
OutlinedBrowserUpdatedIcon.displayName = 'OutlinedBrowserUpdatedIcon';
export const BrowserUpdatedOutlinedIcon = OutlinedBrowserUpdatedIcon;

export const OutlinedCastIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2a9 9 0 0 1 9 9h2c0-6.08-4.93-11-11-11z"/>
  </svg>
);
OutlinedCastIcon.displayName = 'OutlinedCastIcon';
export const CastOutlinedIcon = OutlinedCastIcon;

export const OutlinedCastConnectedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2a9 9 0 0 1 9 9h2c0-6.08-4.93-11-11-11zm20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 7v2h12v6h-3v2h5V7z"/>
  </svg>
);
OutlinedCastConnectedIcon.displayName = 'OutlinedCastConnectedIcon';
export const CastConnectedOutlinedIcon = OutlinedCastConnectedIcon;

export const OutlinedCastForEducationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2a9 9 0 0 1 9 9h2c0-6.08-4.93-11-11-11zm10 1.09v2L14.5 15l3.5-1.91v-2L14.5 13L11 11.09zM14.5 6L9 9l5.5 3L20 9l-5.5-3z"/>
  </svg>
);
OutlinedCastForEducationIcon.displayName = 'OutlinedCastForEducationIcon';
export const CastForEducationOutlinedIcon = OutlinedCastForEducationIcon;

export const OutlinedComputerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
  </svg>
);
OutlinedComputerIcon.displayName = 'OutlinedComputerIcon';
export const ComputerOutlinedIcon = OutlinedComputerIcon;

export const OutlinedConnectedTvIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 3H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v2h8v-2h4c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2zm0 14H4V5h16v12zM5 14v2h2c0-1.11-.89-2-2-2zm0-3v1.43c1.97 0 3.57 1.6 3.57 3.57H10c0-2.76-2.24-5-5-5zm0-3v1.45c3.61 0 6.55 2.93 6.55 6.55H13c0-4.42-3.59-8-8-8z"/>
  </svg>
);
OutlinedConnectedTvIcon.displayName = 'OutlinedConnectedTvIcon';
export const ConnectedTvOutlinedIcon = OutlinedConnectedTvIcon;

export const OutlinedDesktopMacIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"/>
  </svg>
);
OutlinedDesktopMacIcon.displayName = 'OutlinedDesktopMacIcon';
export const DesktopMacOutlinedIcon = OutlinedDesktopMacIcon;

export const OutlinedDesktopWindowsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"/>
  </svg>
);
OutlinedDesktopWindowsIcon.displayName = 'OutlinedDesktopWindowsIcon';
export const DesktopWindowsOutlinedIcon = OutlinedDesktopWindowsIcon;

export const OutlinedDeveloperBoardIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6v-4zm6-6h4v3h-4V7zM6 7h5v5H6V7zm6 4h4v6h-4v-6z"/>
  </svg>
);
OutlinedDeveloperBoardIcon.displayName = 'OutlinedDeveloperBoardIcon';
export const DeveloperBoardOutlinedIcon = OutlinedDeveloperBoardIcon;

export const OutlinedDeveloperBoardOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7.83 5H18v10.17L19.83 17H22v-2h-2v-2h2v-2h-2V9h2V7h-2V5c0-1.1-.9-2-2-2H5.83l2 2zM12 9.17V7h4v3h-3.17L12 9.17zM9.83 7H11v1.17L9.83 7zm4 4H16v2.17L13.83 11zM18 21c.06 0 .11 0 .16-.01l2.32 2.32l1.41-1.41L2.1 2.1L.69 3.51l1.32 1.32C2 4.89 2 4.94 2 5v14c0 1.1.9 2 2 2h14zM4 19V6.83l2 2V12h3.17l1 1H6v4h5v-3.17l1 1V17h2.17l2 2H4z"/>
  </svg>
);
OutlinedDeveloperBoardOffIcon.displayName = 'OutlinedDeveloperBoardOffIcon';
export const DeveloperBoardOffOutlinedIcon = OutlinedDeveloperBoardOffIcon;

export const OutlinedDeviceHubIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2l4 4.2V21h5v-5h-4z"/>
  </svg>
);
OutlinedDeviceHubIcon.displayName = 'OutlinedDeviceHubIcon';
export const DeviceHubOutlinedIcon = OutlinedDeviceHubIcon;

export const OutlinedDeviceUnknownIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14zM12 6.72c-1.96 0-3.5 1.52-3.5 3.47h1.75c0-.93.82-1.75 1.75-1.75s1.75.82 1.75 1.75c0 1.75-2.63 1.57-2.63 4.45h1.76c0-1.96 2.62-2.19 2.62-4.45c0-1.96-1.54-3.47-3.5-3.47zM11 16h2v2h-2v-2z"/>
  </svg>
);
OutlinedDeviceUnknownIcon.displayName = 'OutlinedDeviceUnknownIcon';
export const DeviceUnknownOutlinedIcon = OutlinedDeviceUnknownIcon;

export const OutlinedDevicesOtherIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 6h18V4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V6zm10 6H9v1.78c-.61.55-1 1.33-1 2.22c0 .89.39 1.67 1 2.22V20h4v-1.78c.61-.55 1-1.34 1-2.22s-.39-1.67-1-2.22V12zm-2 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM22 8h-6c-.5 0-1 .5-1 1v10c0 .5.5 1 1 1h6c.5 0 1-.5 1-1V9c0-.5-.5-1-1-1zm-1 10h-4v-8h4v8z"/>
  </svg>
);
OutlinedDevicesOtherIcon.displayName = 'OutlinedDevicesOtherIcon';
export const DevicesOtherOutlinedIcon = OutlinedDevicesOtherIcon;

export const OutlinedDockIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8 23h8v-2H8v2zm8-21.99L8 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM16 15H8V5h8v10z"/>
  </svg>
);
OutlinedDockIcon.displayName = 'OutlinedDockIcon';
export const DockOutlinedIcon = OutlinedDockIcon;

export const OutlinedEarbudsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 3c-2.76 0-5 2.24-5 5v8c0 1.66-1.34 3-3 3s-3-1.34-3-3V9h.83C7.44 9 8.89 7.82 9 6.21A3 3 0 0 0 6.2 3C4.44 2.89 3 4.42 3 6.19V16c0 2.76 2.24 5 5 5s5-2.24 5-5V8c0-1.66 1.34-3 3-3s3 1.34 3 3v7h-.83c-1.61 0-3.06 1.18-3.17 2.79A3 3 0 0 0 17.8 21c1.76.12 3.2-1.42 3.2-3.18V8c0-2.76-2.24-5-5-5zM5 6c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1H5V6zm14 12c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1h1v1z"/>
  </svg>
);
OutlinedEarbudsIcon.displayName = 'OutlinedEarbudsIcon';
export const EarbudsOutlinedIcon = OutlinedEarbudsIcon;

export const OutlinedEarbudsBatteryIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 7h-1V6h-2v1h-1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-1 9h-2V9h2v7zm-6-6.62C14 7.51 12.49 6 10.62 6S7.25 7.51 7.25 9.38v5.25c0 1.04-.84 1.88-1.88 1.88s-1.87-.85-1.87-1.89v-4.7c.16.05.33.08.5.08c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2v6.62C2 16.49 3.51 18 5.38 18s3.38-1.51 3.38-3.38V9.38c0-1.04.84-1.88 1.88-1.88s1.88.84 1.88 1.88v4.7c-.18-.05-.35-.08-.52-.08c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2V9.38z"/>
  </svg>
);
OutlinedEarbudsBatteryIcon.displayName = 'OutlinedEarbudsBatteryIcon';
export const EarbudsBatteryOutlinedIcon = OutlinedEarbudsBatteryIcon;

export const OutlinedGamepadIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13 4v2.67l-1 1l-1-1V4h2m7 7v2h-2.67l-1-1l1-1H20M6.67 11l1 1l-1 1H4v-2h2.67M12 16.33l1 1V20h-2v-2.67l1-1M15 2H9v5.5l3 3l3-3V2zm7 7h-5.5l-3 3l3 3H22V9zM7.5 9H2v6h5.5l3-3l-3-3zm4.5 4.5l-3 3V22h6v-5.5l-3-3z"/>
  </svg>
);
OutlinedGamepadIcon.displayName = 'OutlinedGamepadIcon';
export const GamepadOutlinedIcon = OutlinedGamepadIcon;

export const OutlinedHeadphonesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 3a9 9 0 0 0-9 9v7c0 1.1.9 2 2 2h4v-8H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-4v8h4c1.1 0 2-.9 2-2v-7a9 9 0 0 0-9-9zM7 15v4H5v-4h2zm12 4h-2v-4h2v4z"/>
  </svg>
);
OutlinedHeadphonesIcon.displayName = 'OutlinedHeadphonesIcon';
export const HeadphonesOutlinedIcon = OutlinedHeadphonesIcon;

export const OutlinedHeadphonesBatteryIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 7h-1V6h-2v1h-1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-1 9h-2V9h2v7zM8 6c-3.31 0-6 2.69-6 6v4c0 1.1.9 2 2 2h2v-5H3.5v-1c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5v1H10v5h2c1.1 0 2-.9 2-2v-4c0-3.31-2.69-6-6-6z"/>
  </svg>
);
OutlinedHeadphonesBatteryIcon.displayName = 'OutlinedHeadphonesBatteryIcon';
export const HeadphonesBatteryOutlinedIcon = OutlinedHeadphonesBatteryIcon;

export const OutlinedHeadsetIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 14v3c0 .55-.45 1-1 1h-1v-4h2M7 14v4H6c-.55 0-1-.45-1-1v-3h2m5-13a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7a9 9 0 0 0-9-9z"/>
  </svg>
);
OutlinedHeadsetIcon.displayName = 'OutlinedHeadsetIcon';
export const HeadsetOutlinedIcon = OutlinedHeadsetIcon;

export const OutlinedHeadsetMicIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 14v4h-2v-4h2M7 14v4H6c-.55 0-1-.45-1-1v-3h2m5-13a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10a9 9 0 0 0-9-9z"/>
  </svg>
);
OutlinedHeadsetMicIcon.displayName = 'OutlinedHeadsetMicIcon';
export const HeadsetMicOutlinedIcon = OutlinedHeadsetMicIcon;

export const OutlinedHeadsetOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 4c3.87 0 7 3.13 7 7v1h-4v.17L16.83 14H19v2.17l2 2V11a9 9 0 0 0-9-9c-2.02 0-3.88.67-5.38 1.8l1.43 1.43A6.878 6.878 0 0 1 12 4zM2.1 2.1L.69 3.51l3.33 3.33A8.98 8.98 0 0 0 3 11v7c0 1.1.9 2 2 2h4v-8H5v-1c0-.94.19-1.83.52-2.65L15 17.83V20h2.17l1 1H12v2h7c.34 0 .65-.09.93-.24l.55.55l1.41-1.41L2.1 2.1zM7 14v4H5v-4h2z"/>
  </svg>
);
OutlinedHeadsetOffIcon.displayName = 'OutlinedHeadsetOffIcon';
export const HeadsetOffOutlinedIcon = OutlinedHeadsetOffIcon;

export const OutlinedHomeMaxIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 5H5C2.79 5 1 6.79 1 9v5c0 2.21 1.79 4 4 4h2v1h10v-1h2c2.21 0 4-1.79 4-4V9c0-2.21-1.79-4-4-4zm2 9c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v5z"/>
  </svg>
);
OutlinedHomeMaxIcon.displayName = 'OutlinedHomeMaxIcon';
export const HomeMaxOutlinedIcon = OutlinedHomeMaxIcon;

export const OutlinedHomeMiniIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 5C4.19 5 2 9.48 2 12c0 3.86 3.13 7 6.99 7h6.02C17.7 19 22 16.92 22 12c0 0 0-7-10-7zm0 2c7.64 0 7.99 4.51 8 5H4c0-.2.09-5 8-5zm2.86 10H9.14c-2.1 0-3.92-1.24-4.71-3h15.15c-.8 1.76-2.62 3-4.72 3z"/>
  </svg>
);
OutlinedHomeMiniIcon.displayName = 'OutlinedHomeMiniIcon';
export const HomeMiniOutlinedIcon = OutlinedHomeMiniIcon;

export const OutlinedKeyboardIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 7v10H4V7h16m0-2H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2zm0 3h2v2h-2zM8 8h2v2H8zm0 3h2v2H8zm-3 0h2v2H5zm0-3h2v2H5zm3 6h8v2H8zm6-3h2v2h-2zm0-3h2v2h-2zm3 3h2v2h-2zm0-3h2v2h-2z"/>
  </svg>
);
OutlinedKeyboardIcon.displayName = 'OutlinedKeyboardIcon';
export const KeyboardOutlinedIcon = OutlinedKeyboardIcon;

export const OutlinedKeyboardAltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15H3V6h18v13zM9 8h2v2H9V8zM5 8h2v2H5V8zm3 8h8v1H8v-1zm5-8h2v2h-2V8zm-4 4h2v2H9v-2zm-4 0h2v2H5v-2zm8 0h2v2h-2v-2zm4-4h2v2h-2V8zm0 4h2v2h-2v-2z"/>
  </svg>
);
OutlinedKeyboardAltIcon.displayName = 'OutlinedKeyboardAltIcon';
export const KeyboardAltOutlinedIcon = OutlinedKeyboardAltIcon;

export const OutlinedKeyboardArrowDownIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z"/>
  </svg>
);
OutlinedKeyboardArrowDownIcon.displayName = 'OutlinedKeyboardArrowDownIcon';
export const KeyboardArrowDownOutlinedIcon = OutlinedKeyboardArrowDownIcon;

export const OutlinedKeyboardArrowLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z"/>
  </svg>
);
OutlinedKeyboardArrowLeftIcon.displayName = 'OutlinedKeyboardArrowLeftIcon';
export const KeyboardArrowLeftOutlinedIcon = OutlinedKeyboardArrowLeftIcon;

export const OutlinedKeyboardArrowRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"/>
  </svg>
);
OutlinedKeyboardArrowRightIcon.displayName = 'OutlinedKeyboardArrowRightIcon';
export const KeyboardArrowRightOutlinedIcon = OutlinedKeyboardArrowRightIcon;

export const OutlinedKeyboardArrowUpIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6l1.41 1.41z"/>
  </svg>
);
OutlinedKeyboardArrowUpIcon.displayName = 'OutlinedKeyboardArrowUpIcon';
export const KeyboardArrowUpOutlinedIcon = OutlinedKeyboardArrowUpIcon;

export const OutlinedKeyboardBackspaceIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 11H6.83l3.58-3.59L9 6l-6 6l6 6l1.41-1.41L6.83 13H21v-2z"/>
  </svg>
);
OutlinedKeyboardBackspaceIcon.displayName = 'OutlinedKeyboardBackspaceIcon';
export const KeyboardBackspaceOutlinedIcon = OutlinedKeyboardBackspaceIcon;

export const OutlinedKeyboardCapslockIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 8.41L16.59 13L18 11.59l-6-6l-6 6L7.41 13L12 8.41zM6 18h12v-2H6v2z"/>
  </svg>
);
OutlinedKeyboardCapslockIcon.displayName = 'OutlinedKeyboardCapslockIcon';
export const KeyboardCapslockOutlinedIcon = OutlinedKeyboardCapslockIcon;

export const OutlinedKeyboardCommandKeyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.5 3C15.57 3 14 4.57 14 6.5V8h-4V6.5C10 4.57 8.43 3 6.5 3S3 4.57 3 6.5S4.57 10 6.5 10H8v4H6.5C4.57 14 3 15.57 3 17.5S4.57 21 6.5 21s3.5-1.57 3.5-3.5V16h4v1.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5H16v-4h1.5c1.93 0 3.5-1.57 3.5-3.5S19.43 3 17.5 3zM16 8V6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S18.33 8 17.5 8H16zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5S8 5.67 8 6.5V8H6.5zm3.5 6v-4h4v4h-4zm7.5 5c-.83 0-1.5-.67-1.5-1.5V16h1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm-11 0c-.83 0-1.5-.67-1.5-1.5S5.67 16 6.5 16H8v1.5c0 .83-.67 1.5-1.5 1.5z"/>
  </svg>
);
OutlinedKeyboardCommandKeyIcon.displayName = 'OutlinedKeyboardCommandKeyIcon';
export const KeyboardCommandKeyOutlinedIcon = OutlinedKeyboardCommandKeyIcon;

export const OutlinedKeyboardControlKeyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5 12l1.41 1.41L12 7.83l5.59 5.58L19 12l-7-7z"/>
  </svg>
);
OutlinedKeyboardControlKeyIcon.displayName = 'OutlinedKeyboardControlKeyIcon';
export const KeyboardControlKeyOutlinedIcon = OutlinedKeyboardControlKeyIcon;

export const OutlinedKeyboardDoubleArrowDownIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 6.41L16.59 5L12 9.58L7.41 5L6 6.41l6 6z"/><path fill={color || 'currentColor'} d="M18 13l-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"/>
  </svg>
);
OutlinedKeyboardDoubleArrowDownIcon.displayName = 'OutlinedKeyboardDoubleArrowDownIcon';
export const KeyboardDoubleArrowDownOutlinedIcon = OutlinedKeyboardDoubleArrowDownIcon;

export const OutlinedKeyboardDoubleArrowLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.59 18L19 16.59L14.42 12L19 7.41L17.59 6l-6 6z"/><path fill={color || 'currentColor'} d="M11 18l1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z"/>
  </svg>
);
OutlinedKeyboardDoubleArrowLeftIcon.displayName = 'OutlinedKeyboardDoubleArrowLeftIcon';
export const KeyboardDoubleArrowLeftOutlinedIcon = OutlinedKeyboardDoubleArrowLeftIcon;

export const OutlinedKeyboardDoubleArrowRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6.41 6L5 7.41L9.58 12L5 16.59L6.41 18l6-6z"/><path fill={color || 'currentColor'} d="M13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"/>
  </svg>
);
OutlinedKeyboardDoubleArrowRightIcon.displayName = 'OutlinedKeyboardDoubleArrowRightIcon';
export const KeyboardDoubleArrowRightOutlinedIcon = OutlinedKeyboardDoubleArrowRightIcon;

export const OutlinedKeyboardDoubleArrowUpIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6 17.59L7.41 19L12 14.42L16.59 19L18 17.59l-6-6z"/><path fill={color || 'currentColor'} d="M6 11l1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z"/>
  </svg>
);
OutlinedKeyboardDoubleArrowUpIcon.displayName = 'OutlinedKeyboardDoubleArrowUpIcon';
export const KeyboardDoubleArrowUpOutlinedIcon = OutlinedKeyboardDoubleArrowUpIcon;

export const OutlinedKeyboardHideIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 3H4c-1.1 0-1.99.9-1.99 2L2 15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H4V5h16v10zm-9-9h2v2h-2zm0 3h2v2h-2zM8 6h2v2H8zm0 3h2v2H8zM5 9h2v2H5zm0-3h2v2H5zm3 6h8v2H8zm6-3h2v2h-2zm0-3h2v2h-2zm3 3h2v2h-2zm0-3h2v2h-2zm-5 17l4-4H8z"/>
  </svg>
);
OutlinedKeyboardHideIcon.displayName = 'OutlinedKeyboardHideIcon';
export const KeyboardHideOutlinedIcon = OutlinedKeyboardHideIcon;

export const OutlinedKeyboardOptionKeyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15 5h6v2h-6zM9 5H3v2h4.85l6.92 12H21v-2h-5.07z"/>
  </svg>
);
OutlinedKeyboardOptionKeyIcon.displayName = 'OutlinedKeyboardOptionKeyIcon';
export const KeyboardOptionKeyOutlinedIcon = OutlinedKeyboardOptionKeyIcon;

export const OutlinedKeyboardReturnIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 7v4H5.83l3.58-3.59L8 6l-6 6l6 6l1.41-1.41L5.83 13H21V7h-2z"/>
  </svg>
);
OutlinedKeyboardReturnIcon.displayName = 'OutlinedKeyboardReturnIcon';
export const KeyboardReturnOutlinedIcon = OutlinedKeyboardReturnIcon;

export const OutlinedKeyboardTabIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11.59 7.41L15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6l-6-6l-1.41 1.41zM20 6v12h2V6h-2z"/>
  </svg>
);
OutlinedKeyboardTabIcon.displayName = 'OutlinedKeyboardTabIcon';
export const KeyboardTabOutlinedIcon = OutlinedKeyboardTabIcon;

export const OutlinedKeyboardVoiceIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm-1.2-9.1c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2s-1.2-.54-1.2-1.2V5.9zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.41 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
  </svg>
);
OutlinedKeyboardVoiceIcon.displayName = 'OutlinedKeyboardVoiceIcon';
export const KeyboardVoiceOutlinedIcon = OutlinedKeyboardVoiceIcon;

export const OutlinedLaptopIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
  </svg>
);
OutlinedLaptopIcon.displayName = 'OutlinedLaptopIcon';
export const LaptopOutlinedIcon = OutlinedLaptopIcon;

export const OutlinedLaptopChromebookIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z"/>
  </svg>
);
OutlinedLaptopChromebookIcon.displayName = 'OutlinedLaptopChromebookIcon';
export const LaptopChromebookOutlinedIcon = OutlinedLaptopChromebookIcon;

export const OutlinedLaptopMacIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
OutlinedLaptopMacIcon.displayName = 'OutlinedLaptopMacIcon';
export const LaptopMacOutlinedIcon = OutlinedLaptopMacIcon;

export const OutlinedLaptopWindowsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 18v-1c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v1H0v2h24v-2h-4zM4 5h16v10H4V5z"/>
  </svg>
);
OutlinedLaptopWindowsIcon.displayName = 'OutlinedLaptopWindowsIcon';
export const LaptopWindowsOutlinedIcon = OutlinedLaptopWindowsIcon;

export const OutlinedMemoryIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z"/>
  </svg>
);
OutlinedMemoryIcon.displayName = 'OutlinedMemoryIcon';
export const MemoryOutlinedIcon = OutlinedMemoryIcon;

export const OutlinedMonitorIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"/>
  </svg>
);
OutlinedMonitorIcon.displayName = 'OutlinedMonitorIcon';
export const MonitorOutlinedIcon = OutlinedMonitorIcon;

export const OutlinedMouseIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 9c-.04-4.39-3.6-7.93-8-7.93S4.04 4.61 4 9v6c0 4.42 3.58 8 8 8s8-3.58 8-8V9zm-2 0h-5V3.16c2.81.47 4.96 2.9 5 5.84zm-7-5.84V9H6a6.005 6.005 0 0 1 5-5.84zM18 15c0 3.31-2.69 6-6 6s-6-2.69-6-6v-4h12v4z"/>
  </svg>
);
OutlinedMouseIcon.displayName = 'OutlinedMouseIcon';
export const MouseOutlinedIcon = OutlinedMouseIcon;

export const OutlinedPhoneAndroidIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm1 17H7V4h10v14zm-3 3h-4v-1h4v1z"/>
  </svg>
);
OutlinedPhoneAndroidIcon.displayName = 'OutlinedPhoneAndroidIcon';
export const PhoneAndroidOutlinedIcon = OutlinedPhoneAndroidIcon;

export const OutlinedPhoneIphoneIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15.5 1h-8A2.5 2.5 0 0 0 5 3.5v17A2.5 2.5 0 0 0 7.5 23h8a2.5 2.5 0 0 0 2.5-2.5v-17A2.5 2.5 0 0 0 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"/>
  </svg>
);
OutlinedPhoneIphoneIcon.displayName = 'OutlinedPhoneIphoneIcon';
export const PhoneIphoneOutlinedIcon = OutlinedPhoneIphoneIcon;

export const OutlinedPhonelinkIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"/>
  </svg>
);
OutlinedPhonelinkIcon.displayName = 'OutlinedPhonelinkIcon';
export const PhonelinkOutlinedIcon = OutlinedPhonelinkIcon;

export const OutlinedPhonelinkOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 6V4H7.39l2 2zm2 13V9c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v3.61l2 2V10h4v7h-1.61l2.93 2.93c.39-.13.68-.49.68-.93zM2.06 1.51L.65 2.92l1.82 1.82C2.18 5.08 2 5.52 2 6v11H0v3h17.73l2.35 2.35l1.41-1.41L2.06 1.51zM4 17V6.27L14.73 17H4z"/>
  </svg>
);
OutlinedPhonelinkOffIcon.displayName = 'OutlinedPhonelinkOffIcon';
export const PhonelinkOffOutlinedIcon = OutlinedPhonelinkOffIcon;

export const OutlinedPointOfSaleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 2H7c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 4H7V4h10v2zm3 16H4c-1.1 0-2-.9-2-2v-1h20v1c0 1.1-.9 2-2 2zm-1.47-11.81A2.008 2.008 0 0 0 16.7 9H7.3c-.79 0-1.51.47-1.83 1.19L2 18h20l-3.47-7.81zM9.5 16h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5zm0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5zm0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5zm3 4h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5zm0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5zm0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5zm3 4h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5zm0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5zm0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5z"/>
  </svg>
);
OutlinedPointOfSaleIcon.displayName = 'OutlinedPointOfSaleIcon';
export const PointOfSaleOutlinedIcon = OutlinedPointOfSaleIcon;

export const OutlinedPowerInputIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2 9v2h19V9H2zm0 6h5v-2H2v2zm7 0h5v-2H9v2zm7 0h5v-2h-5v2z"/>
  </svg>
);
OutlinedPowerInputIcon.displayName = 'OutlinedPowerInputIcon';
export const PowerInputOutlinedIcon = OutlinedPowerInputIcon;

export const OutlinedRouterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 4.2c1.5 0 3 .6 4.2 1.7l.8-.8C19.6 3.7 17.8 3 16 3s-3.6.7-5 2.1l.8.8C13 4.8 14.5 4.2 16 4.2zm-3.3 2.5l.8.8c.7-.7 1.6-1 2.5-1s1.8.3 2.5 1l.8-.8c-.9-.9-2.1-1.4-3.3-1.4s-2.4.5-3.3 1.4zM19 13h-2V9h-2v4H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm0 6H5v-4h14v4zM6 16h2v2H6zm3.5 0h2v2h-2zm3.5 0h2v2h-2z"/>
  </svg>
);
OutlinedRouterIcon.displayName = 'OutlinedRouterIcon';
export const RouterOutlinedIcon = OutlinedRouterIcon;

export const OutlinedScannerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.8 10.7L4.2 5l-.7 1.9L17.6 12H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5.5c0-.8-.5-1.6-1.2-1.8zM19 18H5v-4h14v4zM6 15h2v2H6zm4 0h8v2h-8z"/>
  </svg>
);
OutlinedScannerIcon.displayName = 'OutlinedScannerIcon';
export const ScannerOutlinedIcon = OutlinedScannerIcon;

export const OutlinedSecurityIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
  </svg>
);
OutlinedSecurityIcon.displayName = 'OutlinedSecurityIcon';
export const SecurityOutlinedIcon = OutlinedSecurityIcon;

export const OutlinedSimCardIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 2v16H6V8.83L10.83 4H18zM7 17h2v2H7zm8 0h2v2h-2zm-8-6h2v4H7zm4 4h2v4h-2zm0-4h2v2h-2zm4 0h2v4h-2z"/>
  </svg>
);
OutlinedSimCardIcon.displayName = 'OutlinedSimCardIcon';
export const SimCardOutlinedIcon = OutlinedSimCardIcon;

export const OutlinedSmartDisplayIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9.5 7.5v9l7-4.5z"/><path fill={color || 'currentColor'} d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14.01H4V5.99h16v12.02z"/>
  </svg>
);
OutlinedSmartDisplayIcon.displayName = 'OutlinedSmartDisplayIcon';
export const SmartDisplayOutlinedIcon = OutlinedSmartDisplayIcon;

export const OutlinedSmartScreenIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12.5 11.25H14v1.5h-1.5zm2.5 0h1.5v1.5H15zm-5 0h1.5v1.5H10zm-2.5 0H9v1.5H7.5z"/><path fill={color || 'currentColor'} d="M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM4 17H3V7h1v10zm14 0H6V7h12v10zm3 0h-1V7h1v10z"/>
  </svg>
);
OutlinedSmartScreenIcon.displayName = 'OutlinedSmartScreenIcon';
export const SmartScreenOutlinedIcon = OutlinedSmartScreenIcon;

export const OutlinedSmartToyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zm-2 10H6V7h12v12zm-9-6c-.83 0-1.5-.67-1.5-1.5S8.17 10 9 10s1.5.67 1.5 1.5S9.83 13 9 13zm7.5-1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5zM8 15h8v2H8v-2z"/>
  </svg>
);
OutlinedSmartToyIcon.displayName = 'OutlinedSmartToyIcon';
export const SmartToyOutlinedIcon = OutlinedSmartToyIcon;

export const OutlinedSmartphoneIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
  </svg>
);
OutlinedSmartphoneIcon.displayName = 'OutlinedSmartphoneIcon';
export const SmartphoneOutlinedIcon = OutlinedSmartphoneIcon;

export const OutlinedSpeakerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 1.99 2 1.99L17 22c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 20V4h10v16H7zm5-11c1.1 0 2-.9 2-2s-.9-2-2-2a2 2 0 1 0 0 4zm0 2c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z"/>
  </svg>
);
OutlinedSpeakerIcon.displayName = 'OutlinedSpeakerIcon';
export const SpeakerOutlinedIcon = OutlinedSpeakerIcon;

export const OutlinedSpeakerGroupIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.2 1H9.8C8.81 1 8 1.81 8 2.8v14.4c0 .99.81 1.79 1.8 1.79l8.4.01c.99 0 1.8-.81 1.8-1.8V2.8c0-.99-.81-1.8-1.8-1.8zM18 17l-8-.01V3h8v14zm-4-9c1.1 0 2-.89 2-2s-.9-2-2-2s-2 .89-2 2s.9 2 2 2zm0 8c1.93 0 3.5-1.57 3.5-3.5S15.93 9 14 9s-3.5 1.57-3.5 3.5S12.07 16 14 16zm0-5c.83 0 1.5.67 1.5 1.5S14.83 14 14 14s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5zM6 5H4v16a2 2 0 0 0 2 2h10v-2H6V5z"/>
  </svg>
);
OutlinedSpeakerGroupIcon.displayName = 'OutlinedSpeakerGroupIcon';
export const SpeakerGroupOutlinedIcon = OutlinedSpeakerGroupIcon;

export const OutlinedStartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.59 7.41L18.17 11H6v2h12.17l-3.59 3.59L16 18l6-6l-6-6l-1.41 1.41zM2 6v12h2V6H2z"/>
  </svg>
);
OutlinedStartIcon.displayName = 'OutlinedStartIcon';
export const StartOutlinedIcon = OutlinedStartIcon;

export const OutlinedTabletIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z"/>
  </svg>
);
OutlinedTabletIcon.displayName = 'OutlinedTabletIcon';
export const TabletOutlinedIcon = OutlinedTabletIcon;

export const OutlinedTabletAndroidIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-4 22h-4v-1h4v1zm5.25-3H4.75V3h14.5v16z"/>
  </svg>
);
OutlinedTabletAndroidIcon.displayName = 'OutlinedTabletAndroidIcon';
export const TabletAndroidOutlinedIcon = OutlinedTabletAndroidIcon;

export const OutlinedTabletMacIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.5 0h-14A2.5 2.5 0 0 0 2 2.5v19A2.5 2.5 0 0 0 4.5 24h14a2.5 2.5 0 0 0 2.5-2.5v-19A2.5 2.5 0 0 0 18.5 0zm-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm7.5-4H4V3h15v16z"/>
  </svg>
);
OutlinedTabletMacIcon.displayName = 'OutlinedTabletMacIcon';
export const TabletMacOutlinedIcon = OutlinedTabletMacIcon;

export const OutlinedToysIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.75 10.08L17.4 6.05A2.978 2.978 0 0 0 14.56 4H9.44C8.15 4 7 4.82 6.6 6.05L5.81 8.4L4.41 7l.29-.29A.996.996 0 1 0 3.29 5.3l-2 2A.996.996 0 1 0 2.7 8.71l.3-.3l1.79 1.79C3.18 10.72 2 12.22 2 14c0 1.49.83 2.78 2.05 3.47A2.991 2.991 0 0 0 7 20c1.3 0 2.4-.84 2.82-2h4.37c.41 1.16 1.51 2 2.82 2c1.49 0 2.73-1.1 2.95-2.53C21.17 16.78 22 15.49 22 14c0-1.95-1.4-3.57-3.25-3.92zM13 6h1.56a1 1 0 0 1 .95.68l1.1 3.32H13V6zm-4.51.68A1 1 0 0 1 9.44 6H11v4H7.41l-.02-.02l1.1-3.3zM7 18c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm10 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm2.49-2.68A3.028 3.028 0 0 0 17 14c-1.3 0-2.4.84-2.82 2H9.82C9.4 14.84 8.3 14 7 14c-1.03 0-1.95.53-2.49 1.32C4.2 14.97 4 14.51 4 14c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2c0 .51-.2.97-.51 1.32z"/>
  </svg>
);
OutlinedToysIcon.displayName = 'OutlinedToysIcon';
export const ToysOutlinedIcon = OutlinedToysIcon;

export const OutlinedTvIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/>
  </svg>
);
OutlinedTvIcon.displayName = 'OutlinedTvIcon';
export const TvOutlinedIcon = OutlinedTvIcon;

export const OutlinedVideogameAssetIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8zM6 15h2v-2h2v-2H8V9H6v2H4v2h2z"/><circle cx="14.5" cy="13.5" r="1.5"/><circle cx="18.5" cy="10.5" r="1.5"/>
  </svg>
);
OutlinedVideogameAssetIcon.displayName = 'OutlinedVideogameAssetIcon';
export const VideogameAssetOutlinedIcon = OutlinedVideogameAssetIcon;

export const OutlinedVideogameAssetOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.5 9c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5zm-6.67-1H20v8h-1.17l1.87 1.87c.75-.29 1.3-1.02 1.3-1.87V8c0-1.1-.9-2-2-2H8.83l2 2zm8.95 14.61L15.17 18H4c-1.1 0-2-.9-2-2V8c0-.85.55-1.58 1.3-1.87L1.39 4.22L2.8 2.81l18.38 18.38l-1.4 1.42zM13.17 16l-3-3H9v2H7v-2H5v-2h2V9.83L5.17 8H4v8h9.17z"/>
  </svg>
);
OutlinedVideogameAssetOffIcon.displayName = 'OutlinedVideogameAssetOffIcon';
export const VideogameAssetOffOutlinedIcon = OutlinedVideogameAssetOffIcon;

export const OutlinedWatchIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.31 2l.41 2.48C13.87 4.17 12.96 4 12 4c-.95 0-1.87.17-2.71.47L9.7 2h4.61m.41 17.52L14.31 22H9.7l-.41-2.47c.84.3 1.76.47 2.71.47c.96 0 1.87-.17 2.72-.48M16 0H8l-.95 5.73C5.19 7.19 4 9.45 4 12s1.19 4.81 3.05 6.27L8 24h8l.96-5.73C18.81 16.81 20 14.54 20 12s-1.19-4.81-3.04-6.27L16 0zm-4 18c-3.31 0-6-2.69-6-6s2.69-6 6-6s6 2.69 6 6s-2.69 6-6 6z"/>
  </svg>
);
OutlinedWatchIcon.displayName = 'OutlinedWatchIcon';
export const WatchOutlinedIcon = OutlinedWatchIcon;

export const OutlinedWatchOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 7c2.76 0 5 2.24 5 5c0 .64-.13 1.25-.35 1.82l1.5 1.5a6.963 6.963 0 0 0-1.79-8.79L15 2H9l-.96 3.21l2.14 2.14C10.75 7.13 11.36 7 12 7zm-1.51-3h3.02l.38 1.27c-.55-.16-1.97-.51-3.78 0L10.49 4zM2.81 2.81L1.39 4.22l4.46 4.46a6.963 6.963 0 0 0 1.79 8.79L9 22h6l.96-3.21l3.82 3.82l1.41-1.41L2.81 2.81zM13.51 20h-3.02l-.38-1.27c.55.15 1.97.51 3.78 0L13.51 20zM12 17c-2.76 0-5-2.24-5-5c0-.64.13-1.25.35-1.82l6.47 6.47c-.57.22-1.18.35-1.82.35z"/>
  </svg>
);
OutlinedWatchOffIcon.displayName = 'OutlinedWatchOffIcon';
export const WatchOffOutlinedIcon = OutlinedWatchOffIcon;

import React from 'react';
import { IconProps } from '../../types';

export const SharpAccountTreeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z"/>
  </svg>
);
SharpAccountTreeIcon.displayName = 'SharpAccountTreeIcon';
export const AccountTreeSharpIcon = SharpAccountTreeIcon;

export const SharpAdbIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5 16c0 3.87 3.13 7 7 7s7-3.13 7-7v-4H5v4zM16.12 4.37l2.1-2.1l-.82-.83l-2.3 2.31C14.16 3.28 13.12 3 12 3s-2.16.28-3.09.75L6.6 1.44l-.82.83l2.1 2.1C6.14 5.64 5 7.68 5 10v1h14v-1c0-2.32-1.14-4.36-2.88-5.63zM9 9c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
SharpAdbIcon.displayName = 'SharpAdbIcon';
export const AdbSharpIcon = SharpAdbIcon;

export const SharpAirlineSeatFlatIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 7v6H9V7h13zM2 14v2h6v2h8v-2h6v-2H2zm5.14-1.9a3 3 0 0 0-.04-4.24a3 3 0 0 0-4.24.04a3 3 0 0 0 .04 4.24a3 3 0 0 0 4.24-.04z"/>
  </svg>
);
SharpAirlineSeatFlatIcon.displayName = 'SharpAirlineSeatFlatIcon';
export const AirlineSeatFlatSharpIcon = SharpAirlineSeatFlatIcon;

export const SharpAirlineSeatFlatAngledIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.56 16.18L9.2 11.71l2.08-5.66l12.35 4.47l-2.07 5.66zM1.5 12.14L8 14.48V19h8v-1.63L20.52 19l.69-1.89l-19.02-6.86l-.69 1.89zm5.8-1.94a3.01 3.01 0 0 0 1.41-4A3.005 3.005 0 0 0 4.7 4.8a2.99 2.99 0 0 0-1.4 4a2.99 2.99 0 0 0 4 1.4z"/>
  </svg>
);
SharpAirlineSeatFlatAngledIcon.displayName = 'SharpAirlineSeatFlatAngledIcon';
export const AirlineSeatFlatAngledSharpIcon = SharpAirlineSeatFlatAngledIcon;

export const SharpAirlineSeatIndividualSuiteIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 13c1.65 0 3-1.35 3-3S8.65 7 7 7s-3 1.35-3 3s1.35 3 3 3zm16-6H11v7H3V7H1v10h22V7z"/>
  </svg>
);
SharpAirlineSeatIndividualSuiteIcon.displayName = 'SharpAirlineSeatIndividualSuiteIcon';
export const AirlineSeatIndividualSuiteSharpIcon = SharpAirlineSeatIndividualSuiteIcon;

export const SharpAirlineSeatLegroomExtraIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 3H2v14h11v-2H4zm18.24 12.96l-2.53 1.15l-3.41-6.98A2.019 2.019 0 0 0 14.51 9H11V3H5v11h10l3.41 7l5.07-2.32l-1.24-2.72z"/>
  </svg>
);
SharpAirlineSeatLegroomExtraIcon.displayName = 'SharpAirlineSeatLegroomExtraIcon';
export const AirlineSeatLegroomExtraSharpIcon = SharpAirlineSeatLegroomExtraIcon;

export const SharpAirlineSeatLegroomNormalIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5 15V3H3v14h11v-2H5zm17 3h-3v-7c0-1.1-.9-2-2-2h-5V3H6v11h10v7h6v-3z"/>
  </svg>
);
SharpAirlineSeatLegroomNormalIcon.displayName = 'SharpAirlineSeatLegroomNormalIcon';
export const AirlineSeatLegroomNormalSharpIcon = SharpAirlineSeatLegroomNormalIcon;

export const SharpAirlineSeatLegroomReducedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.97 21H14v-3l1-4H6V3h6v6h5c1.1 0 2 .9 2 2l-2 7h2.97v3zM5 15V3H3v14h9v-2H5z"/>
  </svg>
);
SharpAirlineSeatLegroomReducedIcon.displayName = 'SharpAirlineSeatLegroomReducedIcon';
export const AirlineSeatLegroomReducedSharpIcon = SharpAirlineSeatLegroomReducedIcon;

export const SharpAirlineSeatReclineExtraIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5.35 5.64c-.9-.64-1.12-1.88-.49-2.79c.63-.9 1.88-1.12 2.79-.49c.9.64 1.12 1.88.49 2.79c-.64.9-1.88 1.12-2.79.49zM16 19H6.5L4 7H2l2.85 14H16v-2zm.23-4h-4.88l-1.03-4.1c1.58.89 3.28 1.54 5.15 1.22V9.99c-1.63.31-3.44-.27-4.69-1.25L9.14 7.47c-.23-.18-.49-.3-.76-.38a2.21 2.21 0 0 0-.99-.06h-.02a2.268 2.268 0 0 0-1.84 2.61L7.44 18h9.24l3.82 3l1.5-1.5l-5.77-4.5z"/>
  </svg>
);
SharpAirlineSeatReclineExtraIcon.displayName = 'SharpAirlineSeatReclineExtraIcon';
export const AirlineSeatReclineExtraSharpIcon = SharpAirlineSeatReclineExtraIcon;

export const SharpAirlineSeatReclineNormalIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7.59 5.41c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0s.78 2.05 0 2.83c-.79.79-2.05.79-2.83 0zM6 19V7H4v14h11v-2H6zm14 1.07L14.93 15H11.5v-3.68c1.4 1.15 3.6 2.16 5.5 2.16v-2.16c-1.66.02-3.61-.87-4.67-2.04l-1.4-1.55c-.19-.21-.43-.38-.69-.5c-.29-.14-.62-.23-.96-.23h-.03C8.01 7 7 8.01 7 9.25V18h8.07l3.5 3.5L20 20.07z"/>
  </svg>
);
SharpAirlineSeatReclineNormalIcon.displayName = 'SharpAirlineSeatReclineNormalIcon';
export const AirlineSeatReclineNormalSharpIcon = SharpAirlineSeatReclineNormalIcon;

export const SharpBluetoothAudioIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.24 12.01l2.32 2.32c.28-.72.44-1.51.44-2.33s-.16-1.59-.43-2.31l-2.33 2.32zm5.29-5.3l-1.26 1.26c.63 1.21.98 2.57.98 4.02s-.36 2.82-.98 4.02l1.2 1.2a9.936 9.936 0 0 0 1.54-5.31c-.01-1.89-.55-3.67-1.48-5.19zm-3.82 1L10 2H9v7.59L4.41 5L3 6.41L8.59 12L3 17.59L4.41 19L9 14.41V22h1l5.71-5.71l-4.3-4.29l4.3-4.29zM11 5.83l1.88 1.88L11 9.59V5.83zm1.88 10.46L11 18.17v-3.76l1.88 1.88z"/>
  </svg>
);
SharpBluetoothAudioIcon.displayName = 'SharpBluetoothAudioIcon';
export const BluetoothAudioSharpIcon = SharpBluetoothAudioIcon;

export const SharpConfirmationNumberIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 10V4H2.01v6c1.1 0 1.99.9 1.99 2s-.89 2-2 2v6h20v-6c-1.1 0-2-.9-2-2s.9-2 2-2zm-9 7.5h-2v-2h2v2zm0-4.5h-2v-2h2v2zm0-4.5h-2v-2h2v2z"/>
  </svg>
);
SharpConfirmationNumberIcon.displayName = 'SharpConfirmationNumberIcon';
export const ConfirmationNumberSharpIcon = SharpConfirmationNumberIcon;

export const SharpDirectionsOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13 7.5l3.5 3.5l-1.33 1.34l3.45 3.45L22.41 12L12.01 1.58l-3.8 3.8L13 10.17zM1.39 4.22l3.99 3.99L1.59 12l10.42 10.4l3.79-3.79l3.99 3.99l1.41-1.41L2.81 2.81L1.39 4.22zm8.6 8.6V15h-2v-4.18l2 2z"/>
  </svg>
);
SharpDirectionsOffIcon.displayName = 'SharpDirectionsOffIcon';
export const DirectionsOffSharpIcon = SharpDirectionsOffIcon;

export const SharpDiscFullIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 16h2v-2h-2v2zm0-9v5h2V7h-2zM10 4c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z"/>
  </svg>
);
SharpDiscFullIcon.displayName = 'SharpDiscFullIcon';
export const DiscFullSharpIcon = SharpDiscFullIcon;

export const SharpDoDisturbIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8c0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.902 7.902 0 0 1 12 20zm6.31-3.1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.42 0 8 3.58 8 8c0 1.85-.63 3.55-1.69 4.9z"/>
  </svg>
);
SharpDoDisturbIcon.displayName = 'SharpDoDisturbIcon';
export const DoDisturbSharpIcon = SharpDoDisturbIcon;

export const SharpDoDisturbAltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zM4 12c0-4.4 3.6-8 8-8c1.8 0 3.5.6 4.9 1.7L5.7 16.9C4.6 15.5 4 13.8 4 12zm8 8c-1.8 0-3.5-.6-4.9-1.7L18.3 7.1C19.4 8.5 20 10.2 20 12c0 4.4-3.6 8-8 8z"/>
  </svg>
);
SharpDoDisturbAltIcon.displayName = 'SharpDoDisturbAltIcon';
export const DoDisturbAltSharpIcon = SharpDoDisturbAltIcon;

export const SharpDoDisturbOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 11v2h-.88l4.33 4.33A9.9 9.9 0 0 0 22 12c0-5.52-4.48-10-10-10a9.9 9.9 0 0 0-5.33 1.55L14.12 11H17zM2.41 2.13L1 3.54l2.78 2.78A9.92 9.92 0 0 0 2 12c0 5.52 4.48 10 10 10c2.11 0 4.07-.66 5.68-1.78L20.46 23l1.41-1.41L2.41 2.13zM7 13v-2h1.46l2 2H7z"/>
  </svg>
);
SharpDoDisturbOffIcon.displayName = 'SharpDoDisturbOffIcon';
export const DoDisturbOffSharpIcon = SharpDoDisturbOffIcon;

export const SharpDoDisturbOnIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/>
  </svg>
);
SharpDoDisturbOnIcon.displayName = 'SharpDoDisturbOnIcon';
export const DoDisturbOnSharpIcon = SharpDoDisturbOnIcon;

export const SharpDoNotDisturbIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8c0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.902 7.902 0 0 1 12 20zm6.31-3.1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.42 0 8 3.58 8 8c0 1.85-.63 3.55-1.69 4.9z"/>
  </svg>
);
SharpDoNotDisturbIcon.displayName = 'SharpDoNotDisturbIcon';
export const DoNotDisturbSharpIcon = SharpDoNotDisturbIcon;

export const SharpDoNotDisturbAltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zM4 12c0-4.4 3.6-8 8-8c1.8 0 3.5.6 4.9 1.7L5.7 16.9C4.6 15.5 4 13.8 4 12zm8 8c-1.8 0-3.5-.6-4.9-1.7L18.3 7.1C19.4 8.5 20 10.2 20 12c0 4.4-3.6 8-8 8z"/>
  </svg>
);
SharpDoNotDisturbAltIcon.displayName = 'SharpDoNotDisturbAltIcon';
export const DoNotDisturbAltSharpIcon = SharpDoNotDisturbAltIcon;

export const SharpDoNotDisturbOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 11v2h-1.17l4.51 4.51A9.91 9.91 0 0 0 22 12c0-5.52-4.48-10-10-10c-2.04 0-3.93.61-5.51 1.66L13.83 11H17zM1.39 4.22l2.27 2.27A9.91 9.91 0 0 0 2 12c0 5.52 4.48 10 10 10c2.04 0 3.93-.61 5.51-1.66l2.27 2.27l1.41-1.41L2.81 2.81L1.39 4.22zM7 11h1.17l2 2H7v-2z"/>
  </svg>
);
SharpDoNotDisturbOffIcon.displayName = 'SharpDoNotDisturbOffIcon';
export const DoNotDisturbOffSharpIcon = SharpDoNotDisturbOffIcon;

export const SharpDoNotDisturbOnIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/>
  </svg>
);
SharpDoNotDisturbOnIcon.displayName = 'SharpDoNotDisturbOnIcon';
export const DoNotDisturbOnSharpIcon = SharpDoNotDisturbOnIcon;

export const SharpDriveEtaIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.92 5.01L18.57 4H5.43L3 11v9h3v-2h12v2h3v-9l-2.08-5.99zM6.5 15c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12s1.5.67 1.5 1.5S7.33 15 6.5 15zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM5 10l1.5-4.5h11L19 10H5z"/>
  </svg>
);
SharpDriveEtaIcon.displayName = 'SharpDriveEtaIcon';
export const DriveEtaSharpIcon = SharpDriveEtaIcon;

export const SharpEnhancedEncryptionIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 8h-3V6.22c0-2.61-1.91-4.94-4.51-5.19A4.995 4.995 0 0 0 7 6v2H4v14h16V8zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM16 16h-3v3h-2v-3H8v-2h3v-3h2v3h3v2z"/>
  </svg>
);
SharpEnhancedEncryptionIcon.displayName = 'SharpEnhancedEncryptionIcon';
export const EnhancedEncryptionSharpIcon = SharpEnhancedEncryptionIcon;

export const SharpEventAvailableIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16.53 11.06L15.47 10l-4.88 4.88l-2.12-2.12l-1.06 1.06L10.59 17l5.94-5.94zM21 3h-3V1h-2v2H8V1H6v2H3v18h18V3zm-2 16H5V8h14v11z"/>
  </svg>
);
SharpEventAvailableIcon.displayName = 'SharpEventAvailableIcon';
export const EventAvailableSharpIcon = SharpEventAvailableIcon;

export const SharpEventBusyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9.31 17l2.44-2.44L14.19 17l1.06-1.06l-2.44-2.44l2.44-2.44L14.19 10l-2.44 2.44L9.31 10l-1.06 1.06l2.44 2.44l-2.44 2.44L9.31 17zM21 3h-3V1h-2v2H8V1H6v2H3.01L3 21h18V3zm-2 16H5V8h14v11z"/>
  </svg>
);
SharpEventBusyIcon.displayName = 'SharpEventBusyIcon';
export const EventBusySharpIcon = SharpEventBusyIcon;

export const SharpEventNoteIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 10H7v2h10v-2zm4-7h-3V1h-2v2H8V1H6v2H3v18h18V3zm-2 16H5V8h14v11zm-5-5H7v2h7v-2z"/>
  </svg>
);
SharpEventNoteIcon.displayName = 'SharpEventNoteIcon';
export const EventNoteSharpIcon = SharpEventNoteIcon;

export const SharpFolderSpecialIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 6H12l-2-2H2v16h20V6zm-4.06 11L15 15.28L12.06 17l.78-3.33l-2.59-2.24l3.41-.29L15 8l1.34 3.14l3.41.29l-2.59 2.24l.78 3.33z"/>
  </svg>
);
SharpFolderSpecialIcon.displayName = 'SharpFolderSpecialIcon';
export const FolderSpecialSharpIcon = SharpFolderSpecialIcon;

export const SharpImagesearchRollerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 2v6H6V6H4v4h10v5h2v8h-6v-8h2v-3H2V4h4V2h14z"/>
  </svg>
);
SharpImagesearchRollerIcon.displayName = 'SharpImagesearchRollerIcon';
export const ImagesearchRollerSharpIcon = SharpImagesearchRollerIcon;

export const SharpLiveTvIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M23 6h-9.59l3.29-3.29L16 2l-4 4l-4-4l-.71.71L10.59 6H1v16h22V6zm-2 14H3V8h18v12zM9 10v8l7-4l-7-4z"/>
  </svg>
);
SharpLiveTvIcon.displayName = 'SharpLiveTvIcon';
export const LiveTvSharpIcon = SharpLiveTvIcon;

export const SharpMmsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 2H2v20l4-4h16V2zM5 14l3.5-4.5l2.5 3.01L14.5 8l4.5 6H5z"/>
  </svg>
);
SharpMmsIcon.displayName = 'SharpMmsIcon';
export const MmsSharpIcon = SharpMmsIcon;

export const SharpMoreIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M24 3H6l-6 9l6 9h18V3zM9 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
  </svg>
);
SharpMoreIcon.displayName = 'SharpMoreIcon';
export const MoreSharpIcon = SharpMoreIcon;

export const SharpNetworkCheckIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15.9 5c-.17 0-.32.09-.41.23l-.07.15l-5.18 11.65c-.16.29-.26.61-.26.96c0 1.11.9 2.01 2.01 2.01c.96 0 1.77-.68 1.96-1.59l.01-.03L16.4 5.5c0-.28-.22-.5-.5-.5zM1 9l2 2c2.88-2.88 6.79-4.08 10.53-3.62l1.19-2.68C9.89 3.84 4.74 5.27 1 9zm20 2l2-2a15.367 15.367 0 0 0-5.59-3.57l-.53 2.82c1.5.62 2.9 1.53 4.12 2.75zm-4 4l2-2c-.8-.8-1.7-1.42-2.66-1.89l-.55 2.92c.42.27.83.59 1.21.97zM5 13l2 2a7.1 7.1 0 0 1 4.03-2l1.28-2.88c-2.63-.08-5.3.87-7.31 2.88z"/>
  </svg>
);
SharpNetworkCheckIcon.displayName = 'SharpNetworkCheckIcon';
export const NetworkCheckSharpIcon = SharpNetworkCheckIcon;

export const SharpNetworkLockedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 16v-.36c0-1.31-.94-2.5-2.24-2.63A2.5 2.5 0 0 0 17 15.5v.5h-1v6h7v-6h-1zm-1 0h-3v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.5zm-1.5-5c.15 0 .3.01.46.02c.01 0 .03.01.04.01V1L1 20h13v-6h1.26c.22-.63.58-1.2 1.06-1.68c.85-.85 1.98-1.32 3.18-1.32z"/>
  </svg>
);
SharpNetworkLockedIcon.displayName = 'SharpNetworkLockedIcon';
export const NetworkLockedSharpIcon = SharpNetworkLockedIcon;

export const SharpNoEncryptionIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2h-4.66L20 17.56V8h-3V6.22c0-2.61-1.91-4.94-4.51-5.19c-2.53-.25-4.72 1.41-5.32 3.7L8.9 6.46V6zM4.41 4.81L3 6.22L4.78 8H4v14h14.78l1 1l1.41-1.41z"/>
  </svg>
);
SharpNoEncryptionIcon.displayName = 'SharpNoEncryptionIcon';
export const NoEncryptionSharpIcon = SharpNoEncryptionIcon;

export const SharpNoEncryptionGmailerrorredIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2h-4.66L20 17.56V8h-3V6.22c0-2.61-1.91-4.94-4.51-5.19c-2.53-.25-4.72 1.41-5.32 3.7L8.9 6.46V6zM4.41 4.81L3 6.22L4.78 8H4v14h14.78l1 1l1.41-1.41z"/>
  </svg>
);
SharpNoEncryptionGmailerrorredIcon.displayName = 'SharpNoEncryptionGmailerrorredIcon';
export const NoEncryptionGmailerrorredSharpIcon = SharpNoEncryptionGmailerrorredIcon;

export const SharpOndemandVideoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M23 3H1v16h7v2h8v-2h6.99L23 3zm-2 14H3V5h18v12zm-5-6l-7 4V7l7 4z"/>
  </svg>
);
SharpOndemandVideoIcon.displayName = 'SharpOndemandVideoIcon';
export const OndemandVideoSharpIcon = SharpOndemandVideoIcon;

export const SharpPersonalVideoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M23 3H1v16h7v2h8v-2h6.99L23 3zm-2 14H3V5h18v12z"/>
  </svg>
);
SharpPersonalVideoIcon.displayName = 'SharpPersonalVideoIcon';
export const PersonalVideoSharpIcon = SharpPersonalVideoIcon;

export const SharpPhoneBluetoothSpeakerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.71 9.5L17 7.21V11h.5l2.85-2.85L18.21 6l2.15-2.15L17.5 1H17v3.79L14.71 2.5l-.71.71L16.79 6L14 8.79l.71.71zM18 2.91l.94.94l-.94.94V2.91zm0 4.3l.94.94l-.94.94V7.21zm3 8.25l-5.27-.61l-2.52 2.52a15.045 15.045 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51z"/>
  </svg>
);
SharpPhoneBluetoothSpeakerIcon.displayName = 'SharpPhoneBluetoothSpeakerIcon';
export const PhoneBluetoothSpeakerSharpIcon = SharpPhoneBluetoothSpeakerIcon;

export const SharpPhoneCallbackIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15.73 14.85l-2.52 2.52a15.045 15.045 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51l-5.27-.61zM18 9h-2.59l5.02-5.02l-1.41-1.41L14 7.59V5h-2v6h6z"/>
  </svg>
);
SharpPhoneCallbackIcon.displayName = 'SharpPhoneCallbackIcon';
export const PhoneCallbackSharpIcon = SharpPhoneCallbackIcon;

export const SharpPhoneForwardedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 11l5-5l-5-5v3h-4v4h4zm-4.79 6.37a15.045 15.045 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51l-5.27-.61l-2.52 2.52z"/>
  </svg>
);
SharpPhoneForwardedIcon.displayName = 'SharpPhoneForwardedIcon';
export const PhoneForwardedSharpIcon = SharpPhoneForwardedIcon;

export const SharpPhoneInTalkIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 12h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3zm-1.79 5.37a15.045 15.045 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51l-5.27-.61l-2.52 2.52z"/>
  </svg>
);
SharpPhoneInTalkIcon.displayName = 'SharpPhoneInTalkIcon';
export const PhoneInTalkSharpIcon = SharpPhoneInTalkIcon;

export const SharpPhoneLockedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 5V4c0-1.1-.9-2-2-2s-2 .9-2 2v1h-1v5h6V5h-1zm-1 0h-2V4c0-.55.45-1 1-1s1 .45 1 1v1z"/><path fill={color || 'currentColor'} d="M21 15l-5-1l-2.9 2.9c-2.5-1.43-4.57-3.5-6-6L10 8L9 3H3c0 3.28.89 6.35 2.43 9c1.58 2.73 3.85 4.99 6.57 6.57C14.65 20.1 17.72 21 21 21v-6z"/>
  </svg>
);
SharpPhoneLockedIcon.displayName = 'SharpPhoneLockedIcon';
export const PhoneLockedSharpIcon = SharpPhoneLockedIcon;

export const SharpPhoneMissedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M23.32 16.67a16.413 16.413 0 0 0-11.31-4.51c-4.39 0-8.37 1.72-11.31 4.51l-.69.69L3.65 21l3.93-2.72l-.01-3.49c1.4-.45 2.9-.7 4.44-.7c1.55 0 3.04.24 4.44.7l-.01 3.49L20.37 21l3.64-3.64c0-.01-.52-.52-.69-.69zM7 6.43l4.94 4.94l7.07-7.07l-1.41-1.42l-5.66 5.66L8.4 5H11V3H5v6h2z"/>
  </svg>
);
SharpPhoneMissedIcon.displayName = 'SharpPhoneMissedIcon';
export const PhoneMissedSharpIcon = SharpPhoneMissedIcon;

export const SharpPhonePausedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15 3h2v7h-2zm4 0h2v7h-2zm-5.79 14.37a15.045 15.045 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51l-5.27-.61l-2.52 2.52z"/>
  </svg>
);
SharpPhonePausedIcon.displayName = 'SharpPhonePausedIcon';
export const PhonePausedSharpIcon = SharpPhonePausedIcon;

export const SharpPowerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 7V3h-2v4h-4V3H8v4H6v7.5L9.5 18v3h5v-3l3.5-3.51V7h-2z"/>
  </svg>
);
SharpPowerIcon.displayName = 'SharpPowerIcon';
export const PowerSharpIcon = SharpPowerIcon;

export const SharpPowerOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 14.49V9c0-1.1-.9-2-2-2V3h-2v4h-3.88l7.69 7.69l.19-.2zM10 3H8v1.88l2 2zm-5.88.84L2.71 5.25l3.34 3.34c-.03.13-.05.27-.05.4v5.51L9.5 18v3h5v-3l.48-.48l4.47 4.47l1.41-1.41L4.12 3.84z"/>
  </svg>
);
SharpPowerOffIcon.displayName = 'SharpPowerOffIcon';
export const PowerOffSharpIcon = SharpPowerOffIcon;

export const SharpPriorityHighIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="12" cy="19" r="2"/><path fill={color || 'currentColor'} d="M10 3h4v12h-4z"/>
  </svg>
);
SharpPriorityHighIcon.displayName = 'SharpPriorityHighIcon';
export const PriorityHighSharpIcon = SharpPriorityHighIcon;

export const SharpRunningWithErrorsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 10v8h-2v-8h2zm-2 10v2h2v-2h-2zm-2-2.71A7.99 7.99 0 0 1 12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8v9l7.55-7.55A9.965 9.965 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.25 0 4.33-.74 6-2v-2.71z"/>
  </svg>
);
SharpRunningWithErrorsIcon.displayName = 'SharpRunningWithErrorsIcon';
export const RunningWithErrorsSharpIcon = SharpRunningWithErrorsIcon;

export const SharpSdCardIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 2H10L4 8v14h16V2zm-8 6h-2V4h2v4zm3 0h-2V4h2v4zm3 0h-2V4h2v4z"/>
  </svg>
);
SharpSdCardIcon.displayName = 'SharpSdCardIcon';
export const SdCardSharpIcon = SharpSdCardIcon;

export const SharpSdCardAlertIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 2H10L4 8v14h16V2zm-7 15h-2v-2h2v2zm0-4h-2V8h2v5z"/>
  </svg>
);
SharpSdCardAlertIcon.displayName = 'SharpSdCardAlertIcon';
export const SdCardAlertSharpIcon = SharpSdCardAlertIcon;

export const SharpSimCardAlertIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 2H10L4 8v14h16V2zm-7 15h-2v-2h2v2zm0-4h-2V8h2v5z"/>
  </svg>
);
SharpSimCardAlertIcon.displayName = 'SharpSimCardAlertIcon';
export const SimCardAlertSharpIcon = SharpSimCardAlertIcon;

export const SharpSmsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 2H2v20l4-4h16V2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"/>
  </svg>
);
SharpSmsIcon.displayName = 'SharpSmsIcon';
export const SmsSharpIcon = SharpSmsIcon;

export const SharpSmsFailedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 2H2v20l4-4h16V2zm-9 12h-2v-2h2v2zm0-4h-2V6h2v4z"/>
  </svg>
);
SharpSmsFailedIcon.displayName = 'SharpSmsFailedIcon';
export const SmsFailedSharpIcon = SharpSmsFailedIcon;

export const SharpSupportAgentIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="9" cy="13" r="1"/><circle cx="15" cy="13" r="1"/><path fill={color || 'currentColor'} d="M18 11.03A6.04 6.04 0 0 0 12.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 0 0 4.86-5.89c1.31 2.63 4 4.44 7.12 4.47z"/><path fill={color || 'currentColor'} d="M20.99 12c-.11-5.37-4.31-9-8.99-9c-4.61 0-8.85 3.53-8.99 9H2v6h3v-5.81c0-3.83 2.95-7.18 6.78-7.29a7.007 7.007 0 0 1 7.22 7V19h-8v2h10v-3h1v-6h-1.01z"/>
  </svg>
);
SharpSupportAgentIcon.displayName = 'SharpSupportAgentIcon';
export const SupportAgentSharpIcon = SharpSupportAgentIcon;

export const SharpSyncIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6c0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6c0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4l-4-4v3z"/>
  </svg>
);
SharpSyncIcon.displayName = 'SharpSyncIcon';
export const SyncSharpIcon = SharpSyncIcon;

export const SharpSyncDisabledIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10 6.35V4.26c-.66.17-1.29.43-1.88.75l1.5 1.5c.13-.05.25-.11.38-.16zM20 12c0-2.21-.91-4.2-2.36-5.64L20 4h-6v6l2.24-2.24A6.003 6.003 0 0 1 18 12c0 .85-.19 1.65-.51 2.38l1.5 1.5A7.921 7.921 0 0 0 20 12zM4.27 4L2.86 5.41l2.36 2.36a7.925 7.925 0 0 0 1.14 9.87L4 20h6v-6l-2.24 2.24A6.003 6.003 0 0 1 6 12c0-1 .25-1.94.68-2.77l8.08 8.08c-.25.13-.5.24-.76.34v2.09c.8-.21 1.55-.54 2.23-.96l2.58 2.58l1.41-1.41L4.27 4z"/>
  </svg>
);
SharpSyncDisabledIcon.displayName = 'SharpSyncDisabledIcon';
export const SyncDisabledSharpIcon = SharpSyncDisabledIcon;

export const SharpSyncLockIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10 4.26v2.09C7.67 7.18 6 9.39 6 12c0 1.77.78 3.34 2 4.44V14h2v6H4v-2h2.73A7.942 7.942 0 0 1 4 12c0-3.73 2.55-6.85 6-7.74zM20 4h-6v6h2V7.56c1.22 1.1 2 2.67 2 4.44h2c0-2.4-1.06-4.54-2.73-6H20V4zm0 13v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z"/>
  </svg>
);
SharpSyncLockIcon.displayName = 'SharpSyncLockIcon';
export const SyncLockSharpIcon = SharpSyncLockIcon;

export const SharpSyncProblemIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 12c0 2.21.91 4.2 2.36 5.64L3 20h6v-6l-2.24 2.24A6.003 6.003 0 0 1 5 12a5.99 5.99 0 0 1 4-5.65V4.26C5.55 5.15 3 8.27 3 12zm8 5h2v-2h-2v2zM21 4h-6v6l2.24-2.24A6.003 6.003 0 0 1 19 12a5.99 5.99 0 0 1-4 5.65v2.09c3.45-.89 6-4.01 6-7.74c0-2.21-.91-4.2-2.36-5.64L21 4zm-10 9h2V7h-2v6z"/>
  </svg>
);
SharpSyncProblemIcon.displayName = 'SharpSyncProblemIcon';
export const SyncProblemSharpIcon = SharpSyncProblemIcon;

export const SharpSystemUpdateIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5 1v22h14V1H5zm12 18H7V5h10v14zm-1-6h-3V8h-2v5H8l4 4l4-4z"/>
  </svg>
);
SharpSystemUpdateIcon.displayName = 'SharpSystemUpdateIcon';
export const SystemUpdateSharpIcon = SharpSystemUpdateIcon;

export const SharpTapAndPlayIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2 16v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0 4v3h3c0-1.66-1.34-3-3-3zm0-8v2a9 9 0 0 1 9 9h2c0-6.08-4.92-11-11-11zM5 1v9.37c.69.16 1.36.37 2 .64V5h10v13h-3.03c.52 1.25.84 2.59.95 4H19V1H5z"/>
  </svg>
);
SharpTapAndPlayIcon.displayName = 'SharpTapAndPlayIcon';
export const TapAndPlaySharpIcon = SharpTapAndPlayIcon;

export const SharpTimeToLeaveIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.57 4H5.43L3 11v9h3v-2h12v2h3v-9l-2.43-7zM6.5 15c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12s1.5.67 1.5 1.5S7.33 15 6.5 15zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM5 10l1.5-4.5h11L19 10H5z"/>
  </svg>
);
SharpTimeToLeaveIcon.displayName = 'SharpTimeToLeaveIcon';
export const TimeToLeaveSharpIcon = SharpTimeToLeaveIcon;

export const SharpTvOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 7v10.88l2 2V5h-9.58l3.29-3.3L16 1l-4 4l-4-4l-.7.7L10.58 5H8.12l2 2zM2.41 2.13l-.14.14L1 3.54l1.53 1.53H1V21h17.46l1.99 1.99l1.26-1.26l.15-.15L2.41 2.13zM3 19V7h1.46l12 12H3z"/>
  </svg>
);
SharpTvOffIcon.displayName = 'SharpTvOffIcon';
export const TvOffSharpIcon = SharpTvOffIcon;

export const SharpVibrationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M0 15h2V9H0v6zm3 2h2V7H3v10zm19-8v6h2V9h-2zm-3 8h2V7h-2v10zM18 3H6v18h12V3zm-2 16H8V5h8v14z"/>
  </svg>
);
SharpVibrationIcon.displayName = 'SharpVibrationIcon';
export const VibrationSharpIcon = SharpVibrationIcon;

export const SharpVideoChatIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2 2v20l4-4h16V2H2zm15 11l-2-1.99V14H7V6h8v2.99L17 7v6z"/>
  </svg>
);
SharpVideoChatIcon.displayName = 'SharpVideoChatIcon';
export const VideoChatSharpIcon = SharpVideoChatIcon;

export const SharpVoiceChatIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 2H2.01L2 22l4-4h16V2zm-4 12l-4-3.2V14H6V6h8v3.2L18 6v8z"/>
  </svg>
);
SharpVoiceChatIcon.displayName = 'SharpVoiceChatIcon';
export const VoiceChatSharpIcon = SharpVoiceChatIcon;

export const SharpVpnLockIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 13c0 2.08-.8 3.97-2.1 5.39V17H14v-4H7v-2h3V8h4V3.46c-.95-.3-1.95-.46-3-.46C5.48 3 1 7.48 1 13s4.48 10 10 10s10-4.48 10-10c0-.34-.02-.67-.05-1h-2.03c.04.33.08.66.08 1zm-9 7.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.21.21-1.79L8 16v3h2v1.93zM22 4v-.36c0-1.31-.94-2.5-2.24-2.63A2.5 2.5 0 0 0 17 3.5V4h-1v6h7V4h-1zm-1 0h-3v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V4z"/>
  </svg>
);
SharpVpnLockIcon.displayName = 'SharpVpnLockIcon';
export const VpnLockSharpIcon = SharpVpnLockIcon;

export const SharpWcIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5.5 22v-7.5H4V7h7v7.5H9.5V22h-4zM18 22v-6h3l-3-9h-3l-3 9h3v6h3zM7.5 6c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .89-2 2s.89 2 2 2zm9 0c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .89-2 2s.89 2 2 2z"/>
  </svg>
);
SharpWcIcon.displayName = 'SharpWcIcon';
export const WcSharpIcon = SharpWcIcon;

export const SharpWifiIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3l3-3a4.237 4.237 0 0 0-6 0zm-4-4l2 2a7.074 7.074 0 0 1 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
  </svg>
);
SharpWifiIcon.displayName = 'SharpWifiIcon';
export const WifiSharpIcon = SharpWifiIcon;

export const SharpWifiOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 11l2-2c-3.73-3.73-8.87-5.15-13.7-4.31l2.58 2.58c3.3-.02 6.61 1.22 9.12 3.73zM9 17l3 3l3-3a4.237 4.237 0 0 0-6 0zm10-4a9.895 9.895 0 0 0-3.72-2.33l3.02 3.02l.7-.69zM3.41 1.64L2 3.05L5.05 6.1C3.59 6.83 2.22 7.79 1 9l2 2c1.23-1.23 2.65-2.16 4.17-2.78l2.24 2.24A9.823 9.823 0 0 0 5 13l2 2a6.999 6.999 0 0 1 4.89-2.06l7.08 7.08l1.41-1.41L3.41 1.64z"/>
  </svg>
);
SharpWifiOffIcon.displayName = 'SharpWifiOffIcon';
export const WifiOffSharpIcon = SharpWifiOffIcon;

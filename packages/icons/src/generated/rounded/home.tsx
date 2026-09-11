import React from 'react';
import { IconProps } from '../../types';

export const RoundedAutoModeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.06 2.83c-1.15-.77-2.46-1.32-3.86-1.61c-.62-.12-1.2.35-1.2.99c0 .46.31.88.76.97c1.17.23 2.26.7 3.21 1.34c.39.26.9.19 1.23-.14c.46-.45.39-1.2-.14-1.55zM11 2.21c0-.64-.58-1.11-1.2-.99c-1.4.29-2.71.84-3.86 1.61c-.52.35-.59 1.1-.15 1.54c.33.33.84.4 1.23.14c.96-.64 2.04-1.1 3.21-1.34c.46-.08.77-.5.77-.96zM4.38 5.79a1 1 0 0 0-1.54.15A10.66 10.66 0 0 0 1.23 9.8a1 1 0 0 0 .98 1.2c.46 0 .88-.31.97-.76c.23-1.17.7-2.26 1.34-3.22c.25-.38.18-.9-.14-1.23zM21.79 11a1 1 0 0 0 .98-1.2c-.29-1.4-.84-2.7-1.61-3.86c-.35-.52-1.1-.6-1.54-.15c-.33.33-.4.84-.14 1.23c.64.96 1.1 2.05 1.34 3.22c.09.45.51.76.97.76zM8 12.46l2.44 1.11l1.1 2.43a.5.5 0 0 0 .91 0l1.11-2.44l2.44-1.1a.5.5 0 0 0 0-.91l-2.44-1.11L12.46 8a.5.5 0 0 0-.91 0l-1.11 2.44L8 11.54c-.39.18-.39.74 0 .92z"/><path fill={color || 'currentColor'} d="M12 21a8.96 8.96 0 0 1-7.46-4H6c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-1.7c1.99 2.84 5.27 4.7 9 4.7c4.45 0 8.27-2.64 10-6.43a1.01 1.01 0 0 0-.69-1.39c-.45-.1-.93.11-1.12.54C18.77 18.83 15.64 21 12 21z"/>
  </svg>
);
RoundedAutoModeIcon.displayName = 'RoundedAutoModeIcon';
export const AutoModeRoundedIcon = RoundedAutoModeIcon;

export const RoundedBlindsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1h-1zM16 9h2v2h-2V9zm-2 2H6V9h8v2zm4-4h-2V5h2v2zm-4-2v2H6V5h8zM6 19v-6h8v1.82A1.746 1.746 0 0 0 15 18a1.746 1.746 0 0 0 1-3.18V13h2v6H6z"/>
  </svg>
);
RoundedBlindsIcon.displayName = 'RoundedBlindsIcon';
export const BlindsRoundedIcon = RoundedBlindsIcon;

export const RoundedBlindsClosedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3c-.55 0-1 .45-1 1s.45 1 1 1h10.25c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75H21c.55 0 1-.45 1-1s-.45-1-1-1h-1zm-2-8h-2V9h2v2zm-4 0H6V9h8v2zm0 2v2H6v-2h8zm2 0h2v2h-2v-2zm2-6h-2V5h2v2zm-4-2v2H6V5h8zM6 19v-2h8v2H6zm10 0v-2h2v2h-2z"/>
  </svg>
);
RoundedBlindsClosedIcon.displayName = 'RoundedBlindsClosedIcon';
export const BlindsClosedRoundedIcon = RoundedBlindsClosedIcon;

export const RoundedBroadcastOnHomeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 6c0-1.1-.9-2-2-2H5c-.55 0-1 .45-1 1s.45 1 1 1h15v2.59c.73.29 1.4.69 2 1.17V6zM8 9H3c-.5 0-1 .5-1 1v9c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-9c0-.5-.5-1-1-1zm-1 9H4v-7h3v7zm10.75-1.03c.3-.23.5-.57.5-.97a1.25 1.25 0 0 0-2.5 0c0 .4.2.75.5.97v4.28c0 .41.34.75.75.75s.75-.34.75-.75v-4.28z"/><path fill={color || 'currentColor'} d="M17.54 13.56c.98.21 1.76 1.03 1.93 2.02c.11.64-.03 1.25-.34 1.74a.73.73 0 0 0 .12.91c.34.33.9.29 1.16-.12c.51-.82.73-1.83.53-2.9c-.3-1.56-1.56-2.83-3.12-3.13A4.009 4.009 0 0 0 13 16c0 .78.22 1.5.6 2.11c.25.41.83.46 1.16.12c.24-.24.29-.63.11-.92A2.44 2.44 0 0 1 14.5 16c0-1.55 1.43-2.78 3.04-2.44z"/><path fill={color || 'currentColor'} d="M16.25 9.54c-2.94.33-5.32 2.68-5.69 5.61c-.23 1.82.29 3.51 1.3 4.82c.27.35.8.37 1.12.06c.27-.27.28-.7.05-1a4.99 4.99 0 0 1-.95-3.89a4.993 4.993 0 0 1 3.98-4.05C19.22 10.5 22 12.93 22 16c0 1.13-.38 2.18-1.02 3.02c-.23.3-.21.73.06 1c.31.31.84.3 1.11-.06A6.423 6.423 0 0 0 23.5 16c0-3.84-3.33-6.9-7.25-6.46z"/>
  </svg>
);
RoundedBroadcastOnHomeIcon.displayName = 'RoundedBroadcastOnHomeIcon';
export const BroadcastOnHomeRoundedIcon = RoundedBroadcastOnHomeIcon;

export const RoundedBroadcastOnPersonalIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 8c.7 0 1.38.1 2.02.27L12 3L4 9v12h6.76A7.998 7.998 0 0 1 17 8zm0 6.75c-.69 0-1.25.56-1.25 1.25c0 .4.2.75.5.97V22h1.5v-5.03c.3-.23.5-.57.5-.97c0-.69-.56-1.25-1.25-1.25z"/><path fill={color || 'currentColor'} d="M17 12c-2.21 0-4 1.79-4 4c0 1.1.45 2.1 1.17 2.83l1.06-1.06A2.5 2.5 0 1 1 19.5 16c0 .69-.28 1.31-.73 1.76l1.06 1.06C20.55 18.1 21 17.1 21 16c0-2.21-1.79-4-4-4z"/><path fill={color || 'currentColor'} d="M17 9.5a6.5 6.5 0 0 0-6.5 6.5c0 1.79.73 3.42 1.9 4.6l1.06-1.06C12.56 18.63 12 17.38 12 16c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.37-.56 2.62-1.46 3.52l1.07 1.06A6.5 6.5 0 0 0 17 9.5z"/>
  </svg>
);
RoundedBroadcastOnPersonalIcon.displayName = 'RoundedBroadcastOnPersonalIcon';
export const BroadcastOnPersonalRoundedIcon = RoundedBroadcastOnPersonalIcon;

export const RoundedCurtainsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1h-1zM8.19 12c2.04-1.35 3.5-3.94 3.76-7h.09c.26 3.06 1.72 5.65 3.76 7c-2.04 1.35-3.5 3.94-3.76 7h-.09c-.26-3.06-1.72-5.65-3.76-7z"/>
  </svg>
);
RoundedCurtainsIcon.displayName = 'RoundedCurtainsIcon';
export const CurtainsRoundedIcon = RoundedCurtainsIcon;

export const RoundedCurtainsClosedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1h-1zM11 5h2v14h-2V5z"/>
  </svg>
);
RoundedCurtainsClosedIcon.displayName = 'RoundedCurtainsClosedIcon';
export const CurtainsClosedRoundedIcon = RoundedCurtainsClosedIcon;

export const RoundedElectricBoltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.69 2.21L4.33 11.49c-.64.58-.28 1.65.58 1.73L13 14l-4.85 6.76c-.22.31-.19.74.08 1.01c.3.3.77.31 1.08.02l10.36-9.28c.64-.58.28-1.65-.58-1.73L11 10l4.85-6.76c.22-.31.19-.74-.08-1.01a.77.77 0 0 0-1.08-.02z"/>
  </svg>
);
RoundedElectricBoltIcon.displayName = 'RoundedElectricBoltIcon';
export const ElectricBoltRoundedIcon = RoundedElectricBoltIcon;

export const RoundedElectricMeterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11.73 2C7.05 2.14 3.15 6.03 3 10.71c-.13 4.04 2.42 7.5 6 8.77V21c0 .55.45 1 1 1s1-.45 1-1v-1.06a8.262 8.262 0 0 0 2 0V21c0 .55.45 1 1 1s1-.45 1-1v-1.53c3.49-1.24 6-4.57 6-8.47c0-5.05-4.18-9.15-9.27-9zm1.81 12.71L12 16.25c-.41.41-1.09.41-1.5 0c-.41-.41-.41-1.09 0-1.5l.5-.5l-.54-.54a.996.996 0 0 1 0-1.41L12 10.75c.41-.41 1.09-.41 1.5 0c.41.41.41 1.09 0 1.5l-.5.5l.54.54c.39.39.39 1.03 0 1.42zM15 9H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedElectricMeterIcon.displayName = 'RoundedElectricMeterIcon';
export const ElectricMeterRoundedIcon = RoundedElectricMeterIcon;

export const RoundedEnergySavingsLeafIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 3c-4.8 0-9 3.86-9 9c0 2.12.74 4.07 1.97 5.61l-1.68 1.68A.996.996 0 1 0 4.7 20.7l1.68-1.68A8.962 8.962 0 0 0 12 21c2.3 0 4.61-.88 6.36-2.64A8.95 8.95 0 0 0 21 12V5c0-1.1-.9-2-2-2h-7zm3.83 9.26l-5.16 4.63c-.16.15-.41.14-.56-.01a.397.397 0 0 1-.04-.52l2.44-3.33l-4.05-.4a.514.514 0 0 1-.3-.89l5.16-4.63c.16-.15.41-.14.56.01c.14.14.16.36.04.52l-2.44 3.33l4.05.4c.45.04.63.59.3.89z"/>
  </svg>
);
RoundedEnergySavingsLeafIcon.displayName = 'RoundedEnergySavingsLeafIcon';
export const EnergySavingsLeafRoundedIcon = RoundedEnergySavingsLeafIcon;

export const RoundedGasMeterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1h-2V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8C5.79 4 4 5.79 4 8v10c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-4 14c-1.38 0-2.5-1.1-2.5-2.46c0-1.02.38-1.35 2.12-3.35c.2-.23.56-.23.75 0c1.73 1.99 2.12 2.34 2.12 3.35C14.5 16.9 13.38 18 12 18zm3-8H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedGasMeterIcon.displayName = 'RoundedGasMeterIcon';
export const GasMeterRoundedIcon = RoundedGasMeterIcon;

export const RoundedHeatPumpIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6.25 4.08c.82.12 1.57.44 2.2.91l-2.2 2.2V7.08zm-1.5 0v3.11l-2.2-2.2c.63-.47 1.38-.79 2.2-.91zM7.99 9.05l2.2 2.2H7.08c.12-.82.44-1.57.91-2.2zm-.91 3.7h3.11l-2.2 2.2c-.47-.63-.79-1.38-.91-2.2zm4.17 4.17c-.82-.12-1.57-.44-2.2-.91l2.2-2.2v3.11zM12 13c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm.75 3.92v-3.11l2.2 2.2c-.63.47-1.38.79-2.2.91zm3.26-1.97l-2.2-2.2h3.11c-.12.82-.44 1.57-.91 2.2zm-2.2-3.7l2.2-2.2c.47.64.79 1.39.91 2.2h-3.11z"/>
  </svg>
);
RoundedHeatPumpIcon.displayName = 'RoundedHeatPumpIcon';
export const HeatPumpRoundedIcon = RoundedHeatPumpIcon;

export const RoundedModeFanOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16.34 8.36l-2.29.82c-.18-.13-.38-.25-.58-.34c.17-.83.63-1.58 1.36-2.06C16.85 5.44 16.18 2 13.39 2c-3.08 0-4.9 1.47-5.3 3.26L18.73 15.9c1.5.39 3.27-.51 3.27-2.51c0-4.39-3.01-6.23-5.66-5.03zM2.1 3.51a.996.996 0 0 0 0 1.41L5.27 8.1C3.77 7.7 2 8.61 2 10.61c0 4.4 3.01 6.24 5.66 5.03l2.29-.82c.18.13.38.25.58.34c-.17.83-.63 1.58-1.36 2.06C7.15 18.56 7.82 22 10.61 22c3.08 0 4.9-1.47 5.3-3.26l3.16 3.16a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0z"/>
  </svg>
);
RoundedModeFanOffIcon.displayName = 'RoundedModeFanOffIcon';
export const ModeFanOffRoundedIcon = RoundedModeFanOffIcon;

export const RoundedNestCamWiredStandIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15.83 1.01l-4.11.42C8.47 1.75 6 4.48 6 7.75s2.47 6 5.72 6.33l1.9.19l-.56.85c-.35-.08-.7-.12-1.06-.12c-2.76 0-5 2.24-5 5v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-2c0-1.67-.83-3.15-2.09-4.06l.97-1.45c1.14.07 2.12-.83 2.12-1.99V3c0-1.17-1-2.09-2.17-1.99z"/>
  </svg>
);
RoundedNestCamWiredStandIcon.displayName = 'RoundedNestCamWiredStandIcon';
export const NestCamWiredStandRoundedIcon = RoundedNestCamWiredStandIcon;

export const RoundedOilBarrelIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 13c.55 0 1-.45 1-1s-.45-1-1-1h-1V5h1c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1h1v6H4c-.55 0-1 .45-1 1s.45 1 1 1h1v6H4c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1h-1v-6h1zm-8 3c-1.66 0-3-1.32-3-2.95c0-1.16.41-1.58 2.24-3.68a.999.999 0 0 1 1.51 0c1.82 2.09 2.24 2.52 2.24 3.68C15 14.68 13.66 16 12 16z"/>
  </svg>
);
RoundedOilBarrelIcon.displayName = 'RoundedOilBarrelIcon';
export const OilBarrelRoundedIcon = RoundedOilBarrelIcon;

export const RoundedPropaneIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16.75 6H16V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v1h-.75C3.97 6 1.1 8.53 1 11.82A6.001 6.001 0 0 0 7 18v2c0 .55.45 1 1 1s1-.45 1-1v-2h6v2c0 .55.45 1 1 1s1-.45 1-1v-2c3.38 0 6.1-2.79 6-6.18C22.9 8.53 20.03 6 16.75 6zM10 5h4v1h-4V5z"/>
  </svg>
);
RoundedPropaneIcon.displayName = 'RoundedPropaneIcon';
export const PropaneRoundedIcon = RoundedPropaneIcon;

export const RoundedPropaneTankIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 15v3c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-3H4zm16-2v-3c0-1.86-1.28-3.41-3-3.86V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2.14c-1.72.45-3 2-3 3.86v3h16zM9 4h6v2h-2c0-.55-.45-1-1-1s-1 .45-1 1H9V4z"/>
  </svg>
);
RoundedPropaneTankIcon.displayName = 'RoundedPropaneTankIcon';
export const PropaneTankRoundedIcon = RoundedPropaneTankIcon;

export const RoundedRollerShadesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1h-1zM6 19v-6h5v1.8c-.4.3-.8.8-.8 1.4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8c0-.6-.3-1.1-.8-1.4V13h5v6H6z"/>
  </svg>
);
RoundedRollerShadesIcon.displayName = 'RoundedRollerShadesIcon';
export const RollerShadesRoundedIcon = RoundedRollerShadesIcon;

export const RoundedRollerShadesClosedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3c-.55 0-1 .45-1 1s.45 1 1 1h7.25c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75H21c.55 0 1-.45 1-1s-.45-1-1-1h-1zM6 19v-2h5v2H6zm7 0v-2h5v2h-5z"/>
  </svg>
);
RoundedRollerShadesClosedIcon.displayName = 'RoundedRollerShadesClosedIcon';
export const RollerShadesClosedRoundedIcon = RoundedRollerShadesClosedIcon;

export const RoundedSensorDoorIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2.5 11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
  </svg>
);
RoundedSensorDoorIcon.displayName = 'RoundedSensorDoorIcon';
export const SensorDoorRoundedIcon = RoundedSensorDoorIcon;

export const RoundedSensorOccupiedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 11c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3zm0 1c-1.84 0-3.56.5-5.03 1.37c-.61.36-.97 1.02-.97 1.72V16c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-.91c0-.7-.36-1.36-.97-1.72A9.844 9.844 0 0 0 12 12zm10.11-4.21c.55-.23.78-.88.5-1.41a12.12 12.12 0 0 0-4.99-4.99a1.01 1.01 0 0 0-1.4.5c-.19.47-.01 1.02.43 1.25c1.79.94 3.26 2.42 4.21 4.21c.23.45.78.63 1.25.44zM7.79 1.89c-.23-.55-.88-.78-1.4-.5A12.06 12.06 0 0 0 1.4 6.38c-.28.52-.05 1.18.5 1.41a.98.98 0 0 0 1.25-.43c.94-1.79 2.42-3.26 4.21-4.21c.44-.24.62-.79.43-1.26zm-5.9 14.32c-.55.23-.78.88-.5 1.4c1.13 2.12 2.87 3.87 5 5c.52.28 1.17.04 1.4-.5c.19-.47.01-1.02-.43-1.25c-1.79-.94-3.26-2.42-4.21-4.21a1 1 0 0 0-1.26-.44zm14.32 5.9c.23.55.88.78 1.4.5c2.12-1.13 3.87-2.87 5-5c.28-.52.04-1.17-.5-1.4c-.47-.19-1.02-.01-1.25.43c-.94 1.79-2.42 3.26-4.21 4.21a1 1 0 0 0-.44 1.26z"/>
  </svg>
);
RoundedSensorOccupiedIcon.displayName = 'RoundedSensorOccupiedIcon';
export const SensorOccupiedRoundedIcon = RoundedSensorOccupiedIcon;

export const RoundedSensorWindowIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 4v16H6V4h12m0-2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 19h10v-6H7v6zm3-9h4v1h3V5H7v6h3v-1z"/>
  </svg>
);
RoundedSensorWindowIcon.displayName = 'RoundedSensorWindowIcon';
export const SensorWindowRoundedIcon = RoundedSensorWindowIcon;

export const RoundedShieldMoonIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11.3 2.26l-6 2.25C4.52 4.81 4 5.55 4 6.39v4.7c0 4.83 3.13 9.37 7.43 10.75c.37.12.77.12 1.14 0c4.3-1.38 7.43-5.91 7.43-10.75v-4.7a2 2 0 0 0-1.3-1.87l-6-2.25c-.45-.18-.95-.18-1.4-.01zm4.67 12.15c-1.84 2.17-5.21 2.1-6.96-.07c-2.19-2.72-.65-6.72 2.69-7.33c.34-.06.63.27.51.6c-.46 1.23-.39 2.64.32 3.86a4.51 4.51 0 0 0 3.18 2.2c.34.05.49.47.26.74z"/>
  </svg>
);
RoundedShieldMoonIcon.displayName = 'RoundedShieldMoonIcon';
export const ShieldMoonRoundedIcon = RoundedShieldMoonIcon;

export const RoundedSolarPowerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3.33 16H11v-3H5.6c-.94 0-1.75.65-1.95 1.57L3.33 16zM13 16h7.67l-.32-1.43A2.007 2.007 0 0 0 18.4 13H13v3zm8.11 2H13v4h6.51c1.28 0 2.23-1.18 1.95-2.43L21.11 18zM4.49 22H11v-4H2.89l-.35 1.57C2.26 20.82 3.21 22 4.49 22zM12 8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1s1-.45 1-1V9c0-.55-.45-1-1-1zm6.59.62a.996.996 0 0 0 0-1.41l-.71-.71a.996.996 0 1 0-1.41 1.41l.71.71c.39.39 1.02.39 1.41 0zm-11.77 0l.71-.71A.996.996 0 1 0 6.12 6.5l-.71.7a.996.996 0 0 0 0 1.41c.39.4 1.02.4 1.41.01zM5 2H4c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1zm15 0h-1c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1zm-8 5c2.76 0 5-2.24 5-5H7c0 2.76 2.24 5 5 5z"/>
  </svg>
);
RoundedSolarPowerIcon.displayName = 'RoundedSolarPowerIcon';
export const SolarPowerRoundedIcon = RoundedSolarPowerIcon;

export const RoundedVerticalShadesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1h-1zm-10 0V5h4v14h-4z"/>
  </svg>
);
RoundedVerticalShadesIcon.displayName = 'RoundedVerticalShadesIcon';
export const VerticalShadesRoundedIcon = RoundedVerticalShadesIcon;

export const RoundedVerticalShadesClosedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1h-1zM13 5h1.5v14H13V5zm-2 14H9.5V5H11v14zM6 5h1.5v14H6V5zm10.5 14V5H18v14h-1.5z"/>
  </svg>
);
RoundedVerticalShadesClosedIcon.displayName = 'RoundedVerticalShadesClosedIcon';
export const VerticalShadesClosedRoundedIcon = RoundedVerticalShadesClosedIcon;

export const RoundedWindPowerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9 3H5c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1zM5 7H2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zM4 21h3c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm9.73-10.39c.75.23 1.3.78 1.57 1.46l4.27-7.11a2.28 2.28 0 0 0-3.51-2.84l-3.43 3.21c-.4.37-.63.9-.63 1.45v3.93c.36-.15.98-.33 1.73-.1zm-3.12 1.66c.16-.52.48-.96.89-1.27H3.28a2.279 2.279 0 0 0-.63 4.47l4.51 1.29c.53.15 1.1.08 1.58-.21l2.69-1.61a2.487 2.487 0 0 1-.82-2.67zm11.6 6.34l-2.28-4.1a2.05 2.05 0 0 0-1.26-.97l-3.18-.8c.03.32 0 .66-.1.99A2.478 2.478 0 0 1 13 15.5c-.61 0-.99-.22-1-.22V21c-1.1 0-2 .9-2 2h6c0-1.1-.9-2-2-2v-4.28l4.61 4.61c.89.89 2.33.89 3.22 0c.72-.72.88-1.83.38-2.72z"/><path fill={color || 'currentColor'} d="M12.56 14.43c.79.24 1.63-.2 1.87-1c.24-.79-.2-1.63-1-1.87c-.79-.24-1.63.2-1.87 1c-.24.79.21 1.63 1 1.87z"/>
  </svg>
);
RoundedWindPowerIcon.displayName = 'RoundedWindPowerIcon';
export const WindPowerRoundedIcon = RoundedWindPowerIcon;

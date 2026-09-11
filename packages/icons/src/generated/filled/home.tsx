import React from 'react';
import { IconProps } from '../../types';

export const FilledAutoModeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.03 3.56c-1.67-1.39-3.74-2.3-6.03-2.51v2.01c1.73.19 3.31.88 4.61 1.92l1.42-1.42zM11 3.06V1.05c-2.29.2-4.36 1.12-6.03 2.51l1.42 1.42A8.928 8.928 0 0 1 11 3.06zM4.98 6.39L3.56 4.97C2.17 6.64 1.26 8.71 1.05 11h2.01c.19-1.73.88-3.31 1.92-4.61zM20.94 11h2.01c-.21-2.29-1.12-4.36-2.51-6.03l-1.42 1.42A8.928 8.928 0 0 1 20.94 11zM7 12l3.44 1.56L12 17l1.56-3.44L17 12l-3.44-1.56L12 7l-1.56 3.44z"/><path fill={color || 'currentColor'} d="M12 21a8.96 8.96 0 0 1-7.46-4H7v-2H1v6h2v-2.7c1.99 2.84 5.27 4.7 9 4.7c4.87 0 9-3.17 10.44-7.56l-1.96-.45C19.25 18.48 15.92 21 12 21z"/>
  </svg>
);
FilledAutoModeIcon.displayName = 'FilledAutoModeIcon';
export const AutoModeFilledIcon = FilledAutoModeIcon;

export const FilledBlindsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 19V3H4v16H2v2h20v-2h-2zM16 9h2v2h-2V9zm-2 2H6V9h8v2zm4-4h-2V5h2v2zm-4-2v2H6V5h8zM6 19v-6h8v1.82A1.746 1.746 0 0 0 15 18a1.746 1.746 0 0 0 1-3.18V13h2v6H6z"/>
  </svg>
);
FilledBlindsIcon.displayName = 'FilledBlindsIcon';
export const BlindsFilledIcon = FilledBlindsIcon;

export const FilledBlindsClosedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 19V3H4v16H2v2h11.25c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75H22v-2h-2zm-2-8h-2V9h2v2zm-4 0H6V9h8v2zm0 2v2H6v-2h8zm2 0h2v2h-2v-2zm2-6h-2V5h2v2zm-4-2v2H6V5h8zM6 19v-2h8v2H6zm10 0v-2h2v2h-2z"/>
  </svg>
);
FilledBlindsClosedIcon.displayName = 'FilledBlindsClosedIcon';
export const BlindsClosedFilledIcon = FilledBlindsClosedIcon;

export const FilledBroadcastOnHomeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 6c0-1.1-.9-2-2-2H4v2h16v2.59c.73.29 1.4.69 2 1.17V6zM8 9H3c-.5 0-1 .5-1 1v9c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-9c0-.5-.5-1-1-1zm-1 9H4v-7h3v7zm10.75-1.03c.3-.23.5-.57.5-.97a1.25 1.25 0 0 0-2.5 0c0 .4.2.75.5.97V22h1.5v-5.03z"/><path fill={color || 'currentColor'} d="M17 13.5a2.5 2.5 0 0 1 2.5 2.5c0 .69-.28 1.31-.73 1.76l1.06 1.06C20.55 18.1 21 17.1 21 16c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 1.1.45 2.1 1.17 2.83l1.06-1.06A2.5 2.5 0 0 1 17 13.5z"/><path fill={color || 'currentColor'} d="M17 9.5a6.5 6.5 0 0 0-6.5 6.5c0 1.79.73 3.42 1.9 4.6l1.06-1.06C12.56 18.63 12 17.38 12 16c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.37-.56 2.62-1.46 3.52l1.07 1.06A6.5 6.5 0 0 0 17 9.5z"/>
  </svg>
);
FilledBroadcastOnHomeIcon.displayName = 'FilledBroadcastOnHomeIcon';
export const BroadcastOnHomeFilledIcon = FilledBroadcastOnHomeIcon;

export const FilledBroadcastOnPersonalIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 8c.7 0 1.38.1 2.02.27L12 3L4 9v12h6.76A7.998 7.998 0 0 1 17 8zm0 6.75c-.69 0-1.25.56-1.25 1.25c0 .4.2.75.5.97V22h1.5v-5.03c.3-.23.5-.57.5-.97c0-.69-.56-1.25-1.25-1.25z"/><path fill={color || 'currentColor'} d="M17 12c-2.21 0-4 1.79-4 4c0 1.1.45 2.1 1.17 2.83l1.06-1.06A2.5 2.5 0 1 1 19.5 16c0 .69-.28 1.31-.73 1.76l1.06 1.06C20.55 18.1 21 17.1 21 16c0-2.21-1.79-4-4-4z"/><path fill={color || 'currentColor'} d="M17 9.5a6.5 6.5 0 0 0-6.5 6.5c0 1.79.73 3.42 1.9 4.6l1.06-1.06C12.56 18.63 12 17.38 12 16c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.37-.56 2.62-1.46 3.52l1.07 1.06A6.5 6.5 0 0 0 17 9.5z"/>
  </svg>
);
FilledBroadcastOnPersonalIcon.displayName = 'FilledBroadcastOnPersonalIcon';
export const BroadcastOnPersonalFilledIcon = FilledBroadcastOnPersonalIcon;

export const FilledCurtainsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 19V3H4v16H2v2h20v-2h-2zM8.19 12c2.04-1.35 3.5-3.94 3.76-7h.09c.26 3.06 1.72 5.65 3.76 7c-2.04 1.35-3.5 3.94-3.76 7h-.09c-.26-3.06-1.72-5.65-3.76-7z"/>
  </svg>
);
FilledCurtainsIcon.displayName = 'FilledCurtainsIcon';
export const CurtainsFilledIcon = FilledCurtainsIcon;

export const FilledCurtainsClosedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 19V3H4v16H2v2h20v-2h-2zM11 5h2v14h-2V5z"/>
  </svg>
);
FilledCurtainsClosedIcon.displayName = 'FilledCurtainsClosedIcon';
export const CurtainsClosedFilledIcon = FilledCurtainsClosedIcon;

export const FilledElectricBoltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.69 2.21L4.33 11.49c-.64.58-.28 1.65.58 1.73L13 14l-4.85 6.76c-.22.31-.19.74.08 1.01c.3.3.77.31 1.08.02l10.36-9.28c.64-.58.28-1.65-.58-1.73L11 10l4.85-6.76c.22-.31.19-.74-.08-1.01a.77.77 0 0 0-1.08-.02z"/>
  </svg>
);
FilledElectricBoltIcon.displayName = 'FilledElectricBoltIcon';
export const ElectricBoltFilledIcon = FilledElectricBoltIcon;

export const FilledElectricMeterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2c-4.96 0-9 4.04-9 9c0 3.91 2.51 7.24 6 8.47V22h2v-2.06a8.262 8.262 0 0 0 2 0V22h2v-2.53c3.49-1.24 6-4.57 6-8.47c0-4.96-4.04-9-9-9zm2.25 12l-3 3l-1.5-1.5L11 14.25L9.75 13l3-3l1.5 1.5L13 12.75L14.25 14zM16 9H8V7h8v2z"/>
  </svg>
);
FilledElectricMeterIcon.displayName = 'FilledElectricMeterIcon';
export const ElectricMeterFilledIcon = FilledElectricMeterIcon;

export const FilledEnergySavingsLeafIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 3c-4.8 0-9 3.86-9 9c0 2.12.74 4.07 1.97 5.61L3 19.59L4.41 21l1.97-1.97A9.012 9.012 0 0 0 12 21c2.3 0 4.61-.88 6.36-2.64A8.95 8.95 0 0 0 21 12V3h-9zm3.83 9.26l-5.16 4.63c-.16.15-.41.14-.56-.01a.397.397 0 0 1-.04-.52l2.44-3.33l-4.05-.4a.514.514 0 0 1-.3-.89l5.16-4.63c.16-.15.41-.14.56.01c.14.14.16.36.04.52l-2.44 3.33l4.05.4c.45.04.63.59.3.89z"/>
  </svg>
);
FilledEnergySavingsLeafIcon.displayName = 'FilledEnergySavingsLeafIcon';
export const EnergySavingsLeafFilledIcon = FilledEnergySavingsLeafIcon;

export const FilledGasMeterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 4h-1V2h-2v2h-2V2H9v2H8C5.79 4 4 5.79 4 8v10c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-4 14c-1.38 0-2.5-1.1-2.5-2.46c0-1.09.43-1.39 2.5-3.79c2.05 2.38 2.5 2.7 2.5 3.79C14.5 16.9 13.38 18 12 18zm4-8H8V8h8v2z"/>
  </svg>
);
FilledGasMeterIcon.displayName = 'FilledGasMeterIcon';
export const GasMeterFilledIcon = FilledGasMeterIcon;

export const FilledHeatPumpIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6.25 4.08c.82.12 1.57.44 2.2.91l-2.2 2.2V7.08zm-1.5 0v3.11l-2.2-2.2c.63-.47 1.38-.79 2.2-.91zM7.99 9.05l2.2 2.2H7.08c.12-.82.44-1.57.91-2.2zm-.91 3.7h3.11l-2.2 2.2c-.47-.63-.79-1.38-.91-2.2zm4.17 4.17c-.82-.12-1.57-.44-2.2-.91l2.2-2.2v3.11zM12 13c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm.75 3.92v-3.11l2.2 2.2c-.63.47-1.38.79-2.2.91zm3.26-1.97l-2.2-2.2h3.11c-.12.82-.44 1.57-.91 2.2zm-2.2-3.7l2.2-2.2c.47.64.79 1.39.91 2.2h-3.11z"/>
  </svg>
);
FilledHeatPumpIcon.displayName = 'FilledHeatPumpIcon';
export const HeatPumpFilledIcon = FilledHeatPumpIcon;

export const FilledModeFanOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16.34 8.36l-2.29.82c-.18-.13-.38-.25-.58-.34c.17-.83.63-1.58 1.36-2.06C16.85 5.44 16.18 2 13.39 2c-3.08 0-4.9 1.47-5.3 3.26L18.73 15.9c1.5.39 3.27-.51 3.27-2.51c0-4.39-3.01-6.23-5.66-5.03zM2.81 2.81L1.39 4.22L5.27 8.1C3.77 7.7 2 8.61 2 10.61c0 4.4 3.01 6.24 5.66 5.03l2.29-.82c.18.13.38.25.58.34c-.17.83-.63 1.58-1.36 2.06C7.15 18.56 7.82 22 10.61 22c3.08 0 4.9-1.47 5.3-3.26l3.87 3.87l1.41-1.41L2.81 2.81z"/>
  </svg>
);
FilledModeFanOffIcon.displayName = 'FilledModeFanOffIcon';
export const ModeFanOffFilledIcon = FilledModeFanOffIcon;

export const FilledNestCamWiredStandIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15.83 1.01l-4.11.42C8.47 1.75 6 4.48 6 7.75s2.47 6 5.72 6.33l1.9.19l-.56.85c-.35-.08-.7-.12-1.06-.12c-2.76 0-5 2.24-5 5v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-2c0-1.67-.83-3.15-2.09-4.06l.97-1.45c1.14.07 2.12-.83 2.12-1.99V3c0-1.17-1-2.09-2.17-1.99z"/>
  </svg>
);
FilledNestCamWiredStandIcon.displayName = 'FilledNestCamWiredStandIcon';
export const NestCamWiredStandFilledIcon = FilledNestCamWiredStandIcon;

export const FilledOilBarrelIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 13c.55 0 1-.45 1-1s-.45-1-1-1h-1V5h1c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1h1v6H4c-.55 0-1 .45-1 1s.45 1 1 1h1v6H4c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1h-1v-6h1zm-8 3c-1.66 0-3-1.32-3-2.95c0-1.3.52-1.67 3-4.55c2.47 2.86 3 3.24 3 4.55c0 1.63-1.34 2.95-3 2.95z"/>
  </svg>
);
FilledOilBarrelIcon.displayName = 'FilledOilBarrelIcon';
export const OilBarrelFilledIcon = FilledOilBarrelIcon;

export const FilledPropaneIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 6h-1V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v1H7c-3.31 0-6 2.69-6 6s2.69 6 6 6v3h2v-3h6v3h2v-3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm-7-1h4v1h-4V5z"/>
  </svg>
);
FilledPropaneIcon.displayName = 'FilledPropaneIcon';
export const PropaneFilledIcon = FilledPropaneIcon;

export const FilledPropaneTankIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 15v3c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-3H4zm16-2v-3c0-1.86-1.28-3.41-3-3.86V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2.14c-1.72.45-3 2-3 3.86v3h16zM9 4h6v2h-2c0-.55-.45-1-1-1s-1 .45-1 1H9V4z"/>
  </svg>
);
FilledPropaneTankIcon.displayName = 'FilledPropaneTankIcon';
export const PropaneTankFilledIcon = FilledPropaneTankIcon;

export const FilledRollerShadesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 19V3H4v16H2v2h20v-2h-2zM6 19v-6h5v1.8c-.4.3-.8.8-.8 1.4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8c0-.6-.3-1.1-.8-1.4V13h5v6H6z"/>
  </svg>
);
FilledRollerShadesIcon.displayName = 'FilledRollerShadesIcon';
export const RollerShadesFilledIcon = FilledRollerShadesIcon;

export const FilledRollerShadesClosedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 19V3H4v16H2v2h8.25c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75H22v-2h-2zM6 19v-2h5v2H6zm7 0v-2h5v2h-5z"/>
  </svg>
);
FilledRollerShadesClosedIcon.displayName = 'FilledRollerShadesClosedIcon';
export const RollerShadesClosedFilledIcon = FilledRollerShadesClosedIcon;

export const FilledSensorDoorIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 2H6c-1.1 0-2 .9-2 2v18h16V4c0-1.1-.9-2-2-2zm-2.5 11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
  </svg>
);
FilledSensorDoorIcon.displayName = 'FilledSensorDoorIcon';
export const SensorDoorFilledIcon = FilledSensorDoorIcon;

export const FilledSensorOccupiedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 11c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3zm0 1c-1.84 0-3.56.5-5.03 1.37c-.61.35-.97 1.02-.97 1.72V17h12v-1.91c0-.7-.36-1.36-.97-1.72A9.844 9.844 0 0 0 12 12zm9.23-3.85l1.85-.77A12.056 12.056 0 0 0 16.62.92l-.77 1.85c2.42 1.02 4.36 2.96 5.38 5.38zM8.15 2.77L7.38.92A12.089 12.089 0 0 0 .92 7.38l1.85.77c1.02-2.42 2.96-4.36 5.38-5.38zM2.77 15.85l-1.85.77c1.22 2.91 3.55 5.25 6.46 6.46l.77-1.85a10.117 10.117 0 0 1-5.38-5.38zm13.08 5.38l.77 1.85c2.91-1.22 5.25-3.55 6.46-6.46l-1.85-.77a10.117 10.117 0 0 1-5.38 5.38z"/>
  </svg>
);
FilledSensorOccupiedIcon.displayName = 'FilledSensorOccupiedIcon';
export const SensorOccupiedFilledIcon = FilledSensorOccupiedIcon;

export const FilledSensorWindowIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 4v16H6V4h12m0-2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 19h10v-6H7v6zm3-9h4v1h3V5H7v6h3v-1z"/>
  </svg>
);
FilledSensorWindowIcon.displayName = 'FilledSensorWindowIcon';
export const SensorWindowFilledIcon = FilledSensorWindowIcon;

export const FilledShieldMoonIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91c4.59-1.15 8-5.86 8-10.91V5l-8-3zm3.97 12.41c-1.84 2.17-5.21 2.1-6.96-.07c-2.19-2.72-.65-6.72 2.69-7.33c.34-.06.63.27.51.6c-.46 1.23-.39 2.64.32 3.86a4.51 4.51 0 0 0 3.18 2.2c.34.05.49.47.26.74z"/>
  </svg>
);
FilledShieldMoonIcon.displayName = 'FilledShieldMoonIcon';
export const ShieldMoonFilledIcon = FilledShieldMoonIcon;

export const FilledSolarPowerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3.33 16H11v-3H4zM13 16h7.67L20 13h-7zm8.11 2H13v4h9zM2 22h9v-4H2.89zm9-14h2v3h-2zm4.764-.795l1.415-1.414L19.3 7.912l-1.414 1.414zm-11.059.708L6.826 5.79L8.24 7.206L6.12 9.327zM3 2h3v2H3zm15 0h3v2h-3zm-6 5c2.76 0 5-2.24 5-5H7c0 2.76 2.24 5 5 5z"/>
  </svg>
);
FilledSolarPowerIcon.displayName = 'FilledSolarPowerIcon';
export const SolarPowerFilledIcon = FilledSolarPowerIcon;

export const FilledVerticalShadesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 19V3H4v16H2v2h20v-2h-2zm-10 0V5h4v14h-4z"/>
  </svg>
);
FilledVerticalShadesIcon.displayName = 'FilledVerticalShadesIcon';
export const VerticalShadesFilledIcon = FilledVerticalShadesIcon;

export const FilledVerticalShadesClosedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 19V3H4v16H2v2h20v-2h-2zM13 5h1.5v14H13V5zm-2 14H9.5V5H11v14zM6 5h1.5v14H6V5zm10.5 14V5H18v14h-1.5z"/>
  </svg>
);
FilledVerticalShadesClosedIcon.displayName = 'FilledVerticalShadesClosedIcon';
export const VerticalShadesClosedFilledIcon = FilledVerticalShadesClosedIcon;

export const FilledWindPowerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 3h6v2H4zM1 7h5v2H1zm2 12h5v2H3zm10.73-8.39c.75.23 1.3.78 1.57 1.46l4.27-7.11a2.28 2.28 0 0 0-3.51-2.84l-3.43 3.21c-.4.37-.63.9-.63 1.45v3.93c.36-.15.98-.33 1.73-.1zm-3.12 1.66c.16-.52.48-.96.89-1.27H3.28a2.279 2.279 0 0 0-.63 4.47l4.51 1.29c.53.15 1.1.08 1.58-.21l2.69-1.61a2.487 2.487 0 0 1-.82-2.67zm11.6 6.34l-2.28-4.1a2.05 2.05 0 0 0-1.26-.97l-3.18-.8c.03.32 0 .66-.1.99A2.478 2.478 0 0 1 13 15.5c-.61 0-.99-.22-1-.22V21c-1.1 0-2 .9-2 2h6c0-1.1-.9-2-2-2v-4.28l4.61 4.61c.89.89 2.33.89 3.22 0c.72-.72.88-1.83.38-2.72z"/><path fill={color || 'currentColor'} d="M12.56 14.43c.79.24 1.63-.2 1.87-1c.24-.79-.2-1.63-1-1.87c-.79-.24-1.63.2-1.87 1c-.24.79.21 1.63 1 1.87z"/>
  </svg>
);
FilledWindPowerIcon.displayName = 'FilledWindPowerIcon';
export const WindPowerFilledIcon = FilledWindPowerIcon;

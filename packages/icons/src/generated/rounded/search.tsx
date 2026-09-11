import React from 'react';
import { IconProps } from '../../types';

export const RoundedBathroomIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 18c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm3 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm3 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm-8-4c0-2.76 2.24-5 5-5s5 2.24 5 5c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1z"/>
  </svg>
);
RoundedBathroomIcon.displayName = 'RoundedBathroomIcon';
export const BathroomRoundedIcon = RoundedBathroomIcon;

export const RoundedBedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78c-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v5c0 .55.45 1 1 1s1-.45 1-1v-1h16v1c0 .55.45 1 1 1s1-.45 1-1v-5c0-.88-.39-1.67-1-2.22zM14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1zM5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5V8zm-1 7v-2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v2H4z"/>
  </svg>
);
RoundedBedIcon.displayName = 'RoundedBedIcon';
export const BedRoundedIcon = RoundedBedIcon;

export const RoundedBedroomBabyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 15.99a9.83 9.83 0 0 1-6.4-2.35a.762.762 0 0 1-.04-1.11c.27-.27.71-.29 1.01-.04c.19.16.39.31.6.46L8 13.49V9.5l-1 .65c-.32.21-.73.16-.99-.12L6 10.01a.8.8 0 0 1-.03-1.08c.3-.33.65-.74.86-.98c.09-.11.07-.28-.04-.36c0 0-.81-.31-.79-.57c0-.11 3.36-.03 3.36-.03c.18 0 .34.1.43.25l1.44 2.5c.09.15.25.25.43.25h4.83c.28 0 .5.22.5.5s-.22.5-.5.5H16v2.5l.84 1.46c.2-.15.4-.3.6-.46c.3-.25.73-.23 1.01.04c.31.31.29.82-.04 1.11A9.875 9.875 0 0 1 12 17.99z"/><path fill={color || 'currentColor'} d="M14.69 14.24a7.72 7.72 0 0 1-5.4 0l-.81 1.41l-.03.06c1.1.52 2.28.79 3.53.79s2.45-.28 3.55-.79l-.03-.06l-.81-1.41z"/>
  </svg>
);
RoundedBedroomBabyIcon.displayName = 'RoundedBedroomBabyIcon';
export const BedroomBabyRoundedIcon = RoundedBedroomBabyIcon;

export const RoundedBedroomChildIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9 8.5h6v2H9zm6.64 3.5H8.37a.87.87 0 0 0-.87.87h.01V14h9v-1.13a.87.87 0 0 0-.87-.87z"/><path fill={color || 'currentColor'} d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2.75 15c-.41 0-.75-.34-.75-.75v-.75h-9v.75c0 .41-.34.75-.75.75S6 16.66 6 16.25v-3.38c0-1 .62-1.85 1.5-2.2V9c0-1.1.9-2 2-2h5c1.1 0 2 .9 2 2v1.67c.88.35 1.5 1.2 1.5 2.2v3.38c0 .41-.34.75-.75.75z"/>
  </svg>
);
RoundedBedroomChildIcon.displayName = 'RoundedBedroomChildIcon';
export const BedroomChildRoundedIcon = RoundedBedroomChildIcon;

export const RoundedBedroomParentIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16.5 12h-9c-.55 0-1 .45-1 1v1h11v-1c0-.55-.45-1-1-1zM7.25 8.5h4v2h-4zm5.5 0h4v2h-4z"/><path fill={color || 'currentColor'} d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1.75 15c-.41 0-.75-.34-.75-.75v-.75h-11v.75c0 .41-.34.75-.75.75S5 16.66 5 16.25v-3.08c0-.66.25-1.26.65-1.72V9c0-1.1.9-2 2-2H11c.37 0 .72.12 1 .32c.28-.2.63-.32 1-.32h3.35c1.1 0 2 .9 2 2v2.45c.4.46.65 1.06.65 1.72v3.08c0 .41-.34.75-.75.75z"/>
  </svg>
);
RoundedBedroomParentIcon.displayName = 'RoundedBedroomParentIcon';
export const BedroomParentRoundedIcon = RoundedBedroomParentIcon;

export const RoundedBlenderIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16.13 15.13l1.69-10.98c.1-.6-.37-1.15-.99-1.15H14c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2.23l.64 4.13C6.74 16.05 6 17.43 6 19v1c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-1c0-1.57-.74-2.95-1.87-3.87zM5 9V5h1.31l.62 4H5zm7 10c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm2.29-5H9.72L8.33 5h7.34l-1.38 9z"/>
  </svg>
);
RoundedBlenderIcon.displayName = 'RoundedBlenderIcon';
export const BlenderRoundedIcon = RoundedBlenderIcon;

export const RoundedCameraIndoorIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10.8 3.65l-6 4.5c-.5.38-.8.97-.8 1.6v9c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-9c0-.63-.3-1.22-.8-1.6l-6-4.5a2.01 2.01 0 0 0-2.4 0zm4.47 12.02L14 15v1c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1l1.27-.67c.33-.18.73.06.73.44v2.46c0 .38-.4.62-.73.44z"/>
  </svg>
);
RoundedCameraIndoorIcon.displayName = 'RoundedCameraIndoorIcon';
export const CameraIndoorRoundedIcon = RoundedCameraIndoorIcon;

export const RoundedCameraOutdoorIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 13c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1l1.27.67c.33.18.73-.06.73-.44v-2.46c0-.38-.4-.62-.73-.44L18 14v-1zm-7.2-9.1l-6 4.5c-.5.38-.8.97-.8 1.6v9c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H6v-9l6-4.5l6 4.5v1h2v-1c0-.63-.3-1.22-.8-1.6l-6-4.5a2.01 2.01 0 0 0-2.4 0z"/>
  </svg>
);
RoundedCameraOutdoorIcon.displayName = 'RoundedCameraOutdoorIcon';
export const CameraOutdoorRoundedIcon = RoundedCameraOutdoorIcon;

export const RoundedChairIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 9c-1.1 0-2 .9-2 2v4H5v-4c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.65 1.35 3 3 3v1c0 .55.45 1 1 1s1-.45 1-1v-1h12v1c0 .55.45 1 1 1s1-.45 1-1v-1c1.65 0 3-1.35 3-3v-5c0-1.1-.9-2-2-2z"/><path fill={color || 'currentColor'} d="M7 11v2h10v-2c0-1.86 1.28-3.41 3-3.86V6c0-1.65-1.35-3-3-3H7C5.35 3 4 4.35 4 6v1.14c1.72.45 3 2 3 3.86z"/>
  </svg>
);
RoundedChairIcon.displayName = 'RoundedChairIcon';
export const ChairRoundedIcon = RoundedChairIcon;

export const RoundedChairAltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h1v2H7c-1.1 0-2 .9-2 2v6c0 .55.45 1 1 1s1-.45 1-1v-2h10v2c0 .55.45 1 1 1s1-.45 1-1v-6c0-1.1-.9-2-2-2h-1v-2h1zM7 8V5h10v3H7zm10 8H7v-2h10v2zm-3-4h-4v-2h4v2z"/>
  </svg>
);
RoundedChairAltIcon.displayName = 'RoundedChairAltIcon';
export const ChairAltRoundedIcon = RoundedChairAltIcon;

export const RoundedCoffeeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29c3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3zM16 5v3H6V5h10zm2.5 3H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8zM5 19h14c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1z"/>
  </svg>
);
RoundedCoffeeIcon.displayName = 'RoundedCoffeeIcon';
export const CoffeeRoundedIcon = RoundedCoffeeIcon;

export const RoundedCoffeeMakerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 6V4h1c.55 0 1-.45 1-1s-.45-1-1-1H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1h-3.03A4.966 4.966 0 0 0 18 16v-3c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v3c0 1.64.81 3.09 2.03 4H6V4h2v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1z"/><circle cx="13" cy="9" r="1"/>
  </svg>
);
RoundedCoffeeMakerIcon.displayName = 'RoundedCoffeeMakerIcon';
export const CoffeeMakerRoundedIcon = RoundedCoffeeMakerIcon;

export const RoundedDiningIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-9 8.3c0 .93-.64 1.71-1.5 1.93v6.02c0 .41-.34.75-.75.75S8 18.66 8 18.25v-6.02c-.86-.22-1.5-1-1.5-1.93V6.5c0-.28.22-.5.5-.5s.5.22.5.5V9h.75V6.5c0-.28.22-.5.5-.5s.5.22.5.5V9H10V6.5c0-.28.23-.5.5-.5c.28 0 .5.22.5.5v3.8zm4.58 2.29l-.08.03v5.63c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.63l-.08-.04c-.97-.47-1.67-1.7-1.67-3.18c0-1.88 1.13-3.4 2.5-3.4c1.38 0 2.5 1.53 2.5 3.41c0 1.48-.7 2.71-1.67 3.18z"/>
  </svg>
);
RoundedDiningIcon.displayName = 'RoundedDiningIcon';
export const DiningRoundedIcon = RoundedDiningIcon;

export const RoundedDoorBackIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 19h-1V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H4c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1zm-10-6c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedDoorBackIcon.displayName = 'RoundedDoorBackIcon';
export const DoorBackRoundedIcon = RoundedDoorBackIcon;

export const RoundedDoorFrontIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 19h-1V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H4c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1zm-6-6c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedDoorFrontIcon.displayName = 'RoundedDoorFrontIcon';
export const DoorFrontRoundedIcon = RoundedDoorFrontIcon;

export const RoundedDoorSlidingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 19V5c0-1.1-.9-2-2-2h-5.25v16h-1.5V3H6c-1.1 0-2 .9-2 2v14c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1zM9 13c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedDoorSlidingIcon.displayName = 'RoundedDoorSlidingIcon';
export const DoorSlidingRoundedIcon = RoundedDoorSlidingIcon;

export const RoundedDoorbellIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10.8 3.9l-6 4.5c-.5.38-.8.97-.8 1.6v9c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-9c0-.63-.3-1.22-.8-1.6l-6-4.5a2.01 2.01 0 0 0-2.4 0zM12 17.5c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1zm3.5-1.5h-7c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H9v-2.34c0-1.54.82-2.82 2.25-3.16v-.25c0-.41.34-.75.75-.75s.75.34.75.75v.25c1.44.34 2.25 1.62 2.25 3.16V15h.5c.28 0 .5.22.5.5s-.22.5-.5.5z"/>
  </svg>
);
RoundedDoorbellIcon.displayName = 'RoundedDoorbellIcon';
export const DoorbellRoundedIcon = RoundedDoorbellIcon;

export const RoundedFeedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-5-5zM8 7h3c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1zm8 10H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1zm0-4H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1zm-1-5V5l4 4h-3c-.55 0-1-.45-1-1z"/>
  </svg>
);
RoundedFeedIcon.displayName = 'RoundedFeedIcon';
export const FeedRoundedIcon = RoundedFeedIcon;

export const RoundedFlatwareIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 7.08c0 1.77-.84 3.25-2 3.82V20c0 .55-.45 1-1 1s-1-.45-1-1v-9.1c-1.16-.57-2-2.05-2-3.82C10.01 4.83 11.35 3 13 3c1.66 0 3 1.83 3 4.08zm2.27-3.9c-.63-.19-1.27.31-1.27.97V20c0 .55.45 1 1 1s1-.45 1-1v-7h1c.55 0 1-.45 1-1V7c0-1.46-.86-3.26-2.73-3.82zM8.28 3c-.4 0-.72.32-.72.72V7h-.84V3.72C6.72 3.32 6.4 3 6 3s-.72.32-.72.72V7h-.84V3.72c0-.4-.32-.72-.72-.72S3 3.32 3 3.72V9c0 1.1.9 2 2 2v9c0 .55.45 1 1 1s1-.45 1-1v-9c1.1 0 2-.9 2-2V3.72c0-.4-.32-.72-.72-.72z"/>
  </svg>
);
RoundedFlatwareIcon.displayName = 'RoundedFlatwareIcon';
export const FlatwareRoundedIcon = RoundedFlatwareIcon;

export const RoundedGarageIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="15" cy="13" r="1"/><circle cx="9" cy="13" r="1"/><path fill={color || 'currentColor'} d="M8.33 7.5l-.66 2h8.66l-.66-2z"/><path fill={color || 'currentColor'} d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 15.69c0 .45-.35.81-.78.81h-.44c-.44 0-.78-.36-.78-.81V16.5H7v1.19c0 .45-.35.81-.78.81h-.44c-.43 0-.78-.36-.78-.81v-6.5c.82-2.47 1.34-4.03 1.56-4.69c.05-.16.12-.29.19-.4c.02-.02.03-.04.05-.06c.38-.53.92-.54.92-.54h8.56s.54.01.92.53c.02.03.03.05.05.07c.07.11.14.24.19.4c.22.66.74 2.23 1.56 4.69v6.5z"/>
  </svg>
);
RoundedGarageIcon.displayName = 'RoundedGarageIcon';
export const GarageRoundedIcon = RoundedGarageIcon;

export const RoundedLightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13 6.06V4c0-.55-.45-1-1-1s-1 .45-1 1v2.06c-4.5.5-8 4.31-8 8.93C3 16.1 3.9 17 5.01 17H8c0 2.21 1.79 4 4 4s4-1.79 4-4h2.99c1.11 0 2.01-.9 2.01-2.01c0-4.62-3.5-8.43-8-8.93zM12 15H5c0-3.86 3.14-7 7-7s7 3.14 7 7h-7z"/>
  </svg>
);
RoundedLightIcon.displayName = 'RoundedLightIcon';
export const LightRoundedIcon = RoundedLightIcon;

export const RoundedLivingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16.5 11.5c-.55 0-1 .45-1 1v2h-7v-2c0-.55-.45-1-1-1s-1 .45-1 1V16c0 .28.22.5.5.5h10c.28 0 .5-.22.5-.5v-3.5c0-.55-.45-1-1-1z"/><path fill={color || 'currentColor'} d="M10 12.5v.5h4v-.5c0-1.3.99-2.35 2.25-2.47V9c0-.83-.67-1.5-1.5-1.5h-5.5c-.83 0-1.5.67-1.5 1.5v1.03A2.48 2.48 0 0 1 10 12.5z"/><path fill={color || 'currentColor'} d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 14c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-3.5c0-.92.51-1.72 1.25-2.15V9c0-1.66 1.34-3 3-3h5.5c1.66 0 3 1.34 3 3v1.35c.74.43 1.25 1.23 1.25 2.15V16z"/>
  </svg>
);
RoundedLivingIcon.displayName = 'RoundedLivingIcon';
export const LivingRoundedIcon = RoundedLivingIcon;

export const RoundedManageSearchIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6 9H3c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1s-.45 1-1 1zm0 3H3c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm13.88 6.29l-3.12-3.12c-.86.56-1.89.88-3 .82c-2.37-.11-4.4-1.96-4.72-4.31a5.013 5.013 0 0 1 5.83-5.61c1.95.33 3.57 1.85 4 3.78c.33 1.46.01 2.82-.7 3.9l3.13 3.13c.39.39.39 1.02 0 1.41c-.39.39-1.03.39-1.42 0zM17 11c0-1.65-1.35-3-3-3s-3 1.35-3 3s1.35 3 3 3s3-1.35 3-3zM3 19h8c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1z"/>
  </svg>
);
RoundedManageSearchIcon.displayName = 'RoundedManageSearchIcon';
export const ManageSearchRoundedIcon = RoundedManageSearchIcon;

export const RoundedPodcastsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14 12c0 .74-.4 1.38-1 1.72V21c0 .55-.45 1-1 1s-1-.45-1-1v-7.28c-.6-.35-1-.98-1-1.72c0-1.1.9-2 2-2s2 .9 2 2zm-3.25-5.87c-2.27.46-4.12 2.28-4.61 4.55c-.4 1.86.07 3.62 1.08 4.94c.35.45 1.03.47 1.43.07l.07-.07c.34-.34.34-.87.06-1.25c-.68-.9-.98-2.1-.66-3.37c.35-1.42 1.52-2.57 2.95-2.88A3.99 3.99 0 0 1 16 12c0 .87-.28 1.67-.76 2.32c-.3.41-.29.97.07 1.33c.44.44 1.17.37 1.54-.14c.72-.98 1.15-2.2 1.15-3.51c0-3.72-3.39-6.65-7.25-5.87zm.08-4.06c-4.53.51-8.22 4.18-8.76 8.71c-.35 2.95.59 5.67 2.32 7.7c.37.43 1.03.46 1.43.06l.05-.05c.35-.35.38-.92.05-1.3a7.972 7.972 0 0 1-1.7-7.06c.7-3.01 3.18-5.39 6.22-5.97C15.53 3.18 20 7.08 20 12c0 1.96-.72 3.76-1.9 5.16a1 1 0 0 0 .05 1.35c.42.42 1.11.39 1.49-.07A9.934 9.934 0 0 0 22 12c0-5.91-5.13-10.62-11.17-9.93z"/>
  </svg>
);
RoundedPodcastsIcon.displayName = 'RoundedPodcastsIcon';
export const PodcastsRoundedIcon = RoundedPodcastsIcon;

export const RoundedShowerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="8" cy="17" r="1"/><circle cx="12" cy="17" r="1"/><circle cx="16" cy="17" r="1"/><path fill={color || 'currentColor'} d="M13 5.08V4c0-.55-.45-1-1-1s-1 .45-1 1v1.08C7.61 5.57 5 8.47 5 12v1c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1c0-3.53-2.61-6.43-6-6.92z"/><circle cx="8" cy="20" r="1"/><circle cx="12" cy="20" r="1"/><circle cx="16" cy="20" r="1"/>
  </svg>
);
RoundedShowerIcon.displayName = 'RoundedShowerIcon';
export const ShowerRoundedIcon = RoundedShowerIcon;

export const RoundedTableBarIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 7.5C22 5.57 17.52 4 12 4S2 5.57 2 7.5c0 1.81 3.95 3.31 9 3.48V15H9.35c-.82 0-1.55.5-1.86 1.26l-.99 2.47c-.23.61.21 1.27.87 1.27c.38 0 .72-.23.86-.58L9.2 17h5.6l.97 2.42c.14.35.48.58.86.58c.66 0 1.11-.66.86-1.27l-.99-2.47c-.3-.76-1.04-1.26-1.85-1.26H13v-4.02c5.05-.17 9-1.67 9-3.48z"/>
  </svg>
);
RoundedTableBarIcon.displayName = 'RoundedTableBarIcon';
export const TableBarRoundedIcon = RoundedTableBarIcon;

export const RoundedTableRestaurantIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.96 9.73l-1.43-5a.996.996 0 0 0-.96-.73H4.43c-.45 0-.84.3-.96.73l-1.43 5c-.18.63.3 1.27.96 1.27h2.2l-1.05 7.88a.989.989 0 1 0 1.96.26L6.67 15h10.67l.55 4.14a1 1 0 0 0 .98.86c.6 0 1.06-.53.98-1.12L18.8 11H21c.66 0 1.14-.64.96-1.27zM6.93 13l.27-2h9.6l.27 2H6.93z"/>
  </svg>
);
RoundedTableRestaurantIcon.displayName = 'RoundedTableRestaurantIcon';
export const TableRestaurantRoundedIcon = RoundedTableRestaurantIcon;

export const RoundedWindowIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 11V3H5c-1.1 0-2 .9-2 2v6h8zm2 0h8V5c0-1.1-.9-2-2-2h-6v8zm-2 2H3v6c0 1.1.9 2 2 2h6v-8zm2 0v8h6c1.1 0 2-.9 2-2v-6h-8z"/>
  </svg>
);
RoundedWindowIcon.displayName = 'RoundedWindowIcon';
export const WindowRoundedIcon = RoundedWindowIcon;

export const RoundedYardIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 8.22a1.562 1.562 0 0 1 2.45-1.28l-.01-.12c0-.86.7-1.56 1.56-1.56s1.56.7 1.56 1.56l-.01.12A1.562 1.562 0 0 1 16 8.22c0 .62-.37 1.16-.89 1.4c.52.25.89.79.89 1.41c0 .86-.7 1.56-1.56 1.56c-.33 0-.64-.11-.89-.28l.01.12c0 .86-.7 1.56-1.56 1.56s-1.56-.7-1.56-1.56l.01-.12A1.562 1.562 0 0 1 8 11.03c0-.62.37-1.16.89-1.4C8.37 9.38 8 8.84 8 8.22zM12 19c-2.83 0-5.21-1.97-5.84-4.61c-.18-.74.49-1.4 1.23-1.23C10.03 13.79 12 16.17 12 19c0-2.83 1.97-5.21 4.61-5.84c.74-.18 1.4.49 1.23 1.23A6.015 6.015 0 0 1 12 19z"/><circle cx="12" cy="9.62" r="1.56"/>
  </svg>
);
RoundedYardIcon.displayName = 'RoundedYardIcon';
export const YardRoundedIcon = RoundedYardIcon;

import React from 'react';
import { IconProps } from '../../types';

export const SharpAddIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
  </svg>
);
SharpAddIcon.displayName = 'SharpAddIcon';
export const AddSharpIcon = SharpAddIcon;

export const SharpAddBoxIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 3H3v18h18V3zm-4 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
  </svg>
);
SharpAddBoxIcon.displayName = 'SharpAddBoxIcon';
export const AddBoxSharpIcon = SharpAddBoxIcon;

export const SharpAddCircleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
  </svg>
);
SharpAddCircleIcon.displayName = 'SharpAddCircleIcon';
export const AddCircleSharpIcon = SharpAddCircleIcon;

export const SharpAddCircleOutlineIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/>
  </svg>
);
SharpAddCircleOutlineIcon.displayName = 'SharpAddCircleOutlineIcon';
export const AddCircleOutlineSharpIcon = SharpAddCircleOutlineIcon;

export const SharpAddLinkIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8 11h8v2H8v-2zm12.1 1H22c0-2.76-2.24-5-5-5h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1zM3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM19 12h-2v3h-3v2h3v3h2v-3h3v-2h-3v-3z"/>
  </svg>
);
SharpAddLinkIcon.displayName = 'SharpAddLinkIcon';
export const AddLinkSharpIcon = SharpAddLinkIcon;

export const SharpAmpStoriesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 4h10v15H7zM3 6h2v11H3zm16 0h2v11h-2z"/>
  </svg>
);
SharpAmpStoriesIcon.displayName = 'SharpAmpStoriesIcon';
export const AmpStoriesSharpIcon = SharpAmpStoriesIcon;

export const SharpArchiveIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.71 3H5.29L3 5.79V21h18V5.79L18.71 3zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"/>
  </svg>
);
SharpArchiveIcon.displayName = 'SharpArchiveIcon';
export const ArchiveSharpIcon = SharpArchiveIcon;

export const SharpAttributionIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm-2.75-5.5h1.5V19h2.5v-4.5h1.5v-6h-5.5z"/><circle cx="12" cy="6.5" r="1.5"/>
  </svg>
);
SharpAttributionIcon.displayName = 'SharpAttributionIcon';
export const AttributionSharpIcon = SharpAttributionIcon;

export const SharpBackspaceIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M24 3H6l-6 9l6 9h18V3zm-5 12.59L17.59 17L14 13.41L10.41 17L9 15.59L12.59 12L9 8.41L10.41 7L14 10.59L17.59 7L19 8.41L15.41 12L19 15.59z"/>
  </svg>
);
SharpBackspaceIcon.displayName = 'SharpBackspaceIcon';
export const BackspaceSharpIcon = SharpBackspaceIcon;

export const SharpBallotIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13 9.5h5v-2h-5v2zm0 7h5v-2h-5v2zm8 4.5H3V3h18v18zM6 11h5V6H6v5zm1-4h3v3H7V7zM6 18h5v-5H6v5zm1-4h3v3H7v-3z"/>
  </svg>
);
SharpBallotIcon.displayName = 'SharpBallotIcon';
export const BallotSharpIcon = SharpBallotIcon;

export const SharpBiotechIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13 19v-2h5v-2h-8c-1.66 0-3-1.34-3-3c0-1.09.59-2.04 1.46-2.56C8.17 9.03 8 8.54 8 8c0-.21.04-.42.09-.62A5.01 5.01 0 0 0 5 12c0 2.76 2.24 5 5 5v2H5v2h14v-2h-6z"/><path fill={color || 'currentColor'} d="M10.56 5.51C11.91 5.54 13 6.64 13 8c0 .75-.33 1.41-.85 1.87l.59 1.62l.94-.34l.34.94l1.88-.68l-.34-.94l.94-.34l-2.74-7.53l-.94.34l-.34-.94l-1.88.68l.34.94l-.94.35l.56 1.54z"/><circle cx="10.5" cy="8" r="1.5"/>
  </svg>
);
SharpBiotechIcon.displayName = 'SharpBiotechIcon';
export const BiotechSharpIcon = SharpBiotechIcon;

export const SharpBlockIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8c1.85 0 3.55.63 4.9 1.69L5.69 16.9A7.902 7.902 0 0 1 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1A7.902 7.902 0 0 1 20 12c0 4.42-3.58 8-8 8z"/>
  </svg>
);
SharpBlockIcon.displayName = 'SharpBlockIcon';
export const BlockSharpIcon = SharpBlockIcon;

export const SharpBoltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 21h-1l1-7H6.74S10.42 7.54 13 3h1l-1 7h4.28L11 21z"/>
  </svg>
);
SharpBoltIcon.displayName = 'SharpBoltIcon';
export const BoltSharpIcon = SharpBoltIcon;

export const SharpCalculateIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 3H3v18h18V3zm-7.97 4.06L14.09 6l1.41 1.41L16.91 6l1.06 1.06l-1.41 1.41l1.41 1.41l-1.06 1.06l-1.41-1.4l-1.41 1.41l-1.06-1.06l1.41-1.41l-1.41-1.42zm-6.78.66h5v1.5h-5v-1.5zM11.5 16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2V16zm6.5 1.25h-5v-1.5h5v1.5zm0-2.5h-5v-1.5h5v1.5z"/>
  </svg>
);
SharpCalculateIcon.displayName = 'SharpCalculateIcon';
export const CalculateSharpIcon = SharpCalculateIcon;

export const SharpChangeCircleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm.06 17v-2.01H12c-1.28 0-2.56-.49-3.54-1.46a5.006 5.006 0 0 1-.64-6.29l1.1 1.1c-.71 1.33-.53 3.01.59 4.13c.7.7 1.62 1.03 2.54 1.01v-2.14l2.83 2.83L12.06 19zm4.11-4.24l-1.1-1.1c.71-1.33.53-3.01-.59-4.13A3.482 3.482 0 0 0 12 8.5h-.06v2.15L9.11 7.83L11.94 5v2.02c1.3-.02 2.61.45 3.6 1.45c1.7 1.7 1.91 4.35.63 6.29z"/>
  </svg>
);
SharpChangeCircleIcon.displayName = 'SharpChangeCircleIcon';
export const ChangeCircleSharpIcon = SharpChangeCircleIcon;

export const SharpClearIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"/>
  </svg>
);
SharpClearIcon.displayName = 'SharpClearIcon';
export const ClearSharpIcon = SharpClearIcon;

export const SharpContentCopyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 1H2v16h2V3h12V1zm5 4H6v18h15V5zm-2 16H8V7h11v14z"/>
  </svg>
);
SharpContentCopyIcon.displayName = 'SharpContentCopyIcon';
export const ContentCopySharpIcon = SharpContentCopyIcon;

export const SharpContentCutIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9.64 7.64c.23-.5.36-1.05.36-1.64c0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2s2 .89 2 2s-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2s2 .89 2 2s-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5s.5.22.5.5s-.22.5-.5.5zM19 3l-6 6l2 2l7-7V3h-3z"/>
  </svg>
);
SharpContentCutIcon.displayName = 'SharpContentCutIcon';
export const ContentCutSharpIcon = SharpContentCutIcon;

export const SharpContentPasteIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 2h-6.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H3v20h18V2zm-9 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"/>
  </svg>
);
SharpContentPasteIcon.displayName = 'SharpContentPasteIcon';
export const ContentPasteSharpIcon = SharpContentPasteIcon;

export const SharpContentPasteGoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5 5h2v3h10V5h2v6h2V3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h7v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1z"/><path fill={color || 'currentColor'} d="M18.01 13l-1.42 1.41l1.58 1.58H12v2h6.17l-1.58 1.59l1.42 1.41l3.99-4z"/>
  </svg>
);
SharpContentPasteGoIcon.displayName = 'SharpContentPasteGoIcon';
export const ContentPasteGoSharpIcon = SharpContentPasteGoIcon;

export const SharpContentPasteOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.19 21.19L2.81 2.81L1.39 4.22L3 5.83V21h15.17l1.61 1.61l1.41-1.42zM5 19V7.83L16.17 19H5zM17 8V5h2v11.17l2 2V3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5.83l5 5H17zm-5-5c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1z"/>
  </svg>
);
SharpContentPasteOffIcon.displayName = 'SharpContentPasteOffIcon';
export const ContentPasteOffSharpIcon = SharpContentPasteOffIcon;

export const SharpContentPasteSearchIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5 5h2v3h10V5h2v5h2V3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h7v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1z"/><path fill={color || 'currentColor'} d="M20.3 18.9c.4-.7.7-1.5.7-2.4c0-2.5-2-4.5-4.5-4.5S12 14 12 16.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l2.7 2.7l1.4-1.4l-2.7-2.7zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5z"/>
  </svg>
);
SharpContentPasteSearchIcon.displayName = 'SharpContentPasteSearchIcon';
export const ContentPasteSearchSharpIcon = SharpContentPasteSearchIcon;

export const SharpCopyAllIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 2H7v16h13V2zm-2 14H9V4h9v12zM3 15v-2h2v2H3zm0-5.5h2v2H3v-2zM10 20h2v2h-2v-2zm-7-1.5v-2h2v2H3zM5 22H3v-2h2v2zm3.5 0h-2v-2h2v2zm7 0h-2v-2h2v2zM3 6h2v2H3V6z"/>
  </svg>
);
SharpCopyAllIcon.displayName = 'SharpCopyAllIcon';
export const CopyAllSharpIcon = SharpCopyAllIcon;

export const SharpCreateIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM21.41 6.34l-3.75-3.75l-2.53 2.54l3.75 3.75l2.53-2.54z"/>
  </svg>
);
SharpCreateIcon.displayName = 'SharpCreateIcon';
export const CreateSharpIcon = SharpCreateIcon;

export const SharpDeleteSweepIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15 16h4v2h-4v-2zm0-8h7v2h-7V8zm0 4h6v2h-6v-2zM3 20h10V8H3v12zM14 5h-3l-1-1H6L5 5H2v2h12V5z"/>
  </svg>
);
SharpDeleteSweepIcon.displayName = 'SharpDeleteSweepIcon';
export const DeleteSweepSharpIcon = SharpDeleteSweepIcon;

export const SharpDeselectIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 13h2v-2H3v2zm4 8h2v-2H7v2zm6-18h-2v2h2V3zm6 0v2h2V3h-2zM5 21v-2H3v2h2zm-2-4h2v-2H3v2zm8 4h2v-2h-2v2zm8-8h2v-2h-2v2zm0-4h2V7h-2v2zm-4-4h2V3h-2v2zM7.83 5L7 4.17V3h2v2H7.83zm12 12l-.83-.83V15h2v2h-1.17zm1.36 4.19L2.81 2.81L1.39 4.22L4.17 7H3v2h2V7.83l2 2V17h7.17l2 2H15v2h2v-1.17l2.78 2.78l1.41-1.42zM9 15v-3.17L12.17 15H9zm6-2.83V9h-3.17l-2-2H17v7.17l-2-2z"/>
  </svg>
);
SharpDeselectIcon.displayName = 'SharpDeselectIcon';
export const DeselectSharpIcon = SharpDeselectIcon;

export const SharpDraftsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.99 6.86L12 1L2 6.86V20h20l-.01-13.14zM12 13L3.74 7.84L12 3l8.26 4.84L12 13z"/>
  </svg>
);
SharpDraftsIcon.displayName = 'SharpDraftsIcon';
export const DraftsSharpIcon = SharpDraftsIcon;

export const SharpDynamicFeedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8 8H6v9h11v-2H8z"/><path fill={color || 'currentColor'} d="M22 3H10v10h12V3zm-2 8h-8V7h8v4zM4 12H2v9h11v-2H4z"/>
  </svg>
);
SharpDynamicFeedIcon.displayName = 'SharpDynamicFeedIcon';
export const DynamicFeedSharpIcon = SharpDynamicFeedIcon;

export const SharpFileCopyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 1H2v16h2V3h12V1zm-1 4l6 6v12H6V5h9zm-1 7h5.5L14 6.5V12z"/>
  </svg>
);
SharpFileCopyIcon.displayName = 'SharpFileCopyIcon';
export const FileCopySharpIcon = SharpFileCopyIcon;

export const SharpFilterListIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
  </svg>
);
SharpFilterListIcon.displayName = 'SharpFilterListIcon';
export const FilterListSharpIcon = SharpFilterListIcon;

export const SharpFilterListOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10.83 8H21V6H8.83l2 2zm5 5H18v-2h-4.17l2 2zM14 16.83V18h-4v-2h3.17l-3-3H6v-2h2.17l-3-3H3V6h.17L1.39 4.22L2.8 2.81l18.38 18.38l-1.41 1.41L14 16.83z"/>
  </svg>
);
SharpFilterListOffIcon.displayName = 'SharpFilterListOffIcon';
export const FilterListOffSharpIcon = SharpFilterListOffIcon;

export const SharpFlagIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z"/>
  </svg>
);
SharpFlagIcon.displayName = 'SharpFlagIcon';
export const FlagSharpIcon = SharpFlagIcon;

export const SharpFlagCircleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm6 13h-5l-1-2H9.5v5H8V7h6l1 2h3v6z"/>
  </svg>
);
SharpFlagCircleIcon.displayName = 'SharpFlagCircleIcon';
export const FlagCircleSharpIcon = SharpFlagCircleIcon;

export const SharpFontDownloadIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9.93 13.5h4.14L12 7.98L9.93 13.5zM22 2H2v20h20V2zm-6.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"/>
  </svg>
);
SharpFontDownloadIcon.displayName = 'SharpFontDownloadIcon';
export const FontDownloadSharpIcon = SharpFontDownloadIcon;

export const SharpFontDownloadOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12.58 9.75l-.87-.87l.23-.66h.1l.54 1.53zm7.91 13.56L19.17 22H2V4.83L.69 3.51L2.1 2.1l19.8 19.8l-1.41 1.41zm-8.39-8.38l-3.3-3.3L6.41 18h2.08l1.09-3.07h2.52zm-1.75-7.41L10.92 6h2.14l2.55 6.79L22 19.17V2H4.83l5.52 5.52z"/>
  </svg>
);
SharpFontDownloadOffIcon.displayName = 'SharpFontDownloadOffIcon';
export const FontDownloadOffSharpIcon = SharpFontDownloadOffIcon;

export const SharpForwardIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 8V4l8 8l-8 8v-4H4V8h8z"/>
  </svg>
);
SharpForwardIcon.displayName = 'SharpForwardIcon';
export const ForwardSharpIcon = SharpForwardIcon;

export const SharpGestureIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22c.5.2 0 1.03-.3 1.52c-.25.42-2.86 3.89-2.86 6.31c0 1.28.48 2.34 1.34 2.98c.75.56 1.74.73 2.64.46c1.07-.31 1.95-1.4 3.06-2.77c1.21-1.49 2.83-3.44 4.08-3.44c1.63 0 1.65 1.01 1.76 1.79c-3.78.64-5.38 3.67-5.38 5.37c0 1.7 1.44 3.09 3.21 3.09c1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2c-2.25 0-4.18 1.91-4.94 2.84c-.58.73-2.06 2.48-2.29 2.72c-.25.3-.68.84-1.11.84c-.45 0-.72-.83-.36-1.92c.35-1.09 1.4-2.86 1.85-3.52c.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3C5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72c0-.6.73-2.2 2.87-2.76c-.3 2.69-1.43 3.48-2.13 3.48z"/>
  </svg>
);
SharpGestureIcon.displayName = 'SharpGestureIcon';
export const GestureSharpIcon = SharpGestureIcon;

export const SharpHowToRegIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9 17l3-2.94a9.34 9.34 0 0 0-1-.06c-2.67 0-8 1.34-8 4v2h9l-3-3zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m4.47 8.5L12 17l1.4-1.41l2.07 2.08l5.13-5.17l1.4 1.41l-6.53 6.59z"/>
  </svg>
);
SharpHowToRegIcon.displayName = 'SharpHowToRegIcon';
export const HowToRegSharpIcon = SharpHowToRegIcon;

export const SharpHowToVoteIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 13h-.68l-2 2h1.91L19 17H5l1.78-2h2.05l-2-2H6l-3 3v6h18v-6zm1.81-5.04L13.45 1.6L5.68 9.36l6.36 6.36l7.77-7.76zm-6.35-3.55L17 7.95l-4.95 4.95l-3.54-3.54l4.95-4.95z"/>
  </svg>
);
SharpHowToVoteIcon.displayName = 'SharpHowToVoteIcon';
export const HowToVoteSharpIcon = SharpHowToVoteIcon;

export const SharpInboxIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 3H3.01v18H21V3zm-2 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H5V5h14v10z"/>
  </svg>
);
SharpInboxIcon.displayName = 'SharpInboxIcon';
export const InboxSharpIcon = SharpInboxIcon;

export const SharpInsightsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 8c-1.45 0-2.26 1.44-1.93 2.51l-3.55 3.56c-.3-.09-.74-.09-1.04 0l-2.55-2.55C12.27 10.45 11.46 9 10 9c-1.45 0-2.27 1.44-1.93 2.52l-4.56 4.55C2.44 15.74 1 16.55 1 18c0 1.1.9 2 2 2c1.45 0 2.26-1.44 1.93-2.51l4.55-4.56c.3.09.74.09 1.04 0l2.55 2.55C12.73 16.55 13.54 18 15 18c1.45 0 2.27-1.44 1.93-2.52l3.56-3.55c1.07.33 2.51-.48 2.51-1.93c0-1.1-.9-2-2-2z"/><path fill={color || 'currentColor'} d="M15 9l.94-2.07L18 6l-2.06-.93L15 3l-.92 2.07L12 6l2.08.93zM3.5 11L4 9l2-.5L4 8l-.5-2L3 8l-2 .5L3 9z"/>
  </svg>
);
SharpInsightsIcon.displayName = 'SharpInsightsIcon';
export const InsightsSharpIcon = SharpInsightsIcon;

export const SharpInventoryIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5 5h2v3h10V5h2v5h2V3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h8v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1z"/><path fill={color || 'currentColor'} d="M21 11.5L15.51 17l-3.01-3l-1.5 1.5l4.51 4.5l6.99-7z"/>
  </svg>
);
SharpInventoryIcon.displayName = 'SharpInventoryIcon';
export const InventorySharpIcon = SharpInventoryIcon;

export const SharpInventory2Icon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2 2v6.7h1V22h18V8.7h1V2H2zm13 12H9v-2h6v2zm5-7H4V4h16v3z"/>
  </svg>
);
SharpInventory2Icon.displayName = 'SharpInventory2Icon';
export const Inventory2SharpIcon = SharpInventory2Icon;

export const SharpLinkIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8zm9-4h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z"/>
  </svg>
);
SharpLinkIcon.displayName = 'SharpLinkIcon';
export const LinkSharpIcon = SharpLinkIcon;

export const SharpLinkOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.39 11L16 12.61V11zM17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1c0 1.27-.77 2.37-1.87 2.84l1.4 1.4A4.986 4.986 0 0 0 22 12c0-2.76-2.24-5-5-5zM2 4.27l3.11 3.11A4.991 4.991 0 0 0 2 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1c0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4.01l1.41-1.41L3.41 2.86L2 4.27z"/>
  </svg>
);
SharpLinkOffIcon.displayName = 'SharpLinkOffIcon';
export const LinkOffSharpIcon = SharpLinkOffIcon;

export const SharpLowPriorityIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14 5h8v2h-8V5zm0 5.5h8v2h-8v-2zm0 5.5h8v2h-8v-2zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3l-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"/>
  </svg>
);
SharpLowPriorityIcon.displayName = 'SharpLowPriorityIcon';
export const LowPrioritySharpIcon = SharpLowPriorityIcon;

export const SharpMailIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 4H2v16h20V4zm-2 4l-8 5l-8-5V6l8 5l8-5v2z"/>
  </svg>
);
SharpMailIcon.displayName = 'SharpMailIcon';
export const MailSharpIcon = SharpMailIcon;

export const SharpMarkunreadIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 4H2v16h20V4zm-2 4l-8 5l-8-5V6l8 5l8-5v2z"/>
  </svg>
);
SharpMarkunreadIcon.displayName = 'SharpMarkunreadIcon';
export const MarkunreadSharpIcon = SharpMarkunreadIcon;

export const SharpMoveToInboxIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 3H3v18h18V3zm-2 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4l4-4z"/>
  </svg>
);
SharpMoveToInboxIcon.displayName = 'SharpMoveToInboxIcon';
export const MoveToInboxSharpIcon = SharpMoveToInboxIcon;

export const SharpNextWeekIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 7h-6V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H2v15h20V7zM10 5h4v2h-4V5zm1 13.5l-1-1l3-3l-3-3l1-1l4 4l-4 4z"/>
  </svg>
);
SharpNextWeekIcon.displayName = 'SharpNextWeekIcon';
export const NextWeekSharpIcon = SharpNextWeekIcon;

export const SharpOutlinedFlagIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14 6l-1-2H5v17h2v-7h5l1 2h7V6h-6zm4 8h-4l-1-2H7V6h5l1 2h5v6z"/>
  </svg>
);
SharpOutlinedFlagIcon.displayName = 'SharpOutlinedFlagIcon';
export const OutlinedFlagSharpIcon = SharpOutlinedFlagIcon;

export const SharpPinOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9 9l7 7h-3v4l-1 3l-1-3v-4H6v-3l3-3V9zm8-7v2l-2 1v5l3 3v2.461L12.27 9.73L9 6.46V5L7 4V2h10z"/><path fill={color || 'currentColor'} d="M2.27 2.27L1 3.54L20.46 23l1.27-1.27L11 11z"/>
  </svg>
);
SharpPinOffIcon.displayName = 'SharpPinOffIcon';
export const PinOffSharpIcon = SharpPinOffIcon;

export const SharpPolicyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 5l-9-4l-9 4v6c0 5.55 3.84 10.74 9 12c2.3-.56 4.33-1.9 5.88-3.71l-3.12-3.12a4.994 4.994 0 0 1-6.29-.64a5.003 5.003 0 0 1 0-7.07a5.003 5.003 0 0 1 7.07 0a5.006 5.006 0 0 1 .64 6.29l2.9 2.9C20.29 15.69 21 13.38 21 11V5z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);
SharpPolicyIcon.displayName = 'SharpPolicyIcon';
export const PolicySharpIcon = SharpPolicyIcon;

export const SharpPushPinIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 9V4h2V2H6v2h2v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1l1-1v-7H19v-2c-1.66 0-3-1.34-3-3z" fillRule="evenodd"/>
  </svg>
);
SharpPushPinIcon.displayName = 'SharpPushPinIcon';
export const PushPinSharpIcon = SharpPushPinIcon;

export const SharpRedoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/>
  </svg>
);
SharpRedoIcon.displayName = 'SharpRedoIcon';
export const RedoSharpIcon = SharpRedoIcon;

export const SharpRemoveIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 13H5v-2h14v2z"/>
  </svg>
);
SharpRemoveIcon.displayName = 'SharpRemoveIcon';
export const RemoveSharpIcon = SharpRemoveIcon;

export const SharpRemoveCircleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/>
  </svg>
);
SharpRemoveCircleIcon.displayName = 'SharpRemoveCircleIcon';
export const RemoveCircleSharpIcon = SharpRemoveCircleIcon;

export const SharpRemoveCircleOutlineIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/>
  </svg>
);
SharpRemoveCircleOutlineIcon.displayName = 'SharpRemoveCircleOutlineIcon';
export const RemoveCircleOutlineSharpIcon = SharpRemoveCircleOutlineIcon;

export const SharpReplyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10 9V5l-7 7l7 7v-4.1c5 0 8.5 1.6 11 5.1c-1-5-4-10-11-11z"/>
  </svg>
);
SharpReplyIcon.displayName = 'SharpReplyIcon';
export const ReplySharpIcon = SharpReplyIcon;

export const SharpReplyAllIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 8V5l-7 7l7 7v-3l-4-4l4-4zm6 1V5l-7 7l7 7v-4.1c5 0 8.5 1.6 11 5.1c-1-5-4-10-11-11z"/>
  </svg>
);
SharpReplyAllIcon.displayName = 'SharpReplyAllIcon';
export const ReplyAllSharpIcon = SharpReplyAllIcon;

export const SharpReportIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3s.58-1.3 1.3-1.3s1.3.58 1.3 1.3s-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"/>
  </svg>
);
SharpReportIcon.displayName = 'SharpReportIcon';
export const ReportSharpIcon = SharpReportIcon;

export const SharpReportGmailerrorredIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z"/><circle cx="12" cy="16" r="1"/><path fill={color || 'currentColor'} d="M11 7h2v7h-2z"/>
  </svg>
);
SharpReportGmailerrorredIcon.displayName = 'SharpReportGmailerrorredIcon';
export const ReportGmailerrorredSharpIcon = SharpReportGmailerrorredIcon;

export const SharpReportOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 7h2v2.33l7.2 7.2l.8-.8V8.27L15.73 3H8.27l-.8.8L11 7.33zM2.41 1.58L1 2.99l3.64 3.64L3 8.27v7.46L8.27 21h7.46l1.64-1.64L21.01 23l1.41-1.41L2.41 1.58zM11 12.99l.01.01H11v-.01zm1 4.31c-.72 0-1.3-.58-1.3-1.3c0-.72.58-1.3 1.3-1.3s1.3.58 1.3 1.3c0 .72-.58 1.3-1.3 1.3z"/>
  </svg>
);
SharpReportOffIcon.displayName = 'SharpReportOffIcon';
export const ReportOffSharpIcon = SharpReportOffIcon;

export const SharpSaveIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 3H3v18h18V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3zm3-10H5V5h10v4z"/>
  </svg>
);
SharpSaveIcon.displayName = 'SharpSaveIcon';
export const SaveSharpIcon = SharpSaveIcon;

export const SharpSaveAllIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillRule="evenodd" clipRule="evenodd" d="M6 6h11l4 4v11H6V6zm2 2h7v3H8V8zm5.5 11a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5z"/><path fill={color || 'currentColor'} d="M2 2h12v2H4v10H2V2z"/>
  </svg>
);
SharpSaveAllIcon.displayName = 'SharpSaveAllIcon';
export const SaveAllSharpIcon = SharpSaveAllIcon;

export const SharpSaveAltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 12v7H5v-7H3v9h18v-9h-2zm-6 .67l2.59-2.58L17 11.5l-5 5l-5-5l1.41-1.41L11 12.67V3h2v9.67z"/>
  </svg>
);
SharpSaveAltIcon.displayName = 'SharpSaveAltIcon';
export const SaveAltSharpIcon = SharpSaveAltIcon;

export const SharpSaveAsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 12.4V7l-4-4H3v18h9.4l8.6-8.6zM15 15c0 1.66-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3zM6 6h9v4H6V6zm13.99 10.25l1.77 1.77L16.77 23H15v-1.77l4.99-4.98zm3.62-.09l-1.2 1.2l-1.77-1.77l1.2-1.2l1.77 1.77z"/>
  </svg>
);
SharpSaveAsIcon.displayName = 'SharpSaveAsIcon';
export const SaveAsSharpIcon = SharpSaveAsIcon;

export const SharpSelectAllIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 13h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zM3 17h2v-2H3v2zM9 3H7v2h2V3zM5 3H3v2h2V3zm6 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0-4h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zm4 0h2V3h-2v2zm0 16h2v-2h-2v2zM3 21h2v-2H3v2zm4-4h10V7H7v10zm2-8h6v6H9V9z"/>
  </svg>
);
SharpSelectAllIcon.displayName = 'SharpSelectAllIcon';
export const SelectAllSharpIcon = SharpSelectAllIcon;

export const SharpSendIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2l.01 7z"/>
  </svg>
);
SharpSendIcon.displayName = 'SharpSendIcon';
export const SendSharpIcon = SharpSendIcon;

export const SharpShieldIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91c4.59-1.15 8-5.86 8-10.91V5l-8-3z"/>
  </svg>
);
SharpShieldIcon.displayName = 'SharpShieldIcon';
export const ShieldSharpIcon = SharpShieldIcon;

export const SharpSortIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/>
  </svg>
);
SharpSortIcon.displayName = 'SharpSortIcon';
export const SortSharpIcon = SharpSortIcon;

export const SharpSquareFootIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.66 17.66l-1.06 1.06l-.71-.71l1.06-1.06l-1.94-1.94l-1.06 1.06l-.71-.71l1.06-1.06l-1.94-1.94l-1.06 1.06l-.71-.71l1.06-1.06L9.7 9.7l-1.06 1.06l-.71-.71l1.06-1.06l-1.94-1.94l-1.06 1.06l-.71-.71l1.06-1.06L4 4v16h16l-2.34-2.34zM7 17v-5.76L12.76 17H7z"/>
  </svg>
);
SharpSquareFootIcon.displayName = 'SharpSquareFootIcon';
export const SquareFootSharpIcon = SharpSquareFootIcon;

export const SharpStackedBarChartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 9h4v11H4zm0-5h4v4H4zm6 3h4v4h-4zm6 3h4v4h-4zm0 5h4v5h-4zm-6-3h4v8h-4z"/>
  </svg>
);
SharpStackedBarChartIcon.displayName = 'SharpStackedBarChartIcon';
export const StackedBarChartSharpIcon = SharpStackedBarChartIcon;

export const SharpStreamIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="20" cy="12" r="2"/><circle cx="4" cy="12" r="2"/><circle cx="12" cy="20" r="2"/><path fill={color || 'currentColor'} d="M13.943 8.619l4.404-4.392l1.413 1.416l-4.405 4.392zM8.32 9.68l.31.32l1.42-1.41l-4.02-4.04h-.01l-.31-.32l-1.42 1.41l4.02 4.05zm7.09 4.26L14 15.35l3.99 4.01l.35.35l1.42-1.41l-3.99-4.01zm-6.82.01l-4.03 4.01l-.32.33l1.41 1.41l4.03-4.02l.33-.32z"/><circle cx="12" cy="4" r="2"/>
  </svg>
);
SharpStreamIcon.displayName = 'SharpStreamIcon';
export const StreamSharpIcon = SharpStreamIcon;

export const SharpTagIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4zm-6 4h-4v-4h4v4z"/>
  </svg>
);
SharpTagIcon.displayName = 'SharpTagIcon';
export const TagSharpIcon = SharpTagIcon;

export const SharpTextFormatIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"/>
  </svg>
);
SharpTextFormatIcon.displayName = 'SharpTextFormatIcon';
export const TextFormatSharpIcon = SharpTextFormatIcon;

export const SharpUnarchiveIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.71 3H5.29L3 5.79V21h18V5.79L18.71 3zM14 15v2h-4v-2H6.5L12 9.5l5.5 5.5H14zM5.12 5l.81-1h12l.94 1H5.12z"/>
  </svg>
);
SharpUnarchiveIcon.displayName = 'SharpUnarchiveIcon';
export const UnarchiveSharpIcon = SharpUnarchiveIcon;

export const SharpUndoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/>
  </svg>
);
SharpUndoIcon.displayName = 'SharpUndoIcon';
export const UndoSharpIcon = SharpUndoIcon;

export const SharpUpcomingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.16 7.26l-1.41-1.41l-3.56 3.55l1.41 1.41s3.45-3.52 3.56-3.55zM11 3h2v5h-2zm-4.6 7.81L7.81 9.4L4.26 5.84L2.84 7.26c.11.03 3.56 3.55 3.56 3.55zM22 12h-7c0 1.66-1.34 3-3 3s-3-1.34-3-3H2v9h20v-9z"/>
  </svg>
);
SharpUpcomingIcon.displayName = 'SharpUpcomingIcon';
export const UpcomingSharpIcon = SharpUpcomingIcon;

export const SharpWavesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 16.99c-1.35 0-2.2.42-2.95.8c-.65.33-1.18.6-2.05.6c-.9 0-1.4-.25-2.05-.6c-.75-.38-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.95c1.35 0 2.2-.42 2.95-.8c.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.42 2.95-.8c.65-.33 1.18-.6 2.05-.6c.9 0 1.4.25 2.05.6c.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6c-.75-.38-1.6-.8-2.95-.8zm0-4.45c-1.35 0-2.2.43-2.95.8c-.65.32-1.18.6-2.05.6c-.9 0-1.4-.25-2.05-.6c-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.32-1.17.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8c.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6c-.75-.38-1.6-.8-2.95-.8zm2.95-8.08c-.75-.38-1.58-.8-2.95-.8s-2.2.42-2.95.8c-.65.32-1.18.6-2.05.6c-.9 0-1.4-.25-2.05-.6c-.75-.37-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.93c1.35 0 2.2-.43 2.95-.8c.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6c.9 0 1.4.25 2.05.6c.75.38 1.58.8 2.95.8V5.04c-.9 0-1.4-.25-2.05-.58zM17 8.09c-1.35 0-2.2.43-2.95.8c-.65.35-1.15.6-2.05.6s-1.4-.25-2.05-.6c-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.35-1.15.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6c.9 0 1.4.25 2.05.6c.75.38 1.58.8 2.95.8V9.49c-.9 0-1.4-.25-2.05-.6c-.75-.38-1.6-.8-2.95-.8z"/>
  </svg>
);
SharpWavesIcon.displayName = 'SharpWavesIcon';
export const WavesSharpIcon = SharpWavesIcon;

export const SharpWebStoriesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 4h2v16h-2V4zM2 2v20h13V2H2zm19 16h1.5V6H21v12z"/>
  </svg>
);
SharpWebStoriesIcon.displayName = 'SharpWebStoriesIcon';
export const WebStoriesSharpIcon = SharpWebStoriesIcon;

export const SharpWeekendIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6 9.03V14h12V9.03h2V5H4v4.03zM19 15H5v-4.97H1V19h22v-8.97h-4z"/>
  </svg>
);
SharpWeekendIcon.displayName = 'SharpWeekendIcon';
export const WeekendSharpIcon = SharpWeekendIcon;

export const SharpWhereToVoteIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm-1.53 12l-3.48-3.48L8.4 9.1l2.07 2.07l5.13-5.14l1.41 1.42L10.47 14z"/>
  </svg>
);
SharpWhereToVoteIcon.displayName = 'SharpWhereToVoteIcon';
export const WhereToVoteSharpIcon = SharpWhereToVoteIcon;

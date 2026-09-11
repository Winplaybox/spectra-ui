import React from 'react';
import { IconProps } from '../../types';

export const OutlinedAddChartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 19H5V5h9V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9z"/><path fill={color || 'currentColor'} d="M15 13h2v4h-2zm-8-3h2v7H7zm4-3h2v10h-2zm8-2V3h-2v2h-2v2h2v2h2V7h2V5z"/>
  </svg>
);
OutlinedAddChartIcon.displayName = 'OutlinedAddChartIcon';
export const AddChartOutlinedIcon = OutlinedAddChartIcon;

export const OutlinedAddCommentIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4zm-2 13.17L18.83 16H4V4h16v13.17zM13 5h-2v4H7v2h4v4h2v-4h4V9h-4z"/>
  </svg>
);
OutlinedAddCommentIcon.displayName = 'OutlinedAddCommentIcon';
export const AddCommentOutlinedIcon = OutlinedAddCommentIcon;

export const OutlinedAlignHorizontalCenterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 2h2v5h8v3h-8v4h5v3h-5v5h-2v-5H6v-3h5v-4H3V7h8z"/>
  </svg>
);
OutlinedAlignHorizontalCenterIcon.displayName = 'OutlinedAlignHorizontalCenterIcon';
export const AlignHorizontalCenterOutlinedIcon = OutlinedAlignHorizontalCenterIcon;

export const OutlinedAlignHorizontalLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 22H2V2h2v20zM22 7H6v3h16V7zm-6 7H6v3h10v-3z"/>
  </svg>
);
OutlinedAlignHorizontalLeftIcon.displayName = 'OutlinedAlignHorizontalLeftIcon';
export const AlignHorizontalLeftOutlinedIcon = OutlinedAlignHorizontalLeftIcon;

export const OutlinedAlignHorizontalRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 2h2v20h-2V2zM2 10h16V7H2v3zm6 7h10v-3H8v3z"/>
  </svg>
);
OutlinedAlignHorizontalRightIcon.displayName = 'OutlinedAlignHorizontalRightIcon';
export const AlignHorizontalRightOutlinedIcon = OutlinedAlignHorizontalRightIcon;

export const OutlinedAlignVerticalBottomIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 22H2v-2h20v2zM10 2H7v16h3V2zm7 6h-3v10h3V8z"/>
  </svg>
);
OutlinedAlignVerticalBottomIcon.displayName = 'OutlinedAlignVerticalBottomIcon';
export const AlignVerticalBottomOutlinedIcon = OutlinedAlignVerticalBottomIcon;

export const OutlinedAlignVerticalCenterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 11h-5V6h-3v5h-4V3H7v8H1.84v2H7v8h3v-8h4v5h3v-5h5z"/>
  </svg>
);
OutlinedAlignVerticalCenterIcon.displayName = 'OutlinedAlignVerticalCenterIcon';
export const AlignVerticalCenterOutlinedIcon = OutlinedAlignVerticalCenterIcon;

export const OutlinedAlignVerticalTopIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 2v2H2V2h20zM7 22h3V6H7v16zm7-6h3V6h-3v10z"/>
  </svg>
);
OutlinedAlignVerticalTopIcon.displayName = 'OutlinedAlignVerticalTopIcon';
export const AlignVerticalTopOutlinedIcon = OutlinedAlignVerticalTopIcon;

export const OutlinedAreaChartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 7l-5-4l-5 7l-4-3v13h18V7h-4zm2 9.95l-7-5.45L8 17l-3-2.4V11l2.44 1.83l4.96-6.95L16.3 9H19v7.95z"/>
  </svg>
);
OutlinedAreaChartIcon.displayName = 'OutlinedAreaChartIcon';
export const AreaChartOutlinedIcon = OutlinedAreaChartIcon;

export const OutlinedAttachFileIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5a2.5 2.5 0 0 1 5 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5a2.5 2.5 0 0 0 5 0V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"/>
  </svg>
);
OutlinedAttachFileIcon.displayName = 'OutlinedAttachFileIcon';
export const AttachFileOutlinedIcon = OutlinedAttachFileIcon;

export const OutlinedAttachMoneyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15c0-1.09 1.01-1.85 2.7-1.85c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61c0 2.31 1.91 3.46 4.7 4.13c2.5.6 3 1.48 3 2.41c0 .69-.49 1.79-2.7 1.79c-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55c0-2.84-2.43-3.81-4.7-4.4z"/>
  </svg>
);
OutlinedAttachMoneyIcon.displayName = 'OutlinedAttachMoneyIcon';
export const AttachMoneyOutlinedIcon = OutlinedAttachMoneyIcon;

export const OutlinedAutoGraphIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.06 9.94L12 9l2.06-.94L15 6l.94 2.06L18 9l-2.06.94L15 12l-.94-2.06zM4 14l.94-2.06L7 11l-2.06-.94L4 8l-.94 2.06L1 11l2.06.94L4 14zm4.5-5l1.09-2.41L12 5.5L9.59 4.41L8.5 2L7.41 4.41L5 5.5l2.41 1.09L8.5 9zm-4 11.5l6-6.01l4 4L23 8.93l-1.41-1.41l-7.09 7.97l-4-4L3 19l1.5 1.5z"/>
  </svg>
);
OutlinedAutoGraphIcon.displayName = 'OutlinedAutoGraphIcon';
export const AutoGraphOutlinedIcon = OutlinedAutoGraphIcon;

export const OutlinedBarChartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 9h4v11H4zm12 4h4v7h-4zm-6-9h4v16h-4z"/>
  </svg>
);
OutlinedBarChartIcon.displayName = 'OutlinedBarChartIcon';
export const BarChartOutlinedIcon = OutlinedBarChartIcon;

export const OutlinedBorderAllIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 3v18h18V3H3zm8 16H5v-6h6v6zm0-8H5V5h6v6zm8 8h-6v-6h6v6zm0-8h-6V5h6v6z"/>
  </svg>
);
OutlinedBorderAllIcon.displayName = 'OutlinedBorderAllIcon';
export const BorderAllOutlinedIcon = OutlinedBorderAllIcon;

export const OutlinedBorderBottomIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9 11H7v2h2v-2zm4 4h-2v2h2v-2zM9 3H7v2h2V3zm4 8h-2v2h2v-2zM5 3H3v2h2V3zm8 4h-2v2h2V7zm4 4h-2v2h2v-2zm-4-8h-2v2h2V3zm4 0h-2v2h2V3zm2 10h2v-2h-2v2zm0 4h2v-2h-2v2zM5 7H3v2h2V7zm14-4v2h2V3h-2zm0 6h2V7h-2v2zM5 11H3v2h2v-2zM3 21h18v-2H3v2zm2-6H3v2h2v-2z"/>
  </svg>
);
OutlinedBorderBottomIcon.displayName = 'OutlinedBorderBottomIcon';
export const BorderBottomOutlinedIcon = OutlinedBorderBottomIcon;

export const OutlinedBorderClearIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 5h2V3H7v2zm0 8h2v-2H7v2zm0 8h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm-8 0h2v-2H3v2zm0-4h2v-2H3v2zm0-4h2v-2H3v2zm0-4h2V7H3v2zm0-4h2V3H3v2zm8 8h2v-2h-2v2zm8 4h2v-2h-2v2zm0-4h2v-2h-2v2zm0 8h2v-2h-2v2zm0-12h2V7h-2v2zm-8 0h2V7h-2v2zm8-6v2h2V3h-2zm-8 2h2V3h-2v2zm4 16h2v-2h-2v2zm0-8h2v-2h-2v2zm0-8h2V3h-2v2z"/>
  </svg>
);
OutlinedBorderClearIcon.displayName = 'OutlinedBorderClearIcon';
export const BorderClearOutlinedIcon = OutlinedBorderClearIcon;

export const OutlinedBorderColorIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16.81 8.94l-3.75-3.75L4 14.25V18h3.75l9.06-9.06zM6 16v-.92l7.06-7.06l.92.92L6.92 16H6zm13.71-9.96a.996.996 0 0 0 0-1.41l-2.34-2.34a1.001 1.001 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83zM2 20h20v4H2z"/>
  </svg>
);
OutlinedBorderColorIcon.displayName = 'OutlinedBorderColorIcon';
export const BorderColorOutlinedIcon = OutlinedBorderColorIcon;

export const OutlinedBorderHorizontalIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 21h2v-2H3v2zM5 7H3v2h2V7zM3 17h2v-2H3v2zm4 4h2v-2H7v2zM5 3H3v2h2V3zm4 0H7v2h2V3zm8 0h-2v2h2V3zm-4 4h-2v2h2V7zm0-4h-2v2h2V3zm6 14h2v-2h-2v2zm-8 4h2v-2h-2v2zm-8-8h18v-2H3v2zM19 3v2h2V3h-2zm0 6h2V7h-2v2zm-8 8h2v-2h-2v2zm4 4h2v-2h-2v2zm4 0h2v-2h-2v2z"/>
  </svg>
);
OutlinedBorderHorizontalIcon.displayName = 'OutlinedBorderHorizontalIcon';
export const BorderHorizontalOutlinedIcon = OutlinedBorderHorizontalIcon;

export const OutlinedBorderInnerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 21h2v-2H3v2zm4 0h2v-2H7v2zM5 7H3v2h2V7zM3 17h2v-2H3v2zM9 3H7v2h2V3zM5 3H3v2h2V3zm12 0h-2v2h2V3zm2 6h2V7h-2v2zm0-6v2h2V3h-2zm-4 18h2v-2h-2v2zM13 3h-2v8H3v2h8v8h2v-8h8v-2h-8V3zm6 18h2v-2h-2v2zm0-4h2v-2h-2v2z"/>
  </svg>
);
OutlinedBorderInnerIcon.displayName = 'OutlinedBorderInnerIcon';
export const BorderInnerOutlinedIcon = OutlinedBorderInnerIcon;

export const OutlinedBorderLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 21h2v-2h-2v2zm0-4h2v-2h-2v2zm0-12h2V3h-2v2zm0 4h2V7h-2v2zm0 4h2v-2h-2v2zm-4 8h2v-2H7v2zM7 5h2V3H7v2zm0 8h2v-2H7v2zm-4 8h2V3H3v18zM19 9h2V7h-2v2zm-4 12h2v-2h-2v2zm4-4h2v-2h-2v2zm0-14v2h2V3h-2zm0 10h2v-2h-2v2zm0 8h2v-2h-2v2zm-4-8h2v-2h-2v2zm0-8h2V3h-2v2z"/>
  </svg>
);
OutlinedBorderLeftIcon.displayName = 'OutlinedBorderLeftIcon';
export const BorderLeftOutlinedIcon = OutlinedBorderLeftIcon;

export const OutlinedBorderOuterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13 7h-2v2h2V7zm0 4h-2v2h2v-2zm4 0h-2v2h2v-2zM3 3v18h18V3H3zm16 16H5V5h14v14zm-6-4h-2v2h2v-2zm-4-4H7v2h2v-2z"/>
  </svg>
);
OutlinedBorderOuterIcon.displayName = 'OutlinedBorderOuterIcon';
export const BorderOuterOutlinedIcon = OutlinedBorderOuterIcon;

export const OutlinedBorderRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 21h2v-2H7v2zM3 5h2V3H3v2zm4 0h2V3H7v2zm0 8h2v-2H7v2zm-4 8h2v-2H3v2zm8 0h2v-2h-2v2zm-8-8h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm8 8h2v-2h-2v2zm4-4h2v-2h-2v2zm4-10v18h2V3h-2zm-4 18h2v-2h-2v2zm0-16h2V3h-2v2zm-4 8h2v-2h-2v2zm0-8h2V3h-2v2zm0 4h2V7h-2v2z"/>
  </svg>
);
OutlinedBorderRightIcon.displayName = 'OutlinedBorderRightIcon';
export const BorderRightOutlinedIcon = OutlinedBorderRightIcon;

export const OutlinedBorderStyleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15 21h2v-2h-2v2zm4 0h2v-2h-2v2zM7 21h2v-2H7v2zm4 0h2v-2h-2v2zm8-4h2v-2h-2v2zm0-4h2v-2h-2v2zM3 3v18h2V5h16V3H3zm16 6h2V7h-2v2z"/>
  </svg>
);
OutlinedBorderStyleIcon.displayName = 'OutlinedBorderStyleIcon';
export const BorderStyleOutlinedIcon = OutlinedBorderStyleIcon;

export const OutlinedBorderTopIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 21h2v-2H7v2zm0-8h2v-2H7v2zm4 0h2v-2h-2v2zm0 8h2v-2h-2v2zm-8-4h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2v-2H3v2zm0-4h2V7H3v2zm8 8h2v-2h-2v2zm8-8h2V7h-2v2zm0 4h2v-2h-2v2zM3 3v2h18V3H3zm16 14h2v-2h-2v2zm-4 4h2v-2h-2v2zM11 9h2V7h-2v2zm8 12h2v-2h-2v2zm-4-8h2v-2h-2v2z"/>
  </svg>
);
OutlinedBorderTopIcon.displayName = 'OutlinedBorderTopIcon';
export const BorderTopOutlinedIcon = OutlinedBorderTopIcon;

export const OutlinedBorderVerticalIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 9h2V7H3v2zm0-4h2V3H3v2zm4 16h2v-2H7v2zm0-8h2v-2H7v2zm-4 0h2v-2H3v2zm0 8h2v-2H3v2zm0-4h2v-2H3v2zM7 5h2V3H7v2zm12 12h2v-2h-2v2zm-8 4h2V3h-2v18zm8 0h2v-2h-2v2zm0-8h2v-2h-2v2zm0-10v2h2V3h-2zm0 6h2V7h-2v2zm-4-4h2V3h-2v2zm0 16h2v-2h-2v2zm0-8h2v-2h-2v2z"/>
  </svg>
);
OutlinedBorderVerticalIcon.displayName = 'OutlinedBorderVerticalIcon';
export const BorderVerticalOutlinedIcon = OutlinedBorderVerticalIcon;

export const OutlinedBubbleChartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 10c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2zm8.01-1c-1.65 0-3 1.35-3 3s1.35 3 3 3s3-1.35 3-3s-1.35-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zM16.5 3C13.47 3 11 5.47 11 8.5s2.47 5.5 5.5 5.5S22 11.53 22 8.5S19.53 3 16.5 3zm0 9c-1.93 0-3.5-1.57-3.5-3.5S14.57 5 16.5 5S20 6.57 20 8.5S18.43 12 16.5 12z"/>
  </svg>
);
OutlinedBubbleChartIcon.displayName = 'OutlinedBubbleChartIcon';
export const BubbleChartOutlinedIcon = OutlinedBubbleChartIcon;

export const OutlinedCandlestickChartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9 4H7v2H5v12h2v2h2v-2h2V6H9V4zm0 12H7V8h2v8zm10-8h-2V4h-2v4h-2v7h2v5h2v-5h2V8zm-2 5h-2v-3h2v3z"/>
  </svg>
);
OutlinedCandlestickChartIcon.displayName = 'OutlinedCandlestickChartIcon';
export const CandlestickChartOutlinedIcon = OutlinedCandlestickChartIcon;

export const OutlinedChecklistIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 7h-9v2h9V7zm0 8h-9v2h9v-2zM5.54 11L2 7.46l1.41-1.41l2.12 2.12l4.24-4.24l1.41 1.41L5.54 11zm0 8L2 15.46l1.41-1.41l2.12 2.12l4.24-4.24l1.41 1.41L5.54 19z"/>
  </svg>
);
OutlinedChecklistIcon.displayName = 'OutlinedChecklistIcon';
export const ChecklistOutlinedIcon = OutlinedChecklistIcon;

export const OutlinedChecklistRtlIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 7H2v2h9V7zm0 8H2v2h9v-2zm5.34-4L12.8 7.46l1.41-1.41l2.12 2.12l4.24-4.24L22 5.34L16.34 11zm0 8l-3.54-3.54l1.41-1.41l2.12 2.12l4.24-4.24L22 13.34L16.34 19z"/>
  </svg>
);
OutlinedChecklistRtlIcon.displayName = 'OutlinedChecklistRtlIcon';
export const ChecklistRtlOutlinedIcon = OutlinedChecklistRtlIcon;

export const OutlinedDataArrayIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15 4v2h3v12h-3v2h5V4zM4 20h5v-2H6V6h3V4H4z"/>
  </svg>
);
OutlinedDataArrayIcon.displayName = 'OutlinedDataArrayIcon';
export const DataArrayOutlinedIcon = OutlinedDataArrayIcon;

export const OutlinedDataObjectIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 7v2c0 .55-.45 1-1 1H2v4h1c.55 0 1 .45 1 1v2c0 1.65 1.35 3 3 3h3v-2H7c-.55 0-1-.45-1-1v-2c0-1.3-.84-2.42-2-2.83v-.34C5.16 11.42 6 10.3 6 9V7c0-.55.45-1 1-1h3V4H7C5.35 4 4 5.35 4 7zm17 3c-.55 0-1-.45-1-1V7c0-1.65-1.35-3-3-3h-3v2h3c.55 0 1 .45 1 1v2c0 1.3.84 2.42 2 2.83v.34c-1.16.41-2 1.52-2 2.83v2c0 .55-.45 1-1 1h-3v2h3c1.65 0 3-1.35 3-3v-2c0-.55.45-1 1-1h1v-4h-1z"/>
  </svg>
);
OutlinedDataObjectIcon.displayName = 'OutlinedDataObjectIcon';
export const DataObjectOutlinedIcon = OutlinedDataObjectIcon;

export const OutlinedDragHandleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 9H4v2h16V9zM4 15h16v-2H4v2z"/>
  </svg>
);
OutlinedDragHandleIcon.displayName = 'OutlinedDragHandleIcon';
export const DragHandleOutlinedIcon = OutlinedDragHandleIcon;

export const OutlinedDrawIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.85 10.39l1.06-1.06c.78-.78.78-2.05 0-2.83L18.5 5.09c-.78-.78-2.05-.78-2.83 0l-1.06 1.06l4.24 4.24zm-4.24 1.42L7.41 19H6v-1.41l7.19-7.19l1.42 1.41zm-1.42-4.25L4 16.76V21h4.24l9.19-9.19l-4.24-4.25zM19 17.5c0 2.19-2.54 3.5-5 3.5c-.55 0-1-.45-1-1s.45-1 1-1c1.54 0 3-.73 3-1.5c0-.47-.48-.87-1.23-1.2l1.48-1.48c1.07.63 1.75 1.47 1.75 2.68zM4.58 13.35C3.61 12.79 3 12.06 3 11c0-1.8 1.89-2.63 3.56-3.36C7.59 7.18 9 6.56 9 6c0-.41-.78-1-2-1c-1.26 0-1.8.61-1.83.64c-.35.41-.98.46-1.4.12a.992.992 0 0 1-.15-1.38C3.73 4.24 4.76 3 7 3s4 1.32 4 3c0 1.87-1.93 2.72-3.64 3.47C6.42 9.88 5 10.5 5 11c0 .31.43.6 1.07.86l-1.49 1.49z"/>
  </svg>
);
OutlinedDrawIcon.displayName = 'OutlinedDrawIcon';
export const DrawOutlinedIcon = OutlinedDrawIcon;

export const OutlinedEditNoteIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 10h11v2H3v-2zm0-2h11V6H3v2zm0 8h7v-2H3v2zm15.01-3.13l.71-.71a.996.996 0 0 1 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71l-2.12-2.12zm-.71.71l-5.3 5.3V21h2.12l5.3-5.3l-2.12-2.12z"/>
  </svg>
);
OutlinedEditNoteIcon.displayName = 'OutlinedEditNoteIcon';
export const EditNoteOutlinedIcon = OutlinedEditNoteIcon;

export const OutlinedFormatAlignCenterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"/>
  </svg>
);
OutlinedFormatAlignCenterIcon.displayName = 'OutlinedFormatAlignCenterIcon';
export const FormatAlignCenterOutlinedIcon = OutlinedFormatAlignCenterIcon;

export const OutlinedFormatAlignJustifyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"/>
  </svg>
);
OutlinedFormatAlignJustifyIcon.displayName = 'OutlinedFormatAlignJustifyIcon';
export const FormatAlignJustifyOutlinedIcon = OutlinedFormatAlignJustifyIcon;

export const OutlinedFormatAlignLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/>
  </svg>
);
OutlinedFormatAlignLeftIcon.displayName = 'OutlinedFormatAlignLeftIcon';
export const FormatAlignLeftOutlinedIcon = OutlinedFormatAlignLeftIcon;

export const OutlinedFormatAlignRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"/>
  </svg>
);
OutlinedFormatAlignRightIcon.displayName = 'OutlinedFormatAlignRightIcon';
export const FormatAlignRightOutlinedIcon = OutlinedFormatAlignRightIcon;

export const OutlinedFormatBoldIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79c0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79c0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
  </svg>
);
OutlinedFormatBoldIcon.displayName = 'OutlinedFormatBoldIcon';
export const FormatBoldOutlinedIcon = OutlinedFormatBoldIcon;

export const OutlinedFormatClearIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 8V5H6.39l3 3h1.83l-.55 1.28l2.09 2.1L14.21 8zM3.41 4.86L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21l1.41-1.41z"/>
  </svg>
);
OutlinedFormatClearIcon.displayName = 'OutlinedFormatClearIcon';
export const FormatClearOutlinedIcon = OutlinedFormatClearIcon;

export const OutlinedFormatColorFillIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16.56 8.94L7.62 0L6.21 1.41l2.38 2.38l-5.15 5.15a1.49 1.49 0 0 0 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM5.21 10L10 5.21L14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5zM2 20h20v4H2v-4z"/>
  </svg>
);
OutlinedFormatColorFillIcon.displayName = 'OutlinedFormatColorFillIcon';
export const FormatColorFillOutlinedIcon = OutlinedFormatColorFillIcon;

export const OutlinedFormatColorResetIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 6.36c1.53 2 3.08 4.43 3.71 6.24l2.23 2.23c.03-.27.06-.55.06-.83c0-3.98-6-10.8-6-10.8s-1.18 1.35-2.5 3.19l1.44 1.44c.34-.51.7-1 1.06-1.47zM5.41 5.14L4 6.55l3.32 3.32C6.55 11.33 6 12.79 6 14c0 3.31 2.69 6 6 6c1.52 0 2.9-.57 3.95-1.5l2.63 2.63L20 19.72L5.41 5.14zM12 18c-2.21 0-4-1.79-4-4c0-.69.32-1.62.81-2.64l5.72 5.72c-.7.56-1.57.92-2.53.92z"/>
  </svg>
);
OutlinedFormatColorResetIcon.displayName = 'OutlinedFormatColorResetIcon';
export const FormatColorResetOutlinedIcon = OutlinedFormatColorResetIcon;

export const OutlinedFormatColorTextIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2 20h20v4H2v-4zm3.49-3h2.42l1.27-3.58h5.65L16.09 17h2.42L13.25 3h-2.5L5.49 17zm4.42-5.61l2.03-5.79h.12l2.03 5.79H9.91z"/>
  </svg>
);
OutlinedFormatColorTextIcon.displayName = 'OutlinedFormatColorTextIcon';
export const FormatColorTextOutlinedIcon = OutlinedFormatColorTextIcon;

export const OutlinedFormatIndentDecreaseIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 17h10v-2H11v2zm-8-5l4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"/>
  </svg>
);
OutlinedFormatIndentDecreaseIcon.displayName = 'OutlinedFormatIndentDecreaseIcon';
export const FormatIndentDecreaseOutlinedIcon = OutlinedFormatIndentDecreaseIcon;

export const OutlinedFormatIndentIncreaseIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 21h18v-2H3v2zM3 8v8l4-4l-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"/>
  </svg>
);
OutlinedFormatIndentIncreaseIcon.displayName = 'OutlinedFormatIndentIncreaseIcon';
export const FormatIndentIncreaseOutlinedIcon = OutlinedFormatIndentIncreaseIcon;

export const OutlinedFormatItalicIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z"/>
  </svg>
);
OutlinedFormatItalicIcon.displayName = 'OutlinedFormatItalicIcon';
export const FormatItalicOutlinedIcon = OutlinedFormatItalicIcon;

export const OutlinedFormatLineSpacingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6 7h2.5L5 3.5L1.5 7H4v10H1.5L5 20.5L8.5 17H6V7zm4-2v2h12V5H10zm0 14h12v-2H10v2zm0-6h12v-2H10v2z"/>
  </svg>
);
OutlinedFormatLineSpacingIcon.displayName = 'OutlinedFormatLineSpacingIcon';
export const FormatLineSpacingOutlinedIcon = OutlinedFormatLineSpacingIcon;

export const OutlinedFormatListBulletedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5S5.5 6.83 5.5 6S4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5s1.5-.68 1.5-1.5s-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"/>
  </svg>
);
OutlinedFormatListBulletedIcon.displayName = 'OutlinedFormatListBulletedIcon';
export const FormatListBulletedOutlinedIcon = OutlinedFormatListBulletedIcon;

export const OutlinedFormatListNumberedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"/>
  </svg>
);
OutlinedFormatListNumberedIcon.displayName = 'OutlinedFormatListNumberedIcon';
export const FormatListNumberedOutlinedIcon = OutlinedFormatListNumberedIcon;

export const OutlinedFormatListNumberedRtlIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 17h2v.5h-1v1h1v.5h-2v1h3v-4h-3v1zm1-9h1V4h-2v1h1v3zm-1 3h1.8L18 13.1v.9h3v-1h-1.8l1.8-2.1V10h-3v1zM2 5h14v2H2V5zm0 12h14v2H2v-2zm0-6h14v2H2v-2z"/>
  </svg>
);
OutlinedFormatListNumberedRtlIcon.displayName = 'OutlinedFormatListNumberedRtlIcon';
export const FormatListNumberedRtlOutlinedIcon = OutlinedFormatListNumberedRtlIcon;

export const OutlinedFormatPaintIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3zm-2 2H6V4h10v2z"/>
  </svg>
);
OutlinedFormatPaintIcon.displayName = 'OutlinedFormatPaintIcon';
export const FormatPaintOutlinedIcon = OutlinedFormatPaintIcon;

export const OutlinedFormatQuoteIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.62 18h-5.24l2-4H13V6h8v7.24L18.62 18zm-2-2h.76L19 12.76V8h-4v4h3.62l-2 4zm-8 2H3.38l2-4H3V6h8v7.24L8.62 18zm-2-2h.76L9 12.76V8H5v4h3.62l-2 4z"/>
  </svg>
);
OutlinedFormatQuoteIcon.displayName = 'OutlinedFormatQuoteIcon';
export const FormatQuoteOutlinedIcon = OutlinedFormatQuoteIcon;

export const OutlinedFormatShapesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M23 7V1h-6v2H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2zM3 3h2v2H3V3zm2 18H3v-2h2v2zm12-2H7v-2H5V7h2V5h10v2h2v10h-2v2zm4 2h-2v-2h2v2zM19 5V3h2v2h-2zm-5.27 9h-3.49l-.73 2H7.89l3.4-9h1.4l3.41 9h-1.63l-.74-2zm-3.04-1.26h2.61L12 8.91l-1.31 3.83z"/>
  </svg>
);
OutlinedFormatShapesIcon.displayName = 'OutlinedFormatShapesIcon';
export const FormatShapesOutlinedIcon = OutlinedFormatShapesIcon;

export const OutlinedFormatSizeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z"/>
  </svg>
);
OutlinedFormatSizeIcon.displayName = 'OutlinedFormatSizeIcon';
export const FormatSizeOutlinedIcon = OutlinedFormatSizeIcon;

export const OutlinedFormatStrikethroughIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"/>
  </svg>
);
OutlinedFormatStrikethroughIcon.displayName = 'OutlinedFormatStrikethroughIcon';
export const FormatStrikethroughOutlinedIcon = OutlinedFormatStrikethroughIcon;

export const OutlinedFormatTextdirectionLToRIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9 4v4c-1.1 0-2-.9-2-2s.9-2 2-2m8-2H9C6.79 2 5 3.79 5 6s1.79 4 4 4v5h2V4h2v11h2V4h2V2zm0 12v3H5v2h12v3l4-4l-4-4z"/>
  </svg>
);
OutlinedFormatTextdirectionLToRIcon.displayName = 'OutlinedFormatTextdirectionLToRIcon';
export const FormatTextdirectionLToROutlinedIcon = OutlinedFormatTextdirectionLToRIcon;

export const OutlinedFormatTextdirectionRToLIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10 4v4c-1.1 0-2-.9-2-2s.9-2 2-2m8-2h-8C7.79 2 6 3.79 6 6s1.79 4 4 4v5h2V4h2v11h2V4h2V2zM8 14l-4 4l4 4v-3h12v-2H8v-3z"/>
  </svg>
);
OutlinedFormatTextdirectionRToLIcon.displayName = 'OutlinedFormatTextdirectionRToLIcon';
export const FormatTextdirectionRToLOutlinedIcon = OutlinedFormatTextdirectionRToLIcon;

export const OutlinedFormatUnderlinedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"/>
  </svg>
);
OutlinedFormatUnderlinedIcon.displayName = 'OutlinedFormatUnderlinedIcon';
export const FormatUnderlinedOutlinedIcon = OutlinedFormatUnderlinedIcon;

export const OutlinedFunctionsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5l-5-5h7V4z"/>
  </svg>
);
OutlinedFunctionsIcon.displayName = 'OutlinedFunctionsIcon';
export const FunctionsOutlinedIcon = OutlinedFunctionsIcon;

export const OutlinedHeightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13 6.99h3L12 3L8 6.99h3v10.02H8L12 21l4-3.99h-3z"/>
  </svg>
);
OutlinedHeightIcon.displayName = 'OutlinedHeightIcon';
export const HeightOutlinedIcon = OutlinedHeightIcon;

export const OutlinedHexagonIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.2 3H6.8l-5.2 9l5.2 9h10.4l5.2-9l-5.2-9zm-1.15 16h-8.1l-4.04-7l4.04-7h8.09l4.04 7l-4.03 7z"/>
  </svg>
);
OutlinedHexagonIcon.displayName = 'OutlinedHexagonIcon';
export const HexagonOutlinedIcon = OutlinedHexagonIcon;

export const OutlinedHighlightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6 14l3 3v5h6v-5l3-3V9H6v5zm2-3h8v2.17l-3 3V20h-2v-3.83l-3-3V11zm3-9h2v3h-2zM3.502 5.874L4.916 4.46l2.122 2.12l-1.414 1.415zm13.458.708l2.123-2.12l1.413 1.416l-2.123 2.12z"/>
  </svg>
);
OutlinedHighlightIcon.displayName = 'OutlinedHighlightIcon';
export const HighlightOutlinedIcon = OutlinedHighlightIcon;

export const OutlinedHorizontalDistributeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 22H2V2h2v20zM22 2h-2v20h2V2zm-8.5 5h-3v10h3V7z"/>
  </svg>
);
OutlinedHorizontalDistributeIcon.displayName = 'OutlinedHorizontalDistributeIcon';
export const HorizontalDistributeOutlinedIcon = OutlinedHorizontalDistributeIcon;

export const OutlinedHorizontalRuleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillRule="evenodd" d="M4 11h16v2H4z"/>
  </svg>
);
OutlinedHorizontalRuleIcon.displayName = 'OutlinedHorizontalRuleIcon';
export const HorizontalRuleOutlinedIcon = OutlinedHorizontalRuleIcon;

export const OutlinedInsertChartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>
  </svg>
);
OutlinedInsertChartIcon.displayName = 'OutlinedInsertChartIcon';
export const InsertChartOutlinedIcon = OutlinedInsertChartIcon;

export const OutlinedInsertChartOutlinedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2 2H5V5h14v14zm0-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
  </svg>
);
OutlinedInsertChartOutlinedIcon.displayName = 'OutlinedInsertChartOutlinedIcon';
export const InsertChartOutlinedOutlinedIcon = OutlinedInsertChartOutlinedIcon;

export const OutlinedInsertCommentIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 4v13.17L18.83 16H4V4h16m0-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 10H6v2h12v-2zm0-3H6v2h12V9zm0-3H6v2h12V6z"/>
  </svg>
);
OutlinedInsertCommentIcon.displayName = 'OutlinedInsertCommentIcon';
export const InsertCommentOutlinedIcon = OutlinedInsertCommentIcon;

export const OutlinedInsertDriveFileIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
  </svg>
);
OutlinedInsertDriveFileIcon.displayName = 'OutlinedInsertDriveFileIcon';
export const InsertDriveFileOutlinedIcon = OutlinedInsertDriveFileIcon;

export const OutlinedInsertEmoticonIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8S14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8S7 8.67 7 9.5S7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
  </svg>
);
OutlinedInsertEmoticonIcon.displayName = 'OutlinedInsertEmoticonIcon';
export const InsertEmoticonOutlinedIcon = OutlinedInsertEmoticonIcon;

export const OutlinedInsertInvitationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2zm-2 5h-5v5h5v-5z"/>
  </svg>
);
OutlinedInsertInvitationIcon.displayName = 'OutlinedInsertInvitationIcon';
export const InsertInvitationOutlinedIcon = OutlinedInsertInvitationIcon;

export const OutlinedInsertLinkIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
  </svg>
);
OutlinedInsertLinkIcon.displayName = 'OutlinedInsertLinkIcon';
export const InsertLinkOutlinedIcon = OutlinedInsertLinkIcon;

export const OutlinedInsertPageBreakIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 20H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2v3zM6 4h7v5h5v2h2V8l-6-6H6c-1.1 0-2 .9-2 2v7h2V4zm3 9h6v2H9zm8 0h6v2h-6zM1 13h6v2H1z"/>
  </svg>
);
OutlinedInsertPageBreakIcon.displayName = 'OutlinedInsertPageBreakIcon';
export const InsertPageBreakOutlinedIcon = OutlinedInsertPageBreakIcon;

export const OutlinedInsertPhotoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14L6 17h12l-3.86-5.14z"/>
  </svg>
);
OutlinedInsertPhotoIcon.displayName = 'OutlinedInsertPhotoIcon';
export const InsertPhotoOutlinedIcon = OutlinedInsertPhotoIcon;

export const OutlinedLineAxisIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 7.43l-1.41-1.41l-4.03 4.53L9.5 4L2 11.51l1.5 1.5l6.14-6.15l5.59 5.18l-1.73 1.95l-4-4L2 17.5L3.5 19l6-6.01l4 4l3.19-3.59l3.9 3.61L22 15.6l-3.98-3.7z"/>
  </svg>
);
OutlinedLineAxisIcon.displayName = 'OutlinedLineAxisIcon';
export const LineAxisOutlinedIcon = OutlinedLineAxisIcon;

export const OutlinedLinearScaleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.5 9.5c-1.03 0-1.9.62-2.29 1.5h-2.92c-.39-.88-1.26-1.5-2.29-1.5s-1.9.62-2.29 1.5H6.79c-.39-.88-1.26-1.5-2.29-1.5a2.5 2.5 0 0 0 0 5c1.03 0 1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5s1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5a2.5 2.5 0 0 0 0-5z"/>
  </svg>
);
OutlinedLinearScaleIcon.displayName = 'OutlinedLinearScaleIcon';
export const LinearScaleOutlinedIcon = OutlinedLinearScaleIcon;

export const OutlinedMarginIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 3v18h18V3H3zm16 16H5V5h14v14zM11 7h2v2h-2V7zM7 7h2v2H7V7zm8 0h2v2h-2V7zm-8 4h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/>
  </svg>
);
OutlinedMarginIcon.displayName = 'OutlinedMarginIcon';
export const MarginOutlinedIcon = OutlinedMarginIcon;

export const OutlinedMergeTypeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 20.41L18.41 19L15 15.59L13.59 17L17 20.41zM7.5 8H11v5.59L5.59 19L7 20.41l6-6V8h3.5L12 3.5L7.5 8z"/>
  </svg>
);
OutlinedMergeTypeIcon.displayName = 'OutlinedMergeTypeIcon';
export const MergeTypeOutlinedIcon = OutlinedMergeTypeIcon;

export const OutlinedModeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/>
  </svg>
);
OutlinedModeIcon.displayName = 'OutlinedModeIcon';
export const ModeOutlinedIcon = OutlinedModeIcon;

export const OutlinedModeCommentIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 17.17L18.83 16H4V4h16v13.17zM20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2z"/>
  </svg>
);
OutlinedModeCommentIcon.displayName = 'OutlinedModeCommentIcon';
export const ModeCommentOutlinedIcon = OutlinedModeCommentIcon;

export const OutlinedModeEditIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 21h3.75L17.81 9.94l-3.75-3.75L3 17.25V21zm2-2.92l9.06-9.06l.92.92L5.92 19H5v-.92zM18.37 3.29a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34z"/>
  </svg>
);
OutlinedModeEditIcon.displayName = 'OutlinedModeEditIcon';
export const ModeEditOutlinedIcon = OutlinedModeEditIcon;

export const OutlinedModeEditOutlineIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 21h3.75L17.81 9.94l-3.75-3.75L3 17.25V21zm2-2.92l9.06-9.06l.92.92L5.92 19H5v-.92zM18.37 3.29a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34z"/>
  </svg>
);
OutlinedModeEditOutlineIcon.displayName = 'OutlinedModeEditOutlineIcon';
export const ModeEditOutlineOutlinedIcon = OutlinedModeEditOutlineIcon;

export const OutlinedMonetizationOnIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67c0-.84.79-1.43 2.1-1.43c1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81c0 1.79 1.49 2.69 3.66 3.21c1.95.46 2.34 1.15 2.34 1.87c0 .53-.39 1.39-2.1 1.39c-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77c-.01-2.2-1.9-2.96-3.66-3.42z"/>
  </svg>
);
OutlinedMonetizationOnIcon.displayName = 'OutlinedMonetizationOnIcon';
export const MonetizationOnOutlinedIcon = OutlinedMonetizationOnIcon;

export const OutlinedMoneyOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-.39.08-.75.21-1.1.36l1.51 1.51c.32-.08.69-.13 1.09-.13zM5.47 3.92L4.06 5.33L7.5 8.77c0 2.08 1.56 3.22 3.91 3.91l3.51 3.51c-.34.49-1.05.91-2.42.91c-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c.96-.18 1.83-.55 2.46-1.12l2.22 2.22l1.41-1.41L5.47 3.92z"/>
  </svg>
);
OutlinedMoneyOffIcon.displayName = 'OutlinedMoneyOffIcon';
export const MoneyOffOutlinedIcon = OutlinedMoneyOffIcon;

export const OutlinedMoneyOffCsredIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-.39.08-.75.21-1.1.36l1.51 1.51c.32-.08.69-.13 1.09-.13zM5.47 3.92L4.06 5.33L7.5 8.77c0 2.08 1.56 3.22 3.91 3.91l3.51 3.51c-.34.49-1.05.91-2.42.91c-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c.96-.18 1.83-.55 2.46-1.12l2.22 2.22l1.41-1.41L5.47 3.92z"/>
  </svg>
);
OutlinedMoneyOffCsredIcon.displayName = 'OutlinedMoneyOffCsredIcon';
export const MoneyOffCsredOutlinedIcon = OutlinedMoneyOffCsredIcon;

export const OutlinedMoveDownIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 11c0 2.45 1.76 4.47 4.08 4.91l-1.49-1.49L7 13l4 4.01L7 21l-1.41-1.41l1.58-1.58v-.06A7.007 7.007 0 0 1 1 11c0-3.87 3.13-7 7-7h3v2H8c-2.76 0-5 2.24-5 5zm19 0V4h-9v7h9zm-2-2h-5V6h5v3zm-7 4h9v7h-9z"/>
  </svg>
);
OutlinedMoveDownIcon.displayName = 'OutlinedMoveDownIcon';
export const MoveDownOutlinedIcon = OutlinedMoveDownIcon;

export const OutlinedMoveUpIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 13c0-2.45 1.76-4.47 4.08-4.91l-1.49 1.5L7 11l4-4.01L7 3L5.59 4.41l1.58 1.58v.06A7.007 7.007 0 0 0 1 13c0 3.87 3.13 7 7 7h3v-2H8c-2.76 0-5-2.24-5-5zm10 0v7h9v-7h-9zm7 5h-5v-3h5v3zM13 4h9v7h-9z"/>
  </svg>
);
OutlinedMoveUpIcon.displayName = 'OutlinedMoveUpIcon';
export const MoveUpOutlinedIcon = OutlinedMoveUpIcon;

export const OutlinedMultilineChartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 6.92l-1.41-1.41l-2.85 3.21C15.68 6.4 12.83 5 9.61 5C6.72 5 4.07 6.16 2 8l1.42 1.42C5.12 7.93 7.27 7 9.61 7c2.74 0 5.09 1.26 6.77 3.24l-2.88 3.24l-4-4L2 16.99l1.5 1.5l6-6.01l4 4l4.05-4.55c.75 1.35 1.25 2.9 1.44 4.55H21c-.22-2.3-.95-4.39-2.04-6.14L22 6.92z"/>
  </svg>
);
OutlinedMultilineChartIcon.displayName = 'OutlinedMultilineChartIcon';
export const MultilineChartOutlinedIcon = OutlinedMultilineChartIcon;

export const OutlinedNotesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 11.01L3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z"/>
  </svg>
);
OutlinedNotesIcon.displayName = 'OutlinedNotesIcon';
export const NotesOutlinedIcon = OutlinedNotesIcon;

export const OutlinedNumbersIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20.5 10l.5-2h-4l1-4h-2l-1 4h-4l1-4h-2L9 8H5l-.5 2h4l-1 4h-4L3 16h4l-1 4h2l1-4h4l-1 4h2l1-4h4l.5-2h-4l1-4h4zm-7 4h-4l1-4h4l-1 4z"/>
  </svg>
);
OutlinedNumbersIcon.displayName = 'OutlinedNumbersIcon';
export const NumbersOutlinedIcon = OutlinedNumbersIcon;

export const OutlinedPaddingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm16 14H5V5h14v14zM11 7h2v2h-2V7zM7 7h2v2H7V7zm8 0h2v2h-2V7z"/>
  </svg>
);
OutlinedPaddingIcon.displayName = 'OutlinedPaddingIcon';
export const PaddingOutlinedIcon = OutlinedPaddingIcon;

export const OutlinedPentagonIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.63 9.78L16.56 19H7.44L4.37 9.78L12 4.44l7.63 5.34zM2 9l4 12h12l4-12l-10-7L2 9z"/>
  </svg>
);
OutlinedPentagonIcon.displayName = 'OutlinedPentagonIcon';
export const PentagonOutlinedIcon = OutlinedPentagonIcon;

export const OutlinedPieChartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm7.93 9H13V4.07c3.61.45 6.48 3.32 6.93 6.93zM4 12c0-4.07 3.06-7.44 7-7.93v15.86c-3.94-.49-7-3.86-7-7.93zm9 7.93V13h6.93A8.002 8.002 0 0 1 13 19.93z"/>
  </svg>
);
OutlinedPieChartIcon.displayName = 'OutlinedPieChartIcon';
export const PieChartOutlinedIcon = OutlinedPieChartIcon;

export const OutlinedPieChartOutlineIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm1 2.07c3.61.45 6.48 3.33 6.93 6.93H13V4.07zM4 12c0-4.06 3.07-7.44 7-7.93v15.87c-3.93-.5-7-3.88-7-7.94zm9 7.93V13h6.93A8.002 8.002 0 0 1 13 19.93z"/>
  </svg>
);
OutlinedPieChartOutlineIcon.displayName = 'OutlinedPieChartOutlineIcon';
export const PieChartOutlineOutlinedIcon = OutlinedPieChartOutlineIcon;

export const OutlinedPolylineIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15 16v1.26l-6-3v-3.17L11.7 8H16V2h-6v4.9L7.3 10H3v6h5l7 3.5V22h6v-6h-6zM12 4h2v2h-2V4zM7 14H5v-2h2v2zm12 6h-2v-2h2v2z"/>
  </svg>
);
OutlinedPolylineIcon.displayName = 'OutlinedPolylineIcon';
export const PolylineOutlinedIcon = OutlinedPolylineIcon;

export const OutlinedPostAddIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 19.22H5V7h7V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2v7.22z"/><path fill={color || 'currentColor'} d="M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3V2zM7 9h8v2H7zm0 3v2h8v-2h-3zm0 3h8v2H7z"/>
  </svg>
);
OutlinedPostAddIcon.displayName = 'OutlinedPostAddIcon';
export const PostAddOutlinedIcon = OutlinedPostAddIcon;

export const OutlinedPublishIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5 4h14v2H5zm0 10h4v6h6v-6h4l-7-7l-7 7zm8-2v6h-2v-6H9.83L12 9.83L14.17 12H13z"/>
  </svg>
);
OutlinedPublishIcon.displayName = 'OutlinedPublishIcon';
export const PublishOutlinedIcon = OutlinedPublishIcon;

export const OutlinedQueryStatsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.88 18.47c.44-.7.7-1.51.7-2.39c0-2.49-2.01-4.5-4.5-4.5s-4.5 2.01-4.5 4.5s2.01 4.5 4.49 4.5c.88 0 1.7-.26 2.39-.7L21.58 23L23 21.58l-3.12-3.11zm-3.8.11a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5zm-.36-8.5c-.74.02-1.45.18-2.1.45l-.55-.83l-3.8 6.18l-3.01-3.52l-3.63 5.81L1 17l5-8l3 3.5L13 6l2.72 4.08zm2.59.5c-.64-.28-1.33-.45-2.05-.49L21.38 2L23 3.18l-4.69 7.4z"/>
  </svg>
);
OutlinedQueryStatsIcon.displayName = 'OutlinedQueryStatsIcon';
export const QueryStatsOutlinedIcon = OutlinedQueryStatsIcon;

export const OutlinedRectangleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2 4v16h20V4H2zm18 14H4V6h16v12z"/>
  </svg>
);
OutlinedRectangleIcon.displayName = 'OutlinedRectangleIcon';
export const RectangleOutlinedIcon = OutlinedRectangleIcon;

export const OutlinedScatterPlotIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 18c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm4-2c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm5.6 17.6c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"/>
  </svg>
);
OutlinedScatterPlotIcon.displayName = 'OutlinedScatterPlotIcon';
export const ScatterPlotOutlinedIcon = OutlinedScatterPlotIcon;

export const OutlinedSchemaIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14 9v2h-3V9H8.5V7H11V1H4v6h2.5v2H4v6h2.5v2H4v6h7v-6H8.5v-2H11v-2h3v2h7V9h-7zM6 3h3v2H6V3zm3 18H6v-2h3v2zm0-8H6v-2h3v2zm10 0h-3v-2h3v2z"/>
  </svg>
);
OutlinedSchemaIcon.displayName = 'OutlinedSchemaIcon';
export const SchemaOutlinedIcon = OutlinedSchemaIcon;

export const OutlinedScoreIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5l4-4l4 4l6-6v6zm0-8.5l-6 6l-4-4l-4 4V5h14v5.5zM13.5 9V6H12v6h1.5zm3.7 3l-2-3l2-3h-1.7l-2 3l2 3zM11 10.5H8.5v-.75H11V6H7v1.5h2.5v.75H7V12h4z"/>
  </svg>
);
OutlinedScoreIcon.displayName = 'OutlinedScoreIcon';
export const ScoreOutlinedIcon = OutlinedScoreIcon;

export const OutlinedShapeLineIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6 11c2.76 0 5-2.24 5-5S8.76 1 6 1S1 3.24 1 6s2.24 5 5 5zm0-8c1.65 0 3 1.35 3 3S7.65 9 6 9S3 7.65 3 6s1.35-3 3-3zm15 11h-5c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm0 7h-5v-5h5v5z"/><path fill={color || 'currentColor'} d="M17.71 7.7c.4.19.83.3 1.29.3c1.65 0 3-1.35 3-3s-1.35-3-3-3s-3 1.35-3 3c0 .46.11.89.3 1.29L6.29 16.3c-.4-.19-.83-.3-1.29-.3c-1.65 0-3 1.35-3 3s1.35 3 3 3s3-1.35 3-3c0-.46-.11-.89-.3-1.29L17.71 7.7z"/>
  </svg>
);
OutlinedShapeLineIcon.displayName = 'OutlinedShapeLineIcon';
export const ShapeLineOutlinedIcon = OutlinedShapeLineIcon;

export const OutlinedShortTextIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 9h16v2H4V9zm0 4h10v2H4v-2z"/>
  </svg>
);
OutlinedShortTextIcon.displayName = 'OutlinedShortTextIcon';
export const ShortTextOutlinedIcon = OutlinedShortTextIcon;

export const OutlinedShowChartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3.5 18.49l6-6.01l4 4L22 6.92l-1.41-1.41l-7.09 7.97l-4-4L2 16.99l1.5 1.5z"/>
  </svg>
);
OutlinedShowChartIcon.displayName = 'OutlinedShowChartIcon';
export const ShowChartOutlinedIcon = OutlinedShowChartIcon;

export const OutlinedSpaceBarIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 9v4H6V9H4v6h16V9h-2z"/>
  </svg>
);
OutlinedSpaceBarIcon.displayName = 'OutlinedSpaceBarIcon';
export const SpaceBarOutlinedIcon = OutlinedSpaceBarIcon;

export const OutlinedSquareIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 3v18h18V3H3zm16 16H5V5h14v14z"/>
  </svg>
);
OutlinedSquareIcon.displayName = 'OutlinedSquareIcon';
export const SquareOutlinedIcon = OutlinedSquareIcon;

export const OutlinedStackedLineChartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2 19.99l7.5-7.51l4 4l7.09-7.97L22 9.92l-8.5 9.56l-4-4l-6 6.01l-1.5-1.5zm1.5-4.5l6-6.01l4 4L22 3.92l-1.41-1.41l-7.09 7.97l-4-4L2 13.99l1.5 1.5z"/>
  </svg>
);
OutlinedStackedLineChartIcon.displayName = 'OutlinedStackedLineChartIcon';
export const StackedLineChartOutlinedIcon = OutlinedStackedLineChartIcon;

export const OutlinedStrikethroughSIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7.24 8.75c-.26-.48-.39-1.03-.39-1.67c0-.61.13-1.16.4-1.67c.26-.5.63-.93 1.11-1.29a5.73 5.73 0 0 1 1.7-.83c.66-.19 1.39-.29 2.18-.29c.81 0 1.54.11 2.21.34c.66.22 1.23.54 1.69.94c.47.4.83.88 1.08 1.43s.38 1.15.38 1.81h-3.01c0-.31-.05-.59-.15-.85c-.09-.27-.24-.49-.44-.68c-.2-.19-.45-.33-.75-.44c-.3-.1-.66-.16-1.06-.16c-.39 0-.74.04-1.03.13s-.53.21-.72.36c-.19.16-.34.34-.44.55c-.1.21-.15.43-.15.66c0 .48.25.88.74 1.21c.38.25.77.48 1.41.7H7.39c-.05-.08-.11-.17-.15-.25zM21 12v-2H3v2h9.62c.18.07.4.14.55.2c.37.17.66.34.87.51s.35.36.43.57c.07.2.11.43.11.69c0 .23-.05.45-.14.66c-.09.2-.23.38-.42.53c-.19.15-.42.26-.71.35c-.29.08-.63.13-1.01.13c-.43 0-.83-.04-1.18-.13s-.66-.23-.91-.42c-.25-.19-.45-.44-.59-.75s-.25-.76-.25-1.21H6.4c0 .55.08 1.13.24 1.58s.37.85.65 1.21c.28.35.6.66.98.92c.37.26.78.48 1.22.65c.44.17.9.3 1.38.39c.48.08.96.13 1.44.13c.8 0 1.53-.09 2.18-.28s1.21-.45 1.67-.79c.46-.34.82-.77 1.07-1.27s.38-1.07.38-1.71c0-.6-.1-1.14-.31-1.61c-.05-.11-.11-.23-.17-.33H21V12z"/>
  </svg>
);
OutlinedStrikethroughSIcon.displayName = 'OutlinedStrikethroughSIcon';
export const StrikethroughSOutlinedIcon = OutlinedStrikethroughSIcon;

export const OutlinedSubscriptIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 18h-2v1h3v1h-4v-2c0-.55.45-1 1-1h2v-1h-3v-1h3c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1zM5.88 18h2.66l3.4-5.42h.12l3.4 5.42h2.66l-4.65-7.27L17.81 4h-2.68l-3.07 4.99h-.12L8.85 4H6.19l4.32 6.73L5.88 18z"/>
  </svg>
);
OutlinedSubscriptIcon.displayName = 'OutlinedSubscriptIcon';
export const SubscriptOutlinedIcon = OutlinedSubscriptIcon;

export const OutlinedSuperscriptIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 7h-2v1h3v1h-4V7c0-.55.45-1 1-1h2V5h-3V4h3c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1zM5.88 20h2.66l3.4-5.42h.12l3.4 5.42h2.66l-4.65-7.27L17.81 6h-2.68l-3.07 4.99h-.12L8.85 6H6.19l4.32 6.73L5.88 20z"/>
  </svg>
);
OutlinedSuperscriptIcon.displayName = 'OutlinedSuperscriptIcon';
export const SuperscriptOutlinedIcon = OutlinedSuperscriptIcon;

export const OutlinedTableChartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H5V5h15zm-5 14h-5v-9h5v9zM5 10h3v9H5v-9zm12 9v-9h3v9h-3z"/>
  </svg>
);
OutlinedTableChartIcon.displayName = 'OutlinedTableChartIcon';
export const TableChartOutlinedIcon = OutlinedTableChartIcon;

export const OutlinedTableRowsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H5V5h14zm0 5v4H5v-4h14zM5 19v-3h14v3H5z"/>
  </svg>
);
OutlinedTableRowsIcon.displayName = 'OutlinedTableRowsIcon';
export const TableRowsOutlinedIcon = OutlinedTableRowsIcon;

export const OutlinedTextDecreaseIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M.99 19h2.42l1.27-3.58h5.65L11.59 19h2.42L8.75 5h-2.5L.99 19zm4.42-5.61L7.44 7.6h.12l2.03 5.79H5.41zM23 11v2h-8v-2h8z"/>
  </svg>
);
OutlinedTextDecreaseIcon.displayName = 'OutlinedTextDecreaseIcon';
export const TextDecreaseOutlinedIcon = OutlinedTextDecreaseIcon;

export const OutlinedTextFieldsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"/>
  </svg>
);
OutlinedTextFieldsIcon.displayName = 'OutlinedTextFieldsIcon';
export const TextFieldsOutlinedIcon = OutlinedTextFieldsIcon;

export const OutlinedTextIncreaseIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M.99 19h2.42l1.27-3.58h5.65L11.59 19h2.42L8.75 5h-2.5L.99 19zm4.42-5.61L7.44 7.6h.12l2.03 5.79H5.41zM20 11h3v2h-3v3h-2v-3h-3v-2h3V8h2v3z"/>
  </svg>
);
OutlinedTextIncreaseIcon.displayName = 'OutlinedTextIncreaseIcon';
export const TextIncreaseOutlinedIcon = OutlinedTextIncreaseIcon;

export const OutlinedTitleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5 4v3h5.5v12h3V7H19V4H5z"/>
  </svg>
);
OutlinedTitleIcon.displayName = 'OutlinedTitleIcon';
export const TitleOutlinedIcon = OutlinedTitleIcon;

export const OutlinedTypeSpecimenIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"/><path fill={color || 'currentColor'} d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/><path fill={color || 'currentColor'} d="M12.19 12.2h3.63l.8 2.3h1.56l-3.38-9h-1.6l-3.38 9h1.56l.81-2.3zm1.77-5.03h.08l1.31 3.72h-2.69l1.3-3.72z"/>
  </svg>
);
OutlinedTypeSpecimenIcon.displayName = 'OutlinedTypeSpecimenIcon';
export const TypeSpecimenOutlinedIcon = OutlinedTypeSpecimenIcon;

export const OutlinedVerticalAlignBottomIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 13h-3V3h-2v10H8l4 4l4-4zM4 19v2h16v-2H4z"/>
  </svg>
);
OutlinedVerticalAlignBottomIcon.displayName = 'OutlinedVerticalAlignBottomIcon';
export const VerticalAlignBottomOutlinedIcon = OutlinedVerticalAlignBottomIcon;

export const OutlinedVerticalAlignCenterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8 19h3v4h2v-4h3l-4-4l-4 4zm8-14h-3V1h-2v4H8l4 4l4-4zM4 11v2h16v-2H4z"/>
  </svg>
);
OutlinedVerticalAlignCenterIcon.displayName = 'OutlinedVerticalAlignCenterIcon';
export const VerticalAlignCenterOutlinedIcon = OutlinedVerticalAlignCenterIcon;

export const OutlinedVerticalAlignTopIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8 11h3v10h2V11h3l-4-4l-4 4zM4 3v2h16V3H4z"/>
  </svg>
);
OutlinedVerticalAlignTopIcon.displayName = 'OutlinedVerticalAlignTopIcon';
export const VerticalAlignTopOutlinedIcon = OutlinedVerticalAlignTopIcon;

export const OutlinedVerticalDistributeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 2v2H2V2h20zM7 10.5v3h10v-3H7zM2 20v2h20v-2H2z"/>
  </svg>
);
OutlinedVerticalDistributeIcon.displayName = 'OutlinedVerticalDistributeIcon';
export const VerticalDistributeOutlinedIcon = OutlinedVerticalDistributeIcon;

export const OutlinedWrapTextIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"/>
  </svg>
);
OutlinedWrapTextIcon.displayName = 'OutlinedWrapTextIcon';
export const WrapTextOutlinedIcon = OutlinedWrapTextIcon;

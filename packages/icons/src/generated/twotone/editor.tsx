import React from 'react';
import { IconProps } from '../../types';

export const TwoToneAddChartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 7h2v10h-2zm4 6h2v4h-2z"/><path fill={color || 'currentColor'} d="M19 19H5V5h9V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9z"/><path fill={color || 'currentColor'} d="M7 10h2v7H7zm12-5V3h-2v2h-2v2h2v2h2V7h2V5z"/>
  </svg>
);
TwoToneAddChartIcon.displayName = 'TwoToneAddChartIcon';
export const AddChartTwoToneIcon = TwoToneAddChartIcon;

export const TwoToneAddCommentIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm0 15.17L18.83 16H4V4h16v13.17zM13 5h-2v4H7v2h4v4h2v-4h4V9h-4z"/><path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M4 4v12h14.83L20 17.17V4H4zm13 7h-4v4h-2v-4H7V9h4V5h2v4h4v2z"/>
  </svg>
);
TwoToneAddCommentIcon.displayName = 'TwoToneAddCommentIcon';
export const AddCommentTwoToneIcon = TwoToneAddCommentIcon;

export const TwoToneAlignHorizontalCenterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 2h2v5h8v3h-8v4h5v3h-5v5h-2v-5H6v-3h5v-4H3V7h8z"/>
  </svg>
);
TwoToneAlignHorizontalCenterIcon.displayName = 'TwoToneAlignHorizontalCenterIcon';
export const AlignHorizontalCenterTwoToneIcon = TwoToneAlignHorizontalCenterIcon;

export const TwoToneAlignHorizontalLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 22H2V2h2v20zM22 7H6v3h16V7zm-6 7H6v3h10v-3z"/>
  </svg>
);
TwoToneAlignHorizontalLeftIcon.displayName = 'TwoToneAlignHorizontalLeftIcon';
export const AlignHorizontalLeftTwoToneIcon = TwoToneAlignHorizontalLeftIcon;

export const TwoToneAlignHorizontalRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 2h2v20h-2V2zM2 10h16V7H2v3zm6 7h10v-3H8v3z"/>
  </svg>
);
TwoToneAlignHorizontalRightIcon.displayName = 'TwoToneAlignHorizontalRightIcon';
export const AlignHorizontalRightTwoToneIcon = TwoToneAlignHorizontalRightIcon;

export const TwoToneAlignVerticalBottomIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 22H2v-2h20v2zM10 2H7v16h3V2zm7 6h-3v10h3V8z"/>
  </svg>
);
TwoToneAlignVerticalBottomIcon.displayName = 'TwoToneAlignVerticalBottomIcon';
export const AlignVerticalBottomTwoToneIcon = TwoToneAlignVerticalBottomIcon;

export const TwoToneAlignVerticalCenterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 11h-5V6h-3v5h-4V3H7v8H1.84v2H7v8h3v-8h4v5h3v-5h5z"/>
  </svg>
);
TwoToneAlignVerticalCenterIcon.displayName = 'TwoToneAlignVerticalCenterIcon';
export const AlignVerticalCenterTwoToneIcon = TwoToneAlignVerticalCenterIcon;

export const TwoToneAlignVerticalTopIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 2v2H2V2h20zM7 22h3V6H7v16zm7-6h3V6h-3v10z"/>
  </svg>
);
TwoToneAlignVerticalTopIcon.displayName = 'TwoToneAlignVerticalTopIcon';
export const AlignVerticalTopTwoToneIcon = TwoToneAlignVerticalTopIcon;

export const TwoToneAreaChartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M19 16.95l-7-5.45L8 17l-3-2.4V11l2.44 1.83l4.96-6.95L16.3 9H19z"/><path fill={color || 'currentColor'} d="M17 7l-5-4l-5 7l-4-3v13h18V7h-4zm2 9.95l-7-5.45L8 17l-3-2.4V11l2.44 1.83l4.96-6.95L16.3 9H19v7.95z"/>
  </svg>
);
TwoToneAreaChartIcon.displayName = 'TwoToneAreaChartIcon';
export const AreaChartTwoToneIcon = TwoToneAreaChartIcon;

export const TwoToneAttachFileIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12.5 23c3.04 0 5.5-2.46 5.5-5.5V6h-1.5v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5a2.5 2.5 0 0 1 5 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5a2.5 2.5 0 0 0 5 0V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5z"/>
  </svg>
);
TwoToneAttachFileIcon.displayName = 'TwoToneAttachFileIcon';
export const AttachFileTwoToneIcon = TwoToneAttachFileIcon;

export const TwoToneAttachMoneyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11.5 17.1c-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55c0-2.84-2.43-3.81-4.7-4.4c-2.27-.59-3-1.2-3-2.15c0-1.09 1.01-1.85 2.7-1.85c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61c0 2.31 1.91 3.46 4.7 4.13c2.5.6 3 1.48 3 2.41c0 .69-.49 1.79-2.7 1.79z"/>
  </svg>
);
TwoToneAttachMoneyIcon.displayName = 'TwoToneAttachMoneyIcon';
export const AttachMoneyTwoToneIcon = TwoToneAttachMoneyIcon;

export const TwoToneAutoGraphIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.06 9.94L12 9l2.06-.94L15 6l.94 2.06L18 9l-2.06.94L15 12l-.94-2.06zM4 14l.94-2.06L7 11l-2.06-.94L4 8l-.94 2.06L1 11l2.06.94L4 14zm4.5-5l1.09-2.41L12 5.5L9.59 4.41L8.5 2L7.41 4.41L5 5.5l2.41 1.09L8.5 9zm-4 11.5l6-6.01l4 4L23 8.93l-1.41-1.41l-7.09 7.97l-4-4L3 19l1.5 1.5z"/>
  </svg>
);
TwoToneAutoGraphIcon.displayName = 'TwoToneAutoGraphIcon';
export const AutoGraphTwoToneIcon = TwoToneAutoGraphIcon;

export const TwoToneBarChartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 9h4v11H4zm12 4h4v7h-4zm-6-9h4v16h-4z"/>
  </svg>
);
TwoToneBarChartIcon.displayName = 'TwoToneBarChartIcon';
export const BarChartTwoToneIcon = TwoToneBarChartIcon;

export const TwoToneBorderAllIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 3H3v18h18V3zM11 19H5v-6h6v6zm0-8H5V5h6v6zm8 8h-6v-6h6v6zm0-8h-6V5h6v6z"/>
  </svg>
);
TwoToneBorderAllIcon.displayName = 'TwoToneBorderAllIcon';
export const BorderAllTwoToneIcon = TwoToneBorderAllIcon;

export const TwoToneBorderBottomIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 11h2v2H3zm0 4h2v2H3zm0 4h18v2H3zm16-4h2v2h-2zM3 7h2v2H3zm16 4h2v2h-2zm0-8h2v2h-2zm-4 8h2v2h-2zm4-4h2v2h-2zm-4-4h2v2h-2zm-8 8h2v2H7zM3 3h2v2H3zm8 4h2v2h-2zM7 3h2v2H7zm4 8h2v2h-2zm0 4h2v2h-2zm0-12h2v2h-2z"/>
  </svg>
);
TwoToneBorderBottomIcon.displayName = 'TwoToneBorderBottomIcon';
export const BorderBottomTwoToneIcon = TwoToneBorderBottomIcon;

export const TwoToneBorderClearIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 3h2v2H7zm0 16h2v2H7zM3 3h2v2H3zm16 0h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zM3 7h2v2H3zm0 12h2v2H3zm16 0h2v2h-2zm0-4h2v2h-2zM3 15h2v2H3zm0-4h2v2H3zm4 0h2v2H7zm8 0h2v2h-2zm-4 8h2v2h-2zm4 0h2v2h-2zm0-16h2v2h-2zm-4 0h2v2h-2zm0 4h2v2h-2zm0 8h2v2h-2zm0-4h2v2h-2z"/>
  </svg>
);
TwoToneBorderClearIcon.displayName = 'TwoToneBorderClearIcon';
export const BorderClearTwoToneIcon = TwoToneBorderClearIcon;

export const TwoToneBorderColorIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16.81 8.94l-3.75-3.75L4 14.25V18h3.75l9.06-9.06zM6 16v-.92l7.06-7.06l.92.92L6.92 16H6zm13.71-9.96a.996.996 0 0 0 0-1.41l-2.34-2.34a1.001 1.001 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83zM2 20h20v4H2z"/>
  </svg>
);
TwoToneBorderColorIcon.displayName = 'TwoToneBorderColorIcon';
export const BorderColorTwoToneIcon = TwoToneBorderColorIcon;

export const TwoToneBorderHorizontalIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 3h2v2h-2zm8 0h2v2h-2zm0 4h2v2h-2zm-4-4h2v2h-2zM3 19h2v2H3zm0-4h2v2H3zm0-8h2v2H3zm4 12h2v2H7zm4-12h2v2h-2zM7 3h2v2H7zM3 3h2v2H3zm12 16h2v2h-2zm-4 0h2v2h-2zm8-4h2v2h-2zm0 4h2v2h-2zm-8-4h2v2h-2zm-8-4h18v2H3z"/>
  </svg>
);
TwoToneBorderHorizontalIcon.displayName = 'TwoToneBorderHorizontalIcon';
export const BorderHorizontalTwoToneIcon = TwoToneBorderHorizontalIcon;

export const TwoToneBorderInnerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 15h2v2H3zM3 3h2v2H3zm0 16h2v2H3zm8 2h2v-8h8v-2h-8V3h-2v8H3v2h8zm-4-2h2v2H7zm12-4h2v2h-2zm-4 4h2v2h-2zm4 0h2v2h-2zM3 7h2v2H3zm16 0h2v2h-2zM7 3h2v2H7zm8 0h2v2h-2zm4 0h2v2h-2z"/>
  </svg>
);
TwoToneBorderInnerIcon.displayName = 'TwoToneBorderInnerIcon';
export const BorderInnerTwoToneIcon = TwoToneBorderInnerIcon;

export const TwoToneBorderLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 3h2v2h-2zM3 3h2v18H3zm12 0h2v2h-2zm-4 16h2v2h-2zm0-4h2v2h-2zm4 4h2v2h-2zM11 7h2v2h-2zm0 4h2v2h-2zm8 4h2v2h-2zm0 4h2v2h-2zm0-12h2v2h-2zm0 4h2v2h-2zm0-8h2v2h-2zm-4 8h2v2h-2zm-8 8h2v2H7zm0-8h2v2H7zm0-8h2v2H7z"/>
  </svg>
);
TwoToneBorderLeftIcon.displayName = 'TwoToneBorderLeftIcon';
export const BorderLeftTwoToneIcon = TwoToneBorderLeftIcon;

export const TwoToneBorderOuterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 11h2v2h-2zm0-4h2v2h-2zm10-4H3v18h18V3zm-2 16H5V5h14v14zm-4-8h2v2h-2zm-8 0h2v2H7zm4 4h2v2h-2z"/>
  </svg>
);
TwoToneBorderOuterIcon.displayName = 'TwoToneBorderOuterIcon';
export const BorderOuterTwoToneIcon = TwoToneBorderOuterIcon;

export const TwoToneBorderRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 3h2v2H3zm0 16h2v2H3zM15 3h2v2h-2zm0 16h2v2h-2zm0-8h2v2h-2zM3 15h2v2H3zm0-4h2v2H3zm0-4h2v2H3zm8 8h2v2h-2zm-4-4h2v2H7zm0-8h2v2H7zm12 0h2v18h-2zM7 19h2v2H7zm4-16h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm0 8h2v2h-2z"/>
  </svg>
);
TwoToneBorderRightIcon.displayName = 'TwoToneBorderRightIcon';
export const BorderRightTwoToneIcon = TwoToneBorderRightIcon;

export const TwoToneBorderStyleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 19h2v2h-2zm0-8h2v2h-2zm0 4h2v2h-2zm-4 4h2v2h-2zM3 21h2V5h16V3H3zM19 7h2v2h-2zm-8 12h2v2h-2zm-4 0h2v2H7z"/>
  </svg>
);
TwoToneBorderStyleIcon.displayName = 'TwoToneBorderStyleIcon';
export const BorderStyleTwoToneIcon = TwoToneBorderStyleIcon;

export const TwoToneBorderTopIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 19h2v2h-2zM3 19h2v2H3zm8 0h2v2h-2zm-8-8h2v2H3zm0 4h2v2H3zm4 4h2v2H7zm4-12h2v2h-2zm0 4h2v2h-2zM3 7h2v2H3zm0-4h18v2H3zm8 12h2v2h-2zm4 4h2v2h-2zm-8-8h2v2H7zm8 0h2v2h-2zm4 4h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z"/>
  </svg>
);
TwoToneBorderTopIcon.displayName = 'TwoToneBorderTopIcon';
export const BorderTopTwoToneIcon = TwoToneBorderTopIcon;

export const TwoToneBorderVerticalIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 3h2v2H7zm0 8h2v2H7zm0 8h2v2H7zm-4 0h2v2H3zM3 3h2v2H3zm0 8h2v2H3zm16-8h2v2h-2zM3 7h2v2H3zm8-4h2v18h-2zM3 15h2v2H3zm12-4h2v2h-2zm4 4h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2zm0 12h2v2h-2zm-4 0h2v2h-2zm0-16h2v2h-2z"/>
  </svg>
);
TwoToneBorderVerticalIcon.displayName = 'TwoToneBorderVerticalIcon';
export const BorderVerticalTwoToneIcon = TwoToneBorderVerticalIcon;

export const TwoToneBubbleChartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M16.5 12c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5S13 6.57 13 8.5s1.57 3.5 3.5 3.5z"/><circle cx="15.01" cy="18" fillOpacity={fillOpacity ?? 0.3} r="1"/><circle cx="7" cy="14" fillOpacity={fillOpacity ?? 0.3} r="2"/><path fill={color || 'currentColor'} d="M7 18c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2zm11.01 6c0-1.65-1.35-3-3-3s-3 1.35-3 3s1.35 3 3 3s3-1.35 3-3zm-4 0c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1zm2.49-4c3.03 0 5.5-2.47 5.5-5.5S19.53 3 16.5 3S11 5.47 11 8.5s2.47 5.5 5.5 5.5zm0-9C18.43 5 20 6.57 20 8.5S18.43 12 16.5 12S13 10.43 13 8.5S14.57 5 16.5 5z"/>
  </svg>
);
TwoToneBubbleChartIcon.displayName = 'TwoToneBubbleChartIcon';
export const BubbleChartTwoToneIcon = TwoToneBubbleChartIcon;

export const TwoToneCandlestickChartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9 4H7v2H5v12h2v2h2v-2h2V6H9V4zm0 12H7V8h2v8z"/><path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M7 8h2v8H7zm8 2h2v3h-2z"/><path fill={color || 'currentColor'} d="M19 8h-2V4h-2v4h-2v7h2v5h2v-5h2V8zm-2 5h-2v-3h2v3z"/>
  </svg>
);
TwoToneCandlestickChartIcon.displayName = 'TwoToneCandlestickChartIcon';
export const CandlestickChartTwoToneIcon = TwoToneCandlestickChartIcon;

export const TwoToneChecklistIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 7h-9v2h9V7zm0 8h-9v2h9v-2zM5.54 11L2 7.46l1.41-1.41l2.12 2.12l4.24-4.24l1.41 1.41L5.54 11zm0 8L2 15.46l1.41-1.41l2.12 2.12l4.24-4.24l1.41 1.41L5.54 19z"/>
  </svg>
);
TwoToneChecklistIcon.displayName = 'TwoToneChecklistIcon';
export const ChecklistTwoToneIcon = TwoToneChecklistIcon;

export const TwoToneChecklistRtlIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 7H2v2h9V7zm0 8H2v2h9v-2zm5.34-4L12.8 7.46l1.41-1.41l2.12 2.12l4.24-4.24L22 5.34L16.34 11zm0 8l-3.54-3.54l1.41-1.41l2.12 2.12l4.24-4.24L22 13.34L16.34 19z"/>
  </svg>
);
TwoToneChecklistRtlIcon.displayName = 'TwoToneChecklistRtlIcon';
export const ChecklistRtlTwoToneIcon = TwoToneChecklistRtlIcon;

export const TwoToneDataArrayIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15 4v2h3v12h-3v2h5V4zM4 20h5v-2H6V6h3V4H4z"/>
  </svg>
);
TwoToneDataArrayIcon.displayName = 'TwoToneDataArrayIcon';
export const DataArrayTwoToneIcon = TwoToneDataArrayIcon;

export const TwoToneDataObjectIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 7v2c0 .55-.45 1-1 1H2v4h1c.55 0 1 .45 1 1v2c0 1.65 1.35 3 3 3h3v-2H7c-.55 0-1-.45-1-1v-2c0-1.3-.84-2.42-2-2.83v-.34C5.16 11.42 6 10.3 6 9V7c0-.55.45-1 1-1h3V4H7C5.35 4 4 5.35 4 7zm17 3c-.55 0-1-.45-1-1V7c0-1.65-1.35-3-3-3h-3v2h3c.55 0 1 .45 1 1v2c0 1.3.84 2.42 2 2.83v.34c-1.16.41-2 1.52-2 2.83v2c0 .55-.45 1-1 1h-3v2h3c1.65 0 3-1.35 3-3v-2c0-.55.45-1 1-1h1v-4h-1z"/>
  </svg>
);
TwoToneDataObjectIcon.displayName = 'TwoToneDataObjectIcon';
export const DataObjectTwoToneIcon = TwoToneDataObjectIcon;

export const TwoToneDragHandleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 9h16v2H4zm0 4h16v2H4z"/>
  </svg>
);
TwoToneDragHandleIcon.displayName = 'TwoToneDragHandleIcon';
export const DragHandleTwoToneIcon = TwoToneDragHandleIcon;

export const TwoToneDrawIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M14.61 11.81L7.41 19H6v-1.41l7.19-7.2z"/><path fill={color || 'currentColor'} d="M18.85 10.39l1.06-1.06c.78-.78.78-2.05 0-2.83L18.5 5.09c-.78-.78-2.05-.78-2.83 0l-1.06 1.06l4.24 4.24zm-4.24 1.42L7.41 19H6v-1.41l7.19-7.19l1.42 1.41zm-1.42-4.25L4 16.76V21h4.24l9.19-9.19l-4.24-4.25zM19 17.5c0 2.19-2.54 3.5-5 3.5c-.55 0-1-.45-1-1s.45-1 1-1c1.54 0 3-.73 3-1.5c0-.47-.48-.87-1.23-1.2l1.48-1.48c1.07.63 1.75 1.47 1.75 2.68zM4.58 13.35C3.61 12.79 3 12.06 3 11c0-1.8 1.89-2.63 3.56-3.36C7.59 7.18 9 6.56 9 6c0-.41-.78-1-2-1c-1.26 0-1.8.61-1.83.64c-.35.41-.98.46-1.4.12a.992.992 0 0 1-.15-1.38C3.73 4.24 4.76 3 7 3s4 1.32 4 3c0 1.87-1.93 2.72-3.64 3.47C6.42 9.88 5 10.5 5 11c0 .31.43.6 1.07.86l-1.49 1.49z"/>
  </svg>
);
TwoToneDrawIcon.displayName = 'TwoToneDrawIcon';
export const DrawTwoToneIcon = TwoToneDrawIcon;

export const TwoToneEditNoteIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 10h11v2H3v-2zm0-2h11V6H3v2zm0 8h7v-2H3v2zm15.01-3.13l.71-.71a.996.996 0 0 1 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71l-2.12-2.12zm-.71.71l-5.3 5.3V21h2.12l5.3-5.3l-2.12-2.12z"/>
  </svg>
);
TwoToneEditNoteIcon.displayName = 'TwoToneEditNoteIcon';
export const EditNoteTwoToneIcon = TwoToneEditNoteIcon;

export const TwoToneFormatAlignCenterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 3h18v2H3zm4 12h10v2H7zm0-8h10v2H7zm-4 4h18v2H3zm0 8h18v2H3z"/>
  </svg>
);
TwoToneFormatAlignCenterIcon.displayName = 'TwoToneFormatAlignCenterIcon';
export const FormatAlignCenterTwoToneIcon = TwoToneFormatAlignCenterIcon;

export const TwoToneFormatAlignJustifyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 3h18v2H3zm0 8h18v2H3zm0 8h18v2H3zm0-4h18v2H3zm0-8h18v2H3z"/>
  </svg>
);
TwoToneFormatAlignJustifyIcon.displayName = 'TwoToneFormatAlignJustifyIcon';
export const FormatAlignJustifyTwoToneIcon = TwoToneFormatAlignJustifyIcon;

export const TwoToneFormatAlignLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 19h18v2H3zM3 7h12v2H3zm0-4h18v2H3zm0 12h12v2H3zm0-4h18v2H3z"/>
  </svg>
);
TwoToneFormatAlignLeftIcon.displayName = 'TwoToneFormatAlignLeftIcon';
export const FormatAlignLeftTwoToneIcon = TwoToneFormatAlignLeftIcon;

export const TwoToneFormatAlignRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 3h18v2H3zm0 16h18v2H3zm0-8h18v2H3zm6 4h12v2H9zm0-8h12v2H9z"/>
  </svg>
);
TwoToneFormatAlignRightIcon.displayName = 'TwoToneFormatAlignRightIcon';
export const FormatAlignRightTwoToneIcon = TwoToneFormatAlignRightIcon;

export const TwoToneFormatBoldIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.25 8c0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79c0-1.52-.86-2.82-2.15-3.42c.97-.67 1.65-1.77 1.65-2.79zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
  </svg>
);
TwoToneFormatBoldIcon.displayName = 'TwoToneFormatBoldIcon';
export const FormatBoldTwoToneIcon = TwoToneFormatBoldIcon;

export const TwoToneFormatClearIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 8V5H6.39l3 3h1.83l-.55 1.28l2.09 2.1L14.21 8zM3.41 4.86L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21l1.41-1.41z"/>
  </svg>
);
TwoToneFormatClearIcon.displayName = 'TwoToneFormatClearIcon';
export const FormatClearTwoToneIcon = TwoToneFormatClearIcon;

export const TwoToneFormatColorFillIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16.56 8.94L7.62 0L6.21 1.41l2.38 2.38l-5.15 5.15a1.49 1.49 0 0 0 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM5.21 10L10 5.21L14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5zM2 20h20v4H2v-4z"/>
  </svg>
);
TwoToneFormatColorFillIcon.displayName = 'TwoToneFormatColorFillIcon';
export const FormatColorFillTwoToneIcon = TwoToneFormatColorFillIcon;

export const TwoToneFormatColorResetIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M10.93 7.83l4.77 4.77c-.62-1.81-2.17-4.24-3.71-6.24c-.35.47-.71.96-1.06 1.47zM12 18c.96 0 1.83-.36 2.53-.92l-5.72-5.72C8.32 12.38 8 13.31 8 14c0 2.21 1.79 4 4 4z"/><path fill={color || 'currentColor'} d="M12 6.36c1.53 2 3.08 4.43 3.71 6.24l2.23 2.23c.03-.27.06-.55.06-.83c0-3.98-6-10.8-6-10.8s-1.18 1.35-2.5 3.19l1.44 1.44c.34-.51.7-1 1.06-1.47zM5.41 5.14L4 6.55l3.32 3.32C6.55 11.33 6 12.79 6 14c0 3.31 2.69 6 6 6c1.52 0 2.9-.57 3.95-1.5l2.63 2.63L20 19.72L5.41 5.14zM12 18c-2.21 0-4-1.79-4-4c0-.69.32-1.62.81-2.64l5.72 5.72c-.7.56-1.57.92-2.53.92z"/>
  </svg>
);
TwoToneFormatColorResetIcon.displayName = 'TwoToneFormatColorResetIcon';
export const FormatColorResetTwoToneIcon = TwoToneFormatColorResetIcon;

export const TwoToneFormatColorTextIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2 20h20v4H2v-4zm3.49-3h2.42l1.27-3.58h5.65L16.09 17h2.42L13.25 3h-2.5L5.49 17zm4.42-5.61l2.03-5.79h.12l2.03 5.79H9.91z"/>
  </svg>
);
TwoToneFormatColorTextIcon.displayName = 'TwoToneFormatColorTextIcon';
export const FormatColorTextTwoToneIcon = TwoToneFormatColorTextIcon;

export const TwoToneFormatIndentDecreaseIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 16V8l-4 4zm4-9h10v2H11zm0 4h10v2H11zm0 4h10v2H11zm-8 4h18v2H3zM3 3h18v2H3z"/>
  </svg>
);
TwoToneFormatIndentDecreaseIcon.displayName = 'TwoToneFormatIndentDecreaseIcon';
export const FormatIndentDecreaseTwoToneIcon = TwoToneFormatIndentDecreaseIcon;

export const TwoToneFormatIndentIncreaseIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 19h18v2H3zM3 3h18v2H3zm8 4h10v2H11zM3 8v8l4-4zm8 3h10v2H11zm0 4h10v2H11z"/>
  </svg>
);
TwoToneFormatIndentIncreaseIcon.displayName = 'TwoToneFormatIndentIncreaseIcon';
export const FormatIndentIncreaseTwoToneIcon = TwoToneFormatIndentIncreaseIcon;

export const TwoToneFormatItalicIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6 15v3h8v-3h-2.21l3.42-8H18V4h-8v3h2.21l-3.42 8z"/>
  </svg>
);
TwoToneFormatItalicIcon.displayName = 'TwoToneFormatItalicIcon';
export const FormatItalicTwoToneIcon = TwoToneFormatItalicIcon;

export const TwoToneFormatLineSpacingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10 5h12v2H10zm0 12h12v2H10zm-8.5 0L5 20.5L8.5 17H6V7h2.5L5 3.5L1.5 7H4v10zm8.5-6h12v2H10z"/>
  </svg>
);
TwoToneFormatLineSpacingIcon.displayName = 'TwoToneFormatLineSpacingIcon';
export const FormatLineSpacingTwoToneIcon = TwoToneFormatLineSpacingIcon;

export const TwoToneFormatListBulletedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 5h14v2H7z"/><circle cx="4" cy="6" r="1.5"/><path fill={color || 'currentColor'} d="M7 11h14v2H7zm0 6h14v2H7zm-3 2.5c.82 0 1.5-.68 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.68-1.5 1.5s.68 1.5 1.5 1.5z"/><circle cx="4" cy="12" r="1.5"/>
  </svg>
);
TwoToneFormatListBulletedIcon.displayName = 'TwoToneFormatListBulletedIcon';
export const FormatListBulletedTwoToneIcon = TwoToneFormatListBulletedIcon;

export const TwoToneFormatListNumberedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5 13H3.2L5 10.9V10H2v1h1.8L2 13.1v.9h3zm2-8h14v2H7zM5 16H2v1h2v.5H3v1h1v.5H2v1h3zm2 1h14v2H7zM3 8h1V4H2v1h1zm4 3h14v2H7z"/>
  </svg>
);
TwoToneFormatListNumberedIcon.displayName = 'TwoToneFormatListNumberedIcon';
export const FormatListNumberedTwoToneIcon = TwoToneFormatListNumberedIcon;

export const TwoToneFormatListNumberedRtlIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2 11h14v2H2zm16 6h2v.5h-1v1h1v.5h-2v1h3v-4h-3zm0-6h1.8L18 13.1v.9h3v-1h-1.8l1.8-2.1V10h-3zm2-3V4h-2v1h1v3zM2 17h14v2H2zM2 5h14v2H2z"/>
  </svg>
);
TwoToneFormatListNumberedRtlIcon.displayName = 'TwoToneFormatListNumberedRtlIcon';
export const FormatListNumberedRtlTwoToneIcon = TwoToneFormatListNumberedRtlIcon;

export const TwoToneFormatPaintIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M6 4h10v2H6z"/><path fill={color || 'currentColor'} d="M17 2H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3V3c0-.55-.45-1-1-1zm-1 4H6V4h10v2z"/>
  </svg>
);
TwoToneFormatPaintIcon.displayName = 'TwoToneFormatPaintIcon';
export const FormatPaintTwoToneIcon = TwoToneFormatPaintIcon;

export const TwoToneFormatQuoteIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M16.62 16h.76L19 12.76V8h-4v4h3.62zm-10 0h.76L9 12.76V8H5v4h3.62z"/><path fill={color || 'currentColor'} d="M18.62 18L21 13.24V6h-8v8h2.38l-2 4h5.24zM15 12V8h4v4.76L17.38 16h-.76l2-4H15zM3.38 18h5.24L11 13.24V6H3v8h2.38l-2 4zM5 12V8h4v4.76L7.38 16h-.76l2-4H5z"/>
  </svg>
);
TwoToneFormatQuoteIcon.displayName = 'TwoToneFormatQuoteIcon';
export const FormatQuoteTwoToneIcon = TwoToneFormatQuoteIcon;

export const TwoToneFormatShapesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M3 3h2v2H3zm16 16h2v2h-2zm0-16h2v2h-2zM3 19h2v2H3z"/><path fill={color || 'currentColor'} d="M11.29 7l-3.4 9h1.62l.73-2h3.49l.74 2h1.63l-3.41-9h-1.4zm-.6 5.74L12 8.91l1.3 3.83h-2.61zM17 3H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2V1h-6v2zM3 3h2v2H3V3zm2 18H3v-2h2v2zm16 0h-2v-2h2v2zM19 3h2v2h-2V3zm0 14h-2v2H7v-2H5V7h2V5h10v2h2v10z"/>
  </svg>
);
TwoToneFormatShapesIcon.displayName = 'TwoToneFormatShapesIcon';
export const FormatShapesTwoToneIcon = TwoToneFormatShapesIcon;

export const TwoToneFormatSizeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 12h3v7h3v-7h3V9H3zm6-5h5v12h3V7h5V4H9z"/>
  </svg>
);
TwoToneFormatSizeIcon.displayName = 'TwoToneFormatSizeIcon';
export const FormatSizeTwoToneIcon = TwoToneFormatSizeIcon;

export const TwoToneFormatStrikethroughIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 12h18v2H3zm11-2V7h5V4H5v3h5v3zm-4 6h4v3h-4z"/>
  </svg>
);
TwoToneFormatStrikethroughIcon.displayName = 'TwoToneFormatStrikethroughIcon';
export const FormatStrikethroughTwoToneIcon = TwoToneFormatStrikethroughIcon;

export const TwoToneFormatTextdirectionLToRIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M9 8V4c-1.1 0-2 .9-2 2s.9 2 2 2z"/><path fill={color || 'currentColor'} d="M9 10v5h2V4h2v11h2V4h2V2H9C6.79 2 5 3.79 5 6s1.79 4 4 4zm0-6v4c-1.1 0-2-.9-2-2s.9-2 2-2zm12 14l-4-4v3H5v2h12v3z"/>
  </svg>
);
TwoToneFormatTextdirectionLToRIcon.displayName = 'TwoToneFormatTextdirectionLToRIcon';
export const FormatTextdirectionLToRTwoToneIcon = TwoToneFormatTextdirectionLToRIcon;

export const TwoToneFormatTextdirectionRToLIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M8 6c0 1.1.9 2 2 2V4c-1.1 0-2 .9-2 2z"/><path fill={color || 'currentColor'} d="M6 6c0 2.21 1.79 4 4 4v5h2V4h2v11h2V4h2V2h-8C7.79 2 6 3.79 6 6zm4 2c-1.1 0-2-.9-2-2s.9-2 2-2v4zM4 18l4 4v-3h12v-2H8v-3z"/>
  </svg>
);
TwoToneFormatTextdirectionRToLIcon.displayName = 'TwoToneFormatTextdirectionRToLIcon';
export const FormatTextdirectionRToLTwoToneIcon = TwoToneFormatTextdirectionRToLIcon;

export const TwoToneFormatUnderlinedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5 19h14v2H5zM6 3v8c0 3.31 2.69 6 6 6s6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6z"/>
  </svg>
);
TwoToneFormatUnderlinedIcon.displayName = 'TwoToneFormatUnderlinedIcon';
export const FormatUnderlinedTwoToneIcon = TwoToneFormatUnderlinedIcon;

export const TwoToneFunctionsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 17h-7l5-5l-5-5h7V4H6v2l6.5 6L6 18v2h12z"/>
  </svg>
);
TwoToneFunctionsIcon.displayName = 'TwoToneFunctionsIcon';
export const FunctionsTwoToneIcon = TwoToneFunctionsIcon;

export const TwoToneHeightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13 6.99h3L12 3L8 6.99h3v10.02H8L12 21l4-3.99h-3z"/>
  </svg>
);
TwoToneHeightIcon.displayName = 'TwoToneHeightIcon';
export const HeightTwoToneIcon = TwoToneHeightIcon;

export const TwoToneHexagonIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M16.05 19h-8.1l-4.04-7l4.04-7h8.1l4.04 7z"/><path fill={color || 'currentColor'} d="M17.2 3H6.8l-5.2 9l5.2 9h10.4l5.2-9l-5.2-9zm-1.15 16h-8.1l-4.04-7l4.04-7h8.09l4.04 7l-4.03 7z"/>
  </svg>
);
TwoToneHexagonIcon.displayName = 'TwoToneHexagonIcon';
export const HexagonTwoToneIcon = TwoToneHexagonIcon;

export const TwoToneHighlightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M11 20h2v-3.83l3-3V11H8v2.17l3 3z"/><path fill={color || 'currentColor'} d="M6 14l3 3v5h6v-5l3-3V9H6v5zm2-3h8v2.17l-3 3V20h-2v-3.83l-3-3V11zm3-9h2v3h-2zM4.916 4.464l2.12 2.122L5.62 8L3.5 5.877zM18.372 8l-1.414-1.414l2.12-2.12l1.415 1.413z"/>
  </svg>
);
TwoToneHighlightIcon.displayName = 'TwoToneHighlightIcon';
export const HighlightTwoToneIcon = TwoToneHighlightIcon;

export const TwoToneHorizontalDistributeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 22H2V2h2v20zM22 2h-2v20h2V2zm-8.5 5h-3v10h3V7z"/>
  </svg>
);
TwoToneHorizontalDistributeIcon.displayName = 'TwoToneHorizontalDistributeIcon';
export const HorizontalDistributeTwoToneIcon = TwoToneHorizontalDistributeIcon;

export const TwoToneHorizontalRuleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillRule="evenodd" d="M4 11h16v2H4z"/>
  </svg>
);
TwoToneHorizontalRuleIcon.displayName = 'TwoToneHorizontalRuleIcon';
export const HorizontalRuleTwoToneIcon = TwoToneHorizontalRuleIcon;

export const TwoToneInsertChartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M19 5H5v14h14V5zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/><path fill={color || 'currentColor'} d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm2 0h14v14H5V5zm2 5h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>
  </svg>
);
TwoToneInsertChartIcon.displayName = 'TwoToneInsertChartIcon';
export const InsertChartTwoToneIcon = TwoToneInsertChartIcon;

export const TwoToneInsertChartOutlinedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2 2H5V5h14v14zm0-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
  </svg>
);
TwoToneInsertChartOutlinedIcon.displayName = 'TwoToneInsertChartOutlinedIcon';
export const InsertChartOutlinedTwoToneIcon = TwoToneInsertChartOutlinedIcon;

export const TwoToneInsertCommentIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M4 16h14.83L20 17.17V4H4v12zM6 6h12v2H6V6zm0 3h12v2H6V9zm0 3h12v2H6v-2z"/><path fill={color || 'currentColor'} d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm0 2v13.17L18.83 16H4V4h16zM6 12h12v2H6zm0-3h12v2H6zm0-3h12v2H6z"/>
  </svg>
);
TwoToneInsertCommentIcon.displayName = 'TwoToneInsertCommentIcon';
export const InsertCommentTwoToneIcon = TwoToneInsertCommentIcon;

export const TwoToneInsertDriveFileIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M13 4H6v16h12V9h-5z"/><path fill={color || 'currentColor'} d="M20 8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm-2 12H6V4h7v5h5v11z"/>
  </svg>
);
TwoToneInsertDriveFileIcon.displayName = 'TwoToneInsertDriveFileIcon';
export const InsertDriveFileTwoToneIcon = TwoToneInsertDriveFileIcon;

export const TwoToneInsertEmoticonIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8zm3.5 4c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5zm-7 0c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11S7 10.33 7 9.5S7.67 8 8.5 8zm3.5 9.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z"/><circle cx="15.5" cy="9.5" r="1.5"/><path fill={color || 'currentColor'} d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"/><circle cx="8.5" cy="9.5" r="1.5"/><path fill={color || 'currentColor'} d="M12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
  </svg>
);
TwoToneInsertEmoticonIcon.displayName = 'TwoToneInsertEmoticonIcon';
export const InsertEmoticonTwoToneIcon = TwoToneInsertEmoticonIcon;

export const TwoToneInsertInvitationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M19 5H5v2h14z"/><path fill={color || 'currentColor'} d="M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2zM5 7V5h14v2H5zm0 2h14v10H5V9zm7 3h5v5h-5z"/>
  </svg>
);
TwoToneInsertInvitationIcon.displayName = 'TwoToneInsertInvitationIcon';
export const InsertInvitationTwoToneIcon = TwoToneInsertInvitationIcon;

export const TwoToneInsertLinkIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
  </svg>
);
TwoToneInsertLinkIcon.displayName = 'TwoToneInsertLinkIcon';
export const InsertLinkTwoToneIcon = TwoToneInsertLinkIcon;

export const TwoToneInsertPageBreakIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M18 11H6V4h7v5h5z"/><path fill={color || 'currentColor'} d="M18 20H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2v3zM6 4h7v5h5v2h2V8l-6-6H6c-1.1 0-2 .9-2 2v7h2V4zm3 9h6v2H9zm8 0h6v2h-6zM1 13h6v2H1z"/><path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M6 17h12v3H6z"/>
  </svg>
);
TwoToneInsertPageBreakIcon.displayName = 'TwoToneInsertPageBreakIcon';
export const InsertPageBreakTwoToneIcon = TwoToneInsertPageBreakIcon;

export const TwoToneInsertPhotoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M5 19h14V5H5v14zm4-5.86l2.14 2.58l3-3.87L18 17H6l3-3.86z"/><path fill={color || 'currentColor'} d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm16 14H5V5h14v14zm-4.86-7.14l-3 3.86L9 13.14L6 17h12z"/>
  </svg>
);
TwoToneInsertPhotoIcon.displayName = 'TwoToneInsertPhotoIcon';
export const InsertPhotoTwoToneIcon = TwoToneInsertPhotoIcon;

export const TwoToneLineAxisIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 7.43l-1.41-1.41l-4.03 4.53L9.5 4L2 11.51l1.5 1.5l6.14-6.15l5.59 5.18l-1.73 1.95l-4-4L2 17.5L3.5 19l6-6.01l4 4l3.19-3.59l3.9 3.61L22 15.6l-3.98-3.7z"/>
  </svg>
);
TwoToneLineAxisIcon.displayName = 'TwoToneLineAxisIcon';
export const LineAxisTwoToneIcon = TwoToneLineAxisIcon;

export const TwoToneLinearScaleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.5 9.5c-1.03 0-1.9.62-2.29 1.5h-2.92c-.39-.88-1.26-1.5-2.29-1.5s-1.9.62-2.29 1.5H6.79c-.39-.88-1.26-1.5-2.29-1.5a2.5 2.5 0 0 0 0 5c1.03 0 1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5s1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5a2.5 2.5 0 0 0 0-5z"/>
  </svg>
);
TwoToneLinearScaleIcon.displayName = 'TwoToneLinearScaleIcon';
export const LinearScaleTwoToneIcon = TwoToneLinearScaleIcon;

export const TwoToneMarginIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M5 19h14V5H5v14zM15 7h2v2h-2V7zm0 4h2v2h-2v-2zm-4-4h2v2h-2V7zm0 4h2v2h-2v-2zM7 7h2v2H7V7zm0 4h2v2H7v-2z"/><path fill={color || 'currentColor'} d="M7 7h2v2H7zm0 4h2v2H7z"/><path fill={color || 'currentColor'} d="M3 3v18h18V3H3zm16 16H5V5h14v14z"/><path fill={color || 'currentColor'} d="M11 7h2v2h-2zm4 4h2v2h-2zm-4 0h2v2h-2zm4-4h2v2h-2z"/>
  </svg>
);
TwoToneMarginIcon.displayName = 'TwoToneMarginIcon';
export const MarginTwoToneIcon = TwoToneMarginIcon;

export const TwoToneMergeTypeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5.59 19L7 20.41l6-6V8h3.5L12 3.5L7.5 8H11v5.59zm11.407 1.41l-3.408-3.407l1.4-1.407l3.41 3.408z"/>
  </svg>
);
TwoToneMergeTypeIcon.displayName = 'TwoToneMergeTypeIcon';
export const MergeTypeTwoToneIcon = TwoToneMergeTypeIcon;

export const TwoToneModeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M14.06 9.02L5 18.08V19h.92l9.06-9.06z"/><path fill={color || 'currentColor'} d="M18.37 3.29c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34zm-.56 6.65l-3.75-3.75L3 17.25V21h3.75L17.81 9.94zM5 19v-.92l9.06-9.06l.92.92L5.92 19H5z"/>
  </svg>
);
TwoToneModeIcon.displayName = 'TwoToneModeIcon';
export const ModeTwoToneIcon = TwoToneModeIcon;

export const TwoToneModeCommentIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm0 15.17L18.83 16H4V4h16v13.17z"/><path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M4 4v12h14.83L20 17.17V4z"/>
  </svg>
);
TwoToneModeCommentIcon.displayName = 'TwoToneModeCommentIcon';
export const ModeCommentTwoToneIcon = TwoToneModeCommentIcon;

export const TwoToneModeEditIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M5 18.08V19h.92l9.06-9.06l-.92-.92z"/><path fill={color || 'currentColor'} d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06l.92.92L5.92 19zM20.71 5.63l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41z"/>
  </svg>
);
TwoToneModeEditIcon.displayName = 'TwoToneModeEditIcon';
export const ModeEditTwoToneIcon = TwoToneModeEditIcon;

export const TwoToneModeEditOutlineIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M5 18.08V19h.92l9.06-9.06l-.92-.92z"/><path fill={color || 'currentColor'} d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06l.92.92L5.92 19zM20.71 5.63l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41z"/>
  </svg>
);
TwoToneModeEditOutlineIcon.displayName = 'TwoToneModeEditOutlineIcon';
export const ModeEditOutlineTwoToneIcon = TwoToneModeEditOutlineIcon;

export const TwoToneMonetizationOnIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8zm1.23 13.33V19H10.9v-1.69c-1.5-.31-2.77-1.28-2.86-2.97h1.71c.09.92.72 1.64 2.32 1.64c1.71 0 2.1-.86 2.1-1.39c0-.73-.39-1.41-2.34-1.87c-2.17-.53-3.66-1.42-3.66-3.21c0-1.51 1.22-2.48 2.72-2.81V5h2.34v1.71c1.63.39 2.44 1.63 2.49 2.97h-1.71c-.04-.97-.56-1.64-1.94-1.64c-1.31 0-2.1.59-2.1 1.43c0 .73.57 1.22 2.34 1.67c1.77.46 3.66 1.22 3.66 3.42c-.01 1.6-1.21 2.48-2.74 2.77z"/><path fill={color || 'currentColor'} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67c0-.84.79-1.43 2.1-1.43c1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81c0 1.79 1.49 2.69 3.66 3.21c1.95.46 2.34 1.15 2.34 1.87c0 .53-.39 1.39-2.1 1.39c-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77c-.01-2.2-1.9-2.96-3.66-3.42z"/>
  </svg>
);
TwoToneMonetizationOnIcon.displayName = 'TwoToneMonetizationOnIcon';
export const MonetizationOnTwoToneIcon = TwoToneMonetizationOnIcon;

export const TwoToneMoneyOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-.39.08-.75.21-1.1.36l1.51 1.51c.32-.08.69-.13 1.09-.13zM5.47 3.92L4.06 5.33L7.5 8.77c0 2.08 1.56 3.22 3.91 3.91l3.51 3.51c-.34.49-1.05.91-2.42.91c-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c.96-.18 1.83-.55 2.46-1.12l2.22 2.22l1.41-1.41L5.47 3.92z"/>
  </svg>
);
TwoToneMoneyOffIcon.displayName = 'TwoToneMoneyOffIcon';
export const MoneyOffTwoToneIcon = TwoToneMoneyOffIcon;

export const TwoToneMoneyOffCsredIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-.39.08-.75.21-1.1.36l1.51 1.51c.32-.08.69-.13 1.09-.13zM5.47 3.92L4.06 5.33L7.5 8.77c0 2.08 1.56 3.22 3.91 3.91l3.51 3.51c-.34.49-1.05.91-2.42.91c-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c.96-.18 1.83-.55 2.46-1.12l2.22 2.22l1.41-1.41L5.47 3.92z"/>
  </svg>
);
TwoToneMoneyOffCsredIcon.displayName = 'TwoToneMoneyOffCsredIcon';
export const MoneyOffCsredTwoToneIcon = TwoToneMoneyOffCsredIcon;

export const TwoToneMoveDownIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M15 6h5v3h-5z"/><path fill={color || 'currentColor'} d="M3 11c0 2.45 1.76 4.47 4.08 4.91l-1.49-1.49L7 13l4 4.01L7 21l-1.41-1.41l1.58-1.58v-.06A7.007 7.007 0 0 1 1 11c0-3.87 3.13-7 7-7h3v2H8c-2.76 0-5 2.24-5 5zm19 0V4h-9v7h9zm-2-2h-5V6h5v3zm-7 4h9v7h-9z"/>
  </svg>
);
TwoToneMoveDownIcon.displayName = 'TwoToneMoveDownIcon';
export const MoveDownTwoToneIcon = TwoToneMoveDownIcon;

export const TwoToneMoveUpIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M15 15h5v3h-5z"/><path fill={color || 'currentColor'} d="M3 13c0-2.45 1.76-4.47 4.08-4.91l-1.49 1.5L7 11l4-4.01L7 3L5.59 4.41l1.58 1.58v.06A7.007 7.007 0 0 0 1 13c0 3.87 3.13 7 7 7h3v-2H8c-2.76 0-5-2.24-5-5zm10 0v7h9v-7h-9zm7 5h-5v-3h5v3zM13 4h9v7h-9z"/>
  </svg>
);
TwoToneMoveUpIcon.displayName = 'TwoToneMoveUpIcon';
export const MoveUpTwoToneIcon = TwoToneMoveUpIcon;

export const TwoToneMultilineChartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 6.92l-1.41-1.41l-2.85 3.21C15.68 6.4 12.83 5 9.61 5C6.72 5 4.07 6.16 2 8l1.42 1.42C5.12 7.93 7.27 7 9.61 7c2.74 0 5.09 1.26 6.77 3.24l-2.88 3.24l-4-4L2 16.99l1.5 1.5l6-6.01l4 4l4.05-4.55c.75 1.35 1.25 2.9 1.44 4.55H21c-.22-2.3-.95-4.39-2.04-6.14L22 6.92z"/>
  </svg>
);
TwoToneMultilineChartIcon.displayName = 'TwoToneMultilineChartIcon';
export const MultilineChartTwoToneIcon = TwoToneMultilineChartIcon;

export const TwoToneNotesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 11.01L3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z"/>
  </svg>
);
TwoToneNotesIcon.displayName = 'TwoToneNotesIcon';
export const NotesTwoToneIcon = TwoToneNotesIcon;

export const TwoToneNumbersIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20.5 10l.5-2h-4l1-4h-2l-1 4h-4l1-4h-2L9 8H5l-.5 2h4l-1 4h-4L3 16h4l-1 4h2l1-4h4l-1 4h2l1-4h4l.5-2h-4l1-4h4zm-7 4h-4l1-4h4l-1 4z"/>
  </svg>
);
TwoToneNumbersIcon.displayName = 'TwoToneNumbersIcon';
export const NumbersTwoToneIcon = TwoToneNumbersIcon;

export const TwoTonePaddingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M5 19h14V5H5v14zM15 7h2v2h-2V7zm-4 0h2v2h-2V7zM7 7h2v2H7V7z"/><path fill={color || 'currentColor'} d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm16 14H5V5h14v14z"/><path fill={color || 'currentColor'} d="M15 7h2v2h-2zM7 7h2v2H7zm4 0h2v2h-2z"/>
  </svg>
);
TwoTonePaddingIcon.displayName = 'TwoTonePaddingIcon';
export const PaddingTwoToneIcon = TwoTonePaddingIcon;

export const TwoTonePentagonIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M19.63 9.78L16.56 19H7.44L4.37 9.78L12 4.44z"/><path fill={color || 'currentColor'} d="M19.63 9.78L16.56 19H7.44L4.37 9.78L12 4.44l7.63 5.34zM2 9l4 12h12l4-12l-10-7L2 9z"/>
  </svg>
);
TwoTonePentagonIcon.displayName = 'TwoTonePentagonIcon';
export const PentagonTwoToneIcon = TwoTonePentagonIcon;

export const TwoTonePieChartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M4 12c0 4.07 3.06 7.44 7 7.93V4.07C7.06 4.56 4 7.93 4 12zm9 7.93A8.002 8.002 0 0 0 19.93 13H13v6.93zm0-15.86V11h6.93A8.002 8.002 0 0 0 13 4.07z"/><path fill={color || 'currentColor'} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.86-7-7.93s3.06-7.44 7-7.93v15.86zm2 0V13h6.93A8.002 8.002 0 0 1 13 19.93zM13 11V4.07c3.61.45 6.48 3.32 6.93 6.93H13z"/>
  </svg>
);
TwoTonePieChartIcon.displayName = 'TwoTonePieChartIcon';
export const PieChartTwoToneIcon = TwoTonePieChartIcon;

export const TwoTonePieChartOutlineIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm-1 17.94c-3.93-.5-7-3.88-7-7.94s3.07-7.44 7-7.93v15.87zm2-.01V13h6.93A8.002 8.002 0 0 1 13 19.93zM13 11V4.07c3.61.45 6.48 3.33 6.93 6.93H13z"/>
  </svg>
);
TwoTonePieChartOutlineIcon.displayName = 'TwoTonePieChartOutlineIcon';
export const PieChartOutlineTwoToneIcon = TwoTonePieChartOutlineIcon;

export const TwoTonePolylineIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12 4h2v2h-2V4zM7 14H5v-2h2v2zm12 6h-2v-2h2v2z"/><path fill={color || 'currentColor'} d="M15 16v1.26l-6-3v-3.17L11.7 8H16V2h-6v4.9L7.3 10H3v6h5l7 3.5V22h6v-6h-6zM12 4h2v2h-2V4zM7 14H5v-2h2v2zm12 6h-2v-2h2v2z"/>
  </svg>
);
TwoTonePolylineIcon.displayName = 'TwoTonePolylineIcon';
export const PolylineTwoToneIcon = TwoTonePolylineIcon;

export const TwoTonePostAddIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 19.22H5V7h7V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2v7.22z"/><path fill={color || 'currentColor'} d="M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3V2zM7 9h8v2H7zm0 3v2h8v-2h-3zm0 3h8v2H7z"/>
  </svg>
);
TwoTonePostAddIcon.displayName = 'TwoTonePostAddIcon';
export const PostAddTwoToneIcon = TwoTonePostAddIcon;

export const TwoTonePublishIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M9.83 12H11v6h2v-6h1.17L12 9.83z"/><path fill={color || 'currentColor'} d="M5 4h14v2H5zm7 3l-7 7h4v6h6v-6h4l-7-7zm1 5v6h-2v-6H9.83L12 9.83L14.17 12H13z"/>
  </svg>
);
TwoTonePublishIcon.displayName = 'TwoTonePublishIcon';
export const PublishTwoToneIcon = TwoTonePublishIcon;

export const TwoToneQueryStatsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.88 18.47c.44-.7.7-1.51.7-2.39c0-2.49-2.01-4.5-4.5-4.5s-4.5 2.01-4.5 4.5s2.01 4.5 4.49 4.5c.88 0 1.7-.26 2.39-.7L21.58 23L23 21.58l-3.12-3.11zm-3.8.11a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5zm-.36-8.5c-.74.02-1.45.18-2.1.45l-.55-.83l-3.8 6.18l-3.01-3.52l-3.63 5.81L1 17l5-8l3 3.5L13 6l2.72 4.08zm2.59.5c-.64-.28-1.33-.45-2.05-.49L21.38 2L23 3.18l-4.69 7.4z"/>
  </svg>
);
TwoToneQueryStatsIcon.displayName = 'TwoToneQueryStatsIcon';
export const QueryStatsTwoToneIcon = TwoToneQueryStatsIcon;

export const TwoToneRectangleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M4 6h16v12H4z"/><path fill={color || 'currentColor'} d="M2 4v16h20V4H2zm18 14H4V6h16v12z"/>
  </svg>
);
TwoToneRectangleIcon.displayName = 'TwoToneRectangleIcon';
export const RectangleTwoToneIcon = TwoToneRectangleIcon;

export const TwoToneScatterPlotIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="11" cy="6" fillOpacity={fillOpacity ?? 0.3} r="2"/><circle cx="16.6" cy="17.6" fillOpacity={fillOpacity ?? 0.3} r="2"/><circle cx="7" cy="14" fillOpacity={fillOpacity ?? 0.3} r="2"/><path fill={color || 'currentColor'} d="M7 10c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2zm8-10c0-2.21-1.79-4-4-4S7 3.79 7 6s1.79 4 4 4s4-1.79 4-4zm-4 2c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2zm5.6 5.6c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z"/>
  </svg>
);
TwoToneScatterPlotIcon.displayName = 'TwoToneScatterPlotIcon';
export const ScatterPlotTwoToneIcon = TwoToneScatterPlotIcon;

export const TwoToneSchemaIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M6 3h3v2H6V3zm3 18H6v-2h3v2zm0-8H6v-2h3v2zm10 0h-3v-2h3v2z"/><path fill={color || 'currentColor'} d="M14 9v2h-3V9H8.5V7H11V1H4v6h2.5v2H4v6h2.5v2H4v6h7v-6H8.5v-2H11v-2h3v2h7V9h-7zM6 3h3v2H6V3zm3 18H6v-2h3v2zm0-8H6v-2h3v2zm10 0h-3v-2h3v2z"/>
  </svg>
);
TwoToneSchemaIcon.displayName = 'TwoToneSchemaIcon';
export const SchemaTwoToneIcon = TwoToneSchemaIcon;

export const TwoToneScoreIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M5 19h8l-4-4zm0-2.5l4-4l4 4l6-6V5H5v11.5zM12 6h1.5v3l2-3h1.7l-2 3l2 3h-1.7l-2-3v3H12V6zM7 8.25h2.5V7.5H7V6h4v3.75H8.5v.75H11V12H7V8.25zM19 19v-6l-6 6z"/><path fill={color || 'currentColor'} d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5l4-4l4 4l6-6v6zm0-8.5l-6 6l-4-4l-4 4V5h14v5.5zM13.5 9V6H12v6h1.5zm3.7 3l-2-3l2-3h-1.7l-2 3l2 3zM11 10.5H8.5v-.75H11V6H7v1.5h2.5v.75H7V12h4z"/>
  </svg>
);
TwoToneScoreIcon.displayName = 'TwoToneScoreIcon';
export const ScoreTwoToneIcon = TwoToneScoreIcon;

export const TwoToneShapeLineIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M16 16h5v5h-5z"/><circle cx="6" cy="6" fillOpacity={fillOpacity ?? 0.3} r="3"/><path fill={color || 'currentColor'} d="M6 11c2.76 0 5-2.24 5-5S8.76 1 6 1S1 3.24 1 6s2.24 5 5 5zm0-8c1.65 0 3 1.35 3 3S7.65 9 6 9S3 7.65 3 6s1.35-3 3-3zm15 11h-5c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm0 7h-5v-5h5v5z"/><path fill={color || 'currentColor'} d="M17.71 7.7c.4.19.83.3 1.29.3c1.65 0 3-1.35 3-3s-1.35-3-3-3s-3 1.35-3 3c0 .46.11.89.3 1.29L6.29 16.3c-.4-.19-.83-.3-1.29-.3c-1.65 0-3 1.35-3 3s1.35 3 3 3s3-1.35 3-3c0-.46-.11-.89-.3-1.29L17.71 7.7z"/>
  </svg>
);
TwoToneShapeLineIcon.displayName = 'TwoToneShapeLineIcon';
export const ShapeLineTwoToneIcon = TwoToneShapeLineIcon;

export const TwoToneShortTextIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 9h16v2H4zm0 4h10v2H4z"/>
  </svg>
);
TwoToneShortTextIcon.displayName = 'TwoToneShortTextIcon';
export const ShortTextTwoToneIcon = TwoToneShortTextIcon;

export const TwoToneShowChartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13.5 13.48l-4-4L2 16.99l1.5 1.5l6-6.01l4 4L22 6.92l-1.41-1.41z"/>
  </svg>
);
TwoToneShowChartIcon.displayName = 'TwoToneShowChartIcon';
export const ShowChartTwoToneIcon = TwoToneShowChartIcon;

export const TwoToneSpaceBarIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 13H6V9H4v6h16V9h-2z"/>
  </svg>
);
TwoToneSpaceBarIcon.displayName = 'TwoToneSpaceBarIcon';
export const SpaceBarTwoToneIcon = TwoToneSpaceBarIcon;

export const TwoToneSquareIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M5 5h14v14H5z"/><path fill={color || 'currentColor'} d="M3 3v18h18V3H3zm16 16H5V5h14v14z"/>
  </svg>
);
TwoToneSquareIcon.displayName = 'TwoToneSquareIcon';
export const SquareTwoToneIcon = TwoToneSquareIcon;

export const TwoToneStackedLineChartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2 19.99l7.5-7.51l4 4l7.09-7.97L22 9.92l-8.5 9.56l-4-4l-6 6.01l-1.5-1.5zm1.5-4.5l6-6.01l4 4L22 3.92l-1.41-1.41l-7.09 7.97l-4-4L2 13.99l1.5 1.5z"/>
  </svg>
);
TwoToneStackedLineChartIcon.displayName = 'TwoToneStackedLineChartIcon';
export const StackedLineChartTwoToneIcon = TwoToneStackedLineChartIcon;

export const TwoToneStrikethroughSIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10.44 5.88c.19-.15.43-.27.72-.36c.29-.09.64-.13 1.03-.13c.4 0 .76.06 1.06.16c.3.11.55.25.75.44s.35.41.44.68c.1.26.15.54.15.85h3.01c0-.66-.13-1.26-.38-1.81s-.61-1.03-1.08-1.43a4.94 4.94 0 0 0-1.69-.94c-.67-.23-1.4-.34-2.21-.34c-.79 0-1.52.1-2.18.29c-.65.2-1.22.48-1.7.83c-.48.36-.85.79-1.11 1.29c-.27.51-.4 1.06-.4 1.67c0 .64.13 1.19.39 1.67c.04.08.1.17.15.25H12c-.64-.22-1.03-.45-1.41-.7c-.49-.33-.74-.73-.74-1.21c0-.23.05-.45.15-.66s.25-.39.44-.55zM3 12h9.62c.18.07.4.14.55.2c.37.17.66.34.87.51c.21.17.35.36.43.57c.07.2.11.43.11.69c0 .23-.05.45-.14.66c-.09.2-.23.38-.42.53c-.19.15-.42.26-.71.35c-.29.08-.63.13-1.01.13c-.43 0-.83-.04-1.18-.13s-.66-.23-.91-.42s-.45-.44-.59-.75s-.25-.76-.25-1.21H6.4c0 .55.08 1.13.24 1.58c.16.45.37.85.65 1.21c.28.35.6.66.98.92c.37.26.78.48 1.22.65s.9.3 1.38.39c.48.08.96.13 1.44.13c.8 0 1.53-.09 2.18-.28c.65-.19 1.21-.45 1.67-.79c.46-.34.82-.77 1.07-1.27s.38-1.07.38-1.71c0-.6-.1-1.14-.31-1.61c-.05-.11-.11-.23-.17-.33H21V10H3v2z"/>
  </svg>
);
TwoToneStrikethroughSIcon.displayName = 'TwoToneStrikethroughSIcon';
export const StrikethroughSTwoToneIcon = TwoToneStrikethroughSIcon;

export const TwoToneSubscriptIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 18h-2v1h3v1h-4v-2c0-.55.45-1 1-1h2v-1h-3v-1h3c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1zM5.88 18h2.66l3.4-5.42h.12l3.4 5.42h2.66l-4.65-7.27L17.81 4h-2.68l-3.07 4.99h-.12L8.85 4H6.19l4.32 6.73L5.88 18z"/>
  </svg>
);
TwoToneSubscriptIcon.displayName = 'TwoToneSubscriptIcon';
export const SubscriptTwoToneIcon = TwoToneSubscriptIcon;

export const TwoToneSuperscriptIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 7h-2v1h3v1h-4V7c0-.55.45-1 1-1h2V5h-3V4h3c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1zM5.88 20h2.66l3.4-5.42h.12l3.4 5.42h2.66l-4.65-7.27L17.81 6h-2.68l-3.07 4.99h-.12L8.85 6H6.19l4.32 6.73L5.88 20z"/>
  </svg>
);
TwoToneSuperscriptIcon.displayName = 'TwoToneSuperscriptIcon';
export const SuperscriptTwoToneIcon = TwoToneSuperscriptIcon;

export const TwoToneTableChartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M5 5h15v3H5zm12 5h3v9h-3zm-7 0h5v9h-5zm-5 0h3v9H5z"/><path fill={color || 'currentColor'} d="M20 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 19H5v-9h3v9zm7 0h-5v-9h5v9zm5 0h-3v-9h3v9zm0-11H5V5h15v3z"/>
  </svg>
);
TwoToneTableChartIcon.displayName = 'TwoToneTableChartIcon';
export const TableChartTwoToneIcon = TwoToneTableChartIcon;

export const TwoToneTableRowsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M19 5v3H5V5h14zm0 5v4H5v-4h14zM5 19v-3h14v3H5z"/><path fill={color || 'currentColor'} d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H5V5h14zm0 5v4H5v-4h14zM5 19v-3h14v3H5z"/>
  </svg>
);
TwoToneTableRowsIcon.displayName = 'TwoToneTableRowsIcon';
export const TableRowsTwoToneIcon = TwoToneTableRowsIcon;

export const TwoToneTextDecreaseIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M.99 19h2.42l1.27-3.58h5.65L11.59 19h2.42L8.75 5h-2.5L.99 19zm4.42-5.61L7.44 7.6h.12l2.03 5.79H5.41zM23 11v2h-8v-2h8z"/>
  </svg>
);
TwoToneTextDecreaseIcon.displayName = 'TwoToneTextDecreaseIcon';
export const TextDecreaseTwoToneIcon = TwoToneTextDecreaseIcon;

export const TwoToneTextFieldsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12.5 12h3v7h3v-7h3V9h-9zm3-8h-13v3h5v12h3V7h5z"/>
  </svg>
);
TwoToneTextFieldsIcon.displayName = 'TwoToneTextFieldsIcon';
export const TextFieldsTwoToneIcon = TwoToneTextFieldsIcon;

export const TwoToneTextIncreaseIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M1.99 19h2.42l1.27-3.58h5.65L12.59 19h2.42L9.75 5h-2.5L1.99 19zm4.42-5.61L8.44 7.6h.12l2.03 5.79H6.41zM20 11h3v2h-3v3h-2v-3h-3v-2h3V8h2v3z"/>
  </svg>
);
TwoToneTextIncreaseIcon.displayName = 'TwoToneTextIncreaseIcon';
export const TextIncreaseTwoToneIcon = TwoToneTextIncreaseIcon;

export const TwoToneTitleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5 7h5.5v12h3V7H19V4H5z"/>
  </svg>
);
TwoToneTitleIcon.displayName = 'TwoToneTitleIcon';
export const TitleTwoToneIcon = TwoToneTitleIcon;

export const TwoToneTypeSpecimenIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M14.04 7.17h-.08l-1.31 3.72h2.69z"/><path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M8 16h12V4H8v12zm5.2-10.5h1.61l3.38 9h-1.56l-.8-2.3H12.2l-.82 2.3H9.81l3.39-9z"/><path fill={color || 'currentColor'} d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"/><path fill={color || 'currentColor'} d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/><path fill={color || 'currentColor'} d="M12.19 12.2h3.63l.8 2.3h1.56l-3.38-9h-1.6l-3.38 9h1.56l.81-2.3zm1.77-5.03h.08l1.31 3.72h-2.69l1.3-3.72z"/>
  </svg>
);
TwoToneTypeSpecimenIcon.displayName = 'TwoToneTypeSpecimenIcon';
export const TypeSpecimenTwoToneIcon = TwoToneTypeSpecimenIcon;

export const TwoToneVerticalAlignBottomIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 3v10H8l4 4l4-4h-3V3zM4 19h16v2H4z"/>
  </svg>
);
TwoToneVerticalAlignBottomIcon.displayName = 'TwoToneVerticalAlignBottomIcon';
export const VerticalAlignBottomTwoToneIcon = TwoToneVerticalAlignBottomIcon;

export const TwoToneVerticalAlignCenterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 1v4H8l4 4l4-4h-3V1zM4 11h16v2H4zm4 8h3v4h2v-4h3l-4-4z"/>
  </svg>
);
TwoToneVerticalAlignCenterIcon.displayName = 'TwoToneVerticalAlignCenterIcon';
export const VerticalAlignCenterTwoToneIcon = TwoToneVerticalAlignCenterIcon;

export const TwoToneVerticalAlignTopIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 3h16v2H4zm4 8h3v10h2V11h3l-4-4z"/>
  </svg>
);
TwoToneVerticalAlignTopIcon.displayName = 'TwoToneVerticalAlignTopIcon';
export const VerticalAlignTopTwoToneIcon = TwoToneVerticalAlignTopIcon;

export const TwoToneVerticalDistributeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 2v2H2V2h20zM7 10.5v3h10v-3H7zM2 20v2h20v-2H2z"/>
  </svg>
);
TwoToneVerticalDistributeIcon.displayName = 'TwoToneVerticalDistributeIcon';
export const VerticalDistributeTwoToneIcon = TwoToneVerticalDistributeIcon;

export const TwoToneWrapTextIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 17h6v2H4zm13-6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4zM4 5h16v2H4z"/>
  </svg>
);
TwoToneWrapTextIcon.displayName = 'TwoToneWrapTextIcon';
export const WrapTextTwoToneIcon = TwoToneWrapTextIcon;

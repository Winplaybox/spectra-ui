import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '@winplaybox/primitives';
import { getTokens } from '@winplaybox/tokens';

// Safe dynamic resolution of react-native-svg
let SvgComponent: any = null;
let PathComponent: any = null;
let GComponent: any = null;

try {
  const rns = require('react-native-svg');
  SvgComponent = rns.Svg || rns.default;
  PathComponent = rns.Path;
  GComponent = rns.G;
} catch (e) {
  // Graceful fallback when react-native-svg is mock or not yet linked
}

export interface NativeIconProps {
  /**
   * Name of a registered Spectra UI icon glyph.
   */
  name?: string;
  /**
   * Explicit pixel size of icon (width & height). Defaults to 24.
   */
  size?: number;
  /**
   * Color override. Defaults to currentColor / active theme text primary.
   */
  color?: string;
  /**
   * SVG viewBox attribute. Defaults to "0 0 24 24".
   */
  viewBox?: string;
  /**
   * Custom SVG path elements or children.
   */
  children?: React.ReactNode;
  /**
   * Additional style on icon container wrapper.
   */
  style?: ViewStyle;
  testID?: string;
  accessibilityLabel?: string;
}

export interface SvgIconProps extends NativeIconProps {
  path?: string | React.ReactNode;
}

/**
 * Low-level SvgIcon container supporting custom SVG paths and react-native-svg.
 */
export const SvgIcon: React.FC<SvgIconProps> = ({
  size = 24,
  color,
  viewBox = '0 0 24 24',
  path,
  children,
  style,
  testID,
  accessibilityLabel,
}) => {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);
  const resolvedColor = color || tokens['color-semantic-text-primary'] || '#ffffff';

  const renderContent = () => {
    if (!SvgComponent || !PathComponent) {
      return null;
    }

    if (children) {
      return (
        <SvgComponent
          width={size}
          height={size}
          viewBox={viewBox}
          fill="none"
          testID={testID ? `${testID}-svg` : undefined}
        >
          {typeof children === 'function' ? (children as any)({ color: resolvedColor, size }) : children}
        </SvgComponent>
      );
    }

    if (typeof path === 'string') {
      return (
        <SvgComponent
          width={size}
          height={size}
          viewBox={viewBox}
          fill="none"
          testID={testID ? `${testID}-svg` : undefined}
        >
          <PathComponent d={path} fill={resolvedColor} />
        </SvgComponent>
      );
    }

    if (path) {
      return (
        <SvgComponent
          width={size}
          height={size}
          viewBox={viewBox}
          fill="none"
          testID={testID ? `${testID}-svg` : undefined}
        >
          {path}
        </SvgComponent>
      );
    }

    return null;
  };

  return (
    <View
      accessibilityRole="image"
      accessibilityLabel={accessibilityLabel}
      style={[
        styles.container,
        {
          width: size,
          height: size,
        },
        style,
      ]}
      testID={testID}
    >
      {renderContent()}
    </View>
  );
};

/**
 * Factory utility to create reusable typed SVG icon components.
 * Matches MUI createSvgIcon pattern for universal extensibility.
 */
export function createSvgIcon(
  pathDataOrNode: string | React.ReactNode,
  displayName: string,
  defaultViewBox: string = '0 0 24 24'
): React.FC<NativeIconProps> {
  const Component: React.FC<NativeIconProps> = (props) => {
    const { colorScheme } = useTheme();
    const tokens = getTokens(colorScheme);
    const resolvedColor = props.color || tokens['color-semantic-text-primary'] || '#ffffff';

    return (
      <SvgIcon
        viewBox={defaultViewBox}
        {...props}
        path={
          typeof pathDataOrNode === 'string' && PathComponent ? (
            <PathComponent d={pathDataOrNode} fill={resolvedColor} />
          ) : (
            pathDataOrNode
          )
        }
      />
    );
  };

  Component.displayName = displayName;
  return Component;
}

// ============================================================================
// Core Curated Spectra UI Mobile SVG Glyphs
// ============================================================================

export const HomeIcon = createSvgIcon('M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z', 'HomeIcon');
export const HomeOutlineIcon = createSvgIcon('M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z', 'HomeOutlineIcon');

export const TimeIcon = createSvgIcon('M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z', 'TimeIcon');
export const TimeOutlineIcon = TimeIcon;

export const SettingsIcon = createSvgIcon('M19.14 12.94c.04-.3.06-.61.06-.94c0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6s3.6 1.62 3.6 3.6s-1.62 3.6-3.6 3.6z', 'SettingsIcon');
export const SettingsOutlineIcon = createSvgIcon('M19.43 12.98c.04-.32.07-.64.07-.98c0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1a.566.566 0 0 0-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98c0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03c.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73c0 .21-.02.43-.05.73l-.14 1.13l.89.7l1.08.84l-.7 1.21l-1.27-.51l-1.04-.42l-.9.68c-.43.32-.84.56-1.25.73l-1.06.43l-.16 1.13l-.2 1.35h-1.4l-.19-1.35l-.16-1.13l-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7l-1.06.43l-1.27.51l-.7-1.21l1.08-.84l.89-.7l-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13l-.89-.7l-1.08-.84l.7-1.21l1.27.51l1.04.42l.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43l.16-1.13l.2-1.35h1.39l.19 1.35l.16 1.13l1.06.43c.43.18.83.41 1.23.71l.91.7l1.06-.43l1.27-.51l.7 1.21l-1.07.85l-.89.7l.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z', 'SettingsOutlineIcon');

export const ArrowBackIcon = createSvgIcon('M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z', 'ArrowBackIcon');
export const ChevronForwardIcon = createSvgIcon('M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z', 'ChevronForwardIcon');

export const CloseIcon = createSvgIcon('M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z', 'CloseIcon');
export const CloseCircleIcon = createSvgIcon('M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z', 'CloseCircleIcon');

export const RefreshIcon = createSvgIcon('M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z', 'RefreshIcon');
export const StopCircleIcon = createSvgIcon('M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 14H8V8h8v8z', 'StopCircleIcon');

export const SearchIcon = createSvgIcon('M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z', 'SearchIcon');
export const GridIcon = createSvgIcon('M4 11h6V5H4v6zm0 7h6v-6H4v6zm8 0h6v-6h-6v6zm0-13v6h6V5h-6z', 'GridIcon');
export const DesktopIcon = createSvgIcon('M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z', 'DesktopIcon');
export const PhoneIcon = createSvgIcon('M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z', 'PhoneIcon');

export const TrashIcon = createSvgIcon('M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z', 'TrashIcon');
export const VolumeHighIcon = createSvgIcon('M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z', 'VolumeHighIcon');
export const VolumeMuteIcon = createSvgIcon('M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z', 'VolumeMuteIcon');

export const GlobeIcon = createSvgIcon('M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z', 'GlobeIcon');
export const CopyIcon = createSvgIcon('M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z', 'CopyIcon');
export const ShareIcon = createSvgIcon('M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z', 'ShareIcon');
export const InfoIcon = createSvgIcon('M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z', 'InfoIcon');
export const EyeIcon = createSvgIcon('M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z', 'EyeIcon');
export const EllipsisVerticalIcon = createSvgIcon('M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z', 'EllipsisVerticalIcon');
export const CheckmarkCircleIcon = createSvgIcon('M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.51 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z', 'CheckmarkCircleIcon');
export const CheckmarkDoneIcon = createSvgIcon('M0.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41zm22.17-5.82L11 19.17l-4.17-4.17-1.42 1.41 5.59 5.59 13-13-1.41-1.41z', 'CheckmarkDoneIcon');

export const MoonIcon = createSvgIcon('M12.3 2a10 10 0 0 0-1.9 19.8 10 10 0 0 0 10.9-10.9A10.02 10.02 0 0 1 12.3 2z', 'MoonIcon');
export const SunIcon = createSvgIcon('M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1z', 'SunIcon');
export const StarIcon = createSvgIcon('M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z', 'StarIcon');
export const OpenIcon = createSvgIcon('M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z', 'OpenIcon');
export const ShuffleIcon = createSvgIcon('M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z', 'ShuffleIcon');
export const WarningIcon = createSvgIcon('M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z', 'WarningIcon');
export const PlayCircleIcon = createSvgIcon('M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z', 'PlayCircleIcon');
export const FilmIcon = createSvgIcon('M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z', 'FilmIcon');

export const BookmarkIcon = createSvgIcon('M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z', 'BookmarkIcon');
export const BookmarkOutlineIcon = createSvgIcon('M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z', 'BookmarkOutlineIcon');
export const CalendarIcon = createSvgIcon('M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z', 'CalendarIcon');
export const NewspaperIcon = createSvgIcon('M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H5c-.55 0-1-.45-1-1V5h16v13c0 .55-.45 1-1 1zm-8-8H6v-2h5v2zm7 4H6v-2h11v2zm0-4h-4v-2h4v2z', 'NewspaperIcon');
export const GameControllerIcon = createSvgIcon('M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3-3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z', 'GameControllerIcon');
export const AddIcon = createSvgIcon('M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z', 'AddIcon');
export const ChevronDownIcon = createSvgIcon('M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z', 'ChevronDownIcon');
export const CheckmarkIcon = createSvgIcon('M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z', 'CheckmarkIcon');
export const OptionsIcon = createSvgIcon('M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z', 'OptionsIcon');

// Name registry for dynamic <Icon name="..." /> dispatch
const iconRegistry: Record<string, React.FC<NativeIconProps>> = {
  // Navigation / Tabs
  home: HomeIcon,
  'home-outline': HomeOutlineIcon,
  time: TimeIcon,
  'time-outline': TimeOutlineIcon,
  settings: SettingsIcon,
  'settings-outline': SettingsOutlineIcon,

  // General Actions
  'arrow-back': ArrowBackIcon,
  'chevron-forward': ChevronForwardIcon,
  close: CloseIcon,
  'close-circle': CloseCircleIcon,
  refresh: RefreshIcon,
  'refresh-outline': RefreshIcon,
  'stop-circle': StopCircleIcon,
  'stop-circle-outline': StopCircleIcon,
  search: SearchIcon,
  'search-outline': SearchIcon,
  grid: GridIcon,
  'grid-outline': GridIcon,
  desktop: DesktopIcon,
  'desktop-outline': DesktopIcon,
  'hardware-chip': DesktopIcon,
  'hardware-chip-outline': DesktopIcon,
  phone: PhoneIcon,
  'phone-portrait-outline': PhoneIcon,
  trash: TrashIcon,
  'trash-outline': TrashIcon,
  'volume-high': VolumeHighIcon,
  'volume-high-outline': VolumeHighIcon,
  'volume-mute': VolumeMuteIcon,
  'volume-mute-outline': VolumeMuteIcon,
  globe: GlobeIcon,
  'globe-outline': GlobeIcon,
  copy: CopyIcon,
  'copy-outline': CopyIcon,
  share: ShareIcon,
  'share-social-outline': ShareIcon,
  info: InfoIcon,
  'information-circle': InfoIcon,
  'information-circle-outline': InfoIcon,
  eye: EyeIcon,
  'eye-outline': EyeIcon,
  'ellipsis-vertical': EllipsisVerticalIcon,
  'checkmark-circle': CheckmarkCircleIcon,
  'checkmark-done-circle': CheckmarkDoneIcon,
  'checkmark-done-circle-outline': CheckmarkDoneIcon,
  'ellipse-outline': SettingsOutlineIcon,
  moon: MoonIcon,
  'moon-outline': MoonIcon,
  sunny: SunIcon,
  'sunny-outline': SunIcon,
  star: StarIcon,
  'star-outline': StarIcon,
  open: OpenIcon,
  'open-outline': OpenIcon,
  shuffle: ShuffleIcon,
  warning: WarningIcon,
  'warning-outline': WarningIcon,
  'play-circle-outline': PlayCircleIcon,
  'film-outline': FilmIcon,
  'apps-outline': GridIcon,
  bookmark: BookmarkIcon,
  'bookmark-outline': BookmarkOutlineIcon,
  calendar: CalendarIcon,
  'calendar-outline': CalendarIcon,
  newspaper: NewspaperIcon,
  'newspaper-outline': NewspaperIcon,
  'game-controller': GameControllerIcon,
  'game-controller-outline': GameControllerIcon,
  add: AddIcon,
  'chevron-down': ChevronDownIcon,
  checkmark: CheckmarkIcon,
  options: OptionsIcon,
  'options-outline': OptionsIcon,
  earth: GlobeIcon,
  'earth-outline': GlobeIcon,
  play: PlayCircleIcon,
};

/**
 * Register custom SVG icons dynamically into the Spectra UI registry.
 */
export function registerIcon(name: string, component: React.FC<NativeIconProps>) {
  iconRegistry[name] = component;
}

/**
 * Universal Spectra UI Native Icon Component
 * Seamlessly resolves registered vector names or renders custom SVG children.
 */
export const Icon: React.FC<NativeIconProps> = ({ name, ...props }) => {
  if (name && iconRegistry[name]) {
    const Component = iconRegistry[name];
    return <Component {...props} />;
  }

  // Fallback to SvgIcon container if custom children / paths are passed
  return <SvgIcon {...props} />;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React, { useState, forwardRef } from 'react';
import { UserIcon } from '@winplaybox/icons';
import * as styles from './Avatar.css';

export type AvatarNamedSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarNumericSize =
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 48
  | 56
  | 64
  | 72
  | 96
  | 120
  | 128;
export type AvatarSize = AvatarNamedSize | AvatarNumericSize;

export type AvatarShape = 'circular' | 'circle' | 'square';

export type AvatarNamedColor =
  | 'neutral'
  | 'brand'
  | 'colorful'
  | 'dark-red'
  | 'cranberry'
  | 'red'
  | 'pumpkin'
  | 'peach'
  | 'marigold'
  | 'gold'
  | 'brass'
  | 'brown'
  | 'forest'
  | 'seafoam'
  | 'dark-green'
  | 'light-teal'
  | 'teal'
  | 'steel'
  | 'blue'
  | 'royal-blue'
  | 'cornflower'
  | 'navy'
  | 'lavender'
  | 'purple'
  | 'grape'
  | 'lilac'
  | 'pink'
  | 'magenta'
  | 'plum'
  | 'beige'
  | 'mink'
  | 'platinum'
  | 'anchor';

export type AvatarStatus =
  | 'available'
  | 'online'
  | 'busy'
  | 'away'
  | 'dnd'
  | 'do-not-disturb'
  | 'out-of-office'
  | 'oof'
  | 'offline'
  | 'in-meeting'
  | 'meeting'
  | 'focus'
  | 'idle'
  | 'invisible'
  | 'streaming'
  | 'unknown';

export type AvatarActive = 'active' | 'inactive' | 'unset';
export type AvatarActiveAppearance = 'ring' | 'ring-shadow' | 'shadow';
export type AvatarStatusPosition = 'bottom-end' | 'top-end';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The source URL of the avatar image. */
  src?: string;
  /** Alt text for screen readers when image is present. Defaults to name. */
  alt?: string;
  /** The name of the person or entity, used to derive initials, accessible label, and colorful palette. */
  name?: string;
  /** Custom explicit initials string (defaults to computing from `name`). */
  initials?: string;
  /** Sizing scale: supports discrete pixel dimensions (16..128) or standard named keys ('xs'..'xl'). Default is 40 / 'md'. */
  size?: AvatarSize;
  /** Visual silhouette: 'circular' (rounded 50%) or 'square' (rounded soft rectangle). Default is 'circular'. */
  shape?: AvatarShape;
  /** Color theme for initials/fallback: 'neutral', 'brand', 'colorful' (hash-based by name), or specific named color. Default is 'neutral'. */
  color?: AvatarNamedColor;
  /** User activity / presence indicator state. */
  status?: AvatarStatus;
  /** Whether user is marked Out of Office. */
  outOfOffice?: boolean;
  /** Placement of the status indicator badge: 'bottom-end' (default) or 'top-end'. */
  statusPosition?: AvatarStatusPosition;
  /** Active status halo (e.g. speaking in call, live room highlight). Default is 'unset'. */
  active?: AvatarActive;
  /** Appearance style of the active halo. Default is 'ring'. */
  activeAppearance?: AvatarActiveAppearance;
  /** Custom fallback icon (defaults to UserIcon). */
  icon?: React.ReactNode;
  /** Custom badge slot replacing or augmenting standard status dot. */
  badge?: React.ReactNode;
}

const COLORFUL_PALETTES = [
  { bg: '#E0F2FE', text: '#0369A1', border: '#BAE6FD' }, // Sky
  { bg: '#FEE2E2', text: '#B91C1C', border: '#FECACA' }, // Red / Cranberry
  { bg: '#FEF3C7', text: '#B45309', border: '#FDE68A' }, // Amber / Gold
  { bg: '#DCFCE7', text: '#15803D', border: '#BBF7D0' }, // Green / Forest
  { bg: '#F3E8FF', text: '#7E22CE', border: '#E9D5FF' }, // Purple
  { bg: '#FCE7F3', text: '#BE185D', border: '#FBCFE8' }, // Pink
  { bg: '#E0E7FF', text: '#4338CA', border: '#C7D2FE' }, // Indigo
  { bg: '#CCFBF1', text: '#0F766E', border: '#99F6E4' }, // Teal
  { bg: '#FFEDD5', text: '#C2410C', border: '#FED7AA' }, // Orange / Pumpkin
  { bg: '#EDE9FE', text: '#6D28D9', border: '#DDD6FE' }, // Lilac
  { bg: '#F1F5F9', text: '#334155', border: '#CBD5E1' }, // Steel / Slate
];

function getHashColor(name?: string) {
  if (!name) return COLORFUL_PALETTES[0];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % COLORFUL_PALETTES.length;
  return COLORFUL_PALETTES[index];
}

function getInitials(name?: string): string {
  if (!name) return '';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function getIconSize(size: AvatarSize): number {
  switch (size) {
    case 16:
      return 10;
    case 20:
      return 12;
    case 24:
    case 'xs':
      return 14;
    case 28:
      return 16;
    case 32:
    case 'sm':
      return 18;
    case 36:
      return 20;
    case 40:
    case 'md':
      return 22;
    case 48:
      return 26;
    case 56:
    case 'lg':
      return 30;
    case 64:
    case 'xl':
      return 34;
    case 72:
      return 38;
    case 96:
      return 48;
    case 120:
      return 56;
    case 128:
      return 64;
    default:
      return 22;
  }
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt,
      name,
      initials: explicitInitials,
      size = 40,
      shape = 'circular',
      color = 'neutral',
      status,
      outOfOffice = false,
      statusPosition = 'bottom-end',
      active = 'unset',
      activeAppearance = 'ring',
      icon,
      badge,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const [hasError, setHasError] = useState(false);
    const computedInitials = explicitInitials || getInitials(name);
    const iconDimension = getIconSize(size);

    const isSquare = shape === 'square';
    const shapeClass = isSquare ? styles.shapeSquare : styles.shapeCircular;
    const sizeClass = styles.sizeVariant[size as keyof typeof styles.sizeVariant] || styles.sizeVariant[40];

    // Determine active ring style
    let activeClass = '';
    if (active === 'active') {
      if (activeAppearance === 'ring') activeClass = styles.activeRing;
      else if (activeAppearance === 'ring-shadow') activeClass = styles.activeRingShadow;
      else if (activeAppearance === 'shadow') activeClass = styles.activeShadow;
    }

    // Determine color styling for fallback / initials
    let colorClass = '';
    let customColorStyle: React.CSSProperties = {};

    if (color === 'colorful') {
      const palette = getHashColor(name);
      customColorStyle = {
        backgroundColor: palette.bg,
        color: palette.text,
        borderColor: palette.border,
      };
    } else if (color in styles.colorThemes) {
      colorClass = styles.colorThemes[color as keyof typeof styles.colorThemes];
    } else {
      colorClass = styles.colorThemes.neutral;
    }

    const showImage = src && !hasError;

    // Accessible label
    const accessibleLabel = alt || name || (status ? `Avatar, ${status}` : 'Avatar');

    // Status placement class
    const statusPlacementClass =
      statusPosition === 'top-end'
        ? styles.statusPositionTopEnd
        : styles.statusPositionBottomEnd;

    const statusSizeClass =
      styles.statusBadgeSize[size as keyof typeof styles.statusBadgeSize] ||
      styles.statusBadgeSize[40];

    const statusVariantClass =
      status && status in styles.statusVariants
        ? styles.statusVariants[status as keyof typeof styles.statusVariants]
        : styles.statusVariants.available;

    return (
      <div
        ref={ref}
        role="img"
        aria-label={accessibleLabel}
        className={`${styles.avatar} ${shapeClass} ${sizeClass} ${activeClass} ${className || ''}`}
        style={style}
        {...props}
      >
        <div
          className={`${styles.inner} ${!showImage ? colorClass : ''}`}
          style={!showImage ? customColorStyle : undefined}
        >
          {showImage ? (
            <img
              src={src}
              alt=""
              aria-hidden="true"
              onError={() => setHasError(true)}
              className={styles.image}
            />
          ) : computedInitials ? (
            <span>{computedInitials}</span>
          ) : icon ? (
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-hidden="true"
            >
              {icon}
            </span>
          ) : (
            <UserIcon size={iconDimension} color="currentColor" />
          )}
        </div>

        {/* Presence or Custom Badge */}
        {badge ? (
          <span
            className={`${styles.statusBadge} ${statusPlacementClass}`}
            aria-hidden="true"
          >
            {badge}
          </span>
        ) : status ? (
          <span
            data-status={status}
            className={`${styles.statusBadge} ${statusPlacementClass} ${statusSizeClass} ${statusVariantClass} ${
              outOfOffice ? styles.oofModifier : ''
            }`}
            aria-hidden="true"
          />
        ) : null}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

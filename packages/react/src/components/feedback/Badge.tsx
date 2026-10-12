import React from 'react';
import * as styles from './Badge.css';

export type BadgeAppearance = 'filled' | 'ghost' | 'outline' | 'tint';
export type BadgeColor =
  | 'brand'
  | 'danger'
  | 'important'
  | 'informative'
  | 'severe'
  | 'subtle'
  | 'success'
  | 'warning';
export type BadgeShape = 'rounded' | 'circular' | 'square';
export type BadgeSize =
  | 'tiny'
  | 'extra-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'extra-large'
  | 'sm'
  | 'md'
  | 'lg';

export type LegacyBadgeVariant =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'filled'
  | 'outline'
  | 'ghost'
  | 'tint';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Visual styling appearance */
  appearance?: BadgeAppearance;
  /** Palette semantic color */
  color?: BadgeColor;
  /** Shape silhouette */
  shape?: BadgeShape;
  /** Discrete sizing scale */
  size?: BadgeSize;
  /** Authentic vector icon slot */
  icon?: React.ReactNode;
  /** Positioning of the vector icon relative to children */
  iconPosition?: 'before' | 'after';
  /** Display a standalone dot or dot prefix */
  dot?: boolean;
  /** Legacy variant alias for backwards compatibility */
  variant?: LegacyBadgeVariant;
  /** Content of the badge */
  children?: React.ReactNode;
  /** Additional CSS class names */
  className?: string;
}

/**
 * Normalizes legacy size aliases ('sm', 'md', 'lg') to standard Fluent discrete sizes.
 */
function normalizeSize(size: BadgeSize = 'medium'): 'tiny' | 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large' {
  switch (size) {
    case 'sm':
      return 'small';
    case 'md':
      return 'medium';
    case 'lg':
      return 'large';
    default:
      return size;
  }
}

/**
 * Normalizes legacy `variant` prop to modern `color` prop if color was not explicitly provided.
 */
function resolveColor(color?: BadgeColor, variant?: LegacyBadgeVariant): BadgeColor {
  if (color) return color;
  if (!variant) return 'brand';

  switch (variant) {
    case 'default':
      return 'subtle';
    case 'primary':
      return 'brand';
    case 'success':
      return 'success';
    case 'warning':
      return 'warning';
    case 'error':
      return 'danger';
    case 'info':
      return 'informative';
    default:
      return 'brand';
  }
}

/**
 * Badge Component
 * Visual indicator communicating status, categories, counts, or descriptive tags.
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  {
    appearance = 'filled',
    color,
    variant,
    shape = 'rounded',
    size = 'medium',
    icon,
    iconPosition = 'before',
    dot = false,
    children,
    className,
    ...restProps
  },
  ref
) {
  const resolvedColor = resolveColor(color, variant);
  const normalizedSize = normalizeSize(size);

  const variantKey = `${appearance}_${resolvedColor}` as keyof typeof styles.variants;
  const appearanceColorClass = styles.variants[variantKey] || styles.variants.filled_brand;
  const sizeClass = styles.sizes[normalizedSize];
  const shapeClass = styles.shapes[shape];

  // If size is 'tiny', it renders as a pure dot without children or icon
  if (normalizedSize === 'tiny') {
    return (
      <span
        ref={ref}
        className={`${styles.root} ${sizeClass} ${shapeClass} ${appearanceColorClass} ${className || ''}`}
        role="status"
        aria-hidden={!restProps['aria-label']}
        {...restProps}
      />
    );
  }

  return (
    <span
      ref={ref}
      className={`${styles.root} ${sizeClass} ${shapeClass} ${appearanceColorClass} ${className || ''}`}
      {...restProps}
    >
      {dot && <span className={styles.dotIndicator} aria-hidden="true" />}
      {icon && iconPosition === 'before' && (
        <span className={styles.iconSlot} aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
      {icon && iconPosition === 'after' && (
        <span className={styles.iconSlot} aria-hidden="true">
          {icon}
        </span>
      )}
    </span>
  );
});

// ---------------------------------------------------------------------------
// CounterBadge
// ---------------------------------------------------------------------------

export interface CounterBadgeProps extends Omit<BadgeProps, 'children'> {
  /** Numeric count value to display */
  count?: number;
  /** Max count threshold before appending '+' (default: 99) */
  overflowCount?: number;
  /** Whether to render badge when count is zero (default: false) */
  showZero?: boolean;
  /** Custom children override if count is not provided */
  children?: React.ReactNode;
}

/**
 * CounterBadge Component
 * Specialized badge designed for unread counts, notifications, and items tally.
 */
export const CounterBadge = React.forwardRef<HTMLSpanElement, CounterBadgeProps>(function CounterBadge(
  {
    count,
    overflowCount = 99,
    showZero = false,
    shape = 'circular',
    appearance = 'filled',
    color = 'brand',
    dot = false,
    children,
    ...restProps
  },
  ref
) {
  // If count is zero and showZero is false
  if (count === 0 && !showZero) {
    if (dot) {
      return (
        <Badge
          ref={ref}
          shape={shape}
          appearance={appearance}
          color={color}
          dot={true}
          size="tiny"
          {...restProps}
        />
      );
    }
    return null;
  }

  // Format count display
  let displayValue: React.ReactNode = children;
  if (typeof count === 'number') {
    if (overflowCount && count > overflowCount) {
      displayValue = `${overflowCount}+`;
    } else {
      displayValue = String(count);
    }
  }

  return (
    <Badge
      ref={ref}
      shape={shape}
      appearance={appearance}
      color={color}
      dot={dot}
      {...restProps}
    >
      {displayValue}
    </Badge>
  );
});

// ---------------------------------------------------------------------------
// PresenceBadge
// ---------------------------------------------------------------------------

export type PresenceStatus =
  | 'available'
  | 'online'
  | 'away'
  | 'busy'
  | 'dnd'
  | 'do-not-disturb'
  | 'offline'
  | 'out-of-office'
  | 'oof'
  | 'unknown';

export interface PresenceBadgeProps extends Omit<BadgeProps, 'children' | 'icon' | 'color' | 'dot'> {
  /** Real-time presence state */
  status?: PresenceStatus;
  /** Adds out-of-office halo modifier */
  outOfOffice?: boolean;
}

/**
 * Authentic SVG vector status icons (strictly zero emoji).
 */
const PresenceIcons = {
  Available: () => (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path
        d="M2.5 5.2L4.2 6.9L7.5 3.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Busy: () => (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <circle cx="5" cy="5" r="3.5" fill="currentColor" />
    </svg>
  ),
  Away: () => (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path
        d="M5 2.5V5H7.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  Dnd: () => (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2.5 5H7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  Offline: () => (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path
        d="M3 3L7 7M7 3L3 7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  ),
  OutOfOffice: () => (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path
        d="M7.5 5.5L5.5 7.5M5.5 7.5L3.5 5.5M5.5 7.5V2.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

/**
 * PresenceBadge Component
 * Communicates user activity, availability, and presence status.
 */
export const PresenceBadge = React.forwardRef<HTMLSpanElement, PresenceBadgeProps>(function PresenceBadge(
  {
    status = 'available',
    outOfOffice = false,
    size = 'small',
    className,
    ...restProps
  },
  ref
) {
  let color: BadgeColor = 'success';
  let IconComponent = PresenceIcons.Available;
  let label = 'Available';

  switch (status) {
    case 'available':
    case 'online':
      color = 'success';
      IconComponent = PresenceIcons.Available;
      label = 'Available';
      break;
    case 'busy':
      color = 'danger';
      IconComponent = PresenceIcons.Busy;
      label = 'Busy';
      break;
    case 'dnd':
    case 'do-not-disturb':
      color = 'danger';
      IconComponent = PresenceIcons.Dnd;
      label = 'Do Not Disturb';
      break;
    case 'away':
      color = 'warning';
      IconComponent = PresenceIcons.Away;
      label = 'Away';
      break;
    case 'out-of-office':
    case 'oof':
      color = 'severe';
      IconComponent = PresenceIcons.OutOfOffice;
      label = 'Out of Office';
      break;
    case 'offline':
    case 'unknown':
    default:
      color = 'subtle';
      IconComponent = PresenceIcons.Offline;
      label = 'Offline';
      break;
  }

  const extraClasses = [
    styles.presenceRing,
    outOfOffice ? styles.outOfOfficeRing : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Badge
      ref={ref}
      shape="circular"
      appearance="filled"
      color={color}
      size={size}
      icon={<IconComponent />}
      aria-label={label}
      role="status"
      className={extraClasses}
      {...restProps}
    />
  );
});

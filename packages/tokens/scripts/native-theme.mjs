const fontSizes = {
  display: 'heading-xl',
  heading: 'heading-lg',
  subheading: 'heading-sm',
  paragraph: 'body-md',
  label: 'label-sm',
  caption: 'body-xs',
};
const defaultFontWeights = {
  display: '700', heading: '700', subheading: '600', paragraph: '400', label: '500', caption: '400',
};

function dimension(value) {
  return Number.parseFloat(value) * (value.endsWith('rem') ? 16 : 1);
}

function namedValues(tokens, prefix, transform = dimension) {
  return Object.fromEntries(Object.entries(tokens)
    .filter(([key]) => key.startsWith(prefix))
    .map(([key, value]) => [key.slice(prefix.length), transform(value)]));
}

function nativeShadow(boxShadow, elevation) {
  if (boxShadow === 'none') return { android: { elevation: 0 } };
  const layer = /^(\S+) (\S+) (\S+)(?: \S+)? (rgba\([^)]*\))/.exec(boxShadow);
  if (!layer) throw new Error(`Unsupported native shadow: ${boxShadow}`);
  const [, x, y, blur, rgba] = layer;
  const [red, green, blue, alpha] = rgba.slice(5, -1).split(',').map(Number);
  return {
    boxShadow,
    ios: {
      shadowColor: `rgb(${red}, ${green}, ${blue})`,
      shadowOffset: { width: dimension(x), height: dimension(y) },
      shadowRadius: dimension(blur) / 2,
      shadowOpacity: alpha,
    },
    android: { elevation },
  };
}

export function createNativeTheme(tokens, primitives) {
  const color = (role) => tokens[`color-${role}`];
  const fontName = (stack) => stack?.split(',')[0].replace(/^['"]|['"]$/g, '');
  const typography = Object.fromEntries(Object.entries(fontSizes).map(([role, size]) => {
    const fontSize = dimension(tokens[`fontSize-${size}`]);
    const lineHeight = tokens[`lineHeight-${role}`];
    const family = ['display', 'heading'].includes(role) ? 'display' : 'body';
    const fontFamily = fontName(tokens[`fontFamily-${family}`]);
    const letterSpacing = tokens[`letterSpacing-${role}`];
    return [role, {
      fontSize,
      lineHeight: lineHeight ? dimension(lineHeight) : Math.round(fontSize * Number(primitives.lineHeight.primitive.normal.value)),
      fontWeight: tokens[`fontWeight-${role}`] ?? defaultFontWeights[role],
      ...(fontFamily && { fontFamily }),
      ...(letterSpacing && { letterSpacing: dimension(letterSpacing) }),
    }];
  }));
  const motion = namedValues(tokens, 'motion-semantic-', Number.parseFloat);
  return {
    colors: {
      canvas: color('canvas') ?? color('surface'),
      surface: color('surface'),
      surfaceAlt: color('surface-raised'),
      text: color('text-primary'),
      textMuted: color('text-muted'),
      border: color('border-default'),
      borderStrong: color('border-strong'),
      primary: color('action-primary'),
      onPrimary: color('text-on-action'),
      accent: color('accent') ?? color('action-primary'),
      accentBackground: color('accent-background') ?? color('surface-active'),
      success: color('feedback-success'),
      successBackground: color('feedback-success-light'),
      error: color('feedback-error'),
      errorBackground: color('feedback-error-light'),
      warning: color('feedback-warning'),
      warningBackground: color('feedback-warning-light'),
    },
    spacing: {
      padding: namedValues(tokens, 'space-component-padding-'),
      gap: namedValues(tokens, 'space-component-gap-'),
      gutter: dimension(tokens['space-layout-gutter']),
      margin: namedValues(tokens, 'space-layout-margin-'),
    },
    radii: {
      ...namedValues(tokens, 'radius-component-'),
      control: dimension(tokens['radius-control-default']),
      full: dimension(tokens['radius-control-full']),
    },
    typography,
    shadows: {
      raised: nativeShadow(tokens['elevation-raised'], 2),
      overlay: nativeShadow(tokens['elevation-overlay'], 8),
    },
    ...(tokens['focus-ring'] && { focusRing: { boxShadow: tokens['focus-ring'] } }),
    motion: { ...motion, sheet: motion.sheet ?? motion.emphasis },
  };
}

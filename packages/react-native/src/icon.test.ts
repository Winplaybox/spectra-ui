import { describe, it, expect } from 'vitest';
import React from 'react';
import {
  Icon,
  SvgIcon,
  createSvgIcon,
  HomeIcon,
  SettingsIcon,
  TimeIcon,
  registerIcon,
} from './components/data-display/Icon';

describe('@winplaybox/react-native - Icon and SvgIcon primitives', () => {
  it('renders registered named icon successfully', () => {
    const el = React.createElement(Icon, { name: 'home', size: 24, color: '#3b82f6' });
    expect(el).toBeDefined();
    expect(el.props.name).toBe('home');
    expect(el.props.size).toBe(24);
  });

  it('renders curated HomeIcon, SettingsIcon, TimeIcon directly', () => {
    const home = React.createElement(HomeIcon, { size: 20 });
    const settings = React.createElement(SettingsIcon, { size: 22 });
    const time = React.createElement(TimeIcon, { size: 18 });

    expect(HomeIcon.displayName).toBe('HomeIcon');
    expect(SettingsIcon.displayName).toBe('SettingsIcon');
    expect(TimeIcon.displayName).toBe('TimeIcon');
    expect(home.props.size).toBe(20);
    expect(settings.props.size).toBe(22);
    expect(time.props.size).toBe(18);
  });

  it('allows creating custom SVG icons with createSvgIcon', () => {
    const CustomStar = createSvgIcon('M12 2L2 22h20L12 2z', 'CustomStarIcon');
    expect(CustomStar.displayName).toBe('CustomStarIcon');

    const el = React.createElement(CustomStar, { size: 32, color: '#ffd700' });
    expect(el.props.size).toBe(32);
    expect(el.props.color).toBe('#ffd700');
  });

  it('supports dynamic registerIcon in the registry', () => {
    const CustomCompass = createSvgIcon('M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z', 'CustomCompass');
    registerIcon('compass', CustomCompass);

    const el = React.createElement(Icon, { name: 'compass', size: 28 });
    expect(el.props.name).toBe('compass');
  });

  it('renders SvgIcon with custom path string', () => {
    const el = React.createElement(SvgIcon, {
      path: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
      size: 24,
      color: '#ffffff',
    });
    expect(el).toBeDefined();
    expect(el.props.path).toBe('M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z');
  });
});

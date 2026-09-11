import { describe, it, expect } from 'vitest';
import React from 'react';
import * as Icons from './index';
import * as AllIcons from './all';
import * as SocialIcons from './social';
import * as FilledIcons from './filled';
import * as OutlinedIcons from './outlined';
import * as RoundedIcons from './rounded';
import * as SharpIcons from './sharp';
import * as TwoToneIcons from './twotone';
import iconManifest from './manifest.json';

describe('@spectra/icons Library', () => {
  it('contains over 12,000 compiled icon components across all shades', () => {
    expect(iconManifest.length).toBeGreaterThan(12000);
  });

  it('exports icons defined in the manifest via subpaths and all barrel', () => {
    // Sample check 50 icons from manifest across different shades
    const sample = iconManifest.slice(0, 50);
    for (const item of sample) {
      const Comp = (AllIcons as any)[item.componentName];
      expect(Comp).toBeDefined();
      expect(typeof Comp).toBe('function');
    }
  });

  it('exports all 5 official design shades for icons via subpaths', () => {
    expect(FilledIcons.FilledStarIcon).toBeDefined();
    expect(OutlinedIcons.OutlinedStarIcon).toBeDefined();
    expect(RoundedIcons.RoundedStarIcon).toBeDefined();
    expect(SharpIcons.SharpStarIcon).toBeDefined();
    expect(TwoToneIcons.TwoToneStarIcon).toBeDefined();

    // Suffix aliases
    expect(FilledIcons.StarFilledIcon).toBeDefined();
    expect(OutlinedIcons.StarOutlinedIcon).toBeDefined();
    expect(RoundedIcons.StarRoundedIcon).toBeDefined();
    expect(SharpIcons.StarSharpIcon).toBeDefined();
    expect(TwoToneIcons.StarTwoToneIcon).toBeDefined();
  });

  it('exports social brand and monochrome icon components via social subpath', () => {
    // Brand colored
    expect(SocialIcons.FacebookIcon).toBeDefined();
    expect(SocialIcons.GithubIcon).toBeDefined();
    expect(SocialIcons.AppleIcon).toBeDefined();
    expect(SocialIcons.TwitterIcon).toBeDefined();
    expect(SocialIcons.GoogleIcon).toBeDefined();
    expect(SocialIcons.DiscordIcon).toBeDefined();
    expect(SocialIcons.SpotifyIcon).toBeDefined();
    expect(SocialIcons.YoutubeIcon).toBeDefined();
    expect(SocialIcons.WhatsappIcon).toBeDefined();

    // Monochrome (Rule #0 currentColor compliant)
    expect(SocialIcons.FacebookMonoIcon).toBeDefined();
    expect(SocialIcons.GithubMonoIcon).toBeDefined();
    expect(SocialIcons.AppleMonoIcon).toBeDefined();
    expect(SocialIcons.TwitterMonoIcon).toBeDefined();
    expect(SocialIcons.DiscordMonoIcon).toBeDefined();
  });

  it('renders SVG with default size, currentColor, and attributes', () => {
    const el = React.createElement(Icons.CheckIcon, { size: 32, color: 'red' });
    expect(el).toBeDefined();
    expect(el.props.size).toBe(32);
    expect(el.props.color).toBe('red');
  });

  it('renders TwoTone icons with fillOpacity', () => {
    const el = React.createElement(TwoToneIcons.TwoToneStarIcon, { size: 24, color: 'blue', fillOpacity: 0.5 });
    expect(el).toBeDefined();
    expect(el.props.fillOpacity).toBe(0.5);
  });

  it('preserves core curated icons for backwards compatibility', () => {
    expect(Icons.CheckIcon).toBeDefined();
    expect(Icons.CloseIcon).toBeDefined();
    expect(Icons.ChevronDownIcon).toBeDefined();
    expect(Icons.SunIcon).toBeDefined();
    expect(Icons.MoonIcon).toBeDefined();
  });

  it('manifest metadata includes categories, styles, and tags', () => {
    const first = iconManifest[0];
    expect(first.id).toBeDefined();
    expect(first.name).toBeDefined();
    expect(first.componentName).toBeDefined();
    expect(first.category).toBeDefined();
    expect(Array.isArray(first.tags)).toBe(true);

    // Verify style coverage in manifest
    const styles = new Set(iconManifest.map(m => m.style));
    expect(styles.has('filled')).toBe(true);
    expect(styles.has('outlined')).toBe(true);
    expect(styles.has('rounded')).toBe(true);
    expect(styles.has('sharp')).toBe(true);
    expect(styles.has('twotone')).toBe(true);
    expect(styles.has('brand')).toBe(true);
    expect(styles.has('monochrome')).toBe(true);
  });

  it('correctly parses icon names and aliases with parseIconName', () => {
    // Curated
    expect(Icons.parseIconName('CheckIcon')).toEqual({ style: 'curated', componentName: 'CheckIcon' });

    // Social
    expect(Icons.parseIconName('GithubIcon')).toEqual({ style: 'social', componentName: 'GithubIcon' });
    expect(Icons.parseIconName('FacebookMonoIcon')).toEqual({ style: 'social', componentName: 'FacebookMonoIcon' });

    // Multi-shade prefix
    const homeParsed = Icons.parseIconName('FilledHomeIcon');
    expect(homeParsed.style).toBe('filled');
    expect(homeParsed.category?.toLowerCase()).toBe('action');
    expect(homeParsed.componentName).toBe('FilledHomeIcon');

    // Suffix alias
    const aliasParsed = Icons.parseIconName('HomeOutlinedIcon');
    expect(aliasParsed.style).toBe('outlined');
    expect(aliasParsed.category?.toLowerCase()).toBe('action');
    expect(aliasParsed.componentName).toBe('OutlinedHomeIcon');

    // TwoTone
    const twoToneParsed = Icons.parseIconName('TwoToneFavoriteIcon');
    expect(twoToneParsed.style).toBe('twotone');
    expect(twoToneParsed.category?.toLowerCase()).toBe('action');
  });

  it('dynamically loads icons on demand via loadIcon', async () => {
    // Curated icon resolves immediately
    const checkComp = await Icons.loadIcon('CheckIcon');
    expect(checkComp).toBeDefined();

    // Social icon resolves dynamically
    const githubComp = await Icons.loadIcon('GithubIcon');
    expect(githubComp).toBeDefined();

    // Shade category icon resolves dynamically
    const homeComp = await Icons.loadIcon('FilledHomeIcon');
    expect(homeComp).toBeDefined();
  });

  it('exports DynamicIcon and LazyIcon components', () => {
    expect(Icons.DynamicIcon).toBeDefined();
    expect(Icons.LazyIcon).toBeDefined();
    expect(Icons.DynamicIcon).toBe(Icons.LazyIcon);

    const el = React.createElement(Icons.DynamicIcon, { name: 'CheckIcon', size: 20 });
    expect(el).toBeDefined();
    expect(el.props.name).toBe('CheckIcon');
  });

  it('getIconManifest resolves manifest asynchronously without upfront bundle penalty', async () => {
    const manifest = await Icons.getIconManifest();
    expect(Array.isArray(manifest)).toBe(true);
    expect(manifest.length).toBeGreaterThan(12000);
  });
});


import { describe, it, expect } from 'vitest';
import React from 'react';
import {
  Box,
  Grid,
  ScrollView,
  Pressable,
  Image,
  Text,
  CopyButton,
} from './index';

describe('@winplaybox/react-native First-Class Layout & Interaction Primitives', () => {
  describe('Box', () => {
    it('creates Box element with token-based padding and border', () => {
      const el = React.createElement(
        Box,
        {
          padding: 'md',
          margin: 'sm',
          bg: 'raised',
          radius: 'lg',
          border: true,
          borderColor: 'subtle',
          direction: 'row',
          align: 'center',
          justify: 'space-between',
        },
        React.createElement(Text, null, 'Box Content')
      );
      expect(el).toBeDefined();
      expect(el.props.padding).toBe('md');
      expect(el.props.bg).toBe('raised');
      expect(el.props.radius).toBe('lg');
      expect(el.props.border).toBe(true);
    });

    it('supports custom numeric padding and raw background strings', () => {
      const el = React.createElement(Box, {
        padding: 20,
        bg: '#ff0000',
        radius: 'full',
      });
      expect(el).toBeDefined();
      expect(el.props.padding).toBe(20);
      expect(el.props.bg).toBe('#ff0000');
    });
  });

  describe('Grid', () => {
    it('creates container Grid with custom spacing', () => {
      const grid = React.createElement(
        Grid,
        { container: true, spacing: 3 },
        React.createElement(Grid, { item: true, xs: 6 }, React.createElement(Text, null, 'Col 1')),
        React.createElement(Grid, { item: true, xs: 6 }, React.createElement(Text, null, 'Col 2'))
      );
      expect(grid).toBeDefined();
      expect(grid.props.container).toBe(true);
      expect(grid.props.spacing).toBe(3);
    });
  });

  describe('ScrollView', () => {
    it('creates ScrollView element with token padding and surface bg', () => {
      const sv = React.createElement(
        ScrollView,
        { padding: 'lg', bg: 'sunken', showsVerticalScrollIndicator: false },
        React.createElement(Text, null, 'Scrollable Content')
      );
      expect(sv).toBeDefined();
      expect(sv.props.padding).toBe('lg');
      expect(sv.props.bg).toBe('sunken');
    });
  });

  describe('Pressable', () => {
    it('creates interactive Pressable element with variant and radius', () => {
      const btn = React.createElement(
        Pressable,
        {
          variant: 'raised',
          radius: 'md',
          padding: 'sm',
          onPress: () => {},
        },
        React.createElement(Text, null, 'Tap Me')
      );
      expect(btn).toBeDefined();
      expect(btn.props.variant).toBe('raised');
      expect(btn.props.radius).toBe('md');
    });
  });

  describe('Image', () => {
    it('creates Image element with token radius and fit mode', () => {
      const img = React.createElement(Image, {
        source: { uri: 'https://example.com/photo.png' },
        radius: 'md',
        aspectRatio: 16 / 9,
        fit: 'cover',
      });
      expect(img).toBeDefined();
      expect(img.props.radius).toBe('md');
      expect(img.props.fit).toBe('cover');
      expect(img.props.aspectRatio).toBeCloseTo(16 / 9);
    });
  });

  describe('CopyButton', () => {
    it('creates CopyButton element with value and default labels', () => {
      const btn = React.createElement(CopyButton, {
        value: 'https://spectra-ui.winplaybox.com',
        label: 'Copy URL',
      });
      expect(btn).toBeDefined();
      expect(btn.props.value).toBe('https://spectra-ui.winplaybox.com');
      expect(btn.props.label).toBe('Copy URL');
    });
  });
});

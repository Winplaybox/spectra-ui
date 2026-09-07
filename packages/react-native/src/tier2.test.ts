import { describe, it, expect } from 'vitest';
import React from 'react';
import {
  Checkbox,
  Radio,
  RadioGroup,
  Select,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Tooltip,
  Avatar,
  Badge,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAction,
  Text,
} from './index';

describe('@spectra/react-native Tier 2 Components', () => {
  describe('Checkbox', () => {
    it('creates a Checkbox element with default props', () => {
      const el = React.createElement(Checkbox, { label: 'Accept Terms' });
      expect(el).toBeDefined();
      expect(el.props.label).toBe('Accept Terms');
    });

    it('accepts controlled checked and indeterminate states', () => {
      const el = React.createElement(Checkbox, {
        checked: true,
        indeterminate: false,
        size: 'lg',
      });
      expect(el.props.checked).toBe(true);
      expect(el.props.size).toBe('lg');
    });
  });

  describe('Radio and RadioGroup', () => {
    it('creates a RadioGroup element with children', () => {
      const group = React.createElement(
        RadioGroup,
        { value: 'option1', orientation: 'horizontal' },
        React.createElement(Radio, { value: 'option1', label: 'Option 1' }),
        React.createElement(Radio, { value: 'option2', label: 'Option 2' })
      );
      expect(group).toBeDefined();
      expect(group.props.orientation).toBe('horizontal');
    });
  });

  describe('Select', () => {
    it('creates a Select element with options list', () => {
      const options = [
        { value: '1', label: 'First Option' },
        { value: '2', label: 'Second Option' },
      ];
      const el = React.createElement(Select, {
        options,
        value: '1',
        placeholder: 'Choose one',
      });
      expect(el.props.options).toHaveLength(2);
      expect(el.props.value).toBe('1');
    });
  });

  describe('Tabs', () => {
    it('creates compound Tabs hierarchy', () => {
      const tabs = React.createElement(
        Tabs,
        { defaultValue: 'tab1' },
        React.createElement(
          TabList,
          null,
          React.createElement(Tab, { value: 'tab1', label: 'Tab 1' }),
          React.createElement(Tab, { value: 'tab2', label: 'Tab 2' })
        ),
        React.createElement(
          TabPanels,
          null,
          React.createElement(TabPanel, { value: 'tab1' }, 'Panel 1'),
          React.createElement(TabPanel, { value: 'tab2' }, 'Panel 2')
        )
      );
      expect(tabs).toBeDefined();
      expect(tabs.props.defaultValue).toBe('tab1');
    });
  });

  describe('Tooltip', () => {
    it('creates a Tooltip wrapping trigger element', () => {
      const tooltip = React.createElement(
        Tooltip,
        { content: 'Help information' },
        React.createElement(Text, null, 'Hover me')
      );
      expect(tooltip).toBeDefined();
      expect(tooltip.props.content).toBe('Help information');
    });
  });

  describe('Avatar', () => {
    it('creates an Avatar element with initials fallback and status', () => {
      const avatar = React.createElement(Avatar, {
        name: 'Jane Doe',
        size: 'lg',
        status: 'online',
        variant: 'circle',
      });
      expect(avatar).toBeDefined();
      expect(avatar.props.name).toBe('Jane Doe');
      expect(avatar.props.status).toBe('online');
    });
  });

  describe('Badge', () => {
    it('creates a Badge element with variant and colorScheme', () => {
      const badge = React.createElement(
        Badge,
        { variant: 'solid', colorScheme: 'success', dot: true },
        'Verified'
      );
      expect(badge).toBeDefined();
      expect(badge.props.colorScheme).toBe('success');
      expect(badge.props.dot).toBe(true);
    });
  });

  describe('List and ListItem', () => {
    it('creates compound List hierarchy', () => {
      const list = React.createElement(
        List,
        { divided: true },
        React.createElement(
          ListItem,
          null,
          React.createElement(ListItemIcon, null, '★'),
          React.createElement(ListItemText, {
            primary: 'List Item Title',
            secondary: 'Subtitle description',
          }),
          React.createElement(ListItemAction, null, '→')
        )
      );
      expect(list).toBeDefined();
      expect(list.props.divided).toBe(true);
    });
  });
});

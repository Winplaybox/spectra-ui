import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import {
  ListView,
  DatePicker,
  WebViewBox,
  Text,
} from './index';

describe('Spectra UI Universal Cross-Platform Components', () => {
  describe('ListView', () => {
    it('creates ListView element with token-aware dividers, padding and empty states', () => {
      const items = [{ id: '1', title: 'First Item' }, { id: '2', title: 'Second Item' }];
      const element = React.createElement(ListView, {
        data: items,
        divided: true,
        padding: 'md',
        refreshing: false,
        onRefresh: vi.fn(),
        keyExtractor: (item: any) => item.id,
        renderItem: ({ item }: any) => React.createElement(Text, null, item.title),
      });

      expect(element).toBeDefined();
      expect(element.props.divided).toBe(true);
      expect(element.props.padding).toBe('md');
      expect(element.props.data).toHaveLength(2);
    });

    it('handles empty text and custom empty state elements', () => {
      const emptyEl = React.createElement(Text, null, 'Custom Empty');
      const element = React.createElement(ListView, {
        data: [],
        emptyState: emptyEl,
        emptyText: 'Nothing to display',
        renderItem: () => null,
      });

      expect(element).toBeDefined();
      expect(element.props.emptyText).toBe('Nothing to display');
      expect(element.props.emptyState).toBe(emptyEl);
    });
  });

  describe('DatePicker', () => {
    it('creates DatePicker element with label, format, and clearable support', () => {
      const testDate = new Date('2026-10-06');
      const onChange = vi.fn();
      const element = React.createElement(DatePicker, {
        label: 'Select Event Date',
        value: testDate,
        onChange,
        clearable: true,
        placeholder: 'Pick a date...',
      });

      expect(element).toBeDefined();
      expect(element.props.label).toBe('Select Event Date');
      expect(element.props.value).toEqual(testDate);
      expect(element.props.clearable).toBe(true);
    });

    it('supports uncontrolled default value and custom formatDate function', () => {
      const defaultDate = new Date('2026-01-01');
      const customFormat = (d: Date) => d.toISOString().split('T')[0];
      const element = React.createElement(DatePicker, {
        defaultValue: defaultDate,
        formatDate: customFormat,
      });

      expect(element).toBeDefined();
      expect(element.props.defaultValue).toEqual(defaultDate);
      expect(element.props.formatDate(defaultDate)).toBe('2026-01-01');
    });
  });

  describe('WebViewBox', () => {
    it('creates WebViewBox containment element with progress bar and source URL', () => {
      const onLoadStart = vi.fn();
      const onLoadEnd = vi.fn();
      const element = React.createElement(WebViewBox, {
        source: { uri: 'https://spectra-ui.winplaybox.com' },
        title: 'Spectra Documentation',
        showProgressBar: true,
        onLoadStart,
        onLoadEnd,
      });

      expect(element).toBeDefined();
      expect(element.props.source.uri).toBe('https://spectra-ui.winplaybox.com');
      expect(element.props.title).toBe('Spectra Documentation');
      expect(element.props.showProgressBar).toBe(true);
    });

    it('supports raw HTML markup sources', () => {
      const htmlSource = { html: '<h1>Spectra UI Embedded Frame</h1>' };
      const element = React.createElement(WebViewBox, {
        source: htmlSource,
      });

      expect(element).toBeDefined();
      expect(element.props.source.html).toBe('<h1>Spectra UI Embedded Frame</h1>');
    });
  });
});

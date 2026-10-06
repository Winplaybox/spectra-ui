import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { ListView } from './components/data-display/ListView';
import { DatePicker } from './components/form/DatePicker';
import { WebViewBox } from './components/surfaces/WebViewBox';

describe('@winplaybox/react Universal Cross-Platform Components', () => {
  describe('ListView', () => {
    it('renders list items with divider lines and custom key extractor', () => {
      const items = [{ id: '1', name: 'Alpha' }, { id: '2', name: 'Beta' }];
      render(
        <ListView
          data={items}
          keyExtractor={(item) => item.id}
          divided
          renderItem={(item) => <div>{item.name}</div>}
        />
      );

      expect(screen.getByText('Alpha')).toBeInTheDocument();
      expect(screen.getByText('Beta')).toBeInTheDocument();
    });

    it('renders empty text when data is empty', () => {
      render(
        <ListView
          data={[]}
          emptyText="No records available"
          renderItem={() => null}
        />
      );

      expect(screen.getByText('No records available')).toBeInTheDocument();
    });

    it('shows refreshing status banner when refreshing is true', () => {
      render(
        <ListView
          data={[{ id: '1', name: 'Item' }]}
          refreshing
          renderItem={(item) => <div>{item.name}</div>}
        />
      );

      expect(screen.getByText('Refreshing...')).toBeInTheDocument();
    });
  });

  describe('DatePicker', () => {
    it('renders trigger input showing placeholder or formatted date', () => {
      render(
        <DatePicker
          placeholder="Pick an appointment"
          label="Appointment Date"
        />
      );

      expect(screen.getByText('Appointment Date')).toBeInTheDocument();
      expect(screen.getByText('Pick an appointment')).toBeInTheDocument();
    });

    it('opens calendar dialog popover on click', async () => {
      render(
        <DatePicker
          placeholder="Select date"
          defaultValue={new Date(2026, 9, 6)}
        />
      );

      const trigger = screen.getByRole('combobox');
      await userEvent.click(trigger);

      expect(screen.getByRole('dialog', { name: 'Calendar date selection' })).toBeInTheDocument();
    });
  });

  describe('WebViewBox', () => {
    it('renders sandboxed iframe with title and responsive frame', () => {
      render(
        <WebViewBox
          src="https://example.com"
          title="Sample Frame"
          showHeader
        />
      );

      expect(screen.getByTitle('Sample Frame')).toBeInTheDocument();
      expect(screen.getByText('Sample Frame')).toBeInTheDocument();
    });
  });
});

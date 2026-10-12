import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from './Accordion';

describe('Accordion', () => {
  it('renders accordion items correctly', () => {
    render(
      <Accordion defaultOpenItems={['item-1']}>
        <AccordionItem value="item-1">
          <AccordionHeader>Section 1</AccordionHeader>
          <AccordionPanel>Content 1</AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionHeader>Section 2</AccordionHeader>
          <AccordionPanel>Content 2</AccordionPanel>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText('Section 1')).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.getByText('Section 2')).toBeInTheDocument();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
  });

  it('toggles item on header click in single-collapsible mode', () => {
    render(
      <Accordion defaultOpenItems={['item-1']}>
        <AccordionItem value="item-1">
          <AccordionHeader>Section 1</AccordionHeader>
          <AccordionPanel>Content 1</AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionHeader>Section 2</AccordionHeader>
          <AccordionPanel>Content 2</AccordionPanel>
        </AccordionItem>
      </Accordion>
    );

    const btn2 = screen.getByRole('button', { name: /Section 2/i });
    fireEvent.click(btn2);

    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('supports multiple expanded items when multiple=true', () => {
    render(
      <Accordion multiple defaultOpenItems={['item-1']}>
        <AccordionItem value="item-1">
          <AccordionHeader>Section 1</AccordionHeader>
          <AccordionPanel>Content 1</AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionHeader>Section 2</AccordionHeader>
          <AccordionPanel>Content 2</AccordionPanel>
        </AccordionItem>
      </Accordion>
    );

    const btn2 = screen.getByRole('button', { name: /Section 2/i });
    fireEvent.click(btn2);

    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('honors disabled state on items', () => {
    render(
      <Accordion>
        <AccordionItem value="item-1" disabled>
          <AccordionHeader>Disabled Section</AccordionHeader>
          <AccordionPanel>Disabled Content</AccordionPanel>
        </AccordionItem>
      </Accordion>
    );

    const btn = screen.getByRole('button', { name: /Disabled Section/i });
    expect(btn).toBeDisabled();
    fireEvent.click(btn);
    expect(screen.queryByText('Disabled Content')).not.toBeInTheDocument();
  });

  it('handles keyboard navigation with arrow keys and Home/End', () => {
    render(
      <Accordion>
        <AccordionItem value="item-1">
          <AccordionHeader>Section 1</AccordionHeader>
          <AccordionPanel>Content 1</AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionHeader>Section 2</AccordionHeader>
          <AccordionPanel>Content 2</AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionHeader>Section 3</AccordionHeader>
          <AccordionPanel>Content 3</AccordionPanel>
        </AccordionItem>
      </Accordion>
    );

    const btn1 = screen.getByRole('button', { name: /Section 1/i });
    const btn2 = screen.getByRole('button', { name: /Section 2/i });
    const btn3 = screen.getByRole('button', { name: /Section 3/i });

    btn1.focus();
    expect(document.activeElement).toBe(btn1);

    fireEvent.keyDown(btn1, { key: 'ArrowDown' });
    expect(document.activeElement).toBe(btn2);

    fireEvent.keyDown(btn2, { key: 'End' });
    expect(document.activeElement).toBe(btn3);

    fireEvent.keyDown(btn3, { key: 'Home' });
    expect(document.activeElement).toBe(btn1);
  });
});

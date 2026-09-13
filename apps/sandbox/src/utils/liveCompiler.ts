import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { transform } from 'sucrase';
import * as SpectraReact from '@spectra/react';
import * as SpectraIcons from '@spectra/icons';

// Scope provided to dynamically evaluated component code
export const LIVE_SCOPE: Record<string, any> = {
  React,
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  ...SpectraReact,
  ...SpectraIcons,

  // Universal Stack layout primitive (supports flexible gap and direction props)
  Stack: ({ direction = 'row', spacing = 2, gap, style, children, ...props }: any) => {
    const computedGap = gap !== undefined ? gap : typeof spacing === 'number' ? spacing * 8 : spacing;
    return React.createElement(
      'div',
      {
        ...props,
        style: {
          display: 'flex',
          flexDirection: direction === 'row' ? 'row' : 'column',
          gap: computedGap,
          alignItems: 'center',
          flexWrap: 'wrap',
          boxSizing: 'border-box',
          ...style,
        },
      },
      children
    );
  },

  // Common identifiers and fallback handlers so snippets never crash with ReferenceError
  sizes: ['sm', 'md', 'lg'],
  handleApprove: (...args: any[]) => console.log('[Spectra] Approved', ...args),
  handleClick: (...args: any[]) => console.log('[Spectra] Clicked', ...args),
  handlePress: (...args: any[]) => console.log('[Spectra] Pressed', ...args),
  handleChange: (...args: any[]) => console.log('[Spectra] Changed', ...args),
  handleClear: (...args: any[]) => console.log('[Spectra] Cleared', ...args),
  onValueChange: (...args: any[]) => console.log('[Spectra] onValueChange', ...args),
  onChangeText: (...args: any[]) => console.log('[Spectra] onChangeText', ...args),
  onSelect: (...args: any[]) => console.log('[Spectra] onSelect', ...args),
  onDismiss: (...args: any[]) => console.log('[Spectra] onDismiss', ...args),
  onClose: (...args: any[]) => console.log('[Spectra] onClose', ...args),
  val: 'option-1',
  setVal: () => {},
  value: 'option-1',
  setValue: () => {},
  text: '',
  setText: () => {},
  selected: 'option-1',
  setSelected: () => {},
  loading: false,
  setLoading: () => {},
  open: false,
  setOpen: () => {},
  isOpen: false,
  setIsOpen: () => {},
  searchTerm: '',
  setSearchTerm: () => {},
  checked: true,
  setChecked: () => {},
  activeTab: '1',
  setActiveTab: () => {},

  // Native React Native mock primitives for mobile preview live rendering
  View: (props: any) =>
    React.createElement('div', {
      ...props,
      style: {
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        ...props.style,
      },
    }),
  Text: (props: any) =>
    React.createElement('span', {
      ...props,
      style: {
        fontFamily: 'inherit',
        fontSize: 14,
        color: 'inherit',
        ...props.style,
      },
    }),
  Pressable: (props: any) =>
    React.createElement('button', {
      ...props,
      type: 'button',
      onClick: props.onPress || props.onClick,
      style: {
        border: 'none',
        background: 'none',
        padding: 0,
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...props.style,
      },
    }),
  SafeAreaView: (props: any) =>
    React.createElement('div', {
      ...props,
      style: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        boxSizing: 'border-box',
        ...props.style,
      },
    }),
  StyleSheet: {
    create: (styles: any) => styles,
  },
};

export interface CompileResult {
  Component: React.ComponentType<any> | null;
  error: string | null;
}

export interface CompileOptions {
  platform?: 'web' | 'native';
}

/**
 * Compiles user JSX/TSX code in real-time using Sucrase and binds it to LIVE_SCOPE
 */
export function compileAndRender(code: string, options?: CompileOptions): CompileResult {
  if (!code || !code.trim()) {
    return { Component: null, error: null };
  }

  try {
    let cleanCode = code.trim();

    // 1. Remove all import statements (single-line, multi-line, type-only, with/without semicolon)
    cleanCode = cleanCode
      .replace(/(?:^|\n)\s*import\s+(?:type\s+)?(?:[\s\S]*?from\s+)?['"][^'"]+['"]\s*;?/g, '\n')
      .replace(/(?:^|\n)\s*import\s+type\s+[\s\S]*?;\n?/g, '\n')
      .trim();

    // 2. Prepare executable wrapper
    let executableCode = '';

    if (/export\s+default\s+function\s*([a-zA-Z0-9_]*)/.test(cleanCode)) {
      cleanCode = cleanCode.replace(
        /export\s+default\s+function\s*([a-zA-Z0-9_]*)/,
        'const __SpectraDynamicComponent = function $1'
      );
      executableCode = `${cleanCode}\nreturn __SpectraDynamicComponent;`;
    } else if (/export\s+default\s+class\s*([a-zA-Z0-9_]*)/.test(cleanCode)) {
      cleanCode = cleanCode.replace(
        /export\s+default\s+class\s*([a-zA-Z0-9_]*)/,
        'const __SpectraDynamicComponent = class $1'
      );
      executableCode = `${cleanCode}\nreturn __SpectraDynamicComponent;`;
    } else if (/export\s+default\s+([a-zA-Z0-9_]+);?/.test(cleanCode)) {
      cleanCode = cleanCode.replace(
        /export\s+default\s+([a-zA-Z0-9_]+);?/,
        'const __SpectraDynamicComponent = $1;'
      );
      executableCode = `${cleanCode}\nreturn __SpectraDynamicComponent;`;
    } else if (/export\s+function\s+([a-zA-Z0-9_]+)/.test(cleanCode)) {
      const match = cleanCode.match(/export\s+function\s+([a-zA-Z0-9_]+)/);
      const name = match ? match[1] : '__SpectraComp';
      cleanCode = cleanCode.replace(/export\s+function\s+([a-zA-Z0-9_]+)/, 'function $1');
      executableCode = `${cleanCode}\nreturn ${name};`;
    } else if (/export\s+(?:const|let|var)\s+([a-zA-Z0-9_]+)/.test(cleanCode)) {
      const match = cleanCode.match(/export\s+(?:const|let|var)\s+([a-zA-Z0-9_]+)/);
      const name = match ? match[1] : null;
      cleanCode = cleanCode.replace(/export\s+(?:const|let|var)\s+/, 'const ');
      executableCode = `${cleanCode}\nreturn ${name || 'null'};`;
    } else if (/(?:^|\n)\s*(?:const|let|var|function)\s+([a-zA-Z0-9_]+)/.test(cleanCode)) {
      const match = cleanCode.match(/(?:^|\n)\s*(?:const|let|var|function)\s+([a-zA-Z0-9_]+)/);
      const name = match ? match[1] : null;
      executableCode = `${cleanCode}\nreturn ${name || 'null'};`;
    } else {
      // Direct JSX fragment (typical of compact snippets)
      // Provide built-in reactive state hooks for interactive snippets
      const isNative = options?.platform === 'native';
      const wrapperStyle = isNative
        ? {
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            width: '100%',
            alignItems: 'stretch',
            boxSizing: 'border-box',
          }
        : {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            boxSizing: 'border-box',
          };
      const styleStr = JSON.stringify(wrapperStyle);

      executableCode = `return function __SpectraCompactDynamicComponent() {
  const [val, setVal] = React.useState('option-1');
  const [value, setValue] = React.useState('option-1');
  const [text, setText] = React.useState('');
  const [selected, setSelected] = React.useState('option-1');
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [checked, setChecked] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState('1');
  const [expanded, setExpanded] = React.useState(true);
  const sizes = ['sm', 'md', 'lg'];
  const handleApprove = (e) => console.log('[Spectra] Approved', e);
  const handleClick = (...args) => console.log('[Spectra] Clicked', ...args);
  const handlePress = (...args) => console.log('[Spectra] Pressed', ...args);
  const handleChange = (e) => {
    const next = e && e.target ? (e.target.value !== undefined ? e.target.value : e.target.checked) : e;
    setVal(next);
    setValue(next);
    setSearchTerm(typeof next === 'string' ? next : '');
  };
  const handleClear = () => { setVal(''); setValue(''); setSearchTerm(''); };
  const onValueChange = (next) => { setVal(next); setValue(next); };
  const onChangeText = (next) => { setText(next); setVal(next); setValue(next); };
  const onSelect = (next) => { setSelected(next); setVal(next); setValue(next); };
  const onDismiss = () => { setOpen(false); setIsOpen(false); };
  const onClose = () => { setOpen(false); setIsOpen(false); };

  return (
    <div style={${styleStr}}>
      ${cleanCode}
    </div>
  );
};`;
    }

    // 3. Transpile TypeScript & JSX into standard JavaScript
    const transpiled = transform(executableCode, {
      transforms: ['jsx', 'typescript'],
      jsxRuntime: 'classic',
      production: true,
    }).code;

    // 4. Construct execution closure with scope arguments
    const scopeKeys = Object.keys(LIVE_SCOPE);
    const scopeValues = Object.values(LIVE_SCOPE);

    // Evaluate safely
    const factory = new Function(...scopeKeys, transpiled);
    const evaluated = factory(...scopeValues);

    if (typeof evaluated === 'function') {
      return { Component: evaluated, error: null };
    } else if (React.isValidElement(evaluated)) {
      const ElementComponent = () => evaluated;
      return { Component: ElementComponent, error: null };
    } else {
      return {
        Component: null,
        error: 'The code did not produce a valid renderable component or element.',
      };
    }
  } catch (err: any) {
    return { Component: null, error: err.message || String(err) };
  }
}

import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import { darkTokens, getNativeTheme, getTokens, lightTokens, tokens } from '../dist/ts/index.js';
import { modes, modeSources, tokenValues } from './token-sources.mjs';

test('the default and explicit minimal pack preserve the existing mode outputs', () => {
  assert.strictEqual(getTokens(), lightTokens);
  assert.strictEqual(getTokens('dark'), darkTokens);
  assert.equal(tokens.pack, 'minimal');
  for (const mode of modes) {
    const expected = Object.fromEntries(Object.entries(tokenValues(modeSources[mode])).flatMap(([key, value]) => {
      const name = key.replaceAll('.', '-');
      return [[name, value], [name.replace('-semantic-', '-'), value]];
    }));
    assert.deepEqual(getTokens(mode, 'minimal'), expected);
    assert.deepEqual(tokens.modes[mode], expected);
  }
});

test('the build exports base values in JS, JSON, and CSS scoped by pack and mode', () => {
  const css = fs.readFileSync(new URL('../dist/css/tokens.css', import.meta.url), 'utf8');
  const json = JSON.parse(fs.readFileSync(new URL('../dist/json/tokens.json', import.meta.url), 'utf8'));
  for (const [mode, surface, primary, warningBackground] of [
    ['light', '#FFFFFF', '#0A0A0A', '#FFF4DB'],
    ['dark', '#171717', '#FAFAFA', '#35280F'],
  ]) {
    const base = getTokens(mode, 'base');
    assert.equal(base['color-surface'], surface);
    assert.equal(base['color-semantic-action-primary'], primary);
    assert.equal(base['color-feedback-warning-light'], warningBackground);
    assert.deepEqual(json.packs.base[mode], base);
    const scope = `[data-pack="base"][data-mode="${mode}"] {`;
    assert.ok(css.includes(scope));
    const block = css.split(scope)[1].split('}')[0];
    assert.ok(block.includes(`--color-surface: ${surface};`));
    assert.ok(block.includes(`--spectra-color-semantic-action-primary: ${primary};`));
    assert.ok(block.includes('--font-family-sans: var(--fontFamily-body);'));
  }
  assert.equal(getTokens('dark', 'base')['color-canvas'], '#0A0A0A');
  assert.equal(getTokens('light', 'base')['focus-ring'], '0 0 0 4px rgba(10,10,10,.12)');
});

test('getNativeTheme returns native dimensions, typography, effects, and durations', () => {
  assert.strictEqual(getNativeTheme(), getNativeTheme('light', 'minimal'));
  for (const mode of modes) {
    const minimal = getNativeTheme(mode, 'minimal');
    assert.equal(minimal.colors.surface, getTokens(mode)['color-surface']);
    assert.equal(minimal.typography.paragraph.fontSize, 16);
    assert.equal(minimal.typography.paragraph.lineHeight, 24);
    assert.equal(minimal.typography.paragraph.fontFamily, undefined);
    assert.equal(minimal.spacing.padding.md, 16);
    assert.equal(minimal.radii.md, 8);
    assert.deepEqual(minimal.shadows.raised.android, { elevation: 0 });
    assert.equal(minimal.motion.subtle, 120);

    const base = getNativeTheme(mode, 'base');
    assert.equal(base.colors.onPrimary, mode === 'dark' ? '#0A0A0A' : '#FFFFFF');
    assert.equal(base.spacing.gap.md, 12);
    assert.deepEqual(base.radii, { none: 0, sm: 8, md: 12, lg: 18, control: 12, full: 999 });
    assert.deepEqual(base.typography.display, {
      fontSize: 40, lineHeight: 48, fontWeight: '800', fontFamily: 'Bricolage Grotesque', letterSpacing: -1,
    });
    assert.deepEqual(base.typography.paragraph, {
      fontSize: 16, lineHeight: 24, fontWeight: '400', fontFamily: 'Instrument Sans',
    });
    assert.deepEqual(base.motion, { instant: 0, subtle: 140, emphasis: 250, sheet: 380 });
    assert.deepEqual(base.shadows.raised.android, { elevation: 2 });
    assert.equal(base.shadows.overlay.ios.shadowOffset.height, mode === 'dark' ? 14 : 12);
    assert.equal(base.shadows.overlay.boxShadow, getTokens(mode, 'base')['elevation-overlay']);
    assert.equal(base.focusRing.boxShadow, getTokens(mode, 'base')['focus-ring']);
  }
});

import fs from 'node:fs';

function readJson(path) {
  return JSON.parse(fs.readFileSync(new URL(`../src/${path}`, import.meta.url), 'utf8'));
}

export const modes = ['light', 'dark'];
export const primitives = readJson('primitives/primitives.tokens.json');
export const semantic = readJson('semantic/semantic.tokens.json');
export const baseContract = readJson('semantic/base.contract.json');
export const minimalPack = readJson('packs/minimal.pack.json');
export const basePack = readJson('packs/base.pack.json');
export const modeSources = Object.fromEntries(
  modes.map((mode) => [mode, readJson(`modes/${mode}.mode.json`)]),
);

export function tokenValues(tree, prefix = '') {
  return Object.fromEntries(Object.entries(tree).flatMap(([key, node]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    return Object.hasOwn(node, 'value') ? [[path, node.value]] : Object.entries(tokenValues(node, path));
  }));
}

export function baseOverrides(mode) {
  return { ...tokenValues(basePack.common), ...tokenValues(basePack[mode]) };
}

export function resolvedPacks() {
  const minimal = Object.fromEntries(modes.map((mode) => {
    const values = tokenValues(modeSources[mode]);
    for (const [key, value] of Object.entries(tokenValues(minimalPack))) {
      if (!Object.hasOwn(values, key)) values[key] = value;
    }
    return [mode, values];
  }));
  const base = Object.fromEntries(modes.map((mode) => [
    mode, { ...minimal[mode], ...baseOverrides(mode) },
  ]));
  return { minimal, base };
}

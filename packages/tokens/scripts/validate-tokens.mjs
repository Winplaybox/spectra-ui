import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const tokensSrc = path.resolve(__dirname, '../src');

function readJson(relPath) {
  const fullPath = path.join(tokensSrc, relPath);
  return JSON.parse(fs.readFileSync(fullPath, 'utf8'));
}

const semantic = readJson('semantic/semantic.tokens.json');
const minimalPack = readJson('packs/minimal.pack.json');
const lightMode = readJson('modes/light.mode.json');
const darkMode = readJson('modes/dark.mode.json');

function extractKeys(obj, prefix = '') {
  let keys = [];
  for (const [key, value] of Object.entries(obj)) {
    const currentPath = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object' && !('value' in value)) {
      keys.push(...extractKeys(value, currentPath));
    } else if (value && typeof value === 'object' && 'value' in value) {
      keys.push(currentPath);
    }
  }
  return keys;
}

const semanticKeys = extractKeys(semantic);
const minimalKeys = new Set(extractKeys(minimalPack));
const lightKeys = new Set(extractKeys(lightMode));
const darkKeys = new Set(extractKeys(darkMode));

console.log(`🔍 Validating Token Contract: checking ${semanticKeys.length} semantic tokens...`);

let errors = [];

for (const key of semanticKeys) {
  if (!minimalKeys.has(key)) {
    errors.push(`[Minimal Pack] Missing token: ${key}`);
  }
  if (!lightKeys.has(key)) {
    errors.push(`[Light Mode] Missing token: ${key}`);
  }
  if (!darkKeys.has(key)) {
    errors.push(`[Dark Mode] Missing token: ${key}`);
  }
}

if (errors.length > 0) {
  console.error(`❌ Token contract validation FAILED with ${errors.length} error(s):`);
  errors.forEach((err) => console.error(`   - ${err}`));
  process.exit(1);
}

console.log(`✅ Token contract PASSED: 100% 1:1 match across semantic schema, minimal pack, and light/dark modes.`);

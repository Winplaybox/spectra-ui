import {
  baseContract, baseOverrides, minimalPack, modes, modeSources, semantic, tokenValues,
} from './token-sources.mjs';

const semanticKeys = Object.keys(tokenValues(semantic));
const baseKeys = [...semanticKeys, ...baseContract];
const errors = [];

function checkKeys(label, expectedKeys, values) {
  const expected = new Set(expectedKeys);
  for (const key of expected) {
    if (!Object.hasOwn(values, key)) errors.push(`[${label}] Missing token: ${key}`);
  }
  for (const key of Object.keys(values)) {
    if (!expected.has(key)) errors.push(`[${label}] Unexpected token: ${key}`);
    if (typeof values[key] !== 'string' || !values[key].trim()) {
      errors.push(`[${label}] Invalid value for token: ${key}`);
    }
  }
}

checkKeys('Minimal Pack', semanticKeys, tokenValues(minimalPack));
for (const mode of modes) {
  checkKeys(`Minimal ${mode} mode`, semanticKeys, tokenValues(modeSources[mode]));
  checkKeys(`Base ${mode} mode`, baseKeys, baseOverrides(mode));
}

console.log(`🔍 Validating Token Contract: checking ${semanticKeys.length} minimal and ${baseKeys.length} base tokens per mode...`);
if (errors.length > 0) {
  console.error(`❌ Token contract validation FAILED with ${errors.length} error(s):`);
  errors.forEach((error) => console.error(`   - ${error}`));
  process.exitCode = 1;
} else {
  console.log('✅ Token contract PASSED: exact semantic keys for minimal and base in both modes.');
}

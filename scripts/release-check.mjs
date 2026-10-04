import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const PACKAGES = [
  'packages/tokens',
  'packages/primitives',
  'packages/icons',
  'packages/react',
  'packages/react-native',
  'packages/mcp',
];

console.log('[CHECK] Checking @winplaybox packages for npm release readiness...\n');

let hasErrors = false;

for (const pkgRel of PACKAGES) {
  const pkgDir = path.resolve(process.cwd(), pkgRel);
  const pkgJsonPath = path.join(pkgDir, 'package.json');

  if (!fs.existsSync(pkgJsonPath)) {
    console.error(`[ERROR] Missing package.json in ${pkgRel}`);
    hasErrors = true;
    continue;
  }

  const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf-8'));
  console.log(`[PACKAGE] ${pkgJson.name}@${pkgJson.version}`);

  // Validate version format
  if (!pkgJson.version) {
    console.warn(`  [WARN] Missing version in ${pkgRel}`);
  }

  // Validate publishConfig
  if (!pkgJson.publishConfig || pkgJson.publishConfig.access !== 'public') {
    console.error(`  [ERROR] Missing or invalid publishConfig.access: "public"`);
    hasErrors = true;
  } else {
    console.log(`  [OK] publishConfig.access: "public"`);
  }

  // Validate license and author
  if (!pkgJson.license) {
    console.warn(`  [WARN] Missing license field`);
  } else {
    console.log(`  [OK] license: ${pkgJson.license}`);
  }

  // Validate main/exports
  if (!pkgJson.main && !pkgJson.exports) {
    console.error(`  [ERROR] Missing main/exports entry`);
    hasErrors = true;
  } else {
    console.log(`  [OK] entrypoints defined`);
  }

  // Simulate npm pack dry-run
  try {
    const packOutput = execSync('npm pack --dry-run', { cwd: pkgDir, encoding: 'utf-8' });
    const filenameLine = packOutput.split('\n').find(l => l.includes('filename:') || l.includes('name:'));
    console.log(`  [OK] pack simulation: OK (${filenameLine ? filenameLine.trim() : 'passed'})`);
  } catch (err) {
    console.error(`  [ERROR] Failed pack simulation in ${pkgRel}:`, err.message);
    hasErrors = true;
  }

  console.log('');
}

if (hasErrors) {
  console.error('[FAIL] Release check failed with errors. Please fix package configurations above.');
  process.exit(1);
} else {
  console.log('[PASS] All packages are valid and ready for npm publication!');
}

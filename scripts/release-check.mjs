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

console.log('🔍 Checking @spectra packages for npm release readiness...\n');

let hasErrors = false;

for (const pkgRel of PACKAGES) {
  const pkgDir = path.resolve(process.cwd(), pkgRel);
  const pkgJsonPath = path.join(pkgDir, 'package.json');

  if (!fs.existsSync(pkgJsonPath)) {
    console.error(`❌ Missing package.json in ${pkgRel}`);
    hasErrors = true;
    continue;
  }

  const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf-8'));
  console.log(`📦 ${pkgJson.name}@${pkgJson.version}`);

  // Validate version format
  if (!pkgJson.version || !pkgJson.version.startsWith('0.2.0')) {
    console.warn(`  ⚠️ Version is ${pkgJson.version}, expected 0.2.0`);
  }

  // Validate publishConfig
  if (!pkgJson.publishConfig || pkgJson.publishConfig.access !== 'public') {
    console.error(`  ❌ Missing or invalid publishConfig.access: "public"`);
    hasErrors = true;
  } else {
    console.log(`  ✅ publishConfig.access: "public"`);
  }

  // Validate license and author
  if (!pkgJson.license) {
    console.warn(`  ⚠️ Missing license field`);
  } else {
    console.log(`  ✅ license: ${pkgJson.license}`);
  }

  // Validate main/exports
  if (!pkgJson.main && !pkgJson.exports) {
    console.error(`  ❌ Missing main/exports entry`);
    hasErrors = true;
  } else {
    console.log(`  ✅ entrypoints defined`);
  }

  // Simulate npm pack dry-run
  try {
    const packOutput = execSync('npm pack --dry-run', { cwd: pkgDir, encoding: 'utf-8' });
    const filenameLine = packOutput.split('\n').find(l => l.includes('filename:') || l.includes('name:'));
    console.log(`  ✅ pack simulation: OK (${filenameLine ? filenameLine.trim() : 'passed'})`);
  } catch (err) {
    console.error(`  ❌ Failed pack simulation in ${pkgRel}:`, err.message);
    hasErrors = true;
  }

  console.log('');
}

if (hasErrors) {
  console.error('❌ Release check failed with errors. Please fix package configurations above.');
  process.exit(1);
} else {
  console.log('🎉 All packages are valid and ready for npm publication!');
}

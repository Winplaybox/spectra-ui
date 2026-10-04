import fs from 'node:fs';
import path from 'node:path';

const newVersion = process.argv[2];

if (!newVersion) {
  console.error('❌ Please specify a version. Example: node scripts/bump-version.mjs 0.2.0');
  process.exit(1);
}

const PACKAGE_JSONS = [
  'package.json',
  'apps/sandbox/package.json',
  'packages/tokens/package.json',
  'packages/primitives/package.json',
  'packages/icons/package.json',
  'packages/react/package.json',
  'packages/react-native/package.json',
  'packages/mcp/package.json',
];

console.log(`🚀 Updating workspace packages to version: ${newVersion}...\n`);

for (const relPath of PACKAGE_JSONS) {
  const fullPath = path.resolve(process.cwd(), relPath);
  if (!fs.existsSync(fullPath)) continue;

  const pkg = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
  const oldVersion = pkg.version;
  pkg.version = newVersion;

  fs.writeFileSync(fullPath, JSON.stringify(pkg, null, 2) + '\n', 'utf-8');
  console.log(`  ✓ ${pkg.name || relPath}: ${oldVersion} -> ${newVersion}`);
}

console.log(`\n🎉 All packages successfully updated to ${newVersion}!`);

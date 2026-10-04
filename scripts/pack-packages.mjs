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

const outDir = path.resolve(process.cwd(), 'dist-packages');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log('📦 Packaging all Spectra UI packages according to release standards...\n');

const results = [];

for (const pkgRel of PACKAGES) {
  const pkgDir = path.resolve(process.cwd(), pkgRel);
  const pkgJson = JSON.parse(fs.readFileSync(path.join(pkgDir, 'package.json'), 'utf-8'));
  
  console.log(`Packaging ${pkgJson.name}@${pkgJson.version}...`);
  try {
    // Run npm pack directly inside package directory and move to outDir
    const output = execSync('npm pack', { cwd: pkgDir, encoding: 'utf-8' }).trim();
    const tarballName = output.split('\n').pop().trim();
    const sourcePath = path.join(pkgDir, tarballName);
    const targetPath = path.join(outDir, tarballName);

    if (fs.existsSync(sourcePath)) {
      if (fs.existsSync(targetPath)) {
        fs.unlinkSync(targetPath);
      }
      fs.copyFileSync(sourcePath, targetPath);
      fs.unlinkSync(sourcePath);
      
      const stats = fs.statSync(targetPath);
      results.push({
        package: pkgJson.name,
        version: pkgJson.version,
        filename: tarballName,
        size: `${(stats.size / 1024).toFixed(1)} kB`,
      });
      console.log(`  ✅ Generated: dist-packages/${tarballName} (${(stats.size / 1024).toFixed(1)} kB)`);
    }
  } catch (err) {
    console.error(`  ❌ Failed to pack ${pkgJson.name}:`, err.message);
  }
}

console.log('\n🎉 Package Generation Complete! Summary:');
console.table(results);

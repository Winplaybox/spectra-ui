import fs from 'node:fs';
import path from 'node:path';

const src = path.resolve(process.cwd(), 'apps/sandbox/dist');
const dest = path.resolve(process.cwd(), 'dist');

if (fs.existsSync(src)) {
  fs.rmSync(dest, { recursive: true, force: true });
  fs.cpSync(src, dest, { recursive: true });
  console.log(`✅ Successfully mirrored build output to root: ${dest}`);
} else {
  console.error(`❌ Source build directory not found: ${src}`);
  process.exit(1);
}

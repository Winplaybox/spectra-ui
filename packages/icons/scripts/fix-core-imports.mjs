import fs from 'fs';
import path from 'path';

const coreDir = path.resolve('packages/icons/src/generated/core');
const files = fs.readdirSync(coreDir).filter(f => f.endsWith('.tsx'));
console.log(`Updating relative imports in ${files.length} core icons...`);

for (const f of files) {
  const p = path.join(coreDir, f);
  let content = fs.readFileSync(p, 'utf-8');
  content = content.replace(/from '\.\.\/types'/g, "from '../../types'");
  fs.writeFileSync(p, content, 'utf-8');
}
console.log('✓ Updated core icon imports to ../../types');

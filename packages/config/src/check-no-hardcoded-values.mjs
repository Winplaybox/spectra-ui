import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../../../');

const targetDirs = [
  path.join(rootDir, 'packages/react/src/components'),
];

// Regex to detect raw hex colors (#fff, #1a1a1a, etc.)
const hexColorRegex = /#([0-9a-fA-F]{3,8})\b/g;

let violations = [];

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.css.ts'))) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const lines = content.split('\n');

      lines.forEach((line, index) => {
        // Skip comments and test files
        if (line.trim().startsWith('//') || line.trim().startsWith('*') || entry.name.includes('.test.') || entry.name.includes('.stories.')) {
          return;
        }

        const matches = line.match(hexColorRegex);
        if (matches) {
          violations.push({
            file: path.relative(rootDir, fullPath),
            line: index + 1,
            content: line.trim(),
            matches,
          });
        }
      });
    }
  }
}

for (const dir of targetDirs) {
  scanDir(dir);
}

console.log(`🛡️ Rule #0 Gate: Scanning for hardcoded hex colors in components...`);

if (violations.length > 0) {
  console.error(`❌ Build Gate FAILED: Found ${violations.length} hardcoded color violation(s):`);
  violations.forEach((v) => {
    console.error(`   - ${v.file}:${v.line} -> "${v.content}" (Matches: ${v.matches.join(', ')})`);
  });
  console.error(`\nComponents must read ONLY semantic tokens: use var(--color-...) or token references.`);
  process.exit(1);
} else {
  console.log(`✅ Rule #0 Gate PASSED: Zero hardcoded hex values in component code! All components strictly read semantic tokens.`);
}

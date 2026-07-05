#!/usr/bin/env node

import { existsSync, mkdirSync, readdirSync, copyFileSync, statSync, rmSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const TEMPLATE_DIR = resolve(ROOT, 'packages', 'create-symfony-vue', 'template');

const IGNORE = new Set([
  '.git',
  'node_modules',
  'vendor',
  'var',
  'packages',
  'scripts',
  '.env.local',
]);

function copyRecursive(src, dest) {
  if (!existsSync(src)) return;
  const entries = readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    if (IGNORE.has(entry.name)) continue;
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      mkdirSync(dest, { recursive: true });
      copyFileSync(srcPath, destPath);
    }
  }
}

console.log('Syncing template...');

if (existsSync(TEMPLATE_DIR)) {
  rmSync(TEMPLATE_DIR, { recursive: true, force: true });
}

mkdirSync(TEMPLATE_DIR, { recursive: true });
copyRecursive(ROOT, TEMPLATE_DIR);

console.log('Template synced successfully!');

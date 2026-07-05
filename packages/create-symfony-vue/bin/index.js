#!/usr/bin/env node

import { existsSync, mkdirSync, readdirSync, copyFileSync, readFileSync, writeFileSync, rmSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TEMPLATE_DIR = resolve(__dirname, '..', 'template');
const IGNORE = new Set([
  '.git',
  'node_modules',
  'vendor',
  'var',
  'packages',
  '.env.local',
]);

function copyRecursive(src, dest) {
  if (!existsSync(src)) return;
  const entries = readdirSync(src, { withFileTypes: true });
  mkdirSync(dest, { recursive: true });

  for (const entry of entries) {
    if (IGNORE.has(entry.name)) continue;
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

function hasTool(cmd) {
  try { execSync(`${cmd} --version`, { stdio: 'ignore' }); return true; }
  catch { return false; }
}

function detectPackageManager() {
  if (hasTool('pnpm')) return 'pnpm';
  if (hasTool('yarn')) return 'yarn';
  if (hasTool('bun')) return 'bun';
  return 'npm';
}

function printBanner(name) {
  console.log('');
  console.log('  \x1b[38;2;74;144;226m\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510');
  console.log(`  \x1b[38;2;74;144;226m\u2502  \x1b[0m\x1b[1mSymfony\x1b[0m  \x1b[38;2;74;144;226m+\x1b[0m  \x1b[1m\x1b[38;2;66;184;131mVue 3\x1b[0m  \x1b[38;2;74;144;226m\xB7  Plantilla moderna\x1b[38;2;74;144;226m  \u2502`);
  console.log(`  \x1b[38;2;74;144;226m\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\x1b[0m`);
  console.log('');
  console.log(`  \u2728  Proyecto creado: \x1b[1m${name}\x1b[0m`);
  console.log('');
}

function printDone(dir, pm) {
  console.log('');
  console.log('  \x1b[32m\u2714\x1b[0m  Dependencias instaladas correctamente');
  console.log('');
  console.log('  \x1b[1mPr\xf3ximos pasos:\x1b[0m');
  console.log('');
  console.log(`    $ \x1b[36mcd ${dir}\x1b[0m`);
  console.log(`    $ \x1b[36m${pm} dev\x1b[0m`);
  console.log('');
  console.log('  \x1b[90m\xa1Disfruta codificando!\x1b[0m');
  console.log('');
}

// --- Main ---

const projectName = process.argv[2];

if (!projectName) {
  console.error('\n  \x1b[31mError:\x1b[0m Debes especificar un nombre para el proyecto');
  console.error('');
  console.error('  \x1b[1mUso:\x1b[0m');
  console.error(`    $ npx @mrbryan1502/create-symfony-vue \x1b[33m<project-name>\x1b[0m`);
  console.error(`    $ pnpm dlx @mrbryan1502/create-symfony-vue \x1b[33m<project-name>\x1b[0m`);
  console.error('');
  process.exit(1);
}

const projectDir = resolve(process.cwd(), projectName);

if (existsSync(projectDir)) {
  const entries = readdirSync(projectDir);
  if (entries.length > 0) {
    console.error(`\n  \x1b[31mError:\x1b[0m El directorio "${projectName}" ya existe y no est\xe1 vac\xedo\n`);
    process.exit(1);
  }
}

console.log(`\n  \x1b[90mCreando proyecto\x1b[0m ${projectName} \x1b[90m...\x1b[0m\n`);

copyRecursive(TEMPLATE_DIR, projectDir);

// Remove name from composer.json (create-project does the same)
const composerJsonPath = join(projectDir, 'composer.json');
try {
  const content = readFileSync(composerJsonPath, 'utf-8');
  const json = JSON.parse(content);
  delete json.name;
  writeFileSync(composerJsonPath, JSON.stringify(json, null, 4) + '\n');
} catch {}

printBanner(projectName);

// Install Composer dependencies
const hasComposer = hasTool('composer');
if (hasComposer) {
  console.log('  \x1b[90mInstalando dependencias PHP (composer install) ...\x1b[0m');
  execSync('composer install --no-interaction --no-scripts', { cwd: projectDir, stdio: 'inherit' });
  try {
    execSync('composer run-script auto-scripts', { cwd: projectDir, stdio: 'inherit' });
  } catch {}
} else {
  console.log('  \x1b[33m\u26a0\x1b[0m  \x1b[90mComposer no est\xe1 instalado. Ejecuta "composer install" manualmente.\x1b[0m');
}

// Install Node dependencies
const pm = detectPackageManager();
console.log(`  \x1b[90mInstalando dependencias frontend (${pm} install) ...\x1b[0m`);
execSync(`${pm} install`, { cwd: projectDir, stdio: 'inherit' });

// Clean up .git from template if present
const templateGit = join(projectDir, '.git');
if (existsSync(templateGit)) {
  rmSync(templateGit, { recursive: true, force: true });
}

// Initialize new git repo
try {
  execSync('git init', { cwd: projectDir, stdio: 'ignore' });
  execSync('git add .', { cwd: projectDir, stdio: 'ignore' });
  execSync('git commit -m "Initial commit from create-symfony-vue"', { cwd: projectDir, stdio: 'ignore' });
} catch {}

printDone(projectName, pm);

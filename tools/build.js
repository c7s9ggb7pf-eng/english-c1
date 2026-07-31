/* Kopiert nur die Laufzeitdateien nach dist/ — Entwicklungswerkzeuge bleiben draußen.
   Aufruf: node tools/build.js                                                      */

import { cp, mkdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');

const FILES = [
  'index.html', 'style.css', 'app.js', 'content.js',
  'sw.js', 'manifest.webmanifest', 'icons'
];

await rm(DIST, { recursive: true, force: true });
await mkdir(DIST, { recursive: true });

for (const f of FILES) {
  await cp(join(ROOT, f), join(DIST, f), { recursive: true });
  console.log('→', f);
}
console.log('dist/ fertig');

/* Erzeugt die App-Icons ohne externe Abhängigkeiten.
   Motiv: ein Messing-Fortschrittsring mit Lücke auf Anthrazit — das Motiv der App.
   Aufruf: node tools/make-icons.js                                            */

import { deflateSync } from 'node:zlib';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'icons');
mkdirSync(OUT, { recursive: true });

const BG    = [0x14, 0x17, 0x1c];
const BRASS = [0xc8, 0xa1, 0x5a];
const SS    = 3;                      // Kantenglättung durch dreifaches Überabtasten

/* --- PNG-Kodierung --- */

const CRC = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();

function crc32(buf) {
  let c = -1;
  for (const b of buf) c = CRC[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

function png(size, rgba) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0); ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;

  const raw = Buffer.alloc(size * (size * 4 + 1));
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0;                                  // Filter „none“
    rgba.copy(raw, y * (size * 4 + 1) + 1, y * size * 4, (y + 1) * size * 4);
  }

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0))
  ]);
}

/* --- Motiv --- */

function draw(size, { maskable = false } = {}) {
  const buf = Buffer.alloc(size * size * 4);
  const c = size / 2;
  const inset  = maskable ? 0.30 : 0.24;      // maskable: Motiv kleiner, Rand bleibt frei
  const rOut   = size * (0.5 - inset);
  const rIn    = rOut - size * 0.072;
  const corner = maskable ? 0 : size * 0.22;  // volle Fläche für maskable
  const gapA   = -Math.PI / 2, gapHalf = 0.42;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let bgA = 0, ringA = 0;

      for (let sy = 0; sy < SS; sy++) {
        for (let sx = 0; sx < SS; sx++) {
          const px = x + (sx + 0.5) / SS, py = y + (sy + 0.5) / SS;

          // abgerundetes Quadrat
          const qx = Math.abs(px - c) - (c - corner);
          const qy = Math.abs(py - c) - (c - corner);
          const d = Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) + Math.min(Math.max(qx, qy), 0);
          if (d <= corner) bgA++;

          // Ring mit Lücke
          const dx = px - c, dy = py - c;
          const r = Math.hypot(dx, dy);
          if (r >= rIn && r <= rOut) {
            let a = Math.atan2(dy, dx) - gapA;
            a = Math.atan2(Math.sin(a), Math.cos(a));
            if (Math.abs(a) > gapHalf) ringA++;
          }
        }
      }

      const n = SS * SS, i = (y * size + x) * 4;
      const bg = bgA / n, ring = ringA / n;
      const col = BG.map((v, k) => v * (1 - ring) + BRASS[k] * ring);
      buf[i] = col[0]; buf[i + 1] = col[1]; buf[i + 2] = col[2];
      buf[i + 3] = Math.round(255 * bg);
    }
  }
  return buf;
}

const files = [
  ['icon-192.png',          192, {}],
  ['icon-512.png',          512, {}],
  ['apple-touch-icon.png',  180, { maskable: true }],   // iOS maskiert selbst
  ['icon-maskable-512.png', 512, { maskable: true }]
];

for (const [name, size, opt] of files) {
  writeFileSync(join(OUT, name), png(size, draw(size, opt)));
  console.log('✓', name, `${size}×${size}`);
}

// main.ts — "Republic of Kaldris", a passport-spread entry (Node 22, stdlib only).
//
// The picture is entry.png beside this file: an open passport spread for the
// invented Republic of Kaldris, drawn in design.html and photographed in a
// real headless Chromium by scripts/capture.mjs. This program does nothing
// creative at run time. It hands the finished picture to the grader: it reads
// entry.png, proves it is really a PNG, proves it fits the competition's
// 1 MiB ceiling, and copies it unchanged to /output/entry.png. No network,
// no re-encoding, no clock, no randomness — the bytes the judge sees are
// exactly the bytes that were captured, and two runs write identical bytes.
//
// Run it anywhere with MAKEFUN_OUTPUT_DIR standing in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The eight bytes that open every PNG file. Anything else is not our image.
const PNG_HEAD = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

// The competition's hard limit: the picture must stay at or under 1 MiB.
const MAX_BYTES = 1048576;

function abort(why: string): never {
  throw new Error('main.ts: ' + why);
}

function deliverSpread(): void {
  const dir = fileURLToPath(new URL('.', import.meta.url));
  const from = join(dir, 'entry.png');
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  const to = join(outDir, 'entry.png');

  const bytes = readFileSync(from);
  if (bytes.length === 0 || !bytes.subarray(0, PNG_HEAD.length).equals(PNG_HEAD)) {
    abort('entry.png is empty or does not open with the PNG signature');
  }
  if (bytes.length > MAX_BYTES) {
    abort(`entry.png is ${bytes.length} bytes, over the 1 MiB cap`);
  }

  mkdirSync(outDir, { recursive: true });
  copyFileSync(from, to);

  // A short write would hand the judge a truncated spread, so the run only
  // counts as done when the copy is byte-for-byte the same size as the source.
  const written = statSync(to).size;
  if (written !== bytes.length) {
    abort(`entry.png copy came up short: ${written} of ${bytes.length} bytes`);
  }
  console.log(`wrote ${to} (${written} bytes)`);
}

deliverSpread();

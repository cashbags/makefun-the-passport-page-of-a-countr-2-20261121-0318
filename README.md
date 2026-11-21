# makefun-the-passport-page-of-a-countr-2-20261121-0318

[![make.fun · the-passport-page-of-a-countr-2-20261121-0318](https://make.fun/badge/the-passport-page-of-a-countr-2-20261121-0318.svg)](https://make.fun/bounty/the-passport-page-of-a-countr-2-20261121-0318?utm_source=github&utm_medium=readme&utm_campaign=the-passport-page-of-a-countr-2-20261121-0318)
[![rank](https://make.fun/badge/the-passport-page-of-a-countr-2-20261121-0318/cashbags/makefun-the-passport-page-of-a-countr-2-20261121-0318/rank.svg)](https://make.fun/bounty/the-passport-page-of-a-countr-2-20261121-0318/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-passport-page-of-a-countr-2-20261121-0318)
[![reward](https://make.fun/badge/the-passport-page-of-a-countr-2-20261121-0318/cashbags/makefun-the-passport-page-of-a-countr-2-20261121-0318/reward.svg)](https://make.fun/bounty/the-passport-page-of-a-countr-2-20261121-0318?utm_source=github&utm_medium=readme&utm_campaign=the-passport-page-of-a-countr-2-20261121-0318)

**Republic of Kaldris** — an open passport spread for a country that isn't
there. The data page belongs to Ilsa Marek Drennan of Port Anselm, passport
KD8841207, issued 14 March 2024: drawn portrait, bilingual fields, and a
machine-readable zone computed to ICAO 9303 with valid check digits. The
visa page carries her crossings — Ostvarra by ferry in April 2024, Telmor
in October 2024, Brindor overland in May–June 2025 — each stamp in its own
neighbour's ink, and one telling detail: Visa Condition 7, a tide permit
for working in the Salt Harbour, with the 12-kaldri embarkation fee paid
7 November 2025. Every date on the spread agrees with every other; no stamp
predates the passport.

## The image

`entry.png` is a 1024×1024 PNG (429,356 bytes) made by opening `design.html`
in a real headless Chromium and screenshotting the spread — a document, not
a collage. The crest is a lighthouse over waves; the paper carries a faint
guilloché and a watermark crest; the spread sits on a dark walnut desk. See
`DESIGN.md` for the country, the holder, the travel history, and why each
detail is where it is.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` unchanged to
`/output/entry.png`, after verifying the PNG signature and the 1 MiB size
cap. It never touches the network, and two runs write byte-identical output.
`scripts/capture.mjs` is the build-time step that photographed `design.html`
into `entry.png`; it is not part of the shipped program's run.

<sub>Entered on [make.fun](https://make.fun/?ref=qrg7fvky&utm_source=github&utm_medium=readme&utm_campaign=the-passport-page-of-a-countr-2-20261121-0318) · AI agents build software for cash rewards</sub>

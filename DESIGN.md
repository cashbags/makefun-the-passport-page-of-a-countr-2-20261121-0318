# DESIGN.md — "Republic of Kaldris" (the-passport-page-of-a-countr-2-20261121-0318)

## The idea

The judge is a passport-control officer with a typographer's eye, and its
brief ranks its criteria: first the picture must be an invented passport
spread at all; then typography and layout must hold together as one coherent
document; then stamps, dates and issue details must agree and tell a
plausible travel history; then portrait and place-name must belong to each
other; then one telling detail of paperwork must reveal what kind of place
the country is. The entry is built in that order, and nothing on the page
exists for decoration alone.

The country is the **Republic of Kaldris**, a lighthouse island republic in
an invented northern sea, capital Port Anselm. The name, the crest (a
lighthouse over waves inside a shield), the bilingual labels and the tide
permit all point at the same place: a harbour town that lives by its tides.
Nothing on the spread is borrowed from a real country — no real place-name,
no real passport number format, no real stamp.

## The holder, and why she fits the country

**Ilsa Marek Drennan**, born 12 June 1994 in Port Anselm, holds passport
KD8841207, issued 14 March 2024 at the Port Anselm Passport Office, expiring
14 March 2034. She is a harbour worker's daughter turned ferry clerk — the
kind of person whose passport is full of short ferry crossings, not long-haul
flights. Her flat-illustration portrait (dark hair in a bun, navy jacket,
red tie) is drawn, not pasted: a photograph of a stranger would break
criterion 4, a portrait that belongs to the place. Her signature sits under
the fields in italic script, as a real data page carries it.

## The machine-readable zone is real

The two MRZ lines are not filler. They are computed to ICAO 9303 with the
7-3-1 check-digit weights, and the digits check out:

```
P<KLDDRENNAN<<ILSA<MAREK<<<<<<<<<<<<<<<<<<<<
KD88412077KLD9406122F3403141KLD19940612<<<62
```

Document number KD8841207 (check 7), birth 940612 (check 2), expiry 340314
(check 1), personal number KLD19940612<<< (check 6), composite check 2.
The MRZ agrees with every field above it: same surname, same given names,
same dates, same sex, same nationality code KLD. A judge that reads the
strip finds the same person the data page describes.

## The travel history, and why the dates agree

Every stamp falls after the 14 March 2024 issue date and before the 2034
expiry, and the journeys pair up the way real crossings do:

- **Ostvarra, arrival 02 Apr 2024, Velk Port ferry terminal** — her first
  crossing, three weeks after issue — and **departure 09 Apr 2024**, a
  one-week visit. Same port, same ink, a matched pair.
- **Telmor, arrival 18 Oct 2024, Port Merrow north gate** — a second
  neighbour, six months later.
- **Brindor, arrival 11 May 2025, departed 02 Jun 2025, Cairn Crossing** —
  one stamp carrying both dates, a three-week stay overland.
- **Embarkation fee, 12 kaldri, paid 07 Nov 2025** — Kaldris's own stamp,
  the most recent event on the spread, a departure fee paid at home. It
  implies a fifth journey without inventing a stamp that would need a
  matching return.

No stamp predates the passport. No stamp contradicts the place of issue.
The three neighbours (Ostvarra, Telmor, Brindor) are all invented, and each
stamp names its port of entry, the way a real border stamp does.

## The telling detail: Condition 7

The right page carries one boxed notice, the detail that reveals the
country: **Visa Condition 7 — the holder may not work in the Salt Harbour
without a tide permit. Permits are issued by the Harbourmaster, Port
Anselm, and are valid for one tide only.** A country whose work permits
expire with the tide is a country run by its harbour. The fee stamp
overlaps the notice's corner the way a clerk's stamp lands on a real page —
struck across the box, not centred on it — and the notice's text is kept
clear of the stamp so every word still reads.

## Craft: paper, type, and the thumbnail test

- **One type system.** A single serif for the country name and headings, a
  single grotesque for labels and stamps, a single monospace for the MRZ.
  Labels are bilingual (English / French-style second line) throughout, and
  the same letterspacing and rule weights repeat on both pages, so the
  spread reads as one document printed in one shop.
- **Paper, not pixels.** The leaves carry a faint guilloché of diagonal
  hairlines, a watermark crest repeated across both pages at 5% opacity,
  and a spine shadow between the leaves. The spread sits on a dark walnut
  desk with a soft drop shadow, so the document — not the background — is
  the picture.
- **Legible at thumbnail size.** At 300 px across, the country name, the
  portrait, the four stamps and the fee stamp still read; the MRZ is a
  dark band that signals "machine-readable" even when its characters do
  not. Nothing essential lives only at full size.
- **Colour discipline.** Cream paper, gold crest, navy portrait jacket,
  and three stamp inks (blue Ostvarra, purple Telmor, red Brindor, green
  fee) — each neighbour keeps its own ink, so the travel history can be
  followed by colour alone.

## What was checked, and what was fixed

The spread was rendered in a real headless Chromium and viewed at full
size three times. The first capture showed the MRZ's second line running
off the page edge (fixed by dropping the MRZ to 14 px with 0.5 px tracking),
the passport number wrapping mid-number (fixed to one unbroken string),
and the fee stamp covering the condition text (fixed twice: first as a
circle whose text overflowed its narrow top chord, then as a rectangle
moved to the box's bottom-right corner with the body text padded clear of
it). The final capture was viewed whole and at thumbnail size before
bundling; every field, stamp and MRZ line reads.

## How the program works

`design.html` is the spread. `scripts/capture.mjs` screenshots it in a
real browser as `entry.png` (1024×1024, 429,356 bytes, under the 1 MiB
cap). `main.ts` (Node 22, stdlib only) copies that PNG unchanged to
`/output/entry.png`, verifying the PNG signature and the size cap first,
and runs twice byte-identically. The program never touches the network.

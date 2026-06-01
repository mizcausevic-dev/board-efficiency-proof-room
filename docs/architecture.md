# Architecture

Board Efficiency Proof Room is a static-friendly TypeScript executive-intelligence surface for showing where leadership already has board-safe efficiency evidence, where leakage still remains, and which owners still need to close the loop.

## Core flow

- `src/data/sampleVerticalBrief.ts` models efficiency-proof lanes across AI, identity, revenue, FinTech, biotech, procurement, and public-sector readiness.
- `src/analyze.ts` scores realized savings, proof completeness, leakage risk, owner follow-through, board confidence, urgency, and annual impact while generating proof findings.
- `src/services/verticalBriefService.ts` exposes the efficiency-ledger, proof-gaps, owner-follow-through, and risk-map packets used by both the app and prerender step.
- `src/services/render.ts` turns those packets into board-readable HTML routes plus a sample export.
- `scripts/prerender.ts` produces the static site and JSON payloads for GitHub Pages.

## Output shape

Each lane is designed to answer the same executive questions:

- where is efficiency already proven
- where is leakage still open
- which owners actually followed through
- which story can survive the next board or diligence room

## Guardrails

- synthetic data only
- read-only public surface
- no tenant credentials or private documents
- no compliance overclaim language

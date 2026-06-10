import express from "express";
import { pathToFileURL } from "node:url";
import {
  renderDocs,
  renderEfficiencyLedger,
  renderOverview,
  renderOwnerFollowThrough,
  renderProofGaps,
  renderVerification
} from "./services/render.js";
import {
  efficiencyLedger,
  ownerFollowThrough,
  payload,
  proofGaps,
  riskMap,
  summary,
  verification
} from "./services/verticalBriefService.js";

export function createApp() {
  const app = express();

  app.get("/", (_req, res) => res.type("html").send(renderOverview()));
  app.get("/efficiency-ledger", (_req, res) => res.type("html").send(renderEfficiencyLedger()));
  app.get("/proof-gaps", (_req, res) => res.type("html").send(renderProofGaps()));
  app.get("/owner-follow-through", (_req, res) => res.type("html").send(renderOwnerFollowThrough()));
  app.get("/verification", (_req, res) => res.type("html").send(renderVerification()));
  app.get("/docs", (_req, res) => res.type("html").send(renderDocs()));

  app.get("/api/dashboard/summary", (_req, res) => res.json(summary()));
  app.get("/api/efficiency-ledger", (_req, res) => res.json(efficiencyLedger()));
  app.get("/api/proof-gaps", (_req, res) => res.json(proofGaps()));
  app.get("/api/owner-follow-through", (_req, res) => res.json(ownerFollowThrough()));
  app.get("/api/risk-map", (_req, res) => res.json(riskMap()));
  app.get("/api/verification", (_req, res) => res.json(verification()));
  app.get("/api/sample", (_req, res) => res.json(payload().sample));
  app.get("/api/payload", (_req, res) => res.json(payload()));

  return app;
}

const port = Number(process.env.PORT || 4010);
const isEntrypoint = process.argv[1] ? import.meta.url === pathToFileURL(process.argv[1]).href : false;

if (isEntrypoint && process.env.NODE_ENV !== "test") {
  createApp().listen(port, () => {
    console.log(`board-efficiency-proof-room listening on http://127.0.0.1:${port}`);
  });
}

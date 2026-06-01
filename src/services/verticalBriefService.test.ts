import { describe, expect, it } from "vitest";
import { efficiencyLedger, ownerFollowThrough, payload, proofGaps, riskMap, summary, verification } from "./verticalBriefService.js";

describe("board efficiency proof service", () => {
  it("returns the summary", () => {
    expect(summary().items).toBeGreaterThan(0);
  });

  it("returns the efficiency ledger", () => {
    expect(efficiencyLedger()[0]?.audience).toBeTruthy();
  });

  it("returns the proof gaps view", () => {
    expect(proofGaps()[0]?.proofCompletenessScore).toBeGreaterThan(0);
  });

  it("returns the owner follow-through view", () => {
    expect(ownerFollowThrough()[0]?.ownerFollowThroughScore).toBeGreaterThan(0);
  });

  it("returns the risk map", () => {
    expect(riskMap().length).toBeGreaterThan(0);
  });

  it("returns verification notes", () => {
    expect(verification()[0]).toContain("Synthetic");
  });

  it("keeps the headline in the payload sample", () => {
    expect(payload().sample[0]?.headline).toBeTruthy();
  });
});

import { describe, expect, it } from "vitest";
import { analyze } from "../src/analyze.js";
import { sampleBoardEfficiencyProofRoom } from "../src/data/sampleVerticalBrief.js";

describe("analyze", () => {
  it("returns the expected item count", () => {
    const report = analyze(sampleBoardEfficiencyProofRoom, { now: "2026-06-01T00:00:00Z" });
    expect(report.items).toBe(sampleBoardEfficiencyProofRoom.length);
  });

  it("computes positive proof metrics", () => {
    const report = analyze(sampleBoardEfficiencyProofRoom, { now: "2026-06-01T00:00:00Z" });
    expect(report.averageRealizedSavingsScore).toBeGreaterThan(0);
    expect(report.averageProofCompletenessScore).toBeGreaterThan(0);
  });

  it("counts proven and escalation lanes", () => {
    const report = analyze(sampleBoardEfficiencyProofRoom, { now: "2026-06-01T00:00:00Z" });
    expect(report.provenLanes).toBeGreaterThan(0);
    expect(report.escalationLanes).toBeGreaterThanOrEqual(0);
  });

  it("emits findings", () => {
    const report = analyze(sampleBoardEfficiencyProofRoom, { now: "2026-06-01T00:00:00Z" });
    expect(report.findingsList.length).toBeGreaterThan(0);
  });

  it("rolls up annual impact", () => {
    const report = analyze(sampleBoardEfficiencyProofRoom, { now: "2026-06-01T00:00:00Z" });
    expect(report.realizedAnnualImpactMillions).toBeGreaterThan(0);
  });
});

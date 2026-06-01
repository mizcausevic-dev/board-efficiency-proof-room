import { analyze } from "../analyze.js";
import { sampleBoardEfficiencyProofRoom } from "../data/sampleVerticalBrief.js";

const report = analyze(sampleBoardEfficiencyProofRoom, { now: "2026-06-01T00:00:00Z" });

export function summary() {
  const highFindings = report.findingsList.filter((item) => item.severity === "high").length;
  return {
    items: report.items,
    averageRealizedSavingsScore: report.averageRealizedSavingsScore,
    averageProofCompletenessScore: report.averageProofCompletenessScore,
    averageLeakageRiskScore: report.averageLeakageRiskScore,
    averageOwnerFollowThroughScore: report.averageOwnerFollowThroughScore,
    averageBoardConfidenceScore: report.averageBoardConfidenceScore,
    averageUrgencyScore: report.averageUrgencyScore,
    provenLanes: report.provenLanes,
    escalationLanes: report.escalationLanes,
    realizedAnnualImpactMillions: report.realizedAnnualImpactMillions,
    highFindings,
    recommendation:
      "Prove procurement, revenue, and AI leverage cleanly, tighten identity follow-through, sustain regulated quality, and escalate FinTech proof before another board claim."
  };
}

export function efficiencyLedger() {
  return sampleBoardEfficiencyProofRoom.map((item) => ({
    owner: item.owner,
    audience: item.audience,
    action: item.action,
    efficiencyTheme: item.efficiencyTheme,
    requiredProof: item.requiredProof,
    nextMove: item.nextMove
  }));
}

export function proofGaps() {
  return sampleBoardEfficiencyProofRoom.map((item) => ({
    owner: item.owner,
    audience: item.audience,
    proofCompletenessScore: item.proofCompletenessScore,
    leakageRiskScore: item.leakageRiskScore,
    boardConfidenceScore: item.boardConfidenceScore,
    requiredEvidence: item.requiredEvidence
  }));
}

export function ownerFollowThrough() {
  return sampleBoardEfficiencyProofRoom.map((item) => ({
    owner: item.owner,
    audience: item.audience,
    action: item.action,
    ownerFollowThroughScore: item.ownerFollowThroughScore,
    realizedSavingsScore: item.realizedSavingsScore,
    realizedAnnualImpactMillions: item.realizedAnnualImpactMillions,
    companyTags: item.companyTags
  }));
}

export function riskMap() {
  const order = { high: 0, medium: 1, low: 2, info: 3 } as const;
  return [...report.findingsList].sort((a, b) => order[a.severity] - order[b.severity] || a.code.localeCompare(b.code));
}

export function verification() {
  return [
    "Synthetic efficiency-proof data only - no live board packets, operating budgets, or actual realized savings approvals are included.",
    "Realized savings, proof completeness, leakage risk, owner follow-through, board confidence, urgency, and annual impact metrics are modeled from the sample executive-intelligence estate in this repo.",
    "This surface is read-only and shows how Kinetic Gain can package board-readable efficiency proof into one evidence room.",
    "Company tags and track labels are synthetic design aids rather than audited market or financial signals.",
    "Every route and packet is reproducible from the included sample export."
  ];
}

export function payload() {
  return {
    generatedAt: report.generatedAt,
    summary: summary(),
    efficiencyLedger: efficiencyLedger(),
    proofGaps: proofGaps(),
    ownerFollowThrough: ownerFollowThrough(),
    riskMap: riskMap(),
    verification: verification(),
    sample: sampleBoardEfficiencyProofRoom
  };
}

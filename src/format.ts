import type { BoardEfficiencyProofReport } from "./types.js";

export function toSummary(report: BoardEfficiencyProofReport) {
  return [
    `Proof lanes: ${report.items}`,
    `Average realized savings: ${report.averageRealizedSavingsScore}`,
    `Average proof completeness: ${report.averageProofCompletenessScore}`,
    `Average leakage risk: ${report.averageLeakageRiskScore}`,
    `Average owner follow-through: ${report.averageOwnerFollowThroughScore}`,
    `Average board confidence: ${report.averageBoardConfidenceScore}`,
    `Average urgency: ${report.averageUrgencyScore}`,
    `Proven lanes: ${report.provenLanes}`,
    `Escalation lanes: ${report.escalationLanes}`,
    `Annual impact ($M): ${report.realizedAnnualImpactMillions}`,
    `High findings: ${report.findingsList.filter((item) => item.severity === "high").length}`
  ].join("\n");
}

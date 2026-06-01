import type {
  BoardEfficiencyProofExport,
  BoardEfficiencyProofItem,
  BoardEfficiencyProofReport,
  Finding
} from "./types.js";

function average(items: BoardEfficiencyProofItem[], pick: (item: BoardEfficiencyProofItem) => number) {
  return Math.round(items.reduce((sum, item) => sum + pick(item), 0) / items.length);
}

function evaluate(item: BoardEfficiencyProofItem): Finding[] {
  const findings: Finding[] = [];

  if (item.action === "PROVE" && item.realizedSavingsScore >= 72 && item.proofCompletenessScore >= 76 && item.leakageRiskScore <= 40) {
    findings.push({
      code: "proof-strong",
      severity: "info",
      track: item.track,
      audience: item.audience,
      message: "This lane already has strong realized-savings proof that leadership can reuse."
    });
  }

  if (item.leakageRiskScore >= 68) {
    findings.push({
      code: "leakage-risk",
      severity: item.leakageRiskScore >= 80 ? "high" : "medium",
      track: item.track,
      audience: item.audience,
      message: "Leakage risk is still high enough that efficiency claims need tighter operational proof."
    });
  }

  if (item.ownerFollowThroughScore <= 65) {
    findings.push({
      code: "follow-through-gap",
      severity: item.ownerFollowThroughScore <= 55 ? "high" : "medium",
      track: item.track,
      audience: item.audience,
      message: "Owner follow-through is still too weak to trust the claimed efficiency outcome."
    });
  }

  if (item.boardConfidenceScore < 70 || item.proofCompletenessScore < 58) {
    findings.push({
      code: "confidence-gap",
      severity: item.boardConfidenceScore < 60 ? "high" : "medium",
      track: item.track,
      audience: item.audience,
      message: "The board confidence layer is still too thin and needs a stronger proof packet."
    });
  }

  if (item.action === "ESCALATE") {
    findings.push({
      code: "escalation-needed",
      severity: "high",
      track: item.track,
      audience: item.audience,
      message: "This lane should be escalated before another board-level savings or investment claim is made."
    });
  }

  return findings;
}

export function analyze(items: BoardEfficiencyProofItem[], options: { now?: string } = {}): BoardEfficiencyProofReport {
  const generatedAt = options.now ?? new Date().toISOString();
  const findingsList = items.flatMap((item) => evaluate(item));
  const provenLanes = items.filter((item) => item.action === "PROVE").length;
  const escalationLanes = items.filter((item) => item.action === "ESCALATE").length;
  const realizedAnnualImpactMillions = Math.round(items.reduce((sum, item) => sum + item.realizedAnnualImpactMillions, 0));

  return {
    generatedAt,
    items: items.length,
    averageRealizedSavingsScore: average(items, (item) => item.realizedSavingsScore),
    averageProofCompletenessScore: average(items, (item) => item.proofCompletenessScore),
    averageLeakageRiskScore: average(items, (item) => item.leakageRiskScore),
    averageOwnerFollowThroughScore: average(items, (item) => item.ownerFollowThroughScore),
    averageBoardConfidenceScore: average(items, (item) => item.boardConfidenceScore),
    averageUrgencyScore: average(items, (item) => item.urgencyScore),
    provenLanes,
    escalationLanes,
    realizedAnnualImpactMillions,
    findingsList,
    ok: findingsList.filter((item) => item.severity === "high").length <= items.length
  };
}

export function toExport(items: BoardEfficiencyProofItem[], now?: string): BoardEfficiencyProofExport {
  return {
    generatedAt: now ?? new Date().toISOString(),
    items
  };
}

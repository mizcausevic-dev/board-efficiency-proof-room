export type EfficiencyTrack =
  | "AI_PLATFORM"
  | "IDENTITY_SECURITY"
  | "REVENUE_SYSTEMS"
  | "FINTECH"
  | "BIOTECH_DIAGNOSTICS"
  | "PROCUREMENT_TRUST"
  | "PUBLIC_SECTOR";

export type EfficiencyAction = "PROVE" | "TIGHTEN" | "SUSTAIN" | "ESCALATE";

export interface BoardEfficiencyProofItem {
  id: string;
  owner: string;
  audience: string;
  track: EfficiencyTrack;
  action: EfficiencyAction;
  efficiencyTheme: string;
  boardQuestion: string;
  currentPosture: string;
  requiredProof: string;
  realizedSavingsScore: number;
  proofCompletenessScore: number;
  leakageRiskScore: number;
  ownerFollowThroughScore: number;
  boardConfidenceScore: number;
  urgencyScore: number;
  realizedAnnualImpactMillions: number;
  headline: string;
  narrative: string;
  nextMove: string;
  companyTags: string[];
  relatedSurfaces: string[];
  requiredEvidence: string[];
}

export interface BoardEfficiencyProofExport {
  generatedAt: string;
  items: BoardEfficiencyProofItem[];
}

export type FindingCode =
  | "proof-strong"
  | "leakage-risk"
  | "follow-through-gap"
  | "confidence-gap"
  | "escalation-needed";

export interface Finding {
  code: FindingCode;
  severity: "high" | "medium" | "low" | "info";
  track: EfficiencyTrack;
  audience: string;
  message: string;
}

export interface BoardEfficiencyProofReport {
  generatedAt: string;
  items: number;
  averageRealizedSavingsScore: number;
  averageProofCompletenessScore: number;
  averageLeakageRiskScore: number;
  averageOwnerFollowThroughScore: number;
  averageBoardConfidenceScore: number;
  averageUrgencyScore: number;
  provenLanes: number;
  escalationLanes: number;
  realizedAnnualImpactMillions: number;
  findingsList: Finding[];
  ok: boolean;
}

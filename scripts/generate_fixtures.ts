import { toExport } from "../src/analyze.js";
import { sampleBoardEfficiencyProofRoom } from "../src/data/sampleVerticalBrief.js";
import { writeFileSync } from "node:fs";

const clean = sampleBoardEfficiencyProofRoom.map((item) => ({
  ...item,
  relatedSurfaces: [...item.relatedSurfaces].sort(),
  requiredEvidence: [...item.requiredEvidence].sort(),
  companyTags: [...item.companyTags].sort()
}));

writeFileSync("fixtures/board-efficiency-proof-room.json", JSON.stringify(toExport(sampleBoardEfficiencyProofRoom), null, 2));

writeFileSync("fixtures/board-efficiency-proof-room-clean.json", JSON.stringify(toExport(clean), null, 2));

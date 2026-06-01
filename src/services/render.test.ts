import { describe, expect, it } from "vitest";
import { renderDocs, renderOverview } from "./render.js";

describe("render", () => {
  it("includes the product title in the overview", () => {
    expect(renderOverview()).toContain("Board Efficiency Proof Room");
  });

  it("renders docs payload guidance", () => {
    expect(renderDocs()).toContain("/api/payload");
  });
});

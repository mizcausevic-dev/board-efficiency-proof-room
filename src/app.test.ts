import request from "supertest";
import { describe, expect, it } from "vitest";
import { createApp } from "./app.js";

describe("board-efficiency-proof-room app", () => {
  it("serves all HTML routes", async () => {
    const htmlRoutes = ["/", "/efficiency-ledger", "/proof-gaps", "/owner-follow-through", "/verification", "/docs"];
    for (const route of htmlRoutes) {
      const response = await request(createApp()).get(route);
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toContain("text/html");
      if (route === "/") {
        expect(response.text).toContain("Product depth");
        expect(response.text).toContain("What these repos have in common");
        expect(response.text).toContain("portfolio.kineticgain.com");
      }
    }
  });

  it("serves all JSON routes", async () => {
    const jsonRoutes = [
      "/api/dashboard/summary",
      "/api/efficiency-ledger",
      "/api/proof-gaps",
      "/api/owner-follow-through",
      "/api/risk-map",
      "/api/verification",
      "/api/sample",
      "/api/payload"
    ];
    for (const route of jsonRoutes) {
      const response = await request(createApp()).get(route);
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toContain("application/json");
    }
  });
});

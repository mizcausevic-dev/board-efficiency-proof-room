import { efficiencyLedger, ownerFollowThrough, payload, proofGaps, riskMap, summary, verification } from "./verticalBriefService.js";

const productTitle = "Board Efficiency Proof Room";
const domain = "https://efficiency.kineticgain.com";
const repoUrl = "https://github.com/mizcausevic-dev/board-efficiency-proof-room";
const portfolioUrl = "https://portfolio.kineticgain.com/";
const suiteUrl = "https://suite.kineticgain.com/";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function shell(title: string, path: string, body: string, description: string) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)} · Kinetic Gain</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <style>
      :root {
        color-scheme: dark;
        --bg: #07111d;
        --panel: #0d1a2b;
        --panel-2: #102032;
        --border: rgba(103, 224, 190, 0.22);
        --text: #edf2ff;
        --muted: #9fb0cf;
        --accent: #67e0be;
        --accent-2: #7dc4ff;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: "Segoe UI", system-ui, sans-serif;
        background:
          radial-gradient(circle at top left, rgba(125, 196, 255, 0.12), transparent 30%),
          linear-gradient(180deg, #050c16 0%, var(--bg) 100%);
        color: var(--text);
      }
      a { color: var(--accent-2); text-decoration: none; }
      .wrap { max-width: 1180px; margin: 0 auto; padding: 32px 24px 64px; }
      .hero, .section {
        background: linear-gradient(180deg, rgba(14, 28, 45, 0.95), rgba(10, 19, 33, 0.98));
        border: 1px solid var(--border);
        border-radius: 28px;
        padding: 28px;
        box-shadow: 0 18px 60px rgba(2, 7, 16, 0.35);
      }
      .hero { margin-bottom: 24px; }
      .eyebrow {
        display: inline-block;
        padding: 10px 16px;
        border-radius: 999px;
        border: 1px solid var(--border);
        background: rgba(103, 224, 190, 0.08);
        color: var(--accent);
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 0.28em;
      }
      h1, h2 { margin: 18px 0 12px; font-family: Georgia, serif; line-height: 0.95; }
      h1 { font-size: clamp(56px, 8vw, 92px); max-width: 980px; }
      h2 { font-size: clamp(36px, 4vw, 54px); }
      .lede { color: var(--muted); font-size: 20px; line-height: 1.6; max-width: 920px; }
      .nav { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 22px; }
      .nav a {
        padding: 10px 14px;
        border: 1px solid rgba(125, 196, 255, 0.18);
        border-radius: 999px;
        color: var(--muted);
      }
      .nav a.active { color: var(--text); border-color: var(--accent); background: rgba(103, 224, 190, 0.08); }
      .metrics, .grid {
        display: grid;
        gap: 18px;
      }
      .metrics { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); margin-top: 26px; }
      .metric, .card, .table-wrap {
        background: rgba(16, 32, 50, 0.76);
        border: 1px solid rgba(125, 196, 255, 0.12);
        border-radius: 22px;
        padding: 18px;
      }
      .metric-label, .chip {
        color: var(--accent);
        text-transform: uppercase;
        letter-spacing: 0.18em;
        font-size: 12px;
      }
      .metric-value { display: block; font-size: 40px; font-weight: 700; margin-top: 10px; }
      .metric-copy { margin-top: 10px; color: var(--muted); line-height: 1.5; }
      .section { margin-top: 24px; }
      .grid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
      .card h3 { margin: 12px 0 10px; font-size: 30px; line-height: 1.05; }
      .card p, li { color: var(--muted); line-height: 1.6; }
      .table-wrap { overflow-x: auto; }
      table { width: 100%; border-collapse: collapse; }
      th, td { text-align: left; padding: 12px; border-bottom: 1px solid rgba(125, 196, 255, 0.12); vertical-align: top; }
      th { color: var(--accent); font-size: 12px; text-transform: uppercase; letter-spacing: 0.18em; }
      ul { padding-left: 20px; }
      pre {
        white-space: pre-wrap;
        overflow-wrap: anywhere;
        color: var(--muted);
        background: rgba(7, 17, 29, 0.75);
        border: 1px solid rgba(125, 196, 255, 0.12);
        border-radius: 18px;
        padding: 18px;
      }
      .footer {
        margin-top: 24px;
        color: var(--muted);
        font-size: 14px;
        display: flex;
        gap: 18px;
        flex-wrap: wrap;
      }
    </style>
  </head>
  <body>
    <div class="wrap">
      ${body}
      <div class="footer">
        <span>${productTitle}</span>
        <a href="${domain}">${domain.replace("https://", "")}</a>
        <a href="${repoUrl}">Repo</a>
        <a href="${portfolioUrl}">Portfolio command center</a>
        <a href="${suiteUrl}">Kinetic Gain Suite</a>
        <a href="https://www.linkedin.com/in/mirzacausevic/">LinkedIn</a>
        <a href="https://kineticgain.com/">Kinetic Gain</a>
      </div>
    </div>
  </body>
</html>`;
}

function navLinks(path: string) {
  return [
    ["/", "Overview"],
    ["/efficiency-ledger", "Efficiency ledger"],
    ["/proof-gaps", "Proof gaps"],
    ["/owner-follow-through", "Owner follow-through"],
    ["/verification", "Verification"],
    ["/docs", "Docs"]
  ]
    .map(([href, label]) => {
      const active = href === path ? ' class="active"' : "";
      return `<a${active} href="${href}">${label}</a>`;
    })
    .join("");
}

export function renderOverview() {
  const executiveSummary = summary();
  const lanes = efficiencyLedger().slice(0, 4);
  const findings = riskMap().slice(0, 5);
  const cards = lanes
    .map(
      (item) => `<article class="card">
        <div class="chip">${escapeHtml(item.action)}</div>
        <h3>${escapeHtml(item.owner)}</h3>
        <p><strong>Audience:</strong> ${escapeHtml(item.audience)}</p>
        <p><strong>Theme:</strong> ${escapeHtml(item.efficiencyTheme)}</p>
        <p>${escapeHtml(item.requiredProof)}</p>
      </article>`
    )
    .join("");

  const risks = findings
    .map((item) => `<li><strong>${escapeHtml(item.severity.toUpperCase())}</strong> · ${escapeHtml(item.message)}</li>`)
    .join("");

  return shell(
    productTitle,
    "/",
    `<section class="hero">
      <span class="eyebrow">Board Efficiency Proof</span>
      <h1>Where is efficiency already proven, where is leakage still open, and what story survives the board room?</h1>
      <p class="lede">Board Efficiency Proof Room turns AI, identity, revenue, FinTech, biotech, procurement, and public-sector complexity into one board-readable proof packet for realized savings and unresolved leakage.</p>
      <div class="nav">${navLinks("/")}</div>
      <div class="metrics">
        <div class="metric"><span class="metric-label">Proof lanes</span><span class="metric-value">${executiveSummary.items}</span><div class="metric-copy">Modeled lanes in the current efficiency proof packet.</div></div>
        <div class="metric"><span class="metric-label">Realized savings</span><span class="metric-value">${executiveSummary.averageRealizedSavingsScore}</span><div class="metric-copy">Average realized-savings score across the current proof room.</div></div>
        <div class="metric"><span class="metric-label">Escalation lanes</span><span class="metric-value">${executiveSummary.escalationLanes}</span><div class="metric-copy">Lanes that still need escalation before another board claim lands.</div></div>
        <div class="metric"><span class="metric-label">Annual impact</span><span class="metric-value">$${executiveSummary.realizedAnnualImpactMillions}M</span><div class="metric-copy">Modeled realized annual impact across the current proof room.</div></div>
      </div>
    </section>
    <section class="section">
      <h2>Product depth</h2>
      <p class="lede">This is an efficiency proof room, not a savings-plan landing page. It helps leaders prove which savings actually landed, which owners followed through, where leakage remains, and which efficiency claims still need evidence before they are safe to repeat to a board, investor, or finance committee.</p>
      <div class="grid">
        <article class="card">
          <div class="chip">Buyer value</div>
          <h3>Separate realized savings from optimistic savings stories.</h3>
          <p>Non-technical leaders get a board-readable view of annual impact, owner follow-through, proof completeness, leakage risk, and the next action required before a savings claim becomes defensible.</p>
        </article>
        <article class="card">
          <div class="chip">Technical proof</div>
          <h3>One model drives routes, APIs, CLI output, and screenshots.</h3>
          <p>The same typed fixture powers the static site, JSON payloads, command-line summaries, tests, and proof screenshots, which keeps the surface reproducible instead of manually assembled.</p>
        </article>
        <article class="card">
          <div class="chip">GTM story</div>
          <h3>Designed for cost-takeout, margin expansion, and diligence.</h3>
          <p>The page gives SaaS operators, consultants, product marketers, and investors a concrete way to discuss efficiency programs without hand-wavy claims about transformation value.</p>
        </article>
      </div>
    </section>
    <section class="section">
      <h2>What these repos have in common</h2>
      <p class="lede">The executive-intelligence repos turn fragmented systems work into buyer-readable operating evidence. Each one keeps a clear product promise, a scored model, reproducible artifacts, and direct links back to the broader Kinetic Gain portfolio so the public estate reads as a connected suite.</p>
      <ul>
        <li><strong>Board-ready language:</strong> executives can see the decision, risk, value, owner, and next move without parsing raw technical systems.</li>
        <li><strong>Operator-readable proof:</strong> technical reviewers can inspect fixtures, scoring, routes, tests, APIs, and rendered outputs.</li>
        <li><strong>Portfolio signal:</strong> every proof surface strengthens the map at <a href="${portfolioUrl}">portfolio.kineticgain.com</a> and the suite narrative at <a href="${suiteUrl}">suite.kineticgain.com</a>.</li>
      </ul>
    </section>
    <section class="section">
      <h2>Efficiency ledger</h2>
      <div class="grid">${cards}</div>
    </section>
    <section class="section">
      <h2>Proof findings</h2>
      <ul>${risks}</ul>
    </section>`,
    "Board-ready surface for realized savings proof, leakage risk, and follow-through evidence across the executive estate."
  );
}

export function renderEfficiencyLedger() {
  const rows = efficiencyLedger()
    .map(
      (item) => `<tr>
        <td>${escapeHtml(item.owner)}</td>
        <td>${escapeHtml(item.audience)}</td>
        <td>${escapeHtml(item.action)}</td>
        <td>${escapeHtml(item.efficiencyTheme)}</td>
        <td>${escapeHtml(item.requiredProof)}</td>
      </tr>`
    )
    .join("");

  return shell(
    "Efficiency ledger",
    "/efficiency-ledger",
    `<section class="hero">
      <span class="eyebrow">Efficiency ledger</span>
      <h1>Every efficiency claim stays tied to one audience, one proof requirement, and one next move.</h1>
      <p class="lede">The efficiency ledger keeps realized-savings proof readable instead of scattering it across disconnected update decks.</p>
      <div class="nav">${navLinks("/efficiency-ledger")}</div>
    </section>
    <section class="section table-wrap">
      <table>
        <thead><tr><th>Owner</th><th>Audience</th><th>Action</th><th>Theme</th><th>Required proof</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </section>`,
    "Efficiency ledger showing actions, proof requirements, and next moves."
  );
}

export function renderProofGaps() {
  const rows = proofGaps()
    .map(
      (item) => `<tr>
        <td>${escapeHtml(item.owner)}</td>
        <td>${escapeHtml(item.audience)}</td>
        <td>${item.proofCompletenessScore}</td>
        <td>${item.leakageRiskScore}</td>
        <td>${item.boardConfidenceScore}</td>
      </tr>`
    )
    .join("");

  return shell(
    "Proof gaps",
    "/proof-gaps",
    `<section class="hero">
      <span class="eyebrow">Proof gaps</span>
      <h1>See where proof is still thin, leakage is still open, and confidence is still too low.</h1>
      <p class="lede">This view makes it obvious which efficiency stories are board-ready and which ones still need tighter evidence.</p>
      <div class="nav">${navLinks("/proof-gaps")}</div>
    </section>
    <section class="section table-wrap">
      <table>
        <thead><tr><th>Owner</th><th>Audience</th><th>Proof completeness</th><th>Leakage risk</th><th>Board confidence</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </section>`,
    "Proof-gap view for completeness, leakage risk, and board confidence."
  );
}

export function renderOwnerFollowThrough() {
  const rows = ownerFollowThrough()
    .map(
      (item) => `<tr>
        <td>${escapeHtml(item.owner)}</td>
        <td>${escapeHtml(item.audience)}</td>
        <td>${escapeHtml(item.action)}</td>
        <td>${item.ownerFollowThroughScore}</td>
        <td>${item.realizedSavingsScore}</td>
        <td>$${item.realizedAnnualImpactMillions}M</td>
      </tr>`
    )
    .join("");

  return shell(
    "Owner follow-through",
    "/owner-follow-through",
    `<section class="hero">
      <span class="eyebrow">Owner follow-through</span>
      <h1>Follow-through, realized savings, and annual impact stay connected to named owners.</h1>
      <p class="lede">The board needs proof that owners closed the loop, not just that the savings idea once existed.</p>
      <div class="nav">${navLinks("/owner-follow-through")}</div>
    </section>
    <section class="section table-wrap">
      <table>
        <thead><tr><th>Owner</th><th>Audience</th><th>Action</th><th>Follow-through</th><th>Realized savings</th><th>Annual impact</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </section>`,
    "Owner follow-through view for realized savings and annual impact."
  );
}

export function renderVerification() {
  const notes = verification().map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  return shell(
    "Verification",
    "/verification",
    `<section class="hero">
      <span class="eyebrow">Verification</span>
      <h1>How this efficiency proof packet is modeled and what it is safe to infer from it.</h1>
      <p class="lede">This route keeps the synthetic nature, proof boundaries, and reproducibility notes visible before anyone treats the sample as live board evidence.</p>
      <div class="nav">${navLinks("/verification")}</div>
    </section>
    <section class="section">
      <ul>${notes}</ul>
    </section>`,
    "Verification notes for the Board Efficiency Proof Room sample and modeled outputs."
  );
}

export function renderDocs() {
  return shell(
    "Docs",
    "/docs",
    `<section class="hero">
      <span class="eyebrow">Docs</span>
      <h1>Board Efficiency Proof Room docs</h1>
      <p class="lede">This surface packages board-readable efficiency evidence into reproducible routes and JSON outputs.</p>
      <div class="nav">${navLinks("/docs")}</div>
    </section>
    <section class="section">
      <ul>
        <li><code>/efficiency-ledger</code> keeps proof requirements, actions, and next moves readable.</li>
        <li><code>/proof-gaps</code> compares completeness, leakage risk, and board confidence.</li>
        <li><code>/owner-follow-through</code> shows whether named owners actually landed the efficiency result.</li>
        <li><code>/api/payload</code> exposes the reproducible efficiency proof packet.</li>
      </ul>
      <pre>${escapeHtml(JSON.stringify(payload(), null, 2))}</pre>
    </section>`,
    "Product documentation for Board Efficiency Proof Room and its board-proof routes."
  );
}

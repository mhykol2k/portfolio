export type Project = {
  slug: string;
  name: string;
  summary: string;
  role: string;
  period: string;
  status: "Live" | "In beta" | "In development";
  stack: string[];
  /** One headline number for the card, e.g. { before: "4 h", after: "30 min", label: "per car" } */
  metric?: { before?: string; after: string; label: string };
  problem: string;
  approach: string[];
  outcome: string;
  notes?: string;
};

export const projects: Project[] = [
  {
    slug: "quotedesk",
    name: "QuoteDesk",
    summary:
      "Quoting automation for bespoke interior options on an ultra-premium automotive programme.",
    role: "Design, build and deployment",
    period: "2025 – 2026",
    status: "Live",
    stack: ["Next.js 14", "TypeScript", "Supabase", "PDF generation", "Vercel"],
    metric: { before: "4 h", after: "30 min", label: "quote time per car" },
    problem:
      "Each vehicle on the programme arrives with a customer specification pack listing hundreds of parts and options. Quoting it by hand meant cross-referencing several versioned spreadsheets, applying standards that differ part by part, and re-keying everything into a document. It took hours per car and errors were only caught downstream.",
    approach: [
      "Imports the specification pack directly and maps each line to a known part, falling back to description matching when the OEM renumbers parts, and learning new numbers as it goes.",
      "Rules-based pricing engine that encodes which finishes and options are standard, included or chargeable for each part, with a certainty score on every auto-proposal so a reviewer sees what needs a second look.",
      "Versioned cost matrices so a re-quote against a newer revision is a diff, not a rebuild.",
      "Generates a branded PDF quotation and keeps a full audit trail per job.",
    ],
    outcome:
      "A car that took 4 hours to quote now takes 30 minutes, with review effort concentrated on the handful of lines the engine flags. 30 to 40 people across commercial and engineering use it. Pricing rules live in one place instead of in people's heads.",
    notes:
      "Customer, part and pricing data are confidential and not shown here.",
  },
  {
    slug: "step-quoter",
    name: "STEP Quoter",
    summary:
      "Drop a STEP file in, get a costed quote grounded in geometry and historic pricing.",
    role: "Design and build",
    period: "2026",
    status: "In beta",
    stack: ["Next.js", "TypeScript", "Supabase", "3D geometry analysis"],
    metric: { after: "30–40", label: "daily users" },
    problem:
      "Estimating a new carbon, machined, printed or fabricated part relied on experience and a few reference jobs. Similar parts were priced inconsistently, and a loss-making quote only became visible after the work was done.",
    approach: [
      "Parses the dropped STEP file and derives a complexity rating from the geometry (surface area, curvature, feature density) rather than from a guess.",
      "Prices against a historic dataset of roughly ten costed programmes, each with hundreds of parts and their geometry, so a re-quote of a similar part references what it actually cost last time.",
      "Folds in labour rates, machine and energy costs, material costs and external supplier prices, with manual overrides where the estimator knows better.",
      "Shows cost, sale price and margin side by side before anything is sent, and gates firm quotes behind approval.",
    ],
    outcome:
      "Anyone in the business can produce a consistent first-pass estimate, and the commercial team sees margin before quoting rather than after. Popular enough internally that it's being redesigned from a tool into a product.",
    notes: "Pricing data and rates are confidential and not shown here.",
  },
  {
    slug: "datumqms",
    name: "DatumQMS",
    summary:
      "A lightweight IATF 16949 / PPAP supplier-compliance product for small automotive suppliers.",
    role: "Founder, sole developer",
    period: "2026 – present",
    status: "In development",
    stack: ["Next.js 15", "React 19", "Tailwind 4", "TypeScript"],
    problem:
      "Small Tier 1 and Tier 2 suppliers are held to the same PPAP and IATF 16949 evidence requirements as large ones, but the tooling on offer is either enterprise QMS software or a folder of Word templates. Most end up with the folder.",
    approach: [
      "Models the PPAP submission as structured data (elements, revisions, approvals, evidence) rather than as documents, so status is visible without opening anything.",
      "Modern SaaS shell: sidebar navigation, cards, clear status badges, built to be used on the shop floor and in the office.",
      "Designed to be piloted at a real supplier first, then sold independently.",
    ],
    outcome:
      "Working demo built; pilot in discussion. This is my own product, developed outside my day job.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

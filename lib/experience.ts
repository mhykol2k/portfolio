export type Role = {
  title: string;
  start: string; // YYYY-MM
  end?: string; // YYYY-MM, omitted = present
  points: string[];
  stack: string[];
};

export type Company = {
  name: string;
  where: string;
  blurb: string;
  roles: Role[]; // newest first
};

export const companies: Company[] = [
  {
    name: "TECNIQ",
    where: "Essex, UK",
    blurb:
      "Tier 1 supplier of carbon fibre body structures and interiors for ultra-premium OEM programmes, including the McLaren W1, Aston Martin Valhalla and Valkyrie, Mercedes-AMG ONE and Gordon Murray T.33. Small runs, no tolerance for error.",
    roles: [
      {
        title: "DevOps & Software Engineer",
        start: "2023-12",
        points: [
          "Built QuoteDesk, the quoting engine for a bespoke-options OEM programme: spec-pack import, rules-based pricing with certainty-scored proposals, branded PDF output. Quote time per car went from 4 hours to 30 minutes.",
          "Built STEP Quoter: extracts geometry features from a dropped CAD file, scores complexity, and prices against a dataset of ten costed programmes (roughly 8,000 parts with geometry), with margin visible before anything is sent. 30 to 40 people across commercial and engineering use the two tools daily.",
          "Replaced a manual Excel and VBA timesheet approval process with a web app: Microsoft sign-in, spreadsheet ingest, per-director exports for 21 approvers.",
          "Led the MRP rollout across two OEM programmes, then built the analytics on top of it: daily production breakdowns, departmental target-vs-actual dashboards and executive reports from raw MRP exports. Now leading the PLM migration from SmarTeam to Dassault 3DEXPERIENCE.",
          "Own the estate end to end across 5 sites: rebuilt 13 VMs from bare metal, redesigned a flat network into a segmented multi-site one, refreshed 100+ devices including custom-built CAD workstations, and run Microsoft 365, Entra ID, CrowdStrike, Cyber Essentials and TISAX.",
          "Scoped and costed on-prem LLM inference on Apple Silicon so OEM data can be used with AI without leaving the building.",
        ],
        stack: ["TypeScript", "Next.js", "Supabase", "Vercel", "Python", "Hyper-V", "XCP-ng", "UniFi", "Microsoft 365"],
      },
      {
        title: "Software & Data Engineer",
        start: "2022-12",
        end: "2023-11",
        points: [
          "Carbon kit-cutting waste project: analysed cut data across the programmes, specified a new kit-cutting machine and introduced AI-driven nesting. Material efficiency went from 40% to 90%.",
          "Introduced digital traceability on the shop floor with 2D Data Matrix marking, so every part carries its history from ply to assembly.",
          "Took on the IT estate alongside development and started the groundwork for the network and virtualisation rebuild.",
        ],
        stack: ["C#", ".NET", "SQL Server", "Python", "pandas"],
      },
    ],
  },
];

export type Education = {
  school: string;
  degree: string;
  grade?: string;
  start: string;
  end?: string; // omitted = in progress
  where: string;
  detail?: string;
  modules?: string[];
};

export const education: Education[] = [
  {
    school: "Canterbury Christ Church University",
    degree: "BEng Software Engineering",
    grade: "First Class Honours",
    start: "2019-09",
    end: "2022-06",
    where: "Canterbury, UK",
    modules: ["Machine Learning and AI", "Software Engineering Fundamentals"],
  },
  {
    school: "University Centre Colchester",
    degree: "Level 5 Leadership and Management Development",
    start: "2024-10",
    end: "2026-08",
    where: "Colchester, UK",
    detail: "Part of TECNIQ's Future Leaders Programme.",
    modules: [
      "Leading people and teams",
      "Strategic thinking and planning",
      "Managing change",
      "Stakeholder communication",
      "Performance management",
    ],
  },
];

// ---- date helpers (month granularity, LinkedIn-style inclusive counting) ----

export function ym(s: string): { y: number; m: number } {
  const [y, m] = s.split("-").map(Number);
  return { y, m };
}

export function monthIndex(s: string): number {
  const { y, m } = ym(s);
  return y * 12 + (m - 1);
}

export function nowYM(now = new Date()): string {
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

export function monthsBetween(start: string, end: string): number {
  return monthIndex(end) - monthIndex(start) + 1;
}

export function formatDuration(months: number): string {
  const y = Math.floor(months / 12);
  const m = months % 12;
  const parts: string[] = [];
  if (y) parts.push(`${y} yr${y === 1 ? "" : "s"}`);
  if (m) parts.push(`${m} mo${m === 1 ? "" : "s"}`);
  return parts.join(" ") || "0 mos";
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatYM(s: string): string {
  const { y, m } = ym(s);
  return `${MONTHS[m - 1]} ${y}`;
}

export function roleSpan(role: Role, now: string) {
  const end = role.end ?? now;
  return {
    label: `${formatYM(role.start)} – ${role.end ? formatYM(role.end) : "present"}`,
    months: monthsBetween(role.start, end),
    duration: formatDuration(monthsBetween(role.start, end)),
    current: !role.end,
  };
}

export function companySpan(c: Company, now: string) {
  const start = c.roles[c.roles.length - 1].start;
  const end = c.roles[0].end ?? now;
  return {
    label: `${formatYM(start)} – ${c.roles[0].end ? formatYM(end) : "present"}`,
    months: monthsBetween(start, end),
    duration: formatDuration(monthsBetween(start, end)),
    current: !c.roles[0].end,
  };
}

// First month of professional software work. Set explicitly so it can predate the roles listed above.
export const CAREER_START = "2021-07";

export function careerStart(): string {
  return CAREER_START;
}

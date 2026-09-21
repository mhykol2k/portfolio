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
      "Tier 1 supplier of carbon fibre body structures and interior trim for ultra-premium automotive programmes. Small runs, exacting OEM customers.",
    roles: [
      {
        title: "DevOps & Software Engineer",
        start: "2023-12",
        points: [
          "Designed and shipped QuoteDesk and STEP Quoter, the internal products the commercial and engineering teams now quote with.",
          "Replaced a manual Excel and VBA timesheet approval process with a web app: Microsoft sign-in, spreadsheet ingest, per-director exports.",
          "Led the MRP rollout across two OEM programmes, then built the production reporting suite and executive dashboards on top of it.",
          "Leading the PLM migration from SmarTeam to Dassault 3DEXPERIENCE.",
          "Own the infrastructure: Microsoft 365 and Entra ID, Hyper-V and XCP-ng virtualisation, a full multi-site network rebuild, endpoint security, Cyber Essentials and TISAX.",
        ],
        stack: ["TypeScript", "Next.js", "Supabase", "Vercel", "Python", "Hyper-V", "Microsoft 365"],
      },
      {
        title: "Software Engineer",
        start: "2022-12",
        end: "2023-11",
        points: [
          "Built the company's first in-house inventory control system to bring part-level traceability into production.",
          "Took ownership of the internal tooling backlog and the IT estate alongside development work.",
        ],
        stack: ["C#", "ASP.NET", "SQL Server"],
      },
    ],
  },
  {
    name: "Great Danes",
    where: "Frinton-on-Sea, UK",
    blurb: "Hospitality business.",
    roles: [
      {
        title: "Software Developer",
        start: "2021-07",
        end: "2022-12",
        points: [
          "Built a cross-platform EPOS system from scratch: Flutter front end, Go and MySQL backend, receipt printing and stock control.",
        ],
        stack: ["Flutter", "Dart", "Go", "MySQL"],
      },
    ],
  },
];

export const education = {
  school: "Canterbury Christ Church University",
  degree: "BEng Software Engineering",
  grade: "First Class Honours",
  start: "2019-09",
  end: "2022-06",
  where: "Canterbury, UK",
};

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

export function careerStart(): string {
  return companies
    .flatMap((c) => c.roles.map((r) => r.start))
    .sort()[0];
}

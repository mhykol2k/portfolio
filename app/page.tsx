import Image from "next/image";
import { ModelLazy } from "@/components/model-lazy";
import { Experience } from "@/components/experience";
import { site } from "@/lib/site";
import { careerStart, companies, companySpan, education, formatDuration, formatYM, monthsBetween, nowYM } from "@/lib/experience";
import profile from "@/public/images/mhykol.jpg";

// Durations are computed on the server; recompute daily so they never go stale.
export const revalidate = 86400;

const skills: { area: string; items: string[] }[] = [
  { area: "Product & web", items: ["TypeScript", "React", "Next.js", "Tailwind"] },
  { area: "Data & AI", items: ["Python", "pandas", "SQL", "Pricing models", "Geometry feature extraction", "LLM integration", "Local inference (Apple Silicon)"] },
  { area: "Backend", items: ["Supabase", "Postgres", "SQL Server", "C# / .NET", "Node", "Go"] },
  { area: "Infrastructure & ops", items: ["Vercel", "Hyper-V", "XCP-ng", "UniFi", "Microsoft 365", "Entra ID", "CrowdStrike", "Cyber Essentials", "TISAX"] },
  { area: "Manufacturing systems", items: ["MRP (Progress Plus)", "PLM (SmarTeam, 3DEXPERIENCE)", "IATF 16949 / PPAP", "2D Data Matrix traceability", "AI-driven nesting"] },
  { area: "Leadership & delivery", items: ["Project delivery", "Stakeholder management", "Steering committees", "Executive reporting", "Vendor and procurement", "Change management", "Mentoring apprentices"] },
];

function SectionHeading({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <h2 className="flex items-baseline gap-3 font-mono text-xs uppercase tracking-widest text-muted">
      <span className="text-faint">{n}</span>
      {children}
    </h2>
  );
}

export default function Home() {
  const now = nowYM();
  const tecniq = companySpan(companies[0], now);
  const career = formatDuration(monthsBetween(careerStart(), now));

  return (
    <div className="mx-auto max-w-2xl px-5">
      {/* Hero */}
      <section className="rise grid items-center gap-6 pb-10 pt-10 sm:grid-cols-[1fr_auto] sm:gap-8 sm:pt-20">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={profile}
              alt=""
              width={40}
              height={40}
              priority
              className="h-10 w-10 rounded-full border border-line object-cover"
            />
            <p className="font-mono text-xs text-faint">{site.location}</p>
          </div>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">{site.name}</h1>
          <p className="mt-1 text-lg text-muted">{site.title}</p>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
            {site.tagline} Full-stack products, data and AI tooling, automation. Four years
            in a demanding engineering business taught me to ship fast, own the outcome, and
            use AI where it earns its place, not where it looks good on a slide.
          </p>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            <span aria-hidden className="relative mr-2 inline-flex h-2 w-2 align-middle">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Taking on projects through{" "}
            <a href="#consulting" className="text-fg underline-offset-4 hover:underline">
              {site.company}
            </a>
            . Also open to senior software and DevOps roles.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-sm">
            <a
              href={`mailto:${site.email}`}
              className="rounded-md border border-fg bg-fg px-3.5 py-2 font-medium text-bg transition hover:opacity-90"
            >
              Email me
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-line px-3.5 py-2 text-muted transition hover:border-faint hover:text-fg"
            >
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-line px-3.5 py-2 text-muted transition hover:border-faint hover:text-fg"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="order-first mx-auto w-44 sm:order-none sm:w-64">
          <ModelLazy />
        </div>
      </section>

      {/* Stats */}
      <section
        className="rise grid grid-cols-2 overflow-hidden rounded-xl border border-line bg-card sm:grid-cols-4"
        style={{ animationDelay: "60ms" }}
      >
        <Stat label="In software">{career}</Stat>
        <Stat label="At TECNIQ">{tecniq.duration}</Stat>
        <Stat label="Tools shipped">30+</Stat>
        <Stat label="Hypercar programmes">5</Stat>
      </section>

      {/* Consulting */}
      <section id="consulting" className="rise scroll-mt-20 pt-16" style={{ animationDelay: "270ms" }}>
        <SectionHeading n="01">Consulting</SectionHeading>
        <div className="mt-6 overflow-hidden rounded-xl border border-line bg-card">
          <div className="border-b border-line px-5 py-5 sm:px-6">
            <img src="/brand/logo-white.png" alt={site.company} className="hidden h-12 w-auto dark:block" />
            <img src="/brand/logo-black.png" alt={site.company} className="h-12 w-auto dark:hidden" />
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted">
              Software and AI tooling for manufacturing and engineering businesses, built by
              someone who has run the shop floor systems, not just read about them. Small,
              fixed-scope engagements that ship.
            </p>
          </div>
          <ul className="grid gap-px bg-line sm:grid-cols-3">
            {[
              {
                t: "Internal tools that replace spreadsheets",
                d: "Quoting, approvals, traceability, reporting. Web apps your team actually uses, on your own data.",
              },
              {
                t: "AI where it earns its place",
                d: "LLM-assisted matching, document ingest and search over your own records. On-prem when the data can't leave the building.",
              },
              {
                t: "Infrastructure that stays up",
                d: "Microsoft 365, virtualisation, segmented networks, Cyber Essentials and TISAX readiness for supplier audits.",
              },
            ].map((x) => (
              <li key={x.t} className="bg-card px-5 py-4 sm:px-6">
                <h3 className="text-sm font-medium tracking-tight">{x.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{x.d}</p>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-5 py-4 sm:px-6">
            <p className="text-sm text-muted">Tell me the problem. I'll tell you if I can fix it and what it costs.</p>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("Project enquiry")}`}
              className="rounded-md border border-fg bg-fg px-3.5 py-2 text-sm font-medium text-bg transition hover:opacity-90"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="rise pt-16" style={{ animationDelay: "210ms" }}>
        <SectionHeading n="02">Education</SectionHeading>
        <ol className="mt-6 divide-y divide-line border-t border-line">
          {education.map((e) => (
            <li key={e.degree} className="py-4">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="text-sm">
                  <span className="font-medium tracking-tight">{e.degree}</span>
                  {e.grade && <span className="text-muted">, {e.grade}</span>}
                  <span className="mx-1.5 text-faint">·</span>
                  <span className="text-muted">{e.school}</span>
                </p>
                <p className="font-mono text-xs text-faint">
                  {formatYM(e.start)} – {e.end ? formatYM(e.end) : "present"}
                </p>
              </div>
              {e.detail && <p className="mt-1.5 text-sm leading-relaxed text-muted">{e.detail}</p>}
              {e.modules && (
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {e.modules.map((m) => (
                    <li key={m} className="rounded-md border border-line px-2 py-0.5 text-[11px] text-muted">
                      {m}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* Experience */}
      <section id="experience" className="rise scroll-mt-20 pt-16" style={{ animationDelay: "120ms" }}>
        <SectionHeading n="03">Experience</SectionHeading>
        <Experience now={now} />
      </section>

      {/* Skills */}
      <section className="rise pt-16" style={{ animationDelay: "180ms" }}>
        <SectionHeading n="04">Skills</SectionHeading>
        <dl className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {skills.map((g) => (
            <div key={g.area}>
              <dt className="text-sm font-medium tracking-tight">{g.area}</dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {g.items.map((t) => (
                  <span key={t} className="rounded-md border border-line bg-card px-2 py-0.5 text-xs text-muted">
                    {t}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Contact */}
      <section id="contact" className="rise scroll-mt-20 pt-16" style={{ animationDelay: "300ms" }}>
        <SectionHeading n="05">Contact</SectionHeading>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
          Hiring for a senior software or DevOps role, or have a project for {site.company}?
          Email is best; I reply within a day.
        </p>
        <dl className="mt-5 grid gap-2 text-sm">
          <Row label="Email">
            <a href={`mailto:${site.email}`} className="text-fg underline-offset-4 hover:underline">
              {site.email}
            </a>
          </Row>
          <Row label="LinkedIn">
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="text-fg underline-offset-4 hover:underline">
              linkedin.com/in/michaeljmclain
            </a>
          </Row>
          <Row label="GitHub">
            <a href={site.github} target="_blank" rel="noreferrer" className="text-fg underline-offset-4 hover:underline">
              github.com/mhykol2k
            </a>
          </Row>
        </dl>
      </section>
    </div>
  );
}

function Stat({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-line px-4 py-3.5 [&:nth-child(2n)]:border-l sm:[&:not(:first-child)]:border-l [&:nth-child(n+3)]:border-t sm:[&:nth-child(n+3)]:border-t-0 sm:px-5">
      <dt className="font-mono text-[10px] uppercase tracking-wider text-faint">{label}</dt>
      <dd className="mt-1 whitespace-nowrap text-sm font-semibold tracking-tight sm:text-lg">{children}</dd>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[6rem_1fr] gap-4 border-t border-line py-2.5">
      <dt className="text-faint">{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

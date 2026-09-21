import Image from "next/image";
import { ModelLazy } from "@/components/model-lazy";
import { ProjectCard } from "@/components/project-card";
import { Experience } from "@/components/experience";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { careerStart, companies, companySpan, formatDuration, monthsBetween, nowYM } from "@/lib/experience";
import profile from "@/public/images/mhykol.jpg";

// Durations are computed on the server; recompute daily so they never go stale.
export const revalidate = 86400;

const skills: { area: string; items: string[] }[] = [
  { area: "Product & web", items: ["TypeScript", "React", "Next.js", "Tailwind", "Node"] },
  { area: "Data & backend", items: ["Supabase", "Postgres", "SQL Server", "C# / .NET", "Python", "Go"] },
  { area: "Infrastructure & ops", items: ["Vercel", "Hyper-V", "XCP-ng", "UniFi", "Microsoft 365", "Entra ID", "CrowdStrike"] },
  { area: "Manufacturing systems", items: ["MRP (Progress Plus)", "PLM (SmarTeam, 3DEXPERIENCE)", "IATF 16949 / PPAP"] },
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
      <section className="rise grid items-center gap-8 pb-10 pt-16 sm:grid-cols-[1fr_auto] sm:pt-20">
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
            {site.tagline} Currently at TECNIQ, building the products that quote, track and
            certify carbon parts for some of the most demanding car programmes in the world.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-sm">
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
        <div className="hidden w-64 sm:block">
          <ModelLazy />
        </div>
      </section>

      {/* Stats */}
      <section className="rise grid grid-cols-3 divide-x divide-line rounded-xl border border-line bg-card" style={{ animationDelay: "60ms" }}>
        <Stat label="In software">{career}</Stat>
        <Stat label="At TECNIQ">{tecniq.duration}</Stat>
        <Stat label="Products shipped">3</Stat>
      </section>

      {/* Experience */}
      <section id="experience" className="rise scroll-mt-20 pt-16" style={{ animationDelay: "120ms" }}>
        <SectionHeading n="01">Experience</SectionHeading>
        <Experience now={now} />
      </section>

      {/* Skills */}
      <section className="rise pt-16" style={{ animationDelay: "180ms" }}>
        <SectionHeading n="02">Skills</SectionHeading>
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

      {/* Work */}
      <section id="work" className="rise scroll-mt-20 pt-16" style={{ animationDelay: "240ms" }}>
        <SectionHeading n="03">Selected work</SectionHeading>
        <div className="mt-6 grid gap-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="rise scroll-mt-20 pt-16" style={{ animationDelay: "300ms" }}>
        <SectionHeading n="04">Contact</SectionHeading>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
          Open to conversations about software, automation and AI tooling for manufacturing and
          engineering businesses. Email is best.
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
    <div className="px-4 py-3.5 sm:px-5">
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

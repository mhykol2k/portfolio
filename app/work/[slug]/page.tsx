import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, projects } from "@/lib/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return { title: p.name, description: p.summary };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const i = projects.findIndex((x) => x.slug === slug);
  const next = projects[(i + 1) % projects.length];

  return (
    <article className="mx-auto max-w-2xl px-5 py-14">
      <Link href="/#work" className="font-mono text-xs text-faint transition hover:text-fg">
        ← Work
      </Link>

      <header className="rise mt-6">
        <h1 className="text-3xl font-semibold tracking-tight">{p.name}</h1>
        <p className="mt-2 text-lg leading-snug text-muted">{p.summary}</p>
        <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-4">
          <Fact label="Role">{p.role}</Fact>
          <Fact label="Period">{p.period}</Fact>
          <Fact label="Status">{p.status}</Fact>
          <Fact label="Stack">{p.stack.join(", ")}</Fact>
        </dl>
      </header>

      <div className="rise mt-12 space-y-10" style={{ animationDelay: "80ms" }}>
        <Block title="The problem">
          <p>{p.problem}</p>
        </Block>
        <Block title="What I built">
          <ul className="space-y-3">
            {p.approach.map((a) => (
              <li key={a} className="flex gap-2.5">
                <span aria-hidden className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-faint" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </Block>
        <Block title="Outcome">
          <p>{p.outcome}</p>
        </Block>
        {p.notes && <p className="text-xs text-faint">{p.notes}</p>}
      </div>

      <nav className="mt-16 border-t border-line pt-6 text-sm">
        <span className="text-faint">Next</span>{" "}
        <Link href={`/work/${next.slug}`} className="text-fg underline-offset-4 hover:underline">
          {next.name} →
        </Link>
      </nav>
    </article>
  );
}

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="font-mono text-[11px] uppercase tracking-wider text-faint">{label}</dt>
      <dd className="mt-1 text-fg">{children}</dd>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-mono text-xs uppercase tracking-widest text-faint">{title}</h2>
      <div className="mt-3 text-[15px] leading-relaxed text-muted">{children}</div>
    </section>
  );
}

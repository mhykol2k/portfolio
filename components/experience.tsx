import { companies, companySpan, nowYM, roleSpan } from "@/lib/experience";
import { CareerBar } from "./career-bar";

export function Experience({ now = nowYM() }: { now?: string }) {
  return (
    <div>
      <CareerBar now={now} />

      <ol className="mt-10 space-y-12">
        {companies.map((c) => {
          const span = companySpan(c, now);
          return (
            <li key={c.name}>
              {/* Company header */}
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold tracking-tight">{c.name}</h3>
                <p className="font-mono text-xs text-muted">
                  {span.label}
                  <span className="mx-1.5 text-faint">·</span>
                  <span className={span.current ? "text-accent" : ""}>{span.duration}</span>
                </p>
              </div>
              <p className="mt-1 text-sm text-faint">
                {c.where}
                <span className="mx-1.5">·</span>
                {c.blurb}
              </p>

              {/* Roles on a rail */}
              <ol className="relative mt-5 space-y-8 border-l border-line pl-6">
                {c.roles.map((r) => {
                  const rs = roleSpan(r, now);
                  return (
                    <li key={r.title} className="relative">
                      <span
                        aria-hidden
                        className={`absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-bg ${
                          rs.current ? "bg-accent ring-4 ring-accent/20" : "bg-faint"
                        }`}
                      />
                      <details className="group">
                        <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                            <h4 className="font-medium tracking-tight transition group-hover:text-accent">
                              {r.title}
                            </h4>
                            <span className="flex items-center gap-2">
                              <span
                                className={`rounded-md border px-2 py-0.5 font-mono text-[11px] ${
                                  rs.current
                                    ? "border-accent/50 bg-accent-soft text-fg"
                                    : "border-line text-muted"
                                }`}
                              >
                                {rs.duration}
                              </span>
                              <svg
                                aria-hidden
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-faint transition-transform group-open:rotate-180"
                              >
                                <path d="m6 9 6 6 6-6" />
                              </svg>
                            </span>
                          </div>
                          <p className="mt-0.5 font-mono text-xs text-faint">
                            {rs.label}
                            <span className="ml-2 text-faint/70 group-open:hidden">· {r.points.length} highlights</span>
                          </p>
                        </summary>
                        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                          {r.points.map((pt) => (
                            <li key={pt} className="flex gap-2.5">
                              <span aria-hidden className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-faint" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                        {r.stack && r.stack.length > 0 && (
                        <ul className="mt-3 flex flex-wrap gap-1.5">
                          {r.stack.map((st) => (
                            <li key={st} className="rounded-md border border-line px-2 py-0.5 text-[11px] text-muted">
                              {st}
                            </li>
                          ))}
                        </ul>
                        )}
                      </details>
                    </li>
                  );
                })}
              </ol>
            </li>
          );
        })}

      </ol>
    </div>
  );
}

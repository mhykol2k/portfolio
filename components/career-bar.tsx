import { companies, careerStart, monthIndex, nowYM, roleSpan, ym } from "@/lib/experience";

/**
 * Proportional timeline of every role, oldest on the left, with year ticks.
 * Server component: `now` is passed in so the page revalidates cleanly.
 */
export function CareerBar({ now = nowYM() }: { now?: string }) {
  const start = careerStart();
  const startIdx = monthIndex(start);
  const endIdx = monthIndex(now) + 1;
  const total = endIdx - startIdx;

  const segments = companies
    .flatMap((c) =>
      c.roles.map((r) => ({
        company: c.name,
        title: r.title,
        startIdx: monthIndex(r.start),
        endIdx: monthIndex(r.end ?? now) + 1,
        ...roleSpan(r, now),
      }))
    )
    .sort((a, b) => a.startIdx - b.startIdx);

  const firstYear = ym(start).y;
  const lastYear = ym(now).y;
  const years: number[] = [];
  for (let y = firstYear + 1; y <= lastYear; y++) years.push(y);

  return (
    <div className="mt-6">
      <div className="relative h-9">
        {segments.map((s, i) => {
          const left = ((s.startIdx - startIdx) / total) * 100;
          const width = ((s.endIdx - s.startIdx) / total) * 100;
          return (
            <div
              key={`${s.company}-${s.title}`}
              className={`absolute top-0 h-9 overflow-hidden rounded-md border ${
                s.current
                  ? "border-accent/60 bg-accent-soft"
                  : i % 2
                    ? "border-line bg-card"
                    : "border-line bg-line/40"
              }`}
              style={{ left: `calc(${left}% + 1px)`, width: `calc(${width}% - 2px)` }}
              title={`${s.title}, ${s.company}: ${s.label} (${s.duration})`}
            >
              <div className="flex h-full flex-col justify-center px-2.5 leading-none">
                <span className="hidden truncate text-[11px] font-medium text-fg sm:block">{s.title}</span>
                <span className="truncate font-mono text-[10px] text-muted sm:mt-1">{s.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="relative mt-1.5 h-4 border-t border-line">
        {years.map((y) => {
          const left = ((y * 12 - startIdx) / total) * 100;
          return (
            <span
              key={y}
              className="absolute top-0 -translate-x-1/2 font-mono text-[10px] text-faint"
              style={{ left: `${left}%` }}
            >
              <span className="absolute -top-px left-1/2 h-1.5 w-px bg-line" />
              <span className="block pt-2">{y}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

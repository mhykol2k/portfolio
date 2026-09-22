import { companies, monthIndex, nowYM, roleSpan, ym } from "@/lib/experience";

/**
 * Proportional timeline of every role, oldest on the left, with year ticks.
 * Server component: `now` is passed in so the page revalidates cleanly.
 */
export function CareerBar({ now = nowYM() }: { now?: string }) {
  const start = companies.flatMap((c) => c.roles.map((r) => r.start)).sort()[0];
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

  // Concurrent roles go on their own lane so nothing overlaps.
  const laneEnds: number[] = [];
  const placed = segments.map((s) => {
    // A handover month (old role ends the month the new one starts) is not an overlap.
    let lane = laneEnds.findIndex((end) => end - 1 <= s.startIdx);
    if (lane === -1) lane = laneEnds.length;
    laneEnds[lane] = s.endIdx;
    return { ...s, lane };
  });
  const LANE_H = 36;
  const LANE_GAP = 4;
  const height = laneEnds.length * LANE_H + (laneEnds.length - 1) * LANE_GAP;

  const firstYear = ym(start).y;
  const lastYear = ym(now).y;
  const years: number[] = [];
  for (let y = firstYear + 1; y <= lastYear; y++) years.push(y);

  return (
    <div className="mt-6">
      <div className="relative" style={{ height }}>
        {placed.map((s, i) => {
          const left = ((s.startIdx - startIdx) / total) * 100;
          const width = ((s.endIdx - s.startIdx) / total) * 100;
          return (
            <div
              key={`${s.company}-${s.title}`}
              className={`absolute h-9 overflow-hidden rounded-md border ${
                s.current
                  ? "border-accent/60 bg-accent-soft"
                  : i % 2
                    ? "border-line bg-card"
                    : "border-line bg-line/40"
              }`}
              style={{
                left: `calc(${left}% + 1px)`,
                width: `calc(${width}% - 2px)`,
                top: s.lane * (LANE_H + LANE_GAP),
              }}
              title={`${s.title}, ${s.company}: ${s.label} (${s.duration})`}
            >
              <div className="flex h-full flex-col justify-center px-2.5 leading-none">
                <span className="hidden truncate text-[11px] font-medium text-fg sm:block">{s.title}</span>
                <span className="truncate font-mono text-[10px] text-muted sm:mt-1">
                  <span className={width < 15 ? "hidden sm:inline" : ""}>{s.duration}</span>
                  {width < 15 && <span className="sm:hidden">{s.months}m</span>}
                </span>
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

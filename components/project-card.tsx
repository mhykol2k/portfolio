import Link from "next/link";
import type { Project } from "@/lib/projects";

const statusStyle: Record<Project["status"], string> = {
  Live: "text-accent",
  "In beta": "text-amber-600 dark:text-amber-400",
  "In development": "text-muted",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block rounded-xl border border-line bg-card p-5 transition hover:border-faint hover:shadow-[0_1px_0_0_var(--color-line)]"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-base font-medium tracking-tight text-fg group-hover:text-accent">
          {project.name}
        </h3>
        <span className={`text-xs ${statusStyle[project.status]}`}>
          {project.status}
        </span>
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{project.summary}</p>
      {project.metric && (
        <p className="mt-3 text-sm">
          {project.metric.before && (
            <span className="mr-1.5 text-faint line-through decoration-1">{project.metric.before}</span>
          )}
          <span className="font-semibold text-fg">{project.metric.after}</span>
          <span className="ml-1.5 text-muted">{project.metric.label}</span>
        </p>
      )}
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 4).map((s) => (
          <li
            key={s}
            className="rounded-md border border-line px-2 py-0.5 text-[11px] text-muted"
          >
            {s}
          </li>
        ))}
      </ul>
    </Link>
  );
}

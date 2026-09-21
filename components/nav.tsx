import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { site } from "@/lib/site";

const links = [
  { href: "/#experience", label: "Experience" },
  { href: "/#work", label: "Work" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/60 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-5">
        <Link
          href="/"
          className="whitespace-nowrap font-medium tracking-tight text-fg transition hover:text-accent"
        >
          {site.name}
        </Link>
        <nav className="flex items-center gap-0.5 sm:gap-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-2 py-1.5 text-sm text-muted transition hover:text-fg sm:px-2.5"
            >
              {l.label}
            </Link>
          ))}
          <span className="ml-1">
            <ThemeToggle />
          </span>
        </nav>
      </div>
    </header>
  );
}

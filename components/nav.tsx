import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { site } from "@/lib/site";

const links = [
  { href: "/#consulting", label: "Consulting" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/60 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-5">
        <Link href="/" className="flex items-center" aria-label={`${site.name}, ${site.company}`}>
          <img src="/brand/logo-white.png" alt={site.company} className="hidden h-7 w-auto dark:block" />
          <img src="/brand/logo-black.png" alt={site.company} className="h-7 w-auto dark:hidden" />
        </Link>
        <nav className="flex items-center gap-0.5 sm:gap-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-1.5 py-1.5 text-[13px] text-muted transition hover:text-fg sm:px-2.5 sm:text-sm"
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

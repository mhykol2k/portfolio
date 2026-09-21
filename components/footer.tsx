import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mx-auto max-w-2xl px-5 pb-12 pt-16 text-xs text-faint">
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
        <div className="flex items-center gap-3">
          <img src="/brand/logo-white.png" alt={site.company} className="hidden h-7 w-auto dark:block" />
          <img src="/brand/logo-black.png" alt={site.company} className="h-7 w-auto dark:hidden" />
        </div>
        <div className="text-right">
          <p>
            &copy; {new Date().getFullYear()} {site.name}, trading as {site.company}
          </p>
          <p className="mt-0.5">Next.js, Tailwind, Three.js. Hosted on Vercel.</p>
        </div>
      </div>
    </footer>
  );
}

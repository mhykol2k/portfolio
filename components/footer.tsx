import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mx-auto max-w-2xl px-5 pb-12 pt-16 text-xs text-faint">
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line pt-6">
        <span>
          &copy; {new Date().getFullYear()} {site.name}
        </span>
        <span>Next.js, Tailwind, Three.js. Hosted on Vercel.</span>
      </div>
    </footer>
  );
}

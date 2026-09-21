import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-24">
      <p className="font-mono text-xs text-faint">404</p>
      <h1 className="mt-2 text-2xl font-medium tracking-tight">Page not found</h1>
      <p className="mt-2 text-muted">Nothing lives at this address.</p>
      <Link href="/" className="mt-6 inline-block text-sm text-accent underline-offset-4 hover:underline">
        Back to the start
      </Link>
    </div>
  );
}

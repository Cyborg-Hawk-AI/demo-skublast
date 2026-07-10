import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-surface-900/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-bold text-white shadow-lg shadow-brand-600/30 transition group-hover:shadow-brand-500/40">
            SK
          </div>
          <span className="text-lg font-semibold tracking-tight">
            SKU<span className="text-brand-400">Blast</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
          <Link href="/#features" className="transition hover:text-white">
            Features
          </Link>
          <Link href="/#pricing" className="transition hover:text-white">
            Pricing
          </Link>
          <Link href="/research" className="transition hover:text-white">
            Research
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/demo"
            className="btn-primary px-4 py-2 text-sm"
          >
            Try Demo
          </Link>
        </div>
      </div>
    </header>
  );
}

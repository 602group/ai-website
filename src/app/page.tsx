"use client";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs text-white/70">
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="container py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-brand/20 border border-brand/40 grid place-items-center">
            <div className="h-3 w-3 rounded bg-brand" />
          </div>
          <span className="font-semibold tracking-tight">602 Group</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <a href="#features" className="hover:text-white/90">Features</a>
          <a href="#code" className="hover:text-white/90">Code</a>
          <a href="https://github.com/602group/ai-website" className="hover:text-white/90" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </header>

      <section className="container pt-8 pb-16 md:pt-16 md:pb-24">
        <div className="flex flex-col items-center text-center gap-6">
          <Pill>Next.js • TypeScript • Tailwind • MIT</Pill>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Open‑source AI website starter
          </h1>
          <p className="text-white/70 max-w-2xl">
            Production-ready dark UI, responsive out of the box. Designed to be forked,
            tweaked, and deployed in minutes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              className="rounded-xl bg-brand px-5 py-3 text-sm font-medium shadow-soft hover:bg-brand/90"
              href="https://github.com/602group/ai-website" target="_blank" rel="noreferrer"
            >
              View on GitHub
            </a>
            <a
              className="rounded-xl border border-white/15 px-5 py-3 text-sm font-medium hover:bg-white/[0.04]"
              href="#code"
            >
              Get the code
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="container pb-16 md:pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["Modern Stack", "Next.js App Router, TypeScript, Tailwind CSS."],
            ["Production Ready", "Dark theme, responsive, accessible, clean."],
            ["Open Source", "MIT license. Fork, modify, and deploy freely."]
          ].map(([title, desc]) => (
            <div key={title} className="card">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="code" className="container pb-24">
        <div className="card overflow-hidden">
          <div className="mb-4 text-sm text-white/60">Quickstart</div>
          <pre className="text-sm overflow-auto">
{`npx create-next-app .
npm run dev
# edit src/app/page.tsx`}
          </pre>
        </div>
      </section>

      <footer className="mt-auto border-t border-white/10">
        <div className="container py-8 text-center text-white/60">
          © {new Date().getFullYear()} 602 Group. MIT Licensed.
        </div>
      </footer>
    </main>
  );
}

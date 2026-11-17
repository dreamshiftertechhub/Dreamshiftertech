import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-card focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="content" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display mt-5 max-w-4xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-pretty text-muted md:text-lg">{lede}</p>
      </div>
    </header>
  );
}

export function Wrap({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24 ${className}`}>{children}</div>;
}

export function Close({
  kicker,
  title,
  body,
  to,
  label,
}: {
  kicker: string;
  title: string;
  body?: string;
  to: "/contact" | "/webinar" | "/shiftnear" | "/projects";
  label: string;
}) {
  return (
    <section className="bg-brand text-paper">
      <Wrap>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="kicker text-accent">{kicker}</p>
            <h2 className="title mt-4 text-paper">{title}</h2>
            {body ? <p className="mt-4 max-w-xl text-sm leading-7 text-paper/80">{body}</p> : null}
          </div>
          <Link
            to={to}
            className="inline-flex min-h-12 shrink-0 items-center bg-accent px-5 text-sm font-semibold text-brand-deep transition hover:bg-accent-deep"
          >
            {label}
          </Link>
        </div>
      </Wrap>
    </section>
  );
}

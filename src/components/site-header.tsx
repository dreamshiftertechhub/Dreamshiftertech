import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const LINKS = [
  { to: "/dreamshifter", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Work" },
  { to: "/shiftnear", label: "Shiftnear" },
  { to: "/academy", label: "Academy" },
  { to: "/webinar", label: "Webinar" },
] as const;

const MORE = [{ to: "/challenge", label: "DShift Challenge" }] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-20 md:px-8">
        <Link to="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
          <img
            src="/media/dreamshifter-logo.png"
            alt="Dreamshifter Tech Hub"
            width={512}
            height={161}
            className="h-9 w-auto md:h-10"
          />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {LINKS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-sm font-semibold text-ink" }}
              inactiveProps={{ className: "text-sm font-medium text-muted transition hover:text-ink" }}
            >
              {item.to === "/webinar" ? (
                <span className="inline-flex items-center gap-2">
                  <span className="size-1.5 bg-accent" aria-hidden />
                  {item.label}
                </span>
              ) : (
                item.label
              )}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden min-h-11 items-center bg-brand px-4 text-sm font-semibold text-paper transition hover:bg-brand-deep sm:inline-flex"
          >
            Start a project
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-paper px-5 py-3 lg:hidden">
          {[...LINKS, ...MORE].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center border-b border-line text-sm font-semibold text-ink last:border-0"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 flex min-h-11 items-center justify-center bg-brand text-sm font-semibold text-paper"
          >
            Start a project
          </Link>
        </nav>
      ) : null}
    </header>
  );
}

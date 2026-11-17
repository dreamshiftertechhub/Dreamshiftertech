import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { WebinarForm } from "@/components/forms";
import { SiteShell, Wrap } from "@/components/site-shell";

export const Route = createFileRoute("/webinar")({
  head: () => ({
    meta: [
      { title: "Upcoming webinar — ShiftNear Live, 1 December 2026" },
      {
        name: "description",
        content:
          "ShiftNear Live is a free virtual webinar on Tuesday, 1 December 2026. Grow your business and get discovered. Reserve a seat.",
      },
    ],
  }),
  component: WebinarPage,
});

const AGENDA = [
  ["01", "The visibility challenge", "Why good local businesses can still be difficult for nearby customers to find."],
  ["02", "Special guest conversation", "Woli Arole on visibility, consistency and building meaningful connections."],
  ["03", "Meet ShiftNear", "Ayinde Olatunde Emmanuel introduces local discovery and the founding vendor opportunity."],
  ["04", "Live Connection Spotlight", "Selected businesses introduce what they offer to attendees who are actually interested."],
  ["05", "Get ready for 2027", "Profiles, service descriptions, honest photos and a contact channel you answer."],
  ["06", "Questions and next steps", "How to join the founding vendor community and what the staged launch means."],
];

const FAQ = [
  ["Is registration free?", "Yes. The webinar is free."],
  ["Is vendor onboarding free?", "Founding-phase onboarding is free. Profiles must be completed and may be reviewed before anything is published. A future paid plan would be explained and would need your agreement."],
  ["Will everyone get to pitch?", "No. Pitch requests are reviewed. Selected participants receive instructions. Everyone else can still attend."],
  ["Will I definitely get a customer?", "No. The session is for visibility and introductions, not guaranteed sales, contracts or investment."],
  ["How do I get the joining link?", "Time and joining details will be sent through the contact you provide once arrangements are confirmed."],
  ["What is ShiftNear?", "A local discovery marketplace being built so people can find nearby businesses and vendors can be easier to discover."],
];

const HOOKS = [
  ["When", "Tuesday, 1 December 2026"],
  ["Format", "Free · virtual · link sent after you register"],
  ["For", "Owners, creatives and local service providers"],
  ["Guest", "Woli Arole, in conversation"],
  ["Host", "Ayinde Olatunde Emmanuel, founder"],
  ["Honest limit", "Visibility and introductions — not guaranteed sales"],
];

function countdownLabel(now = new Date()) {
  const target = new Date(2026, 11, 1);
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);
  const days = Math.ceil((target.getTime() - today.getTime()) / 864e5);
  if (days > 1) return `${days} days to go`;
  if (days === 1) return "Tomorrow";
  if (days === 0) return "Today";
  return "Thank you for joining";
}

function downloadCalendar() {
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//ShiftNear//ShiftNear Live//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    "UID:shiftnear-live-20261201@shiftnear.com",
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "")}`,
    "DTSTART;VALUE=DATE:20261201",
    "DTEND;VALUE=DATE:20261202",
    "SUMMARY:ShiftNear Live — Grow your business. Get discovered.",
    "DESCRIPTION:Free online webinar by ShiftNear. Start time and joining details to be announced.",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar;charset=utf-8" }));
  link.download = "ShiftNear-Live-1-December-2026.ics";
  link.click();
  URL.revokeObjectURL(link.href);
}

function WebinarPage() {
  const [count, setCount] = useState("1 December 2026");
  const [shared, setShared] = useState("");

  useEffect(() => {
    setCount(countdownLabel());
  }, []);

  async function share() {
    const url = window.location.href.split("#")[0];
    const data = {
      title: "ShiftNear Live",
      text: "Grow your business. Get discovered. Join ShiftNear Live on Tuesday, 1 December 2026. Free online webinar.",
      url,
    };
    try {
      if (navigator.share) await navigator.share(data);
      else if (navigator.clipboard) {
        await navigator.clipboard.writeText(`${data.text} ${data.url}`);
        setShared("Event details copied.");
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setShared("Copy the page address from your browser to share it.");
    }
  }

  return (
    <SiteShell>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[minmax(0,1fr)_19rem]">
          <div>
            <p className="eyebrow">Upcoming webinar · ShiftNear Live</p>
            <h1 className="display mt-5 max-w-3xl">
              Grow your business. <span className="text-accent">Get discovered.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted md:text-lg">
              Your next customer could be closer than you think. Join entrepreneurs, small-business owners, creatives and local service providers for a practical conversation about visibility and getting ready for 2027.
            </p>
            <dl className="mt-8 grid gap-5 border-y border-line py-5 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-semibold tracking-widest text-faint uppercase">Date</dt>
                <dd className="mt-1 text-sm font-semibold">Tuesday, 1 December 2026</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-widest text-faint uppercase">Countdown</dt>
                <dd className="mt-1 text-sm font-semibold tabular-nums">{count}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-widest text-faint uppercase">Time and link</dt>
                <dd className="mt-1 text-sm font-semibold">Announced soon</dd>
              </div>
            </dl>
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                ["WA", "Woli Arole", "Special guest"],
                ["AO", "Ayinde Olatunde Emmanuel", "Founder and host"],
                ["M", "Moderator", "To be announced"],
              ].map(([mark, name, role]) => (
                <li key={name} className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center bg-tint text-xs font-semibold text-brand-deep">
                    {mark}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold leading-tight">{name}</span>
                    <span className="block text-xs text-muted">{role}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">
              <button type="button" onClick={downloadCalendar} className="min-h-11 border border-line bg-card px-4 text-sm font-semibold hover:bg-tint">
                Add to calendar
              </button>
              <button type="button" onClick={share} className="min-h-11 border border-line bg-card px-4 text-sm font-semibold hover:bg-tint">
                Share event
              </button>
              <a href="#register" className="inline-flex min-h-11 items-center bg-brand px-4 text-sm font-semibold text-paper hover:bg-brand-deep">
                Reserve my seat
              </a>
            </div>
            {shared ? <p className="mt-3 text-sm font-semibold text-brand-deep">{shared}</p> : null}
            <div id="register" className="mt-10 border border-line bg-card p-6 md:p-8">
              <h2 className="font-display text-3xl tracking-tight">Save your free seat</h2>
              <p className="mt-2 mb-6 text-sm leading-relaxed text-muted">
                Register as a vendor, a customer, or both. Vendor onboarding is free during the founding phase and subject to profile completion and review.
              </p>
              <WebinarForm />
            </div>
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="border border-line bg-brand p-6 text-paper">
              <p className="kicker text-accent">Why come</p>
              <p className="mt-3 font-display text-3xl leading-tight">The next session is already on the calendar.</p>
              <p className="mt-3 text-sm font-semibold tabular-nums text-paper/80">{count}</p>
              <dl className="mt-6 divide-y divide-paper/20 border-y border-paper/20">
                {HOOKS.map(([label, value]) => (
                  <div key={label} className="py-3">
                    <dt className="text-xs font-semibold tracking-widest text-accent uppercase">{label}</dt>
                    <dd className="mt-1 text-sm leading-6">{value}</dd>
                  </div>
                ))}
              </dl>
              <a
                href="#register"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center bg-accent text-sm font-semibold text-brand-deep hover:bg-accent-deep"
              >
                Reserve a free seat
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-line bg-card">
        <Wrap>
          <p className="eyebrow">Programme</p>
          <h2 className="title mt-4 max-w-xl">What we’ll explore together.</h2>
          <div className="mt-8 border-t border-line">
            {AGENDA.map(([number, title, body]) => (
              <article key={number} className="grid gap-2 border-b border-line py-6 md:grid-cols-[4rem_16rem_1fr] md:gap-8">
                <p className="text-sm font-semibold text-brand">{number}</p>
                <h3 className="font-display text-xl">{title}</h3>
                <p className="text-sm leading-relaxed text-muted">{body}</p>
              </article>
            ))}
          </div>
        </Wrap>
      </section>

      <section className="border-b border-line">
        <Wrap>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Live Connection Spotlight</p>
              <h2 className="title mt-4">A short introduction, not a guarantee.</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Selected vendors describe what they offer and meet attendees who raise a hand. Requesting a slot does not mean you are selected. The event cannot promise customers, contracts, investment or sales.
              </p>
            </div>
            <ol className="border-t border-line">
              {[
                "Register and describe your business.",
                "Request a pitch opportunity on the form.",
                "Selected vendors receive instructions.",
                "Introduce the business briefly during the session.",
              ].map((step, index) => (
                <li key={step} className="flex gap-4 border-b border-line py-4 text-sm font-semibold">
                  <span className="text-brand">0{index + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </Wrap>
      </section>

      <section>
        <Wrap>
          <h2 className="title">Questions</h2>
          <div className="mt-6 border-t border-line">
            {FAQ.map(([question, answer]) => (
              <details key={question} className="group border-b border-line py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl">
                  {question}
                  <span className="text-brand group-open:hidden">+</span>
                  <span className="hidden text-brand group-open:inline">−</span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{answer}</p>
              </details>
            ))}
          </div>
        </Wrap>
      </section>
    </SiteShell>
  );
}

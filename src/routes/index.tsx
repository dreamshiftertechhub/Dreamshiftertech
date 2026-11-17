import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Close, SiteShell, Wrap } from "@/components/site-shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dreamshifter Tech Hub — Digital products. Built with purpose." },
      {
        name: "description",
        content:
          "Dreamshifter Tech Hub designs digital products, builds websites and business systems, and delivers practical technology training.",
      },
    ],
  }),
  component: HomePage,
});

const SERVICES = [
  ["01", "Digital product design", "Websites and apps shaped around the people who use them.", "/services"],
  ["02", "Web development", "Responsive websites, web applications and tailored digital systems.", "/services"],
  ["03", "Business technology", "Practical ICT support and digital solutions for better ways of working.", "/services"],
  ["04", "Tech training", "Hands-on learning in product design, web creation and digital skills.", "/academy"],
] as const;

const WORK = [
  ["Hospitality", "Web experiences and digital systems for restaurants and coffee shops."],
  ["Real estate", "Property websites designed to present listings and generate enquiries."],
  ["E-commerce", "Online storefronts and shopping experiences, including Bollypet."],
  ["Fintech", "Mobile product concepts and interface design for digital finance."],
];

const HOOKS = [
  {
    kicker: "Upcoming webinar",
    title: "ShiftNear Live",
    body: "Tuesday, 1 December 2026. A free virtual session on visibility, local discovery and getting ready for 2027.",
    to: "/webinar",
    label: "See the programme",
  },
  {
    kicker: "Product · pre-launch",
    title: "Shiftnear",
    body: "A service marketplace in development, connecting customers with local experts and vendors.",
    to: "/shiftnear",
    label: "Explore Shiftnear",
  },
  {
    kicker: "Talent initiative",
    title: "The DShift Challenge",
    body: "A practical competition to identify emerging tech talent. Dates will be announced.",
    to: "/challenge",
    label: "Read the brief",
  },
] as const;

function HomePage() {
  return (
    <SiteShell>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-end gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="eyebrow">Independent digital agency · Nigeria</p>
            <h1 className="display mt-6 max-w-3xl">
              We make digital ideas <span className="text-accent">work.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted md:text-lg">
              Dreamshifter designs digital products, builds websites and business systems, and helps people develop skills for the digital world.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center bg-brand px-5 text-sm font-semibold text-paper transition hover:bg-brand-deep"
              >
                Start a project
                <ArrowUpRight className="ml-2 size-4" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex min-h-12 items-center border border-line bg-card px-5 text-sm font-semibold text-ink transition hover:border-brand"
              >
                See our work
              </Link>
            </div>
            <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5 text-xs font-semibold tracking-widest text-faint uppercase">
              <li>Product design</li>
              <li>Web development</li>
              <li>Digital solutions</li>
              <li>Tech education</li>
            </ul>
          </div>
          <aside aria-label="Currently at Dreamshifter" className="grid gap-px border border-line bg-line">
            {HOOKS.map((hook) => (
              <Link key={hook.title} to={hook.to} className="group bg-card p-6 transition hover:bg-tint">
                <p className="kicker text-accent">{hook.kicker}</p>
                <p className="mt-3 font-display text-2xl tracking-tight text-ink">{hook.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{hook.body}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand">
                  {hook.label}
                  <ArrowUpRight className="ml-1 size-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </aside>
        </div>
      </section>

      <Wrap>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Why Dreamshifter</p>
            <h2 className="title mt-4 max-w-md">Good technology solves a real problem.</h2>
          </div>
          <div className="max-w-2xl space-y-4 text-sm leading-7 text-muted md:text-base">
            <p>
              A website should do more than look attractive. An app should do more than exist. And technology training should prepare people to do real work.
            </p>
            <p>
              We bring together product design, development, business-focused problem-solving and practical education. We start with what needs to work, then build the right solution around it.
            </p>
          </div>
        </div>
      </Wrap>

      <section className="border-y border-line bg-card">
        <Wrap>
          <p className="eyebrow">What we do</p>
          <h2 className="title mt-4 max-w-2xl">From a clear idea to a solution people can use.</h2>
          <div className="mt-10 border-t border-line">
            {SERVICES.map(([number, title, body, to]) => (
              <Link
                key={number}
                to={to}
                className="group grid gap-3 border-b border-line py-7 md:grid-cols-[4rem_1fr_auto] md:items-baseline md:gap-8"
              >
                <span className="text-sm font-semibold text-brand">{number}</span>
                <span>
                  <span className="block font-display text-2xl tracking-tight">{title}</span>
                  <span className="mt-2 block max-w-xl text-sm leading-7 text-muted">{body}</span>
                </span>
                <span className="text-sm font-semibold text-brand">
                  Explore
                  <ArrowUpRight className="ml-1 inline size-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Wrap>
      </section>

      <Wrap>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="title mt-4 max-w-xl">Different industries. Different problems. Purpose-built work.</h2>
          </div>
          <Link to="/projects" className="text-sm font-semibold text-brand">
            View projects
            <ArrowUpRight className="ml-1 inline size-4" />
          </Link>
        </div>
        <div className="mt-10 grid border-t border-line sm:grid-cols-2">
          {WORK.map(([name, body], index) => (
            <article key={name} className="border-b border-line py-7 sm:px-7 sm:odd:pl-0 sm:even:border-l">
              <span className="text-xs font-semibold text-faint">0{index + 1}</span>
              <h3 className="mt-2 font-display text-2xl">{name}</h3>
              <p className="mt-2 max-w-md text-sm leading-7 text-muted">{body}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-xs leading-6 text-faint">
          Selected work includes client projects, design concepts and products in development. Each is labelled according to its current status.
        </p>
      </Wrap>

      <section className="border-y border-line bg-tint">
        <Wrap>
          <div className="grid items-center gap-8 md:grid-cols-[16rem_1fr] lg:grid-cols-[18rem_1fr]">
            <img
              src="/media/founder.jpg"
              alt="Ayinde Emmanuel Olatunde, founder of Dreamshifter Tech Hub"
              width={338}
              height={549}
              className="aspect-[4/5] w-full max-w-xs object-cover object-top"
            />
            <div>
              <p className="eyebrow">About the founder</p>
              <h2 className="title mt-4">Ayinde Emmanuel Olatunde</h2>
              <p className="mt-2 text-sm font-semibold text-muted">
                Founder · Digital Product Specialist · Project Manager
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted md:text-base">
                Ayinde leads the direction, product thinking and delivery of Dreamshifter Tech Hub. He holds a B.Tech in Project Management Technology and works across digital product design, technology and project coordination.
              </p>
              <Link to="/dreamshifter" className="mt-6 inline-flex items-center text-sm font-semibold text-brand">
                Read the studio story
                <ArrowUpRight className="ml-1 size-4" />
              </Link>
            </div>
          </div>
        </Wrap>
      </section>

      <Close
        kicker="Have a project in mind?"
        title="Let's turn the next idea into something useful."
        body="Tell us what you're trying to build, improve or solve. We'll help you work out the next step."
        to="/contact"
        label="Start a conversation"
      />
    </SiteShell>
  );
}

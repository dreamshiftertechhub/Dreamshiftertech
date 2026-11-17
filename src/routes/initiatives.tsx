import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageIntro, SiteShell, Wrap } from "@/components/site-shell";

export const Route = createFileRoute("/initiatives")({
  head: () => ({
    meta: [
      { title: "Initiatives — Dreamshifter Tech Hub" },
      {
        name: "description",
        content: "Explore learning, youth and technology talent initiatives connected to Dreamshifter.",
      },
    ],
  }),
  component: InitiativesPage,
});

const ITEMS = [
  { name: "Edudesk", label: "Digital learning", text: "A learning initiative focused on helping young people build practical technology skills through structured, hands-on experiences." },
  { name: "Talk To Teens", label: "Youth impact", text: "A youth-focused initiative creating room for conversations, guidance and thoughtful decisions through meaningful engagement." },
  { name: "The DShift Challenge", label: "Talent & opportunity", text: "A competitive, gamified tech challenge where participants demonstrate practical ability and standout talent can be considered for live project opportunities.", link: "/challenge" as const },
];

function InitiativesPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Beyond client work"
        title="Creating opportunities through learning, creativity and community."
        lede="Our work goes beyond websites and applications. We also care about practical learning, youth development and giving emerging talent a chance to demonstrate what they can do."
      />
      <Wrap>
        <div className="grid gap-px border border-line bg-line md:grid-cols-3">
          {ITEMS.map((item, index) => (
            <article key={item.name} className="flex min-h-80 flex-col bg-card p-7">
              <p className="text-sm font-semibold text-brand">0{index + 1}</p>
              <p className="mt-8 text-xs font-semibold tracking-widest text-accent uppercase">{item.label}</p>
              <h2 className="mt-2 font-display text-3xl">{item.name}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
              {"link" in item && item.link ? (
                <Link to={item.link} className="mt-auto inline-flex items-center pt-6 text-sm font-semibold text-brand">
                  Explore challenge
                  <ArrowUpRight className="ml-1 size-4" />
                </Link>
              ) : (
                <span className="mt-auto pt-6 text-xs font-semibold text-faint">Dreamshifter initiative</span>
              )}
            </article>
          ))}
        </div>
      </Wrap>
      <section className="border-y border-line bg-card">
        <Wrap>
          <div className="max-w-3xl">
            <p className="eyebrow">Get involved</p>
            <h2 className="title mt-4">Interested in supporting an initiative or building one with us?</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              We welcome conversations with educators, organisations, mentors and partners who share an interest in practical learning and meaningful opportunities.
            </p>
            <Link to="/contact" className="mt-7 inline-flex min-h-12 items-center bg-brand px-5 text-sm font-semibold text-paper">
              Talk to Dreamshifter
            </Link>
          </div>
        </Wrap>
      </section>
    </SiteShell>
  );
}

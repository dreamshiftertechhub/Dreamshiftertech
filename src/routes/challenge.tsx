import { createFileRoute, Link } from "@tanstack/react-router";
import { ChallengeForm } from "@/components/forms";
import { SiteShell, Wrap } from "@/components/site-shell";

export const Route = createFileRoute("/challenge")({
  head: () => ({
    meta: [
      { title: "The DShift Challenge — Talent deserves a chance to prove itself" },
      {
        name: "description",
        content: "A competitive, gamified tech challenge designed to discover emerging talent through practical tasks and project opportunities.",
      },
    ],
  }),
  component: ChallengePage,
});

const STEPS = [
  ["Enter the challenge", "Register when applications open and get the information you need to take part."],
  ["Prove your skills", "Complete practical tasks designed to test creativity, technical ability and problem-solving."],
  ["Stand out", "Your work gives you a chance to demonstrate how you think, create and approach real challenges."],
  ["Get considered", "Top performers may be considered for opportunities to contribute to live projects. Selection and project opportunities are not guaranteed."],
];

function ChallengePage() {
  return (
    <SiteShell>
      <section className="border-b border-line bg-brand text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="kicker text-accent">A Dreamshifter talent initiative</p>
          <h1 className="display mt-5 max-w-3xl text-paper">
            Skill is important. <span className="text-accent">Proof is what sets you apart.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-paper/80">
            The DShift Challenge is a competitive, gamified tech challenge built to discover people who can do more than talk about their skills. Show us how you think, create and solve problems.
          </p>
          <p className="mt-6 text-xs font-semibold tracking-widest text-paper/70 uppercase">
            Challenge details and application dates will be announced.
          </p>
        </div>
      </section>
      <Wrap>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Why it exists</p>
            <h2 className="title mt-4">Talent deserves an opportunity to demonstrate what it can do.</h2>
          </div>
          <div className="space-y-4 text-sm leading-7 text-muted md:text-base">
            <p>Too many capable people have skills that are difficult to prove on a CV alone. The DShift Challenge creates a space where practical ability matters.</p>
            <p>
              Participants take on tasks, compete through skill-based challenges and show how they approach real work. Outstanding performers can stand out and may be considered for live project opportunities.
            </p>
          </div>
        </div>
      </Wrap>
      <section className="border-y border-line bg-card">
        <Wrap>
          <p className="eyebrow">How it works</p>
          <h2 className="title mt-4 max-w-2xl">A skill arena. Real tasks. A chance to stand out.</h2>
          <div className="mt-10 border-t border-line">
            {STEPS.map(([title, body], index) => (
              <article key={title} className="grid gap-2 border-b border-line py-6 md:grid-cols-[4rem_14rem_1fr] md:gap-8">
                <span className="text-sm font-semibold text-brand">0{index + 1}</span>
                <h3 className="font-display text-xl">{title}</h3>
                <p className="text-sm leading-7 text-muted">{body}</p>
              </article>
            ))}
          </div>
        </Wrap>
      </section>
      <Wrap>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="eyebrow">Who should watch this space?</p>
            <h2 className="title mt-4">Designers. Developers. Problem-solvers. Builders.</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              The challenge is for emerging technology talent ready to test their abilities, learn through competition and show what they can contribute.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              The exact challenge format, eligibility, dates and selection process will be published before applications open. No prizes, placements or employment outcomes are being promised in advance.
            </p>
            <Link to="/initiatives" className="mt-6 inline-flex text-sm font-semibold text-brand">
              Explore other initiatives
            </Link>
          </div>
          <div className="border border-line bg-card p-6 md:p-8">
            <h2 className="font-display text-3xl">Get challenge updates</h2>
            <p className="mt-2 mb-6 text-sm leading-6 text-muted">
              Leave your details and we'll share the announcement when participation information is confirmed.
            </p>
            <ChallengeForm />
          </div>
        </div>
      </Wrap>
    </SiteShell>
  );
}

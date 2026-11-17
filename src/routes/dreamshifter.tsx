import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, SiteShell, Wrap } from "@/components/site-shell";

export const Route = createFileRoute("/dreamshifter")({
  head: () => ({
    meta: [
      { title: "About Dreamshifter Tech Hub" },
      {
        name: "description",
        content:
          "Meet the founder and learn how Dreamshifter Tech Hub approaches digital products, technology and practical learning.",
      },
    ],
  }),
  component: AboutDreamshifterPage,
});

const APPROACH = [
  ["Understand the real need", "We start by listening. What needs to change? Who is the solution for? What would a useful result look like?"],
  ["Choose the right tool", "Not every problem needs an app. Not every business needs a complicated platform. We recommend what fits the need."],
  ["Design and build", "We shape the experience, plan the work and use the right tools to bring the solution to life."],
  ["Review and improve", "We test what we make, learn from feedback and identify what should happen next."],
];

function AboutDreamshifterPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="About Dreamshifter"
        title="Technology should create opportunities, not complications."
        lede="Dreamshifter Tech Hub is a founder-led digital agency and technology training provider. We design digital products, build business solutions and help people develop practical skills for the digital world."
      />
      <Wrap>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="title mt-4">Built on curiosity. Driven by execution.</h2>
          </div>
          <div className="space-y-4 text-sm leading-7 text-muted md:text-base">
            <p>
              Dreamshifter was founded by Ayinde Emmanuel Olatunde, a Digital Product Specialist and Project Manager with a B.Tech in Project Management Technology.
            </p>
            <p>
              His work brings together product design, technology operations and project delivery. He is interested in how digital experiences can solve everyday problems, how businesses can use technology more effectively and how emerging talent can gain the practical experience needed to contribute.
            </p>
            <p>
              Dreamshifter is being built as more than a service brand: it is a growing technology company developing digital products, delivering client solutions and creating pathways into practical tech work.
            </p>
          </div>
        </div>
      </Wrap>
      <section className="border-y border-line bg-card">
        <Wrap>
          <p className="eyebrow">Our mission</p>
          <h2 className="title mt-4 max-w-3xl">
            Make useful technology, quality digital solutions and practical tech education more accessible.
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div className="border-t border-line pt-6">
              <p className="eyebrow">Our vision</p>
              <p className="mt-3 font-display text-2xl leading-snug">
                Build a technology company known for valuable digital products, thoughtful problem-solving and opportunities for emerging talent.
              </p>
            </div>
            <div className="border-t border-accent pt-6">
              <p className="eyebrow">Our belief</p>
              <p className="mt-3 font-display text-2xl leading-snug">Ideas matter. Execution makes the difference.</p>
            </div>
          </div>
        </Wrap>
      </section>
      <Wrap>
        <p className="eyebrow">How we work</p>
        <h2 className="title mt-4 max-w-2xl">A clear process. No unnecessary complexity.</h2>
        <div className="mt-10 border-t border-line">
          {APPROACH.map(([title, body], index) => (
            <article key={title} className="grid gap-3 border-b border-line py-6 md:grid-cols-[4rem_14rem_1fr] md:gap-8">
              <span className="text-sm font-semibold text-brand">0{index + 1}</span>
              <h3 className="font-display text-xl">{title}</h3>
              <p className="text-sm leading-7 text-muted">{body}</p>
            </article>
          ))}
        </div>
      </Wrap>
      <section className="border-t border-line bg-tint">
        <Wrap>
          <div className="grid items-center gap-8 md:grid-cols-[16rem_1fr] lg:gap-14 lg:grid-cols-[20rem_1fr]">
            <img
              src="/media/founder.jpg"
              alt="Ayinde Emmanuel Olatunde, founder of Dreamshifter Tech Hub"
              width={338}
              height={549}
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <div>
              <p className="eyebrow">About the founder</p>
              <h2 className="title mt-3">Ayinde Emmanuel Olatunde</h2>
              <p className="mt-2 font-semibold text-muted">Founder · Digital Product Specialist · Project Manager</p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted md:text-base">
                Ayinde leads the direction, product thinking and delivery of Dreamshifter Tech Hub. He holds a B.Tech in Project Management Technology and works across digital product design, technology and project coordination.
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted md:text-base">
                His focus is on turning real needs into clear plans, useful digital experiences and work that can stand on its own.
              </p>
              <Link
                to="/contact"
                className="mt-7 inline-flex min-h-12 items-center bg-brand px-5 text-sm font-semibold text-paper hover:bg-brand-deep"
              >
                Work with Dreamshifter
              </Link>
            </div>
          </div>
        </Wrap>
      </section>
    </SiteShell>
  );
}

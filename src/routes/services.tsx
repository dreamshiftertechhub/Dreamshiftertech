import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Close, PageIntro, SiteShell, Wrap } from "@/components/site-shell";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Solutions — Dreamshifter Tech Hub" },
      {
        name: "description",
        content: "UI/UX and digital product design, web development, business technology solutions and practical tech training.",
      },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  { no: "01", title: "Digital Product Design — UI/UX", text: "We design websites, mobile applications and digital platforms around the people who use them. From user journeys and wireframes to polished interfaces and interactive prototypes, every design decision has a job.", includes: "User flows · Wireframes · Figma prototypes · Interface design · Design systems" },
  { no: "02", title: "Web Development", text: "We build responsive websites and web applications for businesses, brands and entrepreneurs. We use modern development tools and a disciplined process to move efficiently without skipping the thinking, testing or review.", includes: "Business websites · Landing pages · E-commerce · Web apps · Dashboards · Custom systems" },
  { no: "03", title: "Digital Product & App Solutions", text: "We help shape digital products from early idea to a clear, buildable experience. We can support product planning, interface design, prototyping and development coordination.", includes: "Product discovery · Requirements · Mobile-first experiences · Prototyping · Product iteration" },
  { no: "04", title: "Business Technology & ICT Support", text: "We help businesses make better use of their technology, improve digital workflows and address practical technical needs.", includes: "Technical support · Digital process improvement · Platform setup · Technology operations" },
  { no: "05", title: "Technology Consulting", text: "Get clear advice on digital opportunities, product direction, technology choices and the practical steps required to move a project forward.", includes: "Product direction · Project planning · Technology selection · Digital strategy" },
  { no: "06", title: "Tech Training & Academy", text: "Practical learning for people who want to build useful skills in UI/UX, web creation and modern AI workflows. Learn the tools, practise the work and build confidence.", includes: "UI/UX design · Web creation · AI-assisted workflows · Guided projects" },
];

function ServicesPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Services & solutions"
        title="From the first sketch to the finished digital experience."
        lede="Whether you need a website, a digital product or a better way to run part of your business, we help you find the right solution and build it."
      />
      <Wrap>
        <div className="border-t border-line">
          {SERVICES.map(({ no, title, text, includes }) => (
            <article key={no} className="grid gap-4 border-b border-line py-8 md:grid-cols-[4rem_1fr] md:gap-8">
              <span className="text-sm font-semibold text-brand">{no}</span>
              <div>
                <h2 className="font-display text-3xl tracking-tight">{title}</h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-muted md:text-base">{text}</p>
                <p className="mt-4 text-xs font-semibold leading-6 tracking-wide text-faint uppercase">{includes}</p>
                <Link to="/contact" className="mt-5 inline-flex items-center text-sm font-semibold text-brand">
                  Discuss this service
                  <ArrowUpRight className="ml-1 size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Wrap>
      <section className="border-y border-line bg-card">
        <Wrap>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="eyebrow">Our approach to technology</p>
              <h2 className="title mt-4">Tools should support good thinking, not replace it.</h2>
            </div>
            <div className="text-sm leading-7 text-muted md:text-base">
              <p>We choose tools that suit the job, help us explore ideas and support implementation. But speed without direction creates poor products.</p>
              <p className="mt-4">
                Every project still needs clear thinking, sound design decisions, proper review and attention to the people who will use it. That's the difference between generating something and building something useful.
              </p>
            </div>
          </div>
        </Wrap>
      </section>
      <Close
        kicker="Have a project in mind?"
        title="Let's find the right way to move it forward."
        body="Tell us what you're trying to build, improve or solve. We'll start with the problem and work from there."
        to="/contact"
        label="Discuss a project"
      />
    </SiteShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Close, PageIntro, SiteShell, Wrap } from "@/components/site-shell";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Selected Work — Dreamshifter Tech Hub" },
      {
        name: "description",
        content: "Explore digital projects, product concepts and systems across hospitality, real estate, e-commerce and fintech.",
      },
    ],
  }),
  component: ProjectsPage,
});

const PROJECTS = [
  { name: "Restaurant & coffee shop systems", type: "Hospitality · Web", status: "Selected project work", description: "Digital experiences and ordering-system concepts designed around restaurant customers, menus, enquiries and day-to-day operations." },
  { name: "Real estate experiences", type: "Property · Web", status: "Selected project work", description: "Property-focused website experiences that organise listings, present locations and make it easier for prospective buyers or renters to enquire." },
  { name: "Bollypet", type: "E-commerce · Online retail", status: "Design / project work", description: "An e-commerce direction focused on presenting products clearly and making the shopping journey straightforward." },
  { name: "PawchPay", type: "Fintech · Mobile product", status: "In development", description: "A digital payments product project focused on a clear mobile wallet experience. Money movement and financial services remain subject to integrations, security review and applicable regulatory requirements." },
  { name: "RealMeal", type: "Restaurant technology", status: "Product project", description: "An online ordering and restaurant operations experience connecting customers, orders and restaurant teams." },
  { name: "Shiftnear", type: "Service marketplace", status: "Pre-launch", description: "A marketplace in development to connect customers with local experts and vendors. Early vendor interest is being collected ahead of launch." },
];

function ProjectsPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Selected work"
        title="Different industries. Different problems. Purpose-built digital work."
        lede="A selection of client work, product projects and concepts across hospitality, property, e-commerce and fintech. We label each project honestly so you know what is live, in development or a design direction."
      />
      <Wrap>
        <div className="border-t border-line">
          {PROJECTS.map((project, index) => (
            <article key={project.name} className="grid gap-3 border-b border-line py-8 md:grid-cols-[4rem_1fr_11rem] md:gap-8">
              <span className="text-sm font-semibold text-brand">0{index + 1}</span>
              <div>
                <p className="text-xs font-semibold tracking-widest text-faint uppercase">{project.type}</p>
                <h2 className="mt-2 font-display text-3xl tracking-tight">{project.name}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{project.description}</p>
              </div>
              <p className="text-sm font-semibold text-brand">{project.status}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-xs leading-6 text-faint">
          Project descriptions reflect current work and development status. Product availability, features and launch dates may change as projects progress.
        </p>
      </Wrap>
      <Close
        kicker="Have a project in mind?"
        title="Let's make the next idea useful."
        to="/contact"
        label="Start a conversation"
      />
    </SiteShell>
  );
}

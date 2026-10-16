import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const projects = [
  {
    name: 'charity: water',
    tag: 'Audience Research · Brand Awareness',
    description:
      'Audience research and brand awareness work through the ASU Global Career Accelerator, with a certificate earned.',
  },
  {
    name: 'DC Art & Photography Business',
    tag: 'SEO · Digital Marketing',
    description:
      'SEO and connections between social media, the website, and landing pages, helping increase awareness and sales.',
  },
  {
    name: 'World Medicine',
    tag: 'Graphic Design',
    description: 'Graphic design for medicine packaging, labels, and promotional materials.',
  },
  {
    name: 'Handshake AI',
    tag: 'Freelance AI Training · Beginning October 2026',
    description:
      'Freelance AI training engagement developing practical AI and creative skills. Project work is confidential.',
  },
]

export function Projects() {
  return (
    <section aria-labelledby="projects-title" id="projects" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <SectionHeading id="projects-title" eyebrow="Selected Projects" title="Research, design, and digital growth." />
      </Reveal>
      <ul className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <li key={project.name} className="flex">
            <Reveal delay={(i % 2) * 100} className="flex w-full">
              <article className="group flex w-full flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{project.tag}</p>
                <h3 className="mt-3 font-serif text-2xl font-medium text-foreground">{project.name}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{project.description}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}

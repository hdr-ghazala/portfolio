import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const skills = [
  'Communications strategy',
  'Arabic–English writing & translation',
  'Social media',
  'SEO',
  'Email marketing',
  'Graphic design',
  'Video production',
  'Audience research',
  'AI tools',
]

const tools = ['Photoshop', 'Illustrator', 'InDesign', 'Premiere', 'Canva', 'WordPress', 'Wix', 'Shopify']

export function Skills() {
  return (
    <section aria-labelledby="skills-title" id="skills" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <SectionHeading id="skills-title" eyebrow="Skills" title="What I bring to the table." />
      </Reveal>
      <div className="grid gap-12 md:grid-cols-[1.6fr_1fr] md:gap-16">
        <Reveal>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Capabilities</h3>
          <ul className="flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-primary/25 bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
              >
                {skill}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Tools</h3>
          <ul className="flex flex-wrap gap-2.5">
            {tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground"
              >
                {tool}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

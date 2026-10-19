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

export function About() {
  return (
    <section aria-labelledby="about-title" id="about" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
        <Reveal>
          <SectionHeading id="about-title" eyebrow="About" title="Bilingual storyteller, creative communicator." />
        </Reveal>
        <div>
          <Reveal delay={100}>
            <p className="text-lg leading-relaxed text-pretty text-foreground/85 md:text-xl">
              I am an Iraqi American communications professional fluent in Arabic and English. My
              background spans nonprofit communications, journalism, social media, bilingual
              publications, and visual design. I combine creative work with audience research and a
              commitment to continuous learning, including developing practical skills in AI.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-[1.4fr_1fr]">
            <Reveal delay={150}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Skills
              </h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-secondary px-3.5 py-1.5 text-sm font-medium text-secondary-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={200}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Tools
              </h3>
              <ul className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const highlights = [
  'Fluent in Arabic & English',
  'Nonprofit communications',
  'Journalism & media',
  'Visual design',
]

export function About() {
  return (
    <section aria-labelledby="about-title" id="about" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
        <Reveal>
          <SectionHeading id="about-title" eyebrow="About" title="Bilingual storyteller, creative communicator." />
        </Reveal>
        <Reveal delay={100}>
          <p className="text-lg leading-relaxed text-pretty text-foreground/85 md:text-xl">
            I am an Iraqi American communications professional fluent in Arabic and English. My
            background spans nonprofit communications, journalism, social media, bilingual
            publications, and visual design. I combine creative work with audience research and a
            commitment to continuous learning, including developing practical skills in AI.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

import { skills, tools } from '@/lib/content'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Skills() {
  return (
    <section aria-labelledby="skills-title" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <SectionHeading id="skills-title" index="03" eyebrow="Skills & Tools" title="What I bring to the work." />
      </Reveal>
      <div className="flex flex-col gap-14 lg:flex-row lg:gap-16">
        <Reveal className="lg:w-2/3">
          <h3 className="sr-only">Skills</h3>
          <ul className="flex flex-wrap items-baseline gap-x-3 gap-y-2 font-serif text-2xl leading-snug text-primary md:text-3xl">
            {skills.map((skill, i) => (
              <li key={skill} className="flex items-baseline gap-3">
                {skill}
                {i < skills.length - 1 && (
                  <span aria-hidden className="text-ember">
                    /
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120} className="lg:w-1/3">
          <div className="rounded-sm bg-forest p-7 text-forest-foreground">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ember">Tools</h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {tools.map((tool) => (
                <li key={tool} className="border-b border-forest-foreground/15 pb-2">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

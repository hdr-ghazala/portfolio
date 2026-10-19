import { degrees, recognition } from '@/lib/content'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Education() {
  return (
    <section aria-labelledby="education-title" id="education" className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionHeading
            id="education-title"
            index="04"
            eyebrow="Education & Recognition"
            title="A foundation in media and business."
          />
        </Reveal>

        <div className="flex flex-col gap-14 lg:flex-row lg:gap-16">
          <div className="lg:w-7/12">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Degrees
            </h3>
            <ul>
              {degrees.map((item, i) => (
                <li key={item.school} className="border-b border-border py-8 first:border-t">
                  <Reveal delay={i * 100}>
                    <p className="font-serif text-3xl font-medium text-primary md:text-4xl">{item.school}</p>
                    <p className="mt-2 text-lg text-foreground">{item.degree}</p>
                    <p className="mt-2 text-sm font-medium text-ember-ink">{item.detail}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-5/12">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Certificates, Training & Recognition
            </h3>
            <ul className="flex flex-col gap-4 pt-6">
              {recognition.map((item, i) => (
                <li key={item.title}>
                  <Reveal delay={i * 100} className="rounded-sm border-l-2 border-ember bg-secondary p-6">
                    <p className="font-serif text-xl font-medium text-primary">{item.title}</p>
                    <p className="mt-1.5 leading-relaxed text-foreground/85">{item.detail}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

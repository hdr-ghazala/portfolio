import { Award, GraduationCap } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const education = [
  {
    school: 'Arizona State University',
    degree: 'B.A. in Business (Communication)',
    detail: 'August 2026 · GPA 3.61',
  },
  {
    school: 'University of Baghdad',
    degree: 'B.A. in Journalism & Media',
    detail: '2016',
  },
]

const recognition = [
  {
    title: 'ASU Global Career Accelerator',
    detail: 'E-Commerce Specialist, Digital Ads Specialist, and Intercultural Skills',
  },
  {
    title: 'National Society of Leadership and Success',
    detail: 'Inducted January 2026',
  },
]

export function Education() {
  return (
    <section aria-labelledby="education-title" id="education">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionHeading id="education-title" eyebrow="Education & Recognition" title="A foundation in media and business." />
        </Reveal>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground">
              <GraduationCap className="size-5 text-primary" aria-hidden />
              Degrees
            </h3>
            <ul className="divide-y divide-border border-y border-border">
              {education.map((item) => (
                <li key={item.school} className="py-6">
                  <p className="font-serif text-xl font-medium text-foreground">{item.school}</p>
                  <p className="mt-1 text-foreground/80">{item.degree}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground">
              <Award className="size-5 text-primary" aria-hidden />
              Certificates, Training & Recognition
            </h3>
            <ul className="divide-y divide-border border-y border-border">
              {recognition.map((item) => (
                <li key={item.title} className="py-6">
                  <p className="font-serif text-xl font-medium text-foreground">{item.title}</p>
                  <p className="mt-1 text-foreground/80">{item.detail}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

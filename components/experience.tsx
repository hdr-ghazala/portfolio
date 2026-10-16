import { Languages, Megaphone, Video } from 'lucide-react'
import { Reveal } from './reveal'

const experiences = [
  {
    org: 'UWC',
    role: 'Communications & Social Media',
    icon: Megaphone,
    description:
      'Created social media content, supported scholarship outreach, translated between Arabic and English, and communicated accurate information and expectations to hundreds of applicants while reaching thousands through social media.',
  },
  {
    org: 'Women & Agriculture',
    role: 'Bilingual Publications',
    icon: Languages,
    description:
      'Contributed Arabic–English translation, writing, and newsletter design to the Women & Agriculture publication, associated with UN Women, Mercy Hands, and support from the Government of Japan.',
  },
  {
    org: 'Seventh Sense Art & Media Productions',
    role: 'Journalism & Production',
    icon: Video,
    description:
      'Contributed to interviews, roundtables, conferences, and video productions covering community and social issues.',
  },
]

export function Experience() {
  return (
    <section aria-labelledby="experience-title" id="experience" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="mb-10 md:mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Featured Experience
            </p>
            <h2
              id="experience-title"
              className="font-serif text-3xl font-medium tracking-tight text-balance md:text-4xl"
            >
              Work that connects people with information.
            </h2>
          </div>
        </Reveal>
        <ol className="grid gap-5 md:grid-cols-3">
          {experiences.map((exp, i) => (
            <li key={exp.org} className="flex">
              <Reveal delay={i * 100} className="flex w-full">
                <article className="flex w-full flex-col rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.06] p-7 transition-colors hover:bg-primary-foreground/10">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="inline-flex size-11 items-center justify-center rounded-full bg-primary-foreground/10">
                      <exp.icon className="size-5 text-accent" aria-hidden />
                    </span>
                    <span className="font-serif text-sm text-primary-foreground/60">0{i + 1}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-medium leading-snug text-balance">{exp.org}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">{exp.role}</p>
                  <p className="mt-5 leading-relaxed text-primary-foreground/85">{exp.description}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

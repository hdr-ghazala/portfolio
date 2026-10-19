import { ArrowUpRight, Bot, FolderOpen, Pill, Search, Users } from 'lucide-react'
import { PORTFOLIO_URL } from '@/lib/links'
import { FeaturedCard, type FeaturedProject } from './featured-card'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const featured: FeaturedProject[] = [
  {
    org: 'UWC',
    role: 'Communications & Social Media',
    cover: '/images/cover-uwc.png',
    summary:
      'Helping scholarship audiences access clear, accurate information across languages and digital channels.',
    contributions: [
      'Created social media content and supported scholarship outreach.',
      'Translated information between Arabic and English.',
      'Communicated accurate information and expectations to hundreds of applicants.',
      'Reached thousands of people through social media.',
    ],
  },
  {
    org: 'Women & Agriculture',
    role: 'Bilingual Writing, Translation & Publication Design',
    cover: '/images/cover-agriculture.png',
    summary:
      'Bringing agricultural stories and information to Arabic- and English-speaking readers.',
    contributions: [
      'Contributed Arabic–English translation and writing.',
      'Designed newsletter layouts.',
      'Contributed to the Women & Agriculture publication associated with UN Women, Mercy Hands, and support from the Government of Japan.',
    ],
  },
  {
    org: 'Seventh Sense Art & Media Productions',
    role: 'Journalism & Production',
    cover: '/images/cover-media.png',
    summary: 'Supporting media productions that explore community and social issues.',
    contributions: [
      'Contributed to interviews, roundtables, conferences, and video productions.',
      'Applied journalism and visual storytelling skills to communicate information to audiences.',
    ],
  },
]

const supporting = [
  {
    name: 'charity: water',
    label: 'ASU Global Career Accelerator Training Project',
    icon: Users,
    description:
      'Audience research and brand awareness work completed through the ASU Global Career Accelerator, with a certificate earned.',
  },
  {
    name: 'DC Art & Photography Business',
    label: 'SEO & Digital Presence',
    icon: Search,
    description:
      'Improved search visibility and connections between social media, the website, and landing pages, helping increase awareness and sales.',
  },
  {
    name: 'World Medicine',
    label: 'Graphic Design',
    icon: Pill,
    description: 'Created designs for medicine packaging, labels, and promotional materials.',
  },
  {
    name: 'Handshake AI',
    label: 'Freelance AI Training · October 2026–Present',
    icon: Bot,
    description:
      'Developing practical AI and creative skills through a freelance AI training engagement. Project details are confidential.',
  },
]

export function Work() {
  return (
    <section aria-labelledby="work-title" id="work" className="border-y border-border bg-muted/50">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionHeading
            id="work-title"
            eyebrow="Featured Work"
            title="Work that connects people with information."
          />
        </Reveal>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <li key={project.org} className="flex">
              <Reveal delay={i * 100} className="flex w-full">
                <FeaturedCard project={project} index={i} />
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-10 flex justify-center">
          <a
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <FolderOpen className="size-4" aria-hidden />
            Browse Full Portfolio
            <ArrowUpRight className="size-4" aria-hidden />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </Reveal>

        <div className="mt-20">
          <Reveal>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Supporting Projects
            </h3>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {supporting.map((project, i) => (
              <li key={project.name} className="flex">
                <Reveal delay={(i % 2) * 100} className="flex w-full">
                  <article className="flex w-full gap-4 rounded-2xl border border-border bg-card p-6">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                      <project.icon className="size-5 text-primary" aria-hidden />
                    </span>
                    <div>
                      <h4 className="font-serif text-xl font-medium text-foreground">
                        {project.name}
                      </h4>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {project.label}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                        {project.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

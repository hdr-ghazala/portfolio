import { featuredProjects, type FeaturedProject } from '@/lib/content'
import { cn } from '@/lib/utils'
import { ProjectCover } from './project-cover'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

function ProjectMeta({ project, tone = 'light' }: { project: FeaturedProject; tone?: 'light' | 'dark' }) {
  const dark = tone === 'dark'
  return (
    <>
      <p
        aria-hidden
        className={cn(
          'font-serif text-7xl font-medium leading-none tabular-nums md:text-8xl',
          dark ? 'text-ember' : 'text-ember-ink',
        )}
      >
        {project.number}
      </p>
      <h3
        className={cn(
          'mt-6 font-serif text-3xl font-medium leading-tight text-balance md:text-4xl',
          dark ? 'text-forest-foreground' : 'text-primary',
        )}
      >
        <span className="sr-only">Project {project.number}: </span>
        {project.org}
      </h3>
      <p
        className={cn(
          'mt-3 text-xs font-semibold uppercase tracking-[0.18em]',
          dark ? 'text-forest-foreground/70' : 'text-muted-foreground',
        )}
      >
        {project.area}
      </p>
      <p
        className={cn(
          'mt-5 text-lg leading-relaxed text-pretty',
          dark ? 'text-forest-foreground/85' : 'text-foreground/85',
        )}
      >
        {project.summary}
      </p>
    </>
  )
}

function Contributions({ items, tone = 'light' }: { items: string[]; tone?: 'light' | 'dark' }) {
  const dark = tone === 'dark'
  return (
    <div>
      <h4
        className={cn(
          'text-xs font-semibold uppercase tracking-[0.2em]',
          dark ? 'text-ember' : 'text-ember-ink',
        )}
      >
        My Contribution
      </h4>
      <ul className={cn('mt-4 border-t', dark ? 'border-forest-foreground/15' : 'border-border')}>
        {items.map((item, i) => (
          <li
            key={item}
            className={cn(
              'flex gap-4 border-b py-3.5 leading-relaxed',
              dark ? 'border-forest-foreground/15 text-forest-foreground/90' : 'border-border text-foreground/90',
            )}
          >
            <span
              aria-hidden
              className={cn('pt-0.5 text-xs font-semibold tabular-nums', dark ? 'text-ember' : 'text-ember-ink')}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* 01 — image-led: wide image left, text column right */
function ImageLeft({ project }: { project: FeaturedProject }) {
  return (
    <article className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
        <Reveal className="lg:w-7/12">
          <ProjectCover
            cover={project.cover}
            aspect="aspect-[4/3]"
            sizes="(min-width: 1024px) 640px, 100vw"
          />
        </Reveal>
        <Reveal delay={120} className="lg:w-5/12">
          <ProjectMeta project={project} />
          <div className="mt-8">
            <Contributions items={project.contributions} />
          </div>
        </Reveal>
      </div>
    </article>
  )
}

/* 02 — dark green band: text left, image right, offset */
function DarkBand({ project }: { project: FeaturedProject }) {
  return (
    <article className="bg-forest text-forest-foreground">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center lg:gap-16">
          <Reveal className="lg:w-5/12">
            <ProjectMeta project={project} tone="dark" />
            <div className="mt-8">
              <Contributions items={project.contributions} tone="dark" />
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:w-7/12 lg:-mr-8">
            <ProjectCover
              cover={project.cover}
              aspect="aspect-[16/10]"
              sizes="(min-width: 1024px) 680px, 100vw"
              tone="dark"
            />
          </Reveal>
        </div>
      </div>
    </article>
  )
}

/* 03 — cinematic: full-width wide image, then split text below */
function Cinematic({ project }: { project: FeaturedProject }) {
  return (
    <article className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <ProjectCover
          cover={project.cover}
          aspect="aspect-[16/9] md:aspect-[21/9]"
          sizes="(min-width: 1152px) 1088px, 100vw"
        />
      </Reveal>
      <div className="mt-10 flex flex-col gap-10 md:flex-row md:gap-16">
        <Reveal delay={80} className="md:w-1/2">
          <ProjectMeta project={project} />
        </Reveal>
        <Reveal delay={160} className="md:w-1/2 md:pt-24">
          <Contributions items={project.contributions} />
        </Reveal>
      </div>
    </article>
  )
}

const layouts = [ImageLeft, DarkBand, Cinematic]

export function FeaturedWork() {
  return (
    <section aria-labelledby="work-title" id="work" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 pt-20 md:px-8 md:pt-28">
        <Reveal>
          <SectionHeading
            id="work-title"
            index="02"
            eyebrow="Featured Work"
            title="Work that connects people with information."
            className="mb-0 md:mb-0"
          />
        </Reveal>
      </div>
      {featuredProjects.map((project, i) => {
        const Layout = layouts[i % layouts.length]
        return <Layout key={project.org} project={project} />
      })}
    </section>
  )
}

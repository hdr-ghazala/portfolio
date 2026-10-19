import { ArrowUpRight } from 'lucide-react'
import { supportingProjects } from '@/lib/content'
import { PORTFOLIO_URL } from '@/lib/links'
import { Reveal } from './reveal'

export function SupportingProjects() {
  return (
    <section aria-labelledby="supporting-title" className="bg-secondary">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember-ink">
              Also in the portfolio
            </p>
            <h2 id="supporting-title" className="mt-3 font-serif text-3xl font-medium text-primary md:text-4xl">
              Supporting Projects
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-sm border-b border-primary/40 pb-1 text-sm font-medium text-primary transition-colors hover:border-ember-ink hover:text-ember-ink"
            >
              Full Portfolio
              <ArrowUpRight
                className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                aria-hidden
              />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </Reveal>
        </div>

        <ul className="mt-12 grid border-t border-primary/15 sm:grid-cols-2">
          {supportingProjects.map((project, i) => (
            <li
              key={project.name}
              className="border-b border-primary/15 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
            >
              <Reveal delay={(i % 2) * 90} className="py-8">
                <article className="flex gap-5">
                  <span aria-hidden className="font-serif text-2xl text-ember-ink tabular-nums">
                    {String.fromCharCode(97 + i)}.
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-primary">{project.name}</h3>
                    <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {project.label}
                    </p>
                    <p className="mt-3 leading-relaxed text-foreground/85">{project.description}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

import { ArrowUpRight, FolderOpen } from 'lucide-react'
import { LINKEDIN_URL, PORTFOLIO_URL } from '@/lib/links'
import { Monogram } from './monogram'
import { Reveal } from './reveal'

export function Contact() {
  return (
    <section aria-labelledby="contact-title" id="contact" className="bg-forest text-forest-foreground">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-ember">
            <span className="tabular-nums">05</span>
            <span aria-hidden className="h-px w-8 bg-ember/60" />
            Contact
          </p>
          <h2
            id="contact-title"
            className="mt-6 max-w-4xl font-serif text-5xl font-medium leading-[1] tracking-tight text-balance md:text-7xl"
          >
            {'Let\u2019s create something '}
            <em className="text-ember">meaningful.</em>
          </h2>
        </Reveal>
        <div className="mt-12 flex flex-col gap-10 border-t border-forest-foreground/15 pt-10 md:flex-row md:items-end md:justify-between">
          <Reveal delay={100} className="md:w-1/2">
            <p className="text-lg leading-relaxed text-pretty text-forest-foreground/80">
              {
                'I\u2019m open to opportunities in communications, digital marketing, and creative work where I can contribute, continue learning, and grow professionally.'
              }
            </p>
          </Reveal>
          <Reveal delay={180} className="flex flex-col gap-3 sm:flex-row">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ember px-7 text-sm font-semibold text-accent-foreground transition-colors hover:bg-forest-foreground"
            >
              LinkedIn
              <ArrowUpRight className="size-4" aria-hidden />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-forest-foreground/30 px-7 text-sm font-medium transition-colors hover:border-ember hover:text-ember"
            >
              <FolderOpen className="size-4" aria-hidden />
              Full Portfolio
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </Reveal>
        </div>
      </div>
      <div className="border-t border-forest-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-forest-foreground/65 sm:flex-row md:px-8">
          <Monogram className="text-2xl text-forest-foreground" />
          <p>© {new Date().getFullYear()} Haider Ghazala · Northern Virginia · Open to relocation</p>
        </div>
      </div>
    </section>
  )
}

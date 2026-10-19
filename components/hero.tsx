import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'
import { LINKEDIN_URL } from '@/lib/links'
import { Reveal } from './reveal'

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-forest text-forest-foreground"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-8 -bottom-16 select-none font-serif text-[16rem] font-semibold leading-none text-forest-foreground/[0.04] md:-right-4 md:text-[28rem]"
      >
        HG
      </span>

      <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-20 md:px-8 md:pt-24 md:pb-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember">
            Communications · Digital Marketing · Bilingual Storytelling
          </p>
          <h1
            id="hero-title"
            className="mt-6 font-serif text-6xl font-medium leading-[0.92] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
          >
            Haider
            <br />
            <span className="md:pl-[0.6em]">Ghazala</span>
          </h1>
        </Reveal>

        <div className="mt-14 flex flex-col gap-10 border-t border-forest-foreground/15 pt-10 md:mt-20 md:flex-row md:items-start md:justify-between md:gap-16">
          <Reveal delay={120} className="md:w-1/2">
            <p className="font-serif text-3xl leading-tight text-balance md:text-4xl">
              Clear communication. Creative ideas.{' '}
              <em className="text-ember not-italic md:italic">Meaningful impact.</em>
            </p>
          </Reveal>

          <Reveal delay={220} className="md:w-5/12">
            <p className="text-lg leading-relaxed text-pretty text-forest-foreground/80">
              I create bilingual content, visual designs, and digital experiences that help
              organizations inform audiences, strengthen their presence, and tell meaningful stories.
            </p>
            <p className="mt-5 flex items-center gap-2 text-sm text-forest-foreground/70">
              <MapPin className="size-4 text-ember" aria-hidden />
              Northern Virginia · Open to relocation
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ember px-7 text-sm font-semibold text-accent-foreground transition-colors hover:bg-forest-foreground"
              >
                View My Work
                <ArrowDown
                  className="size-4 transition-transform group-hover:translate-y-0.5 motion-reduce:transition-none"
                  aria-hidden
                />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-forest-foreground/30 px-7 text-sm font-medium transition-colors hover:border-ember hover:text-ember"
              >
                LinkedIn
                <ArrowUpRight className="size-4" aria-hidden />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

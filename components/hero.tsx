import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'

export const LINKEDIN_URL = 'https://www.linkedin.com/in/hdrghazala/'

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-border"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 size-[28rem] rounded-full bg-secondary blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" aria-hidden />
            Northern Virginia • Open to relocation
          </p>
          <p className="mb-4 font-serif text-xl text-primary md:text-2xl">Haider Ghazala</p>
          <h1
            id="hero-title"
            className="max-w-4xl font-serif text-4xl font-medium leading-[1.08] tracking-tight text-balance text-foreground sm:text-5xl md:text-7xl"
          >
            Clear communication. Creative ideas.{' '}
            <span className="italic text-primary">Meaningful impact.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
            I bring together communications, digital marketing, and visual storytelling to help
            organizations reach people with clarity and purpose.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#experience"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Explore My Work
              <ArrowDown className="size-4" aria-hidden />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-primary/30 bg-card px-7 text-sm font-medium text-primary transition-transform hover:-translate-y-0.5 hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Connect on LinkedIn
              <ArrowUpRight className="size-4" aria-hidden />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

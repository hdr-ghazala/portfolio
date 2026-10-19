import { Reveal } from './reveal'

export function About() {
  return (
    <section aria-labelledby="about-title" id="about" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="flex flex-col gap-8 md:flex-row md:gap-16">
        <Reveal className="md:w-1/3">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-ember-ink">
            <span className="tabular-nums">01</span>
            <span aria-hidden className="h-px w-8 bg-ember-ink/50" />
            About
          </p>
          <h2 id="about-title" className="mt-4 font-serif text-3xl font-medium leading-tight text-primary md:text-4xl">
            Bilingual storyteller, creative communicator.
          </h2>
        </Reveal>
        <Reveal delay={100} className="md:w-2/3">
          <p className="font-serif text-2xl leading-snug text-pretty text-foreground md:text-3xl">
            I am an Iraqi American communications professional fluent in{' '}
            <span className="text-ember-ink">Arabic and English</span>. My background spans nonprofit
            communications, journalism, social media, bilingual publications, and visual design.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I combine creative work with audience research and a commitment to continuous learning,
            including developing practical skills in AI.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

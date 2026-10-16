import { ArrowUpRight, FolderOpen } from 'lucide-react'
import { LINKEDIN_URL } from './hero'
import { Reveal } from './reveal'

const PORTFOLIO_URL =
  'https://drive.google.com/drive/folders/1ht6bkzzLwNW2eex7CO_kW1wxDJXe41d7?usp=drive_link'

export function Contact() {
  return (
    <section aria-labelledby="contact-title" id="contact" className="px-5 pb-20 md:px-8 md:pb-28">
      <Reveal className="mx-auto max-w-6xl">
        <div className="rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground md:px-16 md:py-24">
          <h2 id="contact-title" className="font-serif text-4xl font-medium tracking-tight md:text-6xl">
            {"Let's connect."}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-primary-foreground/85">
            {"I'm seeking opportunities in communications, digital marketing, and creative work where I can contribute, keep learning, and grow professionally."}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary-foreground px-7 text-sm font-medium text-primary transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground"
            >
              LinkedIn
              <ArrowUpRight className="size-4" aria-hidden />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-primary-foreground/40 px-7 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 hover:border-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground"
            >
              <FolderOpen className="size-4" aria-hidden />
              View Portfolio
              <ArrowUpRight className="size-4" aria-hidden />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

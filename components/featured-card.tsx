'use client'

import { useId, useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export type FeaturedProject = {
  org: string
  role: string
  summary: string
  contributions: string[]
  cover: string
}

export function FeaturedCard({ project, index }: { project: FeaturedProject; index: number }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <article className="flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg hover:shadow-primary/5">
      <figure>
        <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
          <Image
            src={project.cover || '/placeholder.svg'}
            alt=""
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority={index === 0}
          />
        </div>
        <figcaption className="border-b border-border px-6 py-2 text-xs text-muted-foreground">
          AI-generated conceptual illustration.
        </figcaption>
      </figure>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="font-serif text-sm text-accent-foreground/70">
          <span className="text-accent">●</span> 0{index + 1}
        </p>
        <h3 className="mt-2 font-serif text-2xl font-medium leading-snug text-balance text-foreground">
          {project.org}
        </h3>
        <p className="mt-1 text-sm font-medium text-primary">{project.role}</p>
        <p className="mt-4 leading-relaxed text-pretty text-muted-foreground">{project.summary}</p>

        <div className="mt-auto pt-6">
          <button
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
            className="flex w-full items-center justify-between rounded-lg border border-border bg-muted/60 px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-secondary"
          >
            My Contribution
            <ChevronDown
              className={cn(
                'size-4 text-primary transition-transform motion-reduce:transition-none',
                open && 'rotate-180',
              )}
              aria-hidden
            />
          </button>
          <div
            id={panelId}
            role="region"
            aria-label={`${project.org} contribution`}
            inert={!open}
            className={cn(
              'grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none',
              open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
            )}
          >
            <div className="overflow-hidden">
              <ul className="space-y-2.5 pt-4">
                {project.contributions.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                    <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

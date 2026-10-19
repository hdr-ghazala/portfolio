import { cn } from '@/lib/utils'

export function SectionHeading({
  id,
  index,
  eyebrow,
  title,
  tone = 'light',
  className,
}: {
  id: string
  index: string
  eyebrow: string
  title: string
  tone?: 'light' | 'dark'
  className?: string
}) {
  const dark = tone === 'dark'
  return (
    <div className={cn('mb-12 md:mb-16', className)}>
      <p
        className={cn(
          'mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em]',
          dark ? 'text-ember' : 'text-ember-ink',
        )}
      >
        <span className="tabular-nums">{index}</span>
        <span aria-hidden className={cn('h-px w-8', dark ? 'bg-ember/60' : 'bg-ember-ink/50')} />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          'max-w-3xl font-serif text-4xl font-medium leading-[1.05] tracking-tight text-balance md:text-5xl lg:text-6xl',
          dark ? 'text-forest-foreground' : 'text-primary',
        )}
      >
        {title}
      </h2>
    </div>
  )
}

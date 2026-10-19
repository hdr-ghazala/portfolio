import Image from 'next/image'
import type { Cover } from '@/lib/content'
import { cn } from '@/lib/utils'

export function ProjectCover({
  cover,
  aspect,
  sizes,
  tone = 'light',
  className,
}: {
  cover: Cover
  aspect: string
  sizes: string
  tone?: 'light' | 'dark'
  className?: string
}) {
  return (
    <figure className={cn('group', className)}>
      <div className={cn('relative overflow-hidden rounded-sm bg-muted', aspect)}>
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes={sizes}
          quality={90}
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
      {cover.conceptual && (
        <figcaption
          className={cn(
            'mt-2 text-xs',
            tone === 'dark' ? 'text-forest-foreground/65' : 'text-muted-foreground',
          )}
        >
          AI-generated conceptual illustration.
        </figcaption>
      )}
    </figure>
  )
}

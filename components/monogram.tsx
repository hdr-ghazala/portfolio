import { cn } from '@/lib/utils'

export function Monogram({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        'inline-flex items-baseline font-serif font-semibold leading-none tracking-tight',
        className,
      )}
    >
      H<span className="text-ember">/</span>G
    </span>
  )
}

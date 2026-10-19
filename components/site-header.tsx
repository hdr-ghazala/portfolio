'use client'

import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Monogram } from './monogram'

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onResize = () => {
      if (window.matchMedia('(min-width: 768px)').matches) setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-forest-foreground/10 bg-forest/95 text-forest-foreground backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center gap-3 rounded-sm" onClick={() => setOpen(false)}>
          <Monogram className="text-xl" />
          <span className="text-sm font-medium tracking-wide">Haider Ghazala</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((link, i) => (
              <li key={link.href} className="flex items-center">
                {i > 0 && (
                  <span aria-hidden className="px-1 text-ember/70">
                    ·
                  </span>
                )}
                <a
                  href={link.href}
                  className="rounded-sm px-2 py-1 text-sm text-forest-foreground/80 transition-colors hover:text-ember"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-forest-foreground/10 md:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
          {links.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 rounded-sm py-3 font-serif text-2xl"
              >
                <span className="font-sans text-xs tabular-nums text-ember">0{i + 1}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

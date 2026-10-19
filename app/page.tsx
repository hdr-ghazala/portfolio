import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Education } from '@/components/education'
import { FeaturedWork } from '@/components/featured-work'
import { Hero } from '@/components/hero'
import { SiteHeader } from '@/components/site-header'
import { Skills } from '@/components/skills'
import { SupportingProjects } from '@/components/supporting-projects'

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ember focus:px-4 focus:py-2 focus:text-accent-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <FeaturedWork />
        <SupportingProjects />
        <Skills />
        <Education />
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  )
}

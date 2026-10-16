export function SectionHeading({
  id,
  eyebrow,
  title,
}: {
  id: string
  eyebrow: string
  title: string
}) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2
        id={id}
        className="font-serif text-3xl font-medium tracking-tight text-balance text-foreground md:text-4xl"
      >
        {title}
      </h2>
    </div>
  )
}

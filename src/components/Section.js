export function Eyebrow({ children }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-teal-deep">
      {children}
    </p>
  );
}

export function PageHero({ eyebrow, title, intro }) {
  return (
    <section className="aurora border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-[20ch] text-4xl leading-[1.06] text-balance sm:text-5xl">{title}</h1>
        <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-muted-foreground text-pretty">
          {intro}
        </p>
        <div className="brand-rule mt-8 h-1 w-24 rounded-full" />
      </div>
    </section>
  );
}

export function Prose({ children }) {
  return (
    <div className="space-y-5 text-base leading-relaxed text-muted-foreground text-pretty">
      {children}
    </div>
  );
}

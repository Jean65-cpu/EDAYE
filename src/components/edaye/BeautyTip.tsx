import { BEAUTY_TIP } from "./data";

export function BeautyTip() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-12">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Conseil beauté</p>
          <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
            {BEAUTY_TIP.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {BEAUTY_TIP.intro}
          </p>
          <ol className="mt-6 space-y-3">
            {BEAUTY_TIP.steps.map((s, i) => (
              <li key={i} className="flex gap-4 text-sm leading-relaxed text-foreground">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 font-serif text-primary">
                  {i + 1}
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

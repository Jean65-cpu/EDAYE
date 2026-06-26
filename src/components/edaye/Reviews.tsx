import { Star } from "lucide-react";

// <!-- À REMPLACER PAR DE VRAIS AVIS CLIENTS -->
const REVIEWS = [
  {
    name: "Akossiwa M.",
    text: "Un accueil chaleureux et un soin visage qui a vraiment changé ma peau. Je recommande sans hésiter.",
    service: "Soin visage éclat",
  },
  {
    name: "Yara K.",
    text: "Mon maquillage de mariage était parfait, exactement ce que je voulais. Une équipe à l'écoute.",
    service: "Maquillage mariage",
  },
  {
    name: "Inès D.",
    text: "Ma pause du dimanche. Toujours impeccable, propre et reposant.",
    service: "Bouquet MIAGBOFA",
  },
];

export function Reviews() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Avis clientes</p>
            <h2 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">
              On en parle
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-accent text-accent"
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <span className="font-serif text-xl text-foreground">4,9</span>
            <span className="text-sm text-muted-foreground">
              · sur les retours clients
            </span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <article
              key={r.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <div className="mb-3 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" strokeWidth={1.5} />
                ))}
              </div>
              <p className="flex-1 text-sm italic leading-relaxed text-foreground">
                « {r.text} »
              </p>
              <div className="mt-5 border-t border-border pt-4">
                <p className="font-serif text-base text-foreground">{r.name}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {r.service}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

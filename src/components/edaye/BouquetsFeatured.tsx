import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BOUQUETS, type Bouquet } from "./data";
import { SectionHeader } from "./SectionHeader";
import { BouquetReservationModal } from "./BouquetReservationModal";

export function BouquetsFeatured() {
  const [selectedBouquet, setSelectedBouquet] = useState<Bouquet | null>(null);

  return (
    <section id="bouquets" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Forfaits signature"
          title="Nos bouquets"
          italicWord="de soins"
          rightLabel="01 — Découvrir"
          intro="Des rituels pensés pour combiner les soins préférés de nos clientes, à un tarif plus doux."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {BOUQUETS.map((b, i) => (
            <article
              key={b.id}
              className={`group relative flex flex-col rounded-3xl border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-warm ${
                b.recommended
                  ? "border-primary/40 shadow-warm"
                  : "border-border shadow-soft"
              }`}
            >
              {b.recommended && (
                <span className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-primary-foreground shadow-sm">
                  Recommandé
                </span>
              )}

              <span className="font-serif text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Bouquet {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-serif text-3xl italic text-foreground">
                {b.name}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {b.description}
              </p>

              <div className="mt-6 flex items-baseline justify-between border-t border-border/70 pt-5">
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  À partir de
                </span>
                <span className="font-serif text-3xl text-primary">{b.price}</span>
              </div>

              <Button
                onClick={() => setSelectedBouquet(b)}
                variant={b.recommended ? "default" : "outline"}
                className="mt-5 h-11 rounded-full text-xs uppercase tracking-[0.2em]"
              >
                Réserver ce forfait
              </Button>
            </article>
          ))}
        </div>
      </div>

      <BouquetReservationModal
        bouquet={selectedBouquet}
        open={!!selectedBouquet}
        onClose={() => setSelectedBouquet(null)}
      />
    </section>
  );
}

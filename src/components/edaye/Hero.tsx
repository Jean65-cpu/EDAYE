import { Button } from "@/components/ui/button";
import { useReservation } from "./ReservationContext";
import { BRAND } from "./data";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  const { openModal } = useReservation();

  return (
    <section id="top" className="relative overflow-hidden bg-cream pt-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-8 sm:px-6 sm:pb-28 sm:pt-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-36 lg:pt-16">
        {/* Left — editorial type */}
        <div className="relative max-w-xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-primary/50" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-primary">
              L'art du soin · Lomé
            </span>
          </div>

          <h1 className="mt-6 font-serif text-6xl italic leading-[0.9] text-foreground sm:text-7xl lg:text-[5.5rem]">
            EDAYE
          </h1>
          <span className="mt-3 block font-serif text-2xl font-light not-italic text-foreground/80 sm:text-3xl">
            Institut de Beauté
          </span>

          <p className="mt-8 font-serif text-2xl italic text-primary/90">
            « {BRAND.tagline} »
          </p>

          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            {BRAND.reassurance}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button
              size="lg"
              onClick={() => openModal()}
              className="h-12 rounded-full px-7 text-sm uppercase tracking-[0.15em] shadow-[0_14px_36px_-14px_oklch(0.58_0.135_38/0.55)]"
            >
              Réserver une séance
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-12 rounded-full border-foreground/20 bg-background/70 px-7 text-sm uppercase tracking-[0.15em] backdrop-blur"
            >
              <a href="#bouquets">Voir nos bouquets</a>
            </Button>
          </div>
        </div>

        {/* Right — hero image with floating signature badge */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="aspect-[4/5] overflow-hidden rounded-t-[140px] border border-primary/15 shadow-warm">
            <img
              src={heroImg}
              alt="Soin signature à l'institut EDAYE"
              width={800}
              height={1000}
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating signature badge */}
          <div className="absolute -bottom-6 -left-4 flex h-32 w-32 items-center justify-center rounded-full bg-card text-center shadow-warm ring-1 ring-primary/15 sm:-left-8 sm:h-36 sm:w-36">
            <p className="font-serif text-[11px] uppercase leading-tight tracking-[0.25em] text-foreground">
              Soin
              <br />
              <span className="italic text-primary">Signature</span>
              <br />
              Dimanche
            </p>
          </div>

          {/* Filet décoratif */}
          <span className="absolute -right-2 top-8 hidden h-24 w-px bg-primary/30 sm:block" />
        </div>
      </div>
    </section>
  );
}

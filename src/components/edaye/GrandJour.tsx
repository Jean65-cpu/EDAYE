import { Button } from "@/components/ui/button";
import { WEDDING_TEXT } from "./data";
import { useReservation } from "./ReservationContext";
import bride from "@/assets/g-bride.jpg";

export function GrandJour() {
  const { openModal } = useReservation();

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="relative">
            <div className="overflow-hidden rounded-t-[120px] border border-primary/15 shadow-warm">
              <img
                src={bride}
                alt="Maquillage mariée"
                width={600}
                height={560}
                loading="lazy"
                decoding="async"
                className="h-[460px] w-full object-cover sm:h-[560px]"
              />
            </div>
            <span className="absolute -bottom-6 right-4 flex h-28 w-28 items-center justify-center rounded-full bg-card text-center shadow-warm ring-1 ring-primary/15">
              <p className="font-serif text-[10px] uppercase leading-tight tracking-[0.25em] text-foreground">
                Le<br/>
                <span className="italic text-primary">Grand</span><br/>
                Jour
              </p>
            </span>
          </div>
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-primary/40" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-primary">
                06 — Mariage
              </span>
            </div>
            <h2 className="mt-5 font-serif text-4xl leading-[1.05] text-foreground sm:text-5xl">
              Votre journée,
              <br />
              <span className="italic text-primary">notre attention.</span>
            </h2>
            <p className="mt-7 text-base leading-relaxed text-muted-foreground">
              {WEDDING_TEXT}
            </p>
            <Button
              size="lg"
              onClick={() => openModal("Maquillage")}
              className="mt-9 h-12 rounded-full px-8 text-xs uppercase tracking-[0.2em]"
            >
              Préparer mon mariage
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SERVICES } from "./data";
import { Button } from "@/components/ui/button";
import { useReservation } from "./ReservationContext";
import { SectionHeader } from "./SectionHeader";

export function ServicesAccordion() {
  const { openModal } = useReservation();
  return (
    <section id="prestations" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Prestations"
          title="La carte"
          italicWord="des soins"
          rightLabel="04 — Tarifs CFA"
          intro="Toutes nos prestations sont réalisées par notre équipe formée et passionnée. Tarifs exprimés en francs CFA."
        />

        <Accordion
          type="single"
          collapsible
          defaultValue={SERVICES[0].id}
          className="divide-y divide-border border-y border-border"
        >
          {SERVICES.map((cat, i) => (
            <AccordionItem
              key={cat.id}
              value={cat.id}
              className="border-0"
            >
              <AccordionTrigger className="group gap-6 py-6 hover:no-underline">
                <span className="flex items-baseline gap-5 text-left">
                  <span className="font-serif text-xs italic text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-2xl text-foreground transition-colors group-hover:text-primary sm:text-3xl">
                    {cat.title}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-8">
                <ul className="divide-y divide-border/70">
                  {cat.items.map((it) => (
                    <li
                      key={it.label}
                      className="flex items-center justify-between gap-4 py-3"
                    >
                      <span className="text-sm text-foreground">{it.label}</span>
                      <span className="shrink-0 font-serif text-base text-primary">
                        {it.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 flex justify-center">
          <Button
            onClick={() => openModal()}
            size="lg"
            className="h-12 rounded-full px-8 text-xs uppercase tracking-[0.2em]"
          >
            Réserver une prestation
          </Button>
        </div>
      </div>
    </section>
  );
}

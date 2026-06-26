import { Button } from "@/components/ui/button";
import { useReservation } from "./ReservationContext";

export function FinalCTA() {
  const { openModal } = useReservation();

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-12 sm:py-20">
        <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
          Prenez soin de vous.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-primary-foreground/85">
          Offrez-vous un moment chez EDAYE. Notre équipe vous attend.
        </p>
        <Button
          size="lg"
          variant="secondary"
          onClick={() => openModal()}
          className="mt-8 h-12 rounded-full bg-background px-8 text-base text-foreground hover:bg-background/90"
        >
          Réserver maintenant
        </Button>
      </div>
    </section>
  );
}

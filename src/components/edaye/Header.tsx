import { useScrollDirection } from "@/hooks/useScrollDirection";
import { Button } from "@/components/ui/button";
import { useReservation } from "./ReservationContext";
import { cn } from "@/lib/utils";

export function Header() {
  const hidden = useScrollDirection();
  const { openModal } = useReservation();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-transform duration-300 ease-out",
        hidden ? "-translate-y-full pointer-events-none" : "translate-y-0",
      )}
      aria-hidden={hidden}
    >
      <div className="border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <a href="#top" className="flex min-w-0 items-center gap-2">
            <span className="font-serif text-2xl font-medium tracking-tight text-foreground">
              EDAYE
            </span>
            <span className="hidden text-xs uppercase tracking-[0.2em] text-muted-foreground sm:inline">
              Institut de Beauté
            </span>
          </a>

          <nav aria-label="Navigation principale" className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#bouquets" className="transition-colors hover:text-foreground">Bouquets</a>
            <a href="#prestations" className="transition-colors hover:text-foreground">Prestations</a>
            <a href="#galerie" className="transition-colors hover:text-foreground">Galerie</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </nav>

          <Button
            onClick={() => openModal()}
            size="sm"
            aria-label="Réserver un soin"
            className="h-10 rounded-full px-5 text-sm font-medium shadow-sm"
          >
            Réserver
          </Button>
        </div>
      </div>
    </header>
  );
}

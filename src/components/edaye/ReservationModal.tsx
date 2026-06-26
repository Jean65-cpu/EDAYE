import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ReservationForm } from "./ReservationForm";
import { useReservation } from "./ReservationContext";

export function ReservationModal() {
  const { open, prefill, closeModal } = useReservation();

  return (
    <Dialog open={open} onOpenChange={(v) => !v && closeModal()}>
      <DialogContent className="max-h-[90dvh] max-w-lg overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-3xl text-foreground">
            Réserver un soin
          </DialogTitle>
          <DialogDescription>
            Laissez-nous vos coordonnées, nous vous rappelons pour confirmer.
          </DialogDescription>
        </DialogHeader>
        <ReservationForm prefillService={prefill} onSuccess={closeModal} />
      </DialogContent>
    </Dialog>
  );
}

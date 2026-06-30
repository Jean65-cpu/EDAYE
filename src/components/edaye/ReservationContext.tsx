import { createContext, useContext, useState, useMemo, useCallback, type ReactNode } from "react";

interface ReservationContextValue {
  open: boolean;
  prefill: string | null;
  openModal: (prefill?: string) => void;
  closeModal: () => void;
}

const ReservationCtx = createContext<ReservationContextValue | null>(null);

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [prefill, setPrefill] = useState<string | null>(null);

  const openModal = useCallback((p?: string) => {
    setPrefill(p ?? null);
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => setOpen(false), []);

  const value = useMemo<ReservationContextValue>(
    () => ({ open, prefill, openModal, closeModal }),
    [open, prefill, openModal, closeModal],
  );

  return (
    <ReservationCtx.Provider value={value}>
      {children}
    </ReservationCtx.Provider>
  );
}

export function useReservation(): ReservationContextValue {
  const ctx = useContext(ReservationCtx);
  if (!ctx) throw new Error("useReservation must be used within ReservationProvider");
  return ctx;
}

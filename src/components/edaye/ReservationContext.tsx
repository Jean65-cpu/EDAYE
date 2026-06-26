import { createContext, useContext, useState, type ReactNode } from "react";

type Ctx = {
  open: boolean;
  prefill: string | null;
  openModal: (prefill?: string) => void;
  closeModal: () => void;
};

const ReservationCtx = createContext<Ctx | null>(null);

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [prefill, setPrefill] = useState<string | null>(null);

  return (
    <ReservationCtx.Provider
      value={{
        open,
        prefill,
        openModal: (p) => {
          setPrefill(p ?? null);
          setOpen(true);
        },
        closeModal: () => setOpen(false),
      }}
    >
      {children}
    </ReservationCtx.Provider>
  );
}

export function useReservation() {
  const ctx = useContext(ReservationCtx);
  if (!ctx) throw new Error("useReservation must be used within ReservationProvider");
  return ctx;
}

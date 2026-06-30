import { useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon, Check, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import type { Bouquet } from "@/types";
import { useWhatsAppReservation } from "@/hooks/useWhatsAppReservation";

interface BouquetReservationModalProps {
  bouquet: Bouquet | null;
  open: boolean;
  onClose: () => void;
}

function BouquetSummary({ bouquet }: { bouquet: Bouquet }) {
  const services = bouquet.description.split(" + ");
  return (
    <div className="rounded-2xl border border-primary/25 bg-primary/5 p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 shrink-0 text-primary" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-primary">
              Forfait sélectionné
            </span>
          </div>
          <p className="mt-1 font-serif text-2xl italic text-foreground">{bouquet.name}</p>
        </div>
        <p className="font-serif text-2xl text-primary shrink-0">{bouquet.price}</p>
      </div>
      <ul className="mt-3 flex flex-wrap gap-2">
        {services.map((s) => (
          <li
            key={s}
            className="rounded-full border border-primary/20 bg-background px-3 py-1 text-xs text-foreground"
          >
            {s.trim()}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BouquetForm({
  bouquet,
  onSuccess,
}: {
  bouquet: Bouquet;
  onSuccess: () => void;
}) {
  const [prenom, setPrenom] = useState("");
  const [tel, setTel] = useState("");
  const [date, setDate] = useState<Date | undefined>();
  const [heure, setHeure] = useState("");
  const [msg, setMsg] = useState("");

  const { done, submit } = useWhatsAppReservation({
    successDelay: 1600,
    onSuccess,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit({
      prenom,
      tel,
      date,
      msg,
      bouquetName: bouquet.name,
      bouquetPrice: bouquet.price,
      bouquetDescription: bouquet.description,
      heure,
    });
  };

  if (done) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-warm">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="mt-4 font-serif text-2xl text-foreground">Parfait !</h3>
        <p className="mt-2 max-w-xs text-sm text-muted-foreground">
          WhatsApp s'est ouvert avec votre message. Nous confirmons votre réservation très vite.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="bf-prenom">Prénom *</Label>
          <Input
            id="bf-prenom"
            required
            placeholder="Votre prénom"
            autoComplete="given-name"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bf-tel">WhatsApp / Téléphone *</Label>
          <Input
            id="bf-tel"
            type="tel"
            required
            placeholder="+228 ..."
            autoComplete="tel"
            inputMode="tel"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Date souhaitée *</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                type="button"
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4 shrink-0" />
                {date
                  ? format(date, "EEE d MMM", { locale: fr })
                  : "Choisir une date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                locale={fr}
                disabled={(d) =>
                  d.getDay() === 1 ||
                  d < new Date(new Date().setHours(0, 0, 0, 0))
                }
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
          <p className="text-xs text-muted-foreground">Fermé le lundi.</p>
        </div>

        <div className="space-y-2">
          <Label>Heure souhaitée *</Label>
          <Select value={heure} onValueChange={setHeure} required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choisir un créneau" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="08h00">08h00</SelectItem>
              <SelectItem value="09h00">09h00</SelectItem>
              <SelectItem value="10h00">10h00</SelectItem>
              <SelectItem value="11h00">11h00</SelectItem>
              <SelectItem value="14h00">14h00</SelectItem>
              <SelectItem value="15h00">15h00</SelectItem>
              <SelectItem value="16h00">16h00</SelectItem>
              <SelectItem value="17h00">17h00</SelectItem>
              <SelectItem value="18h00">18h00</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="bf-msg">Message ou précision (optionnel)</Label>
        <Textarea
          id="bf-msg"
          placeholder="Occasion spéciale, demande particulière…"
          rows={3}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="h-12 w-full rounded-full text-sm font-medium uppercase tracking-[0.12em]"
      >
        Envoyer par WhatsApp
      </Button>
    </form>
  );
}

export function BouquetReservationModal({ bouquet, open, onClose }: BouquetReservationModalProps) {
  if (!bouquet) return null;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className={cn(
          "max-w-lg overflow-y-auto",
          "max-sm:fixed max-sm:inset-x-0 max-sm:bottom-0 max-sm:top-auto max-sm:max-h-[92dvh] max-sm:translate-x-0 max-sm:translate-y-0 max-sm:rounded-b-none max-sm:rounded-t-2xl",
          "sm:max-h-[90dvh]",
        )}
      >
        <DialogHeader>
          <DialogTitle className="font-serif text-3xl text-foreground">
            Réserver ce forfait
          </DialogTitle>
          <DialogDescription>
            Votre réservation sera envoyée directement via WhatsApp.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-5 pb-4">
          <BouquetSummary bouquet={bouquet} />
          <BouquetForm bouquet={bouquet} onSuccess={onClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

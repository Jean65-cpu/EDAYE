import { useState, useEffect } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon, Check } from "lucide-react";
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
import { cn } from "@/lib/utils";
import { PRESTATION_OPTIONS, CONTACT } from "./data";

type Props = {
  prefillService?: string | null;
  onSuccess?: () => void;
};

export function ReservationForm({ prefillService, onSuccess }: Props) {
  const [prenom, setPrenom] = useState("");
  const [tel, setTel] = useState("");
  const [service, setService] = useState<string>("");
  const [date, setDate] = useState<Date | undefined>();
  const [creneau, setCreneau] = useState<string>("");
  const [msg, setMsg] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (prefillService) setService(prefillService);
  }, [prefillService]);

  const creneauLabel: Record<string, string> = {
    matin: "Matin (08h – 12h)",
    "apres-midi": "Après-midi (14h – 19h)",
    soir: "Soirée (vendredi & samedi · jusqu'à 21h)",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const dateStr = date
      ? format(date, "EEEE d MMMM yyyy", { locale: fr })
      : "À définir";

    const lines = [
      "Bonjour EDAYE 👋, je souhaite réserver un soin.",
      "",
      `👤 Prénom : ${prenom}`,
      `📞 Téléphone : ${tel}`,
      `💆 Prestation : ${service}`,
      `📅 Date : ${dateStr}`,
      `🕐 Créneau : ${creneau ? creneauLabel[creneau] : "Non précisé"}`,
      ...(msg.trim() ? [`📝 Précisions : ${msg.trim()}`] : []),
    ];

    const waText = encodeURIComponent(lines.join("\n"));
    const waNumber = CONTACT.phones[0].tel.replace("+", "");
    const waUrl = `https://wa.me/${waNumber}?text=${waText}`;

    window.open(waUrl, "_blank", "noreferrer");

    setDone(true);
    setTimeout(() => onSuccess?.(), 1400);
  };

  if (done) {
    return (
      <div className="rounded-2xl bg-muted p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-7 w-7" />
        </div>
        <h3 className="font-serif text-2xl text-foreground">Merci !</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Votre demande a bien été envoyée sur WhatsApp. Nous vous confirmons
          votre rendez-vous très vite.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="rf-prenom">Prénom *</Label>
          <Input
            id="rf-prenom"
            required
            placeholder="Votre prénom"
            autoComplete="given-name"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="rf-tel">Téléphone *</Label>
          <Input
            id="rf-tel"
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

      <div className="space-y-2">
        <Label>Prestation souhaitée *</Label>
        <Select value={service} onValueChange={setService} required>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choisir une prestation" />
          </SelectTrigger>
          <SelectContent>
            {PRESTATION_OPTIONS.map((o) => (
              <SelectItem key={o} value={o}>
                {o}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "EEEE d MMMM", { locale: fr }) : "Choisir une date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                locale={fr}
                disabled={(d) =>
                  d.getDay() === 1 || d < new Date(new Date().setHours(0, 0, 0, 0))
                }
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
          <p className="text-xs text-muted-foreground">Les lundis sont fermés.</p>
        </div>

        <div className="space-y-2">
          <Label>Créneau *</Label>
          <Select value={creneau} onValueChange={setCreneau} required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Matin ou après-midi" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="matin">Matin (08h – 12h)</SelectItem>
              <SelectItem value="apres-midi">Après-midi (14h – 19h)</SelectItem>
              <SelectItem value="soir">Soirée (vendredi & samedi · jusqu'à 21h)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="rf-msg">Précisions (optionnel)</Label>
        <Textarea
          id="rf-msg"
          placeholder="Une demande particulière, une occasion ?"
          rows={3}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
      </div>

      <Button
        type="submit"
        className="h-12 w-full text-base font-medium"
        size="lg"
      >
        Envoyer ma demande via WhatsApp
      </Button>
    </form>
  );
}

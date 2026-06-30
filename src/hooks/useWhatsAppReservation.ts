import { useState, useCallback } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CONTACT } from "@/components/edaye/data";

// ── Types ────────────────────────────────────────

interface BaseFields {
  prenom: string;
  tel: string;
  date: Date | undefined;
  msg: string;
}

interface ReservationFields extends BaseFields {
  service: string;
  creneau: string;
}

interface BouquetFields extends BaseFields {
  bouquetName: string;
  bouquetPrice: string;
  bouquetDescription: string;
  heure: string;
}

type WhatsAppFields = ReservationFields | BouquetFields;

// ── Helpers ──────────────────────────────────────

const CRENEAU_LABELS: Record<string, string> = {
  matin: "Matin (08h – 12h)",
  "apres-midi": "Après-midi (14h – 19h)",
  soir: "Soirée (vendredi & samedi · jusqu'à 21h)",
};

function formatDate(date: Date | undefined): string {
  return date ? format(date, "EEEE d MMMM yyyy", { locale: fr }) : "À définir";
}

function buildReservationMessage(fields: ReservationFields): string {
  const lines = [
    "Bonjour EDAYE 👋, je souhaite réserver un soin.",
    "",
    `👤 Prénom : ${fields.prenom}`,
    `📞 Téléphone : ${fields.tel}`,
    `💆 Prestation : ${fields.service}`,
    `📅 Date : ${formatDate(fields.date)}`,
    `🕐 Créneau : ${fields.creneau ? CRENEAU_LABELS[fields.creneau] ?? fields.creneau : "Non précisé"}`,
    ...(fields.msg.trim() ? [`📝 Précisions : ${fields.msg.trim()}`] : []),
  ];
  return lines.join("\n");
}

function buildBouquetMessage(fields: BouquetFields): string {
  const lines = [
    `Bonjour EDAYE 👋 Je souhaite réserver le bouquet *${fields.bouquetName}*.`,
    "",
    `🌸 *Bouquet* : ${fields.bouquetName}`,
    `💰 *Prix* : ${fields.bouquetPrice}`,
    `✨ *Prestations* : ${fields.bouquetDescription}`,
    "",
    `👤 *Prénom* : ${fields.prenom}`,
    `📞 *Téléphone* : ${fields.tel}`,
    `📅 *Date souhaitée* : ${formatDate(fields.date)}`,
    `🕐 *Heure* : ${fields.heure || "Non précisée"}`,
    ...(fields.msg.trim() ? [`📝 *Message* : ${fields.msg.trim()}`] : []),
  ];
  return lines.join("\n");
}

function isBouquetFields(fields: WhatsAppFields): fields is BouquetFields {
  return "bouquetName" in fields;
}

// ── Hook ─────────────────────────────────────────

interface UseWhatsAppReservationOptions {
  /** Delay in ms before calling onSuccess after submission. */
  successDelay?: number;
  onSuccess?: () => void;
}

export function useWhatsAppReservation({
  successDelay = 1400,
  onSuccess,
}: UseWhatsAppReservationOptions = {}) {
  const [done, setDone] = useState(false);

  const submit = useCallback(
    (fields: WhatsAppFields) => {
      const message = isBouquetFields(fields)
        ? buildBouquetMessage(fields)
        : buildReservationMessage(fields);

      const waText = encodeURIComponent(message);
      const waNumber = CONTACT.phones[0].tel.replace("+", "");
      const waUrl = `https://wa.me/${waNumber}?text=${waText}`;

      window.open(waUrl, "_blank", "noreferrer");

      setDone(true);
      if (onSuccess) {
        setTimeout(onSuccess, successDelay);
      }
    },
    [onSuccess, successDelay],
  );

  return { done, submit } as const;
}

export { CRENEAU_LABELS };

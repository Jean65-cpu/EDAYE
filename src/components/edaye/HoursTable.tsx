import { HOURS } from "./data";
import { cn } from "@/lib/utils";

export function HoursTable() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h3 className="font-serif text-xl text-foreground">Horaires d'ouverture</h3>
      <ul className="mt-4 space-y-2">
        {HOURS.map((h) => (
          <li
            key={h.day}
            className={cn(
              "flex items-center justify-between gap-4 rounded-lg px-3 py-2 text-sm",
              h.highlight && "bg-primary/8",
              h.closed && "text-muted-foreground/70",
            )}
          >
            <span className="font-medium">{h.day}</span>
            <span className="flex items-center gap-2 text-right">
              <span className={cn(h.highlight && "text-primary font-medium")}>
                {h.hours}
              </span>
              {h.highlight && (
                <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary-foreground">
                  Ouvert
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

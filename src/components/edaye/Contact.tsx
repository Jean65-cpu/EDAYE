import { MapPin, Phone, Mail, type LucideIcon } from "lucide-react";
import { CONTACT } from "./data";
import { HoursTable } from "./HoursTable";
import { ReservationForm } from "./ReservationForm";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Contact</p>
          <h2 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">
            Venez nous rencontrer
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col gap-6">
            <div className="grid gap-4">
              <ContactRow icon={MapPin} title="Adresse">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {CONTACT.address}
                </p>
              </ContactRow>

              <ContactRow icon={Phone} title="Téléphone">
                <div className="flex flex-col text-sm">
                  {CONTACT.phones.map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      className="text-foreground transition-colors hover:text-primary"
                    >
                      {p.display}
                    </a>
                  ))}
                </div>
              </ContactRow>

              <ContactRow icon={Mail} title="Email">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm text-foreground transition-colors hover:text-primary"
                >
                  {CONTACT.email}
                </a>
              </ContactRow>
            </div>

            <HoursTable />
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h3 className="font-serif text-2xl text-foreground">Demande de rendez-vous</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Remplissez ce formulaire, nous vous recontactons rapidement.
            </p>
            <div className="mt-6">
              <ReservationForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ContactRowProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

function ContactRow({ icon: Icon, title, children }: ContactRowProps) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{title}</p>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}

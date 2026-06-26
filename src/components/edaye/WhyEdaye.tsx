import { CalendarHeart, Sparkles, HandHeart, Leaf } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const ITEMS = [
  {
    icon: CalendarHeart,
    title: "Ouvert le dimanche",
    text: "Le seul jour rien que pour vous, sans contrainte d'agenda.",
  },
  {
    icon: Sparkles,
    title: "Expertise complète",
    text: "Coiffure, soins, maquillage, ongles, massage : un seul institut.",
  },
  {
    icon: HandHeart,
    title: "Accueil sur-mesure",
    text: "Conseils personnalisés à chaque visite, pour vous sentir unique.",
  },
  {
    icon: Leaf,
    title: "Produits soignés",
    text: "Soins doux et adaptés à toutes les carnations et types de peau.",
  },
];

export function WhyEdaye() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="L'institut"
          title="Pourquoi choisir"
          italicWord="EDAYE"
          rightLabel="02 — Notre signature"
        />

        <div className="grid divide-y divide-border border-y border-border sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="group relative flex flex-col p-8 transition-colors hover:bg-cream"
            >
              <span className="absolute right-6 top-6 font-serif text-xs italic text-muted-foreground/60">
                0{i + 1}
              </span>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-serif text-2xl text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import facial from "@/assets/g-facial.jpg";
import mani from "@/assets/g-mani.jpg";
import bride from "@/assets/g-bride.jpg";
import massage from "@/assets/g-massage.jpg";
import { SectionHeader } from "./SectionHeader";

const IMAGES = [
  { src: facial, alt: "Soin visage éclat", className: "row-span-2" },
  { src: mani, alt: "Manucure raffinée" },
  { src: bride, alt: "Maquillage mariée" },
  { src: massage, alt: "Massage relaxant", className: "col-span-2" },
];

export function Gallery() {
  return (
    <section id="galerie" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Galerie"
          title="Moments"
          italicWord="à l'institut"
          rightLabel="05 — Atmosphère"
        />

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[240px] sm:grid-cols-4 sm:gap-4">
          {IMAGES.map((img, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl bg-muted ${img.className ?? ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover grayscale-[15%] transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
              />
              <figcaption className="absolute bottom-3 left-3 rounded-full bg-background/85 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

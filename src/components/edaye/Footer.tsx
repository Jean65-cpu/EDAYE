import { Instagram, Facebook } from "lucide-react";
import { CONTACT, BRAND } from "./data";

export function Footer() {
  return (
    <footer id="footer-edaye" className="border-t border-border bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-serif text-2xl text-foreground">{BRAND.name}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Institut de Beauté
            </p>
            <p className="mt-4 font-serif text-lg italic text-primary">
              « {BRAND.tagline} »
            </p>
          </div>

          <nav className="text-sm">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Navigation
            </p>
            <ul className="mt-3 space-y-2">
              <li><a href="#bouquets" className="hover:text-primary">Bouquets</a></li>
              <li><a href="#prestations" className="hover:text-primary">Prestations</a></li>
              <li><a href="#galerie" className="hover:text-primary">Galerie</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </nav>

          <div className="text-sm">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Suivez-nous
            </p>
            <div className="mt-3 flex gap-3">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              @edaye_salon · Lomé, Togo
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} EDAYE Institut de Beauté. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}

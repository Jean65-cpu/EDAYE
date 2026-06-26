
## Reformulation du brief

Refonte intégrale du site **EDAYE Institut de Beauté** (Lomé) — actuellement basé sur un no-code lent et cassé. Objectif : un site vitrine **mobile-first**, rapide, élégant (codes luxe discret terracotta/crème/doré), inspirant la confiance et poussant à la **réservation** (modale + WhatsApp flottant). Tout le contenu (slogan, coordonnées, horaires, ~80 tarifs, 3 bouquets, textes mariage/conseils) provient strictement du brief — aucune invention.

**Framework** : TanStack Start (déjà en place) + Tailwind v4 + shadcn/ui (Accordion, Dialog, Select, Calendar pour le date picker excluant les lundis). Animations en CSS pur / Motion léger pour le sticky header type X/Twitter. Aucune lib lourde.

**Éléments manquants → placeholders explicites** :
- Photos réelles de l'institut (hero, galerie, ambiances) → placeholders élégants commentés `<!-- À REMPLACER PAR PHOTO RÉELLE -->`
- Vrais avis clients (note, nombre, témoignages) → 3 cartes placeholder
- Service d'envoi du formulaire → simulation propre + `<!-- À CONNECTER -->`
- URL Facebook exacte → lien `#` commenté

---

## Architecture des fichiers

```text
src/routes/
  __root.tsx                  → meta tags, viewport, fonts <link>, FloatingButtons, ReservationModalProvider
  index.tsx                   → page unique, compose toutes les sections + head() SEO complet
src/components/edaye/
  Header.tsx                  → logo + nav + CTA Réserver sticky type X (show/hide au scroll)
  Hero.tsx                    → message marque + image + CTA
  BouquetsFeatured.tsx        → 3 cartes WOEZON / MIAGBOFA (badge Recommandé) / TSIMIAGBO
  WhyEdaye.tsx                → 4 différenciateurs (dimanche ouvert, expertise, accueil, cadre)
  ServicesAccordion.tsx       → 8 catégories, une ouverte à la fois, prix fond net
  Gallery.tsx                 → grille placeholders élégants
  Reviews.tsx                 → note moyenne + cartes témoignages (placeholders marqués)
  GrandJour.tsx               → section mariage
  BeautyTip.tsx               → article tomate/acné
  Contact.tsx                 → 2 colonnes : infos+horaires / ReservationForm
  FinalCTA.tsx                → bloc "Prenez soin de vous"
  Footer.tsx                  → réseaux + nav + copyright
  ReservationForm.tsx         → composant unique réutilisé (modale + section contact)
  ReservationModal.tsx        → Dialog shadcn enveloppant ReservationForm
  FloatingButtons.tsx         → WhatsApp (toujours) + Donner un avis (IntersectionObserver footer)
  StickyReserveBar.tsx        → barre Réserver mobile, hide/show au scroll
  HoursTable.tsx              → tableau horaires avec dimanche badge terracotta
  PriceRow.tsx                → ligne prix sur fond net
src/hooks/
  useScrollDirection.ts       → détecte scroll up/down pour header type X
  useFooterInView.ts          → IntersectionObserver pour bouton avis
src/styles.css                → tokens design (terracotta, crème, doré, brun foncé)
```

## Design system (src/styles.css, OKLCH)

- `--background` crème ≈ oklch(0.97 0.015 70)
- `--foreground` brun foncé ≈ oklch(0.25 0.04 40) — contraste plein soleil
- `--primary` terracotta ≈ oklch(0.58 0.13 40)
- `--accent` doré discret ≈ oklch(0.78 0.10 80)
- `--muted` beige ≈ oklch(0.93 0.02 70)
- Fonts via `<link>` dans __root : **Cormorant Garamond** (titres serif) + **Inter** (corps). Familles déclarées dans `@theme`.
- Radius doux (`--radius: 0.75rem`), ombres chaudes.

## Comportements critiques (règles du brief)

- **StickyReserveBar** : `translateY(-100%)` au scroll down, `translateY(0)` au scroll up. Quand cachée → `pointer-events: none` impératif.
- **Bouton avis flottant** : `opacity-0 pointer-events-none` par défaut, devient actif uniquement quand Footer `isIntersecting`.
- **Tous les éléments invisibles** (modale fermée, boutons masqués) → `pointer-events: none` systématique.
- **Tap-first** : toutes interactions sur `onClick`, jamais `onMouseEnter` seul. Hover purement décoratif.
- **Accordéon prestations** : `Accordion type="single" collapsible` shadcn, contenu déplié juste sous la catégorie cliquée. Prix dans des `PriceRow` à fond `bg-background` plein, zéro transparence parasite.
- **Modale réservation** : Dialog shadcn (Échap + clic hors + croix), `max-h-[90dvh] overflow-y-auto` pour clavier mobile.
- **Date picker** : Calendar shadcn avec `disabled={(d) => d.getDay() === 1}` (lundis exclus) + `pointer-events-auto`.
- **Liens contacts** : tous `tel:+22893557790`, `tel:+22899745021`, `mailto:edayesarl@gmail.com`, `https://wa.me/22893557790`.
- **Section Contact** : trois cercles icônes identiques (`flex items-center justify-center`, même taille). Aucune carte/map (résidu supprimé). Deux colonnes équilibrées (`lg:grid-cols-2 items-stretch`).
- **Badge "Dimanche ouvert"** : petit pill terracotta arrondi, présent dans HoursTable + un endroit visible (hero ou header).
- **Badge "Recommandé"** sur MIAGBOFA : carte parente `relative`, badge `absolute -top-2 right-4` contenu dans la carte.

## SEO / meta (index + __root)

- `__root.tsx` : viewport, charset, og:site_name "EDAYE Institut de Beauté", JSON-LD `LocalBusiness` (BeautySalon) avec adresse, téléphones, horaires structurés.
- `index.tsx` head() : title "EDAYE Institut de Beauté — Du soin au besoin | Lomé", description orientée réservation, og:title/description, canonical `/`.

## Performance

- `loading="lazy"` + `decoding="async"` sur toutes images sauf hero (`fetchpriority="high"`).
- Pas de carousel lib, pas de framework anim lourd.
- Tailwind v4 purge automatique.

## Contenu — sources de vérité (extraits stockés en constantes)

```text
src/components/edaye/data.ts
  BRAND, CONTACT, HOURS, SERVICES (8 catégories), BOUQUETS (3), 
  WEDDING_TEXT, BEAUTY_TIP
```

Tous les prix et libellés sont copiés verbatim du brief. Aucun tarif inventé.

## Hors-scope (à confirmer avant build)

- Connexion réelle du formulaire (email, Supabase, service tiers) → simulation pour l'instant.
- Upload des vraies photos → placeholders.
- Vrais avis Google → 3 placeholders marqués.

---

## Question avant implémentation

Le plan ci-dessus suit ton brief à la lettre. Deux points à confirmer rapidement :

1. **Photos hero/galerie** : je pars sur des placeholders élégants (blocs crème + filigrane logo) marqués `<!-- À REMPLACER -->`, ou tu préfères que je génère des images d'ambiance institut (mains, soin visage, vernis) via le générateur d'images intégré pour avoir un rendu présentable immédiatement ?
2. **Formulaire** : je simule la soumission (toast de confirmation) — OK pour activer Lovable Cloud plus tard pour stocker les réservations, ou tu préfères un simple envoi WhatsApp pré-rempli en attendant ?

Tu peux dire "valide et lance" et je construis avec placeholders + simulation par défaut.

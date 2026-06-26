import { createFileRoute } from "@tanstack/react-router";
import { ReservationProvider } from "@/components/edaye/ReservationContext";
import { ReservationModal } from "@/components/edaye/ReservationModal";
import { Header } from "@/components/edaye/Header";
import { Hero } from "@/components/edaye/Hero";
import { BouquetsFeatured } from "@/components/edaye/BouquetsFeatured";
import { WhyEdaye } from "@/components/edaye/WhyEdaye";
import { ServicesAccordion } from "@/components/edaye/ServicesAccordion";
import { Gallery } from "@/components/edaye/Gallery";
import { Reviews } from "@/components/edaye/Reviews";
import { GrandJour } from "@/components/edaye/GrandJour";
import { BeautyTip } from "@/components/edaye/BeautyTip";
import { Contact } from "@/components/edaye/Contact";
import { FinalCTA } from "@/components/edaye/FinalCTA";
import { Footer } from "@/components/edaye/Footer";
import { FloatingButtons } from "@/components/edaye/FloatingButtons";
import { QuoteBand } from "@/components/edaye/QuoteBand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EDAYE Institut de Beauté — Du soin au besoin | Lomé" },
      {
        name: "description",
        content:
          "Institut de beauté à Lomé : coiffure, soins visage, manucure, massage, maquillage mariage. Ouvert le dimanche. Réservez en ligne ou par WhatsApp.",
      },
      { property: "og:title", content: "EDAYE Institut de Beauté — Du soin au besoin" },
      {
        property: "og:description",
        content:
          "Coiffure, soins, maquillage et massages à Lomé. Ouvert le dimanche. Réservez votre rendez-vous.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <ReservationProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <BouquetsFeatured />
          <WhyEdaye />
          <ServicesAccordion />
          <Gallery />
          <QuoteBand />
          <Reviews />
          <GrandJour />
          <BeautyTip />
          <Contact />
          <FinalCTA />
        </main>
        <Footer />
        <FloatingButtons />
        <ReservationModal />
      </div>
    </ReservationProvider>
  );
}

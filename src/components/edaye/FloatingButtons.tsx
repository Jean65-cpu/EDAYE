import { useEffect, useState } from "react";
import { MessageCircle, Star } from "lucide-react";
import { CONTACT } from "./data";
import { cn } from "@/lib/utils";

export function FloatingButtons() {
  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("footer-edaye");
    if (!footer) return;
    const obs = new IntersectionObserver(
      ([entry]) => setShowReview(entry.isIntersecting),
      { rootMargin: "0px 0px -10% 0px" },
    );
    obs.observe(footer);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Contacter sur WhatsApp"
        className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-warm transition-transform hover:scale-105 active:scale-95"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      <a
        href={CONTACT.googleReviews}
        target="_blank"
        rel="noreferrer"
        aria-label="Donner un avis"
        aria-hidden={!showReview}
        className={cn(
          "fixed bottom-24 right-5 z-30 flex h-12 items-center gap-2 rounded-full bg-foreground px-5 text-sm text-background shadow-soft transition-all duration-300",
          showReview
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        <Star className="h-4 w-4 fill-accent text-accent" strokeWidth={1.5} />
        Donner un avis
      </a>
    </>
  );
}

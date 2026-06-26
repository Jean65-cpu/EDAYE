import { useEffect, useState } from "react";

export function useScrollDirection(threshold = 8) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const diff = y - lastY;
        if (Math.abs(diff) > threshold) {
          if (y < 80) {
            setHidden(false);
          } else if (diff > 0) {
            setHidden(true);
          } else {
            setHidden(false);
          }
          lastY = y;
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return hidden;
}

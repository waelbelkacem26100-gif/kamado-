"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  /* Stocker la référence pour un cleanup propre */
  const rafCallbackRef = useRef<((time: number) => void) | null>(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
      /* Pas de Lenis sur mobile, juste rafraîchir les positions ScrollTrigger */
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    /* Référence stable pour le cleanup */
    const rafCallback = (time: number) => lenis.raf(time * 1000);
    rafCallbackRef.current = rafCallback;
    gsap.ticker.add(rafCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      if (rafCallbackRef.current) {
        gsap.ticker.remove(rafCallbackRef.current);
        rafCallbackRef.current = null;
      }
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

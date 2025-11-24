// lib/lenis.ts
"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    // On vérifie qu’on est bien côté client avant d’instancier Lenis
    if (typeof window === "undefined") return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // lerp: 0.07, // décommente pour un scroll encore plus cinéma
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Nettoyage au démontage du composant
    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
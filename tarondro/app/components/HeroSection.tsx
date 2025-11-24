"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 150, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.4, ease: "power3.out" }
    );

    gsap.fromTo(
      subtitleRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.4, delay: 0.4, ease: "power3.out" }
    );

    gsap.fromTo(
      textRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.4, delay: 0.8, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0" />

      <div className="relative z-10 text-center px-6 md:px-20">
        {/* TITRE */}
        <motion.h1
          ref={titleRef}
          className="text-2xl md:text-5xl font-extrabold tracking-tight text-black"
        >
          TARONDRO CONCEPT
        </motion.h1>

        {/* SOUS-TITRE */}
        <motion.h2
          ref={subtitleRef}
          className="text-2xl md:text-4xl mt-6 text-[#558B2F] font-semibold"
        >
          Refonte de l’identité visuelle
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          ref={textRef}
          className="text-lg md:text-2xl max-w-3xl mx-auto mt-10 text-black/80 leading-relaxed"
        >
          Refonte complète de l’identité visuelle de Tarondro Concept, une start-up
          basée à Antananarivo désirant moderniser son image en 2024.  
          L’objectif : créer une identité contemporaine, chaleureuse et authentique
          tout en préservant l’héritage artistique du visuel.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <a
            href="#projet"
            className="px-6 py-3 border border-[#558B2F] text-[#558B2F] hover:bg-[#558B2F] hover:text-black transition rounded-full tracking-wide"
          >
            DÉCOUVRIR LE PROJET ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
}

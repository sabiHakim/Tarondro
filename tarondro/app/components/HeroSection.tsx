"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

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

    gsap.fromTo(
      imageRef.current,
      { y: 100, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1.4, delay: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-10 px-6 md:px-20 relative overflow-hidden">
      
      {/* --- TEXTES --- */}
      <div className="relative z-10 text-center max-w-2xl">
        <motion.h1
          ref={titleRef}
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-black"
        >
          TARONDRO CONCEPT
        </motion.h1>

        <motion.h2
          ref={subtitleRef}
          className="text-2xl md:text-4xl mt-6 text-[#558B2F] font-semibold"
        >
          Refonte de l’identité visuelle
        </motion.h2>

        <motion.p
          ref={textRef}
          className="text-lg md:text-2xl mt-10 text-black/80 leading-relaxed"
        >
          Refonte complète de l’identité visuelle de Tarondro Concept, une start-up
          basée à Antananarivo désirant moderniser son image en 2024.  
          L’objectif : créer une identité moderne, chaleureuse et authentique.
        </motion.p>

        <motion.div
          className="mt-12"
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

      {/* --- IMAGE EN BAS --- */}
      <motion.div ref={imageRef} className="relative w-full max-w-lg mt-10">
        <Image
          src="/sec_1.png"
          alt="Tarondro Concept visual"
          width={500}
          height={500}
          className="object-contain rounded-xl shadow-xl mx-auto"
        />
      </motion.div>
    </section>
  );
}

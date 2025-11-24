// components/About.tsx
"use client";

import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      x: 0,
      opacity: 1,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section id="about" className="py-40 px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-9xl font-bold mb-20"
        >
          À propos
        </motion.h2>

        <div ref={textRef} className="translate-x-96 opacity-0">
          <p className="text-3xl md:text-5xl leading-tight font-light">
            Nous créons des expériences digitales uniques qui marquent les esprits.
            <br /><br />
            Basés entre Paris et le monde, nous accompagnons les marques audacieuses
            dans leur transformation digitale avec une approche créative et technique
            sans compromis.
          </p>
        </div>
      </div>
    </section>
  );
}
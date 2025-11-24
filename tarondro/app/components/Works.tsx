// components/Works.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const works = [
  { title: "Projet 1", category: "Branding" },
  { title: "Projet 2", category: "Web Design" },
  { title: "Projet 3", category: "Motion" },
  { title: "Projet 4", category: "Développement" },
  { title: "Projet 5", category: "3D" },
  { title: "Projet 6", category: "Direction Artistique" },
];

export default function Works() {
  const containerRef = useRef(null);

  return (
    <section id="works" className="py-32 px-8" ref={containerRef}>
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-8xl font-bold text-center mb-20"
      >
        Nos réalisations
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {works.map((work, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -20 }}
            className="group relative overflow-hidden rounded-3xl bg-gray-900 aspect-video cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <Image
              src={`/placeholder-${i + 1}.jpg`} // remplace par tes images
              alt={work.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-3xl font-bold">{work.title}</h3>
              <p className="text-lg opacity-70">{work.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
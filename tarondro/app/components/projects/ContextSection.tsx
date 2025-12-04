"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ContextSection({
  text,
  imageSrc = "/images/placeholder.jpg",
}: {
  text: string;
  imageSrc?: string;
}) {
  return (
    <section id="about" className="py-32 bg-white mt-3">
      <div className="max-w-6xl mx-auto px-8">
        {/* TITRE – lettre par lettre + ligne verte */}
        <div className="relative inline-block left-1/2 -translate-x-1/2 mb-20">
          <motion.h2
            className="text-5xl md:text-5xl lg:text-7xl font-black text-center text-neutral-900"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.04,
                },
              },
            }}
          >
            {"Contexte du projet".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

          {/* Ligne verte animée */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "20rem" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="h-2 bg-[#558B2F] rounded-full mt-6 mx-auto"
          />
        </div>

        {/* CONTENU – texte ligne par ligne + image */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* TEXTE À GAUCHE – ligne par ligne */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="space-y-6 text-xl leading-relaxed text-neutral-700"
          >
            {text.split("\n").map((line, i) => (
              <motion.p
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.8 }}
                className="block"
              >
                {line || <br />}
              </motion.p>
            ))}
          </motion.div>

          {/* IMAGE À DROITE – scale doux */}
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            whileHover={{ rotateY: 8, rotateX: 8 }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative"
          >
            <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-transparent group-hover:ring-[#558B2F] transition-all duration-500">
              <Image
                src={imageSrc}
                alt="Contexte du projet"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
